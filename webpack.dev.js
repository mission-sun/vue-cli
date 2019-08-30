const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "inline-source-map",
  // devServer: {
  //   contentBase: "./dist"
  // }
  devServer: {
    // contentBase: "./dist"
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    host: "127.0.0.1",
    hot: true
  },
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ]
});
