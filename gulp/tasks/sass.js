var gulp         = require('gulp');
var sass         = require('gulp-sass');
var handleErrors = require('../utils/handle_errors');

gulp.task('sass', function() {
  return gulp.src('./app/assets/stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/'))
    .on('error', handleErrors);
});
