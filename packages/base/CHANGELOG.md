# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Uncategorized

- Bump vite and vitest to address security vulns ([#393](https://github.com/MetaMask/eslint-config/pull/393))
- Loosen `promise/catch-or-return` and `promise/param-names` rules ([#384](https://github.com/MetaMask/eslint-config/pull/384))

## [14.0.0]

### Changed

- **BREAKING:** Bump minimum Node.js version from 16 to 18.18 ([#371](https://github.com/MetaMask/eslint-config/pull/371))
- **BREAKING:** Bump peer dependency on ESLint from `^8.57.0` to `^9.11.0` ([#370](https://github.com/MetaMask/eslint-config/pull/370))
  - ESLint 9 requires flat configs, so this change also rewrites the configs to
    use flat configs. The legacy config format is no longer supported.
- **BREAKING:** Bump peer dependency on `@metamask/eslint-config` from `^13.0.0` to `^14.0.0` ([#377](https://github.com/MetaMask/eslint-config/pull/377))
- **BREAKING:** Bump peer dependency on `eslint-config-prettier` from `^8.5.0` to `^9.1.0` ([#370](https://github.com/MetaMask/eslint-config/pull/370))
- **BREAKING:** Bump peer dependency on `eslint-plugin-import-x` from `^0.5.1` to `^4.3.0` ([#370](https://github.com/MetaMask/eslint-config/pull/370))
- **BREAKING:** Bump peer dependency on `eslint-plugin-jsdoc` from `>=43.0.7 <48` to `^50.2.4` ([#370](https://github.com/MetaMask/eslint-config/pull/370))
- **BREAKING:** Bump peer dependency on `eslint-plugin-prettier` from `^4.2.1` to `^5.2.1` ([#370](https://github.com/MetaMask/eslint-config/pull/370))
- **BREAKING:** Bump peer dependency on `eslint-plugin-promise` from `^6.1.1` to `^7.1.0` ([#370](https://github.com/MetaMask/eslint-config/pull/370))
- **BREAKING:** Bump peer dependency on `prettier` from `^2.7.1` to `^3.3.3` ([#370](https://github.com/MetaMask/eslint-config/pull/370))
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

## [12.2.0]

### Changed

- Remove deprecated rule `jsdoc/newline-after-description` ([#290](https://github.com/MetaMask/eslint-config/pull/290))
  - This means the plugin can now be used with `eslint-plugin-jsdoc` versions `42` and above.

### Fixed

- Pin `eslint-plugin-import@~2.26.0` to avoid a regression in `eslint-plugin-import@2.27.0` ([#307](https://github.com/MetaMask/eslint-config/pull/307))
- Change `endOfLine` rules to better support linting on Windows ([#311](https://github.com/MetaMask/eslint-config/pull/311))

## [12.1.0]

### Changed

- Add support for typescript 5.0.x, 5.1.x ([#288](https://github.com/MetaMask/eslint-config/pull/288))

## [12.0.0]

### Added

- **BREAKING:** Add `eslint-plugin-promise` peer dependency, and enable `no-multiple-resolved` ([#287](https://github.com/MetaMask/eslint-config/pull/287))

## [11.1.0]

### Changed

- Exclude test files from package ([#266](https://github.com/MetaMask/eslint-config/pull/266))

## [11.0.2]

### Changed

- Stop requiring newlines between multiline blocks/expressions ([#263](https://github.com/MetaMask/eslint-config/pull/263))

## [11.0.1]

### Fixed

- Enable function expressions again ([#258](https://github.com/MetaMask/eslint-config/pull/258))
  - We didn't realize this rule would disallow class methods, even class constructors. This was too disruptive.

## [11.0.0]

### Added

- **BREAKING:** Enable id-denylist and id-length in base config ([#200](https://github.com/MetaMask/eslint-config/pull/200))
- **BREAKING:** Add rules for hybrid Node.js and browser environments ([#242](https://github.com/MetaMask/eslint-config/pull/242))
  - The base config now only allows globals and modules that are available in both Node.js and browsers.
  - This adds a new `@metamask/eslint-config-browser` package, to be used in browser-only environments.
  - The `@metamask/eslint-config-nodejs` package has been updated to allow Node.js-only globals and modules.

### Changed

- **BREAKING:** Remove no-undef in favour of custom environments configuration ([#254](https://github.com/MetaMask/eslint-config/pull/254))
- **BREAKING:** Bump all ESLint dependencies to the latest version ([#252](https://github.com/MetaMask/eslint-config/pull/252))
  - This includes peer dependencies.
- **BREAKING:** Automatically sort imports ([#248](https://github.com/MetaMask/eslint-config/pull/248))
- **BREAKING:** Disable more undesired syntax ([#207](https://github.com/MetaMask/eslint-config/pull/207))
  - This disables the `with` statement, function expressions, and the `in` operator.

## [10.0.0]

### Changed

- **BREAKING:** Update ESLint from v7 to v8 ([#233](https://github.com/MetaMask/eslint-config/pull/233))
  - This is breaking because `eslint` is a `peerDependency`.
  - Four new rules have been added:
    - [`no-loss-of-precision`](https://eslint.org/docs/latest/rules/no-loss-of-precision)
    - [`no-nonoctal-decimal-escape`](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
    - [`no-unsafe-optional-chaining`](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
    - [`no-useless-backreference`](https://eslint.org/docs/latest/rules/no-useless-backreference)
- **BREAKING:** Update `eslint-plugin-prettier` from v3 to v4 ([#231](https://github.com/MetaMask/eslint-config/pull/231))
  - This is breaking beacuse `eslint-plugin-prettier` is a `peerDependency`.
- **BREAKING:** Update minimum Node.js version to v14 ([#225](https://github.com/MetaMask/eslint-config/pull/225))
- Ignore rest siblings for `no-unused-vars` ([#213](https://github.com/MetaMask/eslint-config/pull/213))
  - This makes the `no-unused-vars` rule more permissive

## [9.0.0]

### Added

- **BREAKING:** Add JSDoc ESLint rules ([#203](https://github.com/MetaMask/eslint-config/pull/203))

## [8.0.0]

### Changed

- **BREAKING:** Require newlines between multiline blocks and expressions ([#197](https://github.com/MetaMask/eslint-config/pull/197))

## [7.0.1]

### Fixed

- Restore default `parserOptions` ([#193](https://github.com/MetaMask/eslint-config/pull/193))
  - By extending the recommended `eslint-plugin-import` rules, we accidentally changed the default `parserOptions.sourceType` to `module`.
    The `sourceType` is now explicitly set to `script`.
  - In some cases, `parserOptions.ecmaVersion` could also be set to an incorrect version.
    The `ecmaVersion` is now explicitly set to `2017`, matching the corresponding setting in `env`.

## [7.0.0]

### Changed

- **BREAKING:** Update Prettier `quoteProps` rule to `as-needed` ([#181](https://github.com/MetaMask/eslint-config/pull/181))
- **BREAKING:** Update ESLint `no-shadow` config ([#168](https://github.com/MetaMask/eslint-config/pull/168))
- Use recommended `eslint-plugin-import` rule sets ([#184](https://github.com/MetaMask/eslint-config/pull/184))
  - This only removed or disabled rules, and is not breaking.
- Update install instructions in readme ([#185](https://github.com/MetaMask/eslint-config/pull/185))
- Normalize rule config values ([#169](https://github.com/MetaMask/eslint-config/pull/169))

## [6.0.0] - 2021-04-08

### Changed

- **BREAKING:** Set minimum Node.js version to `^12.0.0` ([#144](https://github.com/MetaMask/eslint-config/pull/144))
- **BREAKING:** Set ECMAScript version to `es2017`/`8` ([#150](https://github.com/MetaMask/eslint-config/pull/150))
- **BREAKING:** Add the [Prettier](https://prettier.io) ESLint plugin and extend the recommended Prettier ESLint config ([#96](https://github.com/MetaMask/eslint-config/pull/96))
  - See [here](https://github.com/prettier/eslint-plugin-prettier/blob/d993f24/eslint-plugin-prettier.js#L62-L73) for the `eslint-plugin-prettier` rules and [here](https://github.com/prettier/eslint-config-prettier/blob/abf3ba1/index.js) for the rules of `eslint-config-prettier`, which the plugin extends.
  - The rules of this config should otherwise be unchanged.
- Update `eslint` and other ESLint peer dependencies ([#151](https://github.com/MetaMask/eslint-config/pull/151))

### Removed

- **BREAKING:** All configs except the base config ([#141](https://github.com/MetaMask/eslint-config/pull/141))
  - All configs are now published as separate packages, and must be extended by referencing their package names:
    - [`@metamask/eslint-config`](https://npmjs.com/package/@metamask/eslint-config) (the base config)
    - [`@metamask/eslint-config-jest`](https://npmjs.com/package/@metamask/eslint-config-jest)
    - [`@metamask/eslint-config-mocha`](https://npmjs.com/package/@metamask/eslint-config-mocha)
    - [`@metamask/eslint-config-nodejs`](https://npmjs.com/package/@metamask/eslint-config-nodejs)
    - [`@metamask/eslint-config-typescript`](https://npmjs.com/package/@metamask/eslint-config-typescript)

## [5.0.0] - 2021-02-02

### Changed

- **BREAKING:** Enable `semi` in base config ([#101](https://github.com/MetaMask/eslint-config/pull/101))
- **BREAKING:** Disallow spaces before parentheses of named functions ([#101](https://github.com/MetaMask/eslint-config/pull/101))
- **BREAKING:** Upgrade to TypeScript v4 and corresponding `@typescript-eslint` dependencies ([#79](https://github.com/MetaMask/eslint-config/pull/79), [#80](https://github.com/MetaMask/eslint-config/pull/80), [#103](https://github.com/MetaMask/eslint-config/pull/103))

## [4.1.0] - 2020-10-21

### Changed

- Disable `node/no-missing-import` ([#75](https://github.com/MetaMask/eslint-config/pull/75))
- Disable `node/no-missing-require` ([#75](https://github.com/MetaMask/eslint-config/pull/75))

## [4.0.0] - 2020-10-20

### Changed

- **BREAKING:** Update to ESLint v7 (#46, #58, #62, #63)
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

- Add import rules to base config (#24)
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

[Unreleased]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@14.0.0...HEAD
[14.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@13.0.0...@metamask/eslint-config@14.0.0
[13.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@12.2.0...@metamask/eslint-config@13.0.0
[12.2.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@12.1.0...@metamask/eslint-config@12.2.0
[12.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@12.0.0...@metamask/eslint-config@12.1.0
[12.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@11.1.0...@metamask/eslint-config@12.0.0
[11.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@11.0.2...@metamask/eslint-config@11.1.0
[11.0.2]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@11.0.1...@metamask/eslint-config@11.0.2
[11.0.1]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@11.0.0...@metamask/eslint-config@11.0.1
[11.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@10.0.0...@metamask/eslint-config@11.0.0
[10.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@9.0.0...@metamask/eslint-config@10.0.0
[9.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@8.0.0...@metamask/eslint-config@9.0.0
[8.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@7.0.1...@metamask/eslint-config@8.0.0
[7.0.1]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@7.0.0...@metamask/eslint-config@7.0.1
[7.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@6.0.0...@metamask/eslint-config@7.0.0
[6.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@5.0.0...@metamask/eslint-config@6.0.0
[5.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@4.1.0...@metamask/eslint-config@5.0.0
[4.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@4.0.0...@metamask/eslint-config@4.1.0
[4.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@3.2.0...@metamask/eslint-config@4.0.0
[3.2.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@3.1.0...@metamask/eslint-config@3.2.0
[3.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@3.0.0...@metamask/eslint-config@3.1.0
[3.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@2.2.0...@metamask/eslint-config@3.0.0
[2.2.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@2.1.1...@metamask/eslint-config@2.2.0
[2.1.1]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@2.1.0...@metamask/eslint-config@2.1.1
[2.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@2.0.0...@metamask/eslint-config@2.1.0
[2.0.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@1.2.0...@metamask/eslint-config@2.0.0
[1.2.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@1.1.0...@metamask/eslint-config@1.2.0
[1.1.0]: https://github.com/MetaMask/eslint-config/compare/@metamask/eslint-config@1.0.0...@metamask/eslint-config@1.1.0
[1.0.0]: https://github.com/MetaMask/eslint-config/releases/tag/@metamask/eslint-config@1.0.0
