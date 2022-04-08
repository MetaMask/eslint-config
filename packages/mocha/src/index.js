const simpleTestNameRegex = '^[#_]{0,2}[A-Za-z0-9]';

module.exports = {
  plugins: ['mocha'],

  env: {
    mocha: true,
  },

  extends: ['plugin:mocha/recommended'],

  parserOptions: {
    ecmaVersion: '2020',
  },

  rules: {
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-hooks-for-single-case': 'error',
    'mocha/no-pending-tests': 'error',
    'mocha/no-return-from-async': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-top-level-hooks': 'error',
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
};
