const fs = require('fs');
let b = fs.readFileSync('components/Booking.tsx', 'utf8');
const searchIndex = b.indexOf('<a href="https://www.sixsenses.com/en/hotels-resorts/?src=" className="button">');
const destinationsIndex = b.indexOf('<div className="field destinations">');
if (searchIndex !== -1 && destinationsIndex !== -1) {
    b = b.substring(0, destinationsIndex) + b.substring(searchIndex);
    fs.writeFileSync('components/Booking.tsx', b);
    console.log('Fixed Booking');
} else {
    console.log('Indices not found', destinationsIndex, searchIndex);
}
