const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.dev.js');

module.exports = merge(common, {
  entry: './test/test.js',
  module: {
    rules: [
      {
        test: [/\.test\.js$/],
        include: [
          path.resolve(__dirname, "test")
        ],
        use: 'mocha-loader',
        exclude: /node_modules/
      }
    ]
  }
});