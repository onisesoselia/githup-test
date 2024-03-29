'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp
    .src('scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 6 versions'],
        cascade: false,
      })
    )
    .pipe(gulp.dest('style'));
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.parallel('sass'));
});
