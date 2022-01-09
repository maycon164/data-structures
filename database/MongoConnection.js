const mongoose = require('mongoose');

require('dotenv').config();

class MongoConnection {

    static getConnection() {
        return mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
            console.log('conectado ao mongodb')
        });
    }
}

module.exports = MongoConnection;
