# `@metamask/eslint-config-nodejs`

MetaMask's [Node.js](https://nodejs.org) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^12.2.0 \
    @metamask/eslint-config-nodejs@^12.1.0 \
    eslint@^8.57.0 \
    eslint-config-prettier@^9.1.0 \
    eslint-plugin-import@~2.26.0 \
    eslint-plugin-jsdoc@^47.0.2 \
    eslint-plugin-n@^16.6.2 \
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
  extends: [
    // These should be added last unless you know what you're doing.
    '@metamask/eslint-config',
    '@metamask/eslint-config-nodejs',
  ],
};
```

To lint the `.eslintrc.js` file itself, you will **need** to add this config in addition to the base config.
