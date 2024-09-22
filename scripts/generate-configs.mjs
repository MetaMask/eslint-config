// @ts-check

import fs from 'fs/promises';
import globals from 'globals';
import { resolve } from 'path';

/**
 * @typedef {keyof import('globals')} Globals
 */

/**
 * @type {Record<string, { location: string; environments: Globals[]; name: string; }>}
 */
const RULES_CONFIG = {
  'shared-node-browser': {
    location: '../packages/base/src/environment.json',
    environments: ['shared-node-browser'],
    name: 'Node.js and browser',
  },
  browser: {
    location: '../packages/browser/src/environment.json',
    environments: ['browser'],
    name: 'browser',
  },
  node: {
    location: '../packages/nodejs/src/environment.json',
    environments: ['node'],
    name: 'Node.js',
  },
  commonjs: {
    location: '../packages/commonjs/src/environment.json',
    environments: ['shared-node-browser', 'commonjs'],
    name: 'Node.js and browser (CommonJS)',
  },
};

/**
 * @type {string[]}
 */
const ALL_RULES = [
  ...Object.values(RULES_CONFIG).reduce((set, { environments }) => {
    for (const environment of environments) {
      Object.keys(globals[environment]).forEach((key) => set.add(key));
    }

    return set;
  }, new Set()),
];

/**
 * Generate rules for a specific ESLint configuration package.
 *
 * @param {object} options - Options.
 * @param {Globals[]} options.environments - The environments to
 * generate rules for.
 * @param {string} options.name - The name of the ESLint configuration.
 * @returns {Record<string, import('eslint').Linter.RuleEntry>} The generated
 * rules.
 */
const generateRules = ({ environments, name }) => {
  /**
   * @type {string[]}
   */
  const environmentGlobals = [];

  for (const environment of environments) {
    environmentGlobals.push(...Object.keys(globals[environment]));
  }
  const restrictedGlobals = ALL_RULES.filter(
    (rule) => !environmentGlobals.includes(rule),
  ).map((rule) => ({
    name: rule,
    message: `This global is not available in the ${name} environment.`,
  }));

  return {
    'no-restricted-globals': ['error', ...restrictedGlobals],
  };
};

/**
 * Write the rules to the rules files as JSON.
 *
 * @returns {Promise<void>}
 */
const writeRules = async () => {
  for (const { location, environments, name } of Object.values(RULES_CONFIG)) {
    const rules = generateRules({ environments, name });

    await fs.writeFile(
      resolve(__dirname, location),
      `${JSON.stringify(rules, null, 2)}\n`,
    );
  }
};

await writeRules();
