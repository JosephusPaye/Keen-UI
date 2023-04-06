import vue from "@vitejs/plugin-vue";
import banner from "vite-plugin-banner";
import autoprefixer from "autoprefixer";

import options from "./options.mjs";

export default ({ entry, mode }) => {
  const isProduction = mode === "production";
  const outDir = options.paths.output.lib;

  const formatFileNames = {
    es: {
      development: `${entry}.esm.js`,
      production: `${entry}.esm.min.js`,
    },
    umd: {
      development: `${entry}.js`,
      production: `${entry}.min.js`,
    },
  };

  return {
    plugins: [vue(), banner({ content: options.banner, outDir })],
    resolve: {
      alias: {
        "@": options.paths.src.main,
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
    build: {
      minify: isProduction ? "esbuild" : false,
      lib: {
        entry: options.paths.resolve(`src/${entry}.vue`),
        formats: isProduction ? ["umd"] : ['umd', 'es'],
        fileName: (format) => {
          return formatFileNames[format][mode]
        },
        name: `KeenUI.${entry}`,
      },
      outDir,
      emptyOutDir: false,
      cssCodeSplit: true,
      rollupOptions: {
        external: [/^vue/],
        output: {
          globals: {
            vue: "Vue",
          },
          assetFileNames: () => {
            return `css/[name][extname]`
          }
        },
      },
    },
  };
};
