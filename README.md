# `@metamask/eslint-config`

This monorepo contains MetaMask's ESLint configurations as npm packages.
The different configs are split up into individual packages so that we can
correctly specify their peer dependencies.

## Updating or Adding Configs

Configs targeting an entirely new environment should be added in a new package.
Our rule validation script (see `./scripts/validate-rules.js`) forbids the
following rules:

- Rules that override Prettier's recommended ESLint rules
- Uselessly configured rules, meaning:
  - Rules that are disabled but never enabled by an extended config.
  - Rules that are configured identically by the package's extended configs.
- For the purpose of determining the "usefulness" of rules, we include our base
config (`@metamask/eslint-config`) in the set of extended configs, since it
should always be extended by the consumer in practice.

Linting will fail in CI if any of the above conditions are violated in any
config.

Finally, in order to understand the impact of changing rules or the set of
extended configs, each package has a `rules-snapshot.json` fill which contains
all rules of the particular config and its extended configs in a single
dictionary. When editing a package, always check its rules snapshots after
running `yarn lint:fix` to understand which rules changed.

## Releasing

The `@metamask/eslint-config` are version-locked.
If you bump the version of one, you must bump the version of them all.
When `main` is in a state that you want to release, complete the following steps:

- Run `yarn create-release-pr <patch|minor|major>`
  - This will bump the version of all packages and create a PR with a new patch, minor, or major version, per the argument given.
- Update the changelogs of the packages that changed and push the changelog updates to the release PR
- Once the release PR is merged, pull `main` and run `yarn publish-all`
  - This will publish new versions of all packages.
