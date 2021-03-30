# `@metamask/eslint-config-mocha`

MetaMask's [Mocha](https://mochajs.org/) ESLint configuration.

## Usage

```bash
yarn add --dev \
    eslint@^7.7.0 \
    eslint-plugin-import@^2.22.0 \
    eslint-plugin-mocha@^8.0.0 \
    @metamask/eslint-config@^5.0.0 \
    @metamask/eslint-config-mocha@^5.0.0
```

```js
module.exports = {
  root: true,

  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config-mocha',
  ],
}
```

If your project has `prefer-arrow-callback` you will need to disable that and replace it with `mocha/prefer-arrow-callback`.
