var webpack = require('webpack'),
  BowerWebpackPlugin = require('bower-webpack-plugin');
module.exports = {
  entry: [
    "webpack/hot/dev-server",
    "./src/app"
  ],
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?prefix=img/&limit=5000"
      },
      { test: /\.woff2?$/, loader: "url-loader?limit=5000" },
      { test: /\.(eot|ttf|svg)$/, loader: "file-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.styl$/,
        loaders: [
          "style",
          "css",
          "stylus"
        ]
      },
      { test: /\.jade$/, loader: "jade-loader"}
    ],
    plugins: [
      new BowerWebpackPlugin({
        modulesDirectories: ['bower_components'],
        manifestFiles: ['bower.json', '.bower.json'],
        includes: /.*/,
        excludes: /.*\.less$/
      }),
      new webpack.ProvidePlugin({
        /**
         * example:
         * $: "jquery"
         * and in a module:
         * $(".class") <- will work without require
         */
      }),
      new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify('development')
        /**
         * how to use in a module:
         * if (NODE_ENV === 'production') {
         *   console.log('There is Production mode');
         * } else {
         *   console.log('There is Development mode');
         * }
         */
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.DedupePlugin()
    ]
  }
}
