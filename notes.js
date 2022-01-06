const chalk = require('chalk');
const fs = require('fs');

const saveNotes = function (notes) {
    fs.writeFileSync(__dirname + '/notes/data.json', JSON.stringify(notes));
}

const addNote = function (title, body) {
    let notes = loadNotes();

    let notesFiltered = notes.filter(data => data.title == title);

    if (notesFiltered.length === 0) {
        notes.push({
            title,
            body
        });
        saveNotes(notes)
        console.log(chalk.green("new file added"))
    } else {
        console.log(chalk.red.bold("this title was taken"))
    }
}


const loadNotes = function () {
    try {
        let json = fs.readFileSync('./notes/data.json').toString();
        return JSON.parse(json);
    } catch (err) {
        return [];
    }
}

const showNotes = function () {
    let notes = loadNotes();

    if (notes.length > 0) {

        notes.forEach(note => {

            console.log(chalk.green.bold(note.title));

        });

    } else {

        console.log(chalk.red("the list is empty"));

    }
}

const removeNote = function (title) {
    let notes = loadNotes();

    if (notes.length > 0) {
        let notesToKeep = notes.filter(note => note.title != title);

        if (notesToKeep.length < notes.length) {
            saveNotes(notesToKeep);
            console.log(chalk.green(`${title} was removed`));
        } else {
            console.log(chalk.red(`${title} not found`));
        }

    } else {
        console.log(chalk.red("you don't have notes yet"));
    }
}

module.exports = {
    addNote,
    saveNotes,
    loadNotes,
    showNotes,
    removeNote
}