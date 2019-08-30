const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // entry: "./src/index.js",
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
    // app: "./src/index.js"
  },
  output: {
    // filename: "bundle.js",
    //  name 值跟 entry中的app 和 print值是对应的关系的
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  devServer: {
    // contentBase: "./dist"
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    host: "127.0.0.1",
    hot: true,
    proxy: {
      "/api": "www.biadu.com"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    // 模块热替换
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  }
};
