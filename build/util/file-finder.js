var glob = require('glob');
var path = require('path');

module.exports = function(pattern, extension) {
    var files = glob.sync(pattern);

    return files.map(function(file) {
        extension = extension || '.js';

        var dirpath = path.dirname(file).split('/');

        return {
            path: file,
            basename: path.basename(file),
            basedir: dirpath[dirpath.length - 1],
            name: path.basename(file, extension)
        };
    });
};
