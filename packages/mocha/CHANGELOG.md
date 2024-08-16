# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [13.0.0]
### Changed
- **BREAKING**: Bump all ESLint dependencies ([#351](https://github.com/MetaMask/eslint-config/pull/351))
  - Bumps all ESLint dependencies to the latest version compatible with Node.js 16.
- **BREAKING**: Update minimium Node.js version to v16 ([#332](https://github.com/MetaMask/eslint-config/pull/332), [#339](https://github.com/MetaMask/eslint-config/pull/339))

## [12.1.0]
### Changed
- Add support for typescript 5.0.x, 5.1.x ([#288](https://github.com/MetaMask/eslint-config/pull/288))

## [12.0.0]
### Changed
- **BREAKING:** Update peer dependency `@metamask/eslint-config` to v12

## [11.1.0]
### Changed
- Exclude test files from package ([#266](https://github.com/MetaMask/eslint-config/pull/266))

## [11.0.0]
### Changed
- **BREAKING:** Bump all ESLint dependencies to the latest version ([#252](https://github.com/MetaMask/eslint-config/pull/252))
  - This includes peer dependencies.

## [10.0.0]
### Changed
- **BREAKING:** Update ESLint from v7 to v8 ([#233](https://github.com/MetaMask/eslint-config/pull/233))
  - This is breaking because `eslint` is a `peerDependency`.
  - Four new rules have been added:
    - [`no-loss-of-precision`](https://eslint.org/docs/latest/rules/no-loss-of-precision)
    - [`no-nonoctal-decimal-escape`](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
    - [`no-unsafe-optional-chaining`](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
    - [`no-useless-backreference`](https://eslint.org/docs/latest/rules/no-useless-backreference)
- **BREAKING:** Update `eslint-plugin-mocha` from v8 to v10 ([#232](https://github.com/MetaMask/eslint-config/pull/232))
  - This is breaking because `eslint-plugin-mocha` is a `peerDependency`.
  - The rule [`mocha/no-empty-description`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-empty-description.md) was added.
- **BREAKING:** Update minimium Node.js version to v14 ([#225](https://github.com/MetaMask/eslint-config/pull/225))
- Update Mocha ecmaVersion ([#218](https://github.com/MetaMask/eslint-config/pull/218))
  - This lets us use newer JavaScript features in our Mocha tests.

## [9.0.0]
### Added
- **BREAKING:** Add JSDoc ESLint rules ([#203](https://github.com/MetaMask/eslint-config/pull/203))

## [8.0.0]
### Changed
- **BREAKING:** The peer dependency `@metamask/eslint-config` has been updated from v7 to v8.

## [7.0.0]
### Changed
- Update install instructions in readme ([#185](https://github.com/MetaMask/eslint-config/pull/185))

### Fixed
- Add `@metamask/eslint-config` as a peer dependency ([#186](https://github.com/MetaMask/eslint-config/pull/186))
  - This package is designed to be used in conjunction with the MetaMask base ESLint config, so this should always have been a peer dependency.

## [6.0.0] - 2021-04-08
### Changed
- **BREAKING:** Set minimum Node.js version to `^12.0.0` ([#144](https://github.com/MetaMask/eslint-config/pull/144))
- **BREAKING:** Enable [`mocha/no-exports`](https://github.com/lo1tuma/eslint-plugin-mocha/blob/bb203bc/docs/rules/no-exports.md) ([#156](https://github.com/MetaMask/eslint-config/pull/156))
- Publish this config as its own package ([#141](https://github.com/MetaMask/eslint-config/pull/141))
  - The contents of this package were previously published as part of [`@metamask/eslint-config`](https://npmjs.com/package/@metamask/eslint-config).
  For changes prior to version `6.0.0`, please refer to the changelog of that package.
  - To continue extending this config, install this package and update your `.eslintrc.js` `extends` array to include `@metamask/eslint-config-mocha` instead of `@metamask/eslint-config/mocha`.
- Update `eslint` and other ESLint peer dependencies ([#151](https://github.com/MetaMask/eslint-config/pull/151))

[Unreleased]: https://github.com/MetaMask/eslint-config/compare/v13.0.0...HEAD
[13.0.0]: https://github.com/MetaMask/eslint-config/compare/v12.1.0...v13.0.0
[12.1.0]: https://github.com/MetaMask/eslint-config/compare/v12.0.0...v12.1.0
[12.0.0]: https://github.com/MetaMask/eslint-config/compare/v11.1.0...v12.0.0
[11.1.0]: https://github.com/MetaMask/eslint-config/compare/v11.0.0...v11.1.0
[11.0.0]: https://github.com/MetaMask/eslint-config/compare/v10.0.0...v11.0.0
[10.0.0]: https://github.com/MetaMask/eslint-config/compare/v9.0.0...v10.0.0
[9.0.0]: https://github.com/MetaMask/eslint-config/compare/v8.0.0...v9.0.0
[8.0.0]: https://github.com/MetaMask/eslint-config/compare/v7.0.0...v8.0.0
[7.0.0]: https://github.com/MetaMask/eslint-config/compare/v6.0.0...v7.0.0
[6.0.0]: https://github.com/MetaMask/eslint-config/releases/tag/v6.0.0
