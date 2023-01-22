import type { CharacterKey, WeaponKey } from 'shared';

export interface IGOOD {
	format: string;
	version: number;
	source: string;
	characters?: ICharacter[];
	artifacts?: IArtifact[];
	weapons?: IWeapon[];
	materials?: {
		[key: string]: number;
	};
}

export const isIGOOD = (data: any): data is IGOOD => {
	const temp = data as IGOOD;
	if (temp.format === 'GOOD' && data.version && data.source) {
		return true;
	}
	return false;
};

/*========================================*
 *                Characters              *
 *========================================*/

export interface ICharacter {
	key: CharacterKey; //e.g. "Rosaria"
	level: number; //1-90 inclusive
	constellation: number; //0-6 inclusive
	ascension: number; //0-6 inclusive. need to disambiguate 80/90 or 80/80
	talent: {
		//does not include boost from constellations. 1-15 inclusive
		auto: number;
		skill: number;
		burst: number;
	};
}

/*========================================*
 *                Artifacts               *
 *========================================*/

export type SlotKey = 'flower' | 'plume' | 'sands' | 'goblet' | 'circlet';
export type StatKey =
	| 'hp' //HP
	| 'hp_' //HP%
	| 'atk' //ATK
	| 'atk_' //ATK%
	| 'def' //DEF
	| 'def_' //DEF%
	| 'eleMas' //Elemental Mastery
	| 'enerRech_' //Energy Recharge
	| 'heal_' //Healing Bonus
	| 'critRate_' //Crit Rate
	| 'critDMG_' //Crit DMG
	| 'physical_dmg_' //Physical DMG Bonus
	| 'anemo_dmg_' //Anemo DMG Bonus
	| 'geo_dmg_' //Geo DMG Bonus
	| 'electro_dmg_' //Electro DMG Bonus
	| 'hydro_dmg_' //Hydro DMG Bonus
	| 'pyro_dmg_' //Pyro DMG Bonus
	| 'cryo_dmg_' //Cryo DMG Bonus
	| 'dendro_dmg_'; //Dendro DMG Bonus
export type SubstatKey = Extract<
	StatKey,
	'hp' | 'hp_' | 'atk' | 'atk_' | 'def' | 'def_' | 'eleMas' | 'enerRech_' | 'critRate_' | 'critDMG_'
>;

export type ArtifactSetKey =
	| 'Adventurer' //Adventurer
	| 'ArchaicPetra' //Archaic Petra
	| 'Berserker' //Berserker
	| 'BlizzardStrayer' //Blizzard Strayer
	| 'BloodstainedChivalry' //Bloodstained Chivalry
	| 'BraveHeart' //Brave Heart
	| 'CrimsonWitchOfFlames' //Crimson Witch of Flames
	| 'DeepwoodMemories' //Deepwood Memories
	| 'DefendersWill' //Defender's Will
	| 'DesertPavilionChronicle' //Desert Pavilion Chronicle?
	| 'EchoesOfAnOffering' //Echoes of an Offering
	| 'EmblemOfSeveredFate' //Emblem of Severed Fate
	| 'FlowerOfParadiseLost' //Flower of Paradise Lost
	| 'Gambler' //Gambler
	| 'GildedDreams' //Gilded Dreams
	| 'GladiatorsFinale' //Gladiator's Finale
	| 'HeartOfDepth' //Heart of Depth
	| 'HuskOfOpulentDreams' //Husk of Opulent Dreams
	| 'Instructor' //Instructor
	| 'Lavawalker' //Lavawalker
	| 'LuckyDog' //Lucky Dog
	| 'MaidenBeloved' //Maiden Beloved
	| 'MartialArtist' //Martial Artist
	| 'NoblesseOblige' //Noblesse Oblige
	| 'OceanHuedClam' //Ocean-Hued Clam
	| 'PaleFlame' //Pale Flame
	| 'PrayersForDestiny' //Prayers for Destiny
	| 'PrayersForIllumination' //Prayers for Illumination
	| 'PrayersForWisdom' //Prayers for Wisdom
	| 'PrayersToSpringtime' //Prayers to Springtime
	| 'ResolutionOfSojourner' //Resolution of Sojourner
	| 'RetracingBolide' //Retracing Bolide
	| 'Scholar' //Scholar
	| 'ShimenawasReminiscence' //Shimenawa's Reminiscence
	| 'TenacityOfTheMillelith' //Tenacity of the Millelith
	| 'TheExile' //The Exile
	| 'ThunderingFury' //Thundering Fury
	| 'Thundersoother' //Thundersoother
	| 'TinyMiracle' //Tiny Miracle
	| 'TravelingDoctor' //Traveling Doctor
	| 'VermillionHereafter' //Vermillion Hereafter
	| 'ViridescentVenerer' //Viridescent Venerer
	| 'WanderersTroupe'; //Wanderer's Troupe
export interface ISubstat {
	key: SubstatKey;
	value: number;
}
export interface IArtifact {
	setKey: ArtifactSetKey; //e.g. "GladiatorsFinale"
	slotKey: SlotKey; //e.g. "plume"
	level: number; //0-20 inclusive
	rarity: number; //1-5 inclusive
	mainStatKey: StatKey;
	location: CharacterKey | ''; //where "" means not equipped.
	lock: boolean; //Whether the artifact is locked in game.
	substats: ISubstat[];
}

/*========================================*
 *                 Weapons                *
 *========================================*/

export interface IWeapon {
	key: WeaponKey; //"CrescentPike"
	level: number; //1-90 inclusive
	ascension: number; //0-6 inclusive. need to disambiguate 80/90 or 80/80
	refinement: number; //1-5 inclusive
	location: CharacterKey | ''; //where "" means not equipped.
	lock: boolean; //Whether the weapon is locked in game.
}
