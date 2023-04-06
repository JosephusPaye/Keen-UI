import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import banner from "vite-plugin-banner";
import autoprefixer from "autoprefixer";

import options from "./options.mjs";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  const outDir = options.paths.output.main;

  const formatFileNames = {
    es: {
      development: "keen-ui.esm.js",
      production: "keen-ui.esm.min.js",
    },
    umd: {
      development: "keen-ui.js",
      production: "keen-ui.min.js",
    },
  };

  return {
    plugins: [vue(), banner({ content: options.banner, outDir })],
    resolve: {
      alias: {
        "@": options.paths.src.main,
        vue: "vue/dist/vue.esm-bundler.js",
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
    build: {
      minify: mode === "production" ? "esbuild" : false,
      outDir,
      emptyOutDir: false,
      chunkSizeWarningLimit: 600,
      cssCodeSplit: false,
      lib: {
        entry: options.paths.resolve("src/index.js"),
        name: "KeenUI",
        formats: isProduction ? ["umd"] : ['umd', 'es'],
        fileName: (format) => {
          return formatFileNames[format][mode]
        },
      },
      rollupOptions: {
        external: [/^vue/],
        output: {
          globals: {
            vue: "Vue",
          },
          assetFileNames: (assetInfo) =>
            assetInfo.name === "style.css" ? `keen-ui${isProduction ? '.min' : ''}.css` : assetInfo.name,
        },
      },
    },
  };
});
