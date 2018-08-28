const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['.gitignore'],
    }),
    new HtmlWebpackPlugin({
      title: 'Site'
    })
  ],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};