// @ts-check

// @ts-expect-error - `@babel/eslint-parser` doesn't have TypeScript types.
import babel from '@babel/eslint-parser';
import base from '@metamask/eslint-config';
import nodejs from '@metamask/eslint-config-nodejs';
import jest from '@metamask/eslint-config-jest';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  ...base,
  ...nodejs,
  ...jest,

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
