var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
    gulp.watch('*.ts', ['typescript'])
});

gulp.task('default', ['watch']);