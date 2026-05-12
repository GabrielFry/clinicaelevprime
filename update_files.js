const fs = require('fs');

// Update Booking.tsx
let booking = fs.readFileSync('components/Booking.tsx', 'utf8');
const startMatch = '<div className="field destinations">';
const endMatch = '</a>\n               <div className="pnl sf-hidden">\n\n \n \n \n \n \n \n \n              </div>\n \n            </div>';
if (booking.includes(startMatch) && booking.includes(endMatch)) {
    const startIndex = booking.indexOf(startMatch);
    const endIndex = booking.indexOf(endMatch) + endMatch.length;
    booking = booking.substring(0, startIndex) + booking.substring(endIndex);
    fs.writeFileSync('components/Booking.tsx', booking);
    console.log('Booking.tsx updated.');
} else {
    console.log('Could not match in Booking.tsx');
}

// Update MainContent.tsx
let main = fs.readFileSync('components/MainContent.tsx', 'utf8');
// Add flex and centering to the slides
main = main.replace(/<li className="slide([^"]*)"/g, '<li className="slide flex flex-col items-center justify-center text-center$1"');
main = main.replace(/<div className="slide__titles">/g, '<div className="slide__titles flex flex-col items-center">');
main = main.replace(/<div className="slide__description">/g, '<div className="slide__description flex flex-col items-center">');
fs.writeFileSync('components/MainContent.tsx', main);
console.log('MainContent.tsx updated.');
