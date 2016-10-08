var fs = require('fs');
var rimraf = require('rimraf');
var paths = require('../paths');

var cleanLib = function(done) {
    rimraf(paths.lib.outputRoot, function() {
        fs.mkdirSync(paths.lib.outputRoot);
        done();
    });
};

cleanLib.description = 'Remove the lib folder and recreate it';

module.exports = {
    name: 'clean:lib',
    task: cleanLib
};
