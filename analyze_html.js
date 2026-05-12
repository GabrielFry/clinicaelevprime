const fs = require('fs');
const { JSDOM } = require('jsdom');

const siteCode = fs.readFileSync('components/SixSenseSite.tsx', 'utf8');

// The HTML is between ` and `
const htmlStart = siteCode.indexOf('`');
const htmlEnd = siteCode.lastIndexOf('`');
const htmlContent = siteCode.substring(htmlStart + 1, htmlEnd).replace(/\\`/g, '`').replace(/\\\$/g, '$');

const dom = new JSDOM(htmlContent);
const doc = dom.window.document;

// Let's look at the top level children of the body wrapper
const topLevelElements = Array.from(doc.body.children);

console.log('Top level elements:');
topLevelElements.forEach((el, index) => {
    let id = el.id || '';
    let className = el.className || '';
    console.log(`[${index}] <${el.tagName.toLowerCase()}> id="${id}" class="${className}" length="${el.outerHTML.length}"`);
});
