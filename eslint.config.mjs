// @ts-check

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  // TODO:
  // extends: [
  //   '@metamask/eslint-config',
  //   '@metamask/eslint-config-nodejs',
  //   '@metamask/eslint-config-jest',
  // ],

  {
    languageOptions: {
      ecmaVersion: 2022,
    },

    rules: {
      'import-x/no-dynamic-require': 'off',
      'import-x/no-nodejs-modules': 'off',
      'n/global-require': 'off',
      'n/no-process-exit': 'off',
      'n/no-sync': 'off',
      'n/no-unpublished-require': 'off',
    },

    ignores: ['!.eslint.config.mjs'],
  }
];

export default config;
