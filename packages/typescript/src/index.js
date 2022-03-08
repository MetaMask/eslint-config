module.exports = {
  overrides: [
    {
      files: ['*.{ts,tsx}'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],

      plugins: ['@typescript-eslint'],

      parser: '@typescript-eslint/parser',

      env: {
        // See comment under `parserOptions` below.
        es2021: true,
      },

      parserOptions: {
        // The `esXXXX` option under `env` is supposed to set the correct
        // `ecmaVersion` option here, but we've had issues with it being
        // overridden in the past and therefore set it explicitly.
        //
        // For TypeScript, the EcmaScript version should always be the latest
        // release (not pre-release) here: https://github.com/tc39/ecma262/releases
        ecmaVersion: 2021,
        sourceType: 'module',
      },

      rules: {
        // These rules are those that we are required to disable as they
        // conflict with our use of the Prettier plugin.

        '@typescript-eslint/no-extra-semi': 'off',

        // These rules are handled by TypeScript; some of them are recommended by
        // the TypeScript ESLint plugin:
        // <https://typescript-eslint.io/docs/linting/troubleshooting/#eslint-plugin-import>

        'import/default': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off',

        // The TypeScript ESLint plugin provides versions of base ESLint rules which
        // are TypeScript-enabled. We do not need to enable the base rules in these
        // cases. See: <https://typescript-eslint.io/rules/#extension-rules>

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
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false },
        ],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        // Our rules for TypeScript ESLint

        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
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

        // Our rules for the JSDoc plugin

        // This is enabled here rather than in the base config because it doesn't
        // play nicely with multi-line JSDoc types.
        'jsdoc/check-indentation': 'error',

        // Use TypeScript types rather than JSDoc types.
        'jsdoc/no-types': 'error',

        // These all conflict with `jsdoc/no-types`.
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/valid-types': 'off',
      },
      settings: {
        'import/resolver': {
          // When determining the location of an `import`, prefer TypeScript's
          // resolution algorithm. Note that due to how we've configured TypeScript
          // in `tsconfig.json`, we are able to import JavaScript files from
          // TypeScript files.
          typescript: {
            // Always try to resolve types against `typeRoots` even it
            // doesn't contain any source code, like `@types/unist`
            alwaysTryTypes: true,
          },
        },
      },
    },
    {
      files: ['*.d.ts'],
      parserOptions: {
        // TypeScript definition files have a slightly different syntax than
        // source files and thus the `import/ambiguous` plugin can get confused
        // over how to interpret these types of files.
        sourceType: 'script',
      },
    },
  ],
};
