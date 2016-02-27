var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

//move configs elsewhere once we have more
const config = {
  env : process.env.NODE_ENV || 'development',
  path_base  : path.resolve(__dirname, '..'),
  dir_app    : 'app',
  dir_dist   : 'static/dist',
  dir_test   : 'tests',
}

module.exports = {
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  resolve: {
    root: path.resolve(config.path_base, config.dir_app),
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    path.resolve(config.path_base, config.dir_app) + '/main.js'
  ],
  output: {
    path: path.resolve(config.path_base, config.dir_dist),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(config.path_base, config.dir_app) + '/index.html',
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }})
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  }
}
