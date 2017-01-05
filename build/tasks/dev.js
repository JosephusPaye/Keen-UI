const options = require('../options.js');

const gulp = require('gulp');
const webpack = require('webpack');
const stream = require('webpack-stream');
const config = require('../webpack.dev.js');

const dev = function () {
    return gulp.src(options.paths.src.docs + '/index.js') // Overridden by '.entry' in webpack.dev.js
        .pipe(stream(config, webpack))
        .pipe(gulp.dest(options.paths.output.docs));
};

dev.description = 'Build the docs using Webpack: setup watcher in development mode; minify in production.';

module.exports = {
    name: 'dev',
    task: dev
};
