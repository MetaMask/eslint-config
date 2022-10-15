# `@metamask/eslint-config-browser`

MetaMask's hybrid Node.js and browser ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^9.0.0 \
    @metamask/eslint-config-browser@^9.0.1 \
    eslint@^7.23.0
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
    '@metamask/eslint-config-browser',
  ],
};
```
