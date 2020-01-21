module.exports = {
  plugins: [
    'jest',
  ],
  env: {
    'jest/globals': true,
  },
  rules: {
    'jest/consistent-test-it': ['error', { 'fn': 'it' }],
    'jest/expect-expect': 'error',
    'jest/lowercase-name': 'error',
    'jest/no-alias-methods': 'off',
    'jest/no-commented-out-tests': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-expect-resolves': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': 'off',
    'jest/no-mocks-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-callback': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/no-try-expect': 'error',
    'jest/prefer-called-with': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-inline-snapshots': 'off',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': ['error', { 'alwaysAwait': true }],
    'jest/valid-title': 'error',
  },
}
