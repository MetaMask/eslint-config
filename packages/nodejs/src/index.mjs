import { createConfig } from '@metamask/eslint-config';
import node from 'eslint-plugin-n';
import globals from 'globals';
import { createRequire } from 'module';

// TODO: Use import attributes when ESLint supports them.
const customRequire = createRequire(import.meta.url);
const environmentRules = customRequire('./environment.json');

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = createConfig({
  name: '@metamask/eslint-config-nodejs',

  extends: [node.configs['flat/recommended']],

  languageOptions: {
    globals: {
      // See comment below.
      ...globals.es2022,
      ...globals.node,
    },

    // The EcmaScript version option here and for `env` above need to be set
    // to the same values as in the base config, or they will be overwritten
    // by the recommended Node.js plugin rules.
    ecmaVersion: 2022,
  },

  rules: {
    ...environmentRules,

    // Possible Errors
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-missing-import': 'off', // Duplicates `import-x/no-unresolved`
    'n/no-missing-require': 'off', // Duplicates `import-x/no-unresolved`
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-unsupported-features/es-syntax': 'off',

    // Stylistic rules
    'n/callback-return': 'error',
    'n/exports-style': 'error',
    'n/global-require': 'error',
    'n/no-mixed-requires': 'error',
    'n/no-process-env': 'error',
    'n/no-restricted-import': 'error',
    'n/no-restricted-require': 'error',
    'n/no-sync': 'error',
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/process': 'error',
    'n/prefer-global/text-decoder': 'error',
    'n/prefer-global/text-encoder': 'error',
    'n/prefer-global/url-search-params': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',

    // Enabled in the base config, but this should be allowed in Node.js
    // projects.
    'import-x/no-nodejs-modules': 'off',
  },
});

export default config;
