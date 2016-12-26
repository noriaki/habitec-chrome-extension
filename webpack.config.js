const path = require('path');
const webpack = require('webpack');
const AsyncAwaitPlugin = require('webpack-async-await');

module.exports = {
  entry: {
    background: [path.resolve('src', 'js', 'background.js')],
    "content_script": [path.resolve('src', 'js', 'content_script.js')]
  },
  output: {
    path: path.resolve('build', 'js'),
    filename: '[name].js'
  },
  devtool: '#inline-source-map',
  plugins: [new AsyncAwaitPlugin({})],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
