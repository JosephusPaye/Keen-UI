var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    watch: true,
    devtool: '#eval-source-map',

    entry: './src-docs/main.js',
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'docs.bundle.js'
    },

    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')],
    },

    module: {
        rules: [{
            test: /\.vue$/,
            use: {
                loader: 'vue',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract('css'),
                        // extract css and stylus files to a single file
                        stylus: ExtractTextPlugin.extract('css!stylus')
                    },

                    autoprefixer: {
                        browsers: ['last 2 versions', 'ie > 8', 'Firefox ESR']
                    }
                }
            }
        }, {
            test: /\.js$/,
            use: {
                loader: 'babel',
            },
            exclude: /node_modules|src\/(helpers|lib|mixins)/
        }, {
            test: /\.json$/,
            use: {
                loader: 'json'
            }
        }, {
            test: /\.html$/,
            use: {
                loader: 'vue-html'
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'url',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        }]
    },

    plugins: [
        new ExtractTextPlugin('docs.bundle.css')
    ],
};
