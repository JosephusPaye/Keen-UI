var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var banner = require('./webpack.banner.js');

delete config.watch;
delete config.plugins;

config.entry = './src/index.js';
config.devtool = 'source-map';

config.plugins = [
    new webpack.BannerPlugin(banner),

    new ExtractTextPlugin('./keen-ui.css')
];

config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'keen-ui.js',
    library: 'Keen',
    libraryTarget: 'umd'
};

module.exports = config;
