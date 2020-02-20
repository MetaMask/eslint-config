module.exports = {
  env: {
    'es6': true,
    'shared-node-browser': true,
  },
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'array-element-newline': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'error',
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'callback-return': 'error',
    'camelcase': ['error', { 'properties': 'never', 'allow': ['^UNSAFE_'] }],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'complexity': 'off',
    'computed-property-spacing': 'error',
    'consistent-return': 'error',
    'consistent-this': ['error', 'self'],
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'for-direction': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', { 'before': true, 'after': true }],
    'getter-return': 'error',
    'global-require': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': ['error', '^(err|error)$'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'init-declarations': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'error',
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'lines-around-directive': 'off', // Deprecated in in ESLint v4.0.0
    'lines-between-class-members': 'error',
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': ['error', { 'max': 1 }],
    'multiline-comment-style': 'off',
    'multiline-ternary': 'off',
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false }],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off', // Deprecated in in ESLint v5.1.0
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': ['error', { 'allowLoop': false, 'allowSwitch': false }],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'no-native-reassign': 'error',
    'no-negated-condition': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'off', // See https://gist.github.com/Gudahtt/618b89f40164af323e08bbdbd17a1769#gistcomment-3182478
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'all', 'argsIgnorePattern': '[_]+' }],
    'no-use-before-define': ['error', { 'functions': false }],
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': ['error', {
      'consistent': true,
      'multiline': true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'off',
    'object-shorthand': 'error',
    'one-var': ['error', { 'initialized': 'never' }],
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'after', { 'overrides': { '?': 'ignore', ':': 'ignore' } }],
    'padded-blocks': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off', // Deprecated in ESLint v3.9.0
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-jsdoc': 'off', // Deprecated in ESLint v5.10.0
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'semi': ['error', 'never'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'semi-style': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
    'spaced-comment': ['error', 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','], 'exceptions': ['=', '-'] }],
    'strict': 'off',
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off', // Deprecated in ESLint v5.10.0
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'any'],
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', 'both'],
    'yoda': ['error', 'never'],
  },
}
