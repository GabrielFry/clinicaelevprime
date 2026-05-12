const fs = require('fs');

// Fix Header.tsx
let header = fs.readFileSync('components/Header.tsx', 'utf8');
// Navbar fixed positioning
header = header.replace('<div id="main-menu" style={{', '<div id="main-menu" style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, ');
// Select defaultValue
header = header.replace('<select className="psk-language-selector">', '<select className="psk-language-selector" defaultValue="/en/">');
header = header.replace('<option selected value="/en/">', '<option value="/en/">');
// Remove javascript:void(0)
header = header.replace(/javascript:void\(0\)/g, '#');
fs.writeFileSync('components/Header.tsx', header);
console.log('Fixed Header.tsx');

// Fix Hero.tsx
let hero = fs.readFileSync('components/Hero.tsx', 'utf8');
// Fix classname
hero = hero.replace('classname="with-quick-booking"', 'className="with-quick-booking"');
// Fix div attributes
hero = hero.replace(/<div webkit-playsinline="" playsInline="true" loop muted autoplay="" preload="auto"/g, '<div className="video-js video-hero-dimensions vjs-controls-disabled vjs-workinghover vjs-v7 vjs-playing vjs-has-started vjs-user-inactive"');
// Clean up the div's duplicate classNames which I might have messed up in the replace
hero = hero.replace(/className="video-js video-hero-dimensions vjs-controls-disabled vjs-workinghover vjs-v7 vjs-playing vjs-has-started vjs-user-inactive" className="video-js video-hero-dimensions vjs-controls-disabled vjs-workinghover vjs-v7 vjs-playing vjs-has-started vjs-user-inactive"/g, 'className="video-js video-hero-dimensions vjs-controls-disabled vjs-workinghover vjs-v7 vjs-playing vjs-has-started vjs-user-inactive"');
// Fix video tag attributes
hero = hero.replace(/autoplay=""/g, 'autoPlay');
hero = hero.replace(/playsInline="playsinline"/g, 'playsInline');
hero = hero.replace(/webkit-playsinline=""/g, 'playsInline');
hero = hero.replace(/playsInline="true"/g, 'playsInline={true}');
// Remove javascript:void(0)
hero = hero.replace(/javascript:void\(0\)/g, '#');
fs.writeFileSync('components/Hero.tsx', hero);
console.log('Fixed Hero.tsx');

// Fix Booking.tsx
let booking = fs.readFileSync('components/Booking.tsx', 'utf8');
booking = booking.replace(/javascript:void\(0\)/g, '#');
fs.writeFileSync('components/Booking.tsx', booking);
console.log('Fixed Booking.tsx');

