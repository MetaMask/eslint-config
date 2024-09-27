# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [14.0.0]

### Uncategorized

- Update workflows and configs ([#376](https://github.com/MetaMask/eslint-config/pull/376))
- Update all packages to use `createConfig` ([#375](https://github.com/MetaMask/eslint-config/pull/375))
- Add util for creating extendable ESLint configurations ([#374](https://github.com/MetaMask/eslint-config/pull/374))
- BREAKING: Bump ESLint to `^9.11.1`, bump related ESLint dependencies, and rewrite configs to use flat configs ([#370](https://github.com/MetaMask/eslint-config/pull/370))
- Replace Jest with Vitest ([#372](https://github.com/MetaMask/eslint-config/pull/372))
- Drop support for Node.js <18.18 ([#371](https://github.com/MetaMask/eslint-config/pull/371))

## [13.0.0]

### Changed

- **BREAKING**: Replace `eslint-plugin-import` with `eslint-plugin-import-x` ([#366](https://github.com/MetaMask/eslint-config/pull/366))
- **BREAKING**: Bump all ESLint dependencies ([#351](https://github.com/MetaMask/eslint-config/pull/351))
  - Bumps all ESLint dependencies to the latest version compatible with Node.js 16.
- **BREAKING**: Bump minimum Node.js version from 14 to 16 ([#332](https://github.com/MetaMask/eslint-config/pull/332), [#339](https://github.com/MetaMask/eslint-config/pull/339))

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

### Added

- Initial release of this package.

[Unreleased]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-browser@14.0.0...HEAD
[14.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-browser@13.0.0...@metamask/eslint-config-browser@14.0.0
[13.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-browser@12.1.0...@metamask/eslint-config-browser@13.0.0
[12.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-browser@12.0.0...@metamask/eslint-config-browser@12.1.0
[12.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-browser@11.1.0...@metamask/eslint-config-browser@12.0.0
[11.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-browser@11.0.0...@metamask/eslint-config-browser@11.1.0
[11.0.0]: https://github.com/MetaMask/eslint-config/releases/tag/@metamask/eslint-config-browser@11.0.0
