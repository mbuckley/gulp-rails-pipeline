  var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence')

gulp.task('build', function(cb) {
  var tasks = ['clean', ['iconFont', 'images'], 'sass'];

  if(process.env.NODE_ENV === 'production') {
    tasks.push('webpack:build-prod');
    tasks.push('rev');
  } else {
    tasks.push('webpack:build-dev');
  }

  tasks.push(cb);
  gulpSequence.apply(this, tasks);
});
