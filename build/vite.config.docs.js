const { fileURLToPath, URL } = require('url');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const options = require('./options');

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 9000
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('../src', import.meta.url)),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    build: {
        outDir: options.paths.output.docs,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let ext = assetInfo.name.split('.')[1]
                    if (ext === 'css') {
                        return 'docs.bundle.[ext]'
                    }

                    return '[name].[ext]'
                },
                entryFileNames: 'docs.bundle.js'
            }
        }
    }
});
