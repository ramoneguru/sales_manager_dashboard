const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const {resolve} = require('path');
const isDev = process.argv.indexOf('--d') !== -1;
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [ 'babel-polyfill', './js/main.js', './scss/main.scss'],
  output: {
    filename: 'bundle.js',
    path:resolve(__dirname, 'dist'),
  },
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
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  devtool: isDev ?  'source-map': 'eval',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Sales Activity Dashboard App',
      template: './index.html',
      filename: './index.html',
      inject: true,
      cache: isDev ?  false : true,
      minify:{
        removeComments: isDev ? false : true,
        collapseWhitespace:isDev ? false : true
      }
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    }),
    new ManifestPlugin({
      "writeToFileEmit": isDev ?  true : false,
      "short_name":"Sales Activity App",
      "name": "Sales Activity App",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#fff",
      "description": "Activity Performance Metrics For Sales Teams."
    })
  ]
}