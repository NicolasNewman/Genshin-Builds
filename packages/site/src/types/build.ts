import type { CharacterKey } from 'shared';
import type { ArtifactSetKey, IGOOD, SlotKey, StatKey, SubstatKey } from './good';

export interface IBuild {
	character: ICharacterBuild;
	weapon?: IWeaponBuild;
	artifacts: IArtifactBuild;
}

interface ICharacterBuild {
	character: CharacterKey;
	ascension: number;
	level: number;
	talent: {
		auto: number;
		skill: number;
		burst: number;
	};
	constelation: number;
}

interface IWeaponBuild {
	weapon: string;
	ascension: number;
	level: number;
	refinement: number;
}

type IArtifactBuild = Partial<{
	[key in SlotKey]: IArtifact<key>;
}>;

export type IArtifact<T extends SlotKey> = T extends 'flower' | 'plume'
	? {
			type: 'flower' | 'plume';
			set: ArtifactSetKey;
			level: number;
			rarity: number;
			substatOne: SubstatKey | undefined;
			substatOneRoll: string;
			substatTwo: SubstatKey | undefined;
			substatTwoRoll: string;
			substatThree: SubstatKey | undefined;
			substatThreeRoll: string;
			substatFour: SubstatKey | undefined;
			substatFourRoll: string;
	  }
	: {
			type: 'sands' | 'goblet' | 'circlet';
			set: ArtifactSetKey;
			level: number;
			rarity: number;
			mainstat: StatKey;
			substatOne: SubstatKey | undefined;
			substatOneRoll: string;
			substatTwo: SubstatKey | undefined;
			substatTwoRoll: string;
			substatThree: SubstatKey | undefined;
			substatThreeRoll: string;
			substatFour: SubstatKey | undefined;
			substatFourRoll: string;
	  };
