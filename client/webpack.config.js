/*
 * Webpack development server configuration
 */

"use strict";

var webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "main.js",
    publicPath: "/assets/"
  },
  cache: true,
  debug: true,
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel?presets[]=es2015"]
      },
      {
        test: /\.sass/,
        loader:
          "style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      }
    ]
  }
};
