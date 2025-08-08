# `@metamask/eslint-config`

This monorepo contains MetaMask's ESLint configurations as npm packages.
The different configs are split up into individual packages so that we can
correctly specify their peer dependencies.

## Contributing

### Setup

- Install the current LTS version of [Node.js](https://nodejs.org)
  - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm install` will install the latest version and running `nvm use` will automatically choose the right node version for you.
- Install [Yarn v3](https://yarnpkg.com/getting-started/install)
- Run `yarn install` to install dependencies and run any required post-install scripts

### Testing and Linting

Run `yarn lint` to run the linter, or run `yarn lint:fix` to run the linter and fix any automatically fixable issues.

### Updating or Adding Configs

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

### Release & Publishing

To create a release, start by creating a release candidate branch to update package versions and changelogs. Once the release candidate is reviewed and merged, the release will be created automatically (pending approval for the npm publish step).

Note that we usually try to keep these packages aligned on the same major version so that it's easier for users to understand which versions are compatible with each other.

We use the `@metamask/create-release-branch` tool to prepare release candidates. This tool supports two workflows: interactive UI (recommended for most users) or manual specification.

### Option A: Interactive Mode (Recommended)

This option provides a visual interface to streamline the release process:

1. **Start the interactive release tool.**

   On the `main` branch, run:

   ```
   yarn create-release-branch -i
   ```

   This will start a local web server (default port 3000) and open a browser interface.

2. **Select packages to release.**

   The UI will show all packages with changes since their last release. For each package:

   - Choose whether to include it in the release
   - Select an appropriate version bump (patch, minor, or major) following SemVer rules
   - The UI will automatically validate your selections and identify dependencies that need to be included

3. **Review and resolve dependency requirements.**

   The UI automatically analyzes your selections and identifies potential dependency issues that need to be addressed before proceeding. You'll need to review and resolve these issues by either:

   - Including the suggested additional packages
   - Confirming that you want to skip certain packages (if you're certain they don't need to be updated)

   Common types of dependency issues you might encounter:

   - **Missing dependencies**: If you're releasing Package A that depends on Package B, the UI will prompt you to include Package B
   - **Breaking change impacts**: If you're releasing Package B with breaking changes, the UI will identify packages that have peer dependencies on Package B that need to be updated
   - **Version incompatibilities**: The UI will flag if your selected version bumps don't follow semantic versioning rules relative to dependent packages

   Unlike the manual workflow where you need to repeatedly edit a YAML file, in the interactive mode you can quickly resolve these issues by checking boxes and selecting version bumps directly in the UI.

4. **Confirm your selections.**

   Once you're satisfied with your package selections and version bumps, confirm them in the UI. This will:

   - Create a new branch named `release/<new release version>`
   - Update the version in each package's `package.json`
   - Add a new section to each package's `CHANGELOG.md` for the new version

5. **Review and update changelogs.**

   Each selected package will have a new changelog section. Review these entries to ensure they are helpful for consumers:

   - Categorize entries appropriately following the ["Keep a Changelog"](https://keepachangelog.com/en/1.0.0/) guidelines. Ensure that no changes are listed under "Uncategorized".
   - Remove changelog entries that don't affect consumers of the package (e.g. lockfile changes or development environment changes). Exceptions may be made for changes that might be of interest despite not having an effect upon the published package (e.g. major test improvements, security improvements, improved documentation, etc.).
   - Reword changelog entries to explain changes in terms that users of the package will understand (e.g., avoid referencing internal variables/concepts).
   - Consolidate related changes into single entries where appropriate.

   Run `yarn changelog:validate` when you're done to ensure all changelogs are correctly formatted.

6. **Push and submit a pull request.**

   Create a PR for the release branch so that it can be reviewed and tested.
   Release PRs can be approved by codeowners of affected packages, so as long as the above guidelines have been followed, there is no need to reach out to the Wallet Framework team for approval.

7. **Incorporate any new changes from `main`.**

   If you see the "Update branch" button on your release PR, stop and look over the most recent commits made to `main`. If there are new changes to packages you are releasing, make sure they are reflected in the appropriate changelogs.

8. **Merge the release PR and wait for approval.**

   "Squash & Merge" the release PR when it's approved.

   Merging triggers the [`publish-release` GitHub action](https://github.com/MetaMask/action-publish-release) workflow to tag the final release commit and publish the release on GitHub. Before packages are published to NPM, this action will automatically notify the [`npm-publishers`](https://github.com/orgs/MetaMask/teams/npm-publishers) team in Slack to review and approve the release.

9. **Verify publication.**

   Once the `npm-publishers` team has approved the release, you can click on the link in the Slack message to monitor the remainder of the process.

   After the action has completed, [check NPM](https://npms.io/search?q=scope%3Ametamask) to verify that all relevant packages have been published.

> **Tip:** You can specify a different port if needed: `yarn create-release-branch -i -p 3001`

### Option B: Manual Release Specification

If you prefer more direct control over the release process:

1. **Start by creating the release branch.**

   On the `main` branch, run `yarn create-release-branch`. This command creates a branch named `release/<new release version>` which will represent the new release.

2. **Specify packages to release along with their versions.**

   Unless you've made a lot of breaking changes, you probably don't want to publish a new version of every single package in this repo. Fortunately, you can choose a subset of packages to include in the next release. You do this by modifying a YAML file called a "release spec", which the tool has generated and opened it in your editor. Follow the instructions at the top of the file for more information.

   In addition to selecting a list of packages, you'll also want to tell the tool which new versions they ought to receive. Since you'll want to follow SemVer, how you bump a package depends on the nature of the changes. You can understand these changes better by opening the changelog for each package in your editor.

   Once you save and close the release spec, the tool will proceed.

3. **Review and resolve dependency requirements.**

   The tool automatically analyzes your selections and identifies potential dependency issues that need to be addressed before proceeding. You'll need to review and resolve these issues by either:

   - Including the suggested additional packages
   - Confirming that you want to skip certain packages (if you're certain they don't need to be updated)

   Common types of dependency issues you might encounter:

   - **Missing dependencies**: If you're releasing Package A that depends on Package B, the UI will prompt you to include Package B
   - **Breaking change impacts**: If you're releasing Package B with breaking changes, the UI will identify packages that have peer dependencies on Package B that need to be updated
   - **Version incompatibilities**: The UI will flag if your selected version bumps don't follow semantic versioning rules relative to dependent packages

   To address these issues, you will need to reopen the YAML file, modify it by either adding more packages to the release or omitting packages from the release you think are safe, and then re-running `yarn create-release-branch`. You may need to repeat this step multiple times until you don't see any more errors.

4. **Review and update changelogs for relevant packages.**

   Once the tool proceeds without issue, you will be on the new release branch. In addition, each package you intend to release has been updated in two ways:

   - The version in `package.json` has been bumped.
   - A new section has been added at the top of `CHANGELOG` for the new version.

   At this point, you need to review the changelog entries and ensure that they are helpful for consumers:

   - Categorize entries appropriately following the ["Keep a Changelog"](https://keepachangelog.com/en/1.0.0/) guidelines. Ensure that no changes are listed under "Uncategorized".
   - Remove changelog entries that don't affect consumers of the package (e.g. lockfile changes or development environment changes). Exceptions may be made for changes that might be of interest despite not having an effect upon the published package (e.g. major test improvements, security improvements, improved documentation, etc.).
   - Reword changelog entries to explain changes in terms that users of the package will understand (e.g., avoid referencing internal variables/concepts).
   - Consolidate related changes into single entries where appropriate.

   Make sure to run `yarn changelog:validate` once you're done to ensure all changelogs are correctly formatted.

5. **Push and submit a pull request.**

   Create a PR for the release branch so that it can be reviewed and tested.
   Release PRs can be approved by codeowners of affected packages, so as long as the above guidelines have been followed, there is no need to reach out to the Wallet Framework team for approval.

6. **Incorporate any new changes from `main`.**

   If you see the "Update branch" button on your release PR, stop and look over the most recent commits made to `main`. If there are new changes to packages you are releasing, make sure they are reflected in the appropriate changelogs.

7. **Merge the release PR and wait for approval.**

   "Squash & Merge" the release PR when it's approved.

   Merging triggers the [`publish-release` GitHub action](https://github.com/MetaMask/action-publish-release) workflow to tag the final release commit and publish the release on GitHub. Before packages are published to NPM, this action will automatically notify the [`npm-publishers`](https://github.com/orgs/MetaMask/teams/npm-publishers) team in Slack to review and approve the release.

8. **Verify publication.**

   Once the `npm-publishers` team has approved the release, you can click on the link in the Slack message to monitor the remainder of the process.

   After the action has completed, [check NPM](https://npms.io/search?q=scope%3Ametamask) to verify that all relevant packages have been published.
