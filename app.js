//const notes = require('../course-nodejs/notes');
const chalk = require('chalk');
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

            fs.writeFileSync("./notes/" + argv.title + ".json", JSON.stringify({ title: argv.title, body: argv.body }));
            console.log(chalk.green("new file created: " + argv.title));

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

            fs.readdir("./notes", (err, notes) => {
                if (err) {
                    console.error(err);
                    return;
                }
                notes.forEach((note, index) => console.log(chalk.green(index + " - " + note)));
            });

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
                    console.log(chalk.green.bold(value) + "\n   " + chalk.green(note[value]));
                }

            });
        }
    }).parse();

