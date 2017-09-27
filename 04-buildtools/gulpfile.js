const gulp = require('gulp');
const eslint = require('gulp-eslint');
const minify = require('gulp-minify');
const del = require('del');

gulp.task('linting', () => {
  gulp
    .src(['application/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('clean', () => del('application/dist/**'));

gulp.task('minify', () => {
  gulp
    .src('application/app-fixed.js')
    .pipe(minify({
      ext: {
        min: '.min.js'
      }
    }))
    .pipe(gulp.dest('application/dist'));
});

// gulp.task('default', ['linting']);
// gulp.task('default', ['linting', 'clean', 'minify']);
