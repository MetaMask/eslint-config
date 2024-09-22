// @ts-check

// @ts-expect-error - `@babel/eslint-parser` doesn't have TypeScript types.
import babel from '@babel/eslint-parser';
import baseConfigs from '@metamask/eslint-config';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...baseConfigs,
  // TODO:
  // extends: [
  //   '@metamask/eslint-config-nodejs',
  //   '@metamask/eslint-config-jest',
  // ],

  {
    name: 'main',
    languageOptions: {
      ecmaVersion: 2022,

      sourceType: 'module',

      parser: babel,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: ['@babel/plugin-syntax-import-attributes'],
        },
      },
    },

    rules: {
      'import-x/no-dynamic-require': 'off',
      'import-x/no-nodejs-modules': 'off',
      'n/global-require': 'off',
      'n/no-process-exit': 'off',
      'n/no-sync': 'off',
      'n/no-unpublished-require': 'off',
    },

    ignores: ['!.eslint.config.mjs'],
  },
];

export default config;
