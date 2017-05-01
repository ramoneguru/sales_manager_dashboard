const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const {resolve} = require('path');
const env = process.env.NODE_ENV || 'dev';
const isProduction = env === 'production';

module.exports = {

  context: resolve(__dirname, 'src'),
  entry: ['./js/main.js', './scss/main.scss'],
  output: {
    path:resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  devtool: env.dev ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
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
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1'
        })
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'GPC Sales Activity Dashboard App',
      template: './index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin({ // define where to save the css file
      filename:   'bundle.[hash].css',
      allChunks: true
    })
  ]

}

////node-sass src/styles/main.scss dist/style.css --output-style compressed &&