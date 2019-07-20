const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config/config');
const exclude = /node_modules/;

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/app/index',
    `webpack-dev-server/client?http://localhost:${config.ports.frontend}`,
  ],
  output: {
    filename: 'app.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __API_URL__: JSON.stringify('http://localhost:8000'),
    }),
    new HtmlWebpackPlugin({
      template: `html-loader!preprocess-loader!src/index.html`,
      inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'src')],
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // modules: true,
              // localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        exclude,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        exclude,
      },
      {
        test: /\.(ttf|woff)$/,
        loader: 'file-loader',
        exclude,
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
        exclude,
      },
    ],
  },
  devServer: {
    contentBase: './src',
    port: config.ports.frontend,
    historyApiFallback: true,
  },
};
