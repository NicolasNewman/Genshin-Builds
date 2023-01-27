// import type { IBuild } from "src/types/build";
// import type { IGOOD, StatKey, SubstatKey } from "src/types/good";
import { characterInfo, weaponInfo, type StatBuff } from 'shared';
import type { IArtifact, IBuild } from '../types/build';
import type { IGOOD, StatKey, SubstatKey } from '../types/good';
import { mainStatValues } from '../types/stats';
import { ascensionLevelRange } from './db';
import { roundSubStat } from './helper';

export const StatBuffToJoinedStat: { [key in StatBuff]: JoinedStat } = {
	ATK: 'atk_',
	'Anemo DMG Bonus': 'anemo_dmg_',
	'CRIT DMG': 'critDMG_',
	'CRIT Rate': 'critRate_',
	'Cryo DMG Bonus': 'cryo_dmg_',
	DEF: 'def_',
	'Dendro DMG Bonus': 'dendro_dmg_',
	'Electro DMG Bonus': 'electro_dmg_',
	'Elemental Mastery': 'eleMas',
	'Energy Recharge': 'enerRech_',
	'Geo DMG Bonus': 'geo_dmg_',
	HP: 'hp_',
	'Healing Bonus': 'heal_',
	'Hydro DMG Bonus': 'hydro_dmg_',
	'Physical DMG Bonus': 'physical_dmg_',
	'Pyro DMG Bonus': 'pyro_dmg_'
};
export const JoinedStatToName: { [key in JoinedStat]: string } = {
	atk_: 'ATK%',
	atk: 'ATK',
	anemo_dmg_: 'Anemo DMG Bonus',
	critDMG_: 'CRIT DMG',
	critRate_: 'CRIT Rate',
	cryo_dmg_: 'Cryo DMG Bonus',
	def_: 'DEF%',
	def: 'DEF',
	dendro_dmg_: 'Dendro DMG Bonus',
	electro_dmg_: 'Electro DMG Bonus',
	eleMas: 'Elemental Mastery',
	enerRech_: 'Energy Recharge',
	geo_dmg_: 'Geo DMG Bonus',
	hp_: 'HP%',
	hp: 'HP',
	heal_: 'Healing Bonus',
	hydro_dmg_: 'Hydro DMG Bonus',
	physical_dmg_: 'Physical DMG Bonus',
	pyro_dmg_: 'Pyro DMG Bonus'
};

type StatMap = { [key in JoinedStat]: number };
export const computeBuildStats = (build: IBuild): StatMap => {
	const map: StatMap = {
		hp: 0,
		hp_: 0,
		atk: 0,
		atk_: 0,
		def: 0,
		def_: 0,
		critDMG_: 0,
		critRate_: 0,
		eleMas: 0,
		heal_: 0,
		enerRech_: 0,
		physical_dmg_: 0,
		anemo_dmg_: 0,
		cryo_dmg_: 0,
		dendro_dmg_: 0,
		electro_dmg_: 0,
		geo_dmg_: 0,
		hydro_dmg_: 0,
		pyro_dmg_: 0
	};
	const { artifacts, character, weapon } = build;
	const { circlet, flower, goblet, plume, sands } = artifacts;

	// Character parse
	const { statBuff, stats } = characterInfo[character.character];
	const characterAscensionStat = StatBuffToJoinedStat[statBuff];
	const range = ascensionLevelRange(character.ascension);
	const characterBuffs = stats[character.ascension][character.level === range[1] ? 1 : 0];

	map[characterAscensionStat] += characterBuffs.SP;
	map['atk'] += characterBuffs.ATK;
	map['def'] += characterBuffs.DEF;
	map['hp'] += characterBuffs.HP;
	if (weapon) {
		const { statBuff, stats } = weaponInfo[weapon.weapon];
		if (statBuff !== null && stats !== null) {
			const weaponAscensionStat = StatBuffToJoinedStat[statBuff];
			const range = ascensionLevelRange(weapon.ascension);
			const weaponBuffs = stats[weapon.ascension][weapon.level === range[1] ? 1 : 0];

			map[weaponAscensionStat] += weaponBuffs.SP;
			map['atk'] += weaponBuffs.ATK;
		}
	}

	const computeArtifactSubStats = (artifact: IArtifact<'flower' | 'circlet'> | undefined) => {
		if (artifact) {
			if (artifact.substatOne) {
				map[artifact.substatOne] += artifact.substatOneRoll;
			}
			if (artifact.substatTwo) {
				map[artifact.substatTwo] += artifact.substatTwoRoll;
			}
			if (artifact.substatThree) {
				map[artifact.substatThree] += artifact.substatThreeRoll;
			}
			if (artifact.substatFour) {
				map[artifact.substatFour] += artifact.substatFourRoll;
			}
		}
	};
	computeArtifactSubStats(flower);
	computeArtifactSubStats(plume);
	computeArtifactSubStats(goblet);
	computeArtifactSubStats(sands);
	computeArtifactSubStats(circlet);

	const computeArtifactMainStats = (artifact: IArtifact<'circlet'> | undefined) => {
		if (artifact?.set) {
			const { mainstat, level, rarity } = artifact;
			console.log(rarity);
			console.log(level);
			map[mainstat] += mainStatValues[rarity - 1][mainstat][level];
		}
	};
	computeArtifactMainStats(goblet);
	computeArtifactMainStats(sands);
	computeArtifactMainStats(circlet);

	// character edge cases
	if (character.character === 'SangonomiyaKokomi') {
		map.critRate_ -= 100.0;
		if (map.critRate_ < 0) {
			map.critDMG_ = 0;
		}
	}
	return map;
};

export type JoinedStat = StatKey | SubstatKey;
export const StatToName: { [key in JoinedStat]: string } = {
	hp: 'HP',
	hp_: 'HP%',
	atk: 'ATK',
	atk_: 'ATK%',
	def: 'DEF',
	def_: 'DEF%',
	critDMG_: 'CD',
	critRate_: 'CR',
	eleMas: 'EM',
	heal_: 'HB',
	enerRech_: 'ER',
	physical_dmg_: 'Physical',
	anemo_dmg_: 'Anemo',
	cryo_dmg_: 'Cryo',
	dendro_dmg_: 'Dendro',
	electro_dmg_: 'Electro',
	geo_dmg_: 'Geo',
	hydro_dmg_: 'Hydro',
	pyro_dmg_: 'Pyro'
};

export const convertGOODtoBuild = (data: IGOOD): IBuild[] => {
	const { artifacts, characters, weapons } = data;
	const builds: IBuild[] = [];
	characters?.forEach((character) => {
		const build: IBuild = {
			character: {
				character: character.key,
				ascension: character.ascension,
				constelation: character.constellation,
				level: character.level,
				talent: character.talent
			},
			artifacts: {}
		};
		const characterWeapon = weapons?.find((weapon) => weapon.location === character.key);
		if (characterWeapon) {
			build.weapon = {
				weapon: characterWeapon.key,
				ascension: characterWeapon.ascension,
				level: characterWeapon.level,
				refinement: characterWeapon.refinement
			};
		}
		const characterArtifact = artifacts?.filter((artifact) => artifact.location === character.key);
		if (characterArtifact) {
			characterArtifact.forEach((artifact) => {
				if (artifact.slotKey === 'flower' || artifact.slotKey === 'plume') {
					build.artifacts[artifact.slotKey] = {
						type: artifact.slotKey,
						level: artifact.level,
						set: artifact.setKey,
						rarity: artifact.rarity - 1,
						substatOne: artifact.substats[0]?.key ?? undefined,
						substatOneRoll: roundSubStat(
							artifact.substats[0]?.key ?? '_',
							artifact.substats[0]?.value ?? 0
						),
						substatTwo: artifact.substats[1]?.key ?? undefined,
						substatTwoRoll: roundSubStat(
							artifact.substats[1]?.key ?? '_',
							artifact.substats[1]?.value ?? 0
						),
						substatThree: artifact.substats[2]?.key ?? undefined,
						substatThreeRoll: roundSubStat(
							artifact.substats[2]?.key ?? '_',
							artifact.substats[2]?.value ?? 0
						),
						substatFour: artifact.substats[3]?.key ?? undefined,
						substatFourRoll: roundSubStat(
							artifact.substats[3]?.key ?? '_',
							artifact.substats[3]?.value ?? 0
						)
					};
				} else {
					build.artifacts[artifact.slotKey] = {
						type: artifact.slotKey,
						level: artifact.level,
						set: artifact.setKey,
						rarity: artifact.rarity - 1,
						mainstat: artifact.mainStatKey,
						substatOne: artifact.substats[0]?.key ?? undefined,
						substatOneRoll: roundSubStat(
							artifact.substats[0]?.key ?? '_',
							artifact.substats[0]?.value ?? 0
						),
						substatTwo: artifact.substats[1]?.key ?? undefined,
						substatTwoRoll: roundSubStat(
							artifact.substats[1]?.key ?? '_',
							artifact.substats[1]?.value ?? 0
						),
						substatThree: artifact.substats[2]?.key ?? undefined,
						substatThreeRoll: roundSubStat(
							artifact.substats[2]?.key ?? '_',
							artifact.substats[2]?.value ?? 0
						),
						substatFour: artifact.substats[3]?.key ?? undefined,
						substatFourRoll: roundSubStat(
							artifact.substats[3]?.key ?? '_',
							artifact.substats[3]?.value ?? 0
						)
					};
				}
			});
		}

		builds.push(build);
	});
	return builds;
};
