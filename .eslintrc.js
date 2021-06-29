module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
  },

  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],

  rules: {
    'import/no-dynamic-require': 'off',
    'node/global-require': 'off',
    'node/no-process-exit': 'off',
    'node/no-sync': 'off',
    'node/no-unpublished-require': 'off',
  },

  ignorePatterns: ['!.eslintrc.js'],
};
