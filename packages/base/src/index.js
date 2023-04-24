const environmentRules = require('./environment.json');

module.exports = {
  env: {
    // See comment under `parserOptions` below.
    es2017: true,
    'shared-node-browser': true,
  },

  parserOptions: {
    // The `esXXXX` option under `env` is supposed to set the correct
    // `ecmaVersion` option here, but we've had issues with it being
    // overridden in the past and therefore set it explicitly.
    //
    // For JavaScript, ES2017 is our effective minimum version due to the use
    // of Esprima by transitive dependencies.
    // It doesn't handle object rest spread, which is a 2018 feature.
    ecmaVersion: 2017,
    // We want to default to 'script' and only use 'module' explicitly.
    sourceType: 'script',
  },

  plugins: ['jsdoc', 'prettier'],

  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],

  rules: {
    ...environmentRules,

    /* Prettier rules */
    'prettier/prettier': [
      'error',
      {
        // All of these are defaults except singleQuote, but we specify them
        // for explicitness
        quoteProps: 'as-needed',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
      {
        // Allow consumers to override this prettier config.
        // This is the default, but we specify it for the sake of clarity.
        usePrettierrc: true,
      },
    ],

    curly: ['error', 'all'],
    'no-tabs': 'error',

    /* Core rules */
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    camelcase: [
      'error',
      {
        properties: 'never',
        allow: ['^UNSAFE_'],
      },
    ],
    'consistent-return': 'error',
    'consistent-this': ['error', 'self'],
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'allow-null'],
    'func-name-matching': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-denylist': [
      // This sets this rule to 'error', the rest are the forbidden IDs.
      'error',
      // These are basically all useless contractions.
      'buf',
      'cat',
      'err',
      'cb',
      'cfg',
      'hex',
      'int',
      'msg',
      'num',
      'opt',
      'sig',
      'req',
      'res',
      'tx',
    ],
    'id-length': [
      'error',
      {
        min: 2,
        properties: 'never',
        exceptionPatterns: ['_', 'a', 'b', 'i', 'j', 'k'],
      },
    ],
    'lines-between-class-members': 'error',
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-proto': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'WithStatement',
        message: 'With statements are not allowed',
      },
      {
        selector: `BinaryExpression[operator='in']`,
        message: 'The "in" operator is not allowed',
      },
      // Sequence expressions have potential gotchas with Prettier, and are also
      // weird!
      {
        selector: 'SequenceExpression',
        message: 'Sequence expressions are not allowed',
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-shadow': ['error', { builtinGlobals: true }],
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '[_]+',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'operator-assignment': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-atomic-updates': 'error',
    'require-unicode-regexp': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
        exceptions: ['=', '-'],
      },
    ],
    'symbol-description': 'error',
    yoda: ['error', 'never'],

    /* import plugin rules */
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-nodejs-modules': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        commonjs: true,
        noUselessIndex: true,
      },
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        // This means that there will always be a newline between the import
        // groups as defined below.
        'newlines-between': 'always',

        groups: [
          // "builtin" is Node.js modules that are built into the runtime, and
          // "external" is everything else from node_modules.
          ['builtin', 'external'],

          // "internal" is unused, but could be used for absolute imports from
          // the project root.
          ['internal', 'parent', 'sibling', 'index'],
        ],

        // Alphabetically sort the imports within each group.
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/unambiguous': 'error',

    /* jsdoc plugin rules */
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': [
      'error',
      { tags: { param: true, returns: true } },
    ],
    'jsdoc/multiline-blocks': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/no-defaults': 'error',
    'jsdoc/no-multi-asterisks': 'error',
    'jsdoc/require-asterisk-prefix': 'error',
    'jsdoc/require-description': 'error',
    'jsdoc/require-hyphen-before-param-description': [
      'error',
      'always',
      { tags: { returns: 'never', template: 'always', throws: 'never' } },
    ],
    'jsdoc/require-jsdoc': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param': ['error', { unnamedRootBase: ['options'] }],
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-property': 'error',
    'jsdoc/require-property-description': 'error',
    'jsdoc/require-property-name': 'error',
    'jsdoc/require-property-type': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsdoc/require-yields': 'error',
    'jsdoc/require-yields-check': 'error',
    'jsdoc/tag-lines': 'error',
    'jsdoc/valid-types': 'error',
  },
};
