const environmentRules = require('./environment.json');

module.exports = {
  env: {
    browser: true,
  },

  rules: {
    ...environmentRules,
  },
};
