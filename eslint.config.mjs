// @ts-check

import base, { createConfig } from '@metamask/eslint-config';
import nodejs from '@metamask/eslint-config-nodejs';
import typescript from '@metamask/eslint-config-typescript';
import vitest from '@metamask/eslint-config-vitest';

const config = createConfig([
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
    extends: vitest,
  },

  {
    name: 'main',
    files: ['**/*.js', '**/*.mjs'],

    languageOptions: {
      sourceType: 'module',
    },

    rules: {
      'import-x/extensions': ['error', 'ignorePackages'],
      'import-x/no-dynamic-require': 'off',
      'import-x/no-nodejs-modules': 'off',
      'import-x/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: false,
        },
      ],
      'jsdoc/check-tag-names': 'off',
      'jsdoc/no-types': 'off',
      'n/global-require': 'off',
      'n/no-process-exit': 'off',
      'n/no-sync': 'off',
      'n/no-unpublished-require': 'off',
    },
  },
]);

export default config;
