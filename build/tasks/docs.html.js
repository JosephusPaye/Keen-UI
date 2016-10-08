var fs = require('fs');
var pug = require('pug');
var path = require('path');
var paths = require('../paths');
var findFiles = require('../util/file-finder');

var compileHtml = function(done) {
    var files = findFiles(paths.docs.srcRoot + '/ui-*/*.pug', '.pug')
        .concat(findFiles(paths.docs.srcRoot + '/index.pug', '.pug'));

    files.forEach(function(file) {
        // Generate the compile function
        var compile = pug.compileFile(file.path, {
            basedir: paths.docs.srcRoot
        });

        // Render the file
        var html = compile();

        // Generate a file name
        var filename = path.join(paths.docs.outputRoot, file.name + '.html');

        // Write the file
        fs.writeFile(filename, html, done);
    });
};

compileHtml.description = 'Compile the Pug HTML templates for the documentation pages';

module.exports = {
    name: 'docs:html',
    task: compileHtml
};
