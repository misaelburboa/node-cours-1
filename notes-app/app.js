const validator = require('validator');
const getNotes = require('./notes.js');

console.log(getNotes());

console.log(validator.isEmail('cmburboa@gmail.com'));
console.log(validator.isURL('http:///mead.io'));