import gulp from 'gulp';
gulp.task('build', () => {
    webpackBuild();
});

gulp.task('watch', ['build'], () => {
    webpackWatch();
});

gulp.task('default', ['build', 'watch']);

function webpackBuild() {

}

function webpackWatch() {
    
}