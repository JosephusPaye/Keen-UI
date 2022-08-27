'use strict';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const options = require('./options');
const base = require('./webpack.base.js');

const config = base({
    entry: options.paths.resolve('docs-src/main.js'),

    output: {
        filename: 'docs.bundle.js',
        path: options.paths.output.docs
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'docs.bundle.css'
        }),
    ]
}, { extractCss: true });

module.exports = config;
