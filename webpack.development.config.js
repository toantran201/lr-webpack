const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  mode: 'development', // none | development | production,
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    }
  },
  devtool: 'eval',
  module: {
    rules: [
      // ========== Assets ========== //
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
      // ========== Stylesheets ========== //
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader' // first, use sass-loader to convert scss to css
        ]
      },
      // ========== JS ========== //
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: [
              '@babel/env',  // Compile a script version 6,7,8,9,10... down to script version 5
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello world",
      template: './index.html',
    })
  ]
};