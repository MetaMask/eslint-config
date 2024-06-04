const environmentRules = require('./environment.json');

module.exports = {
  plugins: ['n'],

  env: {
    // See comment under `parserOptions` below.
    es2017: true,
    node: true,
  },

  // The recommended Node.js plugin config sets the correct `sourceType` per the
  // `type` field of the local package.json file, so we don't set that here.
  parserOptions: {
    // The EcmaScript version option here and for `env` above need to be set to
    // the same values as in the base config, or they will be overwritten by the
    // recommended Node.js plugin rules.
    ecmaVersion: 2017,
  },

  extends: ['plugin:n/recommended'],

  rules: {
    ...environmentRules,

    // Possible Errors
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-missing-import': 'off', // Duplicates `import/no-unresolved`
    'n/no-missing-require': 'off', // Duplicates `import/no-unresolved`
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-unsupported-features/es-syntax': 'off',

    // Stylistic rules
    'n/callback-return': 'error',
    'n/exports-style': 'error',
    'n/global-require': 'error',
    'n/no-mixed-requires': 'error',
    'n/no-process-env': 'error',
    'n/no-restricted-import': 'error',
    'n/no-restricted-require': 'error',
    'n/no-sync': 'error',
    'n/prefer-global/buffer': 'error',
    'n/prefer-global/console': 'error',
    'n/prefer-global/process': 'error',
    'n/prefer-global/text-decoder': 'error',
    'n/prefer-global/text-encoder': 'error',
    'n/prefer-global/url-search-params': 'error',
    'n/prefer-global/url': 'error',
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error',

    // Enabled in the base config, but this should be allowed in Node.js
    // projects.
    'import/no-nodejs-modules': 'off',
  },
};
