const fs = require('fs');

const css = fs.readFileSync('public/sixsense.css', 'utf8');

// Find all matches for body { ... } or html { ... } or .homepage { ... }
const regex = /(?:body|html|\.homepage|\.template-Video)[\s,]*\{([^}]+)\}/gi;
let match;
while ((match = regex.exec(css)) !== null) {
    if (match[1].includes('background') || match[1].includes('bg')) {
        console.log('Found:', match[0]);
    }
}
