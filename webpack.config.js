var path = require("path");
var webpack = require("webpack");

//TODO: Add provider plugin using below link as ref.
//ref: https://github.com/webpack/webpack-with-common-libs/blob/master/webpack.config.js

module.exports = {
    cache: true,
     entry: {
      'global': './client/javascripts/global.coffee',
      'vendor': [
        'angular'
      ]
    },
    output: {
        path: './public/assets/javascripts',
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
      loaders: [
        {
          test: /\.coffee$/,
          loader: "coffee-loader"
        },
        {
          test: /\.template\.html$/,
          loader: 'ngtemplate?module=GulpRailsApp&relativeTo=' + __dirname + '/!html'
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    resolve: {
      extensions: ['', '.js', '.json', '.coffee']
    }
 };
