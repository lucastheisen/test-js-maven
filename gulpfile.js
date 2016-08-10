var fs = require('fs');
var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['copyNodeModules', 'compileTypescript'], function () {});

gulp.task('compileTypescript', function () {
    var tsResult = tsProject.src() 
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('target/classes/META-INF/resources/js'));
});

gulp.task('copyNodeModules', function () {
    gulp.src('./node_modules/**')
        .pipe(gulp.dest('target/classes/META-INF/resources/js/node_modules'));
});

gulp.task('watch', ['compileTypescript'], function() {
    gulp.watch('src/main/typescript/**/*.ts', ['compileTypescript']);
});
