// @ts-check

// @ts-expect-error - `@babel/eslint-parser` doesn't have TypeScript types.
import babel from '@babel/eslint-parser';
import base from '@metamask/eslint-config';
// eslint-disable-next-line no-shadow
import jest from '@metamask/eslint-config-jest';
import nodejs from '@metamask/eslint-config-nodejs';
import typescript from '@metamask/eslint-config-typescript';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  {
    ignores: ['.yarn/'],
  },

  ...base,
  ...nodejs,
  ...jest,

  // This is the recommended way to apply a config array to a subset of files:
  // https://eslint.org/docs/latest/use/configure/combine-configs#apply-a-config-array-to-a-subset-of-files
  ...typescript.map((typeScriptConfig) => ({
    files: ['**/*.d.mts'],
    ...typeScriptConfig,
  })),

  {
    name: 'main',
    files: ['**/*.js', '**/*.mjs'],

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
      'jsdoc/check-tag-names': 'off',
      'jsdoc/no-types': 'off',
      'n/global-require': 'off',
      'n/no-process-exit': 'off',
      'n/no-sync': 'off',
      'n/no-unpublished-require': 'off',
    },
  },
];

export default config;
