const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const SriPlugin = require('webpack-subresource-integrity');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = (env) => {
  return {
    entry: './src/index',
    plugins: [
      new CleanWebpackPlugin(['www'], {
        exclude: ['.gitignore'],
      }),
      new HtmlWebpackPlugin({
        title: 'Site',
        inject: false,
        minify: {
          collapseWhitespace: true
        },
        meta: [
          {
            name: 'description',
            content: 'This is a description'
          }
        ],
        template: 'src/www.ejs',
        lang: 'en-US',
        mobile: false,
        hash: false,
        favicon: 'src/assets/favicon.ico'
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      }),
      new WebpackPwaManifest({
        theme_color: '#ffffff',
        name: 'My Progressive Web App',
        short_name: 'MyPWA',
        description: 'My awesome Progressive Web App!',
        background_color: '#ffffff',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: env.production
      })
    ],
    output: {
      crossOriginLoading: 'anonymous',
      filename: 'main.bundle.js',
      path: path.resolve(__dirname, 'www')
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true
          }
        }
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ]
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.sss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'postcss-loader'
          ]
        },
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