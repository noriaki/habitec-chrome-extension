const config = require('./webpack.config');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  module: config.module,
  resolve: config.resolve,
  performance: config.performance,
};
