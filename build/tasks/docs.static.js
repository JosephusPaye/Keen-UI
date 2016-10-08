var gulp = require('gulp');
var path = require('path');
var paths = require('../paths');

var copyStaticAssets = function() {
    var files = path.join(paths.docs.srcRoot, 'static/**/*.{svg,png,jpg,jpeg,gif,woff,woff2,eot}');

    return gulp.src(files)
        .pipe(gulp.dest(paths.docs.outputRoot));
};

copyStaticAssets.description = 'Copy static assets (fonts and images) into the docs folder';

module.exports = {
    name: 'docs:static',
    task: copyStaticAssets
};
