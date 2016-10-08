var path = require('path');
var webpack = require('webpack');
var version = require('../package.json').version;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var banner =
  '/*!\n' +
  ' * Keen UI v' + version + ' (https://github.com/JosephusPaye/keen-ui)\n' +
  ' * (c) ' + new Date().getFullYear() + ' Josephus Paye II\n' +
  ' * Released under the MIT License.\n' +
  ' */';

module.exports = {
    resolveLoader: {
        root: path.join(__dirname, '..', 'node_modules'),
    },

    resolve: {
        root: path.join(__dirname, '..'),
        alias: {
            styles: 'src/styles',
        },
        extensions: ['', '.js', '.vue', '.json', '.styl']
    },

    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'vue-html'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /draggabilly|desandro|get\-size|classie|unidragger|unipointer|eventemitter/,
            loader: 'imports?define=>false&this=>window'
        }]
    },

    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('css'), // Extract css and stylus files to a single file
            stylus: ExtractTextPlugin.extract('css!stylus')
        },

        autoprefixer: {
            browsers: ['last 2 versions', 'ie > 9', 'Firefox ESR']
        }
    },

    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime'],
        comments: false
    },

    // Customize the console output
    // https://webpack.github.io/docs/node.js-api.html#stats
    stats: {
        hash: false,
        colors: true,
        chunks: false,
        version: false,
        children: false,
        timings: true
    },

    custom: {
        banner: banner,

        isProduction: process.env.NODE_ENV === 'production',

        productionPlugins: [
            // http://vue-loader.vuejs.org/en/workflow/production.html
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),

            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),

            new webpack.optimize.OccurenceOrderPlugin()
        ]
    }
};
