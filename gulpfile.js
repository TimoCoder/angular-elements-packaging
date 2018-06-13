var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('create-function-element', function() {
  return gulp.src('./dist/fico-function-app/*.js')
    .pipe(concat('fico.function.js'))
    .pipe(gulp.dest('./bin/fico-function-element'));
});

gulp.task('create-ruleset-element', function() {
  return gulp.src('./dist/fico-ruleset-app/*.js')
    .pipe(concat('fico.ruleset.js'))
    .pipe(gulp.dest('./bin/fico-ruleset-element'));
});

gulp.task('default', ['create-function-element', 'create-ruleset-element']);
