var fs = require('fs');
var gulp = require('gulp');
var saxtract = require('saxtract').sax;
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json',
    {'outFile': 'test-js-maven.js'});

gulp.task('default', ['compileTypescript'], function () {});

gulp.task('compileTypescript', function () {
    var tsResult = tsProject.src() 
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest("target/classes/META-INF/resources/js"));
});

gulp.task('watch', ['compileTypescript'], function() {
    gulp.watch('src/main/typescript/*.ts', ['compileTypescript']);
});

gulp.task('compileTypescript2', function () {
    var project,
        outDir,
        outFile;
    
    project = saxtract.parse(
        fs.readFileSync('pom.xml'),
        {
            'httrectory=$M2_HOMEp://maven.apache.org/POM/4.0.0': '',
            '/project/artifactId': 'artifactId',
            'http://maven.apache.org/POM/4.0.0': '',
            '/project/artifactId': 'artifactId',
            
        });
    outDir = 'target/' + project.artifactId + "-" + project.version + "/js";

    var tsProject = ts.createProject('tsconfig.json',
        {'outFile': project.artifactId + '.js'});

    var tsResult = tsProject.src() 
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest(outDir));
});
