var gulp = require('gulp');
var connect = require('gulp-connect');

// gulp.task('default',function () {
//     console.log('Hello world');
// });

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
 
gulp.task('default', ['connect', 'watch']);