// npm install --save-dev html-loader html-webpack-plugin
// npm i -D webpack-dev-server
// npm install --save-dev mini-css-extract-plugin
// npm install copy-webpack-plugin@8.1.1 --save-dev
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// npm i -D css-minimizer-webpack-plugin terser-webpack-plugin
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// npm install --save-dev babel-loader @babel/core
// npm install @babel/preset-env --save-dev

module.exports = {
  mode: "production",

  output: {
    clean: true,
    filename: "main.[contenthash].js"
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
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  },

  plugins: [
    new HtmlWebPackPlugin({
      title: "Mi Webpack App",
      //filename: "hola.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }]
    })
  ]
};
