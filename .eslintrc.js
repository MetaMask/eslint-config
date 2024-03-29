module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
  },

  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config-nodejs',
    '@metamask/eslint-config-jest',
  ],

  rules: {
    'import/no-dynamic-require': 'off',
    'import/no-nodejs-modules': 'off',
    'n/global-require': 'off',
    'n/no-process-exit': 'off',
    'n/no-sync': 'off',
    'n/no-unpublished-require': 'off',
  },

  ignorePatterns: ['!.eslintrc.js'],
};
