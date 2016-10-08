var paths = require('./paths');
var webpack = require('webpack');
var merge = require('merge-options');
var shared = require('./webpack.shared.js');
var findFiles = require('./util/file-finder.js');

var config = merge(shared, {});

delete config.vue.loaders;
config.entry = {};

findFiles(paths.main.srcRoot + '/Ui*.vue', '.vue')
    .forEach(function(file) {
        config.entry[file.name] = [file.path];
    });

config.plugins = [
    new webpack.BannerPlugin(shared.banner, {
        raw: true,
        entryOnly: true
    })
].concat(shared.custom.productionPlugins);

config.output = {
    libraryTarget: 'umd',
    library: ['Keen', '[name]'],
    filename: '[name].js',
    path: paths.lib.outputRoot
};

module.exports = config;
