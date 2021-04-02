const { readdirSync, readFileSync, promises: fs } = require('fs');
const pathUtils = require('path');
const { FlatCompat } = require('@eslint/eslintrc');
const eslintRecommendedConfig = require('eslint/conf/eslint-recommended');
const {
  configs: { recommended: prettierConfig },
} = require('eslint-plugin-prettier');
const deepEqual = require('fast-deep-equal');

const BASE_CONFIG_NAME = '@metamask/eslint-config';
const ESLINT_RECOMMENDED = 'eslint:recommended';
const RULES = 'rules';
const OFF = 'off';

// The path to the monorepo packages directory
const PACKAGES_DIR_PATH = pathUtils.join(__dirname, '../packages');

// The path to the rules snapshot file, relative to a package root.
const RULES_SNAPSHOT_PATH = 'rules-snapshot.json';

// Whether this program was configured to be in write mode.
const WRITE_MODE = ['--write', '-w'].includes(process.argv[2]);

//----------------
// Main
//----------------

main();

/**
 * This script accomplishes 3 things:
 *
 * 1. Ensures that neither we nor any config that we extend enables any Prettier
 *    rules that should be disabled.
 * 2. Ensures that we only usefully configure rules, meaning our configs only
 *    contain rules that are configured differently from or do not exist in
 *    any config that we extend.
 * 3. Creates rule snapshots to make it easy to understand the impact of any
 *    changes we make to our configs, such as changing our specified rules or
 *    the configs that we extend.
 *
 * If the script is in write mode (by being given the argument --write or -w),
 * it will overwrite any existing rule snapshots. Otherwise, it will compare the
 * computed snapshot to the snapshot stored on disk, and exit with an error if
 * they aren't equal.
 */
async function main() {
  const metamaskConfigs = getMetamaskConfigs();
  const requiredPrettierRules = getRequiredPrettierRules();

  const prettierViolations = getViolationsMap(metamaskConfigs);
  const minimalismViolations = getViolationsMap(metamaskConfigs);
  const snapshotViolations = [];

  // Iterates over this monorepo's config packages and validates their rules.
  await Promise.all(
    Object.entries(metamaskConfigs).map(
      async ([packageName, { config, flatRules, packagePath }]) => {
        validatePrettierRules(
          packageName,
          flatRules.full,
          requiredPrettierRules,
          prettierViolations,
        );

        validateConfigMinimalism(
          packageName,
          config,
          flatRules.extended,
          minimalismViolations,
        );

        await validateOrWriteRulesSnapshot(
          packageName,
          packagePath,
          flatRules.full,
          snapshotViolations,
        );
      },
    ),
  );

  let failures = 0;
  if (hasViolations(prettierViolations)) {
    failures += 1;
    logPrettierViolations(prettierViolations);
  }

  if (hasViolations(minimalismViolations)) {
    failures += 1;
    logMinimalismViolations(minimalismViolations);
  }

  if (snapshotViolations.length > 0) {
    failures += 1;
    logSnapshotViolations(snapshotViolations);
  }

  if (failures === 0) {
    console.log(
      `Successfully validated rules${
        WRITE_MODE ? ' and wrote snapshots' : ''
      }!`,
    );
  }
  process.exit(failures);
}

//----------------
// Validation
//----------------

/**
 * Checks whether the given package violates any of the given Prettier rules,
 * and stores those violations in the given violations map.
 *
 * Mutates the violations map in place.
 *
 * @param {string} packageName - The name of the config package.
 * @param {Record<string, unknown>} flatRules - The package's flattened rules.
 * @param {Record<string, 'off' | unknown>} prettierRules - The required Prettier rules.
 * @param {Record<string, string[]>} violations - A map to store violations in.
 */
function validatePrettierRules(
  packageName,
  flatRules,
  prettierRules,
  violations,
) {
  prettierRules.forEach((ruleName) => {
    if (ruleName in flatRules && flatRules[ruleName] !== OFF) {
      violations[packageName].push(ruleName);
    }
  });
}

/**
 * Records whether the given config has any uselessly specified rules relative
 * to the config's flat extended rules. "Uselessly" means either that the rule
 * is explicitly disabled without ever being enabled, or that its configured
 * identically in the flat extended rules.
 *
 * @param {string} packageName - The name of the config package.
 * @param {Record<string, unknown>} config - The package's eslint config object
 * (i.e. its .eslintrc.js export).
 * @param {Record<string, unknown>} flatExtendedRules - The flattened rules of
 * every config extended by the package config.
 * @param {Record<string, string[]>} violations - A map to store violations in.
 */
function validateConfigMinimalism(
  packageName,
  config,
  flatExtendedRules,
  violations,
) {
  Object.entries(config.rules || {}).forEach(([ruleName, ruleValue]) => {
    if (
      deepEqual(flatExtendedRules[ruleName], ruleValue) ||
      (!(ruleName in flatExtendedRules) && ruleValue === OFF)
    ) {
      violations[packageName].push(ruleName);
    }
  });
}

/**
 * Checks whether a config violations map contains any violations.
 *
 * @param {Record<string, string[]>} - A map of package names to arrays with
 * violated rules, if any.
 * @returns {boolean} Whether the given map contains any violations.
 */
function hasViolations(violationsMap) {
  for (const violations of Object.values(violationsMap)) {
    if (violations.length > 0) {
      return true;
    }
  }
  return false;
}

/**
 * Takes a { [packageName]: any } map and returns a map with with the same keys
 * and empty array values, for storing rule violations that can be logged to the
 * console and fixed manually.
 *
 * @param {Record<string, unknown>} configs - An object with package name keys and arbitrary
 * values.
 * @returns {Record<string, string[]>} An object with the same keys and empty
 * array values.
 */
function getViolationsMap(configs) {
  return Object.keys(configs).reduce((map, packageName) => {
    map[packageName] = [];
    return map;
  }, {});
}

/**
 * If the program is in write mode, writes a rule snapshot to the given path.
 * Otherwise, checks whether the computed rules snapshot differs from the
 * snapshot on disk, and stores an error in the violations map if so.
 *
 * Mutates the violations map in place.
 *
 * @param {string} packageName - The name of the config package.
 * @param {string} packagePath - The path to the config package.
 * @param {Record<string, unknown>} flatRules - The package's flattened rules.
 * @param {Record<string, string[]>} violations - A map to store violations in.
 */
async function validateOrWriteRulesSnapshot(
  packageName,
  packagePath,
  flatRules,
  violations,
) {
  const snapshotFilePath = pathUtils.join(packagePath, RULES_SNAPSHOT_PATH);

  if (WRITE_MODE) {
    await writeRulesSnapshot(snapshotFilePath, flatRules);
  } else {
    try {
      const existingSnapshot = JSON.parse(
        await fs.readFile(snapshotFilePath, 'utf8'),
      );

      if (!deepEqual(existingSnapshot, flatRules)) {
        violations.push(packageName);
      }
    } catch (error) {
      console.error(
        `Encountered error while reading file "${snapshotFilePath}".`,
        error,
      );
      process.exit(1);
    }
  }
}

/**
 * Writes a rules snapshot to the given path.
 *
 * Calls process.exit(1) if the write call fails.
 *
 * @param {string} snapshotFilePath - The path of the file to write.
 * @param {Record<string, unknown>} flatRules - The rules to write.
 */
async function writeRulesSnapshot(snapshotFilePath, flatRules) {
  try {
    await fs.writeFile(
      snapshotFilePath,
      `${JSON.stringify(flatRules, null, 2)}\n`,
    );
  } catch (error) {
    console.error(
      `Encountered error while writing file "${snapshotFilePath}".`,
      error,
    );
    process.exit(1);
  }
}

//----------------
// Specific config getters
//----------------

/**
 * Iterates over the packages in this monorepo and returns an object of package
 * name keys with object values containing:
 * - The raw config
 * - Its flattened, complete rule set
 * - The path to the package
 *
 * @returns {Record<string, Record<string, Object|string>} The config map.
 */
function getMetamaskConfigs() {
  return readdirSync(PACKAGES_DIR_PATH).reduce((allConfigs, dirName) => {
    const packagePath = pathUtils.join(PACKAGES_DIR_PATH, dirName);
    const manifestPath = pathUtils.join(packagePath, 'package.json');
    const { name: packageName } = JSON.parse(
      readFileSync(manifestPath, 'utf-8'),
    );
    const config = require(packagePath);

    allConfigs[packageName] = {
      config,
      flatRules: getExtendedAndFullFlatRules(packageName, config),
      packagePath,
    };
    return allConfigs;
  }, {});
}

/**
 * Gets the full and extended flat rules for the given config.
 * The full flat rules are the combined flat rules for every config extended by
 * the given config, and the config's own rules.
 * The extended flat rules are the combined flat rules for every config extended
 * by the given config, _and_ the MetaMask base config.
 *
 * The extended flat rules are computed in this way because we assume that
 * consumers will extend our base config first, and then others. We want to
 * disable some rules in e.g. our TypeScript config that are enabled in our
 * base config. If we did not compute the extended flat rules in this way, our
 * rule minimization script would erroneously flag certain rules as useless.
 *
 * @param {string} packageName - The name of the config package.
 * @param {Record<string, unknown>} config - An eslint config object (e.g. .eslintrc.js).
 * @returns {{ extended: Record<string, unknown>, full: Record<string, unknown>}} An
 * object containing the extended and full flat rules.
 */
function getExtendedAndFullFlatRules(packageName, config) {
  const isBaseConfig = packageName === BASE_CONFIG_NAME;
  const flatConfig = isBaseConfig
    ? getFlatConfig(config)
    : getFlatConfigWithBaseConfig(config);

  const extendedFlatRules = getFlatRules(flatConfig.slice(0, -1));

  return {
    extended: extendedFlatRules,
    full: getFlatRules(isBaseConfig ? flatConfig : getFlatConfig(config)),
  };
}

/**
 * Prepends the base config to the "extends" array of the given config and
 * computes its flat config array.
 *
 * @param {Record<string, unknown>} configObject - An eslint config object (e.g. .eslintrc.js).
 * @returns {Record<string, unknown>[]} An array of parsed eslint config objects.
 */
function getFlatConfigWithBaseConfig(configObject) {
  const configCopy = { ...configObject };
  configCopy.extends = Array.isArray(configObject.extends)
    ? [BASE_CONFIG_NAME, ...configCopy.extends]
    : [BASE_CONFIG_NAME];
  return getFlatConfig(configCopy);
}

/**
 * Gets the rules that are always recommended to be disabled per Prettier's
 * ESLint config.
 *
 * @returns {string[]} The names of the rules that should always be
 * disabled when using Prettier.
 */
function getRequiredPrettierRules() {
  return Object.entries(getFlatRules(getFlatConfig(prettierConfig))).reduce(
    (allRules, [ruleName, ruleValue]) => {
      // Rules set to 'off' should never be enabled.
      // Rules set to 0 (number) may sometimes be included. We don't attend to those.
      // https://github.com/Prettier/eslint-config-Prettier/blob/abf3ba1/index.js#L7-L9
      if (ruleValue === OFF) {
        allRules.push(ruleName);
      }
      return allRules;
    },
    [],
  );
}

//----------------
// ESLint config parsing utilities
//----------------

/**
 * Takes an eslint flat config array and returns its own rules and the rules
 * of its extended configs (if any) in a single, flat object.
 *
 * @param {Record<string, unknown>[]} flatConfig - A flat eslint config array.
 * @returns {Record<string, unknown>} An object of eslint rule names and their
 * configuration.
 */
function getFlatRules(flatConfig) {
  // Flatten the config array into a single object
  const rawFlatRules = flatConfig.reduce((flatRules, config) => {
    if (RULES in config) {
      return {
        ...flatRules,
        ...config[RULES],
      };
    }
    return flatRules;
  }, {});

  // Sort the flat rules alphabetically and return them
  return sortObject(rawFlatRules);
}

/**
 * Sorts the keys of the given object, inserts them in that order in a new
 * object, and returns that object.
 *
 * @param {Record<string, unknown>} obj - The object to sort.
 * @returns {Record<string, unknown>} The sorted object.
 */
function sortObject(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((sortedObj, key) => {
      sortedObj[key] = obj[key];
      return sortedObj;
    }, {});
}

/**
 * Takes an eslint config object and flattens it and the configs it
 * extends into a single array, ordered by their dependency relationships.
 *
 * @param {Record<string, unknown>} configObject - An eslint config object (e.g. .eslintrc.js).
 * @returns {Record<string, unknown>[]} An array of parsed eslint config objects.
 */
function getFlatConfig(configObject) {
  // FlatCompat does a lot of stuff under the hood, including resolving the
  // modules exporting the configs extended by the given config.
  // Luckily for us, that's kind of the hardest part.
  const flatConfig = new FlatCompat().config(configObject);
  populateRecommendedRules(flatConfig);
  return flatConfig;
}

/**
 * getFlatConfig helper.
 * Looks for for the string 'eslint:recommended' in the given config array
 * and replaces it with its corresponding rules object.
 * Mutates the given array in place.
 *
 * Throws an error if the config array contains an invalid config object.
 *
 * @param {Record<string, unknown>[]} configArray - A flat eslint config array.
 */
function populateRecommendedRules(configArray) {
  let index = null;
  while (index !== -1) {
    index = configArray.indexOf(ESLINT_RECOMMENDED);
    if (index !== -1) {
      configArray[index] = eslintRecommendedConfig;
    }
  }

  for (const config of configArray) {
    if (!config || typeof config !== 'object' || Array.isArray(config)) {
      throw new Error(`Unrecognized ruleset: ${config}`);
    }
  }
}

//----------------
// Logging
//----------------

/**
 * Prints Prettier violations to console.error in a readable format.
 * Assumes that the given violations map contains violations.
 *
 * @param {Record<string, string[]>} prettierViolations - A map containing
 * Prettier violations.
 */
function logPrettierViolations(prettierViolations) {
  let str = `\nError: Detected Prettier rule violations. Disable the specified rule(s) in the following package(s):\n`;
  str += getViolationsString(prettierViolations);
  console.error(str);
}

/**
 * Prints minimalism violations to console.error in a readable format.
 * Assumes that the given violations map contains violations.
 *
 * @param {Record<string, string[]>} prettierViolations - A map containing
 * minimalism violations.
 */
function logMinimalismViolations(minimalismViolations) {
  let str = `\nError: Detected redundantly configured rules. Remove the specified rule(s) in the following package(s):\n`;
  str += getViolationsString(minimalismViolations);
  console.error(str);
}

/**
 * Assuming the given violations map contains violations, returns a formatted
 * string describing them.
 *
 * @param {Record<string, string[]>} violationsMap - A map of config package
 * names to rules flagged as violations.
 * @returns {string} A formatted string listing the violations.
 */
function getViolationsString(violationsMap) {
  let str = '';
  Object.entries(violationsMap).forEach(([packageName, violatedRules]) => {
    if (violationsMap[packageName].length > 0) {
      str += `\n${tabs(1)}${packageName}\n${tabs(2)}${violatedRules
        .sort()
        .join(`\n${tabs(2)}`)}\n`;
    }
  });
  return str;
}

/**
 * Assuming the given array contains offending packages, prints them to the
 * console in a readable format.
 *
 * @param {string[]} snapshotViolations - A map containing snapshot violations.
 */
function logSnapshotViolations(snapshotViolations) {
  console.error(
    `\nError: Computed snapshot differs from the existing snapshot for the following package(s). Take a new snapshot and try again.\n\n${tabs(
      1,
    )}${snapshotViolations.join(`\n${tabs(1)}`)}`,
  );
}

/**
 * @param {number} numTabs - The number of tabs to return.
 * @returns {string} A string consisting of numTabs 4-space "tabs".
 */
function tabs(numTabs) {
  const TAB = '    ';
  return TAB + new Array(numTabs).join(TAB);
}
