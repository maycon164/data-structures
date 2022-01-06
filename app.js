const notes = require('./notes');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const fs = require('fs');


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
        handler: () => {
            console.log("removing notes")
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
            file: {
                describe: "the file name",
                demandOption: true,
                type: "string"
            }
        },
        handler: (argv) => {

            fs.readFile(__dirname + "/notes/" + argv.file, { encoding: 'utf-8', flag: 'r' }, (error, data) => {
                if (error) {
                    console.log(chalk.red("something went wrong"));
                    return;
                }

                let note = JSON.parse(data);

                for (let value in note) {
                    console.log(value + "\n   " + note[value]);
                }

            });
        }
    }).parse();

