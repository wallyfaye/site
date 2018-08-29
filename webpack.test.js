const merge = require('webpack-merge');
const common = require('./webpack.dev.js');

module.exports = merge(common, {
  entry: './test/test.js',
  module: {
    rules: [
      {
        test: [/test\.js$/],
        use: 'mocha-loader',
        exclude: /node_modules/
      }
    ]
  }
});