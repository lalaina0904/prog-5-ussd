// function helloWorld() {
//     console.log('Hello, world!')
// }
// helloWorld()

const mainMenu = require('./mainMenu');
const transferMenu = require('./transferMenu');
const balanceMenu = require('./balanceMenu');
const rechargeMenu = require('./rechargeMenu');

module.exports = {
    mainMenu,
    transferMenu,
    balanceMenu,
    rechargeMenu,
};
