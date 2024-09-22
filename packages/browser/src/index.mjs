import globals from 'globals';

import environmentRules from './environment.json' with { type: 'json' };

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  {
    name: '@metamask/eslint-config-browser',

    files: [
      '**/*.js',
      '**/*.jsx',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.ts',
      '**/*.tsx',
      '**/*.mts',
      '**/*.cts',
      '**/*.mtsx',
      '**/*.ctsx',
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      ...environmentRules,
    },
  },
];

export default config;
