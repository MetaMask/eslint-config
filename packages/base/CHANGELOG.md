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
- **(BREAKING)** Update `eslint-plugin-prettier` from v3 to v4 ([#231](https://github.com/MetaMask/eslint-config/pull/231))
  - This is breaking beacuse `eslint-plugin-prettier` is a `peerDependency`.
- **(BREAKING)** Update minimium Node.js version to v14 ([#225](https://github.com/MetaMask/eslint-config/pull/225))
- Ignore rest siblings for `no-unused-vars` ([#213](https://github.com/MetaMask/eslint-config/pull/213))
  - This makes the `no-unused-vars` rule more permissive

## [9.0.0]
### Added
- **BREAKING** Add JSDoc ESLint rules ([#203](https://github.com/MetaMask/eslint-config/pull/203))

## [8.0.0]
### Changed
- **(BREAKING)** Require newlines between multiline blocks and expressions ([#197](https://github.com/MetaMask/eslint-config/pull/197))

## [7.0.1]
### Fixed
- Restore default `parserOptions` ([#193](https://github.com/MetaMask/eslint-config/pull/193))
  - By extending the recommended `eslint-plugin-import` rules, we accidentally changed the default `parserOptions.sourceType` to `module`.
  The `sourceType` is now explicitly set to `script`.
  - In some cases, `parserOptions.ecmaVersion` could also be set to an incorrect version.
  The `ecmaVersion` is now explicitly set to `2017`, matching the corresponding setting in `env`.

## [7.0.0]
### Changed
- **(BREAKING)** Update Prettier `quoteProps` rule to `as-needed` ([#181](https://github.com/MetaMask/eslint-config/pull/181))
- **(BREAKING)** Update ESLint `no-shadow` config ([#168](https://github.com/MetaMask/eslint-config/pull/168))
- Use recommended `eslint-plugin-import` rule sets ([#184](https://github.com/MetaMask/eslint-config/pull/184))
  - This only removed or disabled rules, and is not breaking.
- Update install instructions in readme ([#185](https://github.com/MetaMask/eslint-config/pull/185))
- Normalize rule config values ([#169](https://github.com/MetaMask/eslint-config/pull/169))

## [6.0.0] - 2021-04-08
### Changed
- **(BREAKING)** Set minimum Node.js version to `^12.0.0` ([#144](https://github.com/MetaMask/eslint-config/pull/144))
- **(BREAKING)** Set ECMAScript version to `es2017`/`8` ([#150](https://github.com/MetaMask/eslint-config/pull/150))
- **(BREAKING)** Add the [Prettier](https://prettier.io) ESLint plugin and extend the recommended Prettier ESLint config ([#96](https://github.com/MetaMask/eslint-config/pull/96))
  - See [here](https://github.com/prettier/eslint-plugin-prettier/blob/d993f24/eslint-plugin-prettier.js#L62-L73) for the `eslint-plugin-prettier` rules and [here](https://github.com/prettier/eslint-config-prettier/blob/abf3ba1/index.js) for the rules of `eslint-config-prettier`, which the plugin extends.
  - The rules of this config should otherwise be unchanged.
- Update `eslint` and other ESLint peer dependencies ([#151](https://github.com/MetaMask/eslint-config/pull/151))

### Removed
- **(BREAKING)** All configs except the base config ([#141](https://github.com/MetaMask/eslint-config/pull/141))
  - All configs are now published as separate packages, and must be extended by referencing their package names:
    - [`@metamask/eslint-config`](https://npmjs.com/package/@metamask/eslint-config) (the base config)
    - [`@metamask/eslint-config-jest`](https://npmjs.com/package/@metamask/eslint-config-jest)
    - [`@metamask/eslint-config-mocha`](https://npmjs.com/package/@metamask/eslint-config-mocha)
    - [`@metamask/eslint-config-nodejs`](https://npmjs.com/package/@metamask/eslint-config-nodejs)
    - [`@metamask/eslint-config-typescript`](https://npmjs.com/package/@metamask/eslint-config-typescript)

## [5.0.0] - 2021-02-02
### Changed
- **(BREAKING)** Enable `semi` in base config ([#101](https://github.com/MetaMask/eslint-config/pull/101))
- **(BREAKING)** Disallow spaces before parentheses of named functions ([#101](https://github.com/MetaMask/eslint-config/pull/101))
- **(BREAKING)** Upgrade to TypeScript v4 and corresponding `@typescript-eslint` dependencies ([#79](https://github.com/MetaMask/eslint-config/pull/79), [#80](https://github.com/MetaMask/eslint-config/pull/80), [#103](https://github.com/MetaMask/eslint-config/pull/103))

## [4.1.0] - 2020-10-21
### Changed
- Disable `node/no-missing-import` ([#75](https://github.com/MetaMask/eslint-config/pull/75))
- Disable `node/no-missing-require` ([#75](https://github.com/MetaMask/eslint-config/pull/75))

## [4.0.0] - 2020-10-20
### Changed
- **(BREAKING)** Update to ESLint v7 (#46, #58, #62, #63)
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

[Unreleased]: https://github.com/MetaMask/eslint-config/compare/v10.0.0...HEAD
[10.0.0]: https://github.com/MetaMask/eslint-config/compare/v9.0.0...v10.0.0
[9.0.0]: https://github.com/MetaMask/eslint-config/compare/v8.0.0...v9.0.0
[8.0.0]: https://github.com/MetaMask/eslint-config/compare/v7.0.1...v8.0.0
[7.0.1]: https://github.com/MetaMask/eslint-config/compare/v7.0.0...v7.0.1
[7.0.0]: https://github.com/MetaMask/eslint-config/compare/v6.0.0...v7.0.0
[6.0.0]: https://github.com/MetaMask/eslint-config/compare/v5.0.0...v6.0.0
[5.0.0]: https://github.com/MetaMask/eslint-config/compare/v4.1.0...v5.0.0
[4.1.0]: https://github.com/MetaMask/eslint-config/compare/v4.0.0...v4.1.0
[4.0.0]: https://github.com/MetaMask/eslint-config/compare/v3.2.0...v4.0.0
[3.2.0]: https://github.com/MetaMask/eslint-config/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/MetaMask/eslint-config/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/MetaMask/eslint-config/compare/v2.2.0...v3.0.0
[2.2.0]: https://github.com/MetaMask/eslint-config/compare/v2.1.1...v2.2.0
[2.1.1]: https://github.com/MetaMask/eslint-config/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/MetaMask/eslint-config/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/MetaMask/eslint-config/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/MetaMask/eslint-config/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/MetaMask/eslint-config/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/MetaMask/eslint-config/releases/tag/v1.0.0
