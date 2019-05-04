const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: '[chunkhash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          mangle: {
            keep_classnames: true,
          },
          compress: {
            keep_classnames: true,
          },
          output: {
            comments: false,
          },
        },
        parallel: true,
      }),
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
