const path = require("path");

module.exports = {
  mode: "development",
  devtool: "none",
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].js"
  }
};
