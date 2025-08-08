# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- Bump vite and vitest to address security vulns ([#393](https://github.com/MetaMask/eslint-config/pull/393))

## [14.0.0]

### Changed

- **BREAKING:** Bump minimum Node.js version from 16 to 18.18 ([#371](https://github.com/MetaMask/eslint-config/pull/371))
- **BREAKING:** Bump peer dependency on ESLint from `^8.57.0` to `^9.11.0` ([#370](https://github.com/MetaMask/eslint-config/pull/370))
  - ESLint 9 requires flat configs, so this change also rewrites the configs to
    use flat configs. The legacy config format is no longer supported.
- **BREAKING:** Bump peer dependency on `@metamask/eslint-config` from `^13.0.0` to `^14.0.0` ([#377](https://github.com/MetaMask/eslint-config/pull/377))
- **BREAKING:** Change package to be pure ESM ([#370](https://github.com/MetaMask/eslint-config/pull/370))
  - ESLint 9 supports ESM out-of-the-box, so this change updates the package to
    be pure ESM. This means that the package can no longer be used with CommonJS
    `require` syntax.

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

- **BREAKING:** Add peer dependency `@metamask/eslint-config` and remove ESLint plugin and prettier peer dependencies ([#301](https://github.com/MetaMask/eslint-config/pull/301))
  - In the initial release, this package had the wrong list of peer dependencies. This brings this package back into alignment with the others.

## [11.1.0]

### Added

- Initial release of this package ([#267](https://github.com/MetaMask/eslint-config/pull/267))

[Unreleased]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-commonjs@14.0.0...HEAD
[14.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-commonjs@13.0.0...@metamask/eslint-config-commonjs@14.0.0
[13.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-commonjs@12.1.0...@metamask/eslint-config-commonjs@13.0.0
[12.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-commonjs@12.0.0...@metamask/eslint-config-commonjs@12.1.0
[12.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config-commonjs@11.1.0...@metamask/eslint-config-commonjs@12.0.0
[11.1.0]: https://github.com/MetaMask/eslint-config/releases/tag/@metamask/eslint-config-commonjs@11.1.0
