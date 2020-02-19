module.exports = {
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
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unified-signatures': 'error',

    // "Extension Rules" from @typescript-eslint/eslint-plugin
    '@typescript-eslint/brace-style': 'error',
    'brace-style': 'off',

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
