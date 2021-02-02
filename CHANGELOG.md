# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [5.0.0] - 2021-02-02

### Changed

- **(SEMVER-MAJOR)** Enable `semi` in base config ([#101](https://github.com/MetaMask/eslint-config/pull/101))
  - This may just be fixable with `eslint . --fix`, but we consider it breaking because it's a major stylistic change.
- Disallow spaces before parentheses of named functions ([#101](https://github.com/MetaMask/eslint-config/pull/101))

## [4.1.0] - 2020-10-21

### Changed

- Disable `node/no-missing-import` ([#75](https://github.com/MetaMask/eslint-config/pull/75))
- Disable `node/no-missing-require` ([#75](https://github.com/MetaMask/eslint-config/pull/75))

## [4.0.0] - 2020-10-20

### Changed

- **(SEMVER-MAJOR)** Update to ESLint v7 (#46, #58, #62, #63)
- Relax `member-delimiter-style` for TypeScript ([#68](https://github.com/MetaMask/eslint-config/pull/68))
- Disable `space-before-function-paren` for TypeScript ([#65](https://github.com/MetaMask/eslint-config/pull/65))

## [3.2.0] - 2020-08-20

### Changed

- Relax `prefer-destructuring` rules (#57)

## [3.1.0] - 2020-08-19

### Changed

- Disable prefer-object-spread (#54)

## [3.0.0] - 2020-08-11

### Changed

- Disallow all anonymous default exports (#52)
- Set maximum empty lines to 1 (#51)

## [2.2.0] - 2020-07-14

### Changed

- Relax no-plusplus rule (#44)

## [2.1.1] - 2020-04-17

### Changed

- Disable `require-await` (#37)

## [2.1.0] - 2020-02-24

### Changed

- Disable `@typescript-eslint/no-extra-parens` (#29)

## [2.0.0] - 2020-02-20

### Added

- Add import rules to base config  (#24)
- Clarified TypeScript config & publishing docs

### Changed

- Explicitly specify all core rules (#17)
- Update TypeScript config (#25)

### Removed

- Remove root flag from TS config (#20)

## [1.2.0] - 2020-02-18

### Changed

- Disable Jest lowercase-name for describe blocks (#14)

## [1.1.0] - 2020-02-11

### Added

- Add README file
- Add Mocha config (#13)

## [1.0.0] - 2020-01-21

### Added

- Add base, TypeScript, and Jest configs (#3)

[Unreleased]:https://github.com/MetaMask/eslint-config/compare/v5.0.0...HEAD
[5.0.0]:https://github.com/MetaMask/eslint-config/compare/v4.1.0...v5.0.0
[4.1.0]:https://github.com/MetaMask/eslint-config/compare/v4.0.0...v4.1.0
[4.0.0]:https://github.com/MetaMask/eslint-config/compare/v3.2.0...v4.0.0
[3.2.0]:https://github.com/MetaMask/eslint-config/compare/v3.1.0...v3.2.0
[3.1.0]:https://github.com/MetaMask/eslint-config/compare/v3.0.0...v3.1.0
[3.0.0]:https://github.com/MetaMask/eslint-config/compare/v2.2.0...v3.0.0
[2.2.0]:https://github.com/MetaMask/eslint-config/compare/v2.1.1...v2.2.0
[2.1.1]:https://github.com/MetaMask/eslint-config/compare/v2.1.0...v2.1.1
[2.1.0]:https://github.com/MetaMask/eslint-config/compare/v2.0.0...v2.1.0
[2.0.0]:https://github.com/MetaMask/eslint-config/compare/v1.2.0...v2.0.0
[1.2.0]:https://github.com/MetaMask/eslint-config/compare/v1.1.0...v1.2.0
[1.1.0]:https://github.com/MetaMask/eslint-config/compare/v1.0.0...v1.1.0
[1.0.0]:https://github.com/MetaMask/eslint-config/tree/v1.0.0
