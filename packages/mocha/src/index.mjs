import { createConfig } from '@metamask/eslint-config';
import mocha from 'eslint-plugin-mocha';

const SIMPLE_TEST_NAME_REGEX = '^[#_]{0,2}[A-Za-z0-9]';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = createConfig({
  name: '@metamask/eslint-config-mocha',

  extends: [mocha.configs.flat.recommended],

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
});

export default config;
