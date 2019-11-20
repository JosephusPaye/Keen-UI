const webpack = require('webpack');

// Hardcoding here (and not reading from package.json) as the files are built
// before the version is updated in package.json
const version = '1.2.1';

const banner =
    '/*!\n' +
    ' * Keen UI v' +
    version +
    ' (https://github.com/JosephusPaye/keen-ui)\n' +
    ' * (c) ' +
    new Date().getFullYear() +
    ' Josephus Paye II\n' +
    ' * Released under the MIT License.\n' +
    ' */';

module.exports = {
    css: {
        extract: true,
    },
    configureWebpack(config) {
        config.plugins.push(
            new webpack.BannerPlugin({
                banner: banner,
                raw: true,
                entryOnly: true,
            })
        );

        // config.output.filename = (chunkData) => {
        //     console.log(chunkData.chunk);
        //     return '[name].js';
        // }

        // // console.dir(config, { depth: Infinity });
        // // process.exit();
    },
};
