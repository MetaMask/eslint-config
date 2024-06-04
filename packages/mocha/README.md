# `@metamask/eslint-config-mocha`

MetaMask's [Mocha](https://mochajs.org/) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^12.2.0 \
    @metamask/eslint-config-mocha@^12.1.0 \
    eslint@^8.57.0 \
    eslint-config-prettier@^8.5.0 \
    eslint-plugin-import@~2.26.0 \
    eslint-plugin-jsdoc@^47.0.2 \
    eslint-plugin-mocha@^10.4.1 \
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
    '@metamask/eslint-config-mocha',
  ],
};
```

If your project has `prefer-arrow-callback` you will need to disable that and replace it with `mocha/prefer-arrow-callback`.
