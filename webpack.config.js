const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/index.js'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist'),
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react']
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
};