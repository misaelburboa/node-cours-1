const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Misael.');
fs.appendFileSync('notes.txt', 'This text is appended!');