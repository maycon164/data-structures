const db = require('../database/login');
const utils = require('../helpers/utils');

module.exports = (app) => {

    app.post('/sign', utils.checkEmail, async (req, res) => {
        let user;
        try {
            user = await db.sign(req.body);
        } catch (error) {
            return res.status(500).json({ message: error });
        }

        if (user) {
            return res.status(200).json(user);
        }

        return res.status(500).json({
            message: "something went wrong"
        });
    });

    app.post('/login', async (req, res) => {
        let token;

        try {
            token = await db.login(req.body);
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }

        if (token) {
            return res.status(200).json({ status: true, token });
        }
    })

    app.get('/users', utils.validateToken, async (req, res) => {
        let users = await db.getAll();

        if (users) {
            return res.status(200).json(users);
        }
        return res.status(500).json({ message: "something went wrong" });
    });

}