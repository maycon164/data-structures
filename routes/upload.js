const utils = require('../helpers/utils');
const multer = require('multer');
const db = require('../database/file')

module.exports = (app) => {

    app.get('/files', utils.validateToken, async (req, res) => {

        let files = await db.getAllFiles();

        if (files) {
            return res.status(200).json(files);
        }

        return res.status(500).json({ message: '' });
    });

    app.post('/upload', utils.validateToken, async (req, res) => {

        let file = await db.saveFile(file);

        if (file) {
            return res.status(200).json(file);
        }

        return res.status(500).json({ message: 'it was not possible to save' });

    });

}