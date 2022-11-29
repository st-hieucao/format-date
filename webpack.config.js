const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js', // name file input (one file only)
  output: {
    filename: 'format-date.js', // name file output
    path: path.resolve(__dirname, 'dist'), // url file output
    clean: true // remove tat ca file ko dung den
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],

  // code spliting
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
