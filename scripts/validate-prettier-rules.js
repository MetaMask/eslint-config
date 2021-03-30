const fs = require('fs');
const pathUtils = require('path');
const prettierConfig = require('eslint-config-prettier');

const OFF = 'off';

// The prettier rules that should never be included in a config.
const disabledPrettierRules = Object.entries(prettierConfig.rules).reduce(
  (allRules, [ruleName, ruleValue]) => {
    // Rules set to 'off' should never be enabled.
    // Rules set to 0 (number) may sometimes be included. We don't attend to those.
    if (ruleValue === OFF) {
      allRules.push(ruleName);
    }
    return allRules;
  },
  [],
);

// The path to the monorepo packages directory
const PACKAGES_DIR_PATH = pathUtils.join(__dirname, '../packages');

// Get the configs from all packages, keyed by package names
const eslintConfigs = fs
  .readdirSync(PACKAGES_DIR_PATH)
  .reduce((allConfigs, dirName) => {
    const packagePath = pathUtils.join(PACKAGES_DIR_PATH, dirName);
    const manifestPath = pathUtils.join(packagePath, 'package.json');
    const { name: packageName } = JSON.parse(
      fs.readFileSync(manifestPath, 'utf-8'),
    );

    allConfigs[packageName] = require(packagePath);
    return allConfigs;
  }, {});

// Iterate over our configs, identify rules that are enabled even though they shouldn't be,
// and throw an error if any are found.
// TODO: Collect violations for all packages.
Object.entries(eslintConfigs).forEach(
  ([packageName, { rules: currentRuleSet }]) => {
    const violations = [];
    disabledPrettierRules.forEach((ruleName) => {
      if (ruleName in currentRuleSet && currentRuleSet[ruleName] !== OFF) {
        violations.push(ruleName);
      }
    });

    if (violations.length > 0) {
      throw new Error(
        `${packageName} has enabled the following rules that are disabled by prettier:\n${violations.join(
          '\n',
        )}`,
      );
    }
  },
);
