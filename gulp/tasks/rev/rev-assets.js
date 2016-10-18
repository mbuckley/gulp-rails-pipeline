var config       = require('../../config');
var gulp         = require('gulp');
var debug        = require('gulp-debug');
var RevAll       = require('gulp-rev-all');

// Add md5 hashes to assets
gulp.task('rev-assets', function() {
  return gulp.src(config.publicAssets + "/**/*(*.css|*.js|*.png|*.eot|*.woff|*.ttf)")
    .pipe(RevAll.revision())
    .pipe(gulp.dest(config.publicAssets))
    .pipe(RevAll.manifestFile())
    .pipe(gulp.dest(config.publicAssets));
});
