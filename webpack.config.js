const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "none",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].js"
  },
  plugins: [new GasPlugin()]
};
