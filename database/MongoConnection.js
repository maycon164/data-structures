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


    }

}

module.exports = MongoConnection;
