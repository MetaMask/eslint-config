#!/usr/bin/env node

const { builtinModules } = require('repl');
const { promises: fs } = require('fs');
const { resolve } = require('path');
const globals = require('globals');

/**
 * The path to write the rules to.
 *
 * @type {string}
 */
const RULES_PATH = resolve(__dirname, '../src/rules.json');

/**
 * A list of messages to use for specific Node.js built-in modules. This will
 * show up in the error message when a restricted import is used.
 *
 * @type {Record<string, string>}
 */
const MESSAGE_OVERRIDES = {
  buffer: `Use 'Uint8Array' instead.`,
  Buffer: `Use 'Uint8Array' instead.`,
  crypto: `Use 'ethereum-cryptography' instead.`,
};

/**
 * Get a rule for a given module name.
 *
 * @param {string} name - The module name.
 * @returns {{ name: string; message: string; }[] | string[]} An array of
 * restricted modules.
 */
const getModuleRule = (name) => {
  if (MESSAGE_OVERRIDES[name]) {
    return [
      {
        name,
        message: MESSAGE_OVERRIDES[name],
      },
      {
        name: `node:${name}`,
        message: MESSAGE_OVERRIDES[name],
      },
    ];
  }

  return [name, `node:${name}`];
};

/**
 * Get a list of restricted globals. This is a list of all globals that are
 * not available in both the browser and Node.js.
 *
 * @returns {{ name: string; message: string; }[] | string[]} An array of
 * restricted globals.
 */
const getGlobals = () => {
  const items = Array.from(
    new Set([...Object.keys(globals.browser), ...Object.keys(globals.node)]),
  );

  // Find all globals that are not in the `shared-node-browser` list, i.e.,
  // globals that are only in the `browser` or `node` list.
  return items
    .filter(
      (item) => !Object.keys(globals['shared-node-browser']).includes(item),
    )
    .map((name) => {
      if (MESSAGE_OVERRIDES[name]) {
        return {
          name,
          message: MESSAGE_OVERRIDES[name],
        };
      }

      return name;
    });
};

const generateRules = () => {
  return {
    // Disallow use of Node.js built-in modules.
    'no-restricted-imports': [
      'error',
      {
        paths: builtinModules.map(getModuleRule).flat(),
      },
    ],
    'no-restricted-globals': ['error', ...getGlobals()],
  };
};

/**
 * Write the rules to the rules file as JSON.
 *
 * @returns {Promise<void>}
 */
const writeRules = async () => {
  const rules = generateRules();
  await fs.writeFile(RULES_PATH, `${JSON.stringify(rules, null, 2)}\n`);
};

writeRules().catch(console.error);
