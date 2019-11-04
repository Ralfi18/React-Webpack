
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ['./src/index.js'],
  output: {
      path: __dirname + '/build',
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
      	test: /\.html$/,
      	use: [
        	{
      	    loader: "html-loader"
       	  }
      	]
      }

    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  stats: {
    errorDetails: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
