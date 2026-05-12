const fs = require('fs');

// 1. Header.tsx changes
let header = fs.readFileSync('components/Header.tsx', 'utf8');
// Hide Book now
header = header.replace(/<a href="#" id="open-full-qb" className="button">[\s\n]*Book now[\s\n]*<\/a>/i, '');
// Make navbar thinner on scroll
header = header.replace(
  `backgroundColor: scrolled ? '#ffffff' : 'transparent', transition: 'background-color 0.3s ease'`,
  `backgroundColor: scrolled ? '#ffffff' : 'transparent', transition: 'all 0.3s ease', padding: scrolled ? '10px 0' : '25px 0'`
);
fs.writeFileSync('components/Header.tsx', header);

// 2. Booking.tsx changes
let booking = fs.readFileSync('components/Booking.tsx', 'utf8');
booking = booking.replace(/<a href="https:\/\/www\.sixsenses\.com\/en\/hotels-resorts\/\?src=" className="button">[\s\S]*?<\/a>/i, '');
fs.writeFileSync('components/Booking.tsx', booking);

// 3. Hero.tsx changes
let hero = fs.readFileSync('components/Hero.tsx', 'utf8');
// Remove "View properties on map"
hero = hero.replace(/<p>[\s\n]*<a[^>]*find-in-map[^>]*>[\s\S]*?<\/a>[\s\n]*<\/p>/i, '');
// Remove "Play full video"
hero = hero.replace(/<div className="video-go-full">[\s\S]*?<\/div>[\s\n]*<\/div>/i, '</div>');

// Centralize text at bottom left
hero = hero.replace(/<div className="hero-caption" data-index="0" data-event="start">/i, '<div className="hero-caption absolute bottom-10 left-1/2 -translate-x-1/2 w-11/12 max-w-6xl z-10" data-index="0" data-event="start">');
hero = hero.replace(/<div className="hero-caption__text">/i, '<div className="hero-caption__text text-left text-white">');

fs.writeFileSync('components/Hero.tsx', hero);
console.log('All changes applied!');
