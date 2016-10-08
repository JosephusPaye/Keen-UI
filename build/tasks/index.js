var buildDist = require('./build.dist.js');
var buildDocs = require('./build.docs.js');
var buildLib = require('./build.lib.js');

var compileHtml = require('./docs.html.js');
var compileStylus = require('./docs.stylus.js');
var copyStaticAssets = require('./docs.static.js');

var cleanDist = require('./clean.dist.js');
var cleanDocs = require('./clean.docs.js');
var cleanLib = require('./clean.lib.js');

var tasks = [
    buildDist, buildDocs, buildLib,
    compileHtml, compileStylus, copyStaticAssets,
    cleanDist, cleanDocs, cleanLib
];

var registerAll = function (gulp) {
    tasks.forEach(function(task) {
        gulp.task(task.name, task.task);
    });
};

module.exports.tasks = tasks;
module.exports.registerAll = registerAll;
