import * as resolver from 'eslint-import-resolver-typescript';
import importX from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
// TODO: Look into why this doesn't resolve.
// eslint-disable-next-line import-x/no-unresolved
import typescript from 'typescript-eslint';

const config = typescript.config({
  name: '@metamask/eslint-config-typescript',

  plugins: {
    '@typescript-eslint': typescript.plugin,
  },

  extends: [
    ...typescript.configs.recommended,
    ...typescript.configs.recommendedTypeChecked,
    importX.flatConfigs.typescript,
    jsdoc.configs['flat/recommended-typescript'],
  ],

  files: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.mts',
    '**/*.cts',
    '**/*.mtsx',
    '**/*.ctsx',
  ],

  languageOptions: {
    sourceType: 'module',
    parserOptions: {
      // This option requires `tsconfigRootDir` to be set, but this needs to
      // be set on a per-project basis.
      projectService: true,
    },
  },

  settings: {
    'import-x/resolver': {
      name: 'typescript',
      resolver,
    },
  },

  rules: {
    // Handled by TypeScript
    'import-x/no-unresolved': 'off',

    // Our rules
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDefinitionFiles: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/parameter-properties': 'error',
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

    // Recommended rules that we do not want to use
    '@typescript-eslint/require-await': 'off',

    // Our rules that require type information
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
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
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^.{3,}',
          match: true,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowBoolean: true,
        allowNumber: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { builtinGlobals: true }],

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
});

export default config;
