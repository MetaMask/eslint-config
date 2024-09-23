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
    'import-x/no-dynamic-require': 'off',
    'import-x/no-nodejs-modules': 'off',
    'n/global-require': 'off',
    'n/no-process-exit': 'off',
    'n/no-sync': 'off',
    'n/no-unpublished-require': 'off',
  },

  overrides: [
    {
      files: ['**/*.test.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
      },

      rules: {
        'no-shadow': 'off',
        'import-x/ named': 'off',
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js'],
};
