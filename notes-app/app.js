//const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

console.log(getNotes());

/* console.log(validator.isEmail('cmburboa@gmail.com'));
console.log(validator.isURL('http:///mead.io')); */

console.log(chalk.blue.inverse.bold("Success!"));