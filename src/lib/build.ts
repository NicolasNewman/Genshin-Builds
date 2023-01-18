import type { IBuild } from "src/types/build";
import type { IGOOD, StatKey, SubstatKey } from "src/types/good";
import { roundSubStat } from "./helper";

type JoinedStat = StatKey | SubstatKey
export const StatToName: {[key in JoinedStat]: string} = {
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
}

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
				talent: character.talent,
			},
			artifacts: {},
		};
		const characterWeapon = weapons?.find((weapon) => weapon.location === character.key);
		if (characterWeapon) {
			build.weapon = {
				weapon: characterWeapon.key,
				ascension: characterWeapon.ascension,
				level: characterWeapon.level,
				refinement: characterWeapon.refinement,
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
							artifact.substats[0]?.value ?? 0,
						),
						substatTwo: artifact.substats[1]?.key ?? undefined,
						substatTwoRoll: roundSubStat(
							artifact.substats[1]?.key ?? '_',
							artifact.substats[1]?.value ?? 0,
						),
						substatThree: artifact.substats[2]?.key ?? undefined,
						substatThreeRoll: roundSubStat(
							artifact.substats[2]?.key ?? '_',
							artifact.substats[2]?.value ?? 0,
						),
						substatFour: artifact.substats[3]?.key ?? undefined,
						substatFourRoll: roundSubStat(
							artifact.substats[3]?.key ?? '_',
							artifact.substats[3]?.value ?? 0,
						),
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
							artifact.substats[0]?.value ?? 0,
						),
						substatTwo: artifact.substats[1]?.key ?? undefined,
						substatTwoRoll: roundSubStat(
							artifact.substats[1]?.key ?? '_',
							artifact.substats[1]?.value ?? 0,
						),
						substatThree: artifact.substats[2]?.key ?? undefined,
						substatThreeRoll: roundSubStat(
							artifact.substats[2]?.key ?? '_',
							artifact.substats[2]?.value ?? 0,
						),
						substatFour: artifact.substats[3]?.key ?? undefined,
						substatFourRoll: roundSubStat(
							artifact.substats[3]?.key ?? '_',
							artifact.substats[3]?.value ?? 0,
						),
					};
				}
			});
		}

		builds.push(build);
	});
	return builds;
};