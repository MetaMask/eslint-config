module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Rules from @typescript-eslint/eslint-plugin
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/prefer-for-of': 0,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/triple-slash-reference': 2,
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/typedef': 0,
    '@typescript-eslint/unified-signatures': 2,

    // "Extension Rules" from @typescript-eslint/eslint-plugin
    '@typescript-eslint/brace-style': 2,
    'brace-style': 0,

    '@typescript-eslint/default-param-last': 2,
    'default-param-last': 0,

    '@typescript-eslint/func-call-spacing': 2,
    'func-call-spacing': 0,

    '@typescript-eslint/indent': [2, 2, { 'SwitchCase': 1 }],
    'indent': 0,

    '@typescript-eslint/no-array-constructor': 2,
    'no-array-constructor': 0,

    '@typescript-eslint/no-empty-function': 2,
    'no-empty-function': 0,

    '@typescript-eslint/no-extra-parens': 0,
    'no-extra-parens': 0,

    '@typescript-eslint/no-extra-semi': 2,
    'no-extra-semi': 0,

    '@typescript-eslint/no-magic-numbers': 0,
    'no-magic-numbers': 0,

    '@typescript-eslint/no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }],
    'no-unused-expressions': 0,

    '@typescript-eslint/no-unused-vars': [2, { 'vars': 'all', 'args': 'all', 'argsIgnorePattern': '[_]+' }],
    'no-unused-vars': 0,

    '@typescript-eslint/no-use-before-define': [2, { 'functions': false }],
    'no-use-before-define': 0,

    '@typescript-eslint/no-useless-constructor': 2,
    'no-useless-constructor': 0,

    '@typescript-eslint/quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'quotes': 0,

    '@typescript-eslint/semi': [2, 'always'],
    'semi': 0,

    '@typescript-eslint/space-before-function-paren': [2, 'always'],
    'space-before-function-paren': 0,
  },
}
