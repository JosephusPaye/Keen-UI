var path = require('path');
var paths = require('./paths');
var webpack = require('webpack');
var merge = require('merge-options');
var shared = require('./webpack.shared.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = merge(shared, {
    devtool: '#source-map',
    entry: path.join(paths.main.srcRoot, 'index.js')
});

config.output = {
    library: 'Keen',
    libraryTarget: 'umd',
    filename: config.custom.isProduction ? 'keen-ui.min.js' : 'keen-ui.js',
    path: path.join(paths.main.outputRoot, config.custom.isProduction ? 'min' : '')
};

config.plugins = [
    new webpack.BannerPlugin(config.custom.banner, {
        raw: true,
        entryOnly: true
    }),

    new ExtractTextPlugin(config.custom.isProduction ? './keen-ui.min.css' : './keen-ui.css')
];

if (shared.custom.isProduction) {
    config.plugins = config.plugins.concat(shared.custom.productionPlugins);
}

module.exports = config;
