var gulp = require('gulp');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');

gulp.task('copy-html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy-html'], function () {
    return browserify({
        entries: 'src/app.ts'
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))
});