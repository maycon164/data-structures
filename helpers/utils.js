const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    getHashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) reject(err);

                resolve(hash);

            });
        })
    },

    checkHashPassword(password, hashPassword) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hashPassword, (err, result) => {

                resolve(result);

            });

        });
    },

    genereteToken(user) {
        return new Promise((resolve, reject) => {
            let token = jwt.sign(user, process.env.PRIVATE_KEY, {
                expiresIn: 36000
            });
            console.log(token);
            resolve(token);
        });
    },

    validateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        console.log(authHeader);

        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(400);

        jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        });

    }

};