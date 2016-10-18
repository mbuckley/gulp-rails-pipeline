const webpack = require('webpack');

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
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js', '.json', '.coffee']
    },
    watch: false
 };
