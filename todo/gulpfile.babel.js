import gulp from 'gulp';
import util from 'gulp-util';
import webpackConfig from './webpack.config.js';
import webpack from 'webpack';

gulp.task('build', () => {
    webpackBuild();
});

gulp.task('watch', ['build'], () => {
    webpackWatch();
});

gulp.task('default', ['build', 'watch']);

function webpackBuild() {
    const compiler = webpack(webpackConfig);
    compiler.run((err, stats) => {
        if (err) {
            util.log(err);
            throw new Error(err);
        }
        if (stats.hasErrors()) {
            util.log('[bundle] Webpack build failed');
            throw new Error();
        } else {
            util.log('[bundle] Webpack build success');
        }
    });
}

function webpackWatch() {
    const watchConfig = {
        ...webpackConfig,
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/
        }
    }
    const compiler = webpack(watchConfig);
    compiler.watch({}, (err, stats) => {
        if (err) {
            util.log(err);
            throw new Error(err);
        }
        if (stats.hasErrors()) {
            util.log('[bundle] Webpack build failed');
            throw new Error();
        } else {
            util.log('[bundle] Webpack build success');
        }
    });
}