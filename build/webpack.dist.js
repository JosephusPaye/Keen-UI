'use strict';

const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const options = require('./options');
const base = require('./webpack.base.js');

const config = base({
    entry: options.paths.resolve('src/index.js'),

    output: {
        filename: options.isProduction ? 'keen-ui.min.js' : 'keen-ui.js',
        path: options.paths.output.main,
        library: 'KeenUI',
        libraryTarget: 'umd'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: options.isProduction ? 'keen-ui.min.css' : 'keen-ui.css'
        }),
        new webpack.BannerPlugin({
            banner: options.banner,
            raw: true,
            entryOnly: true
        })
    ]
}, true);

module.exports = config;
