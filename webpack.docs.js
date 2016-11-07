var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

delete config.devtool;
delete config.watch;
delete config.plugins;

config.entry = './src-docs/main.js';

config.plugins = [
    new ExtractTextPlugin('./docs.bundle.css'),

    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),

    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

module.exports = config;
