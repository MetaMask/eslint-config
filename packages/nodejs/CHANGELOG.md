# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [10.0.0]
### Changed
- **(BREAKING)** Update ESLint from v7 to v8 ([#233](https://github.com/MetaMask/eslint-config/pull/233))
  - This is breaking because `eslint` is a `peerDependency`.
  - Four new rules have been added:
    - [`no-loss-of-precision`](https://eslint.org/docs/latest/rules/no-loss-of-precision)
    - [`no-nonoctal-decimal-escape`](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
    - [`no-unsafe-optional-chaining`](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
    - [`no-useless-backreference`](https://eslint.org/docs/latest/rules/no-useless-backreference)
- **(BREAKING)** Update minimium Node.js version to v14 ([#225](https://github.com/MetaMask/eslint-config/pull/225))

## [9.0.0]
### Added
- **BREAKING** Add JSDoc ESLint rules ([#203](https://github.com/MetaMask/eslint-config/pull/203))

## [8.0.0]
### Changed
- ***BREAKING*** The peer dependency `@metamask/eslint-config` has been updated from v7 to v8.

## [7.0.1]
### Fixed
- Restore default `parserOptions` ([#193](https://github.com/MetaMask/eslint-config/pull/193))
  - By extending the recommended `eslint-plugin-import` rules, we accidentally changed the default `parserOptions.sourceType` to `module`.
  The `sourceType` is now explicitly set to `script`.
  - In some cases, `parserOptions.ecmaVersion` could also be set to an incorrect version.
  The `ecmaVersion` is now explicitly set to `2017`, matching the corresponding setting in `env`.

## [7.0.0]
### Changed
- Update install instructions in readme ([#185](https://github.com/MetaMask/eslint-config/pull/185))

### Fixed
- Add `@metamask/eslint-config` as a peer dependency ([#186](https://github.com/MetaMask/eslint-config/pull/186))
  - This package is designed to be used in conjunction with the MetaMask base ESLint config, so this should always have been a peer dependency.

## [6.0.0] - 2021-04-08
### Changed
- **(BREAKING)** Set minimum Node.js version to `^12.0.0` ([#144](https://github.com/MetaMask/eslint-config/pull/144))
- Publish this config as its own package ([#141](https://github.com/MetaMask/eslint-config/pull/141))
  - The contents of this package were previously published as part of [`@metamask/eslint-config`](https://npmjs.com/package/@metamask/eslint-config).
  For changes prior to version `6.0.0`, please refer to the changelog of that package.
  - To continue extending this config, install this package and update your `.eslintrc.js` `extends` array to include `@metamask/eslint-config-nodejs` instead of `@metamask/eslint-config/nodejs`.
- Update `eslint` and other ESLint peer dependencies ([#151](https://github.com/MetaMask/eslint-config/pull/151))

[Unreleased]: https://github.com/MetaMask/eslint-config/compare/v10.0.0...HEAD
[10.0.0]: https://github.com/MetaMask/eslint-config/compare/v9.0.0...v10.0.0
[9.0.0]: https://github.com/MetaMask/eslint-config/compare/v8.0.0...v9.0.0
[8.0.0]: https://github.com/MetaMask/eslint-config/compare/v7.0.1...v8.0.0
[7.0.1]: https://github.com/MetaMask/eslint-config/compare/v7.0.0...v7.0.1
[7.0.0]: https://github.com/MetaMask/eslint-config/compare/v6.0.0...v7.0.0
[6.0.0]: https://github.com/MetaMask/eslint-config/releases/tag/v6.0.0
