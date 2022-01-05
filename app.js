const notes = require('../course-nodejs/notes');
const yargs = require('yargs/yargs')(process.argv.slice(2));
let argv = yargs.argv;

yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function () {
        console.log("adding a new note to app")
    }
})

if (argv.add) {
    console.log("adding a new note")
} else if (argv.remove) {
    console.log("Removing a note");
} else if (argv.list) {
    console.log("listing all notes")
} else if (argv.read) {
    console.log("reading a note .... wait a minute")
}


