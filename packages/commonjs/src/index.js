const environmentRules = require('./environment.json');

module.exports = {
  env: {
    commonjs: true,
  },

  rules: {
    ...environmentRules,
  },
};
