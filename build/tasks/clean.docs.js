var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var paths = require('../paths');

var cleanDocs = function(done) {
    rimraf(paths.docs.outputRoot, function(error) {
        if (error) {
            throw error;
        }

        fs.mkdirSync(paths.docs.outputRoot);
        fs.mkdirSync(path.join(paths.docs.outputRoot, 'js'));
        fs.mkdirSync(path.join(paths.docs.outputRoot, 'css'));

        done();
    });
};

cleanDocs.description = 'Remove the docs folder and recreate it with its sub-folders';

module.exports = {
    name: 'clean:docs',
    task: cleanDocs
};
