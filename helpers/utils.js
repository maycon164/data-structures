const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model/User');

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

    genereteToken(email) {
        return new Promise((resolve, reject) => {
            let token = jwt.sign(email, process.env.PRIVATE_KEY, {
                expiresIn: 36000
            });
            resolve(token);
        });
    },

    //midleware valida token de acesso
    validateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.sendStatus(400);
        jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        });
    },

    //middleware valida email
    checkEmail(req, res, next) {
        let email = req.body.email;

        if (email) {
            User.find({ email: email }).then(user => {
                if (user.length > 0) {
                    return res.status(406).json({ message: 'this email is already registered' });
                } else {
                    next()
                }
            });
        } else {
            return res.status(400).json({ message: 'empty email' })
        }

    }

};