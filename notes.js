const chalk = require('chalk');

module.exports = function (message) {

    message ? console.log(chalk.green(message)) : console.log(chalk.underline.bgRed("send a message in the next time"));

}