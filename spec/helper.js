process.env['NODE_ENV'] = 'test';
const path = require('path');

const webpackConfig = require(path.resolve('webpack.config'));
const webpackBabelPlugins = webpackConfig.module.rules.find(
  e => e.loader === 'babel-loader').options.plugins;
const plugins = webpackBabelPlugins.concat([
  'add-module-exports',
  'transform-es2015-modules-commonjs',
]);

require('babel-register')({ env: { test: { plugins } } });

const paths = [path.resolve('src', 'js')];
if (process.env['NODE_PATH'] === undefined) { process.env['NODE_PATH'] = ''; }
process.env['NODE_PATH'] += `:${paths.join(':')}`;
require('module')._initPaths();
