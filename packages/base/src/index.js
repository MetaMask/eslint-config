module.exports = {
  env: {
    'es6': true,
    'shared-node-browser': true,
  },

  plugins: ['import', 'prettier'],

  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  rules: {
    // Rules required for Prettier

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        quoteProps: 'consistent',
      },
      {
        // Allow consumers to override this prettier config.
        usePrettierrc: true,
      },
    ],

    // In order to match the prettier spec, you have to enable lines around
    // comments before and after blocks, objects, and arrays.
    // https://github.com/prettier/eslint-config-prettier#lines-around-comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],

    // Prettier has some opinions on mixed-operators, and there is ongoing work
    // to make the output code clear. It is better today then it was when the first
    // PR to add prettier. That being said, the workaround for keeping this rule enabled
    // requires breaking parts of operations into different variables -- which I believe
    // to be worse. https://github.com/prettier/eslint-config-prettier#no-mixed-operators
    'no-mixed-operators': 'off',

    // Prettier wraps single line functions with ternaries, etc in parens by default, but
    // if the line is long enough it breaks it into a separate line and removes the parens.
    // The second behavior conflicts with this rule. There is some guides on the repo about
    // how you can keep it enabled:
    // https://github.com/prettier/eslint-config-prettier#no-confusing-arrow
    // However, in practice this conflicts with prettier adding parens around short lines,
    // when autofixing in vscode and others.
    'no-confusing-arrow': 'off',

    // There is no configuration in prettier for how it stylizes regexes, which conflicts
    // with wrap-regex.
    'wrap-regex': 'off',

    // Prettier handles all indentation automagically. it can be configured here
    // https://prettier.io/docs/en/options.html#tab-width but the default matches our
    // style.
    'indent': 'off',

    // This rule conflicts with the way that prettier breaks code across multiple lines when
    // it exceeds the maximum length. Prettier optimizes for readability while simultaneously
    // maximizing the amount of code per line.
    'function-paren-newline': 'off',

    // This rule throws an error when there is a line break in an arrow function declaration
    // but prettier breaks arrow function declarations to be as readable as possible while
    // still conforming to the width rules.
    'implicit-arrow-linebreak': 'off',

    // This rule would result in an increase in white space in lines with generator functions,
    // which impacts prettier's goal of maximizing code per line and readability. There is no
    // current workaround.
    'generator-star-spacing': 'off',

    'arrow-body-style': 'off',
    'arrow-spacing': 'off',
    'comma-spacing': 'off',
    'curly': ['error', 'all'],
    'max-len': 'off',
    'no-tabs': 'error',
    'no-unexpected-multiline': 'off',
    'prefer-arrow-callback': 'off',
    'quotes': 'off',

    // Not required by prettier, but potentially gotchas
    'no-restricted-syntax': ['error', 'SequenceExpression'],
    'no-sequences': 'off',

    // Core rules
    'accessor-pairs': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-parens': 'error',
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    'camelcase': [
      'error',
      {
        properties: 'never',
        allow: ['^UNSAFE_'],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': 'error',
    'consistent-return': 'error',
    'consistent-this': ['error', 'self'],
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'linebreak-style': 'error',
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
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-floating-decimal': 'error',
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
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
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
    'no-restricted-globals': ['error', 'event'],
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'off', // See https://gist.github.com/Gudahtt/618b89f40164af323e08bbdbd17a1769#gistcomment-3182478
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-shadow': 'error',
    'no-spaced-func': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
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
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'one-var': [
      'error',
      {
        initialized: 'never',
      },
    ],
    'operator-assignment': 'error',
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'ignore',
          ':': 'ignore',
        },
      },
    ],
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
    'prefer-object-spread': 'off', // TODO: Enable
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-unicode-regexp': 'error',
    'rest-spread-spacing': 'error',
    'semi': ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
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
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'wrap-iife': ['error', 'any'],
    'yield-star-spacing': ['error', 'both'],
    'yoda': ['error', 'never'],

    // import plugin rules
    'import/default': 'error',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
      },
    ],
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
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
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        commonjs: true,
        noUselessIndex: true,
      },
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'error',
    'import/unambiguous': 'error',
  },
};
