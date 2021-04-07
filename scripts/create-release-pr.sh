#!/usr/bin/env bash

set -e
set -u
set -o pipefail

if [ -z "${1:-}" ]
then
  echo "Error: Missing required positional argument: patch|minor|major"
  exit 1
fi

function push_version_bump() {
  local newVersion
  newVersion=$(node -p 'require("./lerna.json").version')

  git checkout -b "${newVersion}"
  git add .
  git commit -m "${newVersion}" || true
  git push -u origin "${newVersion}"
}

# bump version of all packages
lerna version "$1" --no-git-tag-version

# get new version, create and push release branch
push_version_bump
