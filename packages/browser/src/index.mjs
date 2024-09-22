import globals from 'globals';

import environmentRules from './environment.json' with { type: 'json' };

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      ...environmentRules,
    },
  },
];

export default config;
