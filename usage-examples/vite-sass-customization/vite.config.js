/* eslint-env node */

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const scssVariablesFile = path.resolve(__dirname, "./src/variables.scss").replace(/\\/g, "/");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${scssVariablesFile}" as *;`,
      },
    },
  },
});
