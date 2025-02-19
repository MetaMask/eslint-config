import { createConfig } from '@metamask/eslint-config';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = createConfig({
  name: '@metamask/eslint-config-jest',

  extends: [jest.configs['flat/recommended'], jest.configs['flat/style']],

  languageOptions: {
    globals: {
      ...globals.jest,
    },
  },

  rules: {
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/no-duplicate-hooks': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/valid-expect': ['error', { alwaysAwait: true }],
    'jest/no-restricted-matchers': [
      'error',
      {
        resolves: 'Use `expect(await promise)` instead.',
        toBeFalsy: 'Avoid `toBeFalsy`',
        toBeTruthy: 'Avoid `toBeTruthy`',
        toMatchSnapshot: 'Use `toMatchInlineSnapshot()` instead',
        toThrowErrorMatchingSnapshot:
          'Use `toThrowErrorMatchingInlineSnapshot()` instead',
      },
    ],
  },
});

export default config;
