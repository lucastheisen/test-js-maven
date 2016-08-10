var browserify = require('browserify');
var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var watchify = require('watchify');

var watched;

var browserifyCommon = function() {
    return browserify(
        {
            basedir: '.',
            debug: true,
            entries: [
                './src/main/typescript/app/main.ts'
            ],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify);
}

var browserifyPolyfills = function() {
    return browserify(
        {
            basedir: '.',
            debug: true,
            entries: [
                './src/main/typescript/polyfills.ts'
            ],
        })
        .plugin(tsify);
}

var bundle = function(browserify, name) { 
    browserify.bundle()
        .pipe(source(name))
        .pipe(gulp.dest('target/classes/META-INF/resources/js'));
}

gulp.task('default', ['browserify'], function () {});

//gulp.task('browserify', ['browserifyCommon', 'browserifyPolyfills'], function () {});
gulp.task('browserify', ['browserifyCommon'], function () {});

gulp.task('browserifyCommon', function () {
    // inspired by http://www.typescriptlang.org/docs/handbook/gulp.html
    return bundle(browserifyCommon(), 'bundle.js');
});

gulp.task('browserifyPolyfills', function () {
    // inspired by http://www.typescriptlang.org/docs/handbook/gulp.html
    return bundle(browserifyPolyfills(), 'polyfills.js');
});

gulp.task('watch', function () {
    // inspired by http://www.typescriptlang.org/docs/handbook/gulp.html
    watched = browserifyCommon().plugin(watchify);

    watched.on('update', function () {bundle(watched, 'bundle.js');});
    watched.on('log', gutil.log);

    return bundle(watched, 'bundle.js');
});
