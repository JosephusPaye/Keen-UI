var gulp = require('gulp');
var paths = require('../paths');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.docs.js');

var buildDocs = function() {
    return gulp.src(paths.main.srcRoot + '/index.js') // is overridden by the entry in webpackCofig
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(webpackConfig.output.path));
};

buildDocs.description = 'Build the docs using Webpack';

module.exports = {
    name: 'build:docs',
    task: buildDocs
};
