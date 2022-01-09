const mongoose = require('mongoose');
const { User } = require('../model/User')
const utils = require('../helpers/utils');

require('dotenv').config();

class MongoConnection {
    constructor() {
        this.getConnection();

    }

    getConnection() {
        mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
            console.log('conectado ao mongodb')
        });
    }


    getAll() {

    }

    sign(user) {
        return new Promise((resolve, reject) => {
            utils.getHashPassword(user.password).then(hashPassword => {

                let ormUser = new User({
                    email: user.email,
                    password: hashPassword
                });

                ormUser.save().then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            });
        });
    }

    login(user) {
        return new Promise((resolve, reject) => {
            User.findOne({ email: user.email }).then(ormUser => {

                if (ormUser) {
                    utils.checkHashPassword(user.password, ormUser.password)
                        .then(result => {

                            if (result) {
                                utils.genereteToken(user).then(token => {
                                    resolve(token);
                                });
                            } else {
                                reject(null);
                            }

                        });
                }
            });

        });
    }

}

module.exports = MongoConnection;
