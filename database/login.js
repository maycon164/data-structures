const { User } = require('../model/User');
const utils = require('../helpers/utils');

module.exports = {

    async getAll() {
        let users = await User.find();

        if (users) {
            return users;
        }

    },

    async sign(user) {

        if (!user.email.trim() || !user.password.trim()) {
            throw new Error('empty field');
        } else {
            let hashPassword = await utils.getHashPassword(user.password);
            let ormUser = new User({
                email: user.email,
                password: hashPassword
            });
            ormUser = await ormUser.save();
            return ormUser;
        }

    },

    async login(user) {
        let orm = await User.findOne({ email: user.email })

        if (orm) {
            let result = await utils.checkHashPassword(user.password, orm.password)
            if (result) {
                let token = await utils.genereteToken({ email: user.email });
                if (token) {
                    return token;
                }
            } else {
                throw new Error('PASSWORD INVALID');
            }
        } else {
            throw new Error('USER NOT FOUND');
        }
    }

}