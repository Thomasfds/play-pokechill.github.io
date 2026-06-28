// ============================================================
// Pokechill — Patch de traduction française : interface UI
// Fichier : scripts/fr/ui.js
//
// Rôle : Remplace les nœuds de texte statiques de index.html
//        par leurs équivalents français, via un TreeWalker DOM.
//        Ne modifie aucun fichier existant.
//
// Limites connues :
//  - Les textes insérés dynamiquement via innerHTML APRÈS le
//    chargement (combat, tooltips) restent en anglais en v1.
//  - Les indicateurs en temps réel (Floor: 3, Score: 0, etc.)
//    sont surchargés au démarrage puis regénérés en anglais
//    par le moteur de jeu.
//  - Les attributs title/aria-label ne sont pas traduits.
// ============================================================

;(function () {
    if (!window.POKECHILL_FR) return;

    // ----------------------------------------------------------
    // TABLE DE TRADUCTION — textes exacts (insensibles aux
    // espaces de début/fin, sensibles à la casse)
    // ----------------------------------------------------------
    const FR = {
        // --- Navigation (menu bas) ---
        'Travel':           'Voyage',
        'Items':            'Objets',
        'Team':             'Équipe',
        'Dex':              'Pokédex',
        'Poke-Mart':        'Poke-Mart',
        'Training':         'Entraînement',
        'Genetics':         'Génétique',
        'Mystery Gift':     'Cadeau Mystère',
        'Export Reward':    'Récompense Export',
        'Wonder Trade':     'Échange Surprise',
        'Mega Dimension':   'Méga-Dimension',
        'Dictionary':       'Dictionnaire',
        'Guide':            'Guide',
        'Settings':         'Paramètres',
        'Full Screen':      'Plein Écran',

        // --- Sac (Item menu) ---
        'Cancel':           'Annuler',
        'Remove':           'Retirer',
        'Held':             'Tenu',
        'Evo':              'Évo',
        "TM's":             'CT',
        'Memo':             'Mémo',
        'Berry':            'Baie',
        'Gems':             'Gemmes',
        'Decor':            'Décor',
        'Key':              'Clé',

        // --- Gestion d'équipe ---
        'Go back':          'Retour',
        'Save and Go!':     'Sauvegarder et partir !',

        // --- Dictionnaire / Pokédex ---
        'Pokemon':          'Pokémon',
        'Abilities':        'Talents',
        'Moves':            'Capacités',
        'Filters':          'Filtres',
        'Clear Filters':    'Réinitialiser',
        'Tags':             'Étiquettes',
        'caught':           'capturés',
        // Options select
        'type':             'type',
        'level':            'niveau',
        'division':         'division',
        'evolution':        'évolution',
        'ability':          'talent',
        'shiny':            'shiny',
        'signature':        'signature',
        'ribbon':           'ruban',
        'tag':              'étiquette',
        'sort':             'trier',
        'not evolved (all)':   'pas évolué (tout)',
        'not evolved (level)': 'pas évolué (niveau)',
        'common':           'commun',
        'uncommon':         'peu commun',
        'rare':             'rare',
        'locked HA':        'TS verrouillé',
        'is shiny':         'est shiny',
        'not shiny':        'pas shiny',
        'has star sign':    'a signe étoile',
        'all star sign':    'tous signes étoile',
        'has signature':    'a capacité signature',
        'has egg move':     "a capacité d'œuf",
        'has ribbon':       'a un ruban',
        'none':             'aucun',
        // Tri des stats
        'hp Total':         'PV Total',
        'atk Total':        'Atq Total',
        'def Total':        'Déf Total',
        'satk Total':       'Atq Sp. Total',
        'sdef Total':       'Déf Sp. Total',
        'spe Total':        'Vit. Total',
        'hp BST':           'PV BST',
        'atk BST':          'Atq BST',
        'def BST':          'Déf BST',
        'satk BST':         'Atq Sp. BST',
        'sdef BST':         'Déf Sp. BST',
        'spe BST':          'Vit. BST',
        "hp IV's":          "IV PV",
        "atk IV's":         "IV Atq",
        "def IV's":         "IV Déf",
        "satk IV's":        "IV Atq Sp.",
        "sdef IV's":        "IV Déf Sp.",
        "spe IV's":         "IV Vit.",

        // --- Paramètres ---
        'Settings':         'Paramètres',
        'Export Data':      'Exporter les données',
        'Import Data':      'Importer les données',
        'Data to Text':     'Données en texte',
        'Game modifiers':   'Modificateurs de jeu',
        'Credits':          'Crédits',
        'Discord':          'Discord',
        'Wipe Data':        'Effacer les données',
        'disabled':         'désactivé',
        'enabled':          'activé',
        'default':          'défaut',
        'dark':             'sombre',
        'verdant':          'verdoyant',
        'lilac':            'lilas',
        'cherry':           'cerise',
        'onyx':             'onyx',
        'coral':            'corail',
        'oled':             'oled',
        'Hide non-new Pokemon got in summary:': 'Masquer les Pokémon déjà obtenus dans le résumé :',
        'Sustract 1 to current Wild Area rotation:': 'Soustraire 1 à la rotation de la Zone Sauvage :',

        // --- Sélection du starter ---
        'Select a starter!': 'Choisissez un Pokémon de départ !',
        'Fire Type':         'Type Feu',
        'Grass Type':        'Type Plante',
        'Water Type':        'Type Eau',
        'Tip: Right click (or long-press on mobile) on most elements for additional information':
            'Astuce : Faites un clic droit (ou appuyez longuement sur mobile) sur la plupart des éléments pour plus d\'informations',

        // --- Entraînement ---
        'IV Training':                 'Entraînement IV',
        'EXP Training':                'Entraînement EXP',
        'Signature Move Training':     'Entraînement Capacité Signature',
        'Ability Training':            'Entraînement Talent',
        'Hidden Ability Training':     'Entraînement Talent Caché',
        'Difficulty: ★':               'Difficulté : ★',
        'Difficulty: ★★':              'Difficulté : ★★',
        'Difficulty: ★★★':             'Difficulté : ★★★',
        'Difficulty: ★★★★':            'Difficulté : ★★★★',

        // --- Génétique ---
        'Compatibility':    'Compatibilité',
        'Power Cost':       'Coût en Énergie',
        'Time to complete operation':   "Temps pour terminer l'opération",
        '% for shiny mutation':         '% de mutation shiny',
        '% to inherit a move from the sample': "% d'héritage d'une capacité de l'échantillon",
        "% to inherit sample's HP Iv's":    "% d'héritage des IV de PV de l'échantillon",
        "% to inherit sample's Attack Iv's":  "% d'héritage des IV d'Attaque de l'échantillon",
        "% to inherit sample's S. Attack Iv's": "% d'héritage des IV d'Atq Spéciale de l'échantillon",
        "% to inherit sample's Defense Iv's": "% d'héritage des IV de Défense de l'échantillon",
        "% to inherit sample's S. Defense Iv's": "% d'héritage des IV de Déf Spéciale de l'échantillon",
        "% to inherit sample's Speed Iv's": "% d'héritage des IV de Vitesse de l'échantillon",
        'Warning, power cost too high! Only 5 out of 6 maximum IV\'s per stat will be inherited!':
            'Attention, coût en énergie trop élevé ! Seulement 5 des 6 IV maximum par stat seront hérités !',
        'Pokerus detected on the host! Genetic compatibility is increased by one level!':
            'Pokérus détecté ! La compatibilité génétique est augmentée d\'un niveau !',
        'This Pokemon is marked as Special, and cannot receive shiny mutations through genetics!':
            'Ce Pokémon est Spécial et ne peut pas recevoir de mutations shiny via la génétique !',
        'Start':            'Démarrer',

        // --- Boutique ---
        'Select ingredients to add to the curry! [5/5]': 'Sélectionnez des ingrédients pour le curry ! [5/5]',
        '~ Current Effects ~':  '~ Effets actuels ~',
        'Reset':            'Réinitialiser',
        'Goods':            'Marchandises',
        'Evolution':        'Évolution',
        'Memory':           'Mémoire',
        'Restaurant':       'Restaurant',
        'Exchange':         'Échange',

        // --- Zones / Exploration ---
        'Wild Areas':       'Zones Sauvages',
        'Dungeons':         'Donjons',
        'Events':           'Événements',
        'Novice':           'Novice',
        'Elite':            'Élite',
        'VS Trainers':      'Dresseurs VS',
        'Trainers':         'Dresseurs',
        'Battle Frontier':  'Frontière des Combats',
        'Mega-Dimension':   'Méga-Dimension',

        // --- Fin de combat ---
        'Save and exit':    'Sauvegarder et quitter',
        'Fight Again':      'Recombattre',
        'Battle Summary':   'Résumé du combat',
        'New Items!':       'Nouveaux Objets !',
        'New Pokemon!':     'Nouveaux Pokémon !',

        // --- Éditeur Pokémon ---
        'Base Stats':       'Stats de base',
        "IV's Stats":       'Stats IV',
        'Expand Lore':      'Afficher le lore',
        'Signature Move':   'Capacité Signature',
        'Select a move below and replace it with one of the list of learnt moves':
            'Sélectionnez une capacité ci-dessous pour la remplacer par une capacité apprise',
        'Learnt Moves':     'Capacités Apprises',
        'Click here to add tags': 'Cliquez ici pour ajouter des étiquettes',
        '[Coming Soon]':    '[Bientôt disponible]',

        // --- Décoration ---
        'Drag and drop the selected decor to apply':    'Glissez-déposez le décor sélectionné pour l\'appliquer',
        'Save Changes':     'Sauvegarder',

        // --- Guide ---
        'Game Guide':       'Guide du Jeu',

        // --- AFK ---
        'AFK time is being calculated, please wait...': 'Calcul du temps AFK en cours, veuillez patienter...',

        // --- Bannière de mise à jour (PR/updateCheck.js) ---
        'A new update is available': 'Une nouvelle mise à jour est disponible',

        // --- Disclaimer ---
        'This project is entirely unofficial!': 'Ce projet est entièrement non officiel !',

        // --- Divers ---
        'Uncommon':     'Peu commun',
        'Rare!':        'Rare !',
        'Area Items':   "Objets de la zone",
        'Area Pokemon': 'Pokémon de la zone',
        'Team Preview': "Aperçu de l'équipe",
    };

    // ----------------------------------------------------------
    // WALKER DE NŒUDS TEXTE
    // ----------------------------------------------------------
    const SKIP_TAGS = new Set(['script', 'style', 'textarea', 'noscript']);

    // Collecteur pour le mode debug (textes non traduits rencontrés)
    const _untranslated = new Set();

    function translateTextNode(node) {
        const raw = node.textContent;
        const trimmed = raw.trim();
        if (!trimmed) return;

        if (FR[trimmed] !== undefined) {
            // Préserver les espaces de début/fin
            const leading  = raw.match(/^[\s\n]*/)[0];
            const trailing = raw.match(/[\s\n]*$/)[0];
            node.textContent = leading + FR[trimmed] + trailing;
            return;
        }

        // Mode debug : signaler les textes non traduits non triviaux
        if (window.POKECHILL_FR_DEBUG && trimmed.length > 2 && /[a-zA-Z]/.test(trimmed)) {
            _untranslated.add(trimmed);
            if (node.parentElement) node.parentElement.classList.add('i18n-missing');
        }

        // Cas spécial : "Team N" (ex: options du select d'équipes)
        const teamMatch = trimmed.match(/^Team (\d+)$/);
        if (teamMatch) {
            const leading  = raw.match(/^[\s\n]*/)[0];
            const trailing = raw.match(/[\s\n]*$/)[0];
            node.textContent = `${leading}Équipe ${teamMatch[1]}${trailing}`;
            return;
        }

        // Cas spécial : "Auto-Refight" peut être suivi d'un span
        // → le nœud texte pur "Auto-Refight " est traduit
        if (trimmed === 'Auto-Refight') {
            const leading  = raw.match(/^[\s\n]*/)[0];
            const trailing = raw.match(/[\s\n]*$/)[0];
            node.textContent = `${leading}Auto-Recombat${trailing}`;
            return;
        }

        // Cas spécial : "(Requires an" dans Auto-Refight span
        if (trimmed.startsWith('(Requires an') && trimmed.includes('Auto-Refight Ticket)')) {
            node.textContent = raw.replace('(Requires an', '(Nécessite un').replace('Auto-Refight Ticket)', 'Ticket Auto-Recombat)');
            return;
        }

        // Cas spécial : "Battle Summary" contient une icône SVG avant
        // → le nœud texte seul "Battle Summary" est géré par la table
    }

    function walkDOM(root) {
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;
                    if (SKIP_TAGS.has(parent.tagName.toLowerCase())) return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        // Collecter tous les nœuds d'abord pour éviter les problèmes
        // de mutation du DOM pendant la traversée
        const nodes = [];
        let node;
        while ((node = walker.nextNode())) nodes.push(node);
        nodes.forEach(translateTextNode);
    }

    // ----------------------------------------------------------
    // ATTRIBUTS (placeholder, title)
    // ----------------------------------------------------------
    function translateAttributes() {
        const attrMap = {
            'Right Click/Long Press to see keywords': 'Clic droit / Appui long pour voir les mots-clés',
            'Right Click to see keywords':            'Clic droit pour voir les mots-clés',
            'Custom Challenge':                       'Défi personnalisé',
            'Optional description':                   'Description optionnelle (facultative)',
        };

        document.querySelectorAll('[placeholder]').forEach(el => {
            const p = el.getAttribute('placeholder');
            if (attrMap[p]) el.setAttribute('placeholder', attrMap[p]);
        });
    }

    // ----------------------------------------------------------
    // POINT D'ENTRÉE
    // ----------------------------------------------------------
    // Mode debug : injecter le style de surbrillance avant le walk
    if (window.POKECHILL_FR_DEBUG) {
        const s = document.createElement('style');
        s.textContent = '.i18n-missing { outline: 2px dashed red !important; }';
        document.head.appendChild(s);
    }

    walkDOM(document.body);
    translateAttributes();

    // Mode debug : rapport console après le walk initial
    if (window.POKECHILL_FR_DEBUG && _untranslated.size) {
        console.warn('[i18n] Textes non traduits (%d) :', _untranslated.size, [..._untranslated].sort());
    }

    // Observe le DOM pour traduire les nœuds insérés dynamiquement
    // qui contiennent des textes couverts par la table FR.
    // Utilisation minimale : uniquement les nœuds texte directs
    // (évite de relancer le walker sur tout le body à chaque mutation).
    const observer = new MutationObserver(function(mutations) {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    translateTextNode(node);
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    walkDOM(node);
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    console.info('[i18n] Patch UI appliqué.');
})();
