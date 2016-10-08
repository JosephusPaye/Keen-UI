var path = require('path');
var gulp = require('gulp');
var paths = require('../paths');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');

var isProduction = process.env.NODE_ENV === 'production';

var compileStylus = function() {
    return gulp.src(path.join(paths.docs.srcRoot, 'styles', 'index.styl'))
        .pipe(stylus({
            compress: isProduction,
            'include css': true,
            include: [
                path.join(paths.root, 'node_modules/prismjs/themes')
            ]
        }))
        .pipe(rename('docs.shared.css'))
        .pipe(gulp.dest(path.join(paths.docs.outputRoot, 'css')));
};

compileStylus.description = 'Compile the shared doc styles using Stylus';

module.exports = {
    name: 'docs:stylus',
    task: compileStylus
};
