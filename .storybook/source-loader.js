const fs = require('fs');
const path = require('path');

module.exports = function(source, map) {
    // `source` (the string in the custom <include-source> block) is the file path
    const filePath = path.join(this.query.rootPath, source.trim());

    // Read the referenced file and remove the <include-source> block
    const fileContent = fs
        .readFileSync(filePath, 'utf8')
        .replace(/<include-source>.*<\/include-source>\n/, '');

    // Generate a function that'll receive the Vue component and attach the source
    this.callback(
        null,
        `export default function (Component) {
            Component.options.__source = ${JSON.stringify(fileContent)};
        }`,
        map
    );
};
