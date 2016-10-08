var gulp = require('gulp');
var tasks = require('./build/tasks');
var paths = require('./build/paths');

var isProduction = process.env.NODE_ENV === 'production';

// Register the tasks
tasks.registerAll(gulp);

// Setup the composite tasks
gulp.task('clean', gulp.parallel('clean:dist', 'clean:docs', 'clean:lib'));
gulp.task('build', gulp.parallel('build:dist', 'build:docs', 'build:lib'));
gulp.task('docs', gulp.series(
    'clean:docs', gulp.parallel('docs:html', 'docs:stylus', 'docs:static'))
);

// Setup the watcher for shared Pug and Stylus files
gulp.task('watch', function() {
    gulp.watch(paths.docs.srcRoot + '/**/*.pug', gulp.parallel('docs:html'));
    gulp.watch(paths.docs.srcRoot + '/styles/**/*.styl', gulp.parallel('docs:stylus'));
    gulp.watch(
        paths.docs.srcRoot + '/static/**/*.{svg,png,jpg,jpeg,gif,woff,woff2,eot}',
        gulp.parallel('docs:stylus')
    );
});

// Setup the default task
gulp.task('dev', gulp.parallel('watch', gulp.series('docs', 'build:docs')));

if (isProduction) {
    gulp.task('default', gulp.series('clean', 'build'));
} else {
    gulp.task('default', gulp.parallel('dev'));
}
