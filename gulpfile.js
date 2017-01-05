'use strict';

const gulp = require('gulp');
const tasks = require('./build/tasks');

// Register the tasks with gulp
tasks.registerAll(gulp);

// The default task
gulp.task('default', gulp.parallel('dev'));
