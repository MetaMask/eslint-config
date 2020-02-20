const simpleTestNameRegex = '^[#_]{0,2}[A-Za-z0-9]'

module.exports = {
  plugins: [
    'mocha',
  ],

  env: {
    'mocha': true,
  },

  rules: {
    'mocha/handle-done-callback': 'error',
    'mocha/max-top-level-suites': ['error', { limit: 1 }],
    'mocha/no-async-describe': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-hooks': 'off',
    'mocha/no-hooks-for-single-case': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-mocha-arrows': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-return-from-async': 'error',
    'mocha/no-setup-in-describe': 'error',
    'mocha/no-sibling-hooks': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-synchronous-tests': 'off',
    'mocha/no-top-level-hooks': 'error',
    'mocha/prefer-arrow-callback': 'off',
    'mocha/valid-suite-description': [
      'error',
      simpleTestNameRegex,
      ['describe', 'context', 'suite'],
      'Invalid test suite description found',
    ],
    'mocha/valid-test-description': [
      'error',
      simpleTestNameRegex,
      ['it', 'test', 'specify'],
      'Invalid test description found',
    ],
  },
}
