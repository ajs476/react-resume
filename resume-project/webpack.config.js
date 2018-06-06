const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
}
