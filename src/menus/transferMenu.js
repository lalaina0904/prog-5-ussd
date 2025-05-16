const transferMenu = {
    steps: (input, session) => {
        if (!session.state) {
            session.state = {
                step: 1,
                data: {},
            };
            return {
                message: 'Entrez le numéro du destinataire :',
                end: false,
            };
        }

        const { step, data } = session.state;

        if (step === 1) {
            if (input === '9') return { next: 'mainMenu' };

            data.recipient = input;
            session.state.step = 2;
            return {
                message: 'Entrez le montant à transférer :',
                end: false,
            };
        }

        if (step === 2) {
            if (input === '9') {
                session.state = null;
                return { next: 'mainMenu' };
            }

            data.amount = input;
            session.state.step = 3;
            return {
                message: 'Entrez votre code secret :',
                end: false,
            };
        }

        if (step === 3) {
            if (input === '9') {
                session.state = null;
                return { next: 'mainMenu' };
            }

            const { recipient, amount } = data;
            session.state = null;

            return {
                message: `Transaction effectuée vers ${recipient} pour ${amount} MGA.`,
                end: true,
            };
        }

        return { message: 'Erreur interne.', end: true };
    },
};

module.exports = transferMenu;
