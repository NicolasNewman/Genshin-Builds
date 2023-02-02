// import type { IBuild } from "src/types/build";
// import type { IGOOD, StatKey, SubstatKey } from "src/types/good";
import { characterInfo, getEntries, weaponInfo, type ArtifactKey, type StatBuff } from 'shared';
import type { IArtifact, IBuild } from '../types/build';
import type { IGOOD, StatKey, SubstatKey } from '../types/good';
import { artifactSetBonus, mainStatValues } from '../types/stats';
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
		critDMG_: 50,
		critRate_: 5,
		eleMas: 0,
		heal_: 0,
		enerRech_: 100,
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
	const baseDEF = characterBuffs.DEF;
	const baseHP = characterBuffs.HP;
	let baseATK = characterBuffs.ATK;

	if (weapon?.weapon) {
		const { statBuff, stats } = weaponInfo[weapon.weapon];
		if (statBuff !== null && stats !== null) {
			const weaponAscensionStat = StatBuffToJoinedStat[statBuff];
			const range = ascensionLevelRange(weapon.ascension);
			const weaponBuffs = stats[weapon.ascension][weapon.level === range[1] ? 1 : 0];

			map[weaponAscensionStat] += weaponBuffs.SP;
			baseATK += weaponBuffs.ATK;
		}
	}

	const setCount: Partial<{ [key in ArtifactKey]: number }> = {};
	const computeArtifactSubStats = (artifact: IArtifact<'flower' | 'circlet'> | undefined) => {
		if (artifact) {
			setCount[artifact.set] = (setCount[artifact.set] ?? 0) + 1;
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

	getEntries(setCount).forEach((bonus) => {
		if (bonus) {
			const [set, count] = bonus;
			if ((count ?? 0) >= 2) {
				const bonus = artifactSetBonus[set]?.[0];
				console.log(bonus);
				if (bonus) map[bonus[0]] += bonus[1];
			}
			if ((count ?? 0) >= 4) {
				const bonus = artifactSetBonus[set]?.[1];
				if (bonus) map[bonus[0]] += bonus[1];
			}
		}
	});

	const computeArtifactMainStats = (artifact: IArtifact<'circlet'> | undefined) => {
		if (artifact?.set) {
			const { mainstat, level, rarity } = artifact;
			map[mainstat] += mainStatValues[rarity - 1][mainstat][level];
		}
	};
	computeArtifactMainStats(goblet);
	computeArtifactMainStats(sands);
	computeArtifactMainStats(circlet);

	const flatHP = map['hp'];
	map['hp'] = baseHP * (1 + map['hp_'] / 100) + flatHP;
	if (flower) {
		map['hp'] += mainStatValues[flower.rarity - 1]['hp'][flower.level];
		map['hp'] = Math.ceil(map['hp']);
		map['hp_'] = 0;
	}
	const flatATK = map['atk'];
	map['atk'] = baseATK * (1 + map['atk_'] / 100) + flatATK;
	if (plume) {
		map['atk'] += mainStatValues[plume.rarity - 1]['atk'][plume.level];
		map['atk'] = Math.ceil(map['atk']);
		map['atk_'] = 0;
	}
	const flatDEF = map['def'];
	map['def'] = baseDEF * (1 + map['def_'] / 100) + flatDEF;
	map['def'] = Math.ceil(map['def']);
	map['def_'] = 0;

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
