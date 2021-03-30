# `@metamask/eslint-config-jest`

MetaMask's [Jest](https://jestjs.io/) ESLint configuration.

## Usage

```bash
yarn add --dev \
    eslint@^7.7.0 \
    eslint-plugin-import@^2.22.0 \
    eslint-plugin-jest@^23.6.0 \
    @metamask/eslint-config-jest@^5.0.0
```

```js
module.exports = {
  root: true,
  extends: [
    '@metamask/eslint-config-jest',
  ],
}
```
