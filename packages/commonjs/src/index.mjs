import globals from 'globals';

import environmentRules from './environment.json' with { type: 'json' };

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  {
    name: '@metamask/eslint-config-commonjs',

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
        ...globals.commonjs,
      },
    },

    rules: {
      ...environmentRules,
    },
  },
];

export default config;
