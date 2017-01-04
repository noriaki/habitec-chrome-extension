const merge = require('lodash/merge');
const eslintConfig = require('../.eslintrc.json');

module.exports = merge({}, eslintConfig, {
  "env": {
    "mocha": true
  },
  "rules": {
    "no-unused-expressions": "off"
  }
});
