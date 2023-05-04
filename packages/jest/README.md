# `@metamask/eslint-config-jest`

MetaMask's [Jest](https://jestjs.io/) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^11.0.1 \
    @metamask/eslint-config-jest@^11.0.0 \
    eslint@^8.27.0 \
    eslint-config-prettier@^8.5.0 \
    eslint-plugin-import@^2.26.0 \
    eslint-plugin-jsdoc@^39.6.2 \
    eslint-plugin-jest@^27.1.5 \
    eslint-plugin-prettier@^4.2.1 \
    eslint-plugin-promise@^6.1.1 \
    prettier@^2.7.1
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
