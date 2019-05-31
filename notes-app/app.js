//const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body);
    }
});

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note!',
    handler: function() {
        console.log("Removing a note!");
    }
});

// List Remove Command
yargs.command({
    command: 'list',
    describe: 'Listing notes!',
    handler: function() {
        console.log("Listing notes!");
    }
});

// Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    handler: function() {
        console.log("Reading a note!");
    }
});

yargs.parse();
// console.log(yargs.argv);