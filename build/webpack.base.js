const autoprefixer = require('autoprefixer');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const options = require('./options');

const mode = options.isProduction ? 'production' : 'development'

module.exports = function({ entry, output, plugins }, { extractCss = true }) {
    const scssLoaders = extractCss
        ? [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        : ['vue-style-loader', 'css-loader', 'sass-loader']

    return {
        mode,

        entry,

        output,

        resolve: {
            modules: [
                options.paths.root,
                options.paths.resolve('node_modules')
            ],

            alias: {
                '@': 'src'
            },

            extensions: ['.js', '.json', '.vue', '.scss']
        },

        optimization: {
            minimize: options.isProduction,
            minimizer: [new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })]
        },

        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: `"${mode}"`
                }
            }),
            ...plugins
        ],

        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        scss: scssLoaders,
                        postcss: [
                            autoprefixer({
                                browsers: ['last 2 versions', 'ie > 9', 'Firefox ESR', 'android >= 4.0']
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
                    test: /\.scss$/i,
                    use: scssLoaders
                }
            ]
        }
    };
}
