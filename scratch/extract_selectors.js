const fs = require('fs');
const path = require('path');

const directories = ['app', 'components'];
const usedSelectors = new Set();

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            
            // Extract classNames
            const classNameMatches = content.match(/className=(?:{`|{"|['"])([^'"}]+)(?:`}|"}|['"])/g);
            if (classNameMatches) {
                classNameMatches.forEach(m => {
                    const classes = m.replace(/className=|[{}`"']/g, '').split(/\s+/);
                    classes.forEach(c => usedSelectors.add('.' + c));
                });
            }

            // Extract IDs
            const idMatches = content.match(/id=['"]([^'"]+)['"]/g);
            if (idMatches) {
                idMatches.forEach(m => {
                    const id = m.replace(/id=|['"]/g, '');
                    usedSelectors.add('#' + id);
                });
            }
            
            // Also look for class="..." in case of raw HTML strings or .html files
            const classMatches = content.match(/class=['"]([^'"]+)['"]/g);
            if (classMatches) {
                classMatches.forEach(m => {
                    const classes = m.replace(/class=|['"]/g, '').split(/\s+/);
                    classes.forEach(c => usedSelectors.add('.' + c));
                });
            }
        }
    }
}

directories.forEach(walk);
// Also walk root for .html files just in case
const rootFiles = fs.readdirSync('.');
rootFiles.filter(f => f.endsWith('.html')).forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const classMatches = content.match(/class=['"]([^'"]+)['"]/g);
    if (classMatches) {
        classMatches.forEach(m => {
            const classes = m.replace(/class=|['"]/g, '').split(/\s+/);
            classes.forEach(c => usedSelectors.add('.' + c));
        });
    }
    const idMatches = content.match(/id=['"]([^'"]+)['"]/g);
    if (idMatches) {
        idMatches.forEach(m => {
            const id = m.replace(/id=|['"]/g, '');
            usedSelectors.add('#' + id);
        });
    }
});

console.log(JSON.stringify(Array.from(usedSelectors)));
