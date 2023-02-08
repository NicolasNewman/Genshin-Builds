import { toIdedObj } from "./index";
export type AscensionKey = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Element =
  | "Geo"
  | "Dendro"
  | "Cryo"
  | "Pyro"
  | "Hydro"
  | "Electro"
  | "Anemo"
  | "None";
export type WeaponType = "Sword" | "Bow" | "Claymore" | "Catalyst" | "Polearm";
export type StatBuff =
  | "Geo DMG Bonus"
  | "Dendro DMG Bonus"
  | "Cryo DMG Bonus"
  | "ATK"
  | "CRIT Rate"
  | "HP"
  | "Electro DMG Bonus"
  | "Energy Recharge"
  | "CRIT DMG"
  | "Healing Bonus"
  | "Elemental Mastery"
  | "Pyro DMG Bonus"
  | "DEF"
  | "Physical DMG Bonus"
  | "Hydro DMG Bonus"
  | "Anemo DMG Bonus";
export type CharacterKey =
  | "Albedo"
  | "Alhaitham"
  | "Aloy"
  | "Amber"
  | "AratakiItto"
  | "Barbara"
  | "Beidou"
  | "Bennett"
  | "Candace"
  | "Chongyun"
  | "Collei"
  | "Cyno"
  | "Diluc"
  | "Diona"
  | "Dori"
  | "Eula"
  | "Faruzan"
  | "Fischl"
  | "Ganyu"
  | "Gorou"
  | "HuTao"
  | "Jean"
  | "KaedeharaKazuha"
  | "Kaeya"
  | "KamisatoAyaka"
  | "KamisatoAyato"
  | "Keqing"
  | "Klee"
  | "KujouSara"
  | "KukiShinobu"
  | "Layla"
  | "Lisa"
  | "Mona"
  | "Nahida"
  | "Nilou"
  | "Ningguang"
  | "Noelle"
  | "Qiqi"
  | "RaidenShogun"
  | "Razor"
  | "Rosaria"
  | "SangonomiyaKokomi"
  | "Sayu"
  | "Shenhe"
  | "ShikanoinHeizou"
  | "Sucrose"
  | "Tartaglia"
  | "Thoma"
  | "Tighnari"
  | "Traveler"
  | "Venti"
  | "Wanderer"
  | "Xiangling"
  | "Xiao"
  | "Xingqiu"
  | "Xinyan"
  | "YaeMiko"
  | "Yanfei"
  | "Yaoyao"
  | "Yelan"
  | "Yoimiya"
  | "YunJin"
  | "Zhongli";
export const characters: CharacterKey[] = [
  "Albedo",
  "Alhaitham",
  "Aloy",
  "Amber",
  "AratakiItto",
  "Barbara",
  "Beidou",
  "Bennett",
  "Candace",
  "Chongyun",
  "Collei",
  "Cyno",
  "Diluc",
  "Diona",
  "Dori",
  "Eula",
  "Faruzan",
  "Fischl",
  "Ganyu",
  "Gorou",
  "HuTao",
  "Jean",
  "KaedeharaKazuha",
  "Kaeya",
  "KamisatoAyaka",
  "KamisatoAyato",
  "Keqing",
  "Klee",
  "KujouSara",
  "KukiShinobu",
  "Layla",
  "Lisa",
  "Mona",
  "Nahida",
  "Nilou",
  "Ningguang",
  "Noelle",
  "Qiqi",
  "RaidenShogun",
  "Razor",
  "Rosaria",
  "SangonomiyaKokomi",
  "Sayu",
  "Shenhe",
  "ShikanoinHeizou",
  "Sucrose",
  "Tartaglia",
  "Thoma",
  "Tighnari",
  "Traveler",
  "Venti",
  "Wanderer",
  "Xiangling",
  "Xiao",
  "Xingqiu",
  "Xinyan",
  "YaeMiko",
  "Yanfei",
  "Yaoyao",
  "Yelan",
  "Yoimiya",
  "YunJin",
  "Zhongli",
];
export const catalyst: WeaponKey[] = [
  "AThousandFloatingDreams",
  "EverlastingMoonglow",
  "KagurasVerity",
  "LostPrayerToTheSacredWinds",
  "MemoryOfDust",
  "SkywardAtlas",
  "TulaytullahsRemembrance",
  "BlackcliffAgate",
  "DodocoTales",
  "EyeOfPerception",
  "FavoniusCodex",
  "Frostbearer",
  "FruitOfFulfillment",
  "HakushinRing",
  "MappaMare",
  "OathswornEye",
  "PrototypeAmber",
  "RoyalGrimoire",
  "SacrificialFragments",
  "SolarPearl",
  "TheWidsith",
  "WanderingEvenstar",
  "WineAndSong",
  "EmeraldOrb",
  "MagicGuide",
  "OtherworldlyStory",
  "ThrillingTalesOfDragonSlayers",
  "TwinNephrite",
  "PocketGrimoire",
  "ApprenticesNotes",
];
export const catalystIDs = toIdedObj(catalyst);
export const bow: WeaponKey[] = [
  "AmosBow",
  "AquaSimulacra",
  "ElegyForTheEnd",
  "HuntersPath",
  "PolarStar",
  "SkywardHarp",
  "ThunderingPulse",
  "AlleyHunter",
  "BlackcliffWarbow",
  "CompoundBow",
  "EndOfTheLine",
  "FadingTwilight",
  "FavoniusWarbow",
  "Hamayumi",
  "KingsSquire",
  "MitternachtsWaltz",
  "MouunsMoon",
  "Predator",
  "PrototypeCrescent",
  "RoyalBow",
  "Rust",
  "SacrificialBow",
  "TheStringless",
  "TheViridescentHunt",
  "WindblumeOde",
  "Messenger",
  "RavenBow",
  "RecurveBow",
  "SharpshootersOath",
  "Slingshot",
  "SeasonedHuntersBow",
  "HuntersBow",
];
export const bowIDs = toIdedObj(bow);
export const sword: WeaponKey[] = [
  "AquilaFavonia",
  "FreedomSworn",
  "HaranGeppakuFutsu",
  "KeyOfKhajNisut",
  "LightOfFoliarIncision",
  "MistsplitterReforged",
  "PrimordialJadeCutter",
  "SkywardBlade",
  "SummitShaper",
  "AmenomaKageuchi",
  "BlackcliffLongsword",
  "CinnabarSpindle",
  "FavoniusSword",
  "FesteringDesire",
  "IronSting",
  "KagotsurubeIsshin",
  "LionsRoar",
  "PrototypeRancour",
  "RoyalLongsword",
  "SacrificialSword",
  "SapwoodBlade",
  "SwordOfDescension",
  "TheAlleyFlash",
  "TheBlackSword",
  "TheFlute",
  "ToukabouShigure",
  "XiphosMoonlight",
  "CoolSteel",
  "DarkIronSword",
  "FilletBlade",
  "HarbingerOfDawn",
  "SkyriderSword",
  "TravelersHandySword",
  "SilverSword",
  "DullBlade",
];
export const swordIDs = toIdedObj(sword);
export const polearm: WeaponKey[] = [
  "CalamityQueller",
  "EngulfingLightning",
  "PrimordialJadeWingedSpear",
  "SkywardSpine",
  "StaffOfHoma",
  "StaffOfTheScarletSands",
  "VortexVanquisher",
  "TheCatch",
  "BlackcliffPole",
  "CrescentPike",
  "Deathmatch",
  "DragonsBane",
  "DragonspineSpear",
  "FavoniusLance",
  "KitainCrossSpear",
  "LithicSpear",
  "MissiveWindspear",
  "Moonpiercer",
  "PrototypeStarglitter",
  "RoyalSpear",
  "WavebreakersFin",
  "BlackTassel",
  "Halberd",
  "WhiteTassel",
  "IronPoint",
  "BeginnersProtector",
];
export const polearmIDs = toIdedObj(polearm);
export const claymore: WeaponKey[] = [
  "RedhornStonethresher",
  "SkywardPride",
  "SongOfBrokenPines",
  "TheUnforged",
  "WolfsGravestone",
  "Akuoumaru",
  "BlackcliffSlasher",
  "FavoniusGreatsword",
  "ForestRegalia",
  "KatsuragikiriNagamasa",
  "LithicBlade",
  "LuxuriousSeaLord",
  "MakhairaAquamarine",
  "PrototypeArchaic",
  "Rainslasher",
  "RoyalGreatsword",
  "SacrificialGreatsword",
  "SerpentSpine",
  "SnowTombedStarsilver",
  "TheBell",
  "Whiteblind",
  "BloodtaintedGreatsword",
  "DebateClub",
  "FerrousShadow",
  "SkyriderGreatsword",
  "WhiteIronGreatsword",
  "OldMercsPal",
  "WasterGreatsword",
];
export const claymoreIDs = toIdedObj(claymore);
export type WeaponKey =
  | "AThousandFloatingDreams"
  | "AmosBow"
  | "AquaSimulacra"
  | "AquilaFavonia"
  | "CalamityQueller"
  | "ElegyForTheEnd"
  | "EngulfingLightning"
  | "EverlastingMoonglow"
  | "FreedomSworn"
  | "HaranGeppakuFutsu"
  | "HuntersPath"
  | "KagurasVerity"
  | "KeyOfKhajNisut"
  | "LightOfFoliarIncision"
  | "LostPrayerToTheSacredWinds"
  | "MemoryOfDust"
  | "MistsplitterReforged"
  | "PolarStar"
  | "PrimordialJadeCutter"
  | "PrimordialJadeWingedSpear"
  | "RedhornStonethresher"
  | "SkywardAtlas"
  | "SkywardBlade"
  | "SkywardHarp"
  | "SkywardPride"
  | "SkywardSpine"
  | "SongOfBrokenPines"
  | "StaffOfHoma"
  | "StaffOfTheScarletSands"
  | "SummitShaper"
  | "TheUnforged"
  | "ThunderingPulse"
  | "TulaytullahsRemembrance"
  | "VortexVanquisher"
  | "WolfsGravestone"
  | "TheCatch"
  | "Akuoumaru"
  | "AlleyHunter"
  | "AmenomaKageuchi"
  | "BlackcliffAgate"
  | "BlackcliffLongsword"
  | "BlackcliffPole"
  | "BlackcliffSlasher"
  | "BlackcliffWarbow"
  | "CinnabarSpindle"
  | "CompoundBow"
  | "CrescentPike"
  | "Deathmatch"
  | "DodocoTales"
  | "DragonsBane"
  | "DragonspineSpear"
  | "EndOfTheLine"
  | "EyeOfPerception"
  | "FadingTwilight"
  | "FavoniusCodex"
  | "FavoniusGreatsword"
  | "FavoniusLance"
  | "FavoniusSword"
  | "FavoniusWarbow"
  | "FesteringDesire"
  | "ForestRegalia"
  | "Frostbearer"
  | "FruitOfFulfillment"
  | "HakushinRing"
  | "Hamayumi"
  | "IronSting"
  | "KagotsurubeIsshin"
  | "KatsuragikiriNagamasa"
  | "KingsSquire"
  | "KitainCrossSpear"
  | "LionsRoar"
  | "LithicBlade"
  | "LithicSpear"
  | "LuxuriousSeaLord"
  | "MakhairaAquamarine"
  | "MappaMare"
  | "MissiveWindspear"
  | "MitternachtsWaltz"
  | "Moonpiercer"
  | "MouunsMoon"
  | "OathswornEye"
  | "Predator"
  | "PrototypeAmber"
  | "PrototypeArchaic"
  | "PrototypeCrescent"
  | "PrototypeRancour"
  | "PrototypeStarglitter"
  | "Rainslasher"
  | "RoyalBow"
  | "RoyalGreatsword"
  | "RoyalGrimoire"
  | "RoyalLongsword"
  | "RoyalSpear"
  | "Rust"
  | "SacrificialBow"
  | "SacrificialFragments"
  | "SacrificialGreatsword"
  | "SacrificialSword"
  | "SapwoodBlade"
  | "SerpentSpine"
  | "SnowTombedStarsilver"
  | "SolarPearl"
  | "SwordOfDescension"
  | "TheAlleyFlash"
  | "TheBell"
  | "TheBlackSword"
  | "TheFlute"
  | "TheStringless"
  | "TheViridescentHunt"
  | "TheWidsith"
  | "ToukabouShigure"
  | "WanderingEvenstar"
  | "WavebreakersFin"
  | "Whiteblind"
  | "WindblumeOde"
  | "WineAndSong"
  | "XiphosMoonlight"
  | "BlackTassel"
  | "BloodtaintedGreatsword"
  | "CoolSteel"
  | "DarkIronSword"
  | "DebateClub"
  | "EmeraldOrb"
  | "FerrousShadow"
  | "FilletBlade"
  | "Halberd"
  | "HarbingerOfDawn"
  | "MagicGuide"
  | "Messenger"
  | "OtherworldlyStory"
  | "RavenBow"
  | "RecurveBow"
  | "SharpshootersOath"
  | "SkyriderGreatsword"
  | "SkyriderSword"
  | "Slingshot"
  | "ThrillingTalesOfDragonSlayers"
  | "TravelersHandySword"
  | "TwinNephrite"
  | "WhiteIronGreatsword"
  | "WhiteTassel"
  | "IronPoint"
  | "OldMercsPal"
  | "PocketGrimoire"
  | "SeasonedHuntersBow"
  | "SilverSword"
  | "ApprenticesNotes"
  | "BeginnersProtector"
  | "DullBlade"
  | "HuntersBow"
  | "WasterGreatsword";
export const weapons: WeaponKey[] = [
  "AThousandFloatingDreams",
  "AmosBow",
  "AquaSimulacra",
  "AquilaFavonia",
  "CalamityQueller",
  "ElegyForTheEnd",
  "EngulfingLightning",
  "EverlastingMoonglow",
  "FreedomSworn",
  "HaranGeppakuFutsu",
  "HuntersPath",
  "KagurasVerity",
  "KeyOfKhajNisut",
  "LightOfFoliarIncision",
  "LostPrayerToTheSacredWinds",
  "MemoryOfDust",
  "MistsplitterReforged",
  "PolarStar",
  "PrimordialJadeCutter",
  "PrimordialJadeWingedSpear",
  "RedhornStonethresher",
  "SkywardAtlas",
  "SkywardBlade",
  "SkywardHarp",
  "SkywardPride",
  "SkywardSpine",
  "SongOfBrokenPines",
  "StaffOfHoma",
  "StaffOfTheScarletSands",
  "SummitShaper",
  "TheUnforged",
  "ThunderingPulse",
  "TulaytullahsRemembrance",
  "VortexVanquisher",
  "WolfsGravestone",
  "TheCatch",
  "Akuoumaru",
  "AlleyHunter",
  "AmenomaKageuchi",
  "BlackcliffAgate",
  "BlackcliffLongsword",
  "BlackcliffPole",
  "BlackcliffSlasher",
  "BlackcliffWarbow",
  "CinnabarSpindle",
  "CompoundBow",
  "CrescentPike",
  "Deathmatch",
  "DodocoTales",
  "DragonsBane",
  "DragonspineSpear",
  "EndOfTheLine",
  "EyeOfPerception",
  "FadingTwilight",
  "FavoniusCodex",
  "FavoniusGreatsword",
  "FavoniusLance",
  "FavoniusSword",
  "FavoniusWarbow",
  "FesteringDesire",
  "ForestRegalia",
  "Frostbearer",
  "FruitOfFulfillment",
  "HakushinRing",
  "Hamayumi",
  "IronSting",
  "KagotsurubeIsshin",
  "KatsuragikiriNagamasa",
  "KingsSquire",
  "KitainCrossSpear",
  "LionsRoar",
  "LithicBlade",
  "LithicSpear",
  "LuxuriousSeaLord",
  "MakhairaAquamarine",
  "MappaMare",
  "MissiveWindspear",
  "MitternachtsWaltz",
  "Moonpiercer",
  "MouunsMoon",
  "OathswornEye",
  "Predator",
  "PrototypeAmber",
  "PrototypeArchaic",
  "PrototypeCrescent",
  "PrototypeRancour",
  "PrototypeStarglitter",
  "Rainslasher",
  "RoyalBow",
  "RoyalGreatsword",
  "RoyalGrimoire",
  "RoyalLongsword",
  "RoyalSpear",
  "Rust",
  "SacrificialBow",
  "SacrificialFragments",
  "SacrificialGreatsword",
  "SacrificialSword",
  "SapwoodBlade",
  "SerpentSpine",
  "SnowTombedStarsilver",
  "SolarPearl",
  "SwordOfDescension",
  "TheAlleyFlash",
  "TheBell",
  "TheBlackSword",
  "TheFlute",
  "TheStringless",
  "TheViridescentHunt",
  "TheWidsith",
  "ToukabouShigure",
  "WanderingEvenstar",
  "WavebreakersFin",
  "Whiteblind",
  "WindblumeOde",
  "WineAndSong",
  "XiphosMoonlight",
  "BlackTassel",
  "BloodtaintedGreatsword",
  "CoolSteel",
  "DarkIronSword",
  "DebateClub",
  "EmeraldOrb",
  "FerrousShadow",
  "FilletBlade",
  "Halberd",
  "HarbingerOfDawn",
  "MagicGuide",
  "Messenger",
  "OtherworldlyStory",
  "RavenBow",
  "RecurveBow",
  "SharpshootersOath",
  "SkyriderGreatsword",
  "SkyriderSword",
  "Slingshot",
  "ThrillingTalesOfDragonSlayers",
  "TravelersHandySword",
  "TwinNephrite",
  "WhiteIronGreatsword",
  "WhiteTassel",
  "IronPoint",
  "OldMercsPal",
  "PocketGrimoire",
  "SeasonedHuntersBow",
  "SilverSword",
  "ApprenticesNotes",
  "BeginnersProtector",
  "DullBlade",
  "HuntersBow",
  "WasterGreatsword",
];
export const weaponIDs = toIdedObj(weapons);
export const weaponInfo: {
  [key in WeaponKey]: {
    name: string;
    statBuff: StatBuff | null;
    stats:
      | {
          [key in AscensionKey]: { ATK: number; SP: number }[];
        }
      | null;
    type: WeaponType;
  };
} = {
  AThousandFloatingDreams: {
    name: "A Thousand Floating Dreams",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 44, SP: 58 },
        { ATK: 110, SP: 102 },
      ],
      "1": [
        { ATK: 141, SP: 102 },
        { ATK: 210, SP: 148 },
      ],
      "2": [
        { ATK: 241, SP: 148 },
        { ATK: 275, SP: 172 },
      ],
      "3": [
        { ATK: 307, SP: 172 },
        { ATK: 341, SP: 195 },
      ],
      "4": [
        { ATK: 373, SP: 195 },
        { ATK: 408, SP: 218 },
      ],
      "5": [
        { ATK: 439, SP: 218 },
        { ATK: 475, SP: 241 },
      ],
      "6": [
        { ATK: 506, SP: 241 },
        { ATK: 542, SP: 265 },
      ],
    },
    type: "Catalyst",
  },
  AmosBow: {
    name: "Amos' Bow",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 46, SP: 10.8 },
        { ATK: 122, SP: 19.1 },
      ],
      "1": [
        { ATK: 153, SP: 19.1 },
        { ATK: 235, SP: 27.8 },
      ],
      "2": [
        { ATK: 266, SP: 27.8 },
        { ATK: 308, SP: 32.2 },
      ],
      "3": [
        { ATK: 340, SP: 32.2 },
        { ATK: 382, SP: 36.5 },
      ],
      "4": [
        { ATK: 414, SP: 36.5 },
        { ATK: 457, SP: 40.9 },
      ],
      "5": [
        { ATK: 488, SP: 40.9 },
        { ATK: 532, SP: 45.3 },
      ],
      "6": [
        { ATK: 563, SP: 45.3 },
        { ATK: 608, SP: 49.6 },
      ],
    },
    type: "Bow",
  },
  AquaSimulacra: {
    name: "Aqua Simulacra",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 44, SP: 19.2 },
        { ATK: 110, SP: 33.9 },
      ],
      "1": [
        { ATK: 141, SP: 33.9 },
        { ATK: 210, SP: 49.4 },
      ],
      "2": [
        { ATK: 241, SP: 49.4 },
        { ATK: 275, SP: 57.2 },
      ],
      "3": [
        { ATK: 307, SP: 57.2 },
        { ATK: 341, SP: 65 },
      ],
      "4": [
        { ATK: 373, SP: 65 },
        { ATK: 408, SP: 72.7 },
      ],
      "5": [
        { ATK: 439, SP: 72.7 },
        { ATK: 475, SP: 80.4 },
      ],
      "6": [
        { ATK: 506, SP: 80.4 },
        { ATK: 542, SP: 88.2 },
      ],
    },
    type: "Bow",
  },
  AquilaFavonia: {
    name: "Aquila Favonia",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 48, SP: 9 },
        { ATK: 133, SP: 15.9 },
      ],
      "1": [
        { ATK: 164, SP: 15.9 },
        { ATK: 261, SP: 23.2 },
      ],
      "2": [
        { ATK: 292, SP: 23.2 },
        { ATK: 341, SP: 26.8 },
      ],
      "3": [
        { ATK: 373, SP: 26.8 },
        { ATK: 423, SP: 30.4 },
      ],
      "4": [
        { ATK: 455, SP: 30.4 },
        { ATK: 506, SP: 34.1 },
      ],
      "5": [
        { ATK: 537, SP: 34.1 },
        { ATK: 590, SP: 37.7 },
      ],
      "6": [
        { ATK: 621, SP: 37.7 },
        { ATK: 674, SP: 41.3 },
      ],
    },
    type: "Sword",
  },
  CalamityQueller: {
    name: "Calamity Queller",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 49, SP: 3.6 },
        { ATK: 145, SP: 6.4 },
      ],
      "1": [
        { ATK: 176, SP: 6.4 },
        { ATK: 286, SP: 7.8 },
      ],
      "2": [
        { ATK: 317, SP: 7.8 },
        { ATK: 374, SP: 10.7 },
      ],
      "3": [
        { ATK: 406, SP: 10.7 },
        { ATK: 464, SP: 12.2 },
      ],
      "4": [
        { ATK: 495, SP: 12.2 },
        { ATK: 555, SP: 13.6 },
      ],
      "5": [
        { ATK: 586, SP: 13.6 },
        { ATK: 648, SP: 15.1 },
      ],
      "6": [
        { ATK: 679, SP: 15.1 },
        { ATK: 741, SP: 16.5 },
      ],
    },
    type: "Polearm",
  },
  ElegyForTheEnd: {
    name: "Elegy for the End",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 46, SP: 12 },
        { ATK: 122, SP: 21.2 },
      ],
      "1": [
        { ATK: 153, SP: 21.2 },
        { ATK: 235, SP: 30.9 },
      ],
      "2": [
        { ATK: 266, SP: 30.9 },
        { ATK: 308, SP: 35.7 },
      ],
      "3": [
        { ATK: 340, SP: 35.7 },
        { ATK: 382, SP: 40.6 },
      ],
      "4": [
        { ATK: 414, SP: 40.6 },
        { ATK: 457, SP: 45.4 },
      ],
      "5": [
        { ATK: 488, SP: 45.4 },
        { ATK: 532, SP: 50.3 },
      ],
      "6": [
        { ATK: 563, SP: 50.3 },
        { ATK: 608, SP: 55.1 },
      ],
    },
    type: "Bow",
  },
  EngulfingLightning: {
    name: "Engulfing Lightning",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 46, SP: 12 },
        { ATK: 122, SP: 21.2 },
      ],
      "1": [
        { ATK: 153, SP: 21.2 },
        { ATK: 235, SP: 30.9 },
      ],
      "2": [
        { ATK: 266, SP: 30.9 },
        { ATK: 308, SP: 35.7 },
      ],
      "3": [
        { ATK: 340, SP: 35.7 },
        { ATK: 382, SP: 40.6 },
      ],
      "4": [
        { ATK: 414, SP: 40.6 },
        { ATK: 457, SP: 45.4 },
      ],
      "5": [
        { ATK: 488, SP: 45.4 },
        { ATK: 532, SP: 50.3 },
      ],
      "6": [
        { ATK: 563, SP: 50.3 },
        { ATK: 608, SP: 55.1 },
      ],
    },
    type: "Polearm",
  },
  EverlastingMoonglow: {
    name: "Everlasting Moonglow",
    statBuff: "HP",
    stats: {
      "0": [
        { ATK: 46, SP: 10.8 },
        { ATK: 122, SP: 19.1 },
      ],
      "1": [
        { ATK: 153, SP: 19.1 },
        { ATK: 235, SP: 27.8 },
      ],
      "2": [
        { ATK: 266, SP: 27.8 },
        { ATK: 308, SP: 32.2 },
      ],
      "3": [
        { ATK: 340, SP: 32.2 },
        { ATK: 382, SP: 36.5 },
      ],
      "4": [
        { ATK: 414, SP: 36.5 },
        { ATK: 457, SP: 40.9 },
      ],
      "5": [
        { ATK: 488, SP: 40.9 },
        { ATK: 532, SP: 45.3 },
      ],
      "6": [
        { ATK: 563, SP: 45.3 },
        { ATK: 608, SP: 49.6 },
      ],
    },
    type: "Catalyst",
  },
  FreedomSworn: {
    name: "Freedom-Sworn",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 46, SP: 43 },
        { ATK: 122, SP: 76 },
      ],
      "1": [
        { ATK: 153, SP: 76 },
        { ATK: 235, SP: 111 },
      ],
      "2": [
        { ATK: 266, SP: 111 },
        { ATK: 308, SP: 129 },
      ],
      "3": [
        { ATK: 340, SP: 129 },
        { ATK: 382, SP: 146 },
      ],
      "4": [
        { ATK: 414, SP: 146 },
        { ATK: 457, SP: 164 },
      ],
      "5": [
        { ATK: 488, SP: 164 },
        { ATK: 532, SP: 181 },
      ],
      "6": [
        { ATK: 563, SP: 181 },
        { ATK: 608, SP: 198 },
      ],
    },
    type: "Sword",
  },
  HaranGeppakuFutsu: {
    name: "Haran Geppaku Futsu",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 46, SP: 7.2 },
        { ATK: 122, SP: 12.7 },
      ],
      "1": [
        { ATK: 153, SP: 12.7 },
        { ATK: 235, SP: 18.5 },
      ],
      "2": [
        { ATK: 266, SP: 18.5 },
        { ATK: 308, SP: 21.4 },
      ],
      "3": [
        { ATK: 340, SP: 21.4 },
        { ATK: 382, SP: 24.4 },
      ],
      "4": [
        { ATK: 414, SP: 24.4 },
        { ATK: 457, SP: 27.3 },
      ],
      "5": [
        { ATK: 488, SP: 27.3 },
        { ATK: 532, SP: 30.2 },
      ],
      "6": [
        { ATK: 563, SP: 30.2 },
        { ATK: 608, SP: 33.1 },
      ],
    },
    type: "Sword",
  },
  HuntersPath: {
    name: "Hunter's Path",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 44, SP: 9.6 },
        { ATK: 110, SP: 17 },
      ],
      "1": [
        { ATK: 141, SP: 17 },
        { ATK: 210, SP: 24.7 },
      ],
      "2": [
        { ATK: 241, SP: 24.7 },
        { ATK: 275, SP: 28.6 },
      ],
      "3": [
        { ATK: 307, SP: 28.6 },
        { ATK: 341, SP: 32.5 },
      ],
      "4": [
        { ATK: 373, SP: 32.5 },
        { ATK: 408, SP: 36.4 },
      ],
      "5": [
        { ATK: 439, SP: 36.4 },
        { ATK: 475, SP: 40.2 },
      ],
      "6": [
        { ATK: 506, SP: 40.2 },
        { ATK: 542, SP: 44.1 },
      ],
    },
    type: "Bow",
  },
  KagurasVerity: {
    name: "Kagura's Verity",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 46, SP: 14.4 },
        { ATK: 122, SP: 25.4 },
      ],
      "1": [
        { ATK: 153, SP: 25.4 },
        { ATK: 235, SP: 37.1 },
      ],
      "2": [
        { ATK: 266, SP: 37.1 },
        { ATK: 308, SP: 42.9 },
      ],
      "3": [
        { ATK: 340, SP: 42.9 },
        { ATK: 382, SP: 48.7 },
      ],
      "4": [
        { ATK: 414, SP: 48.7 },
        { ATK: 457, SP: 54.5 },
      ],
      "5": [
        { ATK: 488, SP: 54.5 },
        { ATK: 532, SP: 60.3 },
      ],
      "6": [
        { ATK: 563, SP: 60.3 },
        { ATK: 608, SP: 66.2 },
      ],
    },
    type: "Catalyst",
  },
  KeyOfKhajNisut: {
    name: "Key of Khaj-Nisut",
    statBuff: "HP",
    stats: {
      "0": [
        { ATK: 44, SP: 14.4 },
        { ATK: 110, SP: 25.4 },
      ],
      "1": [
        { ATK: 141, SP: 25.4 },
        { ATK: 210, SP: 37.1 },
      ],
      "2": [
        { ATK: 241, SP: 37.1 },
        { ATK: 275, SP: 42.9 },
      ],
      "3": [
        { ATK: 307, SP: 42.9 },
        { ATK: 341, SP: 48.7 },
      ],
      "4": [
        { ATK: 373, SP: 48.7 },
        { ATK: 408, SP: 54.5 },
      ],
      "5": [
        { ATK: 439, SP: 54.5 },
        { ATK: 475, SP: 60.3 },
      ],
      "6": [
        { ATK: 506, SP: 60.3 },
        { ATK: 542, SP: 66.2 },
      ],
    },
    type: "Sword",
  },
  LightOfFoliarIncision: {
    name: "Light of Foliar Incision",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 44, SP: 19.2 },
        { ATK: 110, SP: 33.9 },
      ],
      "1": [
        { ATK: 141, SP: 33.9 },
        { ATK: 210, SP: 49.4 },
      ],
      "2": [
        { ATK: 241, SP: 49.4 },
        { ATK: 275, SP: 57.2 },
      ],
      "3": [
        { ATK: 307, SP: 57.2 },
        { ATK: 341, SP: 65 },
      ],
      "4": [
        { ATK: 373, SP: 65 },
        { ATK: 408, SP: 72.7 },
      ],
      "5": [
        { ATK: 439, SP: 72.7 },
        { ATK: 475, SP: 80.4 },
      ],
      "6": [
        { ATK: 506, SP: 80.4 },
        { ATK: 542, SP: 88.2 },
      ],
    },
    type: "Sword",
  },
  LostPrayerToTheSacredWinds: {
    name: "Lost Prayer to the Sacred Winds",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 46, SP: 7.2 },
        { ATK: 122, SP: 12.7 },
      ],
      "1": [
        { ATK: 153, SP: 12.7 },
        { ATK: 235, SP: 18.5 },
      ],
      "2": [
        { ATK: 266, SP: 18.5 },
        { ATK: 308, SP: 21.4 },
      ],
      "3": [
        { ATK: 340, SP: 21.4 },
        { ATK: 382, SP: 24.4 },
      ],
      "4": [
        { ATK: 414, SP: 24.4 },
        { ATK: 457, SP: 27.3 },
      ],
      "5": [
        { ATK: 488, SP: 27.3 },
        { ATK: 532, SP: 30.2 },
      ],
      "6": [
        { ATK: 563, SP: 30.2 },
        { ATK: 608, SP: 33.1 },
      ],
    },
    type: "Catalyst",
  },
  MemoryOfDust: {
    name: "Memory of Dust",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 46, SP: 10.8 },
        { ATK: 122, SP: 19.1 },
      ],
      "1": [
        { ATK: 153, SP: 19.1 },
        { ATK: 235, SP: 27.8 },
      ],
      "2": [
        { ATK: 266, SP: 27.8 },
        { ATK: 308, SP: 32.2 },
      ],
      "3": [
        { ATK: 340, SP: 32.2 },
        { ATK: 382, SP: 36.5 },
      ],
      "4": [
        { ATK: 414, SP: 36.5 },
        { ATK: 457, SP: 40.9 },
      ],
      "5": [
        { ATK: 488, SP: 40.9 },
        { ATK: 532, SP: 45.3 },
      ],
      "6": [
        { ATK: 563, SP: 45.3 },
        { ATK: 608, SP: 49.6 },
      ],
    },
    type: "Catalyst",
  },
  MistsplitterReforged: {
    name: "Mistsplitter Reforged",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 48, SP: 9.6 },
        { ATK: 133, SP: 17 },
      ],
      "1": [
        { ATK: 164, SP: 17 },
        { ATK: 261, SP: 24.7 },
      ],
      "2": [
        { ATK: 292, SP: 24.7 },
        { ATK: 341, SP: 28.6 },
      ],
      "3": [
        { ATK: 373, SP: 28.6 },
        { ATK: 423, SP: 32.5 },
      ],
      "4": [
        { ATK: 455, SP: 32.5 },
        { ATK: 506, SP: 36.4 },
      ],
      "5": [
        { ATK: 537, SP: 36.4 },
        { ATK: 590, SP: 40.2 },
      ],
      "6": [
        { ATK: 621, SP: 40.2 },
        { ATK: 674, SP: 44.1 },
      ],
    },
    type: "Sword",
  },
  PolarStar: {
    name: "Polar Star",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 46, SP: 7.2 },
        { ATK: 122, SP: 12.7 },
      ],
      "1": [
        { ATK: 153, SP: 12.7 },
        { ATK: 235, SP: 18.5 },
      ],
      "2": [
        { ATK: 266, SP: 18.5 },
        { ATK: 308, SP: 21.4 },
      ],
      "3": [
        { ATK: 340, SP: 21.4 },
        { ATK: 382, SP: 24.4 },
      ],
      "4": [
        { ATK: 414, SP: 24.4 },
        { ATK: 457, SP: 27.3 },
      ],
      "5": [
        { ATK: 488, SP: 27.3 },
        { ATK: 532, SP: 30.2 },
      ],
      "6": [
        { ATK: 563, SP: 30.2 },
        { ATK: 608, SP: 33.1 },
      ],
    },
    type: "Bow",
  },
  PrimordialJadeCutter: {
    name: "Primordial Jade Cutter",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 44, SP: 9.6 },
        { ATK: 110, SP: 17 },
      ],
      "1": [
        { ATK: 141, SP: 17 },
        { ATK: 210, SP: 24.7 },
      ],
      "2": [
        { ATK: 241, SP: 24.7 },
        { ATK: 275, SP: 28.6 },
      ],
      "3": [
        { ATK: 307, SP: 28.6 },
        { ATK: 341, SP: 32.5 },
      ],
      "4": [
        { ATK: 373, SP: 32.5 },
        { ATK: 408, SP: 36.4 },
      ],
      "5": [
        { ATK: 439, SP: 36.4 },
        { ATK: 475, SP: 40.2 },
      ],
      "6": [
        { ATK: 506, SP: 40.2 },
        { ATK: 542, SP: 44.1 },
      ],
    },
    type: "Sword",
  },
  PrimordialJadeWingedSpear: {
    name: "Primordial Jade Winged-Spear",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 48, SP: 4.8 },
        { ATK: 133, SP: 8.5 },
      ],
      "1": [
        { ATK: 164, SP: 8.5 },
        { ATK: 261, SP: 12.4 },
      ],
      "2": [
        { ATK: 292, SP: 12.4 },
        { ATK: 341, SP: 14.3 },
      ],
      "3": [
        { ATK: 373, SP: 14.3 },
        { ATK: 423, SP: 16.2 },
      ],
      "4": [
        { ATK: 455, SP: 16.2 },
        { ATK: 506, SP: 18.2 },
      ],
      "5": [
        { ATK: 537, SP: 18.2 },
        { ATK: 590, SP: 20.1 },
      ],
      "6": [
        { ATK: 621, SP: 20.1 },
        { ATK: 674, SP: 22.1 },
      ],
    },
    type: "Polearm",
  },
  RedhornStonethresher: {
    name: "Redhorn Stonethresher",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 44, SP: 19.2 },
        { ATK: 110, SP: 33.9 },
      ],
      "1": [
        { ATK: 141, SP: 33.9 },
        { ATK: 210, SP: 49.4 },
      ],
      "2": [
        { ATK: 241, SP: 49.4 },
        { ATK: 275, SP: 57.2 },
      ],
      "3": [
        { ATK: 307, SP: 57.2 },
        { ATK: 341, SP: 65 },
      ],
      "4": [
        { ATK: 373, SP: 65 },
        { ATK: 408, SP: 72.7 },
      ],
      "5": [
        { ATK: 439, SP: 72.7 },
        { ATK: 475, SP: 80.4 },
      ],
      "6": [
        { ATK: 506, SP: 80.4 },
        { ATK: 542, SP: 88.2 },
      ],
    },
    type: "Claymore",
  },
  SkywardAtlas: {
    name: "Skyward Atlas",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 48, SP: 7.2 },
        { ATK: 133, SP: 12.7 },
      ],
      "1": [
        { ATK: 164, SP: 12.7 },
        { ATK: 261, SP: 18.5 },
      ],
      "2": [
        { ATK: 292, SP: 18.5 },
        { ATK: 341, SP: 21.4 },
      ],
      "3": [
        { ATK: 373, SP: 21.4 },
        { ATK: 423, SP: 24.4 },
      ],
      "4": [
        { ATK: 455, SP: 24.4 },
        { ATK: 506, SP: 27.3 },
      ],
      "5": [
        { ATK: 537, SP: 27.3 },
        { ATK: 590, SP: 30.2 },
      ],
      "6": [
        { ATK: 621, SP: 30.2 },
        { ATK: 674, SP: 33.1 },
      ],
    },
    type: "Catalyst",
  },
  SkywardBlade: {
    name: "Skyward Blade",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 46, SP: 12 },
        { ATK: 122, SP: 21.2 },
      ],
      "1": [
        { ATK: 153, SP: 21.2 },
        { ATK: 235, SP: 30.9 },
      ],
      "2": [
        { ATK: 266, SP: 30.9 },
        { ATK: 308, SP: 35.7 },
      ],
      "3": [
        { ATK: 340, SP: 35.7 },
        { ATK: 382, SP: 40.6 },
      ],
      "4": [
        { ATK: 414, SP: 40.6 },
        { ATK: 457, SP: 45.4 },
      ],
      "5": [
        { ATK: 488, SP: 45.4 },
        { ATK: 532, SP: 50.3 },
      ],
      "6": [
        { ATK: 563, SP: 50.3 },
        { ATK: 608, SP: 55.1 },
      ],
    },
    type: "Sword",
  },
  SkywardHarp: {
    name: "Skyward Harp",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 48, SP: 4.8 },
        { ATK: 133, SP: 8.5 },
      ],
      "1": [
        { ATK: 164, SP: 8.5 },
        { ATK: 261, SP: 12.4 },
      ],
      "2": [
        { ATK: 292, SP: 12.4 },
        { ATK: 341, SP: 14.3 },
      ],
      "3": [
        { ATK: 373, SP: 14.3 },
        { ATK: 423, SP: 16.2 },
      ],
      "4": [
        { ATK: 455, SP: 16.2 },
        { ATK: 506, SP: 18.2 },
      ],
      "5": [
        { ATK: 537, SP: 18.2 },
        { ATK: 590, SP: 20.1 },
      ],
      "6": [
        { ATK: 621, SP: 20.1 },
        { ATK: 674, SP: 22.1 },
      ],
    },
    type: "Bow",
  },
  SkywardPride: {
    name: "Skyward Pride",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 48, SP: 8 },
        { ATK: 133, SP: 14.1 },
      ],
      "1": [
        { ATK: 164, SP: 14.1 },
        { ATK: 261, SP: 20.6 },
      ],
      "2": [
        { ATK: 292, SP: 20.6 },
        { ATK: 341, SP: 23.8 },
      ],
      "3": [
        { ATK: 373, SP: 23.8 },
        { ATK: 423, SP: 27.1 },
      ],
      "4": [
        { ATK: 455, SP: 27.1 },
        { ATK: 506, SP: 30.3 },
      ],
      "5": [
        { ATK: 537, SP: 30.3 },
        { ATK: 590, SP: 33.5 },
      ],
      "6": [
        { ATK: 621, SP: 33.5 },
        { ATK: 674, SP: 36.8 },
      ],
    },
    type: "Claymore",
  },
  SkywardSpine: {
    name: "Skyward Spine",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 48, SP: 8 },
        { ATK: 133, SP: 14.1 },
      ],
      "1": [
        { ATK: 164, SP: 14.1 },
        { ATK: 261, SP: 20.6 },
      ],
      "2": [
        { ATK: 292, SP: 20.6 },
        { ATK: 341, SP: 23.8 },
      ],
      "3": [
        { ATK: 373, SP: 23.8 },
        { ATK: 423, SP: 27.1 },
      ],
      "4": [
        { ATK: 455, SP: 27.1 },
        { ATK: 506, SP: 30.3 },
      ],
      "5": [
        { ATK: 537, SP: 30.3 },
        { ATK: 590, SP: 33.5 },
      ],
      "6": [
        { ATK: 621, SP: 33.5 },
        { ATK: 674, SP: 36.8 },
      ],
    },
    type: "Polearm",
  },
  SongOfBrokenPines: {
    name: "Song of Broken Pines",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 49, SP: 4.5 },
        { ATK: 145, SP: 8 },
      ],
      "1": [
        { ATK: 176, SP: 8 },
        { ATK: 286, SP: 11.6 },
      ],
      "2": [
        { ATK: 317, SP: 11.6 },
        { ATK: 374, SP: 13.4 },
      ],
      "3": [
        { ATK: 406, SP: 13.4 },
        { ATK: 464, SP: 15.2 },
      ],
      "4": [
        { ATK: 495, SP: 15.2 },
        { ATK: 555, SP: 17 },
      ],
      "5": [
        { ATK: 586, SP: 17 },
        { ATK: 648, SP: 18.9 },
      ],
      "6": [
        { ATK: 679, SP: 18.9 },
        { ATK: 741, SP: 20.7 },
      ],
    },
    type: "Claymore",
  },
  StaffOfHoma: {
    name: "Staff of Homa",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 46, SP: 14.4 },
        { ATK: 122, SP: 25.4 },
      ],
      "1": [
        { ATK: 153, SP: 25.4 },
        { ATK: 235, SP: 37.1 },
      ],
      "2": [
        { ATK: 266, SP: 37.1 },
        { ATK: 308, SP: 42.9 },
      ],
      "3": [
        { ATK: 340, SP: 42.9 },
        { ATK: 382, SP: 48.7 },
      ],
      "4": [
        { ATK: 414, SP: 48.7 },
        { ATK: 457, SP: 54.5 },
      ],
      "5": [
        { ATK: 488, SP: 54.5 },
        { ATK: 532, SP: 60.3 },
      ],
      "6": [
        { ATK: 563, SP: 60.3 },
        { ATK: 608, SP: 66.2 },
      ],
    },
    type: "Polearm",
  },
  StaffOfTheScarletSands: {
    name: "Staff of the Scarlet Sands",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 44, SP: 9.6 },
        { ATK: 110, SP: 17 },
      ],
      "1": [
        { ATK: 141, SP: 17 },
        { ATK: 210, SP: 24.7 },
      ],
      "2": [
        { ATK: 241, SP: 24.7 },
        { ATK: 275, SP: 28.6 },
      ],
      "3": [
        { ATK: 307, SP: 28.6 },
        { ATK: 341, SP: 32.5 },
      ],
      "4": [
        { ATK: 373, SP: 32.5 },
        { ATK: 408, SP: 36.4 },
      ],
      "5": [
        { ATK: 439, SP: 36.4 },
        { ATK: 475, SP: 40.2 },
      ],
      "6": [
        { ATK: 506, SP: 40.2 },
        { ATK: 542, SP: 44.1 },
      ],
    },
    type: "Polearm",
  },
  SummitShaper: {
    name: "Summit Shaper",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 46, SP: 10.8 },
        { ATK: 122, SP: 19.1 },
      ],
      "1": [
        { ATK: 153, SP: 19.1 },
        { ATK: 235, SP: 27.8 },
      ],
      "2": [
        { ATK: 266, SP: 27.8 },
        { ATK: 308, SP: 32.2 },
      ],
      "3": [
        { ATK: 340, SP: 32.2 },
        { ATK: 382, SP: 36.5 },
      ],
      "4": [
        { ATK: 414, SP: 36.5 },
        { ATK: 457, SP: 40.9 },
      ],
      "5": [
        { ATK: 488, SP: 40.9 },
        { ATK: 532, SP: 45.3 },
      ],
      "6": [
        { ATK: 563, SP: 45.3 },
        { ATK: 608, SP: 49.6 },
      ],
    },
    type: "Sword",
  },
  TheUnforged: {
    name: "The Unforged",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 46, SP: 10.8 },
        { ATK: 122, SP: 19.1 },
      ],
      "1": [
        { ATK: 153, SP: 19.1 },
        { ATK: 235, SP: 27.8 },
      ],
      "2": [
        { ATK: 266, SP: 27.8 },
        { ATK: 308, SP: 32.2 },
      ],
      "3": [
        { ATK: 340, SP: 32.2 },
        { ATK: 382, SP: 36.5 },
      ],
      "4": [
        { ATK: 414, SP: 36.5 },
        { ATK: 457, SP: 40.9 },
      ],
      "5": [
        { ATK: 488, SP: 40.9 },
        { ATK: 532, SP: 45.3 },
      ],
      "6": [
        { ATK: 563, SP: 45.3 },
        { ATK: 608, SP: 49.6 },
      ],
    },
    type: "Claymore",
  },
  ThunderingPulse: {
    name: "Thundering Pulse",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 46, SP: 14.4 },
        { ATK: 122, SP: 25.4 },
      ],
      "1": [
        { ATK: 153, SP: 25.4 },
        { ATK: 235, SP: 37.1 },
      ],
      "2": [
        { ATK: 266, SP: 37.1 },
        { ATK: 308, SP: 42.9 },
      ],
      "3": [
        { ATK: 340, SP: 42.9 },
        { ATK: 382, SP: 48.7 },
      ],
      "4": [
        { ATK: 414, SP: 48.7 },
        { ATK: 457, SP: 54.5 },
      ],
      "5": [
        { ATK: 488, SP: 54.5 },
        { ATK: 532, SP: 60.3 },
      ],
      "6": [
        { ATK: 563, SP: 60.3 },
        { ATK: 608, SP: 66.2 },
      ],
    },
    type: "Bow",
  },
  TulaytullahsRemembrance: {
    name: "Tulaytullah's Remembrance",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 48, SP: 9.6 },
        { ATK: 133, SP: 17 },
      ],
      "1": [
        { ATK: 164, SP: 17 },
        { ATK: 261, SP: 24.7 },
      ],
      "2": [
        { ATK: 292, SP: 24.7 },
        { ATK: 341, SP: 28.6 },
      ],
      "3": [
        { ATK: 373, SP: 28.6 },
        { ATK: 423, SP: 32.5 },
      ],
      "4": [
        { ATK: 455, SP: 32.5 },
        { ATK: 506, SP: 36.4 },
      ],
      "5": [
        { ATK: 537, SP: 36.4 },
        { ATK: 590, SP: 40.2 },
      ],
      "6": [
        { ATK: 621, SP: 40.2 },
        { ATK: 674, SP: 44.1 },
      ],
    },
    type: "Catalyst",
  },
  VortexVanquisher: {
    name: "Vortex Vanquisher",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 46, SP: 10.8 },
        { ATK: 122, SP: 19.1 },
      ],
      "1": [
        { ATK: 153, SP: 19.1 },
        { ATK: 235, SP: 27.8 },
      ],
      "2": [
        { ATK: 266, SP: 27.8 },
        { ATK: 308, SP: 32.2 },
      ],
      "3": [
        { ATK: 340, SP: 32.2 },
        { ATK: 382, SP: 36.5 },
      ],
      "4": [
        { ATK: 414, SP: 36.5 },
        { ATK: 457, SP: 40.9 },
      ],
      "5": [
        { ATK: 488, SP: 40.9 },
        { ATK: 532, SP: 45.3 },
      ],
      "6": [
        { ATK: 563, SP: 45.3 },
        { ATK: 608, SP: 49.6 },
      ],
    },
    type: "Polearm",
  },
  WolfsGravestone: {
    name: "Wolf's Gravestone",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 46, SP: 10.8 },
        { ATK: 122, SP: 19.1 },
      ],
      "1": [
        { ATK: 153, SP: 19.1 },
        { ATK: 235, SP: 27.8 },
      ],
      "2": [
        { ATK: 266, SP: 27.8 },
        { ATK: 308, SP: 32.2 },
      ],
      "3": [
        { ATK: 340, SP: 32.2 },
        { ATK: 382, SP: 36.5 },
      ],
      "4": [
        { ATK: 414, SP: 36.5 },
        { ATK: 457, SP: 40.9 },
      ],
      "5": [
        { ATK: 488, SP: 40.9 },
        { ATK: 532, SP: 45.3 },
      ],
      "6": [
        { ATK: 563, SP: 45.3 },
        { ATK: 608, SP: 49.6 },
      ],
    },
    type: "Claymore",
  },
  TheCatch: {
    name: '"The Catch"',
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 42, SP: 10 },
        { ATK: 109, SP: 17.7 },
      ],
      "1": [
        { ATK: 135, SP: 17.7 },
        { ATK: 205, SP: 25.8 },
      ],
      "2": [
        { ATK: 231, SP: 25.8 },
        { ATK: 266, SP: 29.8 },
      ],
      "3": [
        { ATK: 292, SP: 29.8 },
        { ATK: 327, SP: 33.8 },
      ],
      "4": [
        { ATK: 353, SP: 33.8 },
        { ATK: 388, SP: 37.9 },
      ],
      "5": [
        { ATK: 414, SP: 37.9 },
        { ATK: 449, SP: 41.9 },
      ],
      "6": [
        { ATK: 475, SP: 41.9 },
        { ATK: 510, SP: 45.9 },
      ],
    },
    type: "Polearm",
  },
  Akuoumaru: {
    name: "Akuoumaru",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Claymore",
  },
  AlleyHunter: {
    name: "Alley Hunter",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 44, SP: 6 },
        { ATK: 119, SP: 10.6 },
      ],
      "1": [
        { ATK: 144, SP: 10.6 },
        { ATK: 226, SP: 15.5 },
      ],
      "2": [
        { ATK: 252, SP: 15.5 },
        { ATK: 293, SP: 17.9 },
      ],
      "3": [
        { ATK: 319, SP: 17.9 },
        { ATK: 361, SP: 20.3 },
      ],
      "4": [
        { ATK: 387, SP: 20.3 },
        { ATK: 429, SP: 22.7 },
      ],
      "5": [
        { ATK: 455, SP: 22.7 },
        { ATK: 497, SP: 25.1 },
      ],
      "6": [
        { ATK: 523, SP: 25.1 },
        { ATK: 565, SP: 27.6 },
      ],
    },
    type: "Bow",
  },
  AmenomaKageuchi: {
    name: "Amenoma Kageuchi",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 41, SP: 12 },
        { ATK: 99, SP: 21.2 },
      ],
      "1": [
        { ATK: 125, SP: 21.2 },
        { ATK: 184, SP: 30.9 },
      ],
      "2": [
        { ATK: 210, SP: 30.9 },
        { ATK: 238, SP: 35.7 },
      ],
      "3": [
        { ATK: 264, SP: 35.7 },
        { ATK: 293, SP: 40.6 },
      ],
      "4": [
        { ATK: 319, SP: 40.6 },
        { ATK: 347, SP: 45.4 },
      ],
      "5": [
        { ATK: 373, SP: 45.4 },
        { ATK: 401, SP: 50.3 },
      ],
      "6": [
        { ATK: 427, SP: 50.3 },
        { ATK: 454, SP: 55.1 },
      ],
    },
    type: "Sword",
  },
  BlackcliffAgate: {
    name: "Blackcliff Agate",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 42, SP: 12 },
        { ATK: 109, SP: 21.2 },
      ],
      "1": [
        { ATK: 135, SP: 21.2 },
        { ATK: 205, SP: 30.9 },
      ],
      "2": [
        { ATK: 231, SP: 30.9 },
        { ATK: 266, SP: 35.7 },
      ],
      "3": [
        { ATK: 292, SP: 35.7 },
        { ATK: 327, SP: 40.6 },
      ],
      "4": [
        { ATK: 353, SP: 40.6 },
        { ATK: 388, SP: 45.4 },
      ],
      "5": [
        { ATK: 414, SP: 45.4 },
        { ATK: 449, SP: 50.3 },
      ],
      "6": [
        { ATK: 475, SP: 50.3 },
        { ATK: 510, SP: 55.1 },
      ],
    },
    type: "Catalyst",
  },
  BlackcliffLongsword: {
    name: "Blackcliff Longsword",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 44, SP: 8 },
        { ATK: 119, SP: 14.1 },
      ],
      "1": [
        { ATK: 144, SP: 14.1 },
        { ATK: 226, SP: 20.6 },
      ],
      "2": [
        { ATK: 252, SP: 20.6 },
        { ATK: 293, SP: 23.8 },
      ],
      "3": [
        { ATK: 319, SP: 23.8 },
        { ATK: 361, SP: 27.1 },
      ],
      "4": [
        { ATK: 387, SP: 27.1 },
        { ATK: 429, SP: 30.3 },
      ],
      "5": [
        { ATK: 455, SP: 30.3 },
        { ATK: 497, SP: 33.5 },
      ],
      "6": [
        { ATK: 523, SP: 33.5 },
        { ATK: 565, SP: 36.8 },
      ],
    },
    type: "Sword",
  },
  BlackcliffPole: {
    name: "Blackcliff Pole",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 42, SP: 12 },
        { ATK: 109, SP: 21.2 },
      ],
      "1": [
        { ATK: 135, SP: 21.2 },
        { ATK: 205, SP: 30.9 },
      ],
      "2": [
        { ATK: 231, SP: 30.9 },
        { ATK: 266, SP: 35.7 },
      ],
      "3": [
        { ATK: 292, SP: 35.7 },
        { ATK: 327, SP: 40.6 },
      ],
      "4": [
        { ATK: 353, SP: 40.6 },
        { ATK: 388, SP: 45.4 },
      ],
      "5": [
        { ATK: 414, SP: 45.4 },
        { ATK: 449, SP: 50.3 },
      ],
      "6": [
        { ATK: 475, SP: 50.3 },
        { ATK: 510, SP: 55.1 },
      ],
    },
    type: "Polearm",
  },
  BlackcliffSlasher: {
    name: "Blackcliff Slasher",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 42, SP: 12 },
        { ATK: 109, SP: 21.2 },
      ],
      "1": [
        { ATK: 135, SP: 21.2 },
        { ATK: 205, SP: 30.9 },
      ],
      "2": [
        { ATK: 231, SP: 30.9 },
        { ATK: 266, SP: 35.7 },
      ],
      "3": [
        { ATK: 292, SP: 35.7 },
        { ATK: 327, SP: 40.6 },
      ],
      "4": [
        { ATK: 353, SP: 40.6 },
        { ATK: 388, SP: 45.4 },
      ],
      "5": [
        { ATK: 414, SP: 45.4 },
        { ATK: 449, SP: 50.3 },
      ],
      "6": [
        { ATK: 475, SP: 50.3 },
        { ATK: 510, SP: 55.1 },
      ],
    },
    type: "Claymore",
  },
  BlackcliffWarbow: {
    name: "Blackcliff Warbow",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 44, SP: 8 },
        { ATK: 119, SP: 14.1 },
      ],
      "1": [
        { ATK: 144, SP: 14.1 },
        { ATK: 226, SP: 20.6 },
      ],
      "2": [
        { ATK: 252, SP: 20.6 },
        { ATK: 293, SP: 23.8 },
      ],
      "3": [
        { ATK: 319, SP: 23.8 },
        { ATK: 361, SP: 27.1 },
      ],
      "4": [
        { ATK: 387, SP: 27.1 },
        { ATK: 429, SP: 30.3 },
      ],
      "5": [
        { ATK: 455, SP: 30.3 },
        { ATK: 497, SP: 33.5 },
      ],
      "6": [
        { ATK: 523, SP: 33.5 },
        { ATK: 565, SP: 36.8 },
      ],
    },
    type: "Bow",
  },
  CinnabarSpindle: {
    name: "Cinnabar Spindle",
    statBuff: "DEF",
    stats: {
      "0": [
        { ATK: 41, SP: 15 },
        { ATK: 99, SP: 26.5 },
      ],
      "1": [
        { ATK: 125, SP: 26.5 },
        { ATK: 184, SP: 38.7 },
      ],
      "2": [
        { ATK: 210, SP: 38.7 },
        { ATK: 238, SP: 44.7 },
      ],
      "3": [
        { ATK: 264, SP: 44.7 },
        { ATK: 293, SP: 50.8 },
      ],
      "4": [
        { ATK: 319, SP: 50.8 },
        { ATK: 347, SP: 56.8 },
      ],
      "5": [
        { ATK: 373, SP: 56.8 },
        { ATK: 401, SP: 62.9 },
      ],
      "6": [
        { ATK: 427, SP: 62.9 },
        { ATK: 454, SP: 69 },
      ],
    },
    type: "Sword",
  },
  CompoundBow: {
    name: "Compound Bow",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 41, SP: 15 },
        { ATK: 99, SP: 26.5 },
      ],
      "1": [
        { ATK: 125, SP: 26.5 },
        { ATK: 184, SP: 38.7 },
      ],
      "2": [
        { ATK: 210, SP: 38.7 },
        { ATK: 238, SP: 44.7 },
      ],
      "3": [
        { ATK: 264, SP: 44.7 },
        { ATK: 293, SP: 50.8 },
      ],
      "4": [
        { ATK: 319, SP: 50.8 },
        { ATK: 347, SP: 56.8 },
      ],
      "5": [
        { ATK: 373, SP: 56.8 },
        { ATK: 401, SP: 62.9 },
      ],
      "6": [
        { ATK: 427, SP: 62.9 },
        { ATK: 454, SP: 69 },
      ],
    },
    type: "Bow",
  },
  CrescentPike: {
    name: "Crescent Pike",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 44, SP: 7.5 },
        { ATK: 119, SP: 13.3 },
      ],
      "1": [
        { ATK: 144, SP: 13.3 },
        { ATK: 226, SP: 19.3 },
      ],
      "2": [
        { ATK: 252, SP: 19.3 },
        { ATK: 293, SP: 22.4 },
      ],
      "3": [
        { ATK: 319, SP: 22.4 },
        { ATK: 361, SP: 25.4 },
      ],
      "4": [
        { ATK: 387, SP: 25.4 },
        { ATK: 429, SP: 28.4 },
      ],
      "5": [
        { ATK: 455, SP: 28.4 },
        { ATK: 497, SP: 31.5 },
      ],
      "6": [
        { ATK: 523, SP: 31.5 },
        { ATK: 565, SP: 34.5 },
      ],
    },
    type: "Polearm",
  },
  Deathmatch: {
    name: "Deathmatch",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 41, SP: 8 },
        { ATK: 99, SP: 14.1 },
      ],
      "1": [
        { ATK: 125, SP: 14.1 },
        { ATK: 184, SP: 20.6 },
      ],
      "2": [
        { ATK: 210, SP: 20.6 },
        { ATK: 238, SP: 23.8 },
      ],
      "3": [
        { ATK: 264, SP: 23.8 },
        { ATK: 293, SP: 27.1 },
      ],
      "4": [
        { ATK: 319, SP: 27.1 },
        { ATK: 347, SP: 30.3 },
      ],
      "5": [
        { ATK: 373, SP: 30.3 },
        { ATK: 401, SP: 33.5 },
      ],
      "6": [
        { ATK: 427, SP: 33.5 },
        { ATK: 454, SP: 36.8 },
      ],
    },
    type: "Polearm",
  },
  DodocoTales: {
    name: "Dodoco Tales",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 41, SP: 12 },
        { ATK: 99, SP: 21.2 },
      ],
      "1": [
        { ATK: 125, SP: 21.2 },
        { ATK: 184, SP: 30.9 },
      ],
      "2": [
        { ATK: 210, SP: 30.9 },
        { ATK: 238, SP: 35.7 },
      ],
      "3": [
        { ATK: 264, SP: 35.7 },
        { ATK: 293, SP: 40.6 },
      ],
      "4": [
        { ATK: 319, SP: 40.6 },
        { ATK: 347, SP: 45.4 },
      ],
      "5": [
        { ATK: 373, SP: 45.4 },
        { ATK: 401, SP: 50.3 },
      ],
      "6": [
        { ATK: 427, SP: 50.3 },
        { ATK: 454, SP: 55.1 },
      ],
    },
    type: "Catalyst",
  },
  DragonsBane: {
    name: "Dragon's Bane",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 41, SP: 48 },
        { ATK: 99, SP: 85 },
      ],
      "1": [
        { ATK: 125, SP: 85 },
        { ATK: 184, SP: 124 },
      ],
      "2": [
        { ATK: 210, SP: 124 },
        { ATK: 238, SP: 143 },
      ],
      "3": [
        { ATK: 264, SP: 143 },
        { ATK: 293, SP: 162 },
      ],
      "4": [
        { ATK: 319, SP: 162 },
        { ATK: 347, SP: 182 },
      ],
      "5": [
        { ATK: 373, SP: 182 },
        { ATK: 401, SP: 201 },
      ],
      "6": [
        { ATK: 427, SP: 201 },
        { ATK: 454, SP: 221 },
      ],
    },
    type: "Polearm",
  },
  DragonspineSpear: {
    name: "Dragonspine Spear",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 41, SP: 15 },
        { ATK: 99, SP: 26.5 },
      ],
      "1": [
        { ATK: 125, SP: 26.5 },
        { ATK: 184, SP: 38.7 },
      ],
      "2": [
        { ATK: 210, SP: 38.7 },
        { ATK: 238, SP: 44.7 },
      ],
      "3": [
        { ATK: 264, SP: 44.7 },
        { ATK: 293, SP: 50.8 },
      ],
      "4": [
        { ATK: 319, SP: 50.8 },
        { ATK: 347, SP: 56.8 },
      ],
      "5": [
        { ATK: 373, SP: 56.8 },
        { ATK: 401, SP: 62.9 },
      ],
      "6": [
        { ATK: 427, SP: 62.9 },
        { ATK: 454, SP: 69 },
      ],
    },
    type: "Polearm",
  },
  EndOfTheLine: {
    name: "End of the Line",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 42, SP: 10 },
        { ATK: 109, SP: 17.7 },
      ],
      "1": [
        { ATK: 135, SP: 17.7 },
        { ATK: 205, SP: 25.8 },
      ],
      "2": [
        { ATK: 231, SP: 25.8 },
        { ATK: 266, SP: 29.8 },
      ],
      "3": [
        { ATK: 292, SP: 29.8 },
        { ATK: 327, SP: 33.8 },
      ],
      "4": [
        { ATK: 353, SP: 33.8 },
        { ATK: 388, SP: 37.9 },
      ],
      "5": [
        { ATK: 414, SP: 37.9 },
        { ATK: 449, SP: 41.9 },
      ],
      "6": [
        { ATK: 475, SP: 41.9 },
        { ATK: 510, SP: 45.9 },
      ],
    },
    type: "Bow",
  },
  EyeOfPerception: {
    name: "Eye of Perception",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 41, SP: 12 },
        { ATK: 99, SP: 21.2 },
      ],
      "1": [
        { ATK: 125, SP: 21.2 },
        { ATK: 184, SP: 30.9 },
      ],
      "2": [
        { ATK: 210, SP: 30.9 },
        { ATK: 238, SP: 35.7 },
      ],
      "3": [
        { ATK: 264, SP: 35.7 },
        { ATK: 293, SP: 40.6 },
      ],
      "4": [
        { ATK: 319, SP: 40.6 },
        { ATK: 347, SP: 45.4 },
      ],
      "5": [
        { ATK: 373, SP: 45.4 },
        { ATK: 401, SP: 50.3 },
      ],
      "6": [
        { ATK: 427, SP: 50.3 },
        { ATK: 454, SP: 55.1 },
      ],
    },
    type: "Catalyst",
  },
  FadingTwilight: {
    name: "Fading Twilight",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 44, SP: 6.7 },
        { ATK: 119, SP: 11.8 },
      ],
      "1": [
        { ATK: 144, SP: 11.8 },
        { ATK: 226, SP: 17.2 },
      ],
      "2": [
        { ATK: 252, SP: 17.2 },
        { ATK: 293, SP: 19.9 },
      ],
      "3": [
        { ATK: 319, SP: 19.9 },
        { ATK: 361, SP: 22.6 },
      ],
      "4": [
        { ATK: 387, SP: 22.6 },
        { ATK: 429, SP: 25.2 },
      ],
      "5": [
        { ATK: 455, SP: 25.2 },
        { ATK: 497, SP: 27.9 },
      ],
      "6": [
        { ATK: 523, SP: 27.9 },
        { ATK: 565, SP: 30.6 },
      ],
    },
    type: "Bow",
  },
  FavoniusCodex: {
    name: "Favonius Codex",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 42, SP: 10 },
        { ATK: 109, SP: 17.7 },
      ],
      "1": [
        { ATK: 135, SP: 17.7 },
        { ATK: 205, SP: 25.8 },
      ],
      "2": [
        { ATK: 231, SP: 25.8 },
        { ATK: 266, SP: 29.8 },
      ],
      "3": [
        { ATK: 292, SP: 29.8 },
        { ATK: 327, SP: 33.8 },
      ],
      "4": [
        { ATK: 353, SP: 33.8 },
        { ATK: 388, SP: 37.9 },
      ],
      "5": [
        { ATK: 414, SP: 37.9 },
        { ATK: 449, SP: 41.9 },
      ],
      "6": [
        { ATK: 475, SP: 41.9 },
        { ATK: 510, SP: 45.9 },
      ],
    },
    type: "Catalyst",
  },
  FavoniusGreatsword: {
    name: "Favonius Greatsword",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 41, SP: 13.3 },
        { ATK: 99, SP: 23.6 },
      ],
      "1": [
        { ATK: 125, SP: 23.6 },
        { ATK: 184, SP: 34.3 },
      ],
      "2": [
        { ATK: 210, SP: 34.3 },
        { ATK: 238, SP: 39.7 },
      ],
      "3": [
        { ATK: 264, SP: 39.7 },
        { ATK: 293, SP: 45.1 },
      ],
      "4": [
        { ATK: 319, SP: 45.1 },
        { ATK: 347, SP: 50.5 },
      ],
      "5": [
        { ATK: 373, SP: 50.5 },
        { ATK: 401, SP: 55.9 },
      ],
      "6": [
        { ATK: 427, SP: 55.9 },
        { ATK: 454, SP: 61.3 },
      ],
    },
    type: "Claymore",
  },
  FavoniusLance: {
    name: "Favonius Lance",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 44, SP: 6.7 },
        { ATK: 119, SP: 11.8 },
      ],
      "1": [
        { ATK: 144, SP: 11.8 },
        { ATK: 226, SP: 17.2 },
      ],
      "2": [
        { ATK: 252, SP: 17.2 },
        { ATK: 293, SP: 19.9 },
      ],
      "3": [
        { ATK: 319, SP: 19.9 },
        { ATK: 361, SP: 22.6 },
      ],
      "4": [
        { ATK: 387, SP: 22.6 },
        { ATK: 429, SP: 25.2 },
      ],
      "5": [
        { ATK: 455, SP: 25.2 },
        { ATK: 497, SP: 27.9 },
      ],
      "6": [
        { ATK: 523, SP: 27.9 },
        { ATK: 565, SP: 30.6 },
      ],
    },
    type: "Polearm",
  },
  FavoniusSword: {
    name: "Favonius Sword",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 41, SP: 13.3 },
        { ATK: 99, SP: 23.6 },
      ],
      "1": [
        { ATK: 125, SP: 23.6 },
        { ATK: 184, SP: 34.3 },
      ],
      "2": [
        { ATK: 210, SP: 34.3 },
        { ATK: 238, SP: 39.7 },
      ],
      "3": [
        { ATK: 264, SP: 39.7 },
        { ATK: 293, SP: 45.1 },
      ],
      "4": [
        { ATK: 319, SP: 45.1 },
        { ATK: 347, SP: 50.5 },
      ],
      "5": [
        { ATK: 373, SP: 50.5 },
        { ATK: 401, SP: 55.9 },
      ],
      "6": [
        { ATK: 427, SP: 55.9 },
        { ATK: 454, SP: 61.3 },
      ],
    },
    type: "Sword",
  },
  FavoniusWarbow: {
    name: "Favonius Warbow",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 41, SP: 13.3 },
        { ATK: 99, SP: 23.6 },
      ],
      "1": [
        { ATK: 125, SP: 23.6 },
        { ATK: 184, SP: 34.3 },
      ],
      "2": [
        { ATK: 210, SP: 34.3 },
        { ATK: 238, SP: 39.7 },
      ],
      "3": [
        { ATK: 264, SP: 39.7 },
        { ATK: 293, SP: 45.1 },
      ],
      "4": [
        { ATK: 319, SP: 45.1 },
        { ATK: 347, SP: 50.5 },
      ],
      "5": [
        { ATK: 373, SP: 50.5 },
        { ATK: 401, SP: 55.9 },
      ],
      "6": [
        { ATK: 427, SP: 55.9 },
        { ATK: 454, SP: 61.3 },
      ],
    },
    type: "Bow",
  },
  FesteringDesire: {
    name: "Festering Desire",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 42, SP: 10 },
        { ATK: 109, SP: 17.7 },
      ],
      "1": [
        { ATK: 135, SP: 17.7 },
        { ATK: 205, SP: 25.8 },
      ],
      "2": [
        { ATK: 231, SP: 25.8 },
        { ATK: 266, SP: 29.8 },
      ],
      "3": [
        { ATK: 292, SP: 29.8 },
        { ATK: 327, SP: 33.8 },
      ],
      "4": [
        { ATK: 353, SP: 33.8 },
        { ATK: 388, SP: 37.9 },
      ],
      "5": [
        { ATK: 414, SP: 37.9 },
        { ATK: 449, SP: 41.9 },
      ],
      "6": [
        { ATK: 475, SP: 41.9 },
        { ATK: 510, SP: 45.9 },
      ],
    },
    type: "Sword",
  },
  ForestRegalia: {
    name: "Forest Regalia",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 44, SP: 6.7 },
        { ATK: 119, SP: 11.8 },
      ],
      "1": [
        { ATK: 144, SP: 11.8 },
        { ATK: 226, SP: 17.2 },
      ],
      "2": [
        { ATK: 252, SP: 17.2 },
        { ATK: 293, SP: 19.9 },
      ],
      "3": [
        { ATK: 319, SP: 19.9 },
        { ATK: 361, SP: 22.6 },
      ],
      "4": [
        { ATK: 387, SP: 22.6 },
        { ATK: 429, SP: 25.2 },
      ],
      "5": [
        { ATK: 455, SP: 25.2 },
        { ATK: 497, SP: 27.9 },
      ],
      "6": [
        { ATK: 523, SP: 27.9 },
        { ATK: 565, SP: 30.6 },
      ],
    },
    type: "Claymore",
  },
  Frostbearer: {
    name: "Frostbearer",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Catalyst",
  },
  FruitOfFulfillment: {
    name: "Fruit of Fulfillment",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 42, SP: 10 },
        { ATK: 109, SP: 17.7 },
      ],
      "1": [
        { ATK: 135, SP: 17.7 },
        { ATK: 205, SP: 25.8 },
      ],
      "2": [
        { ATK: 231, SP: 25.8 },
        { ATK: 266, SP: 29.8 },
      ],
      "3": [
        { ATK: 292, SP: 29.8 },
        { ATK: 327, SP: 33.8 },
      ],
      "4": [
        { ATK: 353, SP: 33.8 },
        { ATK: 388, SP: 37.9 },
      ],
      "5": [
        { ATK: 414, SP: 37.9 },
        { ATK: 449, SP: 41.9 },
      ],
      "6": [
        { ATK: 475, SP: 41.9 },
        { ATK: 510, SP: 45.9 },
      ],
    },
    type: "Catalyst",
  },
  HakushinRing: {
    name: "Hakushin Ring",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 44, SP: 6.7 },
        { ATK: 119, SP: 11.8 },
      ],
      "1": [
        { ATK: 144, SP: 11.8 },
        { ATK: 226, SP: 17.2 },
      ],
      "2": [
        { ATK: 252, SP: 17.2 },
        { ATK: 293, SP: 19.9 },
      ],
      "3": [
        { ATK: 319, SP: 19.9 },
        { ATK: 361, SP: 22.6 },
      ],
      "4": [
        { ATK: 387, SP: 22.6 },
        { ATK: 429, SP: 25.2 },
      ],
      "5": [
        { ATK: 455, SP: 25.2 },
        { ATK: 497, SP: 27.9 },
      ],
      "6": [
        { ATK: 523, SP: 27.9 },
        { ATK: 565, SP: 30.6 },
      ],
    },
    type: "Catalyst",
  },
  Hamayumi: {
    name: "Hamayumi",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 41, SP: 12 },
        { ATK: 99, SP: 21.2 },
      ],
      "1": [
        { ATK: 125, SP: 21.2 },
        { ATK: 184, SP: 30.9 },
      ],
      "2": [
        { ATK: 210, SP: 30.9 },
        { ATK: 238, SP: 35.7 },
      ],
      "3": [
        { ATK: 264, SP: 35.7 },
        { ATK: 293, SP: 40.6 },
      ],
      "4": [
        { ATK: 319, SP: 40.6 },
        { ATK: 347, SP: 45.4 },
      ],
      "5": [
        { ATK: 373, SP: 45.4 },
        { ATK: 401, SP: 50.3 },
      ],
      "6": [
        { ATK: 427, SP: 50.3 },
        { ATK: 454, SP: 55.1 },
      ],
    },
    type: "Bow",
  },
  IronSting: {
    name: "Iron Sting",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 42, SP: 36 },
        { ATK: 109, SP: 64 },
      ],
      "1": [
        { ATK: 135, SP: 64 },
        { ATK: 205, SP: 93 },
      ],
      "2": [
        { ATK: 231, SP: 93 },
        { ATK: 266, SP: 107 },
      ],
      "3": [
        { ATK: 292, SP: 107 },
        { ATK: 327, SP: 122 },
      ],
      "4": [
        { ATK: 353, SP: 122 },
        { ATK: 388, SP: 136 },
      ],
      "5": [
        { ATK: 414, SP: 136 },
        { ATK: 449, SP: 151 },
      ],
      "6": [
        { ATK: 475, SP: 151 },
        { ATK: 510, SP: 165 },
      ],
    },
    type: "Sword",
  },
  KagotsurubeIsshin: {
    name: "Kagotsurube Isshin",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Sword",
  },
  KatsuragikiriNagamasa: {
    name: "Katsuragikiri Nagamasa",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 42, SP: 10 },
        { ATK: 109, SP: 17.7 },
      ],
      "1": [
        { ATK: 135, SP: 17.7 },
        { ATK: 205, SP: 25.8 },
      ],
      "2": [
        { ATK: 231, SP: 25.8 },
        { ATK: 266, SP: 29.8 },
      ],
      "3": [
        { ATK: 292, SP: 29.8 },
        { ATK: 327, SP: 33.8 },
      ],
      "4": [
        { ATK: 353, SP: 33.8 },
        { ATK: 388, SP: 37.9 },
      ],
      "5": [
        { ATK: 414, SP: 37.9 },
        { ATK: 449, SP: 41.9 },
      ],
      "6": [
        { ATK: 475, SP: 41.9 },
        { ATK: 510, SP: 45.9 },
      ],
    },
    type: "Claymore",
  },
  KingsSquire: {
    name: "King's Squire",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 41, SP: 12 },
        { ATK: 99, SP: 21.2 },
      ],
      "1": [
        { ATK: 125, SP: 21.2 },
        { ATK: 184, SP: 30.9 },
      ],
      "2": [
        { ATK: 210, SP: 30.9 },
        { ATK: 238, SP: 35.7 },
      ],
      "3": [
        { ATK: 264, SP: 35.7 },
        { ATK: 293, SP: 40.6 },
      ],
      "4": [
        { ATK: 319, SP: 40.6 },
        { ATK: 347, SP: 45.4 },
      ],
      "5": [
        { ATK: 373, SP: 45.4 },
        { ATK: 401, SP: 50.3 },
      ],
      "6": [
        { ATK: 427, SP: 50.3 },
        { ATK: 454, SP: 55.1 },
      ],
    },
    type: "Bow",
  },
  KitainCrossSpear: {
    name: "Kitain Cross Spear",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 44, SP: 24 },
        { ATK: 119, SP: 42 },
      ],
      "1": [
        { ATK: 144, SP: 42 },
        { ATK: 226, SP: 62 },
      ],
      "2": [
        { ATK: 252, SP: 62 },
        { ATK: 293, SP: 71 },
      ],
      "3": [
        { ATK: 319, SP: 71 },
        { ATK: 361, SP: 81 },
      ],
      "4": [
        { ATK: 387, SP: 81 },
        { ATK: 429, SP: 91 },
      ],
      "5": [
        { ATK: 455, SP: 91 },
        { ATK: 497, SP: 101 },
      ],
      "6": [
        { ATK: 523, SP: 101 },
        { ATK: 565, SP: 110 },
      ],
    },
    type: "Polearm",
  },
  LionsRoar: {
    name: "Lion's Roar",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Sword",
  },
  LithicBlade: {
    name: "Lithic Blade",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Claymore",
  },
  LithicSpear: {
    name: "Lithic Spear",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 44, SP: 6 },
        { ATK: 119, SP: 10.6 },
      ],
      "1": [
        { ATK: 144, SP: 10.6 },
        { ATK: 226, SP: 15.5 },
      ],
      "2": [
        { ATK: 252, SP: 15.5 },
        { ATK: 293, SP: 17.9 },
      ],
      "3": [
        { ATK: 319, SP: 17.9 },
        { ATK: 361, SP: 20.3 },
      ],
      "4": [
        { ATK: 387, SP: 20.3 },
        { ATK: 429, SP: 22.7 },
      ],
      "5": [
        { ATK: 455, SP: 22.7 },
        { ATK: 497, SP: 25.1 },
      ],
      "6": [
        { ATK: 523, SP: 25.1 },
        { ATK: 565, SP: 27.6 },
      ],
    },
    type: "Polearm",
  },
  LuxuriousSeaLord: {
    name: "Luxurious Sea-Lord",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 41, SP: 12 },
        { ATK: 99, SP: 21.2 },
      ],
      "1": [
        { ATK: 125, SP: 21.2 },
        { ATK: 184, SP: 30.9 },
      ],
      "2": [
        { ATK: 210, SP: 30.9 },
        { ATK: 238, SP: 35.7 },
      ],
      "3": [
        { ATK: 264, SP: 35.7 },
        { ATK: 293, SP: 40.6 },
      ],
      "4": [
        { ATK: 319, SP: 40.6 },
        { ATK: 347, SP: 45.4 },
      ],
      "5": [
        { ATK: 373, SP: 45.4 },
        { ATK: 401, SP: 50.3 },
      ],
      "6": [
        { ATK: 427, SP: 50.3 },
        { ATK: 454, SP: 55.1 },
      ],
    },
    type: "Claymore",
  },
  MakhairaAquamarine: {
    name: "Makhaira Aquamarine",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 42, SP: 36 },
        { ATK: 109, SP: 64 },
      ],
      "1": [
        { ATK: 135, SP: 64 },
        { ATK: 205, SP: 93 },
      ],
      "2": [
        { ATK: 231, SP: 93 },
        { ATK: 266, SP: 107 },
      ],
      "3": [
        { ATK: 292, SP: 107 },
        { ATK: 327, SP: 122 },
      ],
      "4": [
        { ATK: 353, SP: 122 },
        { ATK: 388, SP: 136 },
      ],
      "5": [
        { ATK: 414, SP: 136 },
        { ATK: 449, SP: 151 },
      ],
      "6": [
        { ATK: 475, SP: 151 },
        { ATK: 510, SP: 165 },
      ],
    },
    type: "Claymore",
  },
  MappaMare: {
    name: "Mappa Mare",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 44, SP: 24 },
        { ATK: 119, SP: 42 },
      ],
      "1": [
        { ATK: 144, SP: 42 },
        { ATK: 226, SP: 62 },
      ],
      "2": [
        { ATK: 252, SP: 62 },
        { ATK: 293, SP: 71 },
      ],
      "3": [
        { ATK: 319, SP: 71 },
        { ATK: 361, SP: 81 },
      ],
      "4": [
        { ATK: 387, SP: 81 },
        { ATK: 429, SP: 91 },
      ],
      "5": [
        { ATK: 455, SP: 91 },
        { ATK: 497, SP: 101 },
      ],
      "6": [
        { ATK: 523, SP: 101 },
        { ATK: 565, SP: 110 },
      ],
    },
    type: "Catalyst",
  },
  MissiveWindspear: {
    name: "Missive Windspear",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Polearm",
  },
  MitternachtsWaltz: {
    name: "Mitternachts Waltz",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 42, SP: 11.3 },
        { ATK: 109, SP: 20 },
      ],
      "1": [
        { ATK: 135, SP: 20 },
        { ATK: 205, SP: 29 },
      ],
      "2": [
        { ATK: 231, SP: 29 },
        { ATK: 266, SP: 33.5 },
      ],
      "3": [
        { ATK: 292, SP: 33.5 },
        { ATK: 327, SP: 38.1 },
      ],
      "4": [
        { ATK: 353, SP: 38.1 },
        { ATK: 388, SP: 42.6 },
      ],
      "5": [
        { ATK: 414, SP: 42.6 },
        { ATK: 449, SP: 47.2 },
      ],
      "6": [
        { ATK: 475, SP: 47.2 },
        { ATK: 510, SP: 51.7 },
      ],
    },
    type: "Bow",
  },
  Moonpiercer: {
    name: "Moonpiercer",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 44, SP: 24 },
        { ATK: 119, SP: 42 },
      ],
      "1": [
        { ATK: 144, SP: 42 },
        { ATK: 226, SP: 62 },
      ],
      "2": [
        { ATK: 252, SP: 62 },
        { ATK: 293, SP: 71 },
      ],
      "3": [
        { ATK: 319, SP: 71 },
        { ATK: 361, SP: 81 },
      ],
      "4": [
        { ATK: 387, SP: 81 },
        { ATK: 429, SP: 91 },
      ],
      "5": [
        { ATK: 455, SP: 91 },
        { ATK: 497, SP: 101 },
      ],
      "6": [
        { ATK: 523, SP: 101 },
        { ATK: 565, SP: 110 },
      ],
    },
    type: "Polearm",
  },
  MouunsMoon: {
    name: "Mouun's Moon",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 44, SP: 6 },
        { ATK: 119, SP: 10.6 },
      ],
      "1": [
        { ATK: 144, SP: 10.6 },
        { ATK: 226, SP: 15.5 },
      ],
      "2": [
        { ATK: 252, SP: 15.5 },
        { ATK: 293, SP: 17.9 },
      ],
      "3": [
        { ATK: 319, SP: 17.9 },
        { ATK: 361, SP: 20.3 },
      ],
      "4": [
        { ATK: 387, SP: 20.3 },
        { ATK: 429, SP: 22.7 },
      ],
      "5": [
        { ATK: 455, SP: 22.7 },
        { ATK: 497, SP: 25.1 },
      ],
      "6": [
        { ATK: 523, SP: 25.1 },
        { ATK: 565, SP: 27.6 },
      ],
    },
    type: "Bow",
  },
  OathswornEye: {
    name: "Oathsworn Eye",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 44, SP: 6 },
        { ATK: 119, SP: 10.6 },
      ],
      "1": [
        { ATK: 144, SP: 10.6 },
        { ATK: 226, SP: 15.5 },
      ],
      "2": [
        { ATK: 252, SP: 15.5 },
        { ATK: 293, SP: 17.9 },
      ],
      "3": [
        { ATK: 319, SP: 17.9 },
        { ATK: 361, SP: 20.3 },
      ],
      "4": [
        { ATK: 387, SP: 20.3 },
        { ATK: 429, SP: 22.7 },
      ],
      "5": [
        { ATK: 455, SP: 22.7 },
        { ATK: 497, SP: 25.1 },
      ],
      "6": [
        { ATK: 523, SP: 25.1 },
        { ATK: 565, SP: 27.6 },
      ],
    },
    type: "Catalyst",
  },
  Predator: {
    name: "Predator",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Bow",
  },
  PrototypeAmber: {
    name: "Prototype Amber",
    statBuff: "HP",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Catalyst",
  },
  PrototypeArchaic: {
    name: "Prototype Archaic",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 44, SP: 6 },
        { ATK: 119, SP: 10.6 },
      ],
      "1": [
        { ATK: 144, SP: 10.6 },
        { ATK: 226, SP: 15.5 },
      ],
      "2": [
        { ATK: 252, SP: 15.5 },
        { ATK: 293, SP: 17.9 },
      ],
      "3": [
        { ATK: 319, SP: 17.9 },
        { ATK: 361, SP: 20.3 },
      ],
      "4": [
        { ATK: 387, SP: 20.3 },
        { ATK: 429, SP: 22.7 },
      ],
      "5": [
        { ATK: 455, SP: 22.7 },
        { ATK: 497, SP: 25.1 },
      ],
      "6": [
        { ATK: 523, SP: 25.1 },
        { ATK: 565, SP: 27.6 },
      ],
    },
    type: "Claymore",
  },
  PrototypeCrescent: {
    name: "Prototype Crescent",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Bow",
  },
  PrototypeRancour: {
    name: "Prototype Rancour",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 44, SP: 7.5 },
        { ATK: 119, SP: 13.3 },
      ],
      "1": [
        { ATK: 144, SP: 13.3 },
        { ATK: 226, SP: 19.3 },
      ],
      "2": [
        { ATK: 252, SP: 19.3 },
        { ATK: 293, SP: 22.4 },
      ],
      "3": [
        { ATK: 319, SP: 22.4 },
        { ATK: 361, SP: 25.4 },
      ],
      "4": [
        { ATK: 387, SP: 25.4 },
        { ATK: 429, SP: 28.4 },
      ],
      "5": [
        { ATK: 455, SP: 28.4 },
        { ATK: 497, SP: 31.5 },
      ],
      "6": [
        { ATK: 523, SP: 31.5 },
        { ATK: 565, SP: 34.5 },
      ],
    },
    type: "Sword",
  },
  PrototypeStarglitter: {
    name: "Prototype Starglitter",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 42, SP: 10 },
        { ATK: 109, SP: 17.7 },
      ],
      "1": [
        { ATK: 135, SP: 17.7 },
        { ATK: 205, SP: 25.8 },
      ],
      "2": [
        { ATK: 231, SP: 25.8 },
        { ATK: 266, SP: 29.8 },
      ],
      "3": [
        { ATK: 292, SP: 29.8 },
        { ATK: 327, SP: 33.8 },
      ],
      "4": [
        { ATK: 353, SP: 33.8 },
        { ATK: 388, SP: 37.9 },
      ],
      "5": [
        { ATK: 414, SP: 37.9 },
        { ATK: 449, SP: 41.9 },
      ],
      "6": [
        { ATK: 475, SP: 41.9 },
        { ATK: 510, SP: 45.9 },
      ],
    },
    type: "Polearm",
  },
  Rainslasher: {
    name: "Rainslasher",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 42, SP: 36 },
        { ATK: 109, SP: 64 },
      ],
      "1": [
        { ATK: 135, SP: 64 },
        { ATK: 205, SP: 93 },
      ],
      "2": [
        { ATK: 231, SP: 93 },
        { ATK: 266, SP: 107 },
      ],
      "3": [
        { ATK: 292, SP: 107 },
        { ATK: 327, SP: 122 },
      ],
      "4": [
        { ATK: 353, SP: 122 },
        { ATK: 388, SP: 136 },
      ],
      "5": [
        { ATK: 414, SP: 136 },
        { ATK: 449, SP: 151 },
      ],
      "6": [
        { ATK: 475, SP: 151 },
        { ATK: 510, SP: 165 },
      ],
    },
    type: "Claymore",
  },
  RoyalBow: {
    name: "Royal Bow",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Bow",
  },
  RoyalGreatsword: {
    name: "Royal Greatsword",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 44, SP: 6 },
        { ATK: 119, SP: 10.6 },
      ],
      "1": [
        { ATK: 144, SP: 10.6 },
        { ATK: 226, SP: 15.5 },
      ],
      "2": [
        { ATK: 252, SP: 15.5 },
        { ATK: 293, SP: 17.9 },
      ],
      "3": [
        { ATK: 319, SP: 17.9 },
        { ATK: 361, SP: 20.3 },
      ],
      "4": [
        { ATK: 387, SP: 20.3 },
        { ATK: 429, SP: 22.7 },
      ],
      "5": [
        { ATK: 455, SP: 22.7 },
        { ATK: 497, SP: 25.1 },
      ],
      "6": [
        { ATK: 523, SP: 25.1 },
        { ATK: 565, SP: 27.6 },
      ],
    },
    type: "Claymore",
  },
  RoyalGrimoire: {
    name: "Royal Grimoire",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 44, SP: 6 },
        { ATK: 119, SP: 10.6 },
      ],
      "1": [
        { ATK: 144, SP: 10.6 },
        { ATK: 226, SP: 15.5 },
      ],
      "2": [
        { ATK: 252, SP: 15.5 },
        { ATK: 293, SP: 17.9 },
      ],
      "3": [
        { ATK: 319, SP: 17.9 },
        { ATK: 361, SP: 20.3 },
      ],
      "4": [
        { ATK: 387, SP: 20.3 },
        { ATK: 429, SP: 22.7 },
      ],
      "5": [
        { ATK: 455, SP: 22.7 },
        { ATK: 497, SP: 25.1 },
      ],
      "6": [
        { ATK: 523, SP: 25.1 },
        { ATK: 565, SP: 27.6 },
      ],
    },
    type: "Catalyst",
  },
  RoyalLongsword: {
    name: "Royal Longsword",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Sword",
  },
  RoyalSpear: {
    name: "Royal Spear",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 44, SP: 6 },
        { ATK: 119, SP: 10.6 },
      ],
      "1": [
        { ATK: 144, SP: 10.6 },
        { ATK: 226, SP: 15.5 },
      ],
      "2": [
        { ATK: 252, SP: 15.5 },
        { ATK: 293, SP: 17.9 },
      ],
      "3": [
        { ATK: 319, SP: 17.9 },
        { ATK: 361, SP: 20.3 },
      ],
      "4": [
        { ATK: 387, SP: 20.3 },
        { ATK: 429, SP: 22.7 },
      ],
      "5": [
        { ATK: 455, SP: 22.7 },
        { ATK: 497, SP: 25.1 },
      ],
      "6": [
        { ATK: 523, SP: 25.1 },
        { ATK: 565, SP: 27.6 },
      ],
    },
    type: "Polearm",
  },
  Rust: {
    name: "Rust",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Bow",
  },
  SacrificialBow: {
    name: "Sacrificial Bow",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 44, SP: 6.7 },
        { ATK: 119, SP: 11.8 },
      ],
      "1": [
        { ATK: 144, SP: 11.8 },
        { ATK: 226, SP: 17.2 },
      ],
      "2": [
        { ATK: 252, SP: 17.2 },
        { ATK: 293, SP: 19.9 },
      ],
      "3": [
        { ATK: 319, SP: 19.9 },
        { ATK: 361, SP: 22.6 },
      ],
      "4": [
        { ATK: 387, SP: 22.6 },
        { ATK: 429, SP: 25.2 },
      ],
      "5": [
        { ATK: 455, SP: 25.2 },
        { ATK: 497, SP: 27.9 },
      ],
      "6": [
        { ATK: 523, SP: 27.9 },
        { ATK: 565, SP: 30.6 },
      ],
    },
    type: "Bow",
  },
  SacrificialFragments: {
    name: "Sacrificial Fragments",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 41, SP: 48 },
        { ATK: 99, SP: 85 },
      ],
      "1": [
        { ATK: 125, SP: 85 },
        { ATK: 184, SP: 124 },
      ],
      "2": [
        { ATK: 210, SP: 124 },
        { ATK: 238, SP: 143 },
      ],
      "3": [
        { ATK: 264, SP: 143 },
        { ATK: 293, SP: 162 },
      ],
      "4": [
        { ATK: 319, SP: 162 },
        { ATK: 347, SP: 182 },
      ],
      "5": [
        { ATK: 373, SP: 182 },
        { ATK: 401, SP: 201 },
      ],
      "6": [
        { ATK: 427, SP: 201 },
        { ATK: 454, SP: 221 },
      ],
    },
    type: "Catalyst",
  },
  SacrificialGreatsword: {
    name: "Sacrificial Greatsword",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 44, SP: 6.7 },
        { ATK: 119, SP: 11.8 },
      ],
      "1": [
        { ATK: 144, SP: 11.8 },
        { ATK: 226, SP: 17.2 },
      ],
      "2": [
        { ATK: 252, SP: 17.2 },
        { ATK: 293, SP: 19.9 },
      ],
      "3": [
        { ATK: 319, SP: 19.9 },
        { ATK: 361, SP: 22.6 },
      ],
      "4": [
        { ATK: 387, SP: 22.6 },
        { ATK: 429, SP: 25.2 },
      ],
      "5": [
        { ATK: 455, SP: 25.2 },
        { ATK: 497, SP: 27.9 },
      ],
      "6": [
        { ATK: 523, SP: 27.9 },
        { ATK: 565, SP: 30.6 },
      ],
    },
    type: "Claymore",
  },
  SacrificialSword: {
    name: "Sacrificial Sword",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 41, SP: 13.3 },
        { ATK: 99, SP: 23.6 },
      ],
      "1": [
        { ATK: 125, SP: 23.6 },
        { ATK: 184, SP: 34.3 },
      ],
      "2": [
        { ATK: 210, SP: 34.3 },
        { ATK: 238, SP: 39.7 },
      ],
      "3": [
        { ATK: 264, SP: 39.7 },
        { ATK: 293, SP: 45.1 },
      ],
      "4": [
        { ATK: 319, SP: 45.1 },
        { ATK: 347, SP: 50.5 },
      ],
      "5": [
        { ATK: 373, SP: 50.5 },
        { ATK: 401, SP: 55.9 },
      ],
      "6": [
        { ATK: 427, SP: 55.9 },
        { ATK: 454, SP: 61.3 },
      ],
    },
    type: "Sword",
  },
  SapwoodBlade: {
    name: "Sapwood Blade",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 44, SP: 6.7 },
        { ATK: 119, SP: 11.8 },
      ],
      "1": [
        { ATK: 144, SP: 11.8 },
        { ATK: 226, SP: 17.2 },
      ],
      "2": [
        { ATK: 252, SP: 17.2 },
        { ATK: 293, SP: 19.9 },
      ],
      "3": [
        { ATK: 319, SP: 19.9 },
        { ATK: 361, SP: 22.6 },
      ],
      "4": [
        { ATK: 387, SP: 22.6 },
        { ATK: 429, SP: 25.2 },
      ],
      "5": [
        { ATK: 455, SP: 25.2 },
        { ATK: 497, SP: 27.9 },
      ],
      "6": [
        { ATK: 523, SP: 27.9 },
        { ATK: 565, SP: 30.6 },
      ],
    },
    type: "Sword",
  },
  SerpentSpine: {
    name: "Serpent Spine",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 42, SP: 6 },
        { ATK: 109, SP: 10.6 },
      ],
      "1": [
        { ATK: 135, SP: 10.6 },
        { ATK: 205, SP: 15.5 },
      ],
      "2": [
        { ATK: 231, SP: 15.5 },
        { ATK: 266, SP: 17.9 },
      ],
      "3": [
        { ATK: 292, SP: 17.9 },
        { ATK: 327, SP: 20.3 },
      ],
      "4": [
        { ATK: 353, SP: 20.3 },
        { ATK: 388, SP: 22.7 },
      ],
      "5": [
        { ATK: 414, SP: 22.7 },
        { ATK: 449, SP: 25.1 },
      ],
      "6": [
        { ATK: 475, SP: 25.1 },
        { ATK: 510, SP: 27.6 },
      ],
    },
    type: "Claymore",
  },
  SnowTombedStarsilver: {
    name: "Snow-Tombed Starsilver",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 44, SP: 7.5 },
        { ATK: 119, SP: 13.3 },
      ],
      "1": [
        { ATK: 144, SP: 13.3 },
        { ATK: 226, SP: 19.3 },
      ],
      "2": [
        { ATK: 252, SP: 19.3 },
        { ATK: 293, SP: 22.4 },
      ],
      "3": [
        { ATK: 319, SP: 22.4 },
        { ATK: 361, SP: 25.4 },
      ],
      "4": [
        { ATK: 387, SP: 25.4 },
        { ATK: 429, SP: 28.4 },
      ],
      "5": [
        { ATK: 455, SP: 28.4 },
        { ATK: 497, SP: 31.5 },
      ],
      "6": [
        { ATK: 523, SP: 31.5 },
        { ATK: 565, SP: 34.5 },
      ],
    },
    type: "Claymore",
  },
  SolarPearl: {
    name: "Solar Pearl",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 42, SP: 6 },
        { ATK: 109, SP: 10.6 },
      ],
      "1": [
        { ATK: 135, SP: 10.6 },
        { ATK: 205, SP: 15.5 },
      ],
      "2": [
        { ATK: 231, SP: 15.5 },
        { ATK: 266, SP: 17.9 },
      ],
      "3": [
        { ATK: 292, SP: 17.9 },
        { ATK: 327, SP: 20.3 },
      ],
      "4": [
        { ATK: 353, SP: 20.3 },
        { ATK: 388, SP: 22.7 },
      ],
      "5": [
        { ATK: 414, SP: 22.7 },
        { ATK: 449, SP: 25.1 },
      ],
      "6": [
        { ATK: 475, SP: 25.1 },
        { ATK: 510, SP: 27.6 },
      ],
    },
    type: "Catalyst",
  },
  SwordOfDescension: {
    name: "Sword of Descension",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 39, SP: 7.7 },
        { ATK: 94, SP: 13.5 },
      ],
      "1": [
        { ATK: 120, SP: 13.5 },
        { ATK: 176, SP: 19.7 },
      ],
      "2": [
        { ATK: 202, SP: 19.7 },
        { ATK: 229, SP: 22.8 },
      ],
      "3": [
        { ATK: 255, SP: 22.8 },
        { ATK: 282, SP: 25.9 },
      ],
      "4": [
        { ATK: 308, SP: 25.9 },
        { ATK: 335, SP: 29 },
      ],
      "5": [
        { ATK: 361, SP: 29 },
        { ATK: 388, SP: 32.1 },
      ],
      "6": [
        { ATK: 414, SP: 32.1 },
        { ATK: 440, SP: 35.2 },
      ],
    },
    type: "Sword",
  },
  TheAlleyFlash: {
    name: "The Alley Flash",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 45, SP: 12 },
        { ATK: 128, SP: 21 },
      ],
      "1": [
        { ATK: 154, SP: 21 },
        { ATK: 247, SP: 31 },
      ],
      "2": [
        { ATK: 273, SP: 31 },
        { ATK: 321, SP: 36 },
      ],
      "3": [
        { ATK: 347, SP: 36 },
        { ATK: 395, SP: 41 },
      ],
      "4": [
        { ATK: 421, SP: 41 },
        { ATK: 470, SP: 45 },
      ],
      "5": [
        { ATK: 496, SP: 45 },
        { ATK: 545, SP: 50 },
      ],
      "6": [
        { ATK: 571, SP: 50 },
        { ATK: 620, SP: 55 },
      ],
    },
    type: "Sword",
  },
  TheBell: {
    name: "The Bell",
    statBuff: "HP",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Claymore",
  },
  TheBlackSword: {
    name: "The Black Sword",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 42, SP: 6 },
        { ATK: 109, SP: 10.6 },
      ],
      "1": [
        { ATK: 135, SP: 10.6 },
        { ATK: 205, SP: 15.5 },
      ],
      "2": [
        { ATK: 231, SP: 15.5 },
        { ATK: 266, SP: 17.9 },
      ],
      "3": [
        { ATK: 292, SP: 17.9 },
        { ATK: 327, SP: 20.3 },
      ],
      "4": [
        { ATK: 353, SP: 20.3 },
        { ATK: 388, SP: 22.7 },
      ],
      "5": [
        { ATK: 414, SP: 22.7 },
        { ATK: 449, SP: 25.1 },
      ],
      "6": [
        { ATK: 475, SP: 25.1 },
        { ATK: 510, SP: 27.6 },
      ],
    },
    type: "Sword",
  },
  TheFlute: {
    name: "The Flute",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 42, SP: 9 },
        { ATK: 109, SP: 15.9 },
      ],
      "1": [
        { ATK: 135, SP: 15.9 },
        { ATK: 205, SP: 23.2 },
      ],
      "2": [
        { ATK: 231, SP: 23.2 },
        { ATK: 266, SP: 26.8 },
      ],
      "3": [
        { ATK: 292, SP: 26.8 },
        { ATK: 327, SP: 30.4 },
      ],
      "4": [
        { ATK: 353, SP: 30.4 },
        { ATK: 388, SP: 34.1 },
      ],
      "5": [
        { ATK: 414, SP: 34.1 },
        { ATK: 449, SP: 37.7 },
      ],
      "6": [
        { ATK: 475, SP: 37.7 },
        { ATK: 510, SP: 41.3 },
      ],
    },
    type: "Sword",
  },
  TheStringless: {
    name: "The Stringless",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 42, SP: 36 },
        { ATK: 109, SP: 64 },
      ],
      "1": [
        { ATK: 135, SP: 64 },
        { ATK: 205, SP: 93 },
      ],
      "2": [
        { ATK: 231, SP: 93 },
        { ATK: 266, SP: 107 },
      ],
      "3": [
        { ATK: 292, SP: 107 },
        { ATK: 327, SP: 122 },
      ],
      "4": [
        { ATK: 353, SP: 122 },
        { ATK: 388, SP: 136 },
      ],
      "5": [
        { ATK: 414, SP: 136 },
        { ATK: 449, SP: 151 },
      ],
      "6": [
        { ATK: 475, SP: 151 },
        { ATK: 510, SP: 165 },
      ],
    },
    type: "Bow",
  },
  TheViridescentHunt: {
    name: "The Viridescent Hunt",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 42, SP: 6 },
        { ATK: 109, SP: 10.6 },
      ],
      "1": [
        { ATK: 135, SP: 10.6 },
        { ATK: 205, SP: 15.5 },
      ],
      "2": [
        { ATK: 231, SP: 15.5 },
        { ATK: 266, SP: 17.9 },
      ],
      "3": [
        { ATK: 292, SP: 17.9 },
        { ATK: 327, SP: 20.3 },
      ],
      "4": [
        { ATK: 353, SP: 20.3 },
        { ATK: 388, SP: 22.7 },
      ],
      "5": [
        { ATK: 414, SP: 22.7 },
        { ATK: 449, SP: 25.1 },
      ],
      "6": [
        { ATK: 475, SP: 25.1 },
        { ATK: 510, SP: 27.6 },
      ],
    },
    type: "Bow",
  },
  TheWidsith: {
    name: "The Widsith",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 42, SP: 12 },
        { ATK: 109, SP: 21.2 },
      ],
      "1": [
        { ATK: 135, SP: 21.2 },
        { ATK: 205, SP: 30.9 },
      ],
      "2": [
        { ATK: 231, SP: 30.9 },
        { ATK: 266, SP: 35.7 },
      ],
      "3": [
        { ATK: 292, SP: 35.7 },
        { ATK: 327, SP: 40.6 },
      ],
      "4": [
        { ATK: 353, SP: 40.6 },
        { ATK: 388, SP: 45.4 },
      ],
      "5": [
        { ATK: 414, SP: 45.4 },
        { ATK: 449, SP: 50.3 },
      ],
      "6": [
        { ATK: 475, SP: 50.3 },
        { ATK: 510, SP: 55.1 },
      ],
    },
    type: "Catalyst",
  },
  ToukabouShigure: {
    name: "Toukabou Shigure",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 42, SP: 36 },
        { ATK: 109, SP: 64 },
      ],
      "1": [
        { ATK: 135, SP: 64 },
        { ATK: 205, SP: 93 },
      ],
      "2": [
        { ATK: 231, SP: 93 },
        { ATK: 266, SP: 107 },
      ],
      "3": [
        { ATK: 292, SP: 107 },
        { ATK: 327, SP: 122 },
      ],
      "4": [
        { ATK: 353, SP: 122 },
        { ATK: 388, SP: 136 },
      ],
      "5": [
        { ATK: 414, SP: 136 },
        { ATK: 449, SP: 151 },
      ],
      "6": [
        { ATK: 475, SP: 151 },
        { ATK: 510, SP: 165 },
      ],
    },
    type: "Sword",
  },
  WanderingEvenstar: {
    name: "Wandering Evenstar",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 42, SP: 36 },
        { ATK: 109, SP: 64 },
      ],
      "1": [
        { ATK: 135, SP: 64 },
        { ATK: 205, SP: 93 },
      ],
      "2": [
        { ATK: 231, SP: 93 },
        { ATK: 266, SP: 107 },
      ],
      "3": [
        { ATK: 292, SP: 107 },
        { ATK: 327, SP: 122 },
      ],
      "4": [
        { ATK: 353, SP: 122 },
        { ATK: 388, SP: 136 },
      ],
      "5": [
        { ATK: 414, SP: 136 },
        { ATK: 449, SP: 151 },
      ],
      "6": [
        { ATK: 475, SP: 151 },
        { ATK: 510, SP: 165 },
      ],
    },
    type: "Catalyst",
  },
  WavebreakersFin: {
    name: "Wavebreaker's Fin",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 45, SP: 3 },
        { ATK: 128, SP: 5.3 },
      ],
      "1": [
        { ATK: 154, SP: 5.3 },
        { ATK: 247, SP: 7.7 },
      ],
      "2": [
        { ATK: 273, SP: 7.7 },
        { ATK: 321, SP: 8.9 },
      ],
      "3": [
        { ATK: 347, SP: 8.9 },
        { ATK: 395, SP: 10.1 },
      ],
      "4": [
        { ATK: 421, SP: 10.1 },
        { ATK: 470, SP: 11.3 },
      ],
      "5": [
        { ATK: 496, SP: 11.3 },
        { ATK: 545, SP: 12.5 },
      ],
      "6": [
        { ATK: 571, SP: 12.5 },
        { ATK: 620, SP: 13.8 },
      ],
    },
    type: "Polearm",
  },
  Whiteblind: {
    name: "Whiteblind",
    statBuff: "DEF",
    stats: {
      "0": [
        { ATK: 42, SP: 11.3 },
        { ATK: 109, SP: 20 },
      ],
      "1": [
        { ATK: 135, SP: 20 },
        { ATK: 205, SP: 29 },
      ],
      "2": [
        { ATK: 231, SP: 29 },
        { ATK: 266, SP: 33.5 },
      ],
      "3": [
        { ATK: 292, SP: 33.5 },
        { ATK: 327, SP: 38.1 },
      ],
      "4": [
        { ATK: 353, SP: 38.1 },
        { ATK: 388, SP: 42.6 },
      ],
      "5": [
        { ATK: 414, SP: 42.6 },
        { ATK: 449, SP: 47.2 },
      ],
      "6": [
        { ATK: 475, SP: 47.2 },
        { ATK: 510, SP: 51.7 },
      ],
    },
    type: "Claymore",
  },
  WindblumeOde: {
    name: "Windblume Ode",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 42, SP: 36 },
        { ATK: 109, SP: 64 },
      ],
      "1": [
        { ATK: 135, SP: 64 },
        { ATK: 205, SP: 93 },
      ],
      "2": [
        { ATK: 231, SP: 93 },
        { ATK: 266, SP: 107 },
      ],
      "3": [
        { ATK: 292, SP: 107 },
        { ATK: 327, SP: 122 },
      ],
      "4": [
        { ATK: 353, SP: 122 },
        { ATK: 388, SP: 136 },
      ],
      "5": [
        { ATK: 414, SP: 136 },
        { ATK: 449, SP: 151 },
      ],
      "6": [
        { ATK: 475, SP: 151 },
        { ATK: 510, SP: 165 },
      ],
    },
    type: "Bow",
  },
  WineAndSong: {
    name: "Wine and Song",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 44, SP: 6.7 },
        { ATK: 119, SP: 11.8 },
      ],
      "1": [
        { ATK: 144, SP: 11.8 },
        { ATK: 226, SP: 17.2 },
      ],
      "2": [
        { ATK: 252, SP: 17.2 },
        { ATK: 293, SP: 19.9 },
      ],
      "3": [
        { ATK: 319, SP: 19.9 },
        { ATK: 361, SP: 22.6 },
      ],
      "4": [
        { ATK: 387, SP: 22.6 },
        { ATK: 429, SP: 25.2 },
      ],
      "5": [
        { ATK: 455, SP: 25.2 },
        { ATK: 497, SP: 27.9 },
      ],
      "6": [
        { ATK: 523, SP: 27.9 },
        { ATK: 565, SP: 30.6 },
      ],
    },
    type: "Catalyst",
  },
  XiphosMoonlight: {
    name: "Xiphos' Moonlight",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 42, SP: 36 },
        { ATK: 109, SP: 64 },
      ],
      "1": [
        { ATK: 135, SP: 64 },
        { ATK: 205, SP: 93 },
      ],
      "2": [
        { ATK: 231, SP: 93 },
        { ATK: 266, SP: 107 },
      ],
      "3": [
        { ATK: 292, SP: 107 },
        { ATK: 327, SP: 122 },
      ],
      "4": [
        { ATK: 353, SP: 122 },
        { ATK: 388, SP: 136 },
      ],
      "5": [
        { ATK: 414, SP: 136 },
        { ATK: 449, SP: 151 },
      ],
      "6": [
        { ATK: 475, SP: 151 },
        { ATK: 510, SP: 165 },
      ],
    },
    type: "Sword",
  },
  BlackTassel: {
    name: "Black Tassel",
    statBuff: "HP",
    stats: {
      "0": [
        { ATK: 38, SP: 10.2 },
        { ATK: 86, SP: 18 },
      ],
      "1": [
        { ATK: 105, SP: 18 },
        { ATK: 151, SP: 26.3 },
      ],
      "2": [
        { ATK: 171, SP: 26.3 },
        { ATK: 193, SP: 30.4 },
      ],
      "3": [
        { ATK: 212, SP: 30.4 },
        { ATK: 234, SP: 34.6 },
      ],
      "4": [
        { ATK: 253, SP: 34.6 },
        { ATK: 274, SP: 38.6 },
      ],
      "5": [
        { ATK: 294, SP: 38.6 },
        { ATK: 314, SP: 42.7 },
      ],
      "6": [
        { ATK: 334, SP: 42.7 },
        { ATK: 354, SP: 46.9 },
      ],
    },
    type: "Polearm",
  },
  BloodtaintedGreatsword: {
    name: "Bloodtainted Greatsword",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 38, SP: 41 },
        { ATK: 86, SP: 72 },
      ],
      "1": [
        { ATK: 105, SP: 72 },
        { ATK: 151, SP: 105 },
      ],
      "2": [
        { ATK: 171, SP: 105 },
        { ATK: 193, SP: 122 },
      ],
      "3": [
        { ATK: 212, SP: 122 },
        { ATK: 234, SP: 138 },
      ],
      "4": [
        { ATK: 253, SP: 138 },
        { ATK: 274, SP: 154 },
      ],
      "5": [
        { ATK: 294, SP: 154 },
        { ATK: 314, SP: 171 },
      ],
      "6": [
        { ATK: 334, SP: 171 },
        { ATK: 354, SP: 187 },
      ],
    },
    type: "Claymore",
  },
  CoolSteel: {
    name: "Cool Steel",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 39, SP: 7.7 },
        { ATK: 94, SP: 13.5 },
      ],
      "1": [
        { ATK: 113, SP: 13.5 },
        { ATK: 169, SP: 19.7 },
      ],
      "2": [
        { ATK: 189, SP: 19.7 },
        { ATK: 216, SP: 22.8 },
      ],
      "3": [
        { ATK: 236, SP: 22.8 },
        { ATK: 263, SP: 25.9 },
      ],
      "4": [
        { ATK: 282, SP: 25.9 },
        { ATK: 309, SP: 29 },
      ],
      "5": [
        { ATK: 329, SP: 29 },
        { ATK: 355, SP: 32.1 },
      ],
      "6": [
        { ATK: 375, SP: 32.1 },
        { ATK: 401, SP: 35.2 },
      ],
    },
    type: "Sword",
  },
  DarkIronSword: {
    name: "Dark Iron Sword",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 39, SP: 31 },
        { ATK: 94, SP: 54 },
      ],
      "1": [
        { ATK: 113, SP: 54 },
        { ATK: 169, SP: 79 },
      ],
      "2": [
        { ATK: 189, SP: 79 },
        { ATK: 216, SP: 91 },
      ],
      "3": [
        { ATK: 236, SP: 91 },
        { ATK: 263, SP: 104 },
      ],
      "4": [
        { ATK: 282, SP: 104 },
        { ATK: 309, SP: 116 },
      ],
      "5": [
        { ATK: 329, SP: 116 },
        { ATK: 355, SP: 128 },
      ],
      "6": [
        { ATK: 375, SP: 128 },
        { ATK: 401, SP: 141 },
      ],
    },
    type: "Sword",
  },
  DebateClub: {
    name: "Debate Club",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 39, SP: 7.7 },
        { ATK: 94, SP: 13.5 },
      ],
      "1": [
        { ATK: 113, SP: 13.5 },
        { ATK: 169, SP: 19.7 },
      ],
      "2": [
        { ATK: 189, SP: 19.7 },
        { ATK: 216, SP: 22.8 },
      ],
      "3": [
        { ATK: 236, SP: 22.8 },
        { ATK: 263, SP: 25.9 },
      ],
      "4": [
        { ATK: 282, SP: 25.9 },
        { ATK: 309, SP: 29 },
      ],
      "5": [
        { ATK: 329, SP: 29 },
        { ATK: 355, SP: 32.1 },
      ],
      "6": [
        { ATK: 375, SP: 32.1 },
        { ATK: 401, SP: 35.2 },
      ],
    },
    type: "Claymore",
  },
  EmeraldOrb: {
    name: "Emerald Orb",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 40, SP: 20 },
        { ATK: 102, SP: 36 },
      ],
      "1": [
        { ATK: 121, SP: 36 },
        { ATK: 187, SP: 53 },
      ],
      "2": [
        { ATK: 207, SP: 53 },
        { ATK: 239, SP: 61 },
      ],
      "3": [
        { ATK: 259, SP: 61 },
        { ATK: 292, SP: 69 },
      ],
      "4": [
        { ATK: 311, SP: 69 },
        { ATK: 344, SP: 77 },
      ],
      "5": [
        { ATK: 363, SP: 77 },
        { ATK: 396, SP: 85 },
      ],
      "6": [
        { ATK: 415, SP: 85 },
        { ATK: 448, SP: 94 },
      ],
    },
    type: "Catalyst",
  },
  FerrousShadow: {
    name: "Ferrous Shadow",
    statBuff: "HP",
    stats: {
      "0": [
        { ATK: 39, SP: 7.7 },
        { ATK: 94, SP: 13.5 },
      ],
      "1": [
        { ATK: 113, SP: 13.5 },
        { ATK: 169, SP: 19.7 },
      ],
      "2": [
        { ATK: 189, SP: 19.7 },
        { ATK: 216, SP: 22.8 },
      ],
      "3": [
        { ATK: 236, SP: 22.8 },
        { ATK: 263, SP: 25.9 },
      ],
      "4": [
        { ATK: 282, SP: 25.9 },
        { ATK: 309, SP: 29 },
      ],
      "5": [
        { ATK: 329, SP: 29 },
        { ATK: 355, SP: 32.1 },
      ],
      "6": [
        { ATK: 375, SP: 32.1 },
        { ATK: 401, SP: 35.2 },
      ],
    },
    type: "Claymore",
  },
  FilletBlade: {
    name: "Fillet Blade",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 39, SP: 7.7 },
        { ATK: 94, SP: 13.5 },
      ],
      "1": [
        { ATK: 113, SP: 13.5 },
        { ATK: 169, SP: 19.7 },
      ],
      "2": [
        { ATK: 189, SP: 19.7 },
        { ATK: 216, SP: 22.8 },
      ],
      "3": [
        { ATK: 236, SP: 22.8 },
        { ATK: 263, SP: 25.9 },
      ],
      "4": [
        { ATK: 282, SP: 25.9 },
        { ATK: 309, SP: 29 },
      ],
      "5": [
        { ATK: 329, SP: 29 },
        { ATK: 355, SP: 32.1 },
      ],
      "6": [
        { ATK: 375, SP: 32.1 },
        { ATK: 401, SP: 35.2 },
      ],
    },
    type: "Sword",
  },
  Halberd: {
    name: "Halberd",
    statBuff: "ATK",
    stats: {
      "0": [
        { ATK: 40, SP: 5.1 },
        { ATK: 102, SP: 9 },
      ],
      "1": [
        { ATK: 121, SP: 9 },
        { ATK: 187, SP: 13.1 },
      ],
      "2": [
        { ATK: 207, SP: 13.1 },
        { ATK: 239, SP: 15.2 },
      ],
      "3": [
        { ATK: 259, SP: 15.2 },
        { ATK: 292, SP: 17.3 },
      ],
      "4": [
        { ATK: 311, SP: 17.3 },
        { ATK: 344, SP: 19.3 },
      ],
      "5": [
        { ATK: 363, SP: 19.3 },
        { ATK: 396, SP: 21.4 },
      ],
      "6": [
        { ATK: 415, SP: 21.4 },
        { ATK: 448, SP: 23.4 },
      ],
    },
    type: "Polearm",
  },
  HarbingerOfDawn: {
    name: "Harbinger of Dawn",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 39, SP: 10.2 },
        { ATK: 94, SP: 18 },
      ],
      "1": [
        { ATK: 113, SP: 18 },
        { ATK: 169, SP: 26.3 },
      ],
      "2": [
        { ATK: 189, SP: 26.3 },
        { ATK: 216, SP: 30.4 },
      ],
      "3": [
        { ATK: 236, SP: 30.4 },
        { ATK: 263, SP: 34.6 },
      ],
      "4": [
        { ATK: 282, SP: 34.6 },
        { ATK: 309, SP: 38.6 },
      ],
      "5": [
        { ATK: 329, SP: 38.6 },
        { ATK: 355, SP: 42.7 },
      ],
      "6": [
        { ATK: 375, SP: 42.7 },
        { ATK: 401, SP: 46.9 },
      ],
    },
    type: "Sword",
  },
  MagicGuide: {
    name: "Magic Guide",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 38, SP: 41 },
        { ATK: 86, SP: 72 },
      ],
      "1": [
        { ATK: 105, SP: 72 },
        { ATK: 151, SP: 105 },
      ],
      "2": [
        { ATK: 171, SP: 105 },
        { ATK: 193, SP: 122 },
      ],
      "3": [
        { ATK: 212, SP: 122 },
        { ATK: 234, SP: 138 },
      ],
      "4": [
        { ATK: 253, SP: 138 },
        { ATK: 274, SP: 154 },
      ],
      "5": [
        { ATK: 294, SP: 154 },
        { ATK: 314, SP: 171 },
      ],
      "6": [
        { ATK: 334, SP: 171 },
        { ATK: 354, SP: 187 },
      ],
    },
    type: "Catalyst",
  },
  Messenger: {
    name: "Messenger",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 40, SP: 6.8 },
        { ATK: 102, SP: 12 },
      ],
      "1": [
        { ATK: 121, SP: 12 },
        { ATK: 187, SP: 17.5 },
      ],
      "2": [
        { ATK: 207, SP: 17.5 },
        { ATK: 239, SP: 20.3 },
      ],
      "3": [
        { ATK: 259, SP: 20.3 },
        { ATK: 292, SP: 23 },
      ],
      "4": [
        { ATK: 311, SP: 23 },
        { ATK: 344, SP: 25.7 },
      ],
      "5": [
        { ATK: 363, SP: 25.7 },
        { ATK: 396, SP: 28.5 },
      ],
      "6": [
        { ATK: 415, SP: 28.5 },
        { ATK: 448, SP: 31.2 },
      ],
    },
    type: "Bow",
  },
  OtherworldlyStory: {
    name: "Otherworldly Story",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 39, SP: 8.5 },
        { ATK: 94, SP: 15 },
      ],
      "1": [
        { ATK: 113, SP: 15 },
        { ATK: 169, SP: 21.9 },
      ],
      "2": [
        { ATK: 189, SP: 21.9 },
        { ATK: 216, SP: 25.3 },
      ],
      "3": [
        { ATK: 236, SP: 25.3 },
        { ATK: 263, SP: 28.8 },
      ],
      "4": [
        { ATK: 282, SP: 28.8 },
        { ATK: 309, SP: 32.2 },
      ],
      "5": [
        { ATK: 329, SP: 32.2 },
        { ATK: 355, SP: 35.6 },
      ],
      "6": [
        { ATK: 375, SP: 35.6 },
        { ATK: 401, SP: 39 },
      ],
    },
    type: "Catalyst",
  },
  RavenBow: {
    name: "Raven Bow",
    statBuff: "Elemental Mastery",
    stats: {
      "0": [
        { ATK: 40, SP: 20 },
        { ATK: 102, SP: 36 },
      ],
      "1": [
        { ATK: 121, SP: 36 },
        { ATK: 187, SP: 53 },
      ],
      "2": [
        { ATK: 207, SP: 53 },
        { ATK: 239, SP: 61 },
      ],
      "3": [
        { ATK: 259, SP: 61 },
        { ATK: 292, SP: 69 },
      ],
      "4": [
        { ATK: 311, SP: 69 },
        { ATK: 344, SP: 77 },
      ],
      "5": [
        { ATK: 363, SP: 77 },
        { ATK: 396, SP: 85 },
      ],
      "6": [
        { ATK: 415, SP: 85 },
        { ATK: 448, SP: 94 },
      ],
    },
    type: "Bow",
  },
  RecurveBow: {
    name: "Recurve Bow",
    statBuff: "HP",
    stats: {
      "0": [
        { ATK: 38, SP: 10.2 },
        { ATK: 86, SP: 18 },
      ],
      "1": [
        { ATK: 105, SP: 18 },
        { ATK: 151, SP: 26.3 },
      ],
      "2": [
        { ATK: 171, SP: 26.3 },
        { ATK: 193, SP: 30.4 },
      ],
      "3": [
        { ATK: 212, SP: 30.4 },
        { ATK: 234, SP: 34.6 },
      ],
      "4": [
        { ATK: 253, SP: 34.6 },
        { ATK: 274, SP: 38.6 },
      ],
      "5": [
        { ATK: 294, SP: 38.6 },
        { ATK: 314, SP: 42.7 },
      ],
      "6": [
        { ATK: 334, SP: 42.7 },
        { ATK: 354, SP: 46.9 },
      ],
    },
    type: "Bow",
  },
  SharpshootersOath: {
    name: "Sharpshooter's Oath",
    statBuff: "CRIT DMG",
    stats: {
      "0": [
        { ATK: 39, SP: 10.2 },
        { ATK: 94, SP: 18 },
      ],
      "1": [
        { ATK: 113, SP: 18 },
        { ATK: 169, SP: 26.3 },
      ],
      "2": [
        { ATK: 189, SP: 26.3 },
        { ATK: 216, SP: 30.4 },
      ],
      "3": [
        { ATK: 236, SP: 30.4 },
        { ATK: 263, SP: 34.6 },
      ],
      "4": [
        { ATK: 282, SP: 34.6 },
        { ATK: 309, SP: 38.6 },
      ],
      "5": [
        { ATK: 329, SP: 38.6 },
        { ATK: 355, SP: 42.7 },
      ],
      "6": [
        { ATK: 375, SP: 42.7 },
        { ATK: 401, SP: 46.9 },
      ],
    },
    type: "Bow",
  },
  SkyriderGreatsword: {
    name: "Skyrider Greatsword",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": [
        { ATK: 39, SP: 9.6 },
        { ATK: 94, SP: 16.9 },
      ],
      "1": [
        { ATK: 113, SP: 16.9 },
        { ATK: 169, SP: 24.6 },
      ],
      "2": [
        { ATK: 189, SP: 24.6 },
        { ATK: 216, SP: 28.5 },
      ],
      "3": [
        { ATK: 236, SP: 28.5 },
        { ATK: 263, SP: 32.3 },
      ],
      "4": [
        { ATK: 282, SP: 32.3 },
        { ATK: 309, SP: 36.2 },
      ],
      "5": [
        { ATK: 329, SP: 36.2 },
        { ATK: 355, SP: 40.1 },
      ],
      "6": [
        { ATK: 375, SP: 40.1 },
        { ATK: 401, SP: 43.9 },
      ],
    },
    type: "Claymore",
  },
  SkyriderSword: {
    name: "Skyrider Sword",
    statBuff: "Energy Recharge",
    stats: {
      "0": [
        { ATK: 38, SP: 11.3 },
        { ATK: 86, SP: 20 },
      ],
      "1": [
        { ATK: 105, SP: 20 },
        { ATK: 151, SP: 29 },
      ],
      "2": [
        { ATK: 171, SP: 29 },
        { ATK: 193, SP: 33.5 },
      ],
      "3": [
        { ATK: 212, SP: 33.5 },
        { ATK: 234, SP: 38.1 },
      ],
      "4": [
        { ATK: 253, SP: 38.1 },
        { ATK: 274, SP: 42.6 },
      ],
      "5": [
        { ATK: 294, SP: 42.6 },
        { ATK: 314, SP: 47.2 },
      ],
      "6": [
        { ATK: 334, SP: 47.2 },
        { ATK: 354, SP: 51.7 },
      ],
    },
    type: "Sword",
  },
  Slingshot: {
    name: "Slingshot",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 38, SP: 6.8 },
        { ATK: 86, SP: 12 },
      ],
      "1": [
        { ATK: 105, SP: 12 },
        { ATK: 151, SP: 17.5 },
      ],
      "2": [
        { ATK: 171, SP: 17.5 },
        { ATK: 193, SP: 20.3 },
      ],
      "3": [
        { ATK: 212, SP: 20.3 },
        { ATK: 234, SP: 23 },
      ],
      "4": [
        { ATK: 253, SP: 23 },
        { ATK: 274, SP: 25.7 },
      ],
      "5": [
        { ATK: 294, SP: 25.7 },
        { ATK: 314, SP: 28.5 },
      ],
      "6": [
        { ATK: 334, SP: 28.5 },
        { ATK: 354, SP: 31.2 },
      ],
    },
    type: "Bow",
  },
  ThrillingTalesOfDragonSlayers: {
    name: "Thrilling Tales of Dragon Slayers",
    statBuff: "HP",
    stats: {
      "0": [
        { ATK: 39, SP: 7.7 },
        { ATK: 94, SP: 13.5 },
      ],
      "1": [
        { ATK: 113, SP: 13.5 },
        { ATK: 169, SP: 19.7 },
      ],
      "2": [
        { ATK: 189, SP: 19.7 },
        { ATK: 216, SP: 22.8 },
      ],
      "3": [
        { ATK: 236, SP: 22.8 },
        { ATK: 263, SP: 25.9 },
      ],
      "4": [
        { ATK: 282, SP: 25.9 },
        { ATK: 309, SP: 29 },
      ],
      "5": [
        { ATK: 329, SP: 29 },
        { ATK: 355, SP: 32.1 },
      ],
      "6": [
        { ATK: 375, SP: 32.1 },
        { ATK: 401, SP: 35.2 },
      ],
    },
    type: "Catalyst",
  },
  TravelersHandySword: {
    name: "Traveler's Handy Sword",
    statBuff: "DEF",
    stats: {
      "0": [
        { ATK: 40, SP: 6.4 },
        { ATK: 102, SP: 11.3 },
      ],
      "1": [
        { ATK: 121, SP: 11.3 },
        { ATK: 187, SP: 16.4 },
      ],
      "2": [
        { ATK: 207, SP: 16.4 },
        { ATK: 239, SP: 19 },
      ],
      "3": [
        { ATK: 259, SP: 19 },
        { ATK: 292, SP: 21.6 },
      ],
      "4": [
        { ATK: 311, SP: 21.6 },
        { ATK: 344, SP: 24.1 },
      ],
      "5": [
        { ATK: 363, SP: 24.1 },
        { ATK: 396, SP: 26.7 },
      ],
      "6": [
        { ATK: 415, SP: 26.7 },
        { ATK: 448, SP: 29.3 },
      ],
    },
    type: "Sword",
  },
  TwinNephrite: {
    name: "Twin Nephrite",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 40, SP: 3.4 },
        { ATK: 102, SP: 6 },
      ],
      "1": [
        { ATK: 121, SP: 6 },
        { ATK: 187, SP: 8.8 },
      ],
      "2": [
        { ATK: 207, SP: 8.8 },
        { ATK: 239, SP: 10.1 },
      ],
      "3": [
        { ATK: 259, SP: 10.1 },
        { ATK: 292, SP: 11.5 },
      ],
      "4": [
        { ATK: 311, SP: 11.5 },
        { ATK: 344, SP: 12.9 },
      ],
      "5": [
        { ATK: 363, SP: 12.9 },
        { ATK: 396, SP: 14.2 },
      ],
      "6": [
        { ATK: 415, SP: 14.2 },
        { ATK: 448, SP: 15.6 },
      ],
    },
    type: "Catalyst",
  },
  WhiteIronGreatsword: {
    name: "White Iron Greatsword",
    statBuff: "DEF",
    stats: {
      "0": [
        { ATK: 39, SP: 9.6 },
        { ATK: 94, SP: 16.9 },
      ],
      "1": [
        { ATK: 113, SP: 16.9 },
        { ATK: 169, SP: 24.6 },
      ],
      "2": [
        { ATK: 189, SP: 24.6 },
        { ATK: 216, SP: 28.5 },
      ],
      "3": [
        { ATK: 236, SP: 28.5 },
        { ATK: 263, SP: 32.3 },
      ],
      "4": [
        { ATK: 282, SP: 32.3 },
        { ATK: 309, SP: 36.2 },
      ],
      "5": [
        { ATK: 329, SP: 36.2 },
        { ATK: 355, SP: 40.1 },
      ],
      "6": [
        { ATK: 375, SP: 40.1 },
        { ATK: 401, SP: 43.9 },
      ],
    },
    type: "Claymore",
  },
  WhiteTassel: {
    name: "White Tassel",
    statBuff: "CRIT Rate",
    stats: {
      "0": [
        { ATK: 39, SP: 5.1 },
        { ATK: 94, SP: 9 },
      ],
      "1": [
        { ATK: 113, SP: 9 },
        { ATK: 169, SP: 13.1 },
      ],
      "2": [
        { ATK: 189, SP: 13.1 },
        { ATK: 216, SP: 15.2 },
      ],
      "3": [
        { ATK: 236, SP: 15.2 },
        { ATK: 263, SP: 17.3 },
      ],
      "4": [
        { ATK: 282, SP: 17.3 },
        { ATK: 309, SP: 19.3 },
      ],
      "5": [
        { ATK: 329, SP: 19.3 },
        { ATK: 355, SP: 21.4 },
      ],
      "6": [
        { ATK: 375, SP: 21.4 },
        { ATK: 401, SP: 23.4 },
      ],
    },
    type: "Polearm",
  },
  IronPoint: {
    name: "Iron Point",
    statBuff: null,
    stats: null,
    type: "Polearm",
  },
  OldMercsPal: {
    name: "Old Merc's Pal",
    statBuff: null,
    stats: null,
    type: "Claymore",
  },
  PocketGrimoire: {
    name: "Pocket Grimoire",
    statBuff: null,
    stats: null,
    type: "Catalyst",
  },
  SeasonedHuntersBow: {
    name: "Seasoned Hunter's Bow",
    statBuff: null,
    stats: null,
    type: "Bow",
  },
  SilverSword: {
    name: "Silver Sword",
    statBuff: null,
    stats: null,
    type: "Sword",
  },
  ApprenticesNotes: {
    name: "Apprentice's Notes",
    statBuff: null,
    stats: null,
    type: "Catalyst",
  },
  BeginnersProtector: {
    name: "Beginner's Protector",
    statBuff: null,
    stats: null,
    type: "Polearm",
  },
  DullBlade: { name: "Dull Blade", statBuff: null, stats: null, type: "Sword" },
  HuntersBow: {
    name: "Hunter's Bow",
    statBuff: null,
    stats: null,
    type: "Bow",
  },
  WasterGreatsword: {
    name: "Waster Greatsword",
    statBuff: null,
    stats: null,
    type: "Claymore",
  },
};

export const characterIDs = toIdedObj(characters);
export const characterWeapons: { [key in CharacterKey]: WeaponKey[] } = {
  Albedo: sword,
  Alhaitham: sword,
  Aloy: bow,
  Amber: bow,
  AratakiItto: claymore,
  Barbara: catalyst,
  Beidou: claymore,
  Bennett: sword,
  Candace: polearm,
  Chongyun: claymore,
  Collei: bow,
  Cyno: polearm,
  Diluc: claymore,
  Diona: bow,
  Dori: claymore,
  Eula: claymore,
  Faruzan: bow,
  Fischl: bow,
  Ganyu: bow,
  Gorou: bow,
  HuTao: polearm,
  Jean: sword,
  KaedeharaKazuha: sword,
  Kaeya: sword,
  KamisatoAyaka: sword,
  KamisatoAyato: sword,
  Keqing: sword,
  Klee: catalyst,
  KujouSara: bow,
  KukiShinobu: sword,
  Layla: sword,
  Lisa: catalyst,
  Mona: catalyst,
  Nahida: catalyst,
  Nilou: sword,
  Ningguang: catalyst,
  Noelle: claymore,
  Qiqi: sword,
  RaidenShogun: polearm,
  Razor: claymore,
  Rosaria: polearm,
  SangonomiyaKokomi: catalyst,
  Sayu: claymore,
  Shenhe: polearm,
  ShikanoinHeizou: catalyst,
  Sucrose: catalyst,
  Tartaglia: bow,
  Thoma: polearm,
  Tighnari: bow,
  Traveler: sword,
  Venti: bow,
  Wanderer: catalyst,
  Xiangling: polearm,
  Xiao: polearm,
  Xingqiu: sword,
  Xinyan: claymore,
  YaeMiko: catalyst,
  Yanfei: catalyst,
  Yaoyao: polearm,
  Yelan: bow,
  Yoimiya: bow,
  YunJin: polearm,
  Zhongli: polearm,
};
export const characterWeaponIDs: {
  [key in CharacterKey]: { [key: string]: number };
} = {
  Albedo: swordIDs,
  Alhaitham: swordIDs,
  Aloy: bowIDs,
  Amber: bowIDs,
  AratakiItto: claymoreIDs,
  Barbara: catalystIDs,
  Beidou: claymoreIDs,
  Bennett: swordIDs,
  Candace: polearmIDs,
  Chongyun: claymoreIDs,
  Collei: bowIDs,
  Cyno: polearmIDs,
  Diluc: claymoreIDs,
  Diona: bowIDs,
  Dori: claymoreIDs,
  Eula: claymoreIDs,
  Faruzan: bowIDs,
  Fischl: bowIDs,
  Ganyu: bowIDs,
  Gorou: bowIDs,
  HuTao: polearmIDs,
  Jean: swordIDs,
  KaedeharaKazuha: swordIDs,
  Kaeya: swordIDs,
  KamisatoAyaka: swordIDs,
  KamisatoAyato: swordIDs,
  Keqing: swordIDs,
  Klee: catalystIDs,
  KujouSara: bowIDs,
  KukiShinobu: swordIDs,
  Layla: swordIDs,
  Lisa: catalystIDs,
  Mona: catalystIDs,
  Nahida: catalystIDs,
  Nilou: swordIDs,
  Ningguang: catalystIDs,
  Noelle: claymoreIDs,
  Qiqi: swordIDs,
  RaidenShogun: polearmIDs,
  Razor: claymoreIDs,
  Rosaria: polearmIDs,
  SangonomiyaKokomi: catalystIDs,
  Sayu: claymoreIDs,
  Shenhe: polearmIDs,
  ShikanoinHeizou: catalystIDs,
  Sucrose: catalystIDs,
  Tartaglia: bowIDs,
  Thoma: polearmIDs,
  Tighnari: bowIDs,
  Traveler: swordIDs,
  Venti: bowIDs,
  Wanderer: catalystIDs,
  Xiangling: polearmIDs,
  Xiao: polearmIDs,
  Xingqiu: swordIDs,
  Xinyan: claymoreIDs,
  YaeMiko: catalystIDs,
  Yanfei: catalystIDs,
  Yaoyao: polearmIDs,
  Yelan: bowIDs,
  Yoimiya: bowIDs,
  YunJin: polearmIDs,
  Zhongli: polearmIDs,
};
export const characterInfo: {
  [key in CharacterKey]: {
    element: Element;
    weapon: WeaponType;
    statBuff: StatBuff;
    stats: {
      [key in AscensionKey]: {
        HP: number;
        ATK: number;
        DEF: number;
        SP: number;
      }[];
    };
  };
} = {
  Albedo: {
    element: "Geo",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1029, ATK: 19, DEF: 68, SP: 0 },
        { HP: 2670, ATK: 50, DEF: 176, SP: 0 },
      ],
      "1": [
        { HP: 3553, ATK: 67, DEF: 235, SP: 0 },
        { HP: 5317, ATK: 100, DEF: 352, SP: 0 },
      ],
      "2": [
        { HP: 5944, ATK: 112, DEF: 393, SP: 7.2 },
        { HP: 6839, ATK: 129, DEF: 453, SP: 7.2 },
      ],
      "3": [
        { HP: 7675, ATK: 145, DEF: 508, SP: 14.4 },
        { HP: 8579, ATK: 162, DEF: 568, SP: 14.4 },
      ],
      "4": [
        { HP: 9206, ATK: 174, DEF: 609, SP: 14.4 },
        { HP: 10118, ATK: 192, DEF: 670, SP: 14.4 },
      ],
      "5": [
        { HP: 10746, ATK: 204, DEF: 711, SP: 21.6 },
        { HP: 11668, ATK: 221, DEF: 773, SP: 21.6 },
      ],
      "6": [
        { HP: 12295, ATK: 233, DEF: 814, SP: 28.8 },
        { HP: 13225, ATK: 251, DEF: 876, SP: 28.8 },
      ],
    },
    statBuff: "Geo DMG Bonus",
  },
  Alhaitham: {
    element: "Dendro",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1039, ATK: 24, DEF: 60, SP: 0 },
        { HP: 2695, ATK: 63, DEF: 157, SP: 0 },
      ],
      "1": [
        { HP: 3586, ATK: 84, DEF: 210, SP: 0 },
        { HP: 5366, ATK: 125, DEF: 314, SP: 0 },
      ],
      "2": [
        { HP: 5999, ATK: 140, DEF: 351, SP: 7.2 },
        { HP: 6902, ATK: 162, DEF: 404, SP: 7.2 },
      ],
      "3": [
        { HP: 7746, ATK: 181, DEF: 453, SP: 14.4 },
        { HP: 8658, ATK: 203, DEF: 507, SP: 14.4 },
      ],
      "4": [
        { HP: 9291, ATK: 218, DEF: 544, SP: 14.4 },
        { HP: 10212, ATK: 239, DEF: 598, SP: 14.4 },
      ],
      "5": [
        { HP: 10845, ATK: 254, DEF: 635, SP: 21.6 },
        { HP: 11776, ATK: 276, DEF: 689, SP: 21.6 },
      ],
      "6": [
        { HP: 12409, ATK: 291, DEF: 726, SP: 28.8 },
        { HP: 13348, ATK: 313, DEF: 781, SP: 28.8 },
      ],
    },
    statBuff: "Dendro DMG Bonus",
  },
  Aloy: {
    element: "Cryo",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 848, ATK: 18, DEF: 52, SP: 0 },
        { HP: 2200, ATK: 47, DEF: 136, SP: 0 },
      ],
      "1": [
        { HP: 2928, ATK: 62, DEF: 181, SP: 0 },
        { HP: 4381, ATK: 94, DEF: 271, SP: 0 },
      ],
      "2": [
        { HP: 4898, ATK: 105, DEF: 303, SP: 7.2 },
        { HP: 5635, ATK: 120, DEF: 349, SP: 7.2 },
      ],
      "3": [
        { HP: 6325, ATK: 135, DEF: 392, SP: 14.4 },
        { HP: 7070, ATK: 151, DEF: 438, SP: 14.4 },
      ],
      "4": [
        { HP: 7586, ATK: 162, DEF: 470, SP: 14.4 },
        { HP: 8338, ATK: 178, DEF: 517, SP: 14.4 },
      ],
      "5": [
        { HP: 8855, ATK: 190, DEF: 549, SP: 21.6 },
        { HP: 9615, ATK: 206, DEF: 596, SP: 21.6 },
      ],
      "6": [
        { HP: 10132, ATK: 217, DEF: 628, SP: 28.8 },
        { HP: 10898, ATK: 233, DEF: 676, SP: 28.8 },
      ],
    },
    statBuff: "Cryo DMG Bonus",
  },
  Amber: {
    element: "Pyro",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 793, ATK: 18, DEF: 50, SP: 0 },
        { HP: 2037, ATK: 48, DEF: 129, SP: 0 },
      ],
      "1": [
        { HP: 2630, ATK: 62, DEF: 166, SP: 0 },
        { HP: 3940, ATK: 92, DEF: 250, SP: 0 },
      ],
      "2": [
        { HP: 4361, ATK: 102, DEF: 276, SP: 6 },
        { HP: 5016, ATK: 118, DEF: 318, SP: 6 },
      ],
      "3": [
        { HP: 5577, ATK: 131, DEF: 354, SP: 12 },
        { HP: 6233, ATK: 146, DEF: 395, SP: 12 },
      ],
      "4": [
        { HP: 6654, ATK: 156, DEF: 422, SP: 12 },
        { HP: 7308, ATK: 172, DEF: 463, SP: 12 },
      ],
      "5": [
        { HP: 7729, ATK: 182, DEF: 490, SP: 18 },
        { HP: 8384, ATK: 197, DEF: 532, SP: 18 },
      ],
      "6": [
        { HP: 8805, ATK: 207, DEF: 559, SP: 24 },
        { HP: 9461, ATK: 223, DEF: 600, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  AratakiItto: {
    element: "Geo",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 1000, ATK: 17, DEF: 74, SP: 0 },
        { HP: 2596, ATK: 45, DEF: 193, SP: 0 },
      ],
      "1": [
        { HP: 3454, ATK: 61, DEF: 257, SP: 0 },
        { HP: 5169, ATK: 91, DEF: 385, SP: 0 },
      ],
      "2": [
        { HP: 5779, ATK: 102, DEF: 431, SP: 4.8 },
        { HP: 6649, ATK: 117, DEF: 495, SP: 4.8 },
      ],
      "3": [
        { HP: 7462, ATK: 131, DEF: 556, SP: 9.6 },
        { HP: 8341, ATK: 147, DEF: 622, SP: 9.6 },
      ],
      "4": [
        { HP: 8950, ATK: 158, DEF: 667, SP: 9.6 },
        { HP: 9837, ATK: 173, DEF: 733, SP: 9.6 },
      ],
      "5": [
        { HP: 10447, ATK: 184, DEF: 779, SP: 14.4 },
        { HP: 11344, ATK: 200, DEF: 846, SP: 14.4 },
      ],
      "6": [
        { HP: 11954, ATK: 211, DEF: 891, SP: 19.2 },
        { HP: 12858, ATK: 227, DEF: 959, SP: 19.2 },
      ],
    },
    statBuff: "CRIT Rate",
  },
  Barbara: {
    element: "Hydro",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 820, ATK: 13, DEF: 56, SP: 0 },
        { HP: 2108, ATK: 34, DEF: 144, SP: 0 },
      ],
      "1": [
        { HP: 2721, ATK: 44, DEF: 185, SP: 0 },
        { HP: 4076, ATK: 66, DEF: 278, SP: 0 },
      ],
      "2": [
        { HP: 4511, ATK: 73, DEF: 308, SP: 6 },
        { HP: 5189, ATK: 84, DEF: 354, SP: 6 },
      ],
      "3": [
        { HP: 5770, ATK: 93, DEF: 394, SP: 12 },
        { HP: 6448, ATK: 104, DEF: 440, SP: 12 },
      ],
      "4": [
        { HP: 6883, ATK: 112, DEF: 470, SP: 12 },
        { HP: 7560, ATK: 123, DEF: 516, SP: 12 },
      ],
      "5": [
        { HP: 7996, ATK: 130, DEF: 546, SP: 18 },
        { HP: 8674, ATK: 141, DEF: 592, SP: 18 },
      ],
      "6": [
        { HP: 9109, ATK: 148, DEF: 622, SP: 24 },
        { HP: 9787, ATK: 159, DEF: 668, SP: 24 },
      ],
    },
    statBuff: "HP",
  },
  Beidou: {
    element: "Electro",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 1094, ATK: 18, DEF: 54, SP: 0 },
        { HP: 2810, ATK: 48, DEF: 139, SP: 0 },
      ],
      "1": [
        { HP: 3628, ATK: 62, DEF: 180, SP: 0 },
        { HP: 5434, ATK: 93, DEF: 270, SP: 0 },
      ],
      "2": [
        { HP: 6015, ATK: 103, DEF: 298, SP: 6 },
        { HP: 6919, ATK: 119, DEF: 343, SP: 6 },
      ],
      "3": [
        { HP: 7693, ATK: 132, DEF: 382, SP: 12 },
        { HP: 8597, ATK: 148, DEF: 427, SP: 12 },
      ],
      "4": [
        { HP: 9178, ATK: 158, DEF: 456, SP: 12 },
        { HP: 10080, ATK: 173, DEF: 500, SP: 12 },
      ],
      "5": [
        { HP: 10661, ATK: 183, DEF: 529, SP: 18 },
        { HP: 11565, ATK: 199, DEF: 574, SP: 18 },
      ],
      "6": [
        { HP: 12146, ATK: 209, DEF: 603, SP: 24 },
        { HP: 13049, ATK: 225, DEF: 648, SP: 24 },
      ],
    },
    statBuff: "Electro DMG Bonus",
  },
  Bennett: {
    element: "Pyro",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1039, ATK: 16, DEF: 64, SP: 0 },
        { HP: 2670, ATK: 41, DEF: 166, SP: 0 },
      ],
      "1": [
        { HP: 3446, ATK: 53, DEF: 214, SP: 0 },
        { HP: 5162, ATK: 79, DEF: 321, SP: 0 },
      ],
      "2": [
        { HP: 5714, ATK: 88, DEF: 355, SP: 6.7 },
        { HP: 6573, ATK: 101, DEF: 408, SP: 6.7 },
      ],
      "3": [
        { HP: 7308, ATK: 112, DEF: 454, SP: 13.4 },
        { HP: 8167, ATK: 125, DEF: 508, SP: 13.4 },
      ],
      "4": [
        { HP: 8719, ATK: 134, DEF: 542, SP: 13.4 },
        { HP: 9576, ATK: 147, DEF: 595, SP: 13.4 },
      ],
      "5": [
        { HP: 10128, ATK: 156, DEF: 630, SP: 20.1 },
        { HP: 10987, ATK: 169, DEF: 683, SP: 20.1 },
      ],
      "6": [
        { HP: 11538, ATK: 177, DEF: 717, SP: 26.8 },
        { HP: 12397, ATK: 191, DEF: 771, SP: 26.8 },
      ],
    },
    statBuff: "Energy Recharge",
  },
  Candace: {
    element: "Hydro",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 911, ATK: 17, DEF: 57, SP: 0 },
        { HP: 2342, ATK: 45, DEF: 147, SP: 0 },
      ],
      "1": [
        { HP: 3023, ATK: 59, DEF: 189, SP: 0 },
        { HP: 4528, ATK: 88, DEF: 284, SP: 0 },
      ],
      "2": [
        { HP: 5012, ATK: 97, DEF: 314, SP: 6 },
        { HP: 5766, ATK: 112, DEF: 361, SP: 6 },
      ],
      "3": [
        { HP: 6411, ATK: 125, DEF: 402, SP: 12 },
        { HP: 7164, ATK: 139, DEF: 449, SP: 12 },
      ],
      "4": [
        { HP: 7648, ATK: 149, DEF: 480, SP: 12 },
        { HP: 8400, ATK: 164, DEF: 527, SP: 12 },
      ],
      "5": [
        { HP: 8884, ATK: 173, DEF: 557, SP: 18 },
        { HP: 9637, ATK: 188, DEF: 604, SP: 18 },
      ],
      "6": [
        { HP: 10121, ATK: 197, DEF: 635, SP: 24 },
        { HP: 10874, ATK: 212, DEF: 682, SP: 24 },
      ],
    },
    statBuff: "HP",
  },
  Chongyun: {
    element: "Cryo",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 920, ATK: 18, DEF: 54, SP: 0 },
        { HP: 2365, ATK: 48, DEF: 139, SP: 0 },
      ],
      "1": [
        { HP: 3053, ATK: 62, DEF: 180, SP: 0 },
        { HP: 4574, ATK: 92, DEF: 270, SP: 0 },
      ],
      "2": [
        { HP: 5063, ATK: 102, DEF: 298, SP: 6 },
        { HP: 5823, ATK: 118, DEF: 343, SP: 6 },
      ],
      "3": [
        { HP: 6475, ATK: 131, DEF: 382, SP: 12 },
        { HP: 7236, ATK: 146, DEF: 427, SP: 12 },
      ],
      "4": [
        { HP: 7724, ATK: 156, DEF: 456, SP: 12 },
        { HP: 8484, ATK: 172, DEF: 500, SP: 12 },
      ],
      "5": [
        { HP: 8973, ATK: 182, DEF: 529, SP: 18 },
        { HP: 9734, ATK: 197, DEF: 574, SP: 18 },
      ],
      "6": [
        { HP: 10222, ATK: 207, DEF: 603, SP: 24 },
        { HP: 10983, ATK: 223, DEF: 648, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  Collei: {
    element: "Dendro",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 820, ATK: 16, DEF: 50, SP: 0 },
        { HP: 2108, ATK: 43, DEF: 129, SP: 0 },
      ],
      "1": [
        { HP: 2721, ATK: 55, DEF: 166, SP: 0 },
        { HP: 4076, ATK: 83, DEF: 250, SP: 0 },
      ],
      "2": [
        { HP: 4511, ATK: 92, DEF: 276, SP: 6 },
        { HP: 5189, ATK: 105, DEF: 318, SP: 6 },
      ],
      "3": [
        { HP: 5770, ATK: 117, DEF: 354, SP: 12 },
        { HP: 6448, ATK: 131, DEF: 395, SP: 12 },
      ],
      "4": [
        { HP: 6883, ATK: 140, DEF: 422, SP: 12 },
        { HP: 7560, ATK: 154, DEF: 463, SP: 12 },
      ],
      "5": [
        { HP: 7996, ATK: 163, DEF: 490, SP: 18 },
        { HP: 8674, ATK: 176, DEF: 532, SP: 18 },
      ],
      "6": [
        { HP: 9109, ATK: 185, DEF: 559, SP: 24 },
        { HP: 9787, ATK: 199, DEF: 600, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  Cyno: {
    element: "Electro",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 972, ATK: 24, DEF: 66, SP: 0 },
        { HP: 2522, ATK: 64, DEF: 173, SP: 0 },
      ],
      "1": [
        { HP: 3356, ATK: 85, DEF: 230, SP: 0 },
        { HP: 5021, ATK: 127, DEF: 345, SP: 0 },
      ],
      "2": [
        { HP: 5614, ATK: 142, DEF: 386, SP: 9.6 },
        { HP: 6459, ATK: 164, DEF: 444, SP: 9.6 },
      ],
      "3": [
        { HP: 7249, ATK: 184, DEF: 498, SP: 19.2 },
        { HP: 8102, ATK: 206, DEF: 557, SP: 19.2 },
      ],
      "4": [
        { HP: 8695, ATK: 221, DEF: 598, SP: 19.2 },
        { HP: 9556, ATK: 243, DEF: 657, SP: 19.2 },
      ],
      "5": [
        { HP: 10149, ATK: 258, DEF: 698, SP: 28.8 },
        { HP: 11020, ATK: 280, DEF: 758, SP: 28.8 },
      ],
      "6": [
        { HP: 11612, ATK: 295, DEF: 798, SP: 38.4 },
        { HP: 12490, ATK: 318, DEF: 859, SP: 38.4 },
      ],
    },
    statBuff: "CRIT DMG",
  },
  Diluc: {
    element: "Pyro",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 1010, ATK: 26, DEF: 61, SP: 0 },
        { HP: 2621, ATK: 67, DEF: 158, SP: 0 },
      ],
      "1": [
        { HP: 3487, ATK: 89, DEF: 210, SP: 0 },
        { HP: 5218, ATK: 134, DEF: 315, SP: 0 },
      ],
      "2": [
        { HP: 5834, ATK: 150, DEF: 352, SP: 4.8 },
        { HP: 6712, ATK: 173, DEF: 405, SP: 4.8 },
      ],
      "3": [
        { HP: 7533, ATK: 194, DEF: 454, SP: 9.6 },
        { HP: 8420, ATK: 217, DEF: 508, SP: 9.6 },
      ],
      "4": [
        { HP: 9036, ATK: 233, DEF: 545, SP: 9.6 },
        { HP: 9931, ATK: 256, DEF: 599, SP: 9.6 },
      ],
      "5": [
        { HP: 10547, ATK: 272, DEF: 636, SP: 14.4 },
        { HP: 11452, ATK: 295, DEF: 691, SP: 14.4 },
      ],
      "6": [
        { HP: 12068, ATK: 311, DEF: 728, SP: 19.2 },
        { HP: 12980, ATK: 334, DEF: 783, SP: 19.2 },
      ],
    },
    statBuff: "CRIT Rate",
  },
  Diona: {
    element: "Cryo",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 802, ATK: 17, DEF: 50, SP: 0 },
        { HP: 2061, ATK: 45, DEF: 129, SP: 0 },
      ],
      "1": [
        { HP: 2660, ATK: 59, DEF: 166, SP: 0 },
        { HP: 3985, ATK: 88, DEF: 250, SP: 0 },
      ],
      "2": [
        { HP: 4411, ATK: 97, DEF: 276, SP: 6 },
        { HP: 5074, ATK: 112, DEF: 318, SP: 6 },
      ],
      "3": [
        { HP: 5641, ATK: 125, DEF: 354, SP: 12 },
        { HP: 6304, ATK: 139, DEF: 395, SP: 12 },
      ],
      "4": [
        { HP: 6730, ATK: 149, DEF: 422, SP: 12 },
        { HP: 7392, ATK: 164, DEF: 463, SP: 12 },
      ],
      "5": [
        { HP: 7818, ATK: 173, DEF: 490, SP: 18 },
        { HP: 8481, ATK: 188, DEF: 532, SP: 18 },
      ],
      "6": [
        { HP: 8907, ATK: 197, DEF: 559, SP: 24 },
        { HP: 9569, ATK: 212, DEF: 600, SP: 24 },
      ],
    },
    statBuff: "Cryo DMG Bonus",
  },
  Dori: {
    element: "Electro",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 1039, ATK: 18, DEF: 60, SP: 0 },
        { HP: 2670, ATK: 48, DEF: 155, SP: 0 },
      ],
      "1": [
        { HP: 3446, ATK: 62, DEF: 201, SP: 0 },
        { HP: 5162, ATK: 92, DEF: 301, SP: 0 },
      ],
      "2": [
        { HP: 5714, ATK: 102, DEF: 333, SP: 6 },
        { HP: 6573, ATK: 118, DEF: 383, SP: 6 },
      ],
      "3": [
        { HP: 7308, ATK: 131, DEF: 426, SP: 12 },
        { HP: 8167, ATK: 146, DEF: 476, SP: 12 },
      ],
      "4": [
        { HP: 8719, ATK: 156, DEF: 508, SP: 12 },
        { HP: 9576, ATK: 172, DEF: 558, SP: 12 },
      ],
      "5": [
        { HP: 10128, ATK: 182, DEF: 591, SP: 18 },
        { HP: 10987, ATK: 197, DEF: 641, SP: 18 },
      ],
      "6": [
        { HP: 11538, ATK: 207, DEF: 673, SP: 24 },
        { HP: 12397, ATK: 223, DEF: 723, SP: 24 },
      ],
    },
    statBuff: "HP",
  },
  Eula: {
    element: "Cryo",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 1029, ATK: 26, DEF: 58, SP: 0 },
        { HP: 2670, ATK: 69, DEF: 151, SP: 0 },
      ],
      "1": [
        { HP: 3553, ATK: 91, DEF: 201, SP: 0 },
        { HP: 5317, ATK: 137, DEF: 301, SP: 0 },
      ],
      "2": [
        { HP: 5944, ATK: 153, DEF: 337, SP: 9.6 },
        { HP: 6839, ATK: 176, DEF: 388, SP: 9.6 },
      ],
      "3": [
        { HP: 7675, ATK: 198, DEF: 435, SP: 19.2 },
        { HP: 8579, ATK: 221, DEF: 487, SP: 19.2 },
      ],
      "4": [
        { HP: 9206, ATK: 238, DEF: 522, SP: 19.2 },
        { HP: 10118, ATK: 261, DEF: 574, SP: 19.2 },
      ],
      "5": [
        { HP: 10746, ATK: 277, DEF: 610, SP: 28.8 },
        { HP: 11668, ATK: 301, DEF: 662, SP: 28.8 },
      ],
      "6": [
        { HP: 12295, ATK: 317, DEF: 698, SP: 38.4 },
        { HP: 13225, ATK: 342, DEF: 750, SP: 38.4 },
      ],
    },
    statBuff: "CRIT DMG",
  },
  Faruzan: {
    element: "Anemo",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 802, ATK: 16, DEF: 52, SP: 0 },
        { HP: 2061, ATK: 42, DEF: 135, SP: 0 },
      ],
      "1": [
        { HP: 2660, ATK: 54, DEF: 174, SP: 0 },
        { HP: 3985, ATK: 81, DEF: 261, SP: 0 },
      ],
      "2": [
        { HP: 4411, ATK: 90, DEF: 289, SP: 6 },
        { HP: 5074, ATK: 104, DEF: 332, SP: 6 },
      ],
      "3": [
        { HP: 5641, ATK: 115, DEF: 370, SP: 12 },
        { HP: 6304, ATK: 129, DEF: 413, SP: 12 },
      ],
      "4": [
        { HP: 6730, ATK: 138, DEF: 441, SP: 12 },
        { HP: 7392, ATK: 151, DEF: 485, SP: 12 },
      ],
      "5": [
        { HP: 7818, ATK: 160, DEF: 513, SP: 18 },
        { HP: 8481, ATK: 174, DEF: 556, SP: 18 },
      ],
      "6": [
        { HP: 8907, ATK: 182, DEF: 584, SP: 24 },
        { HP: 9569, ATK: 196, DEF: 627, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  Fischl: {
    element: "Electro",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 770, ATK: 20, DEF: 49, SP: 0 },
        { HP: 1979, ATK: 52, DEF: 127, SP: 0 },
      ],
      "1": [
        { HP: 2554, ATK: 67, DEF: 165, SP: 0 },
        { HP: 3826, ATK: 101, DEF: 247, SP: 0 },
      ],
      "2": [
        { HP: 4235, ATK: 112, DEF: 273, SP: 6 },
        { HP: 4872, ATK: 129, DEF: 314, SP: 6 },
      ],
      "3": [
        { HP: 5417, ATK: 144, DEF: 350, SP: 12 },
        { HP: 6053, ATK: 160, DEF: 391, SP: 12 },
      ],
      "4": [
        { HP: 6462, ATK: 171, DEF: 417, SP: 12 },
        { HP: 7098, ATK: 188, DEF: 458, SP: 12 },
      ],
      "5": [
        { HP: 7507, ATK: 199, DEF: 485, SP: 18 },
        { HP: 8143, ATK: 216, DEF: 526, SP: 18 },
      ],
      "6": [
        { HP: 8552, ATK: 227, DEF: 552, SP: 24 },
        { HP: 9189, ATK: 244, DEF: 593, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  Ganyu: {
    element: "Cryo",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 762, ATK: 26, DEF: 49, SP: 0 },
        { HP: 1978, ATK: 67, DEF: 127, SP: 0 },
      ],
      "1": [
        { HP: 2632, ATK: 89, DEF: 169, SP: 0 },
        { HP: 3938, ATK: 134, DEF: 253, SP: 0 },
      ],
      "2": [
        { HP: 4403, ATK: 150, DEF: 283, SP: 9.6 },
        { HP: 5066, ATK: 173, DEF: 325, SP: 9.6 },
      ],
      "3": [
        { HP: 5685, ATK: 194, DEF: 365, SP: 19.2 },
        { HP: 6355, ATK: 217, DEF: 408, SP: 19.2 },
      ],
      "4": [
        { HP: 6819, ATK: 233, DEF: 438, SP: 19.2 },
        { HP: 7495, ATK: 256, DEF: 482, SP: 19.2 },
      ],
      "5": [
        { HP: 7960, ATK: 272, DEF: 512, SP: 28.8 },
        { HP: 8643, ATK: 295, DEF: 556, SP: 28.8 },
      ],
      "6": [
        { HP: 9108, ATK: 311, DEF: 585, SP: 38.4 },
        { HP: 9796, ATK: 334, DEF: 630, SP: 38.4 },
      ],
    },
    statBuff: "CRIT DMG",
  },
  Gorou: {
    element: "Geo",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 802, ATK: 15, DEF: 54, SP: 0 },
        { HP: 2061, ATK: 39, DEF: 139, SP: 0 },
      ],
      "1": [
        { HP: 2660, ATK: 50, DEF: 180, SP: 0 },
        { HP: 3985, ATK: 76, DEF: 270, SP: 0 },
      ],
      "2": [
        { HP: 4411, ATK: 84, DEF: 298, SP: 6 },
        { HP: 5074, ATK: 96, DEF: 343, SP: 6 },
      ],
      "3": [
        { HP: 5641, ATK: 107, DEF: 382, SP: 12 },
        { HP: 6304, ATK: 120, DEF: 427, SP: 12 },
      ],
      "4": [
        { HP: 6730, ATK: 128, DEF: 456, SP: 12 },
        { HP: 7392, ATK: 141, DEF: 500, SP: 12 },
      ],
      "5": [
        { HP: 7818, ATK: 149, DEF: 529, SP: 18 },
        { HP: 8481, ATK: 161, DEF: 574, SP: 18 },
      ],
      "6": [
        { HP: 8907, ATK: 170, DEF: 603, SP: 24 },
        { HP: 9569, ATK: 182, DEF: 648, SP: 24 },
      ],
    },
    statBuff: "Geo DMG Bonus",
  },
  HuTao: {
    element: "Pyro",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 1210, ATK: 8, DEF: 68, SP: 0 },
        { HP: 3140, ATK: 21, DEF: 176, SP: 0 },
      ],
      "1": [
        { HP: 4178, ATK: 28, DEF: 235, SP: 0 },
        { HP: 6252, ATK: 42, DEF: 352, SP: 0 },
      ],
      "2": [
        { HP: 6990, ATK: 47, DEF: 393, SP: 9.6 },
        { HP: 8042, ATK: 55, DEF: 453, SP: 9.6 },
      ],
      "3": [
        { HP: 9025, ATK: 61, DEF: 508, SP: 19.2 },
        { HP: 10088, ATK: 69, DEF: 568, SP: 19.2 },
      ],
      "4": [
        { HP: 10826, ATK: 74, DEF: 609, SP: 19.2 },
        { HP: 11899, ATK: 81, DEF: 670, SP: 19.2 },
      ],
      "5": [
        { HP: 12636, ATK: 86, DEF: 711, SP: 28.8 },
        { HP: 13721, ATK: 93, DEF: 773, SP: 28.8 },
      ],
      "6": [
        { HP: 14459, ATK: 98, DEF: 814, SP: 38.4 },
        { HP: 15552, ATK: 106, DEF: 876, SP: 38.4 },
      ],
    },
    statBuff: "CRIT DMG",
  },
  Jean: {
    element: "Anemo",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1143, ATK: 18, DEF: 59, SP: 0 },
        { HP: 2967, ATK: 48, DEF: 155, SP: 0 },
      ],
      "1": [
        { HP: 3948, ATK: 64, DEF: 206, SP: 0 },
        { HP: 5908, ATK: 96, DEF: 308, SP: 0 },
      ],
      "2": [
        { HP: 6604, ATK: 107, DEF: 345, SP: 5.5 },
        { HP: 7599, ATK: 123, DEF: 397, SP: 5.5 },
      ],
      "3": [
        { HP: 8528, ATK: 138, DEF: 446, SP: 11 },
        { HP: 9532, ATK: 155, DEF: 498, SP: 11 },
      ],
      "4": [
        { HP: 10229, ATK: 166, DEF: 535, SP: 11 },
        { HP: 11243, ATK: 182, DEF: 588, SP: 11 },
      ],
      "5": [
        { HP: 11940, ATK: 194, DEF: 624, SP: 16.5 },
        { HP: 12965, ATK: 211, DEF: 678, SP: 16.5 },
      ],
      "6": [
        { HP: 13662, ATK: 222, DEF: 714, SP: 22 },
        { HP: 14695, ATK: 239, DEF: 768, SP: 22 },
      ],
    },
    statBuff: "Healing Bonus",
  },
  KaedeharaKazuha: {
    element: "Anemo",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1039, ATK: 23, DEF: 62, SP: 0 },
        { HP: 2695, ATK: 59, DEF: 162, SP: 0 },
      ],
      "1": [
        { HP: 3586, ATK: 79, DEF: 216, SP: 0 },
        { HP: 5366, ATK: 119, DEF: 324, SP: 0 },
      ],
      "2": [
        { HP: 5999, ATK: 133, DEF: 362, SP: 28.8 },
        { HP: 6902, ATK: 153, DEF: 417, SP: 28.8 },
      ],
      "3": [
        { HP: 7746, ATK: 172, DEF: 468, SP: 57.6 },
        { HP: 8658, ATK: 192, DEF: 523, SP: 57.6 },
      ],
      "4": [
        { HP: 9291, ATK: 206, DEF: 561, SP: 57.6 },
        { HP: 10212, ATK: 226, DEF: 617, SP: 57.6 },
      ],
      "5": [
        { HP: 10845, ATK: 240, DEF: 655, SP: 86.4 },
        { HP: 11776, ATK: 261, DEF: 711, SP: 86.4 },
      ],
      "6": [
        { HP: 12409, ATK: 275, DEF: 750, SP: 115.2 },
        { HP: 13348, ATK: 296, DEF: 806, SP: 115.2 },
      ],
    },
    statBuff: "Elemental Mastery",
  },
  Kaeya: {
    element: "Cryo",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 975, ATK: 18, DEF: 66, SP: 0 },
        { HP: 2506, ATK: 48, DEF: 170, SP: 0 },
      ],
      "1": [
        { HP: 3235, ATK: 62, DEF: 220, SP: 0 },
        { HP: 4845, ATK: 92, DEF: 329, SP: 0 },
      ],
      "2": [
        { HP: 5363, ATK: 102, DEF: 364, SP: 6.7 },
        { HP: 6169, ATK: 118, DEF: 419, SP: 6.7 },
      ],
      "3": [
        { HP: 6860, ATK: 131, DEF: 466, SP: 13.4 },
        { HP: 7665, ATK: 146, DEF: 521, SP: 13.4 },
      ],
      "4": [
        { HP: 8183, ATK: 156, DEF: 556, SP: 13.4 },
        { HP: 8988, ATK: 172, DEF: 611, SP: 13.4 },
      ],
      "5": [
        { HP: 9506, ATK: 182, DEF: 646, SP: 20.1 },
        { HP: 10312, ATK: 197, DEF: 701, SP: 20.1 },
      ],
      "6": [
        { HP: 10830, ATK: 207, DEF: 736, SP: 26.8 },
        { HP: 11636, ATK: 223, DEF: 791, SP: 26.8 },
      ],
    },
    statBuff: "Energy Recharge",
  },
  KamisatoAyaka: {
    element: "Cryo",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1000, ATK: 26, DEF: 61, SP: 0 },
        { HP: 2596, ATK: 69, DEF: 158, SP: 0 },
      ],
      "1": [
        { HP: 3454, ATK: 91, DEF: 210, SP: 0 },
        { HP: 5169, ATK: 137, DEF: 315, SP: 0 },
      ],
      "2": [
        { HP: 5779, ATK: 153, DEF: 352, SP: 9.6 },
        { HP: 6649, ATK: 176, DEF: 405, SP: 9.6 },
      ],
      "3": [
        { HP: 7462, ATK: 198, DEF: 454, SP: 19.2 },
        { HP: 8341, ATK: 221, DEF: 508, SP: 19.2 },
      ],
      "4": [
        { HP: 8950, ATK: 238, DEF: 545, SP: 19.2 },
        { HP: 9837, ATK: 261, DEF: 599, SP: 19.2 },
      ],
      "5": [
        { HP: 10447, ATK: 277, DEF: 636, SP: 28.8 },
        { HP: 11344, ATK: 301, DEF: 691, SP: 28.8 },
      ],
      "6": [
        { HP: 11954, ATK: 317, DEF: 728, SP: 38.4 },
        { HP: 12858, ATK: 342, DEF: 783, SP: 38.4 },
      ],
    },
    statBuff: "CRIT DMG",
  },
  KamisatoAyato: {
    element: "Hydro",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1067, ATK: 23, DEF: 59, SP: 0 },
        { HP: 2769, ATK: 60, DEF: 155, SP: 0 },
      ],
      "1": [
        { HP: 3685, ATK: 80, DEF: 206, SP: 0 },
        { HP: 5514, ATK: 120, DEF: 308, SP: 0 },
      ],
      "2": [
        { HP: 6164, ATK: 134, DEF: 345, SP: 9.6 },
        { HP: 7092, ATK: 154, DEF: 397, SP: 9.6 },
      ],
      "3": [
        { HP: 7959, ATK: 173, DEF: 446, SP: 19.2 },
        { HP: 8897, ATK: 193, DEF: 498, SP: 19.2 },
      ],
      "4": [
        { HP: 9547, ATK: 208, DEF: 535, SP: 19.2 },
        { HP: 10493, ATK: 228, DEF: 588, SP: 19.2 },
      ],
      "5": [
        { HP: 11144, ATK: 242, DEF: 624, SP: 28.8 },
        { HP: 12100, ATK: 263, DEF: 678, SP: 28.8 },
      ],
      "6": [
        { HP: 12751, ATK: 277, DEF: 714, SP: 38.4 },
        { HP: 13715, ATK: 298, DEF: 768, SP: 38.4 },
      ],
    },
    statBuff: "CRIT DMG",
  },
  Keqing: {
    element: "Electro",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1020, ATK: 25, DEF: 62, SP: 0 },
        { HP: 2646, ATK: 65, DEF: 161, SP: 0 },
      ],
      "1": [
        { HP: 3520, ATK: 86, DEF: 214, SP: 0 },
        { HP: 5267, ATK: 129, DEF: 321, SP: 0 },
      ],
      "2": [
        { HP: 5889, ATK: 145, DEF: 359, SP: 9.6 },
        { HP: 6775, ATK: 166, DEF: 413, SP: 9.6 },
      ],
      "3": [
        { HP: 7604, ATK: 187, DEF: 463, SP: 19.2 },
        { HP: 8499, ATK: 209, DEF: 518, SP: 19.2 },
      ],
      "4": [
        { HP: 9121, ATK: 224, DEF: 556, SP: 19.2 },
        { HP: 10025, ATK: 247, DEF: 611, SP: 19.2 },
      ],
      "5": [
        { HP: 10646, ATK: 262, DEF: 649, SP: 28.8 },
        { HP: 11560, ATK: 284, DEF: 705, SP: 28.8 },
      ],
      "6": [
        { HP: 12182, ATK: 300, DEF: 743, SP: 38.4 },
        { HP: 13103, ATK: 322, DEF: 799, SP: 38.4 },
      ],
    },
    statBuff: "CRIT DMG",
  },
  Klee: {
    element: "Pyro",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 800, ATK: 24, DEF: 47, SP: 0 },
        { HP: 2077, ATK: 62, DEF: 124, SP: 0 },
      ],
      "1": [
        { HP: 2763, ATK: 83, DEF: 165, SP: 0 },
        { HP: 4135, ATK: 125, DEF: 247, SP: 0 },
      ],
      "2": [
        { HP: 4623, ATK: 139, DEF: 276, SP: 7.2 },
        { HP: 5319, ATK: 160, DEF: 317, SP: 7.2 },
      ],
      "3": [
        { HP: 5969, ATK: 180, DEF: 356, SP: 14.4 },
        { HP: 6672, ATK: 201, DEF: 398, SP: 14.4 },
      ],
      "4": [
        { HP: 7160, ATK: 216, DEF: 428, SP: 14.4 },
        { HP: 7870, ATK: 237, DEF: 470, SP: 14.4 },
      ],
      "5": [
        { HP: 8358, ATK: 252, DEF: 499, SP: 21.6 },
        { HP: 9075, ATK: 274, DEF: 542, SP: 21.6 },
      ],
      "6": [
        { HP: 9563, ATK: 289, DEF: 571, SP: 28.8 },
        { HP: 10286, ATK: 310, DEF: 614, SP: 28.8 },
      ],
    },
    statBuff: "Pyro DMG Bonus",
  },
  KujouSara: {
    element: "Electro",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 802, ATK: 16, DEF: 52, SP: 0 },
        { HP: 2061, ATK: 42, DEF: 135, SP: 0 },
      ],
      "1": [
        { HP: 2660, ATK: 54, DEF: 174, SP: 0 },
        { HP: 3985, ATK: 81, DEF: 261, SP: 0 },
      ],
      "2": [
        { HP: 4411, ATK: 90, DEF: 289, SP: 6 },
        { HP: 5074, ATK: 103, DEF: 332, SP: 6 },
      ],
      "3": [
        { HP: 5641, ATK: 115, DEF: 370, SP: 12 },
        { HP: 6304, ATK: 128, DEF: 413, SP: 12 },
      ],
      "4": [
        { HP: 6730, ATK: 137, DEF: 441, SP: 12 },
        { HP: 7392, ATK: 150, DEF: 485, SP: 12 },
      ],
      "5": [
        { HP: 7818, ATK: 159, DEF: 513, SP: 18 },
        { HP: 8481, ATK: 173, DEF: 556, SP: 18 },
      ],
      "6": [
        { HP: 8907, ATK: 181, DEF: 584, SP: 24 },
        { HP: 9569, ATK: 195, DEF: 627, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  KukiShinobu: {
    element: "Electro",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1030, ATK: 17, DEF: 62, SP: 0 },
        { HP: 2646, ATK: 45, DEF: 161, SP: 0 },
      ],
      "1": [
        { HP: 3416, ATK: 59, DEF: 208, SP: 0 },
        { HP: 5117, ATK: 88, DEF: 312, SP: 0 },
      ],
      "2": [
        { HP: 5664, ATK: 97, DEF: 346, SP: 6 },
        { HP: 6515, ATK: 112, DEF: 398, SP: 6 },
      ],
      "3": [
        { HP: 7244, ATK: 125, DEF: 442, SP: 12 },
        { HP: 8095, ATK: 139, DEF: 494, SP: 12 },
      ],
      "4": [
        { HP: 8642, ATK: 149, DEF: 528, SP: 12 },
        { HP: 9492, ATK: 164, DEF: 579, SP: 12 },
      ],
      "5": [
        { HP: 10039, ATK: 173, DEF: 613, SP: 18 },
        { HP: 10890, ATK: 188, DEF: 665, SP: 18 },
      ],
      "6": [
        { HP: 11437, ATK: 197, DEF: 698, SP: 24 },
        { HP: 12288, ATK: 212, DEF: 750, SP: 24 },
      ],
    },
    statBuff: "HP",
  },
  Layla: {
    element: "Cryo",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 930, ATK: 18, DEF: 54, SP: 0 },
        { HP: 2389, ATK: 46, DEF: 141, SP: 0 },
      ],
      "1": [
        { HP: 3084, ATK: 60, DEF: 182, SP: 0 },
        { HP: 4619, ATK: 90, DEF: 272, SP: 0 },
      ],
      "2": [
        { HP: 5113, ATK: 99, DEF: 302, SP: 6 },
        { HP: 5881, ATK: 114, DEF: 347, SP: 6 },
      ],
      "3": [
        { HP: 6539, ATK: 127, DEF: 386, SP: 12 },
        { HP: 7307, ATK: 142, DEF: 431, SP: 12 },
      ],
      "4": [
        { HP: 7801, ATK: 152, DEF: 460, SP: 12 },
        { HP: 8568, ATK: 167, DEF: 506, SP: 12 },
      ],
      "5": [
        { HP: 9062, ATK: 176, DEF: 535, SP: 18 },
        { HP: 9830, ATK: 191, DEF: 580, SP: 18 },
      ],
      "6": [
        { HP: 10324, ATK: 201, DEF: 609, SP: 24 },
        { HP: 11092, ATK: 216, DEF: 655, SP: 24 },
      ],
    },
    statBuff: "HP",
  },
  Lisa: {
    element: "Electro",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 802, ATK: 19, DEF: 48, SP: 0 },
        { HP: 2061, ATK: 49, DEF: 123, SP: 0 },
      ],
      "1": [
        { HP: 2660, ATK: 64, DEF: 159, SP: 0 },
        { HP: 3985, ATK: 96, DEF: 238, SP: 0 },
      ],
      "2": [
        { HP: 4411, ATK: 106, DEF: 264, SP: 24 },
        { HP: 5074, ATK: 122, DEF: 303, SP: 24 },
      ],
      "3": [
        { HP: 5641, ATK: 136, DEF: 338, SP: 48 },
        { HP: 6304, ATK: 152, DEF: 377, SP: 48 },
      ],
      "4": [
        { HP: 6730, ATK: 162, DEF: 403, SP: 48 },
        { HP: 7392, ATK: 178, DEF: 442, SP: 48 },
      ],
      "5": [
        { HP: 7818, ATK: 189, DEF: 468, SP: 72 },
        { HP: 8481, ATK: 205, DEF: 508, SP: 72 },
      ],
      "6": [
        { HP: 8907, ATK: 215, DEF: 533, SP: 96 },
        { HP: 9569, ATK: 231, DEF: 573, SP: 96 },
      ],
    },
    statBuff: "Elemental Mastery",
  },
  Mona: {
    element: "Hydro",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 810, ATK: 22, DEF: 50, SP: 0 },
        { HP: 2101, ATK: 57, DEF: 131, SP: 0 },
      ],
      "1": [
        { HP: 2796, ATK: 77, DEF: 175, SP: 0 },
        { HP: 4184, ATK: 115, DEF: 262, SP: 0 },
      ],
      "2": [
        { HP: 4678, ATK: 129, DEF: 293, SP: 8 },
        { HP: 5382, ATK: 148, DEF: 337, SP: 8 },
      ],
      "3": [
        { HP: 6040, ATK: 166, DEF: 379, SP: 16 },
        { HP: 6752, ATK: 186, DEF: 423, SP: 16 },
      ],
      "4": [
        { HP: 7245, ATK: 199, DEF: 454, SP: 16 },
        { HP: 7963, ATK: 219, DEF: 499, SP: 16 },
      ],
      "5": [
        { HP: 8457, ATK: 233, DEF: 530, SP: 24 },
        { HP: 9183, ATK: 253, DEF: 576, SP: 24 },
      ],
      "6": [
        { HP: 9677, ATK: 266, DEF: 607, SP: 32 },
        { HP: 10409, ATK: 287, DEF: 653, SP: 32 },
      ],
    },
    statBuff: "Energy Recharge",
  },
  Nahida: {
    element: "Dendro",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 806, ATK: 23, DEF: 49, SP: 0 },
        { HP: 2092, ATK: 60, DEF: 127, SP: 0 },
      ],
      "1": [
        { HP: 2783, ATK: 80, DEF: 169, SP: 0 },
        { HP: 4165, ATK: 120, DEF: 253, SP: 0 },
      ],
      "2": [
        { HP: 4656, ATK: 134, DEF: 283, SP: 28.8 },
        { HP: 5357, ATK: 154, DEF: 325, SP: 28.8 },
      ],
      "3": [
        { HP: 6012, ATK: 173, DEF: 365, SP: 57.6 },
        { HP: 6720, ATK: 193, DEF: 408, SP: 57.6 },
      ],
      "4": [
        { HP: 7211, ATK: 208, DEF: 438, SP: 57.6 },
        { HP: 7926, ATK: 228, DEF: 482, SP: 57.6 },
      ],
      "5": [
        { HP: 8417, ATK: 242, DEF: 512, SP: 86.4 },
        { HP: 9140, ATK: 263, DEF: 556, SP: 86.4 },
      ],
      "6": [
        { HP: 9631, ATK: 277, DEF: 585, SP: 115.2 },
        { HP: 10360, ATK: 298, DEF: 630, SP: 115.2 },
      ],
    },
    statBuff: "Elemental Mastery",
  },
  Nilou: {
    element: "Hydro",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 1182, ATK: 17, DEF: 56, SP: 0 },
        { HP: 3066, ATK: 46, DEF: 147, SP: 0 },
      ],
      "1": [
        { HP: 4079, ATK: 61, DEF: 195, SP: 0 },
        { HP: 6104, ATK: 92, DEF: 292, SP: 0 },
      ],
      "2": [
        { HP: 6825, ATK: 103, DEF: 327, SP: 7.2 },
        { HP: 7852, ATK: 118, DEF: 376, SP: 7.2 },
      ],
      "3": [
        { HP: 8812, ATK: 133, DEF: 422, SP: 14.4 },
        { HP: 9850, ATK: 148, DEF: 472, SP: 14.4 },
      ],
      "4": [
        { HP: 10570, ATK: 159, DEF: 507, SP: 14.4 },
        { HP: 11617, ATK: 175, DEF: 557, SP: 14.4 },
      ],
      "5": [
        { HP: 12338, ATK: 186, DEF: 591, SP: 21.6 },
        { HP: 13397, ATK: 202, DEF: 642, SP: 21.6 },
      ],
      "6": [
        { HP: 14117, ATK: 213, DEF: 677, SP: 28.8 },
        { HP: 15184, ATK: 229, DEF: 728, SP: 28.8 },
      ],
    },
    statBuff: "HP",
  },
  Ningguang: {
    element: "Geo",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 820, ATK: 17, DEF: 48, SP: 0 },
        { HP: 2108, ATK: 45, DEF: 123, SP: 0 },
      ],
      "1": [
        { HP: 2721, ATK: 59, DEF: 159, SP: 0 },
        { HP: 4076, ATK: 88, DEF: 238, SP: 0 },
      ],
      "2": [
        { HP: 4511, ATK: 97, DEF: 264, SP: 6 },
        { HP: 5189, ATK: 112, DEF: 303, SP: 6 },
      ],
      "3": [
        { HP: 5770, ATK: 125, DEF: 338, SP: 12 },
        { HP: 6448, ATK: 139, DEF: 377, SP: 12 },
      ],
      "4": [
        { HP: 6883, ATK: 149, DEF: 403, SP: 12 },
        { HP: 7560, ATK: 164, DEF: 442, SP: 12 },
      ],
      "5": [
        { HP: 7996, ATK: 173, DEF: 468, SP: 18 },
        { HP: 8674, ATK: 188, DEF: 508, SP: 18 },
      ],
      "6": [
        { HP: 9109, ATK: 197, DEF: 533, SP: 24 },
        { HP: 9787, ATK: 212, DEF: 573, SP: 24 },
      ],
    },
    statBuff: "Geo DMG Bonus",
  },
  Noelle: {
    element: "Geo",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 1012, ATK: 16, DEF: 66, SP: 0 },
        { HP: 2600, ATK: 41, DEF: 172, SP: 0 },
      ],
      "1": [
        { HP: 3356, ATK: 53, DEF: 222, SP: 0 },
        { HP: 5027, ATK: 79, DEF: 332, SP: 0 },
      ],
      "2": [
        { HP: 5564, ATK: 88, DEF: 368, SP: 7.5 },
        { HP: 6400, ATK: 101, DEF: 423, SP: 7.5 },
      ],
      "3": [
        { HP: 7116, ATK: 112, DEF: 470, SP: 15 },
        { HP: 7952, ATK: 125, DEF: 526, SP: 15 },
      ],
      "4": [
        { HP: 8489, ATK: 134, DEF: 561, SP: 15 },
        { HP: 9324, ATK: 147, DEF: 616, SP: 15 },
      ],
      "5": [
        { HP: 9861, ATK: 156, DEF: 652, SP: 22.5 },
        { HP: 10697, ATK: 169, DEF: 707, SP: 22.5 },
      ],
      "6": [
        { HP: 11235, ATK: 177, DEF: 743, SP: 30 },
        { HP: 12071, ATK: 191, DEF: 798, SP: 30 },
      ],
    },
    statBuff: "DEF",
  },
  Qiqi: {
    element: "Cryo",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 962, ATK: 22, DEF: 71, SP: 0 },
        { HP: 2497, ATK: 57, DEF: 186, SP: 0 },
      ],
      "1": [
        { HP: 3323, ATK: 77, DEF: 247, SP: 0 },
        { HP: 4972, ATK: 115, DEF: 370, SP: 0 },
      ],
      "2": [
        { HP: 5559, ATK: 129, DEF: 414, SP: 5.5 },
        { HP: 6395, ATK: 148, DEF: 476, SP: 5.5 },
      ],
      "3": [
        { HP: 7177, ATK: 166, DEF: 535, SP: 11 },
        { HP: 8023, ATK: 186, DEF: 598, SP: 11 },
      ],
      "4": [
        { HP: 8609, ATK: 199, DEF: 642, SP: 11 },
        { HP: 9463, ATK: 219, DEF: 705, SP: 11 },
      ],
      "5": [
        { HP: 10049, ATK: 233, DEF: 749, SP: 16.5 },
        { HP: 10912, ATK: 253, DEF: 813, SP: 16.5 },
      ],
      "6": [
        { HP: 11498, ATK: 266, DEF: 857, SP: 22 },
        { HP: 12368, ATK: 287, DEF: 922, SP: 22 },
      ],
    },
    statBuff: "Healing Bonus",
  },
  RaidenShogun: {
    element: "Electro",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 1004, ATK: 26, DEF: 61, SP: 0 },
        { HP: 2606, ATK: 68, DEF: 159, SP: 0 },
      ],
      "1": [
        { HP: 3467, ATK: 90, DEF: 212, SP: 0 },
        { HP: 5189, ATK: 135, DEF: 317, SP: 0 },
      ],
      "2": [
        { HP: 5801, ATK: 151, DEF: 354, SP: 8 },
        { HP: 6674, ATK: 174, DEF: 408, SP: 8 },
      ],
      "3": [
        { HP: 7490, ATK: 195, DEF: 458, SP: 16 },
        { HP: 8372, ATK: 218, DEF: 512, SP: 16 },
      ],
      "4": [
        { HP: 8985, ATK: 234, DEF: 549, SP: 16 },
        { HP: 9875, ATK: 258, DEF: 603, SP: 16 },
      ],
      "5": [
        { HP: 10487, ATK: 274, DEF: 641, SP: 24 },
        { HP: 11387, ATK: 297, DEF: 696, SP: 24 },
      ],
      "6": [
        { HP: 11999, ATK: 313, DEF: 733, SP: 32 },
        { HP: 12907, ATK: 337, DEF: 789, SP: 32 },
      ],
    },
    statBuff: "Energy Recharge",
  },
  Razor: {
    element: "Electro",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 1002, ATK: 19, DEF: 62, SP: 0 },
        { HP: 2576, ATK: 50, DEF: 161, SP: 0 },
      ],
      "1": [
        { HP: 3325, ATK: 64, DEF: 208, SP: 0 },
        { HP: 4981, ATK: 97, DEF: 312, SP: 0 },
      ],
      "2": [
        { HP: 5514, ATK: 107, DEF: 346, SP: 7.5 },
        { HP: 6342, ATK: 123, DEF: 398, SP: 7.5 },
      ],
      "3": [
        { HP: 7052, ATK: 137, DEF: 442, SP: 15 },
        { HP: 7880, ATK: 153, DEF: 494, SP: 15 },
      ],
      "4": [
        { HP: 8413, ATK: 164, DEF: 528, SP: 15 },
        { HP: 9240, ATK: 180, DEF: 579, SP: 15 },
      ],
      "5": [
        { HP: 9773, ATK: 190, DEF: 613, SP: 22.5 },
        { HP: 10601, ATK: 207, DEF: 665, SP: 22.5 },
      ],
      "6": [
        { HP: 11133, ATK: 217, DEF: 698, SP: 30 },
        { HP: 11962, ATK: 233, DEF: 750, SP: 30 },
      ],
    },
    statBuff: "Physical DMG Bonus",
  },
  Rosaria: {
    element: "Cryo",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 1030, ATK: 20, DEF: 59, SP: 0 },
        { HP: 2646, ATK: 51, DEF: 152, SP: 0 },
      ],
      "1": [
        { HP: 3416, ATK: 66, DEF: 197, SP: 0 },
        { HP: 5117, ATK: 99, DEF: 295, SP: 0 },
      ],
      "2": [
        { HP: 5664, ATK: 110, DEF: 327, SP: 6 },
        { HP: 6515, ATK: 127, DEF: 376, SP: 6 },
      ],
      "3": [
        { HP: 7244, ATK: 141, DEF: 418, SP: 12 },
        { HP: 8095, ATK: 158, DEF: 467, SP: 12 },
      ],
      "4": [
        { HP: 8642, ATK: 168, DEF: 499, SP: 12 },
        { HP: 9492, ATK: 185, DEF: 548, SP: 12 },
      ],
      "5": [
        { HP: 10039, ATK: 196, DEF: 579, SP: 18 },
        { HP: 10890, ATK: 212, DEF: 629, SP: 18 },
      ],
      "6": [
        { HP: 11437, ATK: 223, DEF: 660, SP: 24 },
        { HP: 12288, ATK: 240, DEF: 709, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  SangonomiyaKokomi: {
    element: "Hydro",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 1048, ATK: 18, DEF: 51, SP: 0 },
        { HP: 2720, ATK: 47, DEF: 132, SP: 0 },
      ],
      "1": [
        { HP: 3619, ATK: 62, DEF: 176, SP: 0 },
        { HP: 5415, ATK: 94, DEF: 264, SP: 0 },
      ],
      "2": [
        { HP: 6054, ATK: 105, DEF: 295, SP: 7.2 },
        { HP: 6965, ATK: 121, DEF: 339, SP: 7.2 },
      ],
      "3": [
        { HP: 7817, ATK: 136, DEF: 381, SP: 14.4 },
        { HP: 8738, ATK: 152, DEF: 426, SP: 14.4 },
      ],
      "4": [
        { HP: 9377, ATK: 163, DEF: 457, SP: 14.4 },
        { HP: 10306, ATK: 179, DEF: 502, SP: 14.4 },
      ],
      "5": [
        { HP: 10945, ATK: 190, DEF: 533, SP: 21.6 },
        { HP: 11884, ATK: 206, DEF: 579, SP: 21.6 },
      ],
      "6": [
        { HP: 12523, ATK: 217, DEF: 610, SP: 28.8 },
        { HP: 13470, ATK: 234, DEF: 657, SP: 28.8 },
      ],
    },
    statBuff: "Hydro DMG Bonus",
  },
  Sayu: {
    element: "Anemo",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 993, ATK: 20, DEF: 62, SP: 0 },
        { HP: 2553, ATK: 52, DEF: 160, SP: 0 },
      ],
      "1": [
        { HP: 3295, ATK: 67, DEF: 207, SP: 0 },
        { HP: 4936, ATK: 101, DEF: 310, SP: 0 },
      ],
      "2": [
        { HP: 5464, ATK: 112, DEF: 343, SP: 24 },
        { HP: 6284, ATK: 129, DEF: 394, SP: 24 },
      ],
      "3": [
        { HP: 6988, ATK: 144, DEF: 438, SP: 48 },
        { HP: 7809, ATK: 160, DEF: 490, SP: 48 },
      ],
      "4": [
        { HP: 8336, ATK: 171, DEF: 523, SP: 48 },
        { HP: 9156, ATK: 188, DEF: 575, SP: 48 },
      ],
      "5": [
        { HP: 9684, ATK: 199, DEF: 608, SP: 72 },
        { HP: 10505, ATK: 216, DEF: 659, SP: 72 },
      ],
      "6": [
        { HP: 11032, ATK: 227, DEF: 693, SP: 96 },
        { HP: 11853, ATK: 244, DEF: 744, SP: 96 },
      ],
    },
    statBuff: "Elemental Mastery",
  },
  Shenhe: {
    element: "Cryo",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 1011, ATK: 23, DEF: 64, SP: 0 },
        { HP: 2623, ATK: 61, DEF: 167, SP: 0 },
      ],
      "1": [
        { HP: 3491, ATK: 81, DEF: 223, SP: 0 },
        { HP: 5223, ATK: 122, DEF: 333, SP: 0 },
      ],
      "2": [
        { HP: 5839, ATK: 136, DEF: 373, SP: 7.2 },
        { HP: 6718, ATK: 157, DEF: 429, SP: 7.2 },
      ],
      "3": [
        { HP: 7540, ATK: 176, DEF: 481, SP: 14.4 },
        { HP: 8428, ATK: 197, DEF: 538, SP: 14.4 },
      ],
      "4": [
        { HP: 9044, ATK: 211, DEF: 577, SP: 14.4 },
        { HP: 9940, ATK: 232, DEF: 635, SP: 14.4 },
      ],
      "5": [
        { HP: 10557, ATK: 246, DEF: 674, SP: 21.6 },
        { HP: 11463, ATK: 267, DEF: 732, SP: 21.6 },
      ],
      "6": [
        { HP: 12079, ATK: 282, DEF: 771, SP: 28.8 },
        { HP: 12992, ATK: 303, DEF: 830, SP: 28.8 },
      ],
    },
    statBuff: "ATK",
  },
  ShikanoinHeizou: {
    element: "Anemo",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 893, ATK: 18, DEF: 57, SP: 0 },
        { HP: 2295, ATK: 48, DEF: 147, SP: 0 },
      ],
      "1": [
        { HP: 2963, ATK: 62, DEF: 190, SP: 0 },
        { HP: 4438, ATK: 93, DEF: 284, SP: 0 },
      ],
      "2": [
        { HP: 4912, ATK: 103, DEF: 315, SP: 6 },
        { HP: 5650, ATK: 119, DEF: 362, SP: 6 },
      ],
      "3": [
        { HP: 6283, ATK: 132, DEF: 403, SP: 12 },
        { HP: 7021, ATK: 148, DEF: 450, SP: 12 },
      ],
      "4": [
        { HP: 7495, ATK: 158, DEF: 480, SP: 12 },
        { HP: 8232, ATK: 173, DEF: 528, SP: 12 },
      ],
      "5": [
        { HP: 8706, ATK: 183, DEF: 558, SP: 18 },
        { HP: 9445, ATK: 199, DEF: 606, SP: 18 },
      ],
      "6": [
        { HP: 9919, ATK: 209, DEF: 636, SP: 24 },
        { HP: 10657, ATK: 225, DEF: 683, SP: 24 },
      ],
    },
    statBuff: "Anemo DMG Bonus",
  },
  Sucrose: {
    element: "Anemo",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 775, ATK: 14, DEF: 58, SP: 0 },
        { HP: 1991, ATK: 36, DEF: 151, SP: 0 },
      ],
      "1": [
        { HP: 2570, ATK: 47, DEF: 195, SP: 0 },
        { HP: 3849, ATK: 70, DEF: 292, SP: 0 },
      ],
      "2": [
        { HP: 4260, ATK: 78, DEF: 324, SP: 6 },
        { HP: 4901, ATK: 90, DEF: 372, SP: 6 },
      ],
      "3": [
        { HP: 5449, ATK: 100, DEF: 414, SP: 12 },
        { HP: 6089, ATK: 111, DEF: 463, SP: 12 },
      ],
      "4": [
        { HP: 6501, ATK: 119, DEF: 494, SP: 12 },
        { HP: 7140, ATK: 131, DEF: 543, SP: 12 },
      ],
      "5": [
        { HP: 7551, ATK: 138, DEF: 574, SP: 18 },
        { HP: 8192, ATK: 150, DEF: 623, SP: 18 },
      ],
      "6": [
        { HP: 8603, ATK: 158, DEF: 654, SP: 24 },
        { HP: 9243, ATK: 169, DEF: 702, SP: 24 },
      ],
    },
    statBuff: "Anemo DMG Bonus",
  },
  Tartaglia: {
    element: "Hydro",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 1020, ATK: 23, DEF: 63, SP: 0 },
        { HP: 2646, ATK: 60, DEF: 164, SP: 0 },
      ],
      "1": [
        { HP: 3520, ATK: 80, DEF: 218, SP: 0 },
        { HP: 5267, ATK: 121, DEF: 327, SP: 0 },
      ],
      "2": [
        { HP: 5889, ATK: 135, DEF: 366, SP: 7.2 },
        { HP: 6775, ATK: 155, DEF: 421, SP: 7.2 },
      ],
      "3": [
        { HP: 7604, ATK: 174, DEF: 472, SP: 14.4 },
        { HP: 8499, ATK: 195, DEF: 528, SP: 14.4 },
      ],
      "4": [
        { HP: 9121, ATK: 209, DEF: 567, SP: 14.4 },
        { HP: 10025, ATK: 230, DEF: 623, SP: 14.4 },
      ],
      "5": [
        { HP: 10646, ATK: 244, DEF: 661, SP: 21.6 },
        { HP: 11560, ATK: 265, DEF: 718, SP: 21.6 },
      ],
      "6": [
        { HP: 12182, ATK: 280, DEF: 757, SP: 28.8 },
        { HP: 13103, ATK: 301, DEF: 814, SP: 28.8 },
      ],
    },
    statBuff: "Hydro DMG Bonus",
  },
  Thoma: {
    element: "Pyro",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 866, ATK: 16, DEF: 62, SP: 0 },
        { HP: 2225, ATK: 43, DEF: 161, SP: 0 },
      ],
      "1": [
        { HP: 2872, ATK: 56, DEF: 208, SP: 0 },
        { HP: 4302, ATK: 84, DEF: 312, SP: 0 },
      ],
      "2": [
        { HP: 4762, ATK: 93, DEF: 346, SP: 6 },
        { HP: 5477, ATK: 106, DEF: 398, SP: 6 },
      ],
      "3": [
        { HP: 6090, ATK: 118, DEF: 442, SP: 12 },
        { HP: 6806, ATK: 132, DEF: 494, SP: 12 },
      ],
      "4": [
        { HP: 7266, ATK: 141, DEF: 528, SP: 12 },
        { HP: 7980, ATK: 155, DEF: 579, SP: 12 },
      ],
      "5": [
        { HP: 8440, ATK: 164, DEF: 613, SP: 18 },
        { HP: 9155, ATK: 178, DEF: 665, SP: 18 },
      ],
      "6": [
        { HP: 9615, ATK: 187, DEF: 698, SP: 24 },
        { HP: 10331, ATK: 201, DEF: 750, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  Tighnari: {
    element: "Dendro",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 844, ATK: 20, DEF: 49, SP: 0 },
        { HP: 2191, ATK: 54, DEF: 127, SP: 0 },
      ],
      "1": [
        { HP: 2915, ATK: 71, DEF: 169, SP: 0 },
        { HP: 4362, ATK: 107, DEF: 253, SP: 0 },
      ],
      "2": [
        { HP: 4876, ATK: 120, DEF: 283, SP: 7.2 },
        { HP: 5610, ATK: 138, DEF: 325, SP: 7.2 },
      ],
      "3": [
        { HP: 6296, ATK: 155, DEF: 365, SP: 14.4 },
        { HP: 7038, ATK: 173, DEF: 408, SP: 14.4 },
      ],
      "4": [
        { HP: 7552, ATK: 186, DEF: 438, SP: 14.4 },
        { HP: 8301, ATK: 204, DEF: 482, SP: 14.4 },
      ],
      "5": [
        { HP: 8815, ATK: 217, DEF: 512, SP: 21.6 },
        { HP: 9572, ATK: 236, DEF: 556, SP: 21.6 },
      ],
      "6": [
        { HP: 10087, ATK: 249, DEF: 585, SP: 28.8 },
        { HP: 10849, ATK: 267, DEF: 630, SP: 28.8 },
      ],
    },
    statBuff: "Dendro DMG Bonus",
  },
  Traveler: {
    element: "None",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 911, ATK: 17, DEF: 57, SP: 0 },
        { HP: 2342, ATK: 45, DEF: 147, SP: 0 },
      ],
      "1": [
        { HP: 3023, ATK: 59, DEF: 189, SP: 0 },
        { HP: 4528, ATK: 88, DEF: 284, SP: 0 },
      ],
      "2": [
        { HP: 5012, ATK: 97, DEF: 314, SP: 6 },
        { HP: 5766, ATK: 112, DEF: 361, SP: 6 },
      ],
      "3": [
        { HP: 6411, ATK: 125, DEF: 402, SP: 12 },
        { HP: 7164, ATK: 139, DEF: 449, SP: 12 },
      ],
      "4": [
        { HP: 7648, ATK: 149, DEF: 480, SP: 12 },
        { HP: 8400, ATK: 164, DEF: 527, SP: 12 },
      ],
      "5": [
        { HP: 8884, ATK: 173, DEF: 557, SP: 18 },
        { HP: 9637, ATK: 188, DEF: 604, SP: 18 },
      ],
      "6": [
        { HP: 10121, ATK: 197, DEF: 635, SP: 24 },
        { HP: 10874, ATK: 212, DEF: 682, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  Venti: {
    element: "Anemo",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 819, ATK: 20, DEF: 52, SP: 0 },
        { HP: 2126, ATK: 53, DEF: 135, SP: 0 },
      ],
      "1": [
        { HP: 2829, ATK: 70, DEF: 179, SP: 0 },
        { HP: 4234, ATK: 105, DEF: 268, SP: 0 },
      ],
      "2": [
        { HP: 4733, ATK: 118, DEF: 300, SP: 8 },
        { HP: 5445, ATK: 136, DEF: 345, SP: 8 },
      ],
      "3": [
        { HP: 6111, ATK: 152, DEF: 388, SP: 16 },
        { HP: 6831, ATK: 170, DEF: 433, SP: 16 },
      ],
      "4": [
        { HP: 7331, ATK: 183, DEF: 465, SP: 16 },
        { HP: 8057, ATK: 201, DEF: 511, SP: 16 },
      ],
      "5": [
        { HP: 8557, ATK: 213, DEF: 543, SP: 24 },
        { HP: 9291, ATK: 232, DEF: 589, SP: 24 },
      ],
      "6": [
        { HP: 9791, ATK: 244, DEF: 621, SP: 32 },
        { HP: 10531, ATK: 263, DEF: 668, SP: 32 },
      ],
    },
    statBuff: "Energy Recharge",
  },
  Wanderer: {
    element: "Anemo",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 791, ATK: 25, DEF: 47, SP: 0 },
        { HP: 2052, ATK: 66, DEF: 122, SP: 0 },
      ],
      "1": [
        { HP: 2730, ATK: 88, DEF: 163, SP: 0 },
        { HP: 4086, ATK: 131, DEF: 244, SP: 0 },
      ],
      "2": [
        { HP: 4568, ATK: 147, DEF: 272, SP: 4.8 },
        { HP: 5256, ATK: 169, DEF: 313, SP: 4.8 },
      ],
      "3": [
        { HP: 5898, ATK: 190, DEF: 352, SP: 9.6 },
        { HP: 6593, ATK: 212, DEF: 393, SP: 9.6 },
      ],
      "4": [
        { HP: 7075, ATK: 228, DEF: 422, SP: 9.6 },
        { HP: 7776, ATK: 250, DEF: 464, SP: 9.6 },
      ],
      "5": [
        { HP: 8258, ATK: 266, DEF: 493, SP: 14.4 },
        { HP: 8967, ATK: 289, DEF: 535, SP: 14.4 },
      ],
      "6": [
        { HP: 9449, ATK: 304, DEF: 564, SP: 19.2 },
        { HP: 10164, ATK: 327, DEF: 607, SP: 19.2 },
      ],
    },
    statBuff: "CRIT Rate",
  },
  Xiangling: {
    element: "Pyro",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 911, ATK: 18, DEF: 56, SP: 0 },
        { HP: 2342, ATK: 48, DEF: 144, SP: 0 },
      ],
      "1": [
        { HP: 3023, ATK: 62, DEF: 185, SP: 0 },
        { HP: 4528, ATK: 93, DEF: 278, SP: 0 },
      ],
      "2": [
        { HP: 5012, ATK: 103, DEF: 308, SP: 24 },
        { HP: 5766, ATK: 119, DEF: 354, SP: 24 },
      ],
      "3": [
        { HP: 6411, ATK: 132, DEF: 394, SP: 48 },
        { HP: 7164, ATK: 148, DEF: 440, SP: 48 },
      ],
      "4": [
        { HP: 7648, ATK: 158, DEF: 470, SP: 48 },
        { HP: 8400, ATK: 173, DEF: 516, SP: 48 },
      ],
      "5": [
        { HP: 8884, ATK: 183, DEF: 546, SP: 72 },
        { HP: 9637, ATK: 199, DEF: 592, SP: 72 },
      ],
      "6": [
        { HP: 10121, ATK: 209, DEF: 622, SP: 96 },
        { HP: 10874, ATK: 225, DEF: 668, SP: 96 },
      ],
    },
    statBuff: "Elemental Mastery",
  },
  Xiao: {
    element: "Anemo",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 991, ATK: 27, DEF: 62, SP: 0 },
        { HP: 2571, ATK: 70, DEF: 161, SP: 0 },
      ],
      "1": [
        { HP: 3421, ATK: 93, DEF: 214, SP: 0 },
        { HP: 5120, ATK: 140, DEF: 321, SP: 0 },
      ],
      "2": [
        { HP: 5724, ATK: 156, DEF: 359, SP: 4.8 },
        { HP: 6585, ATK: 180, DEF: 413, SP: 4.8 },
      ],
      "3": [
        { HP: 7391, ATK: 202, DEF: 463, SP: 9.6 },
        { HP: 8261, ATK: 226, DEF: 518, SP: 9.6 },
      ],
      "4": [
        { HP: 8865, ATK: 243, DEF: 556, SP: 9.6 },
        { HP: 9744, ATK: 267, DEF: 611, SP: 9.6 },
      ],
      "5": [
        { HP: 10348, ATK: 283, DEF: 649, SP: 14.4 },
        { HP: 11236, ATK: 308, DEF: 705, SP: 14.4 },
      ],
      "6": [
        { HP: 11840, ATK: 324, DEF: 743, SP: 19.2 },
        { HP: 12735, ATK: 349, DEF: 799, SP: 19.2 },
      ],
    },
    statBuff: "CRIT Rate",
  },
  Xingqiu: {
    element: "Hydro",
    weapon: "Sword",
    stats: {
      "0": [
        { HP: 857, ATK: 16, DEF: 63, SP: 0 },
        { HP: 2201, ATK: 43, DEF: 163, SP: 0 },
      ],
      "1": [
        { HP: 2842, ATK: 56, DEF: 210, SP: 0 },
        { HP: 4257, ATK: 84, DEF: 315, SP: 0 },
      ],
      "2": [
        { HP: 4712, ATK: 93, DEF: 349, SP: 6 },
        { HP: 5420, ATK: 106, DEF: 401, SP: 6 },
      ],
      "3": [
        { HP: 6026, ATK: 118, DEF: 446, SP: 12 },
        { HP: 6734, ATK: 132, DEF: 499, SP: 12 },
      ],
      "4": [
        { HP: 7189, ATK: 141, DEF: 532, SP: 12 },
        { HP: 7896, ATK: 155, DEF: 585, SP: 12 },
      ],
      "5": [
        { HP: 8351, ATK: 164, DEF: 618, SP: 18 },
        { HP: 9059, ATK: 178, DEF: 671, SP: 18 },
      ],
      "6": [
        { HP: 9514, ATK: 187, DEF: 705, SP: 24 },
        { HP: 10222, ATK: 201, DEF: 757, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  Xinyan: {
    element: "Pyro",
    weapon: "Claymore",
    stats: {
      "0": [
        { HP: 939, ATK: 20, DEF: 66, SP: 0 },
        { HP: 2412, ATK: 53, DEF: 172, SP: 0 },
      ],
      "1": [
        { HP: 3114, ATK: 69, DEF: 222, SP: 0 },
        { HP: 4664, ATK: 103, DEF: 332, SP: 0 },
      ],
      "2": [
        { HP: 5163, ATK: 114, DEF: 368, SP: 6 },
        { HP: 5939, ATK: 131, DEF: 423, SP: 6 },
      ],
      "3": [
        { HP: 6603, ATK: 146, DEF: 470, SP: 12 },
        { HP: 7379, ATK: 163, DEF: 526, SP: 12 },
      ],
      "4": [
        { HP: 7877, ATK: 174, DEF: 561, SP: 12 },
        { HP: 8652, ATK: 191, DEF: 616, SP: 12 },
      ],
      "5": [
        { HP: 9151, ATK: 203, DEF: 652, SP: 18 },
        { HP: 9926, ATK: 220, DEF: 707, SP: 18 },
      ],
      "6": [
        { HP: 10425, ATK: 231, DEF: 743, SP: 24 },
        { HP: 11201, ATK: 248, DEF: 798, SP: 24 },
      ],
    },
    statBuff: "ATK",
  },
  YaeMiko: {
    element: "Electro",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 807, ATK: 26, DEF: 44, SP: 0 },
        { HP: 2094, ATK: 68, DEF: 114, SP: 0 },
      ],
      "1": [
        { HP: 2786, ATK: 91, DEF: 152, SP: 0 },
        { HP: 4170, ATK: 136, DEF: 228, SP: 0 },
      ],
      "2": [
        { HP: 4661, ATK: 152, DEF: 255, SP: 4.8 },
        { HP: 5363, ATK: 175, DEF: 294, SP: 4.8 },
      ],
      "3": [
        { HP: 6019, ATK: 197, DEF: 330, SP: 9.6 },
        { HP: 6728, ATK: 220, DEF: 368, SP: 9.6 },
      ],
      "4": [
        { HP: 7220, ATK: 236, DEF: 395, SP: 9.6 },
        { HP: 7935, ATK: 259, DEF: 435, SP: 9.6 },
      ],
      "5": [
        { HP: 8427, ATK: 275, DEF: 462, SP: 14.4 },
        { HP: 9151, ATK: 299, DEF: 501, SP: 14.4 },
      ],
      "6": [
        { HP: 9643, ATK: 315, DEF: 528, SP: 19.2 },
        { HP: 10372, ATK: 339, DEF: 568, SP: 19.2 },
      ],
    },
    statBuff: "CRIT Rate",
  },
  Yanfei: {
    element: "Pyro",
    weapon: "Catalyst",
    stats: {
      "0": [
        { HP: 784, ATK: 20, DEF: 49, SP: 0 },
        { HP: 2014, ATK: 51, DEF: 126, SP: 0 },
      ],
      "1": [
        { HP: 2600, ATK: 66, DEF: 163, SP: 0 },
        { HP: 3894, ATK: 99, DEF: 244, SP: 0 },
      ],
      "2": [
        { HP: 4311, ATK: 110, DEF: 270, SP: 6 },
        { HP: 4958, ATK: 127, DEF: 311, SP: 6 },
      ],
      "3": [
        { HP: 5513, ATK: 141, DEF: 346, SP: 12 },
        { HP: 6161, ATK: 158, DEF: 386, SP: 12 },
      ],
      "4": [
        { HP: 6577, ATK: 168, DEF: 412, SP: 12 },
        { HP: 7224, ATK: 185, DEF: 453, SP: 12 },
      ],
      "5": [
        { HP: 7640, ATK: 196, DEF: 479, SP: 18 },
        { HP: 8288, ATK: 212, DEF: 520, SP: 18 },
      ],
      "6": [
        { HP: 8704, ATK: 223, DEF: 546, SP: 24 },
        { HP: 9352, ATK: 240, DEF: 586, SP: 24 },
      ],
    },
    statBuff: "Pyro DMG Bonus",
  },
  Yaoyao: {
    element: "Dendro",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 1030, ATK: 17, DEF: 62, SP: 0 },
        { HP: 2646, ATK: 45, DEF: 161, SP: 0 },
      ],
      "1": [
        { HP: 3416, ATK: 59, DEF: 208, SP: 0 },
        { HP: 5117, ATK: 88, DEF: 312, SP: 0 },
      ],
      "2": [
        { HP: 5664, ATK: 97, DEF: 346, SP: 6 },
        { HP: 6515, ATK: 112, DEF: 398, SP: 6 },
      ],
      "3": [
        { HP: 7244, ATK: 125, DEF: 442, SP: 12 },
        { HP: 8095, ATK: 139, DEF: 494, SP: 12 },
      ],
      "4": [
        { HP: 8642, ATK: 149, DEF: 528, SP: 12 },
        { HP: 9492, ATK: 164, DEF: 579, SP: 12 },
      ],
      "5": [
        { HP: 10039, ATK: 173, DEF: 613, SP: 18 },
        { HP: 10890, ATK: 188, DEF: 665, SP: 18 },
      ],
      "6": [
        { HP: 11437, ATK: 197, DEF: 698, SP: 24 },
        { HP: 12288, ATK: 212, DEF: 750, SP: 24 },
      ],
    },
    statBuff: "HP",
  },
  Yelan: {
    element: "Hydro",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 1124, ATK: 18, DEF: 42, SP: 0 },
        { HP: 2918, ATK: 49, DEF: 110, SP: 0 },
      ],
      "1": [
        { HP: 3882, ATK: 65, DEF: 147, SP: 0 },
        { HP: 5809, ATK: 98, DEF: 220, SP: 0 },
      ],
      "2": [
        { HP: 6494, ATK: 109, DEF: 246, SP: 4.8 },
        { HP: 7472, ATK: 126, DEF: 283, SP: 4.8 },
      ],
      "3": [
        { HP: 8386, ATK: 141, DEF: 318, SP: 9.6 },
        { HP: 9373, ATK: 158, DEF: 355, SP: 9.6 },
      ],
      "4": [
        { HP: 10059, ATK: 169, DEF: 381, SP: 9.6 },
        { HP: 11055, ATK: 186, DEF: 419, SP: 9.6 },
      ],
      "5": [
        { HP: 11741, ATK: 198, DEF: 445, SP: 14.4 },
        { HP: 12749, ATK: 215, DEF: 483, SP: 14.4 },
      ],
      "6": [
        { HP: 13434, ATK: 226, DEF: 509, SP: 19.2 },
        { HP: 14450, ATK: 243, DEF: 547, SP: 19.2 },
      ],
    },
    statBuff: "CRIT Rate",
  },
  Yoimiya: {
    element: "Pyro",
    weapon: "Bow",
    stats: {
      "0": [
        { HP: 791, ATK: 25, DEF: 47, SP: 0 },
        { HP: 2052, ATK: 65, DEF: 124, SP: 0 },
      ],
      "1": [
        { HP: 2730, ATK: 86, DEF: 165, SP: 0 },
        { HP: 4086, ATK: 129, DEF: 247, SP: 0 },
      ],
      "2": [
        { HP: 4568, ATK: 145, DEF: 276, SP: 4.8 },
        { HP: 5256, ATK: 166, DEF: 317, SP: 4.8 },
      ],
      "3": [
        { HP: 5898, ATK: 187, DEF: 356, SP: 9.6 },
        { HP: 6593, ATK: 209, DEF: 398, SP: 9.6 },
      ],
      "4": [
        { HP: 7075, ATK: 224, DEF: 428, SP: 9.6 },
        { HP: 7776, ATK: 247, DEF: 470, SP: 9.6 },
      ],
      "5": [
        { HP: 8258, ATK: 262, DEF: 499, SP: 14.4 },
        { HP: 8967, ATK: 284, DEF: 542, SP: 14.4 },
      ],
      "6": [
        { HP: 9449, ATK: 300, DEF: 571, SP: 19.2 },
        { HP: 10164, ATK: 322, DEF: 614, SP: 19.2 },
      ],
    },
    statBuff: "CRIT Rate",
  },
  YunJin: {
    element: "Geo",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 893, ATK: 16, DEF: 61, SP: 0 },
        { HP: 2295, ATK: 41, DEF: 158, SP: 0 },
      ],
      "1": [
        { HP: 2963, ATK: 53, DEF: 204, SP: 0 },
        { HP: 4438, ATK: 79, DEF: 305, SP: 0 },
      ],
      "2": [
        { HP: 4912, ATK: 88, DEF: 338, SP: 6.7 },
        { HP: 5650, ATK: 101, DEF: 389, SP: 6.7 },
      ],
      "3": [
        { HP: 6283, ATK: 112, DEF: 432, SP: 13.4 },
        { HP: 7021, ATK: 125, DEF: 483, SP: 13.4 },
      ],
      "4": [
        { HP: 7495, ATK: 134, DEF: 516, SP: 13.4 },
        { HP: 8232, ATK: 147, DEF: 567, SP: 13.4 },
      ],
      "5": [
        { HP: 8706, ATK: 156, DEF: 599, SP: 20.1 },
        { HP: 9445, ATK: 169, DEF: 650, SP: 20.1 },
      ],
      "6": [
        { HP: 9919, ATK: 177, DEF: 683, SP: 26.8 },
        { HP: 10657, ATK: 191, DEF: 734, SP: 26.8 },
      ],
    },
    statBuff: "Energy Recharge",
  },
  Zhongli: {
    element: "Geo",
    weapon: "Polearm",
    stats: {
      "0": [
        { HP: 1143, ATK: 19, DEF: 57, SP: 0 },
        { HP: 2967, ATK: 50, DEF: 148, SP: 0 },
      ],
      "1": [
        { HP: 3948, ATK: 67, DEF: 198, SP: 0 },
        { HP: 5908, ATK: 100, DEF: 296, SP: 0 },
      ],
      "2": [
        { HP: 6604, ATK: 112, DEF: 331, SP: 7.2 },
        { HP: 7599, ATK: 129, DEF: 381, SP: 7.2 },
      ],
      "3": [
        { HP: 8528, ATK: 145, DEF: 428, SP: 14.4 },
        { HP: 9532, ATK: 162, DEF: 478, SP: 14.4 },
      ],
      "4": [
        { HP: 10229, ATK: 174, DEF: 513, SP: 14.4 },
        { HP: 11243, ATK: 192, DEF: 564, SP: 14.4 },
      ],
      "5": [
        { HP: 11940, ATK: 204, DEF: 599, SP: 21.6 },
        { HP: 12965, ATK: 221, DEF: 650, SP: 21.6 },
      ],
      "6": [
        { HP: 13662, ATK: 233, DEF: 685, SP: 28.8 },
        { HP: 14695, ATK: 251, DEF: 737, SP: 28.8 },
      ],
    },
    statBuff: "Geo DMG Bonus",
  },
};

export type ArtifactKey =
  | "Initiate"
  | "Adventurer"
  | "LuckyDog"
  | "TravelingDoctor"
  | "ResolutionOfSojourner"
  | "TinyMiracle"
  | "Berserker"
  | "Instructor"
  | "TheExile"
  | "DefendersWill"
  | "BraveHeart"
  | "MartialArtist"
  | "Gambler"
  | "Scholar"
  | "PrayersForWisdom"
  | "PrayersForDestiny"
  | "PrayersForIllumination"
  | "PrayersToSpringtime"
  | "GladiatorsFinale"
  | "WanderersTroupe"
  | "NoblesseOblige"
  | "BloodstainedChivalry"
  | "MaidenBeloved"
  | "ViridescentVenerer"
  | "ArchaicPetra"
  | "RetracingBolide"
  | "Thundersoother"
  | "ThunderingFury"
  | "Lavawalker"
  | "CrimsonWitchOfFlames"
  | "BlizzardStrayer"
  | "HeartOfDepth"
  | "TenacityOfTheMillelith"
  | "PaleFlame"
  | "ShimenawasReminiscence"
  | "EmblemOfSeveredFate"
  | "HuskOfOpulentDreams"
  | "OceanHuedClam"
  | "VermillionHereafter"
  | "EchoesOfAnOffering"
  | "DeepwoodMemories"
  | "GildedDreams"
  | "DesertPavilionChronicle"
  | "FlowerOfParadiseLost";
export const artifacts: ArtifactKey[] = [
  "Initiate",
  "Adventurer",
  "LuckyDog",
  "TravelingDoctor",
  "ResolutionOfSojourner",
  "TinyMiracle",
  "Berserker",
  "Instructor",
  "TheExile",
  "DefendersWill",
  "BraveHeart",
  "MartialArtist",
  "Gambler",
  "Scholar",
  "PrayersForWisdom",
  "PrayersForDestiny",
  "PrayersForIllumination",
  "PrayersToSpringtime",
  "GladiatorsFinale",
  "WanderersTroupe",
  "NoblesseOblige",
  "BloodstainedChivalry",
  "MaidenBeloved",
  "ViridescentVenerer",
  "ArchaicPetra",
  "RetracingBolide",
  "Thundersoother",
  "ThunderingFury",
  "Lavawalker",
  "CrimsonWitchOfFlames",
  "BlizzardStrayer",
  "HeartOfDepth",
  "TenacityOfTheMillelith",
  "PaleFlame",
  "ShimenawasReminiscence",
  "EmblemOfSeveredFate",
  "HuskOfOpulentDreams",
  "OceanHuedClam",
  "VermillionHereafter",
  "EchoesOfAnOffering",
  "DeepwoodMemories",
  "GildedDreams",
  "DesertPavilionChronicle",
  "FlowerOfParadiseLost",
];
export const artifactIDs = toIdedObj(artifacts);
export const ArtifactInfo = {
  Initiate: { set: "Initiate", bonus: [] },
  Adventurer: {
    set: "Adventurer",
    bonus: [
      "Max HP increased by 1,000.",
      "Opening a chest regenerates 30% Max HP over 5s.",
    ],
  },
  LuckyDog: {
    set: "Lucky Dog",
    bonus: ["DEF increased by 100.", "Picking up Mora restores 300 HP."],
  },
  TravelingDoctor: {
    set: "Traveling Doctor",
    bonus: [
      "Increases incoming healing by 20%.",
      "Using Elemental Burst restores 20% HP.",
    ],
  },
  ResolutionOfSojourner: {
    set: "Resolution of Sojourner",
    bonus: ["ATK +18%", "Increases Charged Attack CRIT Rate by 30%."],
  },
  TinyMiracle: {
    set: "Tiny Miracle",
    bonus: [
      "All Elemental RES increased by 20%.",
      "Incoming Elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.",
    ],
  },
  Berserker: {
    set: "Berserker",
    bonus: [
      "CRIT Rate +12%",
      "When HP is below 70%, CRIT Rate increases by an additional 24%.",
    ],
  },
  Instructor: {
    set: "Instructor",
    bonus: [
      "Increases Elemental Mastery by 80.",
      "Upon triggering an Elemental Reaction, increases all party members' Elemental Mastery by 120 for 8s.",
    ],
  },
  TheExile: {
    set: "The Exile",
    bonus: [
      "Energy Recharge +20%",
      "Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack.",
    ],
  },
  DefendersWill: {
    set: "Defender's Will",
    bonus: [
      "DEF +30%",
      "For each different element present in your own party, the wearer's Elemental RES to that corresponding element is increased by 30%.",
    ],
  },
  BraveHeart: {
    set: "Brave Heart",
    bonus: [
      "ATK +18%.",
      "Increases DMG by 30% against opponents with more than 50% HP.",
    ],
  },
  MartialArtist: {
    set: "Martial Artist",
    bonus: [
      "Increases Normal Attack and Charged Attack DMG by 15%.",
      "After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.",
    ],
  },
  Gambler: {
    set: "Gambler",
    bonus: [
      "Increases Elemental Skill DMG by 20%.",
      "Defeating an opponent has 100% chance to remove Elemental Skill CD. Can only occur once every 15s.",
    ],
  },
  Scholar: {
    set: "Scholar",
    bonus: [
      "Energy Recharge +20%",
      "Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.",
    ],
  },
  PrayersForWisdom: {
    set: "Prayers for Wisdom",
    bonus: ["Affected by Electro for 40% less time."],
  },
  PrayersForDestiny: {
    set: "Prayers for Destiny",
    bonus: ["Affected by Hydro for 40% less time."],
  },
  PrayersForIllumination: {
    set: "Prayers for Illumination",
    bonus: ["Affected by Pyro for 40% less time."],
  },
  PrayersToSpringtime: {
    set: "Prayers to Springtime",
    bonus: ["Affected by Cryo for 40% less time."],
  },
  GladiatorsFinale: {
    set: "Gladiator's Finale",
    bonus: [
      "ATK +18%.",
      "If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.",
    ],
  },
  WanderersTroupe: {
    set: "Wanderer's Troupe",
    bonus: [
      "Increases Elemental Mastery by 80.",
      "Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.",
    ],
  },
  NoblesseOblige: {
    set: "Noblesse Oblige",
    bonus: [
      "Elemental Burst DMG +20%",
      "Using an Elemental Burst increases all party members' ATK by 20% for 12s. This effect cannot stack.",
    ],
  },
  BloodstainedChivalry: {
    set: "Bloodstained Chivalry",
    bonus: [
      "Physical DMG Bonus +25%",
      "After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s. Also triggers with wild animals such as boars, squirrels and frogs.",
    ],
  },
  MaidenBeloved: {
    set: "Maiden Beloved",
    bonus: [
      "Character Healing Effectiveness +15%",
      "Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.",
    ],
  },
  ViridescentVenerer: {
    set: "Viridescent Venerer",
    bonus: [
      "Anemo DMG Bonus +15%",
      "Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s.",
    ],
  },
  ArchaicPetra: {
    set: "Archaic Petra",
    bonus: [
      "Geo DMG Bonus +15%",
      "Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.",
    ],
  },
  RetracingBolide: {
    set: "Retracing Bolide",
    bonus: [
      "Increases Shield Strength by 35%.",
      "While protected by a shield, gain an additional 40% Normal and Charged Attack DMG.",
    ],
  },
  Thundersoother: {
    set: "Thundersoother",
    bonus: [
      "Electro RES increased by 40%.",
      "Increases DMG against opponents affected by Electro by 35%.",
    ],
  },
  ThunderingFury: {
    set: "Thundering Fury",
    bonus: [
      "Electro DMG Bonus +15%",
      "Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.",
    ],
  },
  Lavawalker: {
    set: "Lavawalker",
    bonus: [
      "Pyro RES increased by 40%.",
      "Increases DMG against opponents affected by Pyro by 35%.",
    ],
  },
  CrimsonWitchOfFlames: {
    set: "Crimson Witch of Flames",
    bonus: [
      "Pyro DMG Bonus +15%",
      "Increases Overloaded and Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.",
    ],
  },
  BlizzardStrayer: {
    set: "Blizzard Strayer",
    bonus: [
      "Cryo DMG Bonus +15%",
      "When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.",
    ],
  },
  HeartOfDepth: {
    set: "Heart of Depth",
    bonus: [
      "Hydro DMG Bonus +15%",
      "After using an Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.",
    ],
  },
  TenacityOfTheMillelith: {
    set: "Tenacity of the Millelith",
    bonus: [
      "HP +20%",
      "When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.",
    ],
  },
  PaleFlame: {
    set: "Pale Flame",
    bonus: [
      "Physical DMG Bonus +25%",
      "When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.",
    ],
  },
  ShimenawasReminiscence: {
    set: "Shimenawa's Reminiscence",
    bonus: [
      "ATK +18%",
      "When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration.",
    ],
  },
  EmblemOfSeveredFate: {
    set: "Emblem of Severed Fate",
    bonus: [
      "Energy Recharge +20%",
      "Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.",
    ],
  },
  HuskOfOpulentDreams: {
    set: "Husk of Opulent Dreams",
    bonus: [
      "DEF +30%",
      "A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions:When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s.When off the field, the character gains 1 stack every 3s.Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus.When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.",
    ],
  },
  OceanHuedClam: {
    set: "Ocean-Hued Clam",
    bonus: [
      "Healing Bonus +15%.",
      "When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing).At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing.(This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but it is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses).Only one Sea-Dyed Foam can be produced every 3.5 seconds.Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing).There can be no more than one Sea-Dyed Foam active at any given time.This effect can still be triggered even when the character who is using this artifact set is not on the field.",
    ],
  },
  VermillionHereafter: {
    set: "Vermillion Hereafter",
    bonus: [
      "ATK +18%.",
      "After using an Elemental Burst. this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the character's HP decreases, their ATK will further increase by 10%. This increase can occur this way maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled.",
    ],
  },
  EchoesOfAnOffering: {
    set: "Echoes of an Offering",
    bonus: [
      "ATK +18%.",
      "When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK.This effect will be dispelled 0.05s after a Normal Attack deals DMG.If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%.This trigger can occur once every 0.2s.",
    ],
  },
  DeepwoodMemories: {
    set: "Deepwood Memories",
    bonus: [
      "Dendro DMG Bonus +15%",
      "After Elemental Skills or Bursts hit opponents, the targets' Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field.",
    ],
  },
  GildedDreams: {
    set: "Gilded Dreams",
    bonus: [
      "Elemental Mastery +80",
      "Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members, ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.",
    ],
  },
  DesertPavilionChronicle: {
    set: "Desert Pavilion Chronicle",
    bonus: [
      "Anemo DMG Bonus +15%.",
      "When Charged Attacks hit opponents, the equipping character's Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s.",
    ],
  },
  FlowerOfParadiseLost: {
    set: "Flower of Paradise Lost",
    bonus: [
      "Increases Elemental Mastery by 80.",
      "The equipping character's Bloom, Hyperbloom, and Burgeon reaction DMG are increased by 40%. Additionally, after the equipping character triggers Bloom, Hyperbloom, or Burgeon, they will gain another 25% bonus to the effect mentioned prior. Each stack of this lasts 10s. Max 4 stacks simultaneously. This effect can only be triggered once per second. The character who equips this can still trigger its effects when not on the field.",
    ],
  },
};
