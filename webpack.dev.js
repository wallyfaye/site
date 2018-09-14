const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const fs = require('fs');

module.exports = (env) => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      https: {
        key: fs.readFileSync('./../../../secrets/localhost.key'),
        cert: fs.readFileSync('./../../../secrets/localhost.crt')
      }
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
          test: /\.sss$/,
          use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
          ]
        }
      ]
    }
  });
}