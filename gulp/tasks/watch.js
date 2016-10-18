var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

//NOTE: using gulp.start is not ideal. Gulp 4 will address this.
gulp.task('watch', ['browserSync'], function(callback) {
  // 'sass' runs sass compile via gulp
  // watch(config.sass.src, function() { gulp.start('sass'); });

  // this one runs webpack:build-dev:bs and loads sass into a js module =p
  watch(config.sass.src, function() { gulp.start('webpack:build-dev:bs'); });
  watch(config.images.src, function() { gulp.start('images'); });
  watch(config.javascripts.src, function() { gulp.start('webpack:build-dev:bs'); });
});
