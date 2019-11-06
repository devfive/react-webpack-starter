const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config/config');
const exclude = /node_modules/;

module.exports = {
  mode: 'production',
  entry: [
    'babel-polyfill',
    './src/app/index',
  ],
  output: {
    filename: 'app-[hash:7].js',
    publicPath: config.paths.baseUrl,
    path: config.paths.dist,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
      __DEV__: false,
      __API_URL__: JSON.stringify('http://localhost:8000'),
    }),
    new HtmlWebpackPlugin({
      template: `html-loader!preprocess-loader!src/index.html`,
      inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.join(__dirname, 'src')],
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
      },
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        include: [path.join(__dirname, 'src')],
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          failOnWarning: false,
          failOnError: true,
        },
      },
      {
        test: /\.tsx?$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        loader: 'ts-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          'file-loader?name=assets/[hash:7].[ext]',
          'image-webpack-loader',
        ],
        exclude,
      },
      {
        test: /\.(ttf|woff)$/,
        use: [
          'file-loader?name=assets/[hash:7].[ext]',
        ],
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
};
