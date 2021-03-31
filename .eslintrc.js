module.exports = {
  root: true,

  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],

  overrides: [
    {
      files: ['./scripts/*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'import/no-dynamic-require': 'off',
        'node/global-require': 'off',
        'node/no-sync': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js'],
};
