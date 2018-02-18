var path = require("path");
var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var HtmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: true
});
var extractPlugin = new ExtractTextPlugin({
  filename: "main.css"
});

module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [extractPlugin, HtmlWebpackPlugin],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build"
  },
  devServer: {
    contentBase: path.join(__dirname, "/build"),
    compress: true,
    port: 3000
  }
};
