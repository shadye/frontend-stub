var path = require("path");
module.exports = {
  context: __dirname,
  entry: [
    "./src/app.js"
  ],
  output: {
		path: path.join(__dirname, "assets"),
		publicPath: "assets/",
		filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: "jade-loader?self" },
      { test: /\.css$/,    loader: "style-loader!css-loader" },
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader"},
      { test: /\.(png|jpg|gif)$/, loader: "url-loader?prefix=img/&limit=5000" },
      { test: /\.woff2?$/, loader: "url-loader?limit=5000" },
      { test: /\.(eot|ttf|svg)$/, loader: "file-loader" }
    ]
  },
  resolve: {
  	fallback: path.join(__dirname, "jam")
  },
  amd: {

  },
  plugins: [

  ]
}
