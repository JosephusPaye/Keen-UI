'use strict';

const options = require('./options');
const base = require('./webpack.base.js');
const merge = require('merge-options');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = merge(base, {
    watch: true,
    devtool: '#eval-source-map'
});

config.entry = {
    bundle: options.paths.resolve('docs-src/index.js')
};

config.output = {
    filename: 'docs.[name].js',
    path: options.paths.output.docs
};

config.plugins = [
    // new ExtractTextPlugin('docs.[name].css')
];

config.devServer = {
    contentBase: options.paths.output.docs,
    host: '0.0.0.0',
    port: 9000,
    historyApiFallback: true,
    noInfo: true
};

if (options.isProduction) {
    delete config.devServer;

    config.watch = false;
    config.devtool = '#source-map';
    config.plugins = config.plugins.concat(base.custom.productionPlugins);
}

module.exports = config;
