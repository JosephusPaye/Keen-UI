var gulp = require('gulp');
var paths = require('../paths');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.lib.js');

var buildLib = function() {
    return gulp.src(paths.main.srcRoot + '/index.js') // is overridden by the entry in webpackCofig
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(webpackConfig.output.path));
};

buildLib.description = 'Build the lib output using Webpack';

module.exports = {
    name: 'build:lib',
    task: buildLib
};
