import vue from "@vitejs/plugin-vue";
import banner from "vite-plugin-banner";
import autoprefixer from "autoprefixer";

import options from "./options.mjs";

export default ({ entry, mode }) => {
  const outDir = options.paths.output.lib;

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
      minify: mode === "production" ? "esbuild" : false,
      lib: {
        entry: options.paths.resolve(`src/${entry}.vue`),
        formats: ["umd"],
        fileName: () => `[name]${mode === "production" ? ".min" : ""}.js`,
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
        },
      },
    },
  };
};
