import mocha from 'eslint-plugin-mocha';

const SIMPLE_TEST_NAME_REGEX = '^[#_]{0,2}[A-Za-z0-9]';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  mocha.configs.flat.recommended,
  {
    name: '@metamask/eslint-config-mocha',

    files: [
      '**/*.test.js',
      '**/*.spec.js',
      '**/*.test.mjs',
      '**/*.spec.mjs',
      '**/*.test.cjs',
      '**/*.spec.cjs',
      '**/*.test.ts',
      '**/*.spec.ts',
      '**/*.test.tsx',
      '**/*.spec.tsx',
      '**/*.test.mts',
      '**/*.spec.mts',
      '**/*.test.cts',
      '**/*.spec.cts',
      '**/*.test.mtsx',
      '**/*.spec.mtsx',
      '**/*.test.ctsx',
      '**/*.spec.ctsx',
    ],

    rules: {
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-hooks-for-single-case': 'error',
      'mocha/no-pending-tests': 'error',
      'mocha/no-return-from-async': 'error',
      'mocha/no-skipped-tests': 'error',
      'mocha/no-top-level-hooks': 'error',
      'mocha/valid-suite-description': [
        'error',
        SIMPLE_TEST_NAME_REGEX,
        ['describe', 'context', 'suite'],
        'Invalid test suite description found',
      ],
      'mocha/valid-test-description': [
        'error',
        SIMPLE_TEST_NAME_REGEX,
        ['it', 'test', 'specify'],
        'Invalid test description found',
      ],
    },
  },
];

export default config;
