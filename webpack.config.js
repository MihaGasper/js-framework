const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "./dist")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    clientLogLevel: "silent",
    writeToDisk: true,
    port: 3000
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
    ]
  }
};
