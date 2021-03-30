#!/usr/bin/env bash

set -x
set -e
set -u
set -o pipefail

# --frozen-lockfile doesn't work in monorepos for yarn v1, so we diff ourselves
# See: https://github.com/yarnpkg/yarn/issues/4098

yarn --ignore-scripts --har

if ! git diff --quiet;
then
  echo "Error: yarn install modified lockfile";
  exit 1;
fi
