const balanceMenu = {
    message: `Votre solde est : 10 000 MGA
  0. Retour`,

    handler: (input) => {
        if (input === '0') {
            return { next: 'mainMenu' };
        }
        return { exit: true, message: 'Fin de session.' };
    },
};

module.exports = balanceMenu;
