# `@metamask/eslint-config-mocha`

MetaMask's [Mocha](https://mochajs.org/) ESLint configuration.

## Usage

```bash
yarn add --dev \
    eslint@^7.23.0 \
    eslint-plugin-import@^2.22.0 \
    eslint-plugin-mocha@^8.0.0 \
    @metamask/eslint-config@^5.0.0 \
    @metamask/eslint-config-mocha@^5.0.0
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
}
```

If your project has `prefer-arrow-callback` you will need to disable that and replace it with `mocha/prefer-arrow-callback`.
