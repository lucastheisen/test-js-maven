var fs = require('fs');
var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['copyNodeModules', 'compileTypescript'], function () {});

gulp.task('compileTypescript', ['compileTypescriptTsSrc'], function () {});

gulp.task('compileTypescriptGulp', function () {
    // https://github.com/ivogabe/gulp-typescript/issues/326
    var tsResult = gulp.src(
        [
            'src/main/typescript/**/*.ts',
            'typings/**',
        ])
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('target/classes/META-INF/resources/js'));
});

gulp.task('compileTypescriptGulpSrc', function () {
    // https://github.com/ivogabe/gulp-typescript/issues/326
    var tsResult = gulp.src(
        [
            '**/*.ts',
            '!node/**',
            '!node_modules/**',
            '!target/**',
            '!typings/**'
        ])
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('target/classes/META-INF/resources/js'));
});

gulp.task('compileTypescriptTsSrc', function () {
    // https://github.com/ivogabe/gulp-typescript/issues/326
    var tsResult = tsProject.src() 
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('target/classes/META-INF/resources/js'));
});


gulp.task('copyNodeModules', function () {
    return gulp.src('node_modules/**')
        .pipe(gulp.dest('target/classes/META-INF/resources/js/node_modules'));
});

gulp.task('watch', ['compileTypescript'], function() {
    gulp.watch('src/main/typescript/**/*.ts', ['compileTypescript']);
});
