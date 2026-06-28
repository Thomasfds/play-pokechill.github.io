// ============================================================
// Pokechill — Patch de traduction française : dictionnaires
// Fichier : scripts/fr/patch.js
//
// Rôle : Surcharge les propriétés .info() et .rename des objets
//        ability, item, move, field et areas après leur
//        chargement initial. Aucun fichier existant n'est modifié.
//
// Chargé après explore.js (qui définit format, returnTypeColor,
// les constantes tagXxx) et après tous les dictionnaires.
//
// Conventions :
//  - Utiliser function() (pas =>) pour les méthodes .info()
//    qui utilisent `this` (ex: items avec this.power()).
//  - Vérifier l'existence de l'objet avant de le surcharger
//    pour éviter les erreurs si l'upstream supprime une entrée.
//  - Les badges colorés (tagBurn, tagSleep, etc.) restent en
//    anglais car ce sont des constantes (const) dans explore.js.
// ============================================================

;(function () {
    if (!window.POKECHILL_FR) return;

    // ----------------------------------------------------------
    // TALENTS (ability) — moveDictionary.js
    // ----------------------------------------------------------

    // --- Tier 1 : Boucliers de type (Guard) ---
    // "Halves the damage received of X-type moves"
    // → "Réduit de moitié les dégâts reçus des capacités de type X"

    ability.grabGuard    && (ability.grabGuard.info    = function() { return `Réduit de moitié les dégâts reçus des capacités de type Combat` });
    ability.waterGuard   && (ability.waterGuard.info   = function() { return `Réduit de moitié les dégâts reçus des capacités de type Eau` });
    ability.flameGuard   && (ability.flameGuard.info   = function() { return `Réduit de moitié les dégâts reçus des capacités de type Feu` });
    ability.curseGuard   && (ability.curseGuard.info   = function() { return `Réduit de moitié les dégâts reçus des capacités de type Spectre` });
    ability.poisonGuard  && (ability.poisonGuard.info  = function() { return `Réduit de moitié les dégâts reçus des capacités de type Poison` });
    ability.iceGuard     && (ability.iceGuard.info     = function() { return `Réduit de moitié les dégâts reçus des capacités de type Glace` });
    ability.psychicGuard && (ability.psychicGuard.info = function() { return `Réduit de moitié les dégâts reçus des capacités de type Psy` });
    ability.fairyGuard   && (ability.fairyGuard.info   = function() { return `Réduit de moitié les dégâts reçus des capacités de type Fée` });
    ability.leafGuard    && (ability.leafGuard.info    = function() { return `Réduit de moitié les dégâts reçus des capacités de type Plante` });
    ability.plainGuard   && (ability.plainGuard.info   = function() { return `Réduit de moitié les dégâts reçus des capacités de type Normal` });
    ability.sinisterGuard && (ability.sinisterGuard.info = function() { return `Réduit de moitié les dégâts reçus des capacités de type Ténèbres` });
    ability.steelGuard   && (ability.steelGuard.info   = function() { return `Réduit de moitié les dégâts reçus des capacités de type Acier` });
    ability.dragonGuard  && (ability.dragonGuard.info  = function() { return `Réduit de moitié les dégâts reçus des capacités de type Dragon` });
    ability.bugGuard     && (ability.bugGuard.info     = function() { return `Réduit de moitié les dégâts reçus des capacités de type Insecte` });
    ability.rockGuard    && (ability.rockGuard.info    = function() { return `Réduit de moitié les dégâts reçus des capacités de type Roche` });
    ability.groundGuard  && (ability.groundGuard.info  = function() { return `Réduit de moitié les dégâts reçus des capacités de type Sol` });
    ability.flyingGuard  && (ability.flyingGuard.info  = function() { return `Réduit de moitié les dégâts reçus des capacités de type Vol` });

    // --- Tier 1 : Immunités aux statuts ---
    // "Grants immunity to [tag]" → "Confère une immunité contre [tag]"
    ability.insomnia   && (ability.insomnia.info   = function() { return `Confère une immunité contre ${tagSleep}` });
    ability.immunity   && (ability.immunity.info   = function() { return `Confère une immunité contre ${tagPoisoned}` });
    ability.limber     && (ability.limber.info     = function() { return `Confère une immunité contre ${tagParalysis}` });
    ability.ownTempo   && (ability.ownTempo.info   = function() { return `Confère une immunité contre ${tagConfused}` });
    ability.magmaArmor && (ability.magmaArmor.info = function() { return `Confère une immunité contre ${tagFreeze}` });
    ability.waterVeil  && (ability.waterVeil.info  = function() { return `Confère une immunité contre ${tagBurn}` });

    // --- Tier 1 : Résistance aux statuts (effects de statut) ---
    ability.marvelScale  && (ability.marvelScale.info  = function() { return `Augmente la Défense de 50% lorsqu'un effet de statut est actif` });
    ability.livingShield && (ability.livingShield.info = function() { return `Augmente la Défense Spéciale de 50% lorsqu'un effet de statut est actif` });

    // --- Tier 1 : Capacités de starter (Overgrow, Blaze, etc.) ---
    // "Increases the power of X-type moves by 30% below 50% HP"
    // → "Augmente la puissance des capacités de type X de 30% en dessous de 50% PV"
    ability.overgrow  && (ability.overgrow.info  = function() { return `Augmente la puissance des capacités de type Plante de 30% en dessous de 50% PV` });
    ability.blaze     && (ability.blaze.info     = function() { return `Augmente la puissance des capacités de type Feu de 30% en dessous de 50% PV` });
    ability.swarm     && (ability.swarm.info     = function() { return `Augmente la puissance des capacités de type Insecte de 30% en dessous de 50% PV` });
    ability.torrent   && (ability.torrent.info   = function() { return `Augmente la puissance des capacités de type Eau de 30% en dessous de 50% PV` });
    ability.bastion   && (ability.bastion.info   = function() { return `Augmente la puissance des capacités de type Acier de 30% en dessous de 50% PV` });
    ability.average   && (ability.average.info   = function() { return `Augmente la puissance des capacités de type Normal de 30% en dessous de 50% PV` });
    ability.resolve   && (ability.resolve.info   = function() { return `Augmente la puissance des capacités de type Combat de 30% en dessous de 50% PV` });
    ability.mistify   && (ability.mistify.info   = function() { return `Augmente la puissance des capacités de type Psy de 30% en dessous de 50% PV` });
    ability.hexerei   && (ability.hexerei.info   = function() { return `Augmente la puissance des capacités de type Spectre de 30% en dessous de 50% PV` });
    ability.glimmer   && (ability.glimmer.info   = function() { return `Augmente la puissance des capacités de type Fée de 30% en dessous de 50% PV` });
    ability.skyward   && (ability.skyward.info   = function() { return `Augmente la puissance des capacités de type Vol de 30% en dessous de 50% PV` });
    ability.draconic  && (ability.draconic.info  = function() { return `Augmente la puissance des capacités de type Dragon de 30% en dessous de 50% PV` });
    ability.noxious   && (ability.noxious.info   = function() { return `Augmente la puissance des capacités de type Poison de 30% en dessous de 50% PV` });
    ability.solid     && (ability.solid.info     = function() { return `Augmente la puissance des capacités de type Roche de 30% en dessous de 50% PV` });
    ability.rime      && (ability.rime.info      = function() { return `Augmente la puissance des capacités de type Glace de 30% en dessous de 50% PV` });
    ability.voltage   && (ability.voltage.info   = function() { return `Augmente la puissance des capacités de type Électrik de 30% en dessous de 50% PV` });

    // --- Tier 1 : Réduction des stats ---
    ability.hyperCutter && (ability.hyperCutter.info = function() { return `Empêche toute réduction de la stat d'Attaque` });
    ability.bigPecks    && (ability.bigPecks.info    = function() { return `Empêche toute réduction de la stat de Défense` });
    ability.wonderSkin  && (ability.wonderSkin.info  = function() { return `50% de chance que les Effets de Statut reçus ratent` });

    // --- Tier 1 : Météo (Hydratation / Voile de Sable / Manteau de Neige) ---
    ability.hydratation && (ability.hydratation.info = function() { return `Empêche les effets de statut négatifs par temps ${tagRainy}` });
    ability.sandVeil    && (ability.sandVeil.info    = function() { return `Empêche les effets de statut négatifs par temps ${tagSandstorm}` });
    ability.snowCloak   && (ability.snowCloak.info   = function() { return `Empêche les effets de statut négatifs par temps ${tagHail}` });

    // --- Tier 2 : Boosts météo ---
    // "Increases X by 50% on [weather]"
    ability.solarPower  && (ability.solarPower.info  = function() { return `Augmente l'Attaque Spéciale de 50% par temps ${tagSunny}` });
    ability.iceBody     && (ability.iceBody.info     = function() { return `Augmente la Défense de 50% par temps ${tagHail}` });
    ability.rainDish    && (ability.rainDish.info    = function() { return `Augmente l'Attaque Spéciale de 50% par temps ${tagRainy}` });
    ability.sandForce   && (ability.sandForce.info   = function() { return `Augmente l'Attaque de 50% par temps ${tagSandstorm}` });
    ability.chlorophyll && (ability.chlorophyll.info = function() { return `Augmente la Vitesse de 50% par temps ${tagSunny}` });

    // --- Tier 2 : Infliction de statut au contact ---
    // "X% chance to inflict [tag] when attacked"
    ability.static      && (ability.static.info      = function() { return `15% de chance d'infliger ${tagParalysis} lorsqu'attaqué` });
    ability.flameBody   && (ability.flameBody.info   = function() { return `15% de chance d'infliger ${tagBurn} lorsqu'attaqué` });
    ability.poisonPoint && (ability.poisonPoint.info = function() { return `15% de chance d'infliger ${tagPoisoned} lorsqu'attaqué` });
    ability.strangeCharm && (ability.strangeCharm.info = function() { return `15% de chance d'infliger ${tagConfused} lorsqu'attaqué` });
    ability.effectSpore && (ability.effectSpore.info = function() { return `5% de chance d'infliger ${tagSleep} lorsqu'attaqué` });
    ability.glacialBody && (ability.glacialBody.info = function() { return `5% de chance d'infliger ${tagFreeze} lorsqu'attaqué` });

    // --- Tier 2 : Divers ---
    ability.synchronize  && (ability.synchronize.info  = function() { return `Inflige les effets de statut actifs à l'attaquant au moment de l'application` });
    ability.naturalCure  && (ability.naturalCure.info  = function() { return `Les effets de statut sont soignés lors du changement de Pokémon` });
    ability.technician   && (ability.technician.info   = function() { return `Multiplie par 1,5 la puissance de base des capacités ayant 60 de puissance ou moins` });
    ability.scrappy      && (ability.scrappy.info      = function() { return `Les Pokémon de type Spectre peuvent être touchés par des capacités de type Normal et Combat` });
    ability.unaware      && (ability.unaware.info      = function() { return `Lors d'une attaque, ignore les changements de stats de la cible` });
    ability.magicGuard   && (ability.magicGuard.info   = function() { return `Ne peut subir de dégâts que via des capacités offensives directes` });
    ability.rivalry      && (ability.rivalry.info      = function() { return `Multiplie les dégâts par 1,5 lorsque le Pokémon adverse partage un type` });
    ability.pickPocket   && (ability.pickPocket.info   = function() { return `Augmente le poids des drops d'objets rares de 1% (cumulable). Fonctionne pour tout le monde` });
    ability.brittleArmor && (ability.brittleArmor.info = function() { return `Augmente l'Attaque Spéciale de 50% lorsqu'un effet de statut est actif` });

    // --- Tier 2 : Absorptions de type ---
    // "Nullifies received X-type moves"
    ability.voltAbsorb   && (ability.voltAbsorb.info   = function() { return `Annule les capacités de type Électrik reçues` });
    ability.waterAbsorb  && (ability.waterAbsorb.info  = function() { return `Annule les capacités de type Eau reçues` });
    ability.flareAbsorb  && (ability.flareAbsorb.info  = function() { return `Annule les capacités de type Feu reçues` });
    ability.curseAbsorb  && (ability.curseAbsorb.info  = function() { return `Annule les capacités de type Spectre reçues` });
    ability.poisonAbsorb && (ability.poisonAbsorb.info = function() { return `Annule les capacités de type Poison reçues` });
    ability.frostAbsorb  && (ability.frostAbsorb.info  = function() { return `Annule les capacités de type Glace reçues` });
    ability.psychicAbsorb && (ability.psychicAbsorb.info = function() { return `Annule les capacités de type Psy reçues` });
    ability.lightAbsorb  && (ability.lightAbsorb.info  = function() { return `Annule les capacités de type Fée reçues` });
    ability.growthAbsorb && (ability.growthAbsorb.info = function() { return `Annule les capacités de type Plante reçues` });

    // --- Tier 2 : Capacités de groupe (Fang, Claw, Punch) ---
    ability.strongJaw && (ability.strongJaw.info = function() { return `Les capacités liées aux "Crocs" ont leur puissance de base multipliée par 2 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByStrongJaw)})</span>` });
    ability.toughClaws && (ability.toughClaws.info = function() { return `Les capacités liées aux "Griffes" ont leur puissance de base multipliée par 2 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByToughClaws)})</span>` });
    ability.ironFist   && (ability.ironFist.info   = function() { return `Les capacités liées aux "Poings" ont leur puissance de base multipliée par 1,5 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByIronFist)})</span>` });

    // --- Tier 3 : Pelts (résistances météo complètes) ---
    // "Prevents negative stat changes and status effects while on [weather]"
    ability.grassyPelt && (ability.grassyPelt.info = function() { return `Empêche les modifications négatives de stats et les effets de statut par temps ${tagGrassyTerrain}` });
    ability.sandyPelt  && (ability.sandyPelt.info  = function() { return `Empêche les modifications négatives de stats et les effets de statut par temps ${tagSandstorm}` });
    ability.icyPelt    && (ability.icyPelt.info    = function() { return `Empêche les modifications négatives de stats et les effets de statut par temps ${tagHail}` });
    ability.moistPelt  && (ability.moistPelt.info  = function() { return `Empêche les modifications négatives de stats et les effets de statut par temps ${tagRainy}` });
    ability.fieryPelt  && (ability.fieryPelt.info  = function() { return `Empêche les modifications négatives de stats et les effets de statut par temps ${tagSunny}` });
    ability.pixiePelt  && (ability.pixiePelt.info  = function() { return `Empêche les modifications négatives de stats et les effets de statut par temps ${tagMistyTerrain}` });
    ability.blackPelt  && (ability.blackPelt.info  = function() { return `Empêche les modifications négatives de stats et les effets de statut par temps ${tagFoggy}` });
    ability.spikyPelt  && (ability.spikyPelt.info  = function() { return `Empêche les modifications négatives de stats et les effets de statut par temps ${tagElectricTerrain}` });

    // --- Tier 3 : Boosts de vitesse météo ---
    ability.intangible     && (ability.intangible.info     = function() { return `Augmente la Vitesse de 50% par temps ${tagFoggy}` });
    ability.hyperconductor && (ability.hyperconductor.info = function() { return `Augmente la Vitesse de 50% par temps ${tagElectricTerrain}` });
    ability.faeRush        && (ability.faeRush.info        = function() { return `Augmente la Vitesse de 50% par temps ${tagMistyTerrain}` });
    ability.moltShed       && (ability.moltShed.info       = function() { return `Augmente la Vitesse de 50% par temps ${tagGrassyTerrain}` });
    ability.climaTact      && (ability.climaTact.info      = function() { return `La météo changée par l'utilisateur est prolongée de 15 tours` });
    ability.slushRush      && (ability.slushRush.info      = function() { return `Augmente la Vitesse de 50% par temps ${tagHail}` });
    ability.swiftSwim      && (ability.swiftSwim.info      = function() { return `Augmente la Vitesse de 50% par temps ${tagRainy}` });
    ability.sandRush       && (ability.sandRush.info       = function() { return `Augmente la Vitesse de 50% par temps ${tagSandstorm}` });

    // --- Tier 3 : Entrée en combat / Défaite ---
    ability.intimidate   && (ability.intimidate.info   = function() { return `Réduit l'Attaque ennemie de 50% quand le Pokémon adverse entre au combat` });
    ability.dauntingLook && (ability.dauntingLook.info = function() { return `Réduit l'Attaque Spéciale ennemie de 50% quand le Pokémon adverse entre au combat` });
    ability.moxie        && (ability.moxie.info        = function() { return `Augmente l'Attaque de 50% en mettant KO un Pokémon` });
    ability.strategist   && (ability.strategist.info   = function() { return `Augmente l'Attaque Spéciale de 50% en mettant KO un Pokémon` });

    // --- Tier 3 : Divers ---
    ability.unburden      && (ability.unburden.info      = function() { return `Augmente la Vitesse de 50% si aucun objet n'est tenu` });
    ability.sheerForce    && (ability.sheerForce.info    = function() { return `Les effets secondaires positifs des capacités offensives sont supprimés, et leurs dégâts sont multipliés par 1,25` });
    ability.levitate      && (ability.levitate.info      = function() { return `Confère une immunité contre les capacités de type Sol` });
    ability.thickFat      && (ability.thickFat.info      = function() { return `Réduit de moitié les dégâts reçus des capacités de type Feu et Glace` });
    ability.adaptability  && (ability.adaptability.info  = function() { return `Augmente le bonus STAB de +0,2` });
    ability.ambidextrous  && (ability.ambidextrous.info  = function() { return `Augmente la Puissance Croisée de +0,3` });

    // --- Tier 3 : Touche / réduction dégâts ---
    ability.noGuard    && (ability.noGuard.info    = function() { return `Les capacités touchent toujours quelle que soit leur type` });
    ability.multiscale && (ability.multiscale.info = function() { return `Les dégâts reçus sont réduits de moitié au-dessus de 50% PV` });
    ability.filter     && (ability.filter.info     = function() { return `Le multiplicateur des dégâts super efficaces reçus est divisé par deux` });
    ability.shieldsDown && (ability.shieldsDown.info = function() { return `Les dégâts super efficaces reçus deviennent neutres` });
    ability.wonderGuard && (ability.wonderGuard.info = function() { return `Les dégâts reçus des capacités non super efficaces sont réduits de 80%` });

    // --- Tier 3 : Boosts d'Attaque conditionnels ---
    ability.guts       && (ability.guts.info       = function() { return `Augmente l'Attaque de 50% en cas d'effet de statut, et annule la réduction de stat de cet effet` });
    ability.angerPoint && (ability.angerPoint.info = function() { return `Augmente l'Attaque de 100% lorsque touché par une capacité super efficace` });
    ability.justified  && (ability.justified.info  = function() { return `Augmente l'Attaque Spéciale de 100% lorsque touché par une capacité super efficace` });
    ability.hugePower  && (ability.hugePower.info  = function() { return `Les dégâts physiques infligés sont multipliés par 2` });

    // --- Tier 3 : Vitesse d'exécution ---
    ability.reckless   && (ability.reckless.info   = function() { return `Les capacités qui s'exécutent plus lentement ont leur puissance de base multipliée par 1,5` });
    ability.libero     && (ability.libero.info     = function() { return `Les capacités qui s'exécutent plus rapidement ont leur puissance de base multipliée par 2` });
    ability.tintedLens && (ability.tintedLens.info = function() { return `Les capacités peu efficaces infligent désormais des dégâts normaux` });
    ability.prankster  && (ability.prankster.info  = function() { return `Les capacités de type Spectre et Ténèbres s'exécutent 1,5 fois plus vite` });
    ability.galeWings  && (ability.galeWings.info  = function() { return `Les capacités de type Vol et Insecte s'exécutent 1,5 fois plus vite` });
    ability.neuroforce && (ability.neuroforce.info = function() { return `Les capacités de type Psy et Fée s'exécutent 1,5 fois plus vite` });

    // --- Tier 3 : Capacités de groupe ---
    ability.skillLink    && (ability.skillLink.info    = function() { return `Les capacités à frappes multiples touchent toujours le nombre maximum de fois` });
    ability.sharpness    && (ability.sharpness.info    = function() { return `Les capacités liées aux "Tranchants" ont leur puissance de base multipliée par 1,5 <span style="opacity:0.7">(${joinWithAnd(movesAffectedBySharpness)})</span>` });
    ability.megaLauncher && (ability.megaLauncher.info = function() { return `Les capacités liées aux "Pouls" ont leur puissance de base multipliée par 1,5 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByMegaLauncher)})</span>` });
    ability.metalhead    && (ability.metalhead.info    = function() { return `Les capacités liées aux "Têtes" ont leur puissance de base multipliée par 1,5 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByMetalhead)})</span>` });
    ability.dancer       && (ability.dancer.info       = function() { return `Les capacités liées aux "Danses" s'exécutent deux fois plus vite <span style="opacity:0.7">(${joinWithAnd(movesAffectedByDancer)})</span>` });
    ability.cacophony    && (ability.cacophony.info    = function() { return `Les capacités liées aux "Sons" s'exécutent deux fois plus vite <span style="opacity:0.7">(${joinWithAnd(movesAffectedByCacophony)})</span>` });
    ability.windRider    && (ability.windRider.info    = function() { return `Les capacités liées aux "Vents" s'exécutent deux fois plus vite <span style="opacity:0.7">(${joinWithAnd(movesAffectedByWindRider)})</span>` });
    ability.iaido        && (ability.iaido.info        = function() { return `Les capacités liées aux "Tranchants" s'exécutent deux fois plus vite <span style="opacity:0.7">(${joinWithAnd(movesAffectedBySharpness)})</span>` });

    // --- Tier 3 : Changeurs de météo à l'entrée ---
    ability.drizzle      && (ability.drizzle.info      = function() { return `Invoque la météo ${tagRainy} à l'entrée ou au changement en combat` });
    ability.drought      && (ability.drought.info      = function() { return `Invoque la météo ${tagSunny} à l'entrée ou au changement en combat` });
    ability.sandStream   && (ability.sandStream.info   = function() { return `Invoque la météo ${tagSandstorm} à l'entrée ou au changement en combat` });
    ability.snowWarning  && (ability.snowWarning.info  = function() { return `Invoque la météo ${tagHail} à l'entrée ou au changement en combat` });
    ability.somberField  && (ability.somberField.info  = function() { return `Invoque la météo ${tagFoggy} à l'entrée ou au changement en combat` });
    ability.electricSurge && (ability.electricSurge.info = function() { return `Invoque le terrain ${tagElectricTerrain} à l'entrée ou au changement en combat` });
    ability.grassySurge  && (ability.grassySurge.info  = function() { return `Invoque le terrain ${tagGrassyTerrain} à l'entrée ou au changement en combat` });
    ability.mistySurge   && (ability.mistySurge.info   = function() { return `Invoque le terrain ${tagMistyTerrain} à l'entrée ou au changement en combat` });

    // --- Tier 3 : Flash (annulation + boost Vitesse) ---
    ability.flashElectro && (ability.flashElectro.info = function() { return `Annule les capacités de type Électrik reçues et augmente la Vitesse de 50% après en avoir été touché` });
    ability.flashAqua    && (ability.flashAqua.info    = function() { return `Annule les capacités de type Eau reçues et augmente la Vitesse de 50% après en avoir été touché` });
    ability.flashPyro    && (ability.flashPyro.info    = function() { return `Annule les capacités de type Feu reçues et augmente la Vitesse de 50% après en avoir été touché` });
    ability.flashUmbra   && (ability.flashUmbra.info   = function() { return `Annule les capacités de type Spectre reçues et augmente la Vitesse de 50% après en avoir été touché` });
    ability.flashVenum   && (ability.flashVenum.info   = function() { return `Annule les capacités de type Poison reçues et augmente la Vitesse de 50% après en avoir été touché` });
    ability.flashCryo    && (ability.flashCryo.info    = function() { return `Annule les capacités de type Glace reçues et augmente la Vitesse de 50% après en avoir été touché` });
    ability.flashPsycha  && (ability.flashPsycha.info  = function() { return `Annule les capacités de type Psy reçues et augmente la Vitesse de 50% après en avoir été touché` });
    ability.flashFae     && (ability.flashFae.info     = function() { return `Annule les capacités de type Fée reçues et augmente la Vitesse de 50% après en avoir été touché` });
    ability.flashHerba   && (ability.flashHerba.info   = function() { return `Annule les capacités de type Plante reçues et augmente la Vitesse de 50% après en avoir été touché` });

    // --- Talents cachés (Hidden Abilities) ---
    ability.stoned         && (ability.stoned.info         = function() { return `Les hausses de stats positives durent x3 plus longtemps` });
    ability.powerOfAlchemy && (ability.powerOfAlchemy.info = function() { return `L'utilisateur obtient temporairement le talent (non caché) du dernier Pokémon de l'équipe mis KO. Ce talent s'ajoute aux talents existants ; un second talent temporaire remplace le premier` });
    ability.stamina        && (ability.stamina.info        = function() { return `Réduit les dégâts de fatigue de l'utilisateur par 2` });
    ability.gooey          && (ability.gooey.info          = function() { return `Réduit la Vitesse ennemie de 50% lorsque touché` });
    ability.flowerVeil     && (ability.flowerVeil.info     = function() { return `Empêche tous les Pokémon de l'équipe d'être affectés par ${tagParalysis}` });
    ability.aromaVeil      && (ability.aromaVeil.info      = function() { return `Empêche tous les Pokémon de l'équipe d'être affectés par ${tagBurn}` });
    ability.sweetVeil      && (ability.sweetVeil.info      = function() { return `Empêche tous les Pokémon de l'équipe d'être affectés par ${tagConfused}` });
    ability.pastelVeil     && (ability.pastelVeil.info     = function() { return `Empêche tous les Pokémon de l'équipe d'être affectés par ${tagPoisoned}` });
    ability.colorSpore     && (ability.colorSpore.info     = function() { return `Les effets de statut appliqués à la cible durent x3 plus longtemps` });
    ability.merciless      && (ability.merciless.info      = function() { return `Multiplie les dégâts infligés par 1,5 si la cible a un effet de statut` });
    ability.costar         && (ability.costar.info         = function() { return `Lorsqu'un Pokémon de l'équipe reçoit une hausse de stat, l'utilisateur la reçoit également` });
    ability.purifyingSalt  && (ability.purifyingSalt.info  = function() { return `Réduit les dégâts des capacités de type Spectre de 25% (cumulable). Fonctionne toujours pour tout le monde` });
    ability.treasureOfRuin && (ability.treasureOfRuin.info = function() { return `Augmente la Puissance Croisée de +0,5` });
    ability.thousandArms   && (ability.thousandArms.info   = function() { return `Tous les coups deviennent super efficaces quelle que soit la typisation` });
    ability.goodAsGold     && (ability.goodAsGold.info     = function() { return `Augmente les chances de rencontrer un Pokémon sauvage shiny de 15%. Fonctionne toujours pour tout le monde` });
    ability.speedBoost     && (ability.speedBoost.info     = function() { return `Augmente la Vitesse de 50% en mettant KO un Pokémon` });
    ability.scorch         && (ability.scorch.info         = function() { return `Les dégâts continus de ${tagBurn} ennemis sont doublés tant que ce Pokémon est actif` });
    ability.corrosion      && (ability.corrosion.info      = function() { return `Les dégâts continus de ${tagPoisoned} ennemis sont doublés tant que ce Pokémon est actif` });
    ability.imposter       && (ability.imposter.info       = function() { return `Copie les hausses de stats positives de l'ennemi` });
    ability.toxicBoost     && (ability.toxicBoost.info     = function() { return `Augmente les dégâts infligés par 1,2 en cas de ${tagPoisoned}, et annule les dégâts continus causés` });
    ability.flareBoost     && (ability.flareBoost.info     = function() { return `Augmente les dégâts infligés par 1,2 en cas de ${tagBurn}, et annule les dégâts continus causés` });
    ability.fullMetalBody  && (ability.fullMetalBody.info  = function() { return `Empêche toutes les réductions de stats` });
    ability.supremeOverlord && (ability.supremeOverlord.info = function() { return `Augmente les dégâts infligés de x1,15 par membre de l'équipe mis KO` });
    ability.gorillaTactics && (ability.gorillaTactics.info = function() { return `Augmente l'Attaque de x1,5, mais empêche de changer de Pokémon` });
    ability.beastBoost     && (ability.beastBoost.info     = function() { return `Augmente la stat la plus haute de l'utilisateur de 50% en mettant KO un Pokémon` });
    ability.quarkDrive     && (ability.quarkDrive.info     = function() { return `Augmente la stat la plus haute de l'utilisateur de 50% sur ${tagElectricTerrain}` });
    ability.protosynthesis && (ability.protosynthesis.info = function() { return `Augmente la stat la plus haute de l'utilisateur de 50% par temps ${tagSunny}` });
    ability.sereneGrace    && (ability.sereneGrace.info    = function() { return `Les effets secondaires des capacités se déclenchent deux fois` });
    ability.contrary       && (ability.contrary.info       = function() { return `Inverse les changements de stats. Les modifications positives deviennent négatives et vice versa` });
    ability.protean        && (ability.protean.info        = function() { return `Change le type de l'utilisateur pour correspondre à la capacité utilisée` });
    ability.simple         && (ability.simple.info         = function() { return `Les changements de stats de l'utilisateur sont augmentés d'un cran` });
    ability.parentalBond   && (ability.parentalBond.info   = function() { return `Les capacités sont exécutées une seconde fois à mi-puissance` });
    ability.moody          && (ability.moody.info          = function() { return `À chaque tour, augmente deux stats de 100% pendant un tour` });
    ability.darkAura       && (ability.darkAura.info       = function() { return `Multiplie par 1,1 la puissance des capacités de type Ténèbres de tous les membres de l'équipe` });
    ability.soulAsterism   && (ability.soulAsterism.info   = function() { return `Multiplie par 1,1 les dégâts des capacités de type Spectre de tous les membres de l'équipe` });

    // --- Capacités de conversion de type (-ate) ---
    ability.normalize  && (ability.normalize.info  = function() { return `Toutes les capacités deviennent de type Normal, et leur puissance est multipliée par 1,3` });
    ability.ferrilate  && (ability.ferrilate.info  = function() { return `Les capacités de type Normal deviennent de type Acier, et leur puissance est multipliée par 1,3` });
    ability.glaciate   && (ability.glaciate.info   = function() { return `Les capacités de type Normal deviennent de type Glace, et leur puissance est multipliée par 1,3` });
    ability.terralate  && (ability.terralate.info  = function() { return `Les capacités de type Normal deviennent de type Sol, et leur puissance est multipliée par 1,3` });
    ability.toxilate   && (ability.toxilate.info   = function() { return `Les capacités de type Normal deviennent de type Poison, et leur puissance est multipliée par 1,3` });
    ability.hydrolate  && (ability.hydrolate.info  = function() { return `Les capacités de type Normal deviennent de type Eau, et leur puissance est multipliée par 1,3` });
    ability.pyrolate   && (ability.pyrolate.info   = function() { return `Les capacités de type Normal deviennent de type Feu, et leur puissance est multipliée par 1,3` });
    ability.chrysilate && (ability.chrysilate.info = function() { return `Les capacités de type Normal deviennent de type Insecte, et leur puissance est multipliée par 1,3` });
    ability.galvanize  && (ability.galvanize.info  = function() { return `Les capacités de type Normal deviennent de type Électrik, et leur puissance est multipliée par 1,3` });
    ability.gloomilate && (ability.gloomilate.info = function() { return `Les capacités de type Normal deviennent de type Ténèbres, et leur puissance est multipliée par 1,3` });
    ability.espilate   && (ability.espilate.info   = function() { return `Les capacités de type Normal deviennent de type Psy, et leur puissance est multipliée par 1,3` });
    ability.aerilate   && (ability.aerilate.info   = function() { return `Les capacités de type Normal deviennent de type Vol, et leur puissance est multipliée par 1,3` });
    ability.pixilate   && (ability.pixilate.info   = function() { return `Les capacités de type Normal deviennent de type Fée, et leur puissance est multipliée par 1,3` });
    ability.verdify    && (ability.verdify.info    = function() { return `Les capacités de type Normal deviennent de type Plante, et leur puissance est multipliée par 1,3` });
    ability.dragonMaw  && (ability.dragonMaw.info  = function() { return `Les capacités de type Normal deviennent de type Dragon, et leur puissance est multipliée par 1,3` });

    // ----------------------------------------------------------
    // OBJETS (item) — itemDictionary.js
    // ----------------------------------------------------------
    // Objets portés : "When held: Increase the damage of X-Type moves by x{val}"
    // → "Tenu : Augmente les dégâts des capacités de type X par x{val}"
    // Note : this.power() doit être conservé — utiliser function() obligatoire.

    // Objets à types
    if (item.blackBelt) {
        item.blackBelt.subtitle = `(Combat)`;
        item.blackBelt.info = function() { return `Tenu : Augmente les dégâts des capacités de type Combat par x${this.power().toFixed(2)}` };
    }
    if (item.blackGlasses) {
        item.blackGlasses.subtitle = `(Ténèbres)`;
        item.blackGlasses.info = function() { return `Tenu : Augmente les dégâts des capacités de type Ténèbres par x${this.power().toFixed(2)}` };
    }
    if (item.charcoal) {
        item.charcoal.subtitle = `(Feu)`;
        item.charcoal.info = function() { return `Tenu : Augmente les dégâts des capacités de type Feu par x${this.power().toFixed(2)}` };
    }
    if (item.dragonFang) {
        item.dragonFang.subtitle = `(Dragon)`;
        item.dragonFang.info = function() { return `Tenu : Augmente les dégâts des capacités de type Dragon par x${this.power().toFixed(2)}` };
    }
    if (item.fairyFeather) {
        item.fairyFeather.subtitle = `(Fée)`;
        item.fairyFeather.info = function() { return `Tenu : Augmente les dégâts des capacités de type Fée par x${this.power().toFixed(2)}` };
    }
    if (item.hardStone) {
        item.hardStone.subtitle = `(Roche)`;
        item.hardStone.info = function() { return `Tenu : Augmente les dégâts des capacités de type Roche par x${this.power().toFixed(2)}` };
    }
    if (item.magnet) {
        item.magnet.subtitle = `(Électrik)`;
        item.magnet.info = function() { return `Tenu : Augmente les dégâts des capacités de type Électrik par x${this.power().toFixed(2)}` };
    }
    if (item.metalCoat) {
        item.metalCoat.subtitle = `(Acier)`;
        item.metalCoat.info = function() { return `Tenu : Augmente les dégâts des capacités de type Acier par x${this.power().toFixed(2)}` };
    }
    if (item.miracleSeed) {
        item.miracleSeed.subtitle = `(Plante)`;
        item.miracleSeed.info = function() { return `Tenu : Augmente les dégâts des capacités de type Plante par x${this.power().toFixed(2)}` };
    }
    if (item.mysticWater) {
        item.mysticWater.subtitle = `(Eau)`;
        item.mysticWater.info = function() { return `Tenu : Augmente les dégâts des capacités de type Eau par x${this.power().toFixed(2)}` };
    }
    if (item.neverMeltIce) {
        item.neverMeltIce.subtitle = `(Glace)`;
        item.neverMeltIce.info = function() { return `Tenu : Augmente les dégâts des capacités de type Glace par x${this.power().toFixed(2)}` };
    }
    if (item.poisonBarb) {
        item.poisonBarb.subtitle = `(Poison)`;
        item.poisonBarb.info = function() { return `Tenu : Augmente les dégâts des capacités de type Poison par x${this.power().toFixed(2)}` };
    }
    if (item.sharpBeak) {
        item.sharpBeak.subtitle = `(Vol)`;
        item.sharpBeak.info = function() { return `Tenu : Augmente les dégâts des capacités de type Vol par x${this.power().toFixed(2)}` };
    }
    if (item.silkScarf) {
        item.silkScarf.subtitle = `(Normal)`;
        item.silkScarf.info = function() { return `Tenu : Augmente les dégâts des capacités de type Normal par x${this.power().toFixed(2)}` };
    }
    if (item.silverPowder) {
        item.silverPowder.subtitle = `(Insecte)`;
        item.silverPowder.info = function() { return `Tenu : Augmente les dégâts des capacités de type Insecte par x${this.power().toFixed(2)}` };
    }
    if (item.softSand) {
        item.softSand.subtitle = `(Sol)`;
        item.softSand.info = function() { return `Tenu : Augmente les dégâts des capacités de type Sol par x${this.power().toFixed(2)}` };
    }
    if (item.spellTag) {
        item.spellTag.subtitle = `(Spectre)`;
        item.spellTag.info = function() { return `Tenu : Augmente les dégâts des capacités de type Spectre par x${this.power().toFixed(2)}` };
    }
    if (item.twistedSpoon) {
        item.twistedSpoon.subtitle = `(Psy)`;
        item.twistedSpoon.info = function() { return `Tenu : Augmente les dégâts des capacités de type Psy par x${this.power().toFixed(2)}` };
    }

    // Objets tenus : divers
    if (item.eviolite) {
        item.eviolite.info = function() { return `Tenu : Si un Pokémon n'a pas terminé son évolution, réduit les dégâts reçus par x${this.power().toFixed(2)}. N'affecte pas les Pokémon au stade final possédant une Méga-Évolution` };
    }
    if (item.lightClay) {
        item.lightClay.info = function() { return `Tenu : Augmente la durée des améliorations positives utilisées de 1 tour et augmente les dégâts infligés par x${this.power().toFixed(2)}` };
    }
    if (item.mentalHerb) {
        item.mentalHerb.info = function() { return `Tenu : Réduit la durée des altérations négatives reçues de 1 tour et réduit les dégâts subis par x${this.power().toFixed(2)}` };
    }
    if (item.flameOrb) {
        item.flameOrb.info = function() { return `Tenu : Augmente les dégâts de l'utilisateur par x${this.power().toFixed(2)}, mais inflige ${tagBurn}` };
    }
    if (item.toxicOrb) {
        item.toxicOrb.info = function() { return `Tenu : Augmente les dégâts de l'utilisateur par x${this.power().toFixed(2)}, mais inflige ${tagPoisoned}` };
    }
    if (item.choiceBand) {
        item.choiceBand.info = function() { return `Tenu : Augmente l'Attaque de l'utilisateur par x${this.power().toFixed(2)}, mais l'empêche de changer` };
    }
    if (item.choiceSpecs) {
        item.choiceSpecs.info = function() { return `Tenu : Augmente l'Attaque Spéciale de l'utilisateur par x${this.power().toFixed(2)}, mais l'empêche de changer` };
    }
    if (item.lifeOrb) {
        item.lifeOrb.info = function() { return `Tenu : Augmente les dégâts de l'utilisateur par x${this.power().toFixed(2)}, mais perd 1/10 de ses PV max par tour` };
    }
    if (item.assaultVest) {
        item.assaultVest.info = function() { return `Tenu : Augmente la défense globale par x${this.power().toFixed(2)}, mais l'utilisateur ne peut pas utiliser les capacités à 0 de puissance` };
    }
    if (item.clearAmulet) {
        item.clearAmulet.info = function() { return `Tenu : Réduit la durée des altérations négatives reçues de ${Math.floor(this.power())} tours` };
    }
    if (item.ejectPack) {
        item.ejectPack.info = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)}, mais une fois toutes les capacités exécutées, passe au membre précédent de l'équipe` };
    }
    if (item.ejectButton) {
        item.ejectButton.info = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)}, mais une fois toutes les capacités exécutées, passe au membre suivant de l'équipe` };
    }
    if (item.quickClaw) {
        item.quickClaw.info = function() { return `Tenu : Les capacités qui attaquent plus rapidement s'exécutent x${this.power().toFixed(2)} fois plus vite` };
    }
    if (item.loadedDice) {
        item.loadedDice.info = function() { return `Tenu : Les capacités à frappes multiples touchent toujours le nombre maximum de fois et infligent x${this.power().toFixed(2)} fois plus de dégâts` };
    }
    if (item.metronome) {
        item.metronome.info = function() { return `Tenu : Les capacités qui deviennent plus puissantes à chaque utilisation infligent x${this.power().toFixed(2)} fois plus de dégâts` };
    }
    if (item.powerHerb) {
        item.powerHerb.info = function() { return `Tenu : Les capacités à 0 de puissance s'exécutent x${this.power().toFixed(2)} fois plus vite` };
    }
    if (item.luckyPunch) {
        item.luckyPunch.info = function() { return `Tenu : Les capacités affectées par Poing Fer infligent x${this.power().toFixed(2)} fois plus de dégâts, et leurs effets secondaires se déclenchent deux fois` };
    }
    if (item.laggingTail) {
        item.laggingTail.info = function() { return `Tenu : Les capacités qui attaquent plus lentement infligent x${this.power().toFixed(2)} fois plus de dégâts` };
    }
    if (item.weaknessPolicy) {
        item.weaknessPolicy.info = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et augmente la Vitesse de 50% pendant 8 tours lorsque touché par une capacité super efficace` };
    }
    if (item.heavyDutyBoots) {
        item.heavyDutyBoots.info = function() { return `Tenu : Empêche les dégâts de l'effet Roc Furtif et réduit les dégâts subis par x${this.power().toFixed(2)}` };
    }
    if (item.leftovers) {
        item.leftovers.info = function() { return `Tenu : Réduit les dégâts de fatigue de l'utilisateur par x${this.power().toFixed(2)}` };
    }

    // Gemmes (18)
    if (item.bugGem)      { item.bugGem.info      = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Insecte de bénéficier des bonus STAB` }; }
    if (item.darkGem)     { item.darkGem.info     = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Ténèbres de bénéficier des bonus STAB` }; }
    if (item.dragonGem)   { item.dragonGem.info   = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Dragon de bénéficier des bonus STAB` }; }
    if (item.electricGem) { item.electricGem.info = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Électrik de bénéficier des bonus STAB` }; }
    if (item.fairyGem)    { item.fairyGem.info    = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Fée de bénéficier des bonus STAB` }; }
    if (item.fightingGem) { item.fightingGem.info = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Combat de bénéficier des bonus STAB` }; }
    if (item.fireGem)     { item.fireGem.info     = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Feu de bénéficier des bonus STAB` }; }
    if (item.flyingGem)   { item.flyingGem.info   = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Vol de bénéficier des bonus STAB` }; }
    if (item.ghostGem)    { item.ghostGem.info    = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Spectre de bénéficier des bonus STAB` }; }
    if (item.grassGem)    { item.grassGem.info    = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Plante de bénéficier des bonus STAB` }; }
    if (item.groundGem)   { item.groundGem.info   = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Sol de bénéficier des bonus STAB` }; }
    if (item.iceGem)      { item.iceGem.info      = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Glace de bénéficier des bonus STAB` }; }
    if (item.normalGem)   { item.normalGem.info   = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Normal de bénéficier des bonus STAB` }; }
    if (item.poisonGem)   { item.poisonGem.info   = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Poison de bénéficier des bonus STAB` }; }
    if (item.psychicGem)  { item.psychicGem.info  = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Psy de bénéficier des bonus STAB` }; }
    if (item.rockGem)     { item.rockGem.info     = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Roche de bénéficier des bonus STAB` }; }
    if (item.steelGem)    { item.steelGem.info    = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Acier de bénéficier des bonus STAB` }; }
    if (item.waterGem)    { item.waterGem.info    = function() { return `Tenu : Augmente les dégâts infligés par x${this.power().toFixed(2)} et permet aux capacités de type Eau de bénéficier des bonus STAB` }; }

    // Encens & utilitaires tenus
    if (item.luckIncense) { item.luckIncense.info = function() { return `Tenu : Augmente le poids des drops d'objets rares de ${this.power()}%. Fonctionne pour tout le monde` }; }
    if (item.pureIncense) { item.pureIncense.info = function() { return `Tenu : Augmente le poids des rencontres de Pokémon rares de ${this.power()}%. Fonctionne pour tout le monde` }; }
    if (item.luckyEgg)    { item.luckyEgg.info    = function() { return `Tenu : Augmente l'expérience gagnée par le Pokémon de ${this.power()}%` }; }
    if (item.shinyCharm)  { item.shinyCharm.info  = function() { return `Tenu : Augmente les chances de rencontrer un Pokémon sauvage shiny de ${this.power()}%. Fonctionne pour tout le monde` }; }

    // Baies de résistance (17)
    if (item.occaBerry)   { item.occaBerry.info   = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Feu de ${this.power()}%` }; }
    if (item.passhoBerry) { item.passhoBerry.info = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Eau de ${this.power()}%` }; }
    if (item.wacanBerry)  { item.wacanBerry.info  = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Électrik de ${this.power()}%` }; }
    if (item.rindoBerry)  { item.rindoBerry.info  = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Plante de ${this.power()}%` }; }
    if (item.yacheBerry)  { item.yacheBerry.info  = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Glace de ${this.power()}%` }; }
    if (item.chopleBerry) { item.chopleBerry.info = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Combat de ${this.power()}%` }; }
    if (item.kebiaBerry)  { item.kebiaBerry.info  = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Poison de ${this.power()}%` }; }
    if (item.shucaBerry)  { item.shucaBerry.info  = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Sol de ${this.power()}%` }; }
    if (item.cobaBerry)   { item.cobaBerry.info   = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Vol de ${this.power()}%` }; }
    if (item.payapaBerry) { item.payapaBerry.info = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Psy de ${this.power()}%` }; }
    if (item.tangaBerry)  { item.tangaBerry.info  = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Insecte de ${this.power()}%` }; }
    if (item.chartiBerry) { item.chartiBerry.info = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Roche de ${this.power()}%` }; }
    if (item.kasibBerry)  { item.kasibBerry.info  = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Spectre de ${this.power()}%` }; }
    if (item.habanBerry)  { item.habanBerry.info  = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Dragon de ${this.power()}%` }; }
    if (item.colburBerry) { item.colburBerry.info = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Ténèbres de ${this.power()}%` }; }
    if (item.babiriBerry) { item.babiriBerry.info = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Acier de ${this.power()}%` }; }
    if (item.roseliBerry) { item.roseliBerry.info = function() { return `Tenu : Réduit les dégâts super efficaces reçus des capacités de type Fée de ${this.power()}%` }; }

    // Prolongateurs de météo / terrain
    if (item.terrainExtender) {
        item.terrainExtender.info = function() { return `Tenu : Augmente la durée de ${tagTrickRoom}, ${tagWeirdRoom}, ${tagCrossRoom}, ${tagLightScreen} et ${tagSafeguard} de ${this.power()} tours` };
    }
    if (item.dampRock)     { item.dampRock.info     = function() { return `Tenu : Augmente la durée de la météo ${tagRainy} de ${this.power()} tours` }; }
    if (item.heatRock)     { item.heatRock.info     = function() { return `Tenu : Augmente la durée de la météo ${tagSunny} de ${this.power()} tours` }; }
    if (item.icyRock)      { item.icyRock.info      = function() { return `Tenu : Augmente la durée de la météo ${tagHail} de ${this.power()} tours` }; }
    if (item.smoothRock)   { item.smoothRock.info   = function() { return `Tenu : Augmente la durée de la météo ${tagSandstorm} de ${this.power()} tours` }; }
    if (item.electricSeed) { item.electricSeed.info = function() { return `Tenu : Augmente la durée du terrain ${tagElectricTerrain} de ${this.power()} tours` }; }
    if (item.grassySeed)   { item.grassySeed.info   = function() { return `Tenu : Augmente la durée du terrain ${tagGrassyTerrain} de ${this.power()} tours` }; }
    if (item.mistySeed)    { item.mistySeed.info    = function() { return `Tenu : Augmente la durée du terrain ${tagMistyTerrain} de ${this.power()} tours` }; }
    if (item.foggySeed)    { item.foggySeed.info    = function() { return `Tenu : Augmente la durée de la météo ${tagFoggy} de ${this.power()} tours` }; }

    // Objets clés — utilisation
    item.timeCandy         && (item.timeCandy.info         = function() { return `Utiliser : Accélère le temps de combat de 10 minutes. Doit être utilisé en combat` });
    item.timeCandyXL       && (item.timeCandyXL.info       = function() { return `Utiliser : Accélère le temps de combat de 30 minutes. Doit être utilisé en combat` });
    item.rareCandy         && (item.rareCandy.info         = function() { return `Utiliser : Augmente le niveau d'un Pokémon de 1` });
    item.abilityPatch      && (item.abilityPatch.info      = function() { return `Utiliser : Redistribue le talent d'un Pokémon` });
    item.abilityCapsule    && (item.abilityCapsule.info    = function() { return `Utiliser : Déverrouille le talent caché d'un Pokémon` });
    item.heartScale        && (item.heartScale.info        = function() { return `Utiliser : Réapprend une capacité acquise via héritage génétique (hors capacités transmises via Capsule Verrou)` });
    item.energyRoot        && (item.energyRoot.info        = function() { return `Utiliser : Accélère l'opération génétique de 30 minutes. Nécessite une opération active` });
    item.neutralMint       && (item.neutralMint.info       = function() { return `Utiliser : Retire la nature d'un Pokémon` });
    item.fashionCase       && (item.fashionCase.info       = function() { return `Utiliser : Obtenir un Décor aléatoire` });
    item.autoRefightTicket && (item.autoRefightTicket.info = function() { return `Peut être utilisé pour recombattre automatiquement. Impossible pendant la fermeture du navigateur. Consommé lorsqu'un combat est remporté` });
    item.festivalTicket    && (item.festivalTicket.info    = function() { return `Utiliser : Déclenche un événement saisonnier spécifique pour les 10 prochains jours. Il sera remplacé par les événements en cours. La boutique saisonnière de cet événement ne s'ouvrira pas` });

    // Devises
    item.bottleCap       && (item.bottleCap.info       = function() { return `Obtenu en cas d'excès d'objets (20+ pour les objets tenus) ou échangé avec d'autres devises` });
    item.goldenBottleCap && (item.goldenBottleCap.info = function() { return `Obtenu à la Frontière des Combats` });

    // Apricorns
    item.yellowApricorn && (item.yellowApricorn.info = function() { return `Obtenu dans les raids T3 et T4. Échangeable au Poke-Mart` });
    item.pinkApricorn   && (item.pinkApricorn.info   = function() { return `Obtenu dans les raids T3 et T4. Échangeable au Poke-Mart` });
    item.greenApricorn  && (item.greenApricorn.info  = function() { return `Obtenu dans les raids T3 et T4. Échangeable au Poke-Mart` });
    item.whiteApricorn  && (item.whiteApricorn.info  = function() { return `Obtenu dans les raids ★ et ★★ de la Méga-Dimension. Échangeable au Poke-Mart` });
    item.blackApricorn  && (item.blackApricorn.info  = function() { return `Obtenu dans les raids ★★★ et ★★★★ de la Méga-Dimension. Échangeable au Poke-Mart` });

    // Fragments Méga-Dimension
    item.megaShard   && (item.megaShard.info   = function() { return `Peut être utilisé pour attraper des Pokémon dans la Méga-Dimension. Expire à la fin de la rotation actuelle` });
    item.megaPiece   && (item.megaPiece.info   = function() { return `Peut être utilisé pour attraper des Pokémon dans la Méga-Dimension. Expire à la fin de la rotation actuelle` });
    item.megaChunk   && (item.megaChunk.info   = function() { return `Peut être utilisé pour attraper des Pokémon dans la Méga-Dimension. Expire à la fin de la rotation actuelle` });
    item.megaCluster && (item.megaCluster.info = function() { return `Peut être utilisé pour attraper des Pokémon dans la Méga-Dimension. Expire à la fin de la rotation actuelle` });

    // Objets événementiels (rotation)
    for (var _eid in item) {
        if (item[_eid] && item[_eid].type === 'key' && item[_eid].rotation !== undefined && !item[_eid].evo) {
            item[_eid].info = function() { return `Peut être utilisé pour attraper des Pokémon événementiels. Expire à la fin de l'événement` };
        }
    }

    // Vitamines
    item.hpUp    && (item.hpUp.subtitle    = `(PV)`)    && (item.hpUp.info    = function() { return `Utiliser : Augmente les IV de PV d'un Pokémon de 1` });
    item.protein && (item.protein.subtitle = `(Attaque)`) && (item.protein.info = function() { return `Utiliser : Augmente les IV d'Attaque d'un Pokémon de 1` });
    item.iron    && (item.iron.subtitle    = `(Défense)`) && (item.iron.info    = function() { return `Utiliser : Augmente les IV de Défense d'un Pokémon de 1` });
    item.calcium && (item.calcium.subtitle = `(Atq. Sp.)`) && (item.calcium.info = function() { return `Utiliser : Augmente les IV d'Attaque Spéciale d'un Pokémon de 1` });
    item.zinc    && (item.zinc.subtitle    = `(Déf. Sp.)`) && (item.zinc.info    = function() { return `Utiliser : Augmente les IV de Défense Spéciale d'un Pokémon de 1` });
    item.carbos  && (item.carbos.subtitle  = `(Vitesse)`) && (item.carbos.info  = function() { return `Utiliser : Augmente les IV de Vitesse d'un Pokémon de 1` });

    // Pierres d'évolution
    ['waterStone','thunderStone','sunStone','ovalStone','moonStone','leafStone','iceStone','fireStone','duskStone','dawnStone','shinyStone'].forEach(function(_id) {
        item[_id] && (item[_id].info = function() { return `Utiliser : Fait évoluer certains Pokémon (Doit être niveau ${wildAreaLevel2}+)` });
    });
    ['linkStone','oddRock'].forEach(function(_id) {
        item[_id] && (item[_id].info = function() { return `Utiliser : Fait évoluer certains Pokémon (Doit être niveau ${wildAreaLevel4}+)` });
    });

    // Méga-Pierres (toutes via boucle)
    for (var _mid in item) {
        if (item[_mid] && item[_mid].evo && typeof item[_mid].heldBonusPkmn === 'function') {
            item[_mid].info = function() { return `Utiliser : Fait évoluer un Pokémon<br>Tenu : Augmente les dégâts infligés par ${format(this.heldBonusPkmn())} par x${this.heldBonusPower().toFixed(2)}` };
        }
    }

    // Objets de génétique
    item.powerAnklet && (item.powerAnklet.subtitle = `(Vitesse)`)   && (item.powerAnklet.info = function() { return `Aide génétique : Garantit l'héritage des IV de Vitesse` });
    item.powerBand   && (item.powerBand.subtitle   = `(Déf. Sp.)`)  && (item.powerBand.info   = function() { return `Aide génétique : Garantit l'héritage des IV de Défense Spéciale` });
    item.powerBelt   && (item.powerBelt.subtitle   = `(Défense)`)   && (item.powerBelt.info   = function() { return `Aide génétique : Garantit l'héritage des IV de Défense` });
    item.powerBracer && (item.powerBracer.subtitle = `(Attaque)`)   && (item.powerBracer.info = function() { return `Aide génétique : Garantit l'héritage des IV d'Attaque` });
    item.powerLens   && (item.powerLens.subtitle   = `(Atq. Sp.)`)  && (item.powerLens.info   = function() { return `Aide génétique : Garantit l'héritage des IV d'Attaque Spéciale` });
    item.powerWeight && (item.powerWeight.subtitle = `(PV)`)        && (item.powerWeight.info = function() { return `Aide génétique : Garantit l'héritage des IV de PV` });
    item.machoBrace  && (item.machoBrace.info  = function() { return `Aide génétique : Multiplie par 10 les chances d'hériter des IV` });
    item.lockCapsule && (item.lockCapsule.info = function() { return `Aide génétique : Transfère les capacités équipées de l'échantillon vers les capacités disponibles de l'hôte. L'hôte conserve ses capacités et les nouvelles, mais l'échantillon perd les siennes. Nécessite au moins un niveau de compatibilité. Ne fonctionne pas sur les capacités signature` });
    item.destinyKnot && (item.destinyKnot.info = function() { return `Aide génétique : Échange le talent du Pokémon avec l'échantillon. Nécessite au moins un niveau de compatibilité. Ne fonctionne pas sur les talents cachés` });
    item.everstone   && (item.everstone.info   = function() { return `Aide génétique : Redistribue le talent du Pokémon hôte avec une chance accrue d'obtenir des talents peu communs ou rares` });

    // ----------------------------------------------------------
    // EFFETS DE TERRAIN (field) — areasDictionary.js
    // ----------------------------------------------------------
    // "Permanent [weather] weather"
    // → "Météo [météo] permanente"

    field.harshSun && (field.harshSun.info = function() { return `Météo ${tagSunny} permanente` });
    field.thickFog && (field.thickFog.info = function() { return `Météo ${tagFoggy} permanente` });
    field.fierceHail && (field.fierceHail.info = function() { return `Météo ${tagHail} permanente` });
    field.coarseSandstorm && (field.coarseSandstorm.info = function() { return `Météo ${tagSandstorm} permanente` });
    field.heavyRain && (field.heavyRain.info = function() { return `Météo ${tagRainy} permanente` });
    field.mistyField && (field.mistyField.info = function() { return `Terrain ${tagMistyTerrain} permanent` });
    field.grassyField && (field.grassyField.info = function() { return `Terrain ${tagGrassyTerrain} permanent` });
    field.serendipity && (field.serendipity.info = function() { return `Les effets au contact ont deux fois plus de chance de se produire` });

    // ----------------------------------------------------------
    // ZONES (areas) — areasDictionary.js
    // Note : La propriété .name est affichée directement dans
    // l'interface via innerHTML. On la surcharge ici.
    // ----------------------------------------------------------

    // Note : Les noms de zones générés automatiquement via format()
    // (ex: areas.activeVolcano → "Active Volcano") restent en
    // anglais car format() utilise les clés JavaScript.
    // Seules les zones avec une propriété .name explicite sont
    // surchargées ici.
    // La liste ci-dessous est un exemple — compléter au fur et
    // à mesure des zones identifiées dans areasDictionary.js.

    // Exemples de messages d'unlock qui apparaissent une seule fois :
    // Ces messages sont dans .encounterEffect() qui est appelé de
    // manière événementielle — non surchargeable sans modifier les
    // gros fichiers. Limitation connue de v1.

    // ----------------------------------------------------------
    // NOMS POKÉMON — table de base + boucle auto-variantes
    // ----------------------------------------------------------

    const FR_PKMN = {
        // GEN 1
        bulbasaur:'Bulbizarre',    ivysaur:'Herbizarre',    venusaur:'Florizarre',
        charmander:'Salamèche',    charmeleon:'Reptincel',  charizard:'Dracaufeu',
        squirtle:'Carapuce',       wartortle:'Carabaffe',   blastoise:'Tortank',
        caterpie:'Chenipan',       metapod:'Chrysacier',    butterfree:'Papilusion',
        weedle:'Aspicot',          kakuna:'Coconfort',      beedrill:'Dardargnan',
        pidgey:'Roucool',          pidgeotto:'Roucoups',    pidgeot:'Roucarnage',
        rattata:'Rattata',         raticate:'Rattatac',
        spearow:'Piafabec',        fearow:'Rapasdepic',
        ekans:'Abo',               arbok:'Arbok',
        pikachu:'Pikachu',         raichu:'Raichu',
        sandshrew:'Sabelette',     sandslash:'Sablaireau',
        nidoranF:'Nidoran♀',      nidorina:'Nidorina',     nidoqueen:'Nidoreine',
        nidoranM:'Nidoran♂',      nidorino:'Nidorino',     nidoking:'Nidoking',
        cleffa:'Mélo',             clefairy:'Mélofée',      clefable:'Mélodelfe',
        vulpix:'Goupix',           ninetales:'Feunard',
        igglybuff:'Toudoudou',     jigglypuff:'Rondoudou',  wigglytuff:'Grodoudou',
        zubat:'Nosférattu',        golbat:'Nosferalto',     crobat:'Nostenfer',
        oddish:'Mystherbe',        gloom:'Ortide',          vileplume:'Rafflesia',
        paras:'Paras',             parasect:'Parasect',
        venonat:'Mimitoss',        venomoth:'Aéromite',
        diglett:'Taupiqueur',      dugtrio:'Triopikeur',
        meowth:'Miaouss',          persian:'Persian',
        psyduck:'Psykokwak',       golduck:'Akwakwak',
        mankey:'Férosinge',        primeape:'Colossinge',   annihilape:'Annihilape',
        growlithe:'Caninos',       arcanine:'Arcanin',
        poliwag:'Ptitard',         poliwhirl:'Têtarte',     poliwrath:'Tartard',   politoed:'Tarpaud',
        abra:'Abra',               kadabra:'Kadabra',       alakazam:'Alakazam',
        machop:'Machoc',           machoke:'Machopeur',     machamp:'Mackogneur',
        bellsprout:'Chétiflor',    weepinbell:'Boustiflor', victreebel:'Empiflor',
        tentacool:'Tentacool',     tentacruel:'Tentacruel',
        geodude:'Racaillou',       graveler:'Gravalanch',   golem:'Grolem',
        ponyta:'Ponyta',           rapidash:'Galopa',
        slowpoke:'Ramoloss',       slowbro:'Flagadoss',     slowking:'Roigada',
        magnemite:'Magnéti',       magneton:'Magnéton',     magnezone:'Magnézone',
        farfetchd:'Canarticho',    sirfetchd:'Palarticho',
        doduo:'Doduo',             dodrio:'Dodrio',
        seel:'Otaria',             dewgong:'Lamantine',
        grimer:'Tadmorv',          muk:'Grotadmorv',
        shellder:'Kokiyas',        cloyster:'Crustabri',
        gastly:'Fantôminus',       haunter:'Spectrum',      gengar:'Ectoplasma',
        onix:'Onix',               steelix:'Steelix',
        drowzee:'Soporifik',       hypno:'Hypnomade',
        krabby:'Krabby',           kingler:'Krabboss',
        voltorb:'Voltorbe',        electrode:'Électrode',
        exeggcute:'Nœunœuf',      exeggutor:'Noadkoko',
        cubone:'Osselait',         marowak:'Ossatueur',
        tyrogue:'Debugant',        hitmonlee:'Kicklee',     hitmonchan:'Tygnon',   hitmontop:'Kapoera',
        lickitung:'Excelangue',    lickilicky:'Coudlangue',
        koffing:'Smogo',           weezing:'Smogogo',
        rhyhorn:'Rhinocorne',      rhydon:'Rhinoféros',     rhyperior:'Rhinastoc',
        happiny:'Toudémoi',        chansey:'Leveinard',     blissey:'Leuphorie',
        tangela:'Saquedeneu',      tangrowth:'Agarmouja',
        kangaskhan:'Kangourex',
        horsea:'Hypotrempe',       seadra:'Hypocéan',       kingdra:'Hyporoi',
        goldeen:'Poissirène',      seaking:'Poissoroy',
        staryu:'Stari',            starmie:'Staross',
        mimejr:'Mime Jr.',         mrmime:'M. Mime',        mrRime:'M. Glaquette',
        scyther:'Insécateur',      scizor:'Cizayox',        kleavor:'Karbécou',
        smoochum:'Lippouti',       jynx:'Lippoutou',
        elekid:'Élekid',           electabuzz:'Élektek',    electivire:'Élekable',
        magby:'Magby',             magmar:'Magmar',          magmortar:'Maganon',
        pinsir:'Scarabrute',
        tauros:'Tauros',
        magikarp:'Magicarpe',      gyarados:'Léviator',
        lapras:'Lokhlass',
        ditto:'Métamorph',
        eevee:'Évoli',     vaporeon:'Aquali',  jolteon:'Voltali',  flareon:'Pyroli',
        espeon:'Mentali',  umbreon:'Noctali',  leafeon:'Phyllali', glaceon:'Givrali', sylveon:'Nymphali',
        porygon:'Porygon', porygon2:'Porygon2', porygonZ:'Porygon-Z',
        omanyte:'Amonita',         omastar:'Amonistar',
        kabuto:'Kabuto',           kabutops:'Kabutops',
        aerodactyl:'Ptéra',
        munchlax:'Goinfrex',       snorlax:'Ronflex',
        articuno:'Artikodin',      zapdos:'Électhor',       moltres:'Sulfura',
        dratini:'Minidraco',       dragonair:'Draco',       dragonite:'Dracolosse',
        mewtwo:'Mewtwo',           mew:'Mew',

        // GEN 2
        chikorita:'Germignon',     bayleef:'Macronium',     meganium:'Méganium',
        cyndaquil:'Héricendre',    quilava:'Feurisson',     typhlosion:'Typhlosion',
        totodile:'Kaiminus',       croconaw:'Crocrodil',    feraligatr:'Aligatueur',
        sentret:'Fouinette',       furret:'Fouinar',
        hoothoot:'Hoothoot',       noctowl:'Noarfang',
        ledyba:'Coxy',             ledian:'Coxyclaque',
        spinarak:'Arakdo',         ariados:'Migalos',
        chinchou:'Loupio',         lanturn:'Lanturn',
        pichu:'Pichu',
        togepi:'Togepi',           togetic:'Togetic',       togekiss:'Togekiss',
        natu:'Natu',               xatu:'Xatu',
        mareep:'Wattouat',         flaaffy:'Lainergie',     ampharos:'Pharamp',
        bellossom:'Joliflor',
        azurill:'Azurill',         marill:'Marill',         azumarill:'Azumarill',
        bonsly:'Mimergos',         sudowoodo:'Simularbre',
        hoppip:'Granivol',         skiploom:'Floravol',     jumpluff:'Cotovol',
        aipom:'Capumain',          ambipom:'Capidextre',
        sunkern:'Tournegrin',      sunflora:'Héliatronc',
        yanma:'Yanma',             yanmega:'Yanmega',
        wooper:'Axoloto',          quagsire:'Maraiste',
        murkrow:'Corboss',         honchkrow:'Corbusard',
        misdreavus:'Feuforêve',    mismagius:'Magirêve',
        wobbuffet:'Okéoké',        wynaut:'Okézan',
        girafarig:'Girafarig',
        pineco:'Pomdepik',         forretress:'Foretress',
        dunsparce:'Dundouille',
        gligar:'Scorplane',        gliscor:'Scorvol',
        snubbull:'Snubbull',       granbull:'Granbull',
        qwilfish:'Qwilfish',
        shuckle:'Caratroc',
        heracross:'Scarhino',
        sneasel:'Farfuret',        weavile:'Dimoret',
        teddiursa:'Teddiursa',     ursaring:'Ursaring',     ursaluna:'Ursaluna',
        slugma:'Limagma',          magcargo:'Magcargo',
        swinub:'Marcacrin',        piloswine:'Cochignon',   mamoswine:'Mammochon',
        corsola:'Corayon',
        remoraid:'Rémoraid',       octillery:'Octillery',
        delibird:'Cadoizo',
        mantyke:'Fantajou',        mantine:'Démanta',
        skarmory:'Airmure',
        houndour:'Malosse',        houndoom:'Démolosse',
        phanpy:'Phanpy',           donphan:'Donphan',
        stantler:'Cerfrousse',
        smeargle:'Queulorior',
        miltank:'Écrémeuh',
        raikou:'Raikou',           entei:'Entei',           suicune:'Suicune',
        larvitar:'Embrylex',       pupitar:'Ymphect',       tyranitar:'Tyranitar',
        lugia:'Lugia',             hooh:'Ho-Oh',
        celebi:'Celebi',

        // GEN 3
        treecko:'Arcko',           grovyle:'Massko',        sceptile:'Jungko',
        torchic:'Poussifeu',       combusken:'Galifeu',     blaziken:'Braségali',
        mudkip:'Gobou',            marshtomp:'Flobio',      swampert:'Laggron',
        poochyena:'Medhyena',      mightyena:'Grahyena',
        zigzagoon:'Zigzaton',      linoone:'Linéon',        obstagoon:'Kickerligon',
        wurmple:'Chenipotte',      silcoon:'Armulys',       beautifly:'Charmillon',
        cascoon:'Couverdure',      dustox:'Papinox',
        lotad:'Nénupiot',          lombre:'Lombre',         ludicolo:'Ludicolo',
        seedot:'Grainipiot',       nuzleaf:'Pifeuille',     shiftry:'Tengalice',
        taillow:'Nirondelle',      swellow:'Vanseau',
        wingull:'Goélise',         pelipper:'Phogleur',
        ralts:'Tarsal',            kirlia:'Kirlia',         gardevoir:'Gardevoir',   gallade:'Gallame',
        surskit:'Surbabi',         masquerain:'Maskadra',
        shroomish:'Balignon',      breloom:'Chapignon',
        slakoth:'Parecool',        vigoroth:'Vigoroth',     slaking:'Monaflèmit',
        nincada:'Ningale',         ninjask:'Ninjask',       shedinja:'Munja',
        whismur:'Chuchmur',        loudred:'Ramboum',       exploud:'Brouhabam',
        makuhita:'Makuhita',       hariyama:'Hariyama',
        nosepass:'Tarinor',        probopass:'Tarinorme',
        skitty:'Skitty',           delcatty:'Delcatty',
        sableye:'Ténéfix',         mawile:'Mysdibule',
        aron:'Minièbe',            lairon:'Terraionn',      aggron:'Terracruel',
        meditite:'Méditikka',      medicham:'Charmina',
        electrike:'Dynavolt',      manectric:'Manectric',
        plusle:'Posipi',           minun:'Négapi',
        volbeat:'Volbeat',         illumise:'Lumivole',
        roselia:'Rosélia',         budew:'Rozbouton',       roserade:'Roserade',
        gulpin:'Gloutan',          swalot:'Avaltout',
        carvanha:'Carvanha',       sharpedo:'Sharpedo',
        wailmer:'Wailmer',         wailord:'Wailord',
        numel:'Chamallot',         camerupt:'Camérupt',
        torkoal:'Chartor',
        spoink:'Grouin',           grumpig:'Grumpig',
        spinda:'Spinda',
        trapinch:'Kraknoix',       vibrava:'Vibraninf',     flygon:'Libégon',
        cacnea:'Cacnea',           cacturne:'Cacturne',
        swablu:'Tylton',           altaria:'Altaria',
        zangoose:'Zangoose',       seviper:'Séviper',
        lunatone:'Séléroc',        solrock:'Solaroc',
        barboach:'Barloche',       whiscash:'Barbicha',
        corphish:'Écrapince',      crawdaunt:'Jorlboff',
        baltoy:'Balbuto',          claydol:'Kaorine',
        lileep:'Lilia',            cradily:'Vacilys',
        anorith:'Anorith',         armaldo:'Armaldo',
        feebas:'Bavière',          milotic:'Milobellus',
        castform:'Morphéo',        kecleon:'Caméléos',
        shuppet:'Polichombr',      banette:'Branette',
        tropius:'Tropius',         absol:'Absol',
        snorunt:'Stalgamin',       glalie:'Oniglali',       froslass:'Momartik',
        spheal:'Obalie',           sealeo:'Lodérien',       walrein:'Kaimorse',
        clamperl:'Coquiperl',      huntail:'Huntail',       gorebyss:'Rosabyss',
        relicanth:'Relicanth',     luvdisc:'Lovdisc',
        bagon:'Draby',             shelgon:'Drackhaus',     salamence:'Drattak',
        beldum:'Terhal',           metang:'Métang',          metagross:'Métagross',
        regirock:'Regirock',       regice:'Regice',          registeel:'Registeel',
        latias:'Latias',           latios:'Latios',
        kyogre:'Kyogre',           groudon:'Groudon',        rayquaza:'Rayquaza',
        jirachi:'Jirachi',         deoxys:'Deoxys',

        // GEN 4
        turtwig:'Tortipouss',      grotle:'Botousai',       torterra:'Torterra',
        chimchar:'Ouisticram',     monferno:'Chimpenfeu',   infernape:'Simiabraz',
        piplup:'Tiplouf',          prinplup:'Prinplouf',    empoleon:'Pingoléon',
        starly:'Étourvol',         staravia:'Étourwarrant', staraptor:'Étouraptor',
        bidoof:'Bidoof',           bibarel:'Castorno',
        kricketot:'Crikzik',       kricketune:'Mélokrik',
        shinx:'Lixy',              luxio:'Luxio',           luxray:'Luxray',
        combee:'Apitrini',         vespiquen:'Apireine',
        pachirisu:'Pachirisu',
        buizel:'Boulédav',         floatzel:'Mustébouée',
        cherubi:'Ceribou',         cherrim:'Ceriflor',
        shellos:'Sancoki',         gastrodon:'Tritosor',
        drifloon:'Baudrive',       drifblim:'Grodrive',
        buneary:'Laporeille',      lopunny:'Lockpin',
        glameow:'Chaglam',         purugly:'Grooville',
        stunky:'Moufouette',       skuntank:'Moufflair',
        chatot:'Pijako',           spiritomb:'Spiritomb',
        gible:'Griknot',           gabite:'Carmache',       garchomp:'Carchacrok',
        riolu:'Riolu',             lucario:'Lucario',
        hippopotas:'Hippopotas',   hippowdon:'Hippodocus',
        skorupi:'Skorupa',         drapion:'Drapion',
        snover:'Bamboiselle',      abomasnow:'Blizzaroi',
        rotom:'Motisma',
        uxie:'Créfadet',           mesprit:'Créfollet',     azelf:'Créhelf',
        dialga:'Dialga',           palkia:'Palkia',         heatran:'Heatran',
        regigigas:'Regigigas',     giratina:'Giratina',     cresselia:'Cresselia',
        phione:'Phione',           manaphy:'Manaphy',       darkrai:'Darkrai',
        shaymin:'Shaymin',         arceus:'Arceus',

        // GEN 5
        victini:'Victini',
        snivy:'Vipélierre',        servine:'Lianaja',       serperior:'Majaspic',
        tepig:'Gruikui',           pignite:'Grotichon',     emboar:'Flambochard',
        oshawott:'Moustillon',     dewott:'Mirokaïa',       samurott:'Samorôt',
        patrat:'Ratentif',         watchog:'Miradar',
        lillipup:'Lillipup',       herdier:'Ponchiot',      stoutland:'Mastouffe',
        purrloin:'Chafouine',      liepard:'Léopardus',
        pansage:'Feuillajou',      simisage:'Feuiloutan',
        pansear:'Flamajou',        simisear:'Flamoutan',
        panpour:'Aquajou',         simipour:'Aqualoutan',
        munna:'Munna',             musharna:'Mushana',
        pidove:'Poichigeon',       tranquill:'Tranzouille', unfezant:'Déflaisan',
        blitzle:'Zéblitz',         zebstrika:'Zébliken',
        roggenrola:'Grigroc',      boldore:'Ludoroq',       gigalith:'Gigalit',
        drilbur:'Minikeum',        excadrill:'Minotaupe',
        audino:'Nanméouïe',
        tympole:'Têtampoule',      palpitoad:'Batracné',    seismitoad:'Crapustule',
        throh:'Judokrak',          sawk:'Karatagmo',
        sewaddle:'Larveyette',     leavanny:'Manternel',
        cottonee:'Doudouvet',      whimsicott:'Farfaduvet',
        petilil:'Lilliput',        lilligant:'Fragilady',
        basculin:'Bargantua',
        dwebble:'Crabicoque',
        scraggy:'Baggiguane',      scrafty:'Baggaïd',
        sigilyph:'Oipanam',
        yamask:'Tutankaïna',
        tirtouga:'Amnesio',        carracosta:'Notileo',
        archen:'Zygofée',          archeops:'Aérotherma',
        trubbish:'Miamiasme',      garbodor:'Miasmax',
        zorua:'Zorua',             zoroark:'Zoroark',
        minccino:'Minccino',       cinccino:'Cinccino',
        gothita:'Gothita',         gothorita:'Gothorita',   gothitelle:'Gothitelle',
        solosis:'Nœufélin',        duosion:'Dombumé',       reuniclus:'Symbios',
        ducklett:'Canartichop',    swanna:'Lakmécygne',
        vanillite:'Vanillish',     vanillish:'Vanilluxe',   vanilluxe:'Vanillobe',
        emolga:'Emolga',
        joltik:'Statitik',         galvantula:'Mygavolt',
        ferroseed:'Grindur',       ferrothorn:'Noacier',
        klink:'Klikling',          klang:'Klikbing',        klinklang:'Klikdroid',
        litwick:'Funécire',        lampent:'Lugulabre',     chandelure:'Mélancolux',
        axew:'Coupenotte',         fraxure:'Incisache',     haxorus:'Tranchodon',
        cubchoo:'Polarhume',
        golett:'Gélédos',          golurk:'Géolithe',
        pawniard:'Scalpion',       bisharp:'Scalproie',
        rufflet:'Furaiglon',       braviary:'Gueriaigle',
        deino:'Muplodocus',
        larvesta:'Scinderella',    volcarona:'Pyrax',
        cobalion:'Cobalion',       terrakion:'Terrakium',   virizion:'Viridium',
        tornadus:'Boréas',         thundurus:'Fulguris',    landorus:'Démétéros',
        reshiram:'Reshiram',       zekrom:'Zekrom',         kyurem:'Kyurem',
        keldeo:'Keldeo',           meloetta:'Méloetta',     genesect:'Genesect',

        // GEN 6
        chespin:'Marisson',        quilladin:'Boguéreau',   chesnaught:'Blindépique',
        fennekin:'Feunnec',        braixen:'Roussil',       delphox:'Goupelin',
        froakie:'Grenousse',       frogadier:'Croâporal',   greninja:'Amphinobi',
        bunnelby:'Sapereau',       diggersby:'Excavarête',
        fletchling:'Passerouge',   fletchinder:'Braisillon', talonflame:'Flambusard',
        vivillon:'Vivaldaï',
        litleo:'Hélionceau',       pyroar:'Pyroar',
        flabebe:'Flabeuh',         floette:'Floette',       florges:'Florges',
        skiddo:'Chevroum',         gogoat:'Gogoat',
        pancham:'Pandespiègle',    pangoro:'Pandarbare',
        furfrou:'Couafarel',
        espurr:'Psystigri',        meowstic:'Mistigrix',
        honedge:'Monorpale',       doublade:'Duoblade',     aegislash:'Exagide',
        spritzee:'Fluvetin',       aromatisse:'Aromatisse',
        swirlix:'Sucroquin',       slurpuff:'Slurmerie',
        inkay:'Sepiatop',          malamar:'Sepiatroce',
        helioptile:'Galvaran',     heliolisk:'Élekiter',
        tyrunt:'Tydrone',          tyrantrum:'Tararaptor',
        hawlucha:'Brutalibré',
        dedenne:'Dedenne',
        carbink:'Tarengrin',
        goomy:'Mucuscule',         sliggoo:'Colimucus',     goodra:'Muplodocus',
        klefki:'Trousselin',
        trevenant:'Sylveroy',
        pumpkaboo:'Potirucula',    gourgeist:'Banshitrouille',
        noibat:'Noibat',           noivern:'Noivern',
        xerneas:'Xerneas',         yveltal:'Yveltal',
        diancie:'Diancie',         hoopa:'Hoopa',           volcanion:'Volcanion',

        // GEN 7
        rowlet:'Brindibou',        dartrix:'Efflèche',      decidueye:'Archéduc',
        litten:'Flamiaou',         torracat:'Bournicat',    incineroar:'Félinferno',
        popplio:'Otaquin',         brionne:'Oratoria',      primarina:'Primarina',
        pikipek:'Picassaut',       trumbeak:'Toucatoucan',  toucannon:'Toucargo',
        yungoos:'Manglouton',      gumshoos:'Manglouton',
        grubbin:'Larvibule',       charjabug:'Blindalys',   vikavolt:'Insécateur',
        crabrawler:'Cablifou',
        rockruff:'Rocabot',        lycanroc:'Lougaroc',
        mareanie:'Maréaniet',      toxapex:'Toxapex',
        mudbray:'Tiboudet',        mudsdale:'Bourricron',
        dewpider:'Arachnade',      araquanid:'Tarenbulle',
        fomantis:'Fomantis',       lurantis:'Lurantis',
        morelull:'Lampignon',      shiinotic:'Lampignon',
        stufful:'Truffade',        bewear:'Chelours',
        bounsweet:'Doucereine',    steenee:'Doucepaume',    tsareena:'Sucreine',
        comfey:'Guériangel',
        wimpod:'Peurombino',       golisopod:'Golisopode',
        sandygast:'Sablaireau',
        typeNull:'Type: 0',        silvally:'Silvallié',
        minior:'Météno',
        komala:'Komala',           turtonator:'Turtonator',
        togedemaru:'Togedemaru',   mimikyu:'Mimiqui',
        dhelmise:'Dhelmise',
        jangmoo:'Jangmo-o',        hakamoo:'Hakamo-o',      kommoo:'Kommo-o',
        tapuKoko:'Tokopié',        tapuLele:'Taputerri',    tapuBulu:'Toutapik', tapuFini:'Tapuabo',
        cosmog:'Cosmog',           cosmoem:'Cosmoem',
        solgaleo:'Solgaleo',       lunala:'Lunala',
        nihilego:'Zéroïd',         buzzwole:'Mouscoto',     pheromosa:'Cancrelove',
        xurkitree:'Câblifou',      celesteela:'Célestacier', kartana:'Kartana',
        guzzlord:'Engloutyran',
        necrozma:'Necrozma',
        magearna:'Magearna',       marshadow:'Marshadow',
        zeraora:'Zeraora',
        meltan:'Meltan',           melmetal:'Melmetal',

        // GEN 8
        grookey:'Ouistempo',       thwackey:'Badabing',     rillaboom:'Gorythmic',
        scorbunny:'Lapyrus',       raboot:'Lapiven',        cinderace:'Pyrobut',
        sobble:'Larméléon',        inteleon:'Lézargus',
        skwovet:'Rongourmand',     greedent:'Repaisseur',
        rookidee:'Miniroi',        corvisquire:'Corneish',  corviknight:'Corvaillus',
        wooloo:'Moumouton',        dubwool:'Moumouflon',
        chewtle:'Mordudule',       drednaw:'Diamat',
        yamper:'Voltoutou',        boltund:'Fulgudog',
        applin:'Pomdrapi',         flapple:'Drakivolt',     appletun:'Appletun',
        silicobra:'Sablaise',      sandaconda:'Enrochant',
        sinistea:'Théffroi',       polteageist:'Thé-K',
        impidimp:'Grimalin',       grimmsnarl:'Angoliath',
        milcery:'Lacrimimi',       alcremie:'Miasméa',
        snom:'Arctigo',
        morpeko:'Morpeko',
        duraludon:'Duralugon',
        dreepy:'Spectreum',        drakloak:'Spectoroc',    dragapult:'Lanssoffle',
        zacian:'Zacian',           zamazenta:'Zamazenta',   eternatus:'Eternatus',
        kubfu:'Kubfu',             zarude:'Zarude',
        regieleki:'Regieleki',     regidrago:'Regidrago',
        glastrier:'Blizzeval',     spectrier:'Spectreval',  calyrex:'Coronveil',
        urshifuSingle:'Shifours Poing Final', urshifuRapid:'Shifours Coups Enchaînés',

        // GEN 9
        sprigatito:'Poussacha',    fuecoco:'Chochodile',    quaxly:'Coiffeton',
        lechonk:'Gourmelet',
        tarountula:'Tarountula',   spidops:'Spidops',
        nymble:'Nymble',           lokix:'Lokix',
        pawmi:'Pawmi',             pawmo:'Pawmo',           pawmot:'Pawmot',
        tandemaus:'Tandemaus',     maushold:'Maushold',
        fidough:'Briochien',       dachsbun:'Dachsbun',
        smoliv:'Olivini',          dolliv:'Olivachon',      arboliva:'Arboliva',
        squawkabilly:'Squawkabilly',
        nacli:'Nacli',             naclstack:'Naclstack',   garganacl:'Garganacl',
        charcadet:'Charcadet',     armarouge:'Armarouge',   ceruledge:'Ceruledge',
        tadbulb:'Tadbulb',         bellibolt:'Bellibolt',
        wattrel:'Wattrel',         kilowattrel:'Kilowattrel',
        maschiff:'Maschiff',       mabosstiff:'Mabosstiff',
        shroodle:'Shroodle',       grafaiai:'Grafaiai',
        bramblin:'Bramblin',       brambleghast:'Brambleghast',
        toedscool:'Toedscool',     toedscruel:'Toedscruel',
        klawf:'Klawf',
        flittle:'Flittle',         espathra:'Espathra',
        tinkatink:'Tinkatink',     tinkatuff:'Tinkatuff',   tinkaton:'Tinkaton',
        wiglett:'Wiglett',         wugtrio:'Wugtrio',
        bombirdier:'Bombirdier',
        finizen:'Finizen',         palafin:'Palafin',
        cyclizar:'Cyclizar',
        glimmet:'Glimmet',         glimmora:'Glimmora',
        greavard:'Greavard',       houndstone:'Houndstone',
        flamigo:'Flamigo',
        cetoddle:'Cetoddle',       cetitan:'Cetitan',
        frigibax:'Frigibax',       arctibax:'Arctibax',     baxcalibur:'Baxcalibur',
        gimmighoul:'Gimmighoul',   gholdengo:'Gholdengo',
        terapagos:'Terapagos',     pecharunt:'Pecharunt',
    };

    // Appliquer les noms de base
    for (const [key, fr] of Object.entries(FR_PKMN)) {
        if (pkmn[key]) pkmn[key].rename = fr;
    }

    // Générer automatiquement les noms des variantes non couvertes
    function _lcFirst(s) { return s.charAt(0).toLowerCase() + s.slice(1); }

    for (const key of Object.keys(pkmn)) {
        if (!pkmn[key] || pkmn[key].rename) continue;
        let fr = null;
        let m;

        // Zarbi A-Z, Zarbi !, Zarbi ?
        if ((m = key.match(/^unown([A-Z]|Exclamation|Question)$/))) {
            const s = m[1] === 'Exclamation' ? '!' : m[1] === 'Question' ? '?' : m[1];
            fr = `Zarbi ${s}`;
        // megaCharizardX / megaCharizardY → M. Dracaufeu X/Y
        } else if ((m = key.match(/^mega([A-Z][^XY]*)([XY]?)$/))) {
            const base = FR_PKMN[_lcFirst(m[1])];
            if (base) fr = `M. ${base}${m[2] ? ' ' + m[2] : ''}`;
        // alolanRattata → Rattata d'Alola
        } else if ((m = key.match(/^alolan([A-Z].+)$/))) {
            const base = FR_PKMN[_lcFirst(m[1])];
            if (base) fr = `${base} d'Alola`;
        // hisuianArcanine → Arcanin de Hisui
        } else if ((m = key.match(/^hisuian([A-Z].+)$/))) {
            const base = FR_PKMN[_lcFirst(m[1])];
            if (base) fr = `${base} de Hisui`;
        // galarianZigzagoon → Zigzaton de Galar
        } else if ((m = key.match(/^galarian([A-Z].+)$/))) {
            const base = FR_PKMN[_lcFirst(m[1])];
            if (base) fr = `${base} de Galar`;
        // paldeanWooper → Axoloto de Paldea
        } else if ((m = key.match(/^paldean([A-Z].+)$/))) {
            const base = FR_PKMN[_lcFirst(m[1])];
            if (base) fr = `${base} de Paldea`;
        // charizardGmax → Dracaufeu-GMax
        } else if ((m = key.match(/^(.+?)Gmax$/))) {
            const base = FR_PKMN[m[1]];
            if (base) fr = `${base}-GMax`;
        // venusaurClone → Florizarre (Clone)
        } else if ((m = key.match(/^(.+?)Clone$/))) {
            const base = FR_PKMN[m[1]];
            if (base) fr = `${base} (Clone)`;
        }

        if (fr) pkmn[key].rename = fr;
    }

    console.info('[i18n] Patch dictionnaires appliqué.');
})();
