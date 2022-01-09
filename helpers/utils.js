let bcrypt = require('bcrypt');

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
    }

};