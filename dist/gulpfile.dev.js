"use strict";

var gulp = require('gulp');

var browserSync = require('browser-sync').create();

var sass = require('gulp-sass'); // Static Server + watching scss/html files


gulp.task('serve', ['sass'], function () {
  browserSync.init({
    proxy: "visualcafe.ca"
  });
  gulp.watch("css/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
}); // Compile sass into CSS & auto-inject into browsers

gulp.task('sass', function () {
  return gulp.src("css/*.scss").pipe(sass()).pipe(gulp.dest("css")).pipe(browserSync.stream());
});
gulp.task('default', ['serve']);