# `@metamask/eslint-config`

MetaMask's base ESLint configuration.

## Usage

Our default export contains a base set of ESLint rules for ES6+:

```bash
yarn add --dev \
    eslint@^7.7.0 \
    eslint-plugin-import@^2.22.0 \
    @metamask/eslint-config@^4.0.0
```

List `@metamask/eslint-config` to your ESLint config via `extends`:

```js
module.exports = {
  extends: [
    '@metamask/eslint-config',
  ],
}
```
