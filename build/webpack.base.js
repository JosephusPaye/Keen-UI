const options = require('./options');
const autoprefixer = require('autoprefixer');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        modules: [
            options.paths.root,
            options.paths.resolve('node_modules')
        ],
        alias: {
            src: 'src',
            directives: 'src/directives',
            helpers: 'src/helpers',
            mixins: 'src/mixins',
            styles: 'src/styles',
            vue$: 'vue/dist/vue.common.js'
        },
        extensions: ['.js', '.json', '.vue', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // loaders: {
                        // sass: ExtractTextPlugin.extract('css-loader!sass-loader')
                    // },

                    postcss: [
                        autoprefixer({
                            browsers: ['last 2 versions', 'ie > 8', 'Firefox ESR']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /draggabilly|desandro|get-size|classie|unidragger|unipointer|eventemitter/,
                loader: 'imports-loader?define=>false&this=>window'
            }
        ]
    },

    // Stats is used to customize Webpack's console output
    // https://webpack.js.org/configuration/stats/
    stats: {
        hash: false,
        colors: true,
        chunks: false,
        version: false,
        children: false,
        timings: true
    }
};
