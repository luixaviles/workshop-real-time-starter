const path = require("path");
const glob = require("glob");

module.exports = {
    mode: "development",
    target: "node",
    devtool: "inline-source-map",
    entry: glob.sync("./src/**/*.ts"),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'commonjs2'
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    }
  };