const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config/config');
const exclude = /node_modules/;

module.exports = {
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
  devtool: 'eval',
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
        options: {
          presets: [
            'es2015',
            'stage-2',
            'react',
          ],
          plugins: [
            'transform-function-bind',
          ],
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
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
