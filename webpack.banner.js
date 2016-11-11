var version = require('./package.json').version;

var banner =
    '/*!\n' +
    ' * Keen UI v' + version + ' (https://github.com/JosephusPaye/keen-ui)\n' +
    ' * (c) ' + new Date().getFullYear() + ' Josephus Paye II\n' +
    ' * Released under the MIT License.\n' +
    ' */';

module.exports = {
    banner,
    raw: true,
    entryOnly: true
};
