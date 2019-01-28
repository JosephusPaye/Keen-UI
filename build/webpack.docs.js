'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('deepmerge');
const webpack = require('webpack');

const options = require('./options');
const base = require('./webpack.base.js');

const config = merge(base, {
    entry: options.paths.resolve('docs-src/index.js'),

    output: {
        filename: 'docs.bundle.js',
        path: options.paths.output.docs
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'docs.bundle.css'
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),

        // Set the production environment
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        // Minify with dead-code elimination
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}, { clone: false });

// First item in module.rules array is Vue
config.module.rules[0].options.loaders = {
    scss: ExtractTextPlugin.extract({
        loader: 'css-loader!sass-loader',
        fallbackLoader: 'vue-style-loader'
    })
};

module.exports = config;
