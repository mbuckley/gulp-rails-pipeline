/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in webpack.js
*/

var gutil        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {

  //Webpack stats api ref: https://github.com/webpack/docs/wiki/node.js-api#stats
  stats: function(label, stats) {
    gutil.log(label, stats.toString({
      chunks: false,
      colors: true
    }));
  },

  // watch: function(bundleName) {
  //   gutil.log('Watching files required by', gutil.colors.yellow(bundleName));
  // },

  start: function(filepath) {
    startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(filepath) + '...');
  },

  end: function(filepath) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  }
};
