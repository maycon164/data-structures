const MongoConnection = require('../database/MongoConnection');
const utils = require('../helpers/utils');
const db = new MongoConnection();

module.exports = (app) => {

    app.post('/sign', async (req, res) => {
        let user = await db.sign(req.body);

        if (user) {
            return res.status(200).json(user);
        }
        return res.status(500).json({
            message: "something went wrong"
        });
    });

    app.post('/login', async (req, res) => {
        let token = await db.login(req.body);

        if (token) {
            return res.status(200).json({ status: true, token });
        }
    })

    app.get('/users', utils.validateToken, (req, res) => {
        console.log(req.user);
        return res.status(200).json({ message: "TOKEN VALIDO" });
    });

}