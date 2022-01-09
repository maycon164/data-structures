const { File } = require('../model/File');

module.exports = {

    saveFile(file) {
        return new Promise((resolve, reject) => {
            let ormFile = new File(file);

            ormFile.save().then(file => {
                if (file) resolve(file)
            }).catch(err => reject());

        });
    },

    getAllFiles() {
        return new Promise((resolve, reject) => {
            File.find().then(files => {
                resolve(files)
            }).catch(err => {
                reject()
            });
        });
    }

}
