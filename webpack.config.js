// npm install --save-dev html-loader html-webpack-plugin
// npm i -D webpack-dev-server
// npm install --save-dev mini-css-extract-plugin
// npm install copy-webpack-plugin@8.1.1 --save-dev
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "file-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      title: "Mi Webpack App",
      //filename: "hola.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
        patterns: [
            { from: 'src/assets/', to: 'assets/' },
          ]
    })
  ]
};
