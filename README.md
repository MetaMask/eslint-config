# `@metamask/eslint-config`

This package provides MetaMask's ESLint configuration as an extensible shared config.

## Usage

We export four ESLint configurations.

### Base config

Our default export contains a base set of ESLint rules for ES6+:

```bash
yarn add --dev eslint @metamask/eslint-config`
```

List `@metamask/eslint-config` in your ESLint `extends`:

```js
module.exports = {
  extends: [
    '@metamask/eslint-config',
  ],
}
```

### Node.js

An additional config that supports Node.js-specific environments:

```js
module.exports = {
  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config/config/nodejs',
  ],
}
```

To lint the `.eslintrc.js` file itself, you will **need** to add this config in addition to the base config.

### Jest

An additional config that adds support for Jest:

```bash
yarn add --dev eslint @metamask/eslint-config eslint-plugin-jest
```

```js
module.exports = {
  root: true,
  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config/config/jest',

  ],
}
```

### TypeScript

An additional config that adds support for Jest:

```bash
yarn add --dev \
  eslint \
  @metamask/eslint-config \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```

```js
module.exports = {
  root: true,
  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config/config/typescript',
  ],
};
```
