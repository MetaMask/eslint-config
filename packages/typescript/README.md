# `@metamask/eslint-config-typescript`

MetaMask's [TypeScript](https://www.typescriptlang.org) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^13.0.0 \
    @metamask/eslint-config-typescript@^13.0.0 \
    eslint@^9.11.0 \
    eslint-config-prettier@^9.1.0 \
    eslint-plugin-import-x@^4.3.0 \
    eslint-plugin-jsdoc@^50.2.4 \
    eslint-plugin-prettier@^5.2.1 \
    eslint-plugin-promise@^7.1.0 \
    prettier@^3.3.3
    typescript-eslint@^8.6.0
```

The order in which you extend ESLint rules matters.
The `@metamask/*` eslint configs should be added to the config array _last_,
with `@metamask/eslint-config` first, and `@metamask/eslint-config-*` in any
order thereafter.

```js
import base, { createConfig } from '@metamask/eslint-config';
import typescript from '@metamask/eslint-config-typescript';

const config = createConfig({
  {
    // The TypeScript config disables certain rules that you want to keep for
    // non-TypeScript files, so it should be added in an override.
    files: ['**/*.ts', '**/*.mts', '**/*.cts'],

    extends: [
      // Any custom shared config should be added here.
      // ...

      // This should be added last unless you know what you're doing.
      ...base,
      ...typescript,
    ],

    languageOptions: {
      parserOptions: {
        // This is required for rules that use type information.
        // See here for more information: https://typescript-eslint.io/getting-started/typed-linting
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
});
```
