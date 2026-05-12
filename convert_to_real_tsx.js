const fs = require('fs');
const { JSDOM } = require('jsdom');
const path = require('path');

const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

const junkAttrs = /^(__processed|bis_|truste_)/;

function styleToObject(styleString) {
    const obj = {};
    if (!styleString) return obj;
    styleString.split(';').forEach(rule => {
        if (!rule.trim()) return;
        const parts = rule.split(':');
        if (parts.length >= 2) {
            const k = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            const v = parts.slice(1).join(':').trim();
            if (k) obj[k] = v;
        }
    });
    return obj;
}

function nodeToJsx(node, indent = '') {
    if (node.nodeType === 3) {
        let text = node.textContent;
        if (!text.trim()) return text;
        text = text.replace(/{/g, '{"{"}').replace(/}/g, '{"}"}');
        return text;
    }
    
    if (node.nodeType === 8) {
        return indent + '{/* ' + node.textContent.replace(/\\*\\//g, '* /') + ' */}\n';
    }
    
    if (node.nodeType === 1) {
        const tagName = node.tagName.toLowerCase();
        let attrs = '';
        
        for (let i = 0; i < node.attributes.length; i++) {
            const attr = node.attributes[i];
            let name = attr.name;
            let value = attr.value;
            
            if (junkAttrs.test(name)) continue;
            
            if (name === 'class') name = 'className';
            else if (name === 'for') name = 'htmlFor';
            else if (name === 'tabindex') name = 'tabIndex';
            else if (name === 'autocomplete') name = 'autoComplete';
            else if (name === 'autofocus') name = 'autoFocus';
            else if (name === 'maxlength') name = 'maxLength';
            else if (name === 'readonly') name = 'readOnly';
            else if (name === 'srcset') name = 'srcSet';
            else if (name === 'playsinline') name = 'playsInline';
            else if (name === 'crossorigin') name = 'crossOrigin';
            else if (name === 'colspan') name = 'colSpan';
            else if (name === 'rowspan') name = 'rowSpan';
            else if (name === 'datetime') name = 'dateTime';
            else if (name === 'usemap') name = 'useMap';
            else if (name === 'enctype') name = 'encType';
            else if (name === 'cellpadding') name = 'cellPadding';
            else if (name === 'cellspacing') name = 'cellSpacing';
            else if (name === 'frameborder') name = 'frameBorder';
            else if (name === 'marginheight') name = 'marginHeight';
            else if (name === 'marginwidth') name = 'marginWidth';
            else if (name === 'allowfullscreen') name = 'allowFullScreen';
            
            if (name === 'style') {
                const styleObj = styleToObject(value);
                attrs += ' style={' + JSON.stringify(styleObj) + '}';
                continue;
            }
            
            if (['disabled', 'checked', 'selected', 'readonly', 'multiple', 'required', 'autoFocus', 'hidden', 'playsInline', 'controls', 'loop', 'muted'].includes(name) && (value === '' || value === name)) {
                attrs += ' ' + name;
            } else {
                attrs += ' ' + name + '="' + value.replace(/"/g, '&quot;') + '"';
            }
        }
        
        if (tagName === 'style' || tagName === 'script') {
            const inner = node.innerHTML;
            if (inner.trim() === '') {
                return indent + '<' + tagName + attrs + ' />';
            }
            return indent + '<' + tagName + attrs + ' dangerouslySetInnerHTML={{ __html: ' + JSON.stringify(inner) + ' }} />';
        }
        
        const childrenJsx = Array.from(node.childNodes).map(child => nodeToJsx(child, indent + '  ')).join('');
        
        if (voidElements.has(tagName)) {
            return indent + '<' + tagName + attrs + ' />';
        } else {
            return indent + '<' + tagName + attrs + '>\n' + childrenJsx + '\n' + indent + '</' + tagName + '>';
        }
    }
    return '';
}

const componentsDir = path.join(__dirname, 'components');
const files = ['Header.tsx', 'Hero.tsx', 'Booking.tsx', 'MainContent.tsx', 'Footer.tsx', 'Modals.tsx'];

files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    const dangerouslyMatch = content.match(/<([a-zA-Z0-9\-]+)([^>]*)dangerouslySetInnerHTML=\{\{\s*__html:\s*`([\s\S]*?)`\s*\}\}\s*\/>/);
    
    if (dangerouslyMatch) {
        let tagName = dangerouslyMatch[1];
        let outerAttrs = dangerouslyMatch[2];
        let innerHtml = dangerouslyMatch[3];
        
        innerHtml = innerHtml.replace(/\\\\`/g, '`').replace(/\\\\\$/g, '$');
        
        const fullHtml = '<' + tagName + outerAttrs + '>' + innerHtml + '</' + tagName + '>';
        const dom = new JSDOM(fullHtml);
        const rootNode = dom.window.document.body.firstChild;
        
        const jsx = nodeToJsx(rootNode, '    ');
        
        const newCode = "import React from 'react';\n\nexport default function " + file.replace('.tsx', '') + "() {\n  return (\n" + jsx + "\n  );\n}\n";
        fs.writeFileSync(filePath, newCode);
        console.log('Converted ' + file + ' to real TSX.');
    } else {
        console.log('Could not find dangerouslySetInnerHTML in ' + file + ', skipping.');
    }
});

let layoutPath = path.join(__dirname, 'app', 'layout.tsx');
if (fs.existsSync(layoutPath)) {
    let layoutContent = fs.readFileSync(layoutPath, 'utf8');
    layoutContent = layoutContent.replace('<body className="min-h-full flex flex-col">', '<body className="min-h-full flex flex-col" suppressHydrationWarning>');
    fs.writeFileSync(layoutPath, layoutContent);
    console.log('Added suppressHydrationWarning to layout.tsx');
}

