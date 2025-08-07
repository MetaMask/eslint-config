import { createConfig } from '@metamask/eslint-config';
import vitest from '@vitest/eslint-plugin';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = createConfig({
  name: '@metamask/eslint-config-vitest',

  extends: [vitest.configs.recommended],

  rules: {
    'vitest/consistent-test-it': ['error', { fn: 'it' }],
    'vitest/no-alias-methods': 'error',
    'vitest/no-commented-out-tests': 'error',
    'vitest/no-conditional-expect': 'error',
    'vitest/no-conditional-in-test': 'error',
    'vitest/no-disabled-tests': 'error',
    'vitest/no-duplicate-hooks': 'error',
    'vitest/no-focused-tests': 'error',
    'vitest/no-interpolation-in-snapshots': 'error',
    'vitest/no-mocks-import': 'error',
    'vitest/no-standalone-expect': 'error',
    'vitest/no-test-prefixes': 'error',
    'vitest/no-test-return-statement': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'vitest/prefer-spy-on': 'error',
    'vitest/prefer-strict-equal': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-to-contain': 'error',
    'vitest/prefer-to-have-length': 'error',
    'vitest/prefer-todo': 'error',
    'vitest/require-to-throw-message': 'error',
    'vitest/require-top-level-describe': 'error',
    'vitest/valid-expect': ['error', { alwaysAwait: true }],
    'vitest/no-restricted-matchers': [
      'error',
      {
        resolves: 'Use `expect(await promise)` instead.',
        toBeFalsy: 'Avoid `toBeFalsy`.',
        toBeTruthy: 'Avoid `toBeTruthy`.',
        toMatchSnapshot: 'Use `toMatchInlineSnapshot()` instead.',
        toThrowErrorMatchingSnapshot:
          'Use `toThrowErrorMatchingInlineSnapshot()` instead.',
      },
    ],
  },
});

export default config;
