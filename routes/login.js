const MongoConnection = require('../database/MongoConnection');
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

    app.post('/login', (req, res) => {

    })

    app.get('/users', (req, res) => {

    });

}