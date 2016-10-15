var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var min = require('gulp-clean-css');
var autoprefix = require('gulp-autoprefixer');

var paths = {
  styles: {
    src:  'styles/**/*.scss',
    dest: './'
  },
};

gulp.task('styles', function() {
  return gulp.src(paths.styles.src)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefix(['last 2 versions', "ie 8", "ios 6", "android 4"]))
    .pipe(min())
    .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles.src, ['styles']);
});

gulp.task('default', ['styles', 'watch']);
