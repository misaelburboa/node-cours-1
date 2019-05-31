//const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

/* console.log(getNotes());

console.log(validator.isEmail('cmburboa@gmail.com'));
console.log(validator.isURL('http:///mead.io'));

console.log(chalk.blue.inverse.bold("Success!")); */

const command = process.argv[2];

console.log(process.argv);

/* switch (command) {
    case "add": console.log("Adding note!"); break;
    case "remove": console.log("Removing note!"); break;
} */