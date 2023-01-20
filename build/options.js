const path = require("path");

// Hardcoding here (and not reading from package.json) as the files are built
// before the version is updated in package.json
const version = "1.4.0";

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

module.exports = {
  banner,

  paths: {
    src: {
      main: path.join(__dirname, "..", "src"),
      docs: path.join(__dirname, "..", "docs-src"),
    },

    output: {
      main: path.join(__dirname, "..", "dist"),
      lib: path.join(__dirname, "..", "lib"),
      docs: path.join(__dirname, "..", "docs"),
    },

    resolve(location) {
      return path.join(__dirname, "..", location);
    },
  },
};
