# `@metamask/eslint-config`

This package provides MetaMask's ESLint configuration as an extensible shared config.

## Usage

We export four ESLint configurations.

### Base config

Our default export contains a base set of ESLint rules for ES6+:

```bash
yarn add --dev eslint @metamask/eslint-config eslint-plugin-import
```

List `@metamask/eslint-config` to your ESLint config via `extends`:

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

### Mocha

An additional config that adds support for Mocha:

```bash
yarn add --dev eslint @metamask/eslint-config eslint-plugin-mocha
```

```js
module.exports = {
  root: true,
  extends: [
    '@metamask/eslint-config',
    '@metamask/eslint-config/config/mocha',
  ],
}
```

If your project has `prefer-arrow-callback` you will need to disable that and replace it with `mocha/prefer-arrow-callback`.

### TypeScript

An additional config that adds support for TypeScript:

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
  // If you have JS files for config, etc. you'll need to set their sourceType
  // explicitly as the default sourceType for TS projects is 'module'
  overrides: [{
    files: [
      '.eslintrc.js',
    ],
    parserOptions: {
      sourceType: 'script',
    },
  }],
};
```

## Release & Publishing

The project follows the same release process as the other libraries in the MetaMask organization:

1. Create a release branch
    - For a typical release, this would be based on `master`
    - To update an older maintained major version, base the release branch on the major version branch (e.g. `1.x`)
2. Update the changelog
3. Update version in package.json file (e.g. `yarn version --minor --no-git-tag-version`)
4. Create a pull request targeting the base branch (e.g. master or 1.x)
5. Code review and QA
6. Once approved, the PR is squashed & merged
7. The commit on the base branch is tagged
8. The tag can be published as needed
