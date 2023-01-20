import { join, dirname } from "path";
import { fileURLToPath } from 'url';

import version from "./version.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const banner =
  "/*!\n" +
  " * Keen UI v" +
  version +
  " (https://github.com/JosephusPaye/keen-ui)\n" +
  " * (c) " +
  new Date().getFullYear() +
  " Josephus Paye II\n" +
  " * Released under the MIT License.\n" +
  " */";

export default {
  banner,

  paths: {
    src: {
      main: join(__dirname, "..", "src"),
      docs: join(__dirname, "..", "docs-src"),
    },

    output: {
      main: join(__dirname, "..", "dist"),
      lib: join(__dirname, "..", "lib"),
      docs: join(__dirname, "..", "docs"),
    },

    resolve(location) {
      return join(__dirname, "..", location);
    },
  },
};
