const notes = require('./notes');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'adding command',
        builder: {
            title: {
                describe: "Note title",
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: "content o note",
                demandOption: true,
                type: 'string'
            }
        },

        handler: (argv) => {

            notes.addNote(argv.title, argv.body);

        }
    })
    .command({
        command: 'remove',
        describe: 'remove command',
        builder: {
            title: {
                describe: "title to be removed",
                demandOption: true,
                type: "string"
            }
        },
        handler: (argv) => {

            notes.removeNote(argv.title);

        }
    })
    .command({
        command: 'list',
        describe: 'listing command',

        handler: () => {

            notes.showNotes()

        }
    })
    .command({
        command: 'read',
        describe: 'reading command',
        builder: {
            title: {
                describe: "the file name",
                demandOption: true,
                type: "string"
            }
        },
        handler: (argv) => {

            notes.readNote(argv.title);

        }
    }).parse();

