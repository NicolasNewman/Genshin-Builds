/**
 * File: db
 *
 * Contains lists of in-game names and their mapping to IDs
 */
import { toIdedObj, type AscensionKey } from 'shared';
import type { StatKey, SubstatKey } from '../types/good';

export const ascensionLevelRange = (ascension: AscensionKey) => {
	switch (ascension) {
		case 0:
			return [0, 20];
		case 1:
			return [20, 40];
		case 2:
			return [40, 50];
		case 3:
			return [50, 60];
		case 4:
			return [60, 70];
		case 5:
			return [70, 80];
		case 6:
			return [80, 90];
	}
};

export const artifactMS: StatKey[] = [
	'hp', //HP
	'hp_', //HP%
	'atk', //ATK
	'atk_', //ATK%
	// 'def', //DEF
	'def_', //DEF%
	'eleMas', //Elemental Mastery
	'enerRech_', //Energy Recharge
	'heal_', //Healing Bonus
	'critRate_', //Crit Rate
	'critDMG_', //Crit DMG
	'physical_dmg_', //Physical DMG Bonus
	'anemo_dmg_', //Anemo DMG Bonus
	'geo_dmg_', //Geo DMG Bonus
	'electro_dmg_', //Electro DMG Bonus
	'hydro_dmg_', //Hydro DMG Bonus
	'pyro_dmg_', //Pyro DMG Bonus
	'cryo_dmg_', //Cryo DMG Bonus
	'dendro_dmg_' //Dendro DMG Bonus
];

export const artifactSS: (SubstatKey | '_')[] = [
	'_',
	'hp', //HP
	'hp_', //HP%
	'atk', //ATK
	'atk_', //ATK%
	'def', //DEF
	'def_', //DEF%
	'eleMas', //Elemental Mastery
	'enerRech_', //Energy Recharge
	'critRate_', //Crit Rate
	'critDMG_' //Crit DMG
];

export const artifactMSIDs = toIdedObj(artifactMS);
export const artifactSSIDs = toIdedObj(artifactSS);
