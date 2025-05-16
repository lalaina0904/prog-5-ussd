const readline = require('readline');
const menus = require('./menus');
const processMenu = require('./core/menuEngine');

const session = {
    currentMenu: 'mainMenu',
    history: [],
    state: null,
};

console.clear();
console.log(menus.mainMenu.message);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt('');
rl.prompt();

rl.on('line', (line) => {
    const { message, end } = processMenu(line.trim(), session);
    console.clear();
    console.log(message);
    if (end) rl.close();
});
