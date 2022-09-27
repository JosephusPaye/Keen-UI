const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const banner = require('vite-plugin-banner');
const options = require('./options');

export default defineConfig(({ mode }) => {
    const filename = mode === 'production' ? 'keen-ui.min' : 'keen-ui';

    return {
        plugins: [
            vue(),
            banner(options.banner),
        ],
        resolve: {
            alias: {
                '@': options.paths.src.main,
                vue: 'vue/dist/vue.esm-bundler.js'
            }
        },
        build: {
            outDir: options.paths.output.main,
            chunkSizeWarningLimit: 600,
            cssCodeSplit: false,
            lib: {
                entry: options.paths.resolve('src/index.js'),
                name: 'KeenUI',
                formats: ['umd'],
                fileName: () => filename + '.js'
            },
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo) => assetInfo.name === 'style.css' ? filename + '.css' : assetInfo.name
                }
            }
        }
    };
});
