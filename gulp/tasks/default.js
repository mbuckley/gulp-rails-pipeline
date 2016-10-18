var gulp = require('gulp');

gulp.task('default', ['images', 'iconFont', 'sass', 'webpack:build-dev', 'watch']);
