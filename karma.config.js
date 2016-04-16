var webpackConfig = require('./webpack.config.js');

// Entry not needed during tests
delete webpackConfig.entry;

// Karma configuration
module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        // This is the entry file for all our tests.
        files: ['test/index.js'],

        // We will pass the entry file to webpack for bundling.
        preprocessors: {
            'test/index.js': ['webpack']
        },

        // Use the webpack config
        webpack: webpackConfig,

        // Avoid walls of useless text
        webpackMiddleware: {
            noInfo: true
        },

        // singleRun: true
    });
};
