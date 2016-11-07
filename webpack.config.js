var path = require('path');
var version = require('./package.json').version;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var banner =
  '/*!\n' +
  ' * Keen UI v' + version + ' (https://github.com/JosephusPaye/keen-ui)\n' +
  ' * (c) ' + new Date().getFullYear() + ' Josephus Paye II\n' +
  ' * Released under the MIT License.\n' +
  ' */';

module.exports = {
    watch: true,
    devtool: '#eval-source-map',

    entry: './src-docs/main.js',
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'docs.bundle.js'
    },

    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
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
        }]
    },

    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('css'), // extract css and stylus files to a single file
            stylus: ExtractTextPlugin.extract('css!stylus')
        },

        autoprefixer: {
            browsers: ['last 2 versions', 'ie > 8', 'Firefox ESR']
        }
    },

    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime'],
        comments: false
    },

    plugins: [
        new ExtractTextPlugin('docs.bundle.css')
    ],

    banner: {
        banner,
        raw: true,
        entryOnly: true
    }
};
