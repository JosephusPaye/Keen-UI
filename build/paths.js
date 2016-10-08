var path = require('path');

module.exports = {
    root: path.join(__dirname, '..'),

    main: {
        srcRoot: path.join(__dirname, '..', 'src'),
        outputRoot: path.join(__dirname, '..', 'dist')
    },

    docs: {
        srcRoot: path.join(__dirname, '..', 'src-docs'),
        outputRoot: path.join(__dirname, '..', 'docs')
    },

    lib: {
        outputRoot: path.join(__dirname, '..', 'lib')
    }
};
