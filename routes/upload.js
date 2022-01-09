const utils = require('../helpers/utils');
const multer = require('multer');
const db = require('../database/file')
const uuid = require('uuid').v4
require('dotenv').config();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.FOLDER);
    },
    filename: (req, file, cb) => {
        cb(null, `${uuid()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

module.exports = (app) => {

    app.get('/files', utils.validateToken, async (req, res) => {

        let files = await db.getAllFiles();

        if (files) {
            return res.status(200).json(files);
        }

        return res.status(500).json({ message: '' });
    });

    app.post('/upload', utils.validateToken, upload.single('upload'), async (req, res) => {

        let obj = {
            originalname: req.file.filename,
            ext: req.file.mimetype,
            path: req.file.path
        }

        let file = await db.saveFile(obj);

        if (file) {
            return res.status(200).json(file);
        }

        return res.status(500).json({ message: 'it was not possible to save' });

    });

}