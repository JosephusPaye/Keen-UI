import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [vue()],
    server: {
        port: 9000
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('../src', import.meta.url))
        }
    },
    build: {
        chunkSizeWarningLimit: 600,
        cssCodeSplit: false
    }
});
