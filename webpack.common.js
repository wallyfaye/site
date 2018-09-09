const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['.gitignore'],
    }),
    new HtmlWebpackPlugin({
      title: 'Site',
      inject: false,
      template: 'src/index.ejs',
      lang: 'en-US'
    })
  ],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {extensions: ['.js','.jsx']},
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};