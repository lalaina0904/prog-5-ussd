const rechargeMenu = {
    steps: (input, session) => {
        if (!session.state) {
            session.state = {
                step: 1,
                data: {},
            };
            return {
                message: `Recharger votre crédit :
  1. Par carte à gratter
  2. Lany crédit
  ---
  0. Précédent`,
                end: false,
            };
        }

        const { step, data } = session.state;

        // Universel : retour
        if (input === '00') {
            session.state = null;
            session.history = [];
            session.currentMenu = 'mainMenu';
            return {
                message: require('../menus').mainMenu.message,
                end: false,
            };
        }

        if (input === '0') {
            const previous = session.history.pop() || 'mainMenu';
            session.state = null;
            session.currentMenu = previous;
            return {
                message: require('../menus')[previous].message,
                end: false,
            };
        }

        // STEP 1 : choix méthode
        if (step === 1) {
            if (input === '1') {
                session.state.step = 2;
                data.method = 'Carte à gratter';
                return {
                    message: `Entrez le code de rechargement (14 chiffres) : `,
                    end: false,
                };
            }

            if (input === '2') {
                session.state.step = 3;
                data.method = 'Lany crédit';
                return {
                    message: `Choisissez un solde :
  1. 200Ar
  2. 500Ar
  3. 1000Ar
  ---
  0. Précédent
  00. Menu principal`,
                    end: false,
                };
            }

            return {
                message: `xx Option invalide xx.
  1. Par carte à gratter
  2. Lany crédit
  ---
  0. Précédent
`,
                end: false,
            };
        }

        if (step === 2) {
            if (!/^\d{14}$/.test(input)) {
                return {
                    message: `Le code que vous avez entré n'est pas valide.
  Entrez un code à 14 chiffres : `,
                    end: false,
                };
            }

            session.state = null;
            return {
                message: `Rechargement réussi`,
                end: true,
            };
        }

        // STEP 3 : Lany crédit - choix du montant
        if (step === 3) {
            const amounts = {
                1: 200,
                2: 500,
                3: 1000,
            };

            if (!Object.keys(amounts).includes(input)) {
                return {
                    message: `xx Option invalide xx.
  Choisissez un solde :
  1. 200Ar
  2. 500Ar
  3. 1000Ar
  ---
  0. Précédent
  00. Menu principal`,
                    end: false,
                };
            }

            const amount = amounts[input];
            session.state = null;

            return {
                message: `Votre compte a été crédité de ${amount} MGA via Lany crédit.`,
                end: true,
            };
        }

        return { message: 'Erreur interne.', end: true };
    },
};

module.exports = rechargeMenu;
