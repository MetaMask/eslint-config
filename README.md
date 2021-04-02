# `@metamask/eslint-config`

This monorepo contains MetaMask's ESLint configurations as npm packages.
The different configs are split up into individual packages so that we can correctly
specify their peer dependencies.

## Updating or Adding Configs

Configs targeting an entirely new environment should be added in a new package.
Our rule validation script (see `./scripts/validate-rules.js`) forbids the following
rules:

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
