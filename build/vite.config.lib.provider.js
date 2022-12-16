const vue = require('@vitejs/plugin-vue');
const banner = require('vite-plugin-banner');
const options = require('./options');

module.exports = ({ entry, minify }) => {
    const outDir = options.paths.output.lib;

    return {
        plugins: [,
            vue(),
            banner({ content: options.banner, outDir })
        ],
        resolve: {
            alias: {
                '@': options.paths.src.main
            }
        },
        build: {
            minify: minify ? 'esbuild' : false,
            lib: {
                entry: options.paths.resolve(`src/${entry}.vue`),
                formats: ['umd'],
                fileName: () => `[name]${ minify ? '.min' : '' }.js`,
                name: `KeenUI.${entry}`
            },
            outDir,
            emptyOutDir: false,
            cssCodeSplit: true,
            rollupOptions: {
                external: [/^vue/],
                output: {
                    globals: {
                        vue: 'Vue'
                    }
                },
            }
        }
    };
};
