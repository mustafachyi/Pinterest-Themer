const path = require('path');

module.exports = {
  entry: './script.user.js',
  output: {
    filename: 'bundle.user.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  devtool: false
}; 