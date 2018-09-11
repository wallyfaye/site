const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = (env) => {
  return {
    entry: './src/index',
    plugins: [
      new CleanWebpackPlugin(['dist'], {
        exclude: ['.gitignore'],
      }),
      new HtmlWebpackPlugin({
        title: 'Site',
        inject: false,
        template: 'src/index.ejs',
        lang: 'en-US',
        mobile: true,
        hash: true,
        favicon: 'src/assets/favicon.ico'
      }),
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: env.production
      })
    ],
    output: {
      crossOriginLoading: 'anonymous',
      filename: 'main.bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ]
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name (file) {
                  return '[name].[ext]'
                }
              }
            }
          ]
        },
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
}