const menus = require('../menus');

function processMenu(input, session) {
    const current = menus[session.currentMenu];

    if (!current) {
        return { message: 'Menu introuvable.', end: true };
    }

    // Si c’est un menu à étapes
    if (current.steps) {
        return current.steps(input, session);
    }

    if (current.handler) {
        const result = current.handler(input, session);

        // Fin de session
        if (result.exit) return { message: result.message, end: true };

        // Navigation vers un autre menu
        if (result.next) {
            // Empile le menu courant comme historique
            session.history.push(session.currentMenu);
            session.currentMenu = result.next;

            const nextMenu = menus[result.next];

            if (nextMenu.steps) {
                return nextMenu.steps(undefined, session); // premier appel à steps
            }

            return {
                message: nextMenu.message || '...',
                end: false,
            };
        }
    }

    return { message: 'Menu mal configuré.', end: true };
}

module.exports = processMenu;
