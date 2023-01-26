import type { ArtifactKey, AscensionKey, CharacterKey, WeaponKey } from 'shared';
import type { IGOOD, SlotKey, StatKey, SubstatKey } from './good';

export interface IBuild {
	character: ICharacterBuild;
	weapon?: IWeaponBuild;
	artifacts: IArtifactBuild;
}

interface ICharacterBuild {
	character: CharacterKey;
	ascension: AscensionKey;
	level: number;
	talent: {
		auto: number;
		skill: number;
		burst: number;
	};
	constelation: number;
}

interface IWeaponBuild {
	weapon: WeaponKey;
	ascension: AscensionKey;
	level: number;
	refinement: number;
}

type IArtifactBuild = Partial<{
	[key in SlotKey]: IArtifact<key>;
}>;

export type IArtifact<T extends SlotKey> = T extends 'flower' | 'plume'
	? {
			type: 'flower' | 'plume';
			set: ArtifactKey;
			level: number;
			rarity: number;
			substatOne: SubstatKey | undefined;
			substatOneRoll: number;
			substatTwo: SubstatKey | undefined;
			substatTwoRoll: number;
			substatThree: SubstatKey | undefined;
			substatThreeRoll: number;
			substatFour: SubstatKey | undefined;
			substatFourRoll: number;
	  }
	: {
			type: 'sands' | 'goblet' | 'circlet';
			set: ArtifactKey;
			level: number;
			rarity: number;
			mainstat: StatKey;
			substatOne: SubstatKey | undefined;
			substatOneRoll: number;
			substatTwo: SubstatKey | undefined;
			substatTwoRoll: number;
			substatThree: SubstatKey | undefined;
			substatThreeRoll: number;
			substatFour: SubstatKey | undefined;
			substatFourRoll: number;
	  };
