# `@metamask/eslint-config-jest`

MetaMask's [Jest](https://jestjs.io/) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^7.0.0 \
    @metamask/eslint-config-jest@^7.0.0 \
    eslint@^7.23.0 \
    eslint-config-prettier@^8.1.0 \
    eslint-plugin-import@^2.22.1 \
    eslint-plugin-jest@^24.1.3 \
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
    // These should be added last unless you know what you're doing.
    '@metamask/eslint-config',
    '@metamask/eslint-config-jest',
  ],
};
```
