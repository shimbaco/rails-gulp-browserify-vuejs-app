var browserify   = require('browserify');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var handleErrors = require('../utils/handle_errors');

gulp.task('browserify', function() {
  return browserify({
    entries: ['./app/assets/javascripts/application.coffee'],
      extensions: ['.coffee']
  })
  .bundle({ debug: true })
  .on('error', handleErrors)
  .pipe(source('application.js'))
  .pipe(gulp.dest('./public/'));
});
