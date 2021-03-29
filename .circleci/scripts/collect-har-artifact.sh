#!/usr/bin/env bash

set -x
set -e
set -u
set -o pipefail

mkdir -p build-artifacts/yarn-install-har

cd ./packages

# ref: https://github.com/koalaman/shellcheck/wiki/SC2044
find . -mindepth 1 -maxdepth 1 -type d -exec sh -c '
    cd "$1"
    mv ./*.har ../../build-artifacts/yarn-install-har/
  ' sh {} \;
