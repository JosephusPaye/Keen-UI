var paths = require('./paths');
var merge = require('merge-options');
var shared = require('./webpack.shared.js');
var findFiles = require('./util/file-finder.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = merge(shared, {
    watch: true,
    devtool: '#eval-source-map'
});

config.entry = {};

findFiles(paths.docs.srcRoot + '/ui-*/ui-*.js')
    .concat(findFiles(paths.docs.srcRoot + '/shared.js'))
    .forEach(function(file) {
        config.entry[file.name] = [file.path];
    });

config.output = {
    filename: 'js/docs.[name].js',
    path: paths.docs.outputRoot
};

config.plugins = [
    new ExtractTextPlugin('css/docs.[name].css'),
];

if (shared.custom.isProduction) {
    config.watch = false;
    config.devtool = '#source-map';
    config.plugins = config.plugins.concat(shared.custom.productionPlugins);
}

module.exports = config;
