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
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      output: {
        comments: false,
      },
      compress: {
        warnings: true,
      },
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
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        exclude,
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
    ],
  },
};
