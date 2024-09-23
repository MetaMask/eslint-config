// @ts-check

// @ts-expect-error - `@babel/eslint-parser` doesn't have TypeScript types.
import babel from '@babel/eslint-parser';
import base from '@metamask/eslint-config';
import jest from '@metamask/eslint-config-jest';
import nodejs from '@metamask/eslint-config-nodejs';
import typescript from '@metamask/eslint-config-typescript';
// eslint-disable-next-line import-x/no-unresolved
import tseslint from 'typescript-eslint';

const config = tseslint.config(
  {
    ignores: ['.yarn/'],
  },

  ...base,
  ...nodejs,

  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.mts',
      '**/*.cts',
      '**/*.mtsx',
      '**/*.ctsx',
    ],
    extends: typescript,
  },

  {
    files: ['**/*.test.mjs'],
    extends: jest,
    rules: {
      'no-shadow': [
        'error',
        {
          allow: ['describe', 'it', 'expect'],
        },
      ],
    },
  },

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
);

export default config;
