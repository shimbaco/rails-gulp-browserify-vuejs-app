var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('app/assets/javascripts/**', ['browserify']);
  gulp.watch('app/assets/stylesheets/**', ['sass']);
});
