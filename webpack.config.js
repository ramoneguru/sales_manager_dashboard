const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const {resolve} = require('path');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

module.exports = env => {
  return {
    entry: ['./js/main.js', './scss/main.scss'],
    output: {
      path: resolve(__dirname, './dist'),
      filename: 'bundle.[hash].js'
    },
    devServer: {
      inline: true,
      contentBase: './dist'
    },
    context: resolve(__dirname, 'src'),
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
            loader: 'css-loader?importLoaders=1',
          }),
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
        template: './index.html',
        path: './dist',
        filename:'index.html'
      }),
      new ExtractTextPlugin({ // define where to save the css file
        filename: 'dist/bundle.[hash].css',
        allChunks: true
      })
    ]
  }
}

////node-sass src/styles/main.scss dist/style.css --output-style compressed &&