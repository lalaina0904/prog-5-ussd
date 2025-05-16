const mainMenu = {
    message: `Menu Principal :
  1. Transfert d'argent
  2. Voir mon solde
  3. Recharger
  ---
  0. Quitter`,

    handler: (input) => {
        switch (input) {
            case '1':
                return { next: 'transferMenu' };
            case '2':
                return { next: 'balanceMenu' };
            case '3':
                return { next: 'rechargeMenu' };
            case '0':
                return {
                    exit: true,
                    message: "Merci d'avoir utilisé notre service.",
                };
            default:
                return {
                    exit: true,
                    message: 'Option invalide. Fin de la session.',
                };
        }
    },
};

module.exports = mainMenu;
