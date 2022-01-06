const notes = require('../course-nodejs/notes');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'adding command',
        handler: () => {
            console.log("adding notes")
        }
    })
    .command({
        command: 'remove',
        describe: 'remove command',
        handler: () => {
            console.log("removing notes")
        }
    })
    .command({
        command: 'list',
        describe: 'listing command',
        handler: () => {
            console.log("listing notes")
        }
    })
    .command({
        command: 'read',
        describe: 'reading command',
        handler: () => {
            console.log("reading notes")
        }
    }).parse();

