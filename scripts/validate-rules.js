// const pathUtils = require('path');
const { FlatCompat } = require('@eslint/eslintrc');
const eslintRecommendedRules = require('eslint/conf/eslint-recommended')

const ESLINT_RECOMMENDED = 'eslint:recommended'
const RULES = 'rules'

const someConfig = {
  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs']
}

const flatRules = getFlatRules(someConfig)

function getFlatRules(configObject) {
  const flatConfig = getFlatConfig(configObject)
  // logFlatConfig(flatConfig)
  console.log(flatConfig)

  return flatConfig.reduce((flatRules, config) => {
    if (RULES in config) {
      flatRules = {
        ...flatRules,
        ...config[RULES],
      }
    }
    return config
  }, {})
}


/**
 * Takes a parsed eslint config object and flattens it and the configs it
 * extends into an array.
 */
function getFlatConfig(configObject) {
  // FlatCompat does a lot of stuff under the hood, including resolving the
  // modules exporting the configs extended by the given config.
  // Luckily for us, that's kind of the hardest part.
  const flatConfig = new FlatCompat().config(configObject)
  populateNamedRulesets(flatConfig)
  return flatConfig
}

/**
 * getFlatConfig helper.
 * Looks for for the string 'eslint:recommended' in the given config array
 * and replaces it with its corresponding rules object.
 * 
 * Throws an error if the config array contains an invalid config object.
 */
function populateNamedRulesets(configArray) {
  let index = null
  while (index !== -1) {
    index = configArray.indexOf(ESLINT_RECOMMENDED)
    if (index !== -1) {
      configArray[index] = eslintRecommendedRules
    }
  }

  for (const config of configArray) {
    if (!config || typeof config !== 'object' || Array.isArray(config)) {
      throw new Error('Unrecognized ruleset: ' + config)
    }
  }
}

// temp

function logFlatConfig(flatConfig) {
  flatConfig.forEach(thing => {
    if (typeof thing === 'string') {
      console.log(thing)
    } else {
      RULES in thing ? console.log(thing[RULES]) : console.log(Object.keys(thing))
    }
  })
}