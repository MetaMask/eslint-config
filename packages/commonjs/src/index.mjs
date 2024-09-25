import globals from 'globals';
import { createRequire } from 'module';

// TODO: Use import attributes when ESLint supports them.
const customRequire = createRequire(import.meta.url);
const environmentRules = customRequire('./environment.json');

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
