var gulp = require('gulp');
var paths = require('../paths');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.dist.js');

var buildDist = function() {
    return gulp.src(paths.main.srcRoot + '/index.js') // is overridden by the entry in webpackCofig
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(webpackConfig.output.path));
};

buildDist.description = 'Build the dist files using Webpack';

module.exports = {
    name: 'build:dist',
    task: buildDist
};
