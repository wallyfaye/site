const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

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
        minify: {
          collapseWhitespace: true
        },
        template: 'src/index.ejs',
        lang: 'en-US',
        mobile: true,
        hash: true,
        favicon: 'src/assets/favicon.ico'
      }),
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: env.production
      }),
      new CompressionPlugin({
        test: [
          /\.js(\?.*)?$/i,
          /\.css(\?.*)?$/i,
          /\.ico(\?.*)?$/i,
          /\.html(\?.*)?$/i
        ],
        compressionOptions: {
          numiterations: 15
        },
        algorithm(input, compressionOptions, callback) {
          return zopfli.gzip(input, compressionOptions, callback);
        }
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