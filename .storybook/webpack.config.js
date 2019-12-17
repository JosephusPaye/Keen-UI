const path = require('path');

module.exports = ({ config }) => {
    // Add a custom loader to load and attach the source of the file
    // specified in a <include-source> custom block of a vue file
    config.module.rules.push({
        resourceQuery: /blockType=include-source/,
        loader: path.resolve(__dirname, 'source-loader.js'),
        options: {
            // Pass the repo's root path to resolve the relative paths
            rootPath: path.resolve(__dirname, '..'),
        },
    });

    return config;
};
