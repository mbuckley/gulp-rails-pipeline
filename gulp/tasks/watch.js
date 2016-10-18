var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

//NOTE: using gulp.start is not ideal. Gulp 4 will address this.
gulp.task('watch', ['browserSync'], function(callback) {
  watch(config.sass.src, function() { gulp.start('sass'); });
  watch(config.images.src, function() { gulp.start('images'); });
  watch(config.iconFont.src, function() { gulp.start('iconFont'); });
  watch(config.javascripts.src, function() { gulp.start('webpack:build-dev:bs'); });
});
