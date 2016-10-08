var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var paths = require('../paths');

var cleanDist = function(done) {
    rimraf(paths.main.outputRoot, function() {
        fs.mkdirSync(paths.main.outputRoot);
        fs.mkdirSync(path.join(paths.main.outputRoot, 'min'));

        done();
    });
};

cleanDist.description = 'Remove the dist folder and recreate it with its sub-folders';

module.exports = {
    name: 'clean:dist',
    task: cleanDist
};
