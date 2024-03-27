# `@metamask/eslint-config-typescript`

MetaMask's [TypeScript](https://www.typescriptlang.org) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^12.2.0 \
    @metamask/eslint-config-typescript@^12.1.0 \
    @typescript-eslint/eslint-plugin@^6.21.0 \
    @typescript-eslint/parser@^6.21.0 \
    eslint@^8.57.0 \
    eslint-config-prettier@^9.1.0 \
    eslint-plugin-import@~2.26.0 \
    eslint-plugin-jsdoc@^47.0.2 \
    eslint-plugin-prettier@^5.1.3 \
    eslint-plugin-promise@^6.1.1 \
    prettier@^3.2.5
```

The order in which you extend ESLint rules matters.
The `@metamask/*` eslint configs should be added to the `extends` array _last_,
with `@metamask/eslint-config` first, and `@metamask/eslint-config-*` in any
order thereafter.

```js
module.exports = {
  root: true,

  extends: [
    // This should be added last unless you know what you're doing.
    '@metamask/eslint-config',
  ],

  overrides: [
    // The TypeScript config disables certain rules that you want to keep for
    // non-TypeScript files, so it should be added in an override.
    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
    },
  ],

  // This is required for rules that use type information.
  // See here for more information: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
```
