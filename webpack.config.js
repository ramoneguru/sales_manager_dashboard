/**
 * @TODO: turn on caching, minification for HtmlWebpackPlugin
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const {resolve} = require('path');
const isDev = process.argv.indexOf('--d') !== -1;
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './js/main.js', './scss/main.scss'],
  output: {
    path:resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  devtool: isDev?  'source-map': 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader:'eslint-loader',
            options: {
              "parser": "babel-eslint"
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            query: {presets: ['es2015', 'react']}
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1'
        })
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Sales Activity Dashboard App',
      template: './index.html',
      filename: './index.html',
      inject:true,
      cache: false,
      minify:{
        removeComments:false,
        collapseWhitespace:false,
      }
    }),
    new ExtractTextPlugin({
      filename:   'bundle.[hash].css',
      allChunks: true
    }),
    new ManifestPlugin({
      "writeToFileEmit":false,
      "short_name":"GPC Sales Activity App",
      "name": "HackerWeb",
      "short_name": "HackerWeb",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#fff",
      "description": "A simply readable Hacker News app."
    })
  ]
}

//mocha --compilers js:babel-core/register --require babel-polyfill