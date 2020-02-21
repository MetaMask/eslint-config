module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // Checked by TypeScript - ts(2378)
    'getter-return': 'off',
    // Checked by TypeScript - ts(2300)
    'no-dupe-args': 'off',
    // Checked by TypeScript - ts(1117)
    'no-dupe-keys': 'off',
    // Checked by TypeScript - ts(7027)
    'no-unreachable': 'off',
    // Checked by TypeScript - ts(2367)
    'valid-typeof': 'off',
    // Checked by TypeScript - ts(2588)
    'no-const-assign': 'off',
    // Checked by TypeScript - ts(2588)
    'no-new-symbol': 'off',
    // Checked by TypeScript - ts(2376)
    'no-this-before-super': 'off',
    // Checked by TypeScript - `strictNullChecks`
    'no-undef': 'off',
    // Checked by TypeScript
    'no-redeclare': 'off',
    // Checked by TypeScript
    'import/no-unresolved': 'off',

    // Rules from @typescript-eslint/eslint-plugin
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'off', // Requires type information
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
    }],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/naming-convention': 'off', // Requires type information
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'off', // Requires type information
    '@typescript-eslint/no-for-in-array': 'off', // Requires type information
    '@typescript-eslint/no-implied-eval': 'off', // Requires type information
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'off', // Requires type information
    '@typescript-eslint/no-namespace': ['error', { 'allowDefinitionFiles': true }],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-throw-literal': 'off', // Requires type information
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // Requires type information
    '@typescript-eslint/no-unnecessary-condition': 'off', // Requires type information
    '@typescript-eslint/no-unnecessary-qualifier': 'off', // Requires type information
    '@typescript-eslint/no-unnecessary-type-arguments': 'off', // Requires type information
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // Requires type information
    '@typescript-eslint/no-unused-vars-experimental': 'off', // Requires type information
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'off', // Requires type information
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off', // Requires type information
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'off', // Requires type information
    '@typescript-eslint/prefer-regexp-exec': 'off', // Requires type information
    '@typescript-eslint/prefer-string-starts-ends-with': 'off', // Requires type information
    '@typescript-eslint/promise-function-async': 'off', // Requires type information
    '@typescript-eslint/require-array-sort-compare': 'off', // Requires type information
    '@typescript-eslint/restrict-plus-operands': 'off', // Requires type information
    '@typescript-eslint/restrict-template-expressions': 'off', // Requires type information
    '@typescript-eslint/strict-boolean-expressions': 'off', // Requires type information
    '@typescript-eslint/switch-exhaustiveness-check': 'off', // Requires type information
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unbound-method': 'off', // Requires type information
    '@typescript-eslint/unified-signatures': 'error',

    // "Extension Rules" from @typescript-eslint/eslint-plugin
    '@typescript-eslint/brace-style': 'error',
    'brace-style': 'off',

    '@typescript-eslint/comma-spacing': 'error',
    'comma-spacing': 'off',

    '@typescript-eslint/default-param-last': 'error',
    'default-param-last': 'off',

    '@typescript-eslint/func-call-spacing': 'error',
    'func-call-spacing': 'off',

    '@typescript-eslint/indent': ['error', 2, { 'SwitchCase': 1 }],
    'indent': 'off',

    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',

    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',

    '@typescript-eslint/no-empty-function': 'error',
    'no-empty-function': 'off',

    '@typescript-eslint/no-extra-parens': 'off',
    'no-extra-parens': 'off',

    '@typescript-eslint/no-extra-semi': 'error',
    'no-extra-semi': 'off',

    '@typescript-eslint/no-magic-numbers': 'off',
    'no-magic-numbers': 'off',

    '@typescript-eslint/no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
    'no-unused-expressions': 'off',

    '@typescript-eslint/no-unused-vars': ['error', { 'vars': 'all', 'args': 'all', 'argsIgnorePattern': '[_]+' }],
    'no-unused-vars': 'off',

    '@typescript-eslint/no-use-before-define': ['error', { 'functions': false }],
    'no-use-before-define': 'off',

    '@typescript-eslint/no-useless-constructor': 'error',
    'no-useless-constructor': 'off',

    '@typescript-eslint/quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'quotes': 'off',

    '@typescript-eslint/require-await': 'off', // Requires type information

    '@typescript-eslint/return-await': 'off', // Requires type information

    '@typescript-eslint/semi': ['error', 'always'],
    'semi': 'off',

    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'space-before-function-paren': 'off',
  },
}
