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
    'no-dupe-class-members': 'off',
    // Checked by TypeScript
    'no-redeclare': 'off',
    // Checked by TypeScript
    'import/no-unresolved': 'off',

    // Rules from @typescript-eslint/eslint-plugin
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-ts-ignore': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'error',
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
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': ['error', { 'allowDefinitionFiles': true }],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unified-signatures': 'error',

    // "Extension Rules" from @typescript-eslint/eslint-plugin
    '@typescript-eslint/brace-style': 'error',
    'brace-style': 'off',

    '@typescript-eslint/camelcase': 'error',
    'camelcase': 'off',

    '@typescript-eslint/default-param-last': 'error',
    'default-param-last': 'off',

    '@typescript-eslint/func-call-spacing': 'error',
    'func-call-spacing': 'off',

    '@typescript-eslint/indent': ['error', 2, { 'SwitchCase': 1 }],
    'indent': 'off',

    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',

    '@typescript-eslint/no-empty-function': 'error',
    'no-empty-function': 'off',

    '@typescript-eslint/no-extra-parens': 'error',
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

    '@typescript-eslint/semi': ['error', 'always'],
    'semi': 'off',

    '@typescript-eslint/space-before-function-paren': ['error', 'always'],
    'space-before-function-paren': 'off',
  },
}
