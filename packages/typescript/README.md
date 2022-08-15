# `@metamask/eslint-config-typescript`

MetaMask's [TypeScript](https://www.typescriptlang.org) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^9.0.0 \
    @metamask/eslint-config-typescript@^9.0.1 \
    @typescript-eslint/eslint-plugin@^5.33.0 \
    @typescript-eslint/parser@^5.33.0 \
    eslint@^7.23.0 \
    eslint-config-prettier@^8.1.0 \
    eslint-plugin-import@^2.22.1 \
    eslint-plugin-jsdoc@^39.2.9 \
    eslint-plugin-prettier@^3.3.1 \
    prettier@^2.2.1

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
};
```
