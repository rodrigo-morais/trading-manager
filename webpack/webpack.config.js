// Load optional .env file
require('dotenv').load({ silent: true })

const path = require('path')
const plugins = require('./plugins')

const BASE_PATH = path.join(__dirname, '..')

module.exports = {
  context: BASE_PATH,
  entry: ['idempotent-babel-polyfill', './src/index'],
  output: {
    path: path.join(BASE_PATH, 'public'),
    filename: 'application.js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  module: {
    rules: [
			{
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(BASE_PATH, 'src'),
        ],
      },
      {
        test: /\.(gif|jpg|png)$/,
        loader: 'url-loader',
        options: { limit: 8192 },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(BASE_PATH),
      'node_modules',
    ],
    extensions: ['.js', '.json'],
  },
  plugins,
  devServer: {
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    noInfo: false,
    stats: { colors: true },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  devtool: 'source-map',
}
