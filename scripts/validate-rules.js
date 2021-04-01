const { readdirSync, readFileSync, promises: fs } = require('fs');
const pathUtils = require('path');
const { FlatCompat } = require('@eslint/eslintrc');
const eslintRecommendedConfig = require('eslint/conf/eslint-recommended');
const {
  configs: { recommended: prettierConfig },
} = require('eslint-plugin-prettier');
const deepEqual = require('fast-deep-equal');

const ESLINT_RECOMMENDED = 'eslint:recommended';
const RULES = 'rules';
const OFF = 'off';

// The path to the monorepo packages directory
const PACKAGES_DIR_PATH = pathUtils.join(__dirname, '../packages');

// The path to the rules snapshot file, relative to a package root.
const RULES_SNAPSHOT_PATH = 'rules-snapshot.json';

const WRITE_MODE = ['--write', '-w'].includes(process.argv[2]);

// /
// Main
// /

main();

async function main() {
  const metamaskConfigs = getMetamaskConfigs();
  const requiredPrettierRules = getRequiredPrettierRules();

  const prettierViolations = getConfigViolationsMap(metamaskConfigs);
  const snapshotViolations = [];

  await Promise.all(
    Object.entries(metamaskConfigs).map(
      async ([packageName, { flatRules, packagePath }]) => {
        validatePrettierRules(
          packageName,
          flatRules,
          requiredPrettierRules,
          prettierViolations,
        );
        await validateRulesSnapshot(
          packageName,
          packagePath,
          flatRules,
          snapshotViolations,
        );
      },
    ),
  );

  let failures = 0;
  if (hasPrettierViolations(prettierViolations)) {
    failures += 1;
    logPrettierViolations(prettierViolations);
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

function logPrettierViolations(prettierViolations) {
  console.error(
    `\nError: Detected Prettier rule violations. Disable the specified rule(s) in the following package(s):\n\n${Object.entries(
      prettierViolations,
    )
      .map(([packageName, rules]) => {
        return `${tabs(1)}${packageName}\n${rules.join(`${tabs(2)}\n`)}`;
      })
      .join(`\n${tabs(1)}`)}`,
  );
}

function logSnapshotViolations(snapshotViolations) {
  console.error(
    `\nError: Computed snapshot differs from the existing snapshot for the following package(s). Take a new snapshot and try again.\n\n${tabs(
      1,
    )}${snapshotViolations.join(`${tabs(1)}\n`)}`,
  );
}

function tabs(n) {
  const TAB = '    ';
  return TAB + new Array(n).join(TAB);
}

async function validateRulesSnapshot(
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
 * Checks whether a config violations map has any violations.
 */
function hasPrettierViolations(violationsMap) {
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
 */
function getConfigViolationsMap(configs) {
  return Object.keys(configs).reduce((map, packageName) => {
    map[packageName] = [];
    return map;
  }, {});
}

// /
// Specific config getters.
// /

/**
 * Gets the configs from all our packages, keyed by package names.
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
      flatRules: getFlatRules(config),
      packagePath,
    };
    return allConfigs;
  }, {});
}

/**
 * Gets the rules that are always recommended to be disabled per Prettier's
 * ESLint config.
 */
function getRequiredPrettierRules() {
  return Object.entries(getFlatRules(prettierConfig)).reduce(
    (allRules, [ruleName, ruleValue]) => {
      // Rules set to 'off' should never be enabled.
      // Rules set to 0 (number) may sometimes be included. We don't attend to those.
      // https://github.com/prettier/eslint-config-prettier/blob/abf3ba1/index.js#L7-L9
      if (ruleValue === OFF) {
        allRules.push(ruleName);
      }
      return allRules;
    },
    [],
  );
}

// /
// ESLint config parsing utilities.
// /

function getFlatRules(configObject) {
  const flatConfig = getFlatConfig(configObject);

  return flatConfig.reduce((flatRules, config) => {
    if (RULES in config) {
      return {
        ...flatRules,
        ...config[RULES],
      };
    }
    return flatRules;
  }, {});
}

/**
 * Takes a parsed eslint config object and flattens it and the configs it
 * extends into an array.
 */
function getFlatConfig(configObject) {
  // FlatCompat does a lot of stuff under the hood, including resolving the
  // modules exporting the configs extended by the given config.
  // Luckily for us, that's kind of the hardest part.
  const flatConfig = new FlatCompat().config(configObject);
  populateNamedRulesets(flatConfig);
  return flatConfig;
}

/**
 * getFlatConfig helper.
 * Looks for for the string 'eslint:recommended' in the given config array
 * and replaces it with its corresponding rules object.
 *
 * Throws an error if the config array contains an invalid config object.
 */
function populateNamedRulesets(configArray) {
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
