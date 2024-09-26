import { createConfig } from '@metamask/eslint-config';
import globals from 'globals';
import { createRequire } from 'module';

// TODO: Use import attributes when ESLint supports them.
const customRequire = createRequire(import.meta.url);
const environmentRules = customRequire('./environment.json');

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = createConfig({
  name: '@metamask/eslint-config-browser',

  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },

  rules: {
    ...environmentRules,
  },
});

export default config;
