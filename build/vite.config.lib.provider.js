const vue = require('@vitejs/plugin-vue');
const banner = require('vite-plugin-banner');
const options = require('./options');

module.exports = ({ entry, mode = 'development' }) => {
    return {
        plugins: [
            vue(),
            banner(options.banner)
        ],
        resolve: {
            alias: {
                '@': options.paths.src.main,
                vue: 'vue/dist/vue.esm-bundler.js'
            }
        },
        build: {
            lib: {
                entry: options.paths.resolve(`src/${entry}.vue`),
                formats: ['umd'],
                fileName: () => `[name]${ mode === 'production' ? '.min' : '' }.js`,
                name: `KeenUI.${entry}`
            },
            outDir: options.paths.output.lib,
            cssCodeSplit: true
        }
    };
};
