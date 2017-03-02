var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // minifies js
    .pipe(gulpIf('*.js', uglify()))
    // minifies css
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
    // cache already minified imgs for speed
    .pipe(imagemin({
      interlaced: true
    }))
    .pipe(gulp.dest('dist/images'))
});
gulp.task('fonts', function(){
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
