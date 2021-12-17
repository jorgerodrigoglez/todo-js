// npm install --save-dev html-loader html-webpack-plugin
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              //attributes: false,
              minimize: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
    }),
  ]
};
