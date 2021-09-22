# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [9.0.0]
### Added
- **BREAKING** Add JSDoc ESLint rules ([#203](https://github.com/MetaMask/eslint-config/pull/203))

## [8.0.0]

## [7.0.1]
### Fixed
- Restore default `parserOptions.ecmaVersion` ([#193](https://github.com/MetaMask/eslint-config/pull/193))
  - In some cases, `parserOptions.ecmaVersion` could be set to an incorrect version.
  The `ecmaVersion` is now explicitly set to `2020`, matching the corresponding setting in `env`.

## [7.0.0]
### Changed
- **(BREAKING)** Update `@typescript/no-shadow` config ([#168](https://github.com/MetaMask/eslint-config/pull/168))
- Use recommended `eslint-plugin-import` rule sets ([#184](https://github.com/MetaMask/eslint-config/pull/184))
  - This only removed or disabled rules, and is not breaking.
- Update install instructions in readme ([#185](https://github.com/MetaMask/eslint-config/pull/185))

### Fixed
- Add `@metamask/eslint-config` as a peer dependency ([#186](https://github.com/MetaMask/eslint-config/pull/186))
  - This package is designed to be used in conjunction with the MetaMask base ESLint config, so this should always have been a peer dependency.

## [6.0.0] - 2021-04-08
### Changed
- **(BREAKING)** Set minimum Node.js version to `^12.0.0` ([#144](https://github.com/MetaMask/eslint-config/pull/144))
- **(BREAKING)** Set ECMAScript version to `es2020`/`11` ([#150](https://github.com/MetaMask/eslint-config/pull/150))
- **(BREAKING)** Enable all rules recommended by the `@typescript-eslint` plugin ([#156](https://github.com/MetaMask/eslint-config/pull/156))
  - This amounted to setting the following core ESLint rules to `error`:
    - [no-var](https://eslint.org/docs/7.0.0/rules/no-var)
    - [prefer-const](https://eslint.org/docs/7.0.0/rules/prefer-const)
    - [prefer-rest-params](https://eslint.org/docs/7.0.0/rules/prefer-rest-params)
    - [prefer-spread](https://eslint.org/docs/7.0.0/rules/prefer-spread)
- Publish this config as its own package ([#141](https://github.com/MetaMask/eslint-config/pull/141))
  - The contents of this package were previously published as part of [`@metamask/eslint-config`](https://npmjs.com/package/@metamask/eslint-config).
  For changes prior to version `6.0.0`, please refer to the changelog of that package.
  - To continue extending this config, install this package and update your `.eslintrc.js` `extends` array to include `@metamask/eslint-config-typescript` instead of `@metamask/eslint-config/typescript`.
- Update `eslint` and other ESLint peer dependencies ([#151](https://github.com/MetaMask/eslint-config/pull/151))

[Unreleased]: https://github.com/MetaMask/eslint-config/compare/v9.0.0...HEAD
[9.0.0]: https://github.com/MetaMask/eslint-config/compare/v8.0.0...v9.0.0
[8.0.0]: https://github.com/MetaMask/eslint-config/compare/v7.0.1...v8.0.0
[7.0.1]: https://github.com/MetaMask/eslint-config/compare/v7.0.0...v7.0.1
[7.0.0]: https://github.com/MetaMask/eslint-config/compare/v6.0.0...v7.0.0
[6.0.0]: https://github.com/MetaMask/eslint-config/releases/tag/v6.0.0
