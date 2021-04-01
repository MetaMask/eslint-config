module.exports = {
  root: true,

  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],

  overrides: [
    {
      files: ['./scripts/*.js'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script',
      },
      rules: {
        'import/no-dynamic-require': 'off',
        'node/global-require': 'off',
        'node/no-process-exit': 'off',
        'node/no-sync': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js'],
};
