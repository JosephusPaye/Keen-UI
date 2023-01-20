import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";

import options from "./options.mjs";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("../src", import.meta.url)),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    outDir: options.paths.output.docs,
    emptyOutDir: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let ext = assetInfo.name.split(".")[1];
          if (ext === "css") {
            return "docs.bundle.[ext]";
          }

          return "[name].[ext]";
        },
        entryFileNames: "docs.bundle.js",
      },
    },
  },
});
