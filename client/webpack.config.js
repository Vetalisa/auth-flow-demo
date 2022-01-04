const path = require("path")

const webpackConfig = {
  entry: path.resolve(__dirname, "./src/index.jsx"),
  output: {
    // filename: "main.js", // by default
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  }
}

module.exports = webpackConfig
