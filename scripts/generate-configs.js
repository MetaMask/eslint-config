const { promises: fs } = require('fs');
const globals = require('globals');
const { resolve } = require('path');

/**
 * @type {Record<string, { location: string; environment: string; name: string; }>}
 */
const RULES_CONFIG = {
  'shared-node-browser': {
    location: '../packages/base/src/environment.json',
    environment: 'shared-node-browser',
    name: 'Node.js and browser',
  },
  browser: {
    location: '../packages/browser/src/environment.json',
    environment: 'browser',
    name: 'browser',
  },
  node: {
    location: '../packages/nodejs/src/environment.json',
    environment: 'node',
    name: 'Node.js',
  },
};

/**
 * @type {string[]}
 */
const ALL_RULES = [
  ...Object.values(RULES_CONFIG).reduce((set, { environment }) => {
    Object.keys(globals[environment]).forEach((key) => set.add(key));

    return set;
  }, new Set()),
];

/**
 * Generate rules for a specific environment.
 *
 * @param {string} environment - The environment to generate rules for.
 * @returns {Record<string, Rule>} The generated rules.
 */
const generateRules = (environment) => {
  const environmentGlobals = Object.keys(globals[environment]);
  const restrictedGlobals = ALL_RULES.filter(
    (rule) => !environmentGlobals.includes(rule),
  ).map((rule) => ({
    name: rule,
    message: `This global is not available in the ${RULES_CONFIG[environment].name} environment.`,
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
  for (const { location, environment } of Object.values(RULES_CONFIG)) {
    const rules = generateRules(environment);

    await fs.writeFile(
      resolve(__dirname, location),
      `${JSON.stringify(rules, null, 2)}\n`,
    );
  }
};

writeRules().catch(console.error);
