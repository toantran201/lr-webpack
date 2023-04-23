const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
    publicPath: 'dist/', // optional
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 6 * 1024 // 6kb
          }
        }
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  }
};