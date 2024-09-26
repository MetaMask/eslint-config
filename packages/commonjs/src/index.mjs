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
  name: '@metamask/eslint-config-commonjs',

  languageOptions: {
    globals: {
      ...globals.commonjs,
    },
  },

  rules: {
    ...environmentRules,
  },
});

export default config;
