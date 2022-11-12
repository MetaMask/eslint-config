module.exports = {
  parser: '@typescript-eslint/parser',

  env: {
    // See comment under `parserOptions` below.
    es2020: true,
  },

  parserOptions: {
    // The `esXXXX` option under `env` is supposed to set the correct
    // `ecmaVersion` option here, but we've had issues with it being
    // overridden in the past and therefore set it explicitly.
    //
    // For TypeScript, the EcmaScript version always be the latest release
    // (not pre-release) here: https://github.com/tc39/ecma262/releases
    ecmaVersion: 2020,
    sourceType: 'module',

    // This enables support for linting rules that require type information. We
    // assume that the project has a `tsconfig.json` file in the directory where
    // ESLint is being run.
    tsconfigRootDir: process.cwd(),
    project: ['./tsconfig.json'],
  },

  plugins: ['@typescript-eslint', 'jsdoc'],

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],

  rules: {
    // Should be disabled per Prettier
    '@typescript-eslint/no-extra-semi': 'off',

    // Handled by TypeScript
    'import/no-unresolved': 'off',

    // Our rules
    'no-undef': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDefinitionFiles: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '[_]+',
        ignoreRestSiblings: true,
      },
    ],

    // Recommended rules that require type information
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/unbound-method': 'off',

    // Our rules that require type information
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: 'objectLiteralMethod',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { builtinGlobals: true }],

    'no-throw-literal': 'off',
    // '@typescript-eslint/no-throw-literal' is left disabled because it requires type information

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    /* jsdoc plugin rules */

    'jsdoc/check-syntax': 'error',

    // This is enabled here rather than in the base config because it doesn't play nicely with
    // multi-line JSDoc types.
    'jsdoc/check-indentation': 'error',

    // Use TypeScript types rather than JSDoc types.
    'jsdoc/no-types': 'error',

    // These all conflict with `jsdoc/no-types`.
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-property-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/valid-types': 'off',

    // Prefer hash names over TypeScript's `private` modifier.
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "PropertyDefinition[accessibility='private'], MethodDefinition[accessibility='private'], TSParameterProperty[accessibility='private']",
        message: 'Use a hash name instead.',
      },
    ],
  },
};
