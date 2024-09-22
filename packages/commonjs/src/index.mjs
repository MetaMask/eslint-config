import globals from 'globals';

import environmentRules from './environment.json' with { type: 'json' };

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  {
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },

    rules: {
      ...environmentRules,
    },
  },
];

export default config;
