var path = require('path');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

delete config.watch;
delete config.plugins;

config.entry = './source/index.js';
config.devtool = 'source-map';
config.plugins = [
    new ExtractTextPlugin('./keen-ui.css')
];

config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'keen-ui.js',
    library: 'Keen',
    libraryTarget: 'umd'
};

module.exports = config;
