/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in webpack.js
*/

var gutil        = require('gulp-util');

module.exports = {

  //Webpack stats api ref: https://github.com/webpack/docs/wiki/node.js-api#stats
  stats: function(label, stats) {
    gutil.log(label, stats.toString({
      chunks: false,
      colors: true
    }));
  }
};
