const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.scss$/,
        use: [
        'style-loader',
        'css-loader',
        'sass-loader'
        ]
      },
      {
        test: /\.test\.js$/,
        use: 'mocha-loader',
        exclude: /node_modules/
      }
    ]
  }
});