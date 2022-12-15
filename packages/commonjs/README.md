# `@metamask/eslint-config-commonjs`

MetaMask's ESLint configuration for projects using CommonJS.

## Usage

```bash
yarn add --dev \
    @metamask/eslint-config@^11.0.1 \
    @metamask/eslint-config-commonjs@^11.0.2 \
    eslint@^8.27.0 \
    eslint-config-prettier@^8.5.0 \
    eslint-plugin-import@^2.26.0 \
    eslint-plugin-jsdoc@^39.6.2 \
    eslint-plugin-prettier@^4.2.1 \
    prettier@^2.7.1
```

The order in which you extend ESLint rules matters.
The `@metamask/*` eslint configs should be added to the `extends` array _last_,
with `@metamask/eslint-config` first, and `@metamask/eslint-config-*` in any
order thereafter.

```js
module.exports = {
  extends: [
    // This should be added last unless you know what you're doing.
    '@metamask/eslint-config',
    '@metamask/eslint-config-commonjs',
  ],
};
```
