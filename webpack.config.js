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
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract('css-loader'),
                        // extract css and stylus files to a single file
                        stylus: ExtractTextPlugin.extract('css-loader!stylus-loader')
                    },

                    autoprefixer: {
                        browsers: ['last 2 versions', 'ie > 8', 'Firefox ESR']
                    }
                }
            }
        }, {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
            },
            exclude: /node_modules|src\/(helpers|lib|mixins)/
        }, {
            test: /\.json$/,
            use: {
                loader: 'json-loader'
            }
        }, {
            test: /\.html$/,
            use: {
                loader: 'vue-html-loader'
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: {
                loader: 'url-loader',
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
