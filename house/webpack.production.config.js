const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require('webpack').container

module.exports = {
  entry: './src/house.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/static/'
  },
  mode: 'production', // none | development | production,
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000 // 3kb - change default min size to tell webpack bundle separate file if file size over 3kb
    }
  },
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
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' // first, use sass-loader to convert scss to css
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: "house.html",
      title: "House",
      description: "House",
      template: './index.html',
      chunks: [
        'house'
      ],
      minify: false
    }),
    new ModuleFederationPlugin({
      name: 'HouseApplication',
      remotes: {
        HelloWorldApplication: 'HelloWorldApplication@http://localhost:9001/remoteEntry.js'
      }
    })
  ]
};