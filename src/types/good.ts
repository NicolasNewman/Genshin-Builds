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

export type CharacterKey =
	| 'Albedo' //Albedo
	| 'Aloy' //Aloy
	| 'Amber' //Amber
	| 'AratakiItto' //Arataki Itto
	| 'Barbara' //Barbara
	| 'Beidou' //Beidou
	| 'Bennett' //Bennett
	| 'Candace' //Candace
	| 'Chongyun' //Chongyun
	| 'Collei' //Collei
	| 'Cyno' //Cyno
	| 'Diluc' //Diluc
	| 'Diona' //Diona
	| 'Dori' //Dori
	| 'Eula' //Eula
	| 'Faruzan' //Faruzan
	| 'Fischl' //Fischl
	| 'Ganyu' //Ganyu
	| 'Gorou' //Gorou
	| 'HuTao' //Hu Tao
	| 'Jean' //Jean
	| 'KaedeharaKazuha' //Kaedehara Kazuha
	| 'Kaeya' //Kaeya
	| 'KamisatoAyaka' //Kamisato Ayaka
	| 'KamisatoAyato' //Kamisato Ayato
	| 'Keqing' //Keqing
	| 'Klee' //Klee
	| 'KujouSara' //Kujou Sara
	| 'KukiShinobu' //Kuki Shinobu
	| 'Layla' //Layla
	| 'Lisa' //Lisa
	| 'Mona' //Mona
	| 'Nahida' //Nahida
	| 'Nilou' //Nilou
	| 'Ningguang' //Ningguang
	| 'Noelle' //Noelle
	| 'Qiqi' //Qiqi
	| 'RaidenShogun' //Raiden Shogun
	| 'Razor' //Razor
	| 'Rosaria' //Rosaria
	| 'SangonomiyaKokomi' //Sangonomiya Kokomi
	| 'Sayu' //Sayu
	| 'Shenhe' //Shenhe
	| 'ShikanoinHeizou' //Shikanoin Heizou
	| 'Sucrose' //Sucrose
	| 'Tartaglia' //Tartaglia
	| 'Thoma' //Thoma
	| 'Tighnari' //Tighnari
	| 'Traveler' //Lumine
	| 'Venti' //Venti
	| 'Wanderer' //Wanderer
	| 'Xiangling' //Xiangling
	| 'Xiao' //Xiao
	| 'Xingqiu' //Xingqiu
	| 'Xinyan' //Xinyan
	| 'YaeMiko' //Yae Miko
	| 'Yanfei' //Yanfei
	| 'Yelan' //Yelan
	| 'Yoimiya' //Yoimiya
	| 'YunJin' //Yun Jin
	| 'Zhongli'; //Zhongli

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

export type WeaponKey =
	| 'AThousandFloatingDreams' //A Thousand Floating Dreams
	| 'Akuoumaru' //Akuoumaru
	| 'AlleyHunter' //Alley Hunter
	| 'AmenomaKageuchi' //Amenoma Kageuchi
	| 'AmosBow' //Amos' Bow
	| 'ApprenticesNotes' //Apprentice's Notes
	| 'AquaSimulacra' //Aqua Simulacra
	| 'AquilaFavonia' //Aquila Favonia
	| 'BeginnersProtector' //Beginner's Protector
	| 'BlackTassel' //Black Tassel
	| 'BlackcliffAgate' //Blackcliff Agate
	| 'BlackcliffLongsword' //Blackcliff Longsword
	| 'BlackcliffPole' //Blackcliff Pole
	| 'BlackcliffSlasher' //Blackcliff Slasher
	| 'BlackcliffWarbow' //Blackcliff Warbow
	| 'BloodtaintedGreatsword' //Bloodtainted Greatsword
	| 'CalamityQueller' //Calamity Queller
	| 'CinnabarSpindle' //Cinnabar Spindle
	| 'CompoundBow' //Compound Bow
	| 'CoolSteel' //Cool Steel
	| 'CrescentPike' //Crescent Pike
	| 'DarkIronSword' //Dark Iron Sword
	| 'Deathmatch' //Deathmatch
	| 'DebateClub' //Debate Club
	| 'DodocoTales' //Dodoco Tales
	| 'DragonsBane' //Dragon's Bane
	| 'DragonspineSpear' //Dragonspine Spear
	| 'DullBlade' //Dull Blade
	| 'ElegyForTheEnd' //Elegy for the End
	| 'EmeraldOrb' //Emerald Orb
	| 'EndOfTheLine' //End of the Line
	| 'EngulfingLightning' //Engulfing Lightning
	| 'EverlastingMoonglow' //Everlasting Moonglow
	| 'EyeOfPerception' //Eye of Perception
	| 'FadingTwilight' //Fading Twilight
	| 'FavoniusCodex' //Favonius Codex
	| 'FavoniusGreatsword' //Favonius Greatsword
	| 'FavoniusLance' //Favonius Lance
	| 'FavoniusSword' //Favonius Sword
	| 'FavoniusWarbow' //Favonius Warbow
	| 'FerrousShadow' //Ferrous Shadow
	| 'FesteringDesire' //Festering Desire
	| 'FilletBlade' //Fillet Blade
	| 'ForestRegalia' //Forest Regalia
	| 'FreedomSworn' //Freedom-Sworn
	| 'Frostbearer' //Frostbearer
	| 'FruitOfFulfillment' //Fruit of Fulfillment
	| 'HakushinRing' //Hakushin Ring
	| 'Halberd' //Halberd
	| 'Hamayumi' //Hamayumi
	| 'HaranGeppakuFutsu' //Haran Geppaku Futsu
	| 'HarbingerOfDawn' //Harbinger of Dawn
	| 'HuntersBow' //Hunter's Bow
	| 'HuntersPath' //Hunter's Path
	| 'IronPoint' //Iron Point
	| 'IronSting' //Iron Sting
	| 'KagotsurubeIsshin' //Kagotsurube Isshin
	| 'KagurasVerity' //Kagura's Verity
	| 'KatsuragikiriNagamasa' //Katsuragikiri Nagamasa
	| 'KeyOfKhajNisut' //Key of Khaj-Nisut
	| 'KingsSquire' //King's Squire
	| 'KitainCrossSpear' //Kitain Cross Spear
	| 'LionsRoar' //Lion's Roar
	| 'LithicBlade' //Lithic Blade
	| 'LithicSpear' //Lithic Spear
	| 'LostPrayerToTheSacredWinds' //Lost Prayer to the Sacred Winds
	| 'LuxuriousSeaLord' //Luxurious Sea-Lord
	| 'MagicGuide' //Magic Guide
	| 'MakhairaAquamarine' //Makhaira Aquamarine
	| 'MappaMare' //Mappa Mare
	| 'MemoryOfDust' //Memory of Dust
	| 'Messenger' //Messenger
	| 'MissiveWindspear' //Missive Windspear
	| 'MistsplitterReforged' //Mistsplitter Reforged
	| 'MitternachtsWaltz' //Mitternachts Waltz
	| 'Moonpiercer' //Moonpiercer
	| 'MouunsMoon' //Mouun's Moon
	| 'OathswornEye' //Oathsworn Eye
	| 'OldMercsPal' //Old Merc's Pal
	| 'OtherworldlyStory' //Otherworldly Story
	| 'PocketGrimoire' //Pocket Grimoire
	| 'PolarStar' //Polar Star
	| 'Predator' //Predator
	| 'PrimordialJadeCutter' //Primordial Jade Cutter
	| 'PrimordialJadeWingedSpear' //Primordial Jade Winged-Spear
	| 'PrototypeAmber' //Prototype Amber
	| 'PrototypeArchaic' //Prototype Archaic
	| 'PrototypeCrescent' //Prototype Crescent
	| 'PrototypeRancour' //Prototype Rancour
	| 'PrototypeStarglitter' //Prototype Starglitter
	| 'Rainslasher' //Rainslasher
	| 'RavenBow' //Raven Bow
	| 'RecurveBow' //Recurve Bow
	| 'RedhornStonethresher' //Redhorn Stonethresher
	| 'RoyalBow' //Royal Bow
	| 'RoyalGreatsword' //Royal Greatsword
	| 'RoyalGrimoire' //Royal Grimoire
	| 'RoyalLongsword' //Royal Longsword
	| 'RoyalSpear' //Royal Spear
	| 'Rust' //Rust
	| 'SacrificialBow' //Sacrificial Bow
	| 'SacrificialFragments' //Sacrificial Fragments
	| 'SacrificialGreatsword' //Sacrificial Greatsword
	| 'SacrificialSword' //Sacrificial Sword
	| 'SapwoodBlade' //Sapwood Blade
	| 'SeasonedHuntersBow' //Seasoned Hunter's Bow
	| 'SerpentSpine' //Serpent Spine
	| 'SharpshootersOath' //Sharpshooter's Oath
	| 'SilverSword' //Silver Sword
	| 'SkyriderGreatsword' //Skyrider Greatsword
	| 'SkyriderSword' //Skyrider Sword
	| 'SkywardAtlas' //Skyward Atlas
	| 'SkywardBlade' //Skyward Blade
	| 'SkywardHarp' //Skyward Harp
	| 'SkywardPride' //Skyward Pride
	| 'SkywardSpine' //Skyward Spine
	| 'Slingshot' //Slingshot
	| 'SnowTombedStarsilver' //Snow-Tombed Starsilver
	| 'SolarPearl' //Solar Pearl
	| 'SongOfBrokenPines' //Song of Broken Pines
	| 'StaffOfHoma' //Staff of Homa
	| 'StaffOfTheScarletSands' //Staff of the Scarlet Sands
	| 'SummitShaper' //Summit Shaper
	| 'SwordOfDescension' //Sword of Descension
	| 'TheAlleyFlash' //The Alley Flash
	| 'TheBell' //The Bell
	| 'TheBlackSword' //The Black Sword
	| 'TheCatch' //"The Catch"
	| 'TheFlute' //The Flute
	| 'TheStringless' //The Stringless
	| 'TheUnforged' //The Unforged
	| 'TheViridescentHunt' //The Viridescent Hunt
	| 'TheWidsith' //The Widsith
	| 'ThrillingTalesOfDragonSlayers' //Thrilling Tales of Dragon Slayers
	| 'ThunderingPulse' //Thundering Pulse
	| 'TravelersHandySword' //Traveler's Handy Sword
	| 'TwinNephrite' //Twin Nephrite
	| 'VortexVanquisher' //Vortex Vanquisher
	| 'WanderingEvenstar' //Wandering Evenstar
	| 'WasterGreatsword' //Waster Greatsword
	| 'WavebreakersFin' //Wavebreaker's Fin
	| 'WhiteIronGreatsword' //White Iron Greatsword
	| 'WhiteTassel' //White Tassel
	| 'Whiteblind' //Whiteblind
	| 'WindblumeOde' //Windblume Ode
	| 'WineAndSong' //Wine and Song
	| 'WolfsGravestone' //Wolf's Gravestone
	| 'XiphosMoonlight'; //Xiphos' Moonlight

export interface IWeapon {
	key: WeaponKey; //"CrescentPike"
	level: number; //1-90 inclusive
	ascension: number; //0-6 inclusive. need to disambiguate 80/90 or 80/80
	refinement: number; //1-5 inclusive
	location: CharacterKey | ''; //where "" means not equipped.
	lock: boolean; //Whether the weapon is locked in game.
}
