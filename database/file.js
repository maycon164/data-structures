const { File } = require('../model/File');

module.exports = {

    async saveFile(file) {
        let orm = new File(file);
        orm = await orm.save();
        if (orm) return orm;
    },

    async getAllFiles() {
        let files = File.find();
        if (files) return files;
    }

}
