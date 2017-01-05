const dev = require('./dev.js');

const tasks = [dev];

const registerAll = function (gulp) {
    tasks.forEach(task => {
        gulp.task(task.name, task.task);
    });
};

module.exports.tasks = tasks;
module.exports.registerAll = registerAll;
