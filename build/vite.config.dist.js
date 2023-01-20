const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const banner = require('vite-plugin-banner');
const options = require('./options');
const autoprefixer = require('autoprefixer');

export default defineConfig(({ mode }) => {
    const filename = mode === 'production' ? 'keen-ui.min' : 'keen-ui';
    const outDir = options.paths.output.main;

    return {
        plugins: [
            vue(),
            banner({ content: options.banner, outDir }),
        ],
        resolve: {
            alias: {
                '@': options.paths.src.main,
                vue: 'vue/dist/vue.esm-bundler.js'
            }
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer()
                ]
            }
        },
        build: {
            minify: mode === 'production' ? 'esbuild' : false,
            outDir,
            emptyOutDir: false,
            chunkSizeWarningLimit: 600,
            cssCodeSplit: false,
            lib: {
                entry: options.paths.resolve('src/index.js'),
                name: 'KeenUI',
                formats: ['umd'],
                fileName: () => filename + '.js'
            },
            rollupOptions: {
                external: [/^vue/],
                output: {
                    assetFileNames: (assetInfo) => assetInfo.name === 'style.css' ? filename + '.css' : assetInfo.name
                }
            }
        }
    };
});