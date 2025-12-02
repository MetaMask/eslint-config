// @ts-check

import js from '@eslint/js';
import importX from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-plugin-prettier/recommended';
// @ts-ignore - `eslint-plugin-promise` doesn't have TypeScript types.
import promise from 'eslint-plugin-promise';
import globals from 'globals';
import { createRequire } from 'module';

import { createConfig } from './utils.mjs';

// TODO: Use import attributes when ESLint supports them.
const customRequire = createRequire(import.meta.url);
const environmentRules = customRequire('./environment.json');

/**
 * @type {import('eslint').Linter.Config[]}
 */
const rules = createConfig({
  name: '@metamask/eslint-config',

  extends: [
    // Recommended ESLint configuration.
    js.configs.recommended,

    // Third-party plugin configurations.
    importX.flatConfigs.recommended,
    jsdoc.configs['flat/recommended-error'],
    prettier,
    promise.configs['flat/recommended'],
  ],

  languageOptions: {
    // The `esXXXX` option under `env` is supposed to set the correct
    // `ecmaVersion` option here, but we've had issues with it being
    // overridden in the past and therefore set it explicitly.
    ecmaVersion: 2022,
    parserOptions: {
      ecmaVersion: 2022,
    },

    // We want to default to 'script' and only use 'module' explicitly.
    sourceType: 'script',

    globals: {
      ...globals.es2022,
      ...globals['shared-node-browser'],
    },
  },

  rules: {
    ...environmentRules,

    /* Prettier rules */
    'prettier/prettier': [
      'error',
      {
        // All of these are defaults except singleQuote and endOfLine, but we specify them
        // for explicitness
        endOfLine: 'auto',
        quoteProps: 'as-needed',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
      {
        // Allow consumers to override this Prettier config.
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
    'no-implicit-globals': 'off',
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
    'import-x/extensions': [
      'error',
      'never',
      {
        json: 'always',
      },
    ],
    'import-x/first': 'error',
    'import-x/newline-after-import': 'error',
    'import-x/no-absolute-path': 'error',
    'import-x/no-amd': 'error',
    'import-x/no-anonymous-default-export': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-dynamic-require': 'error',
    'import-x/no-extraneous-dependencies': 'error',
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-as-default': 'error',
    'import-x/no-named-as-default-member': 'error',
    'import-x/no-named-default': 'error',
    'import-x/no-nodejs-modules': 'error',
    'import-x/no-self-import': 'error',
    'import-x/no-unassigned-import': 'error',
    'import-x/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
    'import-x/no-useless-path-segments': [
      'error',
      {
        commonjs: true,
        noUselessIndex: true,
      },
    ],
    'import-x/no-webpack-loader-syntax': 'error',
    'import-x/order': [
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
    'import-x/unambiguous': 'error',

    /* jsdoc plugin rules */
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/check-values': 'error',
    // This recommended rule is disabled because it keeps thinking `@metamask` is an inline tag
    'jsdoc/escape-inline-tags': 'off',
    'jsdoc/empty-tags': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': [
      'error',
      { tags: { param: true, returns: true } },
    ],
    'jsdoc/multiline-blocks': 'error',
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
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSEnumDeclaration',
          'TSPropertySignature',
        ],
      },
    ],
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
    'jsdoc/tag-lines': [
      'error',
      'any',
      {
        startLines: 1,
      },
    ],
    'jsdoc/valid-types': 'error',

    /* promise plugin rules */
    'promise/catch-or-return': [
      'error',
      {
        allowFinally: true,
      },
    ],
    'promise/no-callback-in-promise': 'error',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/param-names': [
      'error',
      {
        resolvePattern: '^_?resolve',
        rejectPattern: '^_?reject',
      },
    ],
    'promise/valid-params': 'error',
  },
});

export { createConfig };
export default rules;
