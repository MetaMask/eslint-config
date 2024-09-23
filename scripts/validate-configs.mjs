// @ts-check

import { ConfigArray } from '@eslint/config-array';
import { hasProperty } from '@metamask/utils';
import fs from 'fs/promises';
import pathUtils, { join } from 'path';
import { format } from 'prettier';

/**
 * @typedef {import('eslint').Linter.Config[]} Config
 * @typedef {Record<string, string | Array<[string, ...unknown[]]>>} Rules
 */

// The path to the monorepo packages directory
const PACKAGES_DIR_PATH = pathUtils.join(import.meta.dirname, '../packages');

// The path to the rules snapshot file, relative to a package root.
const RULES_SNAPSHOT_PATH = 'rules-snapshot.json';

// Whether this program was configured to be in write mode.
const WRITE_MODE =
  process.argv[2] && ['--write', '-w'].includes(process.argv[2]);

// For logging
const TAB = '    ';

/**
 * Given an ESLint rule config value, convert it from numerical (0, 1, 2) to
 * string (off, warn, error) notation, or just returns the given value.
 *
 * @param {unknown} configValue - The rule config value to normalize.
 * @returns {string | unknown} The normalized rule config value.
 */
function normalizeRuleConfigValue(configValue) {
  if (typeof configValue !== 'number' && typeof configValue !== 'string') {
    return configValue;
  }

  switch (String(configValue)) {
    case '0':
      return 'off';
    case '1':
      return 'warn';
    case '2':
      return 'error';
    default:
      return configValue;
  }
}

/**
 * Normalize a rules object, converting numerical rule values to string rule
 * values.
 *
 * @param {Rules} rules - The rules object to normalize.
 * @returns {Rules} The normalized rules object.
 */
function normalizeRules(rules) {
  // @ts-expect-error - `Object.fromEntries` doesn't infer the return type.
  return Object.fromEntries(
    Object.entries(rules).map(([ruleName, ruleConfig]) => [
      ruleName,
      Array.isArray(ruleConfig)
        ? [normalizeRuleConfigValue(ruleConfig[0]), ...ruleConfig.slice(1)]
        : normalizeRuleConfigValue(ruleConfig),
    ]),
  );
}

/**
 * Flatten a {@link ConfigArray} into a record of rule names to rule values.
 *
 * @param {ConfigArray} configArray - The config array to flatten.
 * @returns {Rules} The flattened rule set.
 */
function flattenConfigArray(configArray) {
  /**
   * @type {Rules}
   */
  const ruleSet = configArray.reduce((flatConfig, rule) => {
    if (hasProperty(rule, 'rules')) {
      Object.assign(flatConfig, normalizeRules(rule.rules));
    }

    return flatConfig;
  }, {});

  return Object.fromEntries(
    Object.entries(ruleSet).sort(([a], [b]) => a.localeCompare(b)),
  );
}

/**
 * Iterates over the packages in this monorepo and returns an object of package
 * name keys with object values containing:
 * - The raw config.
 * - Its flattened, complete rule set.
 * - The path to the package.
 *
 * @returns {Promise<Map<string, { packagePath: string; ruleSet: Rules }>>} The
 * config map.
 */
async function getMetaMaskConfigs() {
  const packages = await fs.readdir(PACKAGES_DIR_PATH);

  /**
   * @type {Map<string, { packagePath: string; ruleSet: Rules }>}
   */
  const allConfigs = new Map();

  for (const packageName of packages) {
    const packagePath = pathUtils.join(PACKAGES_DIR_PATH, packageName);
    const manifestPath = pathUtils.join(packagePath, 'package.json');
    const { name } = JSON.parse(await fs.readFile(manifestPath, 'utf-8'));

    const { default: config } = await import(name);
    const normalizedConfig = await new ConfigArray(config).normalize();

    allConfigs.set(name, {
      ruleSet: flattenConfigArray(normalizedConfig),
      packagePath,
    });
  }

  return allConfigs;
}

/**
 * Return the requested number of tabs.
 *
 * @param {number} numTabs - The number of tabs to return.
 * @returns {string} A string consisting of numTabs 4-space "tabs".
 */
function tabs(numTabs) {
  if (numTabs < 1 || !Number.isInteger(numTabs)) {
    throw new Error('Expected positive integer.');
  }
  return numTabs === 1 ? TAB : TAB + new Array(numTabs).join(TAB);
}

/**
 * Assuming the given array contains offending packages, print them to the
 * console in a readable format.
 *
 * @param {string[]} snapshotViolations - A map containing snapshot violations.
 */
function logSnapshotViolations(snapshotViolations) {
  console.error(
    `\nError: Computed snapshot differs from the existing snapshot for the following package(s). Take a new snapshot and try again.\n\n${tabs(
      1,
    )}${snapshotViolations.join(`\n${tabs(1)}`)}\n`,
  );
}

const configs = await getMetaMaskConfigs();
const snapshotViolations = [];

for (const [name, { packagePath, ruleSet }] of configs.entries()) {
  const snapshotPath = join(packagePath, RULES_SNAPSHOT_PATH);
  const formattedRules = await format(JSON.stringify(ruleSet), {
    parser: 'json',
  });

  if (WRITE_MODE) {
    await fs.writeFile(snapshotPath, formattedRules);
    continue;
  }

  const snapshot = await fs.readFile(
    join(packagePath, RULES_SNAPSHOT_PATH),
    'utf-8',
  );

  if (snapshot !== formattedRules) {
    snapshotViolations.push(name);
    process.exitCode = 1;
  }
}

if (snapshotViolations.length > 0) {
  logSnapshotViolations(snapshotViolations);
}
