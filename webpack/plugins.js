const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const environment = require('./environment')

const plugins = []
const isProduction = (process.env.NODE_ENV === 'production')
const isStandalone = (process.env.APP_MODE === 'standalone')

plugins.push(new webpack.EnvironmentPlugin(environment))

if (isStandalone) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
  plugins.push(new HtmlWebpackPlugin({ template: 'index.html.ejs' }))
}

if (isProduction) {
  // enable so-called scope hoisting in Webpack
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    output: {
      comments: false,
    },
  }))
}

module.exports = plugins
