'use strict';

const merge = require('deepmerge');

const options = require('./options');
const base = require('./webpack.base.js');

const config = merge(base, {
    watch: true,

    devtool: '#eval-source-map',

    entry: options.paths.resolve('docs-src/index.js'),

    output: {
        filename: 'docs.bundle.js',
        path: options.paths.output.docs
    },

    devServer: {
        contentBase: options.paths.output.docs,
        host: '0.0.0.0', // Bind to 0.0.0.0 for external access for external devices (mobile testing)
        port: 9000,
        historyApiFallback: true,
        noInfo: true,
        clientLogLevel: 'error'
    }
});

// First item in module.rules array is Vue
config.module.rules[0].options.loaders = {
    scss: 'vue-style-loader!css-loader!sass-loader'
};

module.exports = config;
