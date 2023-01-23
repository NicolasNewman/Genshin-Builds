import { toIdedObj } from "./index";
export type Elements =
  | "Geo"
  | "Dendro"
  | "Cryo"
  | "Pyro"
  | "Hydro"
  | "Electro"
  | "Anemo"
  | "None";
export type WeaponTypes = "Sword" | "Bow" | "Claymore" | "Catalyst" | "Polearm";
export type StatBuffs =
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
export const catalyst = [
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
export const bow = [
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
export const sword = [
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
export const polearm = [
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
export const claymore = [
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
export const undefined = [
  "PrizedIsshinBlade(Awakened)",
  "PrizedIsshinBlade(Shattered)",
];
export const undefinedIDs = toIdedObj(undefined);
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
  | "PrizedIsshinBlade(Awakened)"
  | "PrizedIsshinBlade(Shattered)"
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
export const WeaponInfo = {
  AThousandFloatingDreams: {
    name: "A Thousand Floating Dreams",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "44", SP: "58" }, "20": { ATK: "110", SP: "102" } },
      "1": { "20": { ATK: "141", SP: "102" }, "40": { ATK: "210", SP: "148" } },
      "2": { "40": { ATK: "241", SP: "148" }, "50": { ATK: "275", SP: "172" } },
      "3": { "50": { ATK: "307", SP: "172" }, "60": { ATK: "341", SP: "195" } },
      "4": { "60": { ATK: "373", SP: "195" }, "70": { ATK: "408", SP: "218" } },
      "5": { "70": { ATK: "439", SP: "218" }, "80": { ATK: "475", SP: "241" } },
      "6": { "80": { ATK: "506", SP: "241" }, "90": { ATK: "542", SP: "265" } },
    },
    type: "Catalyst",
  },
  AmosBow: {
    name: "Amos' Bow",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "46", SP: "108" }, "20": { ATK: "122", SP: "191" } },
      "1": { "20": { ATK: "153", SP: "191" }, "40": { ATK: "235", SP: "278" } },
      "2": { "40": { ATK: "266", SP: "278" }, "50": { ATK: "308", SP: "322" } },
      "3": { "50": { ATK: "340", SP: "322" }, "60": { ATK: "382", SP: "365" } },
      "4": { "60": { ATK: "414", SP: "365" }, "70": { ATK: "457", SP: "409" } },
      "5": { "70": { ATK: "488", SP: "409" }, "80": { ATK: "532", SP: "453" } },
      "6": { "80": { ATK: "563", SP: "453" }, "90": { ATK: "608", SP: "496" } },
    },
    type: "Bow",
  },
  AquaSimulacra: {
    name: "Aqua Simulacra",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "44", SP: "192" }, "20": { ATK: "110", SP: "339" } },
      "1": { "20": { ATK: "141", SP: "339" }, "40": { ATK: "210", SP: "494" } },
      "2": { "40": { ATK: "241", SP: "494" }, "50": { ATK: "275", SP: "572" } },
      "3": { "50": { ATK: "307", SP: "572" }, "60": { ATK: "341", SP: "650" } },
      "4": { "60": { ATK: "373", SP: "650" }, "70": { ATK: "408", SP: "727" } },
      "5": { "70": { ATK: "439", SP: "727" }, "80": { ATK: "475", SP: "804" } },
      "6": { "80": { ATK: "506", SP: "804" }, "90": { ATK: "542", SP: "882" } },
    },
    type: "Bow",
  },
  AquilaFavonia: {
    name: "Aquila Favonia",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "48", SP: "9" }, "20": { ATK: "133", SP: "159" } },
      "1": { "20": { ATK: "164", SP: "159" }, "40": { ATK: "261", SP: "232" } },
      "2": { "40": { ATK: "292", SP: "232" }, "50": { ATK: "341", SP: "268" } },
      "3": { "50": { ATK: "373", SP: "268" }, "60": { ATK: "423", SP: "304" } },
      "4": { "60": { ATK: "455", SP: "304" }, "70": { ATK: "506", SP: "341" } },
      "5": { "70": { ATK: "537", SP: "341" }, "80": { ATK: "590", SP: "377" } },
      "6": { "80": { ATK: "621", SP: "377" }, "90": { ATK: "674", SP: "413" } },
    },
    type: "Sword",
  },
  CalamityQueller: {
    name: "Calamity Queller",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "49", SP: "36" }, "20": { ATK: "145", SP: "64" } },
      "1": { "20": { ATK: "176", SP: "64" }, "40": { ATK: "286", SP: "78" } },
      "2": { "40": { ATK: "317", SP: "78" }, "50": { ATK: "374", SP: "107" } },
      "3": { "50": { ATK: "406", SP: "107" }, "60": { ATK: "464", SP: "122" } },
      "4": { "60": { ATK: "495", SP: "122" }, "70": { ATK: "555", SP: "136" } },
      "5": { "70": { ATK: "586", SP: "136" }, "80": { ATK: "648", SP: "151" } },
      "6": { "80": { ATK: "679", SP: "151" }, "90": { ATK: "741", SP: "165" } },
    },
    type: "Polearm",
  },
  ElegyForTheEnd: {
    name: "Elegy for the End",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "46", SP: "12" }, "20": { ATK: "122", SP: "212" } },
      "1": { "20": { ATK: "153", SP: "212" }, "40": { ATK: "235", SP: "309" } },
      "2": { "40": { ATK: "266", SP: "309" }, "50": { ATK: "308", SP: "357" } },
      "3": { "50": { ATK: "340", SP: "357" }, "60": { ATK: "382", SP: "406" } },
      "4": { "60": { ATK: "414", SP: "406" }, "70": { ATK: "457", SP: "454" } },
      "5": { "70": { ATK: "488", SP: "454" }, "80": { ATK: "532", SP: "503" } },
      "6": { "80": { ATK: "563", SP: "503" }, "90": { ATK: "608", SP: "551" } },
    },
    type: "Bow",
  },
  EngulfingLightning: {
    name: "Engulfing Lightning",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "46", SP: "12" }, "20": { ATK: "122", SP: "212" } },
      "1": { "20": { ATK: "153", SP: "212" }, "40": { ATK: "235", SP: "309" } },
      "2": { "40": { ATK: "266", SP: "309" }, "50": { ATK: "308", SP: "357" } },
      "3": { "50": { ATK: "340", SP: "357" }, "60": { ATK: "382", SP: "406" } },
      "4": { "60": { ATK: "414", SP: "406" }, "70": { ATK: "457", SP: "454" } },
      "5": { "70": { ATK: "488", SP: "454" }, "80": { ATK: "532", SP: "503" } },
      "6": { "80": { ATK: "563", SP: "503" }, "90": { ATK: "608", SP: "551" } },
    },
    type: "Polearm",
  },
  EverlastingMoonglow: {
    name: "Everlasting Moonglow",
    statBuff: "HP",
    stats: {
      "0": { "1": { ATK: "46", SP: "108" }, "20": { ATK: "122", SP: "191" } },
      "1": { "20": { ATK: "153", SP: "191" }, "40": { ATK: "235", SP: "278" } },
      "2": { "40": { ATK: "266", SP: "278" }, "50": { ATK: "308", SP: "322" } },
      "3": { "50": { ATK: "340", SP: "322" }, "60": { ATK: "382", SP: "365" } },
      "4": { "60": { ATK: "414", SP: "365" }, "70": { ATK: "457", SP: "409" } },
      "5": { "70": { ATK: "488", SP: "409" }, "80": { ATK: "532", SP: "453" } },
      "6": { "80": { ATK: "563", SP: "453" }, "90": { ATK: "608", SP: "496" } },
    },
    type: "Catalyst",
  },
  FreedomSworn: {
    name: "Freedom-Sworn",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "46", SP: "43" }, "20": { ATK: "122", SP: "76" } },
      "1": { "20": { ATK: "153", SP: "76" }, "40": { ATK: "235", SP: "111" } },
      "2": { "40": { ATK: "266", SP: "111" }, "50": { ATK: "308", SP: "129" } },
      "3": { "50": { ATK: "340", SP: "129" }, "60": { ATK: "382", SP: "146" } },
      "4": { "60": { ATK: "414", SP: "146" }, "70": { ATK: "457", SP: "164" } },
      "5": { "70": { ATK: "488", SP: "164" }, "80": { ATK: "532", SP: "181" } },
      "6": { "80": { ATK: "563", SP: "181" }, "90": { ATK: "608", SP: "198" } },
    },
    type: "Sword",
  },
  HaranGeppakuFutsu: {
    name: "Haran Geppaku Futsu",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "46", SP: "72" }, "20": { ATK: "122", SP: "127" } },
      "1": { "20": { ATK: "153", SP: "127" }, "40": { ATK: "235", SP: "185" } },
      "2": { "40": { ATK: "266", SP: "185" }, "50": { ATK: "308", SP: "214" } },
      "3": { "50": { ATK: "340", SP: "214" }, "60": { ATK: "382", SP: "244" } },
      "4": { "60": { ATK: "414", SP: "244" }, "70": { ATK: "457", SP: "273" } },
      "5": { "70": { ATK: "488", SP: "273" }, "80": { ATK: "532", SP: "302" } },
      "6": { "80": { ATK: "563", SP: "302" }, "90": { ATK: "608", SP: "331" } },
    },
    type: "Sword",
  },
  HuntersPath: {
    name: "Hunter's Path",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "44", SP: "96" }, "20": { ATK: "110", SP: "17" } },
      "1": { "20": { ATK: "141", SP: "17" }, "40": { ATK: "210", SP: "247" } },
      "2": { "40": { ATK: "241", SP: "247" }, "50": { ATK: "275", SP: "286" } },
      "3": { "50": { ATK: "307", SP: "286" }, "60": { ATK: "341", SP: "325" } },
      "4": { "60": { ATK: "373", SP: "325" }, "70": { ATK: "408", SP: "364" } },
      "5": { "70": { ATK: "439", SP: "364" }, "80": { ATK: "475", SP: "402" } },
      "6": { "80": { ATK: "506", SP: "402" }, "90": { ATK: "542", SP: "441" } },
    },
    type: "Bow",
  },
  KagurasVerity: {
    name: "Kagura's Verity",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "46", SP: "144" }, "20": { ATK: "122", SP: "254" } },
      "1": { "20": { ATK: "153", SP: "254" }, "40": { ATK: "235", SP: "371" } },
      "2": { "40": { ATK: "266", SP: "371" }, "50": { ATK: "308", SP: "429" } },
      "3": { "50": { ATK: "340", SP: "429" }, "60": { ATK: "382", SP: "487" } },
      "4": { "60": { ATK: "414", SP: "487" }, "70": { ATK: "457", SP: "545" } },
      "5": { "70": { ATK: "488", SP: "545" }, "80": { ATK: "532", SP: "603" } },
      "6": { "80": { ATK: "563", SP: "603" }, "90": { ATK: "608", SP: "662" } },
    },
    type: "Catalyst",
  },
  KeyOfKhajNisut: {
    name: "Key of Khaj-Nisut",
    statBuff: "HP",
    stats: {
      "0": { "1": { ATK: "44", SP: "144" }, "20": { ATK: "110", SP: "254" } },
      "1": { "20": { ATK: "141", SP: "254" }, "40": { ATK: "210", SP: "371" } },
      "2": { "40": { ATK: "241", SP: "371" }, "50": { ATK: "275", SP: "429" } },
      "3": { "50": { ATK: "307", SP: "429" }, "60": { ATK: "341", SP: "487" } },
      "4": { "60": { ATK: "373", SP: "487" }, "70": { ATK: "408", SP: "545" } },
      "5": { "70": { ATK: "439", SP: "545" }, "80": { ATK: "475", SP: "603" } },
      "6": { "80": { ATK: "506", SP: "603" }, "90": { ATK: "542", SP: "662" } },
    },
    type: "Sword",
  },
  LightOfFoliarIncision: {
    name: "Light of Foliar Incision",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "44", SP: "192" }, "20": { ATK: "110", SP: "339" } },
      "1": { "20": { ATK: "141", SP: "339" }, "40": { ATK: "210", SP: "494" } },
      "2": { "40": { ATK: "241", SP: "494" }, "50": { ATK: "275", SP: "572" } },
      "3": { "50": { ATK: "307", SP: "572" }, "60": { ATK: "341", SP: "650" } },
      "4": { "60": { ATK: "373", SP: "650" }, "70": { ATK: "408", SP: "727" } },
      "5": { "70": { ATK: "439", SP: "727" }, "80": { ATK: "475", SP: "804" } },
      "6": { "80": { ATK: "506", SP: "804" }, "90": { ATK: "542", SP: "882" } },
    },
    type: "Sword",
  },
  LostPrayerToTheSacredWinds: {
    name: "Lost Prayer to the Sacred Winds",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "46", SP: "72" }, "20": { ATK: "122", SP: "127" } },
      "1": { "20": { ATK: "153", SP: "127" }, "40": { ATK: "235", SP: "185" } },
      "2": { "40": { ATK: "266", SP: "185" }, "50": { ATK: "308", SP: "214" } },
      "3": { "50": { ATK: "340", SP: "214" }, "60": { ATK: "382", SP: "244" } },
      "4": { "60": { ATK: "414", SP: "244" }, "70": { ATK: "457", SP: "273" } },
      "5": { "70": { ATK: "488", SP: "273" }, "80": { ATK: "532", SP: "302" } },
      "6": { "80": { ATK: "563", SP: "302" }, "90": { ATK: "608", SP: "331" } },
    },
    type: "Catalyst",
  },
  MemoryOfDust: {
    name: "Memory of Dust",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "46", SP: "108" }, "20": { ATK: "122", SP: "191" } },
      "1": { "20": { ATK: "153", SP: "191" }, "40": { ATK: "235", SP: "278" } },
      "2": { "40": { ATK: "266", SP: "278" }, "50": { ATK: "308", SP: "322" } },
      "3": { "50": { ATK: "340", SP: "322" }, "60": { ATK: "382", SP: "365" } },
      "4": { "60": { ATK: "414", SP: "365" }, "70": { ATK: "457", SP: "409" } },
      "5": { "70": { ATK: "488", SP: "409" }, "80": { ATK: "532", SP: "453" } },
      "6": { "80": { ATK: "563", SP: "453" }, "90": { ATK: "608", SP: "496" } },
    },
    type: "Catalyst",
  },
  MistsplitterReforged: {
    name: "Mistsplitter Reforged",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "48", SP: "96" }, "20": { ATK: "133", SP: "17" } },
      "1": { "20": { ATK: "164", SP: "17" }, "40": { ATK: "261", SP: "247" } },
      "2": { "40": { ATK: "292", SP: "247" }, "50": { ATK: "341", SP: "286" } },
      "3": { "50": { ATK: "373", SP: "286" }, "60": { ATK: "423", SP: "325" } },
      "4": { "60": { ATK: "455", SP: "325" }, "70": { ATK: "506", SP: "364" } },
      "5": { "70": { ATK: "537", SP: "364" }, "80": { ATK: "590", SP: "402" } },
      "6": { "80": { ATK: "621", SP: "402" }, "90": { ATK: "674", SP: "441" } },
    },
    type: "Sword",
  },
  PolarStar: {
    name: "Polar Star",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "46", SP: "72" }, "20": { ATK: "122", SP: "127" } },
      "1": { "20": { ATK: "153", SP: "127" }, "40": { ATK: "235", SP: "185" } },
      "2": { "40": { ATK: "266", SP: "185" }, "50": { ATK: "308", SP: "214" } },
      "3": { "50": { ATK: "340", SP: "214" }, "60": { ATK: "382", SP: "244" } },
      "4": { "60": { ATK: "414", SP: "244" }, "70": { ATK: "457", SP: "273" } },
      "5": { "70": { ATK: "488", SP: "273" }, "80": { ATK: "532", SP: "302" } },
      "6": { "80": { ATK: "563", SP: "302" }, "90": { ATK: "608", SP: "331" } },
    },
    type: "Bow",
  },
  PrimordialJadeCutter: {
    name: "Primordial Jade Cutter",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "44", SP: "96" }, "20": { ATK: "110", SP: "17" } },
      "1": { "20": { ATK: "141", SP: "17" }, "40": { ATK: "210", SP: "247" } },
      "2": { "40": { ATK: "241", SP: "247" }, "50": { ATK: "275", SP: "286" } },
      "3": { "50": { ATK: "307", SP: "286" }, "60": { ATK: "341", SP: "325" } },
      "4": { "60": { ATK: "373", SP: "325" }, "70": { ATK: "408", SP: "364" } },
      "5": { "70": { ATK: "439", SP: "364" }, "80": { ATK: "475", SP: "402" } },
      "6": { "80": { ATK: "506", SP: "402" }, "90": { ATK: "542", SP: "441" } },
    },
    type: "Sword",
  },
  PrimordialJadeWingedSpear: {
    name: "Primordial Jade Winged-Spear",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "48", SP: "48" }, "20": { ATK: "133", SP: "85" } },
      "1": { "20": { ATK: "164", SP: "85" }, "40": { ATK: "261", SP: "124" } },
      "2": { "40": { ATK: "292", SP: "124" }, "50": { ATK: "341", SP: "143" } },
      "3": { "50": { ATK: "373", SP: "143" }, "60": { ATK: "423", SP: "162" } },
      "4": { "60": { ATK: "455", SP: "162" }, "70": { ATK: "506", SP: "182" } },
      "5": { "70": { ATK: "537", SP: "182" }, "80": { ATK: "590", SP: "201" } },
      "6": { "80": { ATK: "621", SP: "201" }, "90": { ATK: "674", SP: "221" } },
    },
    type: "Polearm",
  },
  RedhornStonethresher: {
    name: "Redhorn Stonethresher",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "44", SP: "192" }, "20": { ATK: "110", SP: "339" } },
      "1": { "20": { ATK: "141", SP: "339" }, "40": { ATK: "210", SP: "494" } },
      "2": { "40": { ATK: "241", SP: "494" }, "50": { ATK: "275", SP: "572" } },
      "3": { "50": { ATK: "307", SP: "572" }, "60": { ATK: "341", SP: "650" } },
      "4": { "60": { ATK: "373", SP: "650" }, "70": { ATK: "408", SP: "727" } },
      "5": { "70": { ATK: "439", SP: "727" }, "80": { ATK: "475", SP: "804" } },
      "6": { "80": { ATK: "506", SP: "804" }, "90": { ATK: "542", SP: "882" } },
    },
    type: "Claymore",
  },
  SkywardAtlas: {
    name: "Skyward Atlas",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "48", SP: "72" }, "20": { ATK: "133", SP: "127" } },
      "1": { "20": { ATK: "164", SP: "127" }, "40": { ATK: "261", SP: "185" } },
      "2": { "40": { ATK: "292", SP: "185" }, "50": { ATK: "341", SP: "214" } },
      "3": { "50": { ATK: "373", SP: "214" }, "60": { ATK: "423", SP: "244" } },
      "4": { "60": { ATK: "455", SP: "244" }, "70": { ATK: "506", SP: "273" } },
      "5": { "70": { ATK: "537", SP: "273" }, "80": { ATK: "590", SP: "302" } },
      "6": { "80": { ATK: "621", SP: "302" }, "90": { ATK: "674", SP: "331" } },
    },
    type: "Catalyst",
  },
  SkywardBlade: {
    name: "Skyward Blade",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "46", SP: "12" }, "20": { ATK: "122", SP: "212" } },
      "1": { "20": { ATK: "153", SP: "212" }, "40": { ATK: "235", SP: "309" } },
      "2": { "40": { ATK: "266", SP: "309" }, "50": { ATK: "308", SP: "357" } },
      "3": { "50": { ATK: "340", SP: "357" }, "60": { ATK: "382", SP: "406" } },
      "4": { "60": { ATK: "414", SP: "406" }, "70": { ATK: "457", SP: "454" } },
      "5": { "70": { ATK: "488", SP: "454" }, "80": { ATK: "532", SP: "503" } },
      "6": { "80": { ATK: "563", SP: "503" }, "90": { ATK: "608", SP: "551" } },
    },
    type: "Sword",
  },
  SkywardHarp: {
    name: "Skyward Harp",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "48", SP: "48" }, "20": { ATK: "133", SP: "85" } },
      "1": { "20": { ATK: "164", SP: "85" }, "40": { ATK: "261", SP: "124" } },
      "2": { "40": { ATK: "292", SP: "124" }, "50": { ATK: "341", SP: "143" } },
      "3": { "50": { ATK: "373", SP: "143" }, "60": { ATK: "423", SP: "162" } },
      "4": { "60": { ATK: "455", SP: "162" }, "70": { ATK: "506", SP: "182" } },
      "5": { "70": { ATK: "537", SP: "182" }, "80": { ATK: "590", SP: "201" } },
      "6": { "80": { ATK: "621", SP: "201" }, "90": { ATK: "674", SP: "221" } },
    },
    type: "Bow",
  },
  SkywardPride: {
    name: "Skyward Pride",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "48", SP: "8" }, "20": { ATK: "133", SP: "141" } },
      "1": { "20": { ATK: "164", SP: "141" }, "40": { ATK: "261", SP: "206" } },
      "2": { "40": { ATK: "292", SP: "206" }, "50": { ATK: "341", SP: "238" } },
      "3": { "50": { ATK: "373", SP: "238" }, "60": { ATK: "423", SP: "271" } },
      "4": { "60": { ATK: "455", SP: "271" }, "70": { ATK: "506", SP: "303" } },
      "5": { "70": { ATK: "537", SP: "303" }, "80": { ATK: "590", SP: "335" } },
      "6": { "80": { ATK: "621", SP: "335" }, "90": { ATK: "674", SP: "368" } },
    },
    type: "Claymore",
  },
  SkywardSpine: {
    name: "Skyward Spine",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "48", SP: "8" }, "20": { ATK: "133", SP: "141" } },
      "1": { "20": { ATK: "164", SP: "141" }, "40": { ATK: "261", SP: "206" } },
      "2": { "40": { ATK: "292", SP: "206" }, "50": { ATK: "341", SP: "238" } },
      "3": { "50": { ATK: "373", SP: "238" }, "60": { ATK: "423", SP: "271" } },
      "4": { "60": { ATK: "455", SP: "271" }, "70": { ATK: "506", SP: "303" } },
      "5": { "70": { ATK: "537", SP: "303" }, "80": { ATK: "590", SP: "335" } },
      "6": { "80": { ATK: "621", SP: "335" }, "90": { ATK: "674", SP: "368" } },
    },
    type: "Polearm",
  },
  SongOfBrokenPines: {
    name: "Song of Broken Pines",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "49", SP: "45" }, "20": { ATK: "145", SP: "80" } },
      "1": { "20": { ATK: "176", SP: "80" }, "40": { ATK: "286", SP: "116" } },
      "2": { "40": { ATK: "317", SP: "116" }, "50": { ATK: "374", SP: "134" } },
      "3": { "50": { ATK: "406", SP: "134" }, "60": { ATK: "464", SP: "152" } },
      "4": { "60": { ATK: "495", SP: "152" }, "70": { ATK: "555", SP: "17" } },
      "5": { "70": { ATK: "586", SP: "17" }, "80": { ATK: "648", SP: "189" } },
      "6": { "80": { ATK: "679", SP: "189" }, "90": { ATK: "741", SP: "207" } },
    },
    type: "Claymore",
  },
  StaffOfHoma: {
    name: "Staff of Homa",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "46", SP: "144" }, "20": { ATK: "122", SP: "254" } },
      "1": { "20": { ATK: "153", SP: "254" }, "40": { ATK: "235", SP: "371" } },
      "2": { "40": { ATK: "266", SP: "371" }, "50": { ATK: "308", SP: "429" } },
      "3": { "50": { ATK: "340", SP: "429" }, "60": { ATK: "382", SP: "487" } },
      "4": { "60": { ATK: "414", SP: "487" }, "70": { ATK: "457", SP: "545" } },
      "5": { "70": { ATK: "488", SP: "545" }, "80": { ATK: "532", SP: "603" } },
      "6": { "80": { ATK: "563", SP: "603" }, "90": { ATK: "608", SP: "662" } },
    },
    type: "Polearm",
  },
  StaffOfTheScarletSands: {
    name: "Staff of the Scarlet Sands",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "44", SP: "96" }, "20": { ATK: "110", SP: "17" } },
      "1": { "20": { ATK: "141", SP: "17" }, "40": { ATK: "210", SP: "247" } },
      "2": { "40": { ATK: "241", SP: "247" }, "50": { ATK: "275", SP: "286" } },
      "3": { "50": { ATK: "307", SP: "286" }, "60": { ATK: "341", SP: "325" } },
      "4": { "60": { ATK: "373", SP: "325" }, "70": { ATK: "408", SP: "364" } },
      "5": { "70": { ATK: "439", SP: "364" }, "80": { ATK: "475", SP: "402" } },
      "6": { "80": { ATK: "506", SP: "402" }, "90": { ATK: "542", SP: "441" } },
    },
    type: "Polearm",
  },
  SummitShaper: {
    name: "Summit Shaper",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "46", SP: "108" }, "20": { ATK: "122", SP: "191" } },
      "1": { "20": { ATK: "153", SP: "191" }, "40": { ATK: "235", SP: "278" } },
      "2": { "40": { ATK: "266", SP: "278" }, "50": { ATK: "308", SP: "322" } },
      "3": { "50": { ATK: "340", SP: "322" }, "60": { ATK: "382", SP: "365" } },
      "4": { "60": { ATK: "414", SP: "365" }, "70": { ATK: "457", SP: "409" } },
      "5": { "70": { ATK: "488", SP: "409" }, "80": { ATK: "532", SP: "453" } },
      "6": { "80": { ATK: "563", SP: "453" }, "90": { ATK: "608", SP: "496" } },
    },
    type: "Sword",
  },
  TheUnforged: {
    name: "The Unforged",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "46", SP: "108" }, "20": { ATK: "122", SP: "191" } },
      "1": { "20": { ATK: "153", SP: "191" }, "40": { ATK: "235", SP: "278" } },
      "2": { "40": { ATK: "266", SP: "278" }, "50": { ATK: "308", SP: "322" } },
      "3": { "50": { ATK: "340", SP: "322" }, "60": { ATK: "382", SP: "365" } },
      "4": { "60": { ATK: "414", SP: "365" }, "70": { ATK: "457", SP: "409" } },
      "5": { "70": { ATK: "488", SP: "409" }, "80": { ATK: "532", SP: "453" } },
      "6": { "80": { ATK: "563", SP: "453" }, "90": { ATK: "608", SP: "496" } },
    },
    type: "Claymore",
  },
  ThunderingPulse: {
    name: "Thundering Pulse",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "46", SP: "144" }, "20": { ATK: "122", SP: "254" } },
      "1": { "20": { ATK: "153", SP: "254" }, "40": { ATK: "235", SP: "371" } },
      "2": { "40": { ATK: "266", SP: "371" }, "50": { ATK: "308", SP: "429" } },
      "3": { "50": { ATK: "340", SP: "429" }, "60": { ATK: "382", SP: "487" } },
      "4": { "60": { ATK: "414", SP: "487" }, "70": { ATK: "457", SP: "545" } },
      "5": { "70": { ATK: "488", SP: "545" }, "80": { ATK: "532", SP: "603" } },
      "6": { "80": { ATK: "563", SP: "603" }, "90": { ATK: "608", SP: "662" } },
    },
    type: "Bow",
  },
  TulaytullahsRemembrance: {
    name: "Tulaytullah's Remembrance",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "48", SP: "96" }, "20": { ATK: "133", SP: "17" } },
      "1": { "20": { ATK: "164", SP: "17" }, "40": { ATK: "261", SP: "247" } },
      "2": { "40": { ATK: "292", SP: "247" }, "50": { ATK: "341", SP: "286" } },
      "3": { "50": { ATK: "373", SP: "286" }, "60": { ATK: "423", SP: "325" } },
      "4": { "60": { ATK: "455", SP: "325" }, "70": { ATK: "506", SP: "364" } },
      "5": { "70": { ATK: "537", SP: "364" }, "80": { ATK: "590", SP: "402" } },
      "6": { "80": { ATK: "621", SP: "402" }, "90": { ATK: "674", SP: "441" } },
    },
    type: "Catalyst",
  },
  VortexVanquisher: {
    name: "Vortex Vanquisher",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "46", SP: "108" }, "20": { ATK: "122", SP: "191" } },
      "1": { "20": { ATK: "153", SP: "191" }, "40": { ATK: "235", SP: "278" } },
      "2": { "40": { ATK: "266", SP: "278" }, "50": { ATK: "308", SP: "322" } },
      "3": { "50": { ATK: "340", SP: "322" }, "60": { ATK: "382", SP: "365" } },
      "4": { "60": { ATK: "414", SP: "365" }, "70": { ATK: "457", SP: "409" } },
      "5": { "70": { ATK: "488", SP: "409" }, "80": { ATK: "532", SP: "453" } },
      "6": { "80": { ATK: "563", SP: "453" }, "90": { ATK: "608", SP: "496" } },
    },
    type: "Polearm",
  },
  WolfsGravestone: {
    name: "Wolf's Gravestone",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "46", SP: "108" }, "20": { ATK: "122", SP: "191" } },
      "1": { "20": { ATK: "153", SP: "191" }, "40": { ATK: "235", SP: "278" } },
      "2": { "40": { ATK: "266", SP: "278" }, "50": { ATK: "308", SP: "322" } },
      "3": { "50": { ATK: "340", SP: "322" }, "60": { ATK: "382", SP: "365" } },
      "4": { "60": { ATK: "414", SP: "365" }, "70": { ATK: "457", SP: "409" } },
      "5": { "70": { ATK: "488", SP: "409" }, "80": { ATK: "532", SP: "453" } },
      "6": { "80": { ATK: "563", SP: "453" }, "90": { ATK: "608", SP: "496" } },
    },
    type: "Claymore",
  },
  TheCatch: {
    name: '"The Catch"',
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "42", SP: "100" }, "20": { ATK: "109", SP: "177" } },
      "1": { "20": { ATK: "135", SP: "177" }, "40": { ATK: "205", SP: "258" } },
      "2": { "40": { ATK: "231", SP: "258" }, "50": { ATK: "266", SP: "298" } },
      "3": { "50": { ATK: "292", SP: "298" }, "60": { ATK: "327", SP: "338" } },
      "4": { "60": { ATK: "353", SP: "338" }, "70": { ATK: "388", SP: "379" } },
      "5": { "70": { ATK: "414", SP: "379" }, "80": { ATK: "449", SP: "419" } },
      "6": { "80": { ATK: "475", SP: "419" }, "90": { ATK: "510", SP: "459" } },
    },
    type: "Polearm",
  },
  Akuoumaru: {
    name: "Akuoumaru",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Claymore",
  },
  AlleyHunter: {
    name: "Alley Hunter",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "44", SP: "6" }, "20": { ATK: "119", SP: "106" } },
      "1": { "20": { ATK: "144", SP: "106" }, "40": { ATK: "226", SP: "155" } },
      "2": { "40": { ATK: "252", SP: "155" }, "50": { ATK: "293", SP: "179" } },
      "3": { "50": { ATK: "319", SP: "179" }, "60": { ATK: "361", SP: "203" } },
      "4": { "60": { ATK: "387", SP: "203" }, "70": { ATK: "429", SP: "227" } },
      "5": { "70": { ATK: "455", SP: "227" }, "80": { ATK: "497", SP: "251" } },
      "6": { "80": { ATK: "523", SP: "251" }, "90": { ATK: "565", SP: "276" } },
    },
    type: "Bow",
  },
  AmenomaKageuchi: {
    name: "Amenoma Kageuchi",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "41", SP: "12" }, "20": { ATK: "99", SP: "212" } },
      "1": { "20": { ATK: "125", SP: "212" }, "40": { ATK: "184", SP: "309" } },
      "2": { "40": { ATK: "210", SP: "309" }, "50": { ATK: "238", SP: "357" } },
      "3": { "50": { ATK: "264", SP: "357" }, "60": { ATK: "293", SP: "406" } },
      "4": { "60": { ATK: "319", SP: "406" }, "70": { ATK: "347", SP: "454" } },
      "5": { "70": { ATK: "373", SP: "454" }, "80": { ATK: "401", SP: "503" } },
      "6": { "80": { ATK: "427", SP: "503" }, "90": { ATK: "454", SP: "551" } },
    },
    type: "Sword",
  },
  BlackcliffAgate: {
    name: "Blackcliff Agate",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "42", SP: "12" }, "20": { ATK: "109", SP: "212" } },
      "1": { "20": { ATK: "135", SP: "212" }, "40": { ATK: "205", SP: "309" } },
      "2": { "40": { ATK: "231", SP: "309" }, "50": { ATK: "266", SP: "357" } },
      "3": { "50": { ATK: "292", SP: "357" }, "60": { ATK: "327", SP: "406" } },
      "4": { "60": { ATK: "353", SP: "406" }, "70": { ATK: "388", SP: "454" } },
      "5": { "70": { ATK: "414", SP: "454" }, "80": { ATK: "449", SP: "503" } },
      "6": { "80": { ATK: "475", SP: "503" }, "90": { ATK: "510", SP: "551" } },
    },
    type: "Catalyst",
  },
  BlackcliffLongsword: {
    name: "Blackcliff Longsword",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "44", SP: "8" }, "20": { ATK: "119", SP: "141" } },
      "1": { "20": { ATK: "144", SP: "141" }, "40": { ATK: "226", SP: "206" } },
      "2": { "40": { ATK: "252", SP: "206" }, "50": { ATK: "293", SP: "238" } },
      "3": { "50": { ATK: "319", SP: "238" }, "60": { ATK: "361", SP: "271" } },
      "4": { "60": { ATK: "387", SP: "271" }, "70": { ATK: "429", SP: "303" } },
      "5": { "70": { ATK: "455", SP: "303" }, "80": { ATK: "497", SP: "335" } },
      "6": { "80": { ATK: "523", SP: "335" }, "90": { ATK: "565", SP: "368" } },
    },
    type: "Sword",
  },
  BlackcliffPole: {
    name: "Blackcliff Pole",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "42", SP: "12" }, "20": { ATK: "109", SP: "212" } },
      "1": { "20": { ATK: "135", SP: "212" }, "40": { ATK: "205", SP: "309" } },
      "2": { "40": { ATK: "231", SP: "309" }, "50": { ATK: "266", SP: "357" } },
      "3": { "50": { ATK: "292", SP: "357" }, "60": { ATK: "327", SP: "406" } },
      "4": { "60": { ATK: "353", SP: "406" }, "70": { ATK: "388", SP: "454" } },
      "5": { "70": { ATK: "414", SP: "454" }, "80": { ATK: "449", SP: "503" } },
      "6": { "80": { ATK: "475", SP: "503" }, "90": { ATK: "510", SP: "551" } },
    },
    type: "Polearm",
  },
  BlackcliffSlasher: {
    name: "Blackcliff Slasher",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "42", SP: "12" }, "20": { ATK: "109", SP: "212" } },
      "1": { "20": { ATK: "135", SP: "212" }, "40": { ATK: "205", SP: "309" } },
      "2": { "40": { ATK: "231", SP: "309" }, "50": { ATK: "266", SP: "357" } },
      "3": { "50": { ATK: "292", SP: "357" }, "60": { ATK: "327", SP: "406" } },
      "4": { "60": { ATK: "353", SP: "406" }, "70": { ATK: "388", SP: "454" } },
      "5": { "70": { ATK: "414", SP: "454" }, "80": { ATK: "449", SP: "503" } },
      "6": { "80": { ATK: "475", SP: "503" }, "90": { ATK: "510", SP: "551" } },
    },
    type: "Claymore",
  },
  BlackcliffWarbow: {
    name: "Blackcliff Warbow",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "44", SP: "8" }, "20": { ATK: "119", SP: "141" } },
      "1": { "20": { ATK: "144", SP: "141" }, "40": { ATK: "226", SP: "206" } },
      "2": { "40": { ATK: "252", SP: "206" }, "50": { ATK: "293", SP: "238" } },
      "3": { "50": { ATK: "319", SP: "238" }, "60": { ATK: "361", SP: "271" } },
      "4": { "60": { ATK: "387", SP: "271" }, "70": { ATK: "429", SP: "303" } },
      "5": { "70": { ATK: "455", SP: "303" }, "80": { ATK: "497", SP: "335" } },
      "6": { "80": { ATK: "523", SP: "335" }, "90": { ATK: "565", SP: "368" } },
    },
    type: "Bow",
  },
  CinnabarSpindle: {
    name: "Cinnabar Spindle",
    statBuff: "DEF",
    stats: {
      "0": { "1": { ATK: "41", SP: "15" }, "20": { ATK: "99", SP: "265" } },
      "1": { "20": { ATK: "125", SP: "265" }, "40": { ATK: "184", SP: "387" } },
      "2": { "40": { ATK: "210", SP: "387" }, "50": { ATK: "238", SP: "447" } },
      "3": { "50": { ATK: "264", SP: "447" }, "60": { ATK: "293", SP: "508" } },
      "4": { "60": { ATK: "319", SP: "508" }, "70": { ATK: "347", SP: "568" } },
      "5": { "70": { ATK: "373", SP: "568" }, "80": { ATK: "401", SP: "629" } },
      "6": { "80": { ATK: "427", SP: "629" }, "90": { ATK: "454", SP: "690" } },
    },
    type: "Sword",
  },
  CompoundBow: {
    name: "Compound Bow",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "41", SP: "15" }, "20": { ATK: "99", SP: "265" } },
      "1": { "20": { ATK: "125", SP: "265" }, "40": { ATK: "184", SP: "387" } },
      "2": { "40": { ATK: "210", SP: "387" }, "50": { ATK: "238", SP: "447" } },
      "3": { "50": { ATK: "264", SP: "447" }, "60": { ATK: "293", SP: "508" } },
      "4": { "60": { ATK: "319", SP: "508" }, "70": { ATK: "347", SP: "568" } },
      "5": { "70": { ATK: "373", SP: "568" }, "80": { ATK: "401", SP: "629" } },
      "6": { "80": { ATK: "427", SP: "629" }, "90": { ATK: "454", SP: "690" } },
    },
    type: "Bow",
  },
  CrescentPike: {
    name: "Crescent Pike",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "44", SP: "75" }, "20": { ATK: "119", SP: "133" } },
      "1": { "20": { ATK: "144", SP: "133" }, "40": { ATK: "226", SP: "193" } },
      "2": { "40": { ATK: "252", SP: "193" }, "50": { ATK: "293", SP: "224" } },
      "3": { "50": { ATK: "319", SP: "224" }, "60": { ATK: "361", SP: "254" } },
      "4": { "60": { ATK: "387", SP: "254" }, "70": { ATK: "429", SP: "284" } },
      "5": { "70": { ATK: "455", SP: "284" }, "80": { ATK: "497", SP: "315" } },
      "6": { "80": { ATK: "523", SP: "315" }, "90": { ATK: "565", SP: "345" } },
    },
    type: "Polearm",
  },
  Deathmatch: {
    name: "Deathmatch",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "41", SP: "8" }, "20": { ATK: "99", SP: "141" } },
      "1": { "20": { ATK: "125", SP: "141" }, "40": { ATK: "184", SP: "206" } },
      "2": { "40": { ATK: "210", SP: "206" }, "50": { ATK: "238", SP: "238" } },
      "3": { "50": { ATK: "264", SP: "238" }, "60": { ATK: "293", SP: "271" } },
      "4": { "60": { ATK: "319", SP: "271" }, "70": { ATK: "347", SP: "303" } },
      "5": { "70": { ATK: "373", SP: "303" }, "80": { ATK: "401", SP: "335" } },
      "6": { "80": { ATK: "427", SP: "335" }, "90": { ATK: "454", SP: "368" } },
    },
    type: "Polearm",
  },
  DodocoTales: {
    name: "Dodoco Tales",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "41", SP: "12" }, "20": { ATK: "99", SP: "212" } },
      "1": { "20": { ATK: "125", SP: "212" }, "40": { ATK: "184", SP: "309" } },
      "2": { "40": { ATK: "210", SP: "309" }, "50": { ATK: "238", SP: "357" } },
      "3": { "50": { ATK: "264", SP: "357" }, "60": { ATK: "293", SP: "406" } },
      "4": { "60": { ATK: "319", SP: "406" }, "70": { ATK: "347", SP: "454" } },
      "5": { "70": { ATK: "373", SP: "454" }, "80": { ATK: "401", SP: "503" } },
      "6": { "80": { ATK: "427", SP: "503" }, "90": { ATK: "454", SP: "551" } },
    },
    type: "Catalyst",
  },
  DragonsBane: {
    name: "Dragon's Bane",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "41", SP: "48" }, "20": { ATK: "99", SP: "85" } },
      "1": { "20": { ATK: "125", SP: "85" }, "40": { ATK: "184", SP: "124" } },
      "2": { "40": { ATK: "210", SP: "124" }, "50": { ATK: "238", SP: "143" } },
      "3": { "50": { ATK: "264", SP: "143" }, "60": { ATK: "293", SP: "162" } },
      "4": { "60": { ATK: "319", SP: "162" }, "70": { ATK: "347", SP: "182" } },
      "5": { "70": { ATK: "373", SP: "182" }, "80": { ATK: "401", SP: "201" } },
      "6": { "80": { ATK: "427", SP: "201" }, "90": { ATK: "454", SP: "221" } },
    },
    type: "Polearm",
  },
  DragonspineSpear: {
    name: "Dragonspine Spear",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "41", SP: "15" }, "20": { ATK: "99", SP: "265" } },
      "1": { "20": { ATK: "125", SP: "265" }, "40": { ATK: "184", SP: "387" } },
      "2": { "40": { ATK: "210", SP: "387" }, "50": { ATK: "238", SP: "447" } },
      "3": { "50": { ATK: "264", SP: "447" }, "60": { ATK: "293", SP: "508" } },
      "4": { "60": { ATK: "319", SP: "508" }, "70": { ATK: "347", SP: "568" } },
      "5": { "70": { ATK: "373", SP: "568" }, "80": { ATK: "401", SP: "629" } },
      "6": { "80": { ATK: "427", SP: "629" }, "90": { ATK: "454", SP: "690" } },
    },
    type: "Polearm",
  },
  EndOfTheLine: {
    name: "End of the Line",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "42", SP: "100" }, "20": { ATK: "109", SP: "177" } },
      "1": { "20": { ATK: "135", SP: "177" }, "40": { ATK: "205", SP: "258" } },
      "2": { "40": { ATK: "231", SP: "258" }, "50": { ATK: "266", SP: "298" } },
      "3": { "50": { ATK: "292", SP: "298" }, "60": { ATK: "327", SP: "338" } },
      "4": { "60": { ATK: "353", SP: "338" }, "70": { ATK: "388", SP: "379" } },
      "5": { "70": { ATK: "414", SP: "379" }, "80": { ATK: "449", SP: "419" } },
      "6": { "80": { ATK: "475", SP: "419" }, "90": { ATK: "510", SP: "459" } },
    },
    type: "Bow",
  },
  EyeOfPerception: {
    name: "Eye of Perception",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "41", SP: "12" }, "20": { ATK: "99", SP: "212" } },
      "1": { "20": { ATK: "125", SP: "212" }, "40": { ATK: "184", SP: "309" } },
      "2": { "40": { ATK: "210", SP: "309" }, "50": { ATK: "238", SP: "357" } },
      "3": { "50": { ATK: "264", SP: "357" }, "60": { ATK: "293", SP: "406" } },
      "4": { "60": { ATK: "319", SP: "406" }, "70": { ATK: "347", SP: "454" } },
      "5": { "70": { ATK: "373", SP: "454" }, "80": { ATK: "401", SP: "503" } },
      "6": { "80": { ATK: "427", SP: "503" }, "90": { ATK: "454", SP: "551" } },
    },
    type: "Catalyst",
  },
  FadingTwilight: {
    name: "Fading Twilight",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "44", SP: "67" }, "20": { ATK: "119", SP: "118" } },
      "1": { "20": { ATK: "144", SP: "118" }, "40": { ATK: "226", SP: "172" } },
      "2": { "40": { ATK: "252", SP: "172" }, "50": { ATK: "293", SP: "199" } },
      "3": { "50": { ATK: "319", SP: "199" }, "60": { ATK: "361", SP: "226" } },
      "4": { "60": { ATK: "387", SP: "226" }, "70": { ATK: "429", SP: "252" } },
      "5": { "70": { ATK: "455", SP: "252" }, "80": { ATK: "497", SP: "279" } },
      "6": { "80": { ATK: "523", SP: "279" }, "90": { ATK: "565", SP: "306" } },
    },
    type: "Bow",
  },
  FavoniusCodex: {
    name: "Favonius Codex",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "42", SP: "100" }, "20": { ATK: "109", SP: "177" } },
      "1": { "20": { ATK: "135", SP: "177" }, "40": { ATK: "205", SP: "258" } },
      "2": { "40": { ATK: "231", SP: "258" }, "50": { ATK: "266", SP: "298" } },
      "3": { "50": { ATK: "292", SP: "298" }, "60": { ATK: "327", SP: "338" } },
      "4": { "60": { ATK: "353", SP: "338" }, "70": { ATK: "388", SP: "379" } },
      "5": { "70": { ATK: "414", SP: "379" }, "80": { ATK: "449", SP: "419" } },
      "6": { "80": { ATK: "475", SP: "419" }, "90": { ATK: "510", SP: "459" } },
    },
    type: "Catalyst",
  },
  FavoniusGreatsword: {
    name: "Favonius Greatsword",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "41", SP: "133" }, "20": { ATK: "99", SP: "236" } },
      "1": { "20": { ATK: "125", SP: "236" }, "40": { ATK: "184", SP: "343" } },
      "2": { "40": { ATK: "210", SP: "343" }, "50": { ATK: "238", SP: "397" } },
      "3": { "50": { ATK: "264", SP: "397" }, "60": { ATK: "293", SP: "451" } },
      "4": { "60": { ATK: "319", SP: "451" }, "70": { ATK: "347", SP: "505" } },
      "5": { "70": { ATK: "373", SP: "505" }, "80": { ATK: "401", SP: "559" } },
      "6": { "80": { ATK: "427", SP: "559" }, "90": { ATK: "454", SP: "613" } },
    },
    type: "Claymore",
  },
  FavoniusLance: {
    name: "Favonius Lance",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "44", SP: "67" }, "20": { ATK: "119", SP: "118" } },
      "1": { "20": { ATK: "144", SP: "118" }, "40": { ATK: "226", SP: "172" } },
      "2": { "40": { ATK: "252", SP: "172" }, "50": { ATK: "293", SP: "199" } },
      "3": { "50": { ATK: "319", SP: "199" }, "60": { ATK: "361", SP: "226" } },
      "4": { "60": { ATK: "387", SP: "226" }, "70": { ATK: "429", SP: "252" } },
      "5": { "70": { ATK: "455", SP: "252" }, "80": { ATK: "497", SP: "279" } },
      "6": { "80": { ATK: "523", SP: "279" }, "90": { ATK: "565", SP: "306" } },
    },
    type: "Polearm",
  },
  FavoniusSword: {
    name: "Favonius Sword",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "41", SP: "133" }, "20": { ATK: "99", SP: "236" } },
      "1": { "20": { ATK: "125", SP: "236" }, "40": { ATK: "184", SP: "343" } },
      "2": { "40": { ATK: "210", SP: "343" }, "50": { ATK: "238", SP: "397" } },
      "3": { "50": { ATK: "264", SP: "397" }, "60": { ATK: "293", SP: "451" } },
      "4": { "60": { ATK: "319", SP: "451" }, "70": { ATK: "347", SP: "505" } },
      "5": { "70": { ATK: "373", SP: "505" }, "80": { ATK: "401", SP: "559" } },
      "6": { "80": { ATK: "427", SP: "559" }, "90": { ATK: "454", SP: "613" } },
    },
    type: "Sword",
  },
  FavoniusWarbow: {
    name: "Favonius Warbow",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "41", SP: "133" }, "20": { ATK: "99", SP: "236" } },
      "1": { "20": { ATK: "125", SP: "236" }, "40": { ATK: "184", SP: "343" } },
      "2": { "40": { ATK: "210", SP: "343" }, "50": { ATK: "238", SP: "397" } },
      "3": { "50": { ATK: "264", SP: "397" }, "60": { ATK: "293", SP: "451" } },
      "4": { "60": { ATK: "319", SP: "451" }, "70": { ATK: "347", SP: "505" } },
      "5": { "70": { ATK: "373", SP: "505" }, "80": { ATK: "401", SP: "559" } },
      "6": { "80": { ATK: "427", SP: "559" }, "90": { ATK: "454", SP: "613" } },
    },
    type: "Bow",
  },
  FesteringDesire: {
    name: "Festering Desire",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "42", SP: "100" }, "20": { ATK: "109", SP: "177" } },
      "1": { "20": { ATK: "135", SP: "177" }, "40": { ATK: "205", SP: "258" } },
      "2": { "40": { ATK: "231", SP: "258" }, "50": { ATK: "266", SP: "298" } },
      "3": { "50": { ATK: "292", SP: "298" }, "60": { ATK: "327", SP: "338" } },
      "4": { "60": { ATK: "353", SP: "338" }, "70": { ATK: "388", SP: "379" } },
      "5": { "70": { ATK: "414", SP: "379" }, "80": { ATK: "449", SP: "419" } },
      "6": { "80": { ATK: "475", SP: "419" }, "90": { ATK: "510", SP: "459" } },
    },
    type: "Sword",
  },
  ForestRegalia: {
    name: "Forest Regalia",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "44", SP: "67" }, "20": { ATK: "119", SP: "118" } },
      "1": { "20": { ATK: "144", SP: "118" }, "40": { ATK: "226", SP: "172" } },
      "2": { "40": { ATK: "252", SP: "172" }, "50": { ATK: "293", SP: "199" } },
      "3": { "50": { ATK: "319", SP: "199" }, "60": { ATK: "361", SP: "226" } },
      "4": { "60": { ATK: "387", SP: "226" }, "70": { ATK: "429", SP: "252" } },
      "5": { "70": { ATK: "455", SP: "252" }, "80": { ATK: "497", SP: "279" } },
      "6": { "80": { ATK: "523", SP: "279" }, "90": { ATK: "565", SP: "306" } },
    },
    type: "Claymore",
  },
  Frostbearer: {
    name: "Frostbearer",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Catalyst",
  },
  FruitOfFulfillment: {
    name: "Fruit of Fulfillment",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "42", SP: "100" }, "20": { ATK: "109", SP: "177" } },
      "1": { "20": { ATK: "135", SP: "177" }, "40": { ATK: "205", SP: "258" } },
      "2": { "40": { ATK: "231", SP: "258" }, "50": { ATK: "266", SP: "298" } },
      "3": { "50": { ATK: "292", SP: "298" }, "60": { ATK: "327", SP: "338" } },
      "4": { "60": { ATK: "353", SP: "338" }, "70": { ATK: "388", SP: "379" } },
      "5": { "70": { ATK: "414", SP: "379" }, "80": { ATK: "449", SP: "419" } },
      "6": { "80": { ATK: "475", SP: "419" }, "90": { ATK: "510", SP: "459" } },
    },
    type: "Catalyst",
  },
  HakushinRing: {
    name: "Hakushin Ring",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "44", SP: "67" }, "20": { ATK: "119", SP: "118" } },
      "1": { "20": { ATK: "144", SP: "118" }, "40": { ATK: "226", SP: "172" } },
      "2": { "40": { ATK: "252", SP: "172" }, "50": { ATK: "293", SP: "199" } },
      "3": { "50": { ATK: "319", SP: "199" }, "60": { ATK: "361", SP: "226" } },
      "4": { "60": { ATK: "387", SP: "226" }, "70": { ATK: "429", SP: "252" } },
      "5": { "70": { ATK: "455", SP: "252" }, "80": { ATK: "497", SP: "279" } },
      "6": { "80": { ATK: "523", SP: "279" }, "90": { ATK: "565", SP: "306" } },
    },
    type: "Catalyst",
  },
  Hamayumi: {
    name: "Hamayumi",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "41", SP: "12" }, "20": { ATK: "99", SP: "212" } },
      "1": { "20": { ATK: "125", SP: "212" }, "40": { ATK: "184", SP: "309" } },
      "2": { "40": { ATK: "210", SP: "309" }, "50": { ATK: "238", SP: "357" } },
      "3": { "50": { ATK: "264", SP: "357" }, "60": { ATK: "293", SP: "406" } },
      "4": { "60": { ATK: "319", SP: "406" }, "70": { ATK: "347", SP: "454" } },
      "5": { "70": { ATK: "373", SP: "454" }, "80": { ATK: "401", SP: "503" } },
      "6": { "80": { ATK: "427", SP: "503" }, "90": { ATK: "454", SP: "551" } },
    },
    type: "Bow",
  },
  IronSting: {
    name: "Iron Sting",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "42", SP: "36" }, "20": { ATK: "109", SP: "64" } },
      "1": { "20": { ATK: "135", SP: "64" }, "40": { ATK: "205", SP: "93" } },
      "2": { "40": { ATK: "231", SP: "93" }, "50": { ATK: "266", SP: "107" } },
      "3": { "50": { ATK: "292", SP: "107" }, "60": { ATK: "327", SP: "122" } },
      "4": { "60": { ATK: "353", SP: "122" }, "70": { ATK: "388", SP: "136" } },
      "5": { "70": { ATK: "414", SP: "136" }, "80": { ATK: "449", SP: "151" } },
      "6": { "80": { ATK: "475", SP: "151" }, "90": { ATK: "510", SP: "165" } },
    },
    type: "Sword",
  },
  KagotsurubeIsshin: {
    name: "Kagotsurube Isshin",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Sword",
  },
  KatsuragikiriNagamasa: {
    name: "Katsuragikiri Nagamasa",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "42", SP: "100" }, "20": { ATK: "109", SP: "177" } },
      "1": { "20": { ATK: "135", SP: "177" }, "40": { ATK: "205", SP: "258" } },
      "2": { "40": { ATK: "231", SP: "258" }, "50": { ATK: "266", SP: "298" } },
      "3": { "50": { ATK: "292", SP: "298" }, "60": { ATK: "327", SP: "338" } },
      "4": { "60": { ATK: "353", SP: "338" }, "70": { ATK: "388", SP: "379" } },
      "5": { "70": { ATK: "414", SP: "379" }, "80": { ATK: "449", SP: "419" } },
      "6": { "80": { ATK: "475", SP: "419" }, "90": { ATK: "510", SP: "459" } },
    },
    type: "Claymore",
  },
  KingsSquire: {
    name: "King's Squire",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "41", SP: "12" }, "20": { ATK: "99", SP: "212" } },
      "1": { "20": { ATK: "125", SP: "212" }, "40": { ATK: "184", SP: "309" } },
      "2": { "40": { ATK: "210", SP: "309" }, "50": { ATK: "238", SP: "357" } },
      "3": { "50": { ATK: "264", SP: "357" }, "60": { ATK: "293", SP: "406" } },
      "4": { "60": { ATK: "319", SP: "406" }, "70": { ATK: "347", SP: "454" } },
      "5": { "70": { ATK: "373", SP: "454" }, "80": { ATK: "401", SP: "503" } },
      "6": { "80": { ATK: "427", SP: "503" }, "90": { ATK: "454", SP: "551" } },
    },
    type: "Bow",
  },
  KitainCrossSpear: {
    name: "Kitain Cross Spear",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "44", SP: "24" }, "20": { ATK: "119", SP: "42" } },
      "1": { "20": { ATK: "144", SP: "42" }, "40": { ATK: "226", SP: "62" } },
      "2": { "40": { ATK: "252", SP: "62" }, "50": { ATK: "293", SP: "71" } },
      "3": { "50": { ATK: "319", SP: "71" }, "60": { ATK: "361", SP: "81" } },
      "4": { "60": { ATK: "387", SP: "81" }, "70": { ATK: "429", SP: "91" } },
      "5": { "70": { ATK: "455", SP: "91" }, "80": { ATK: "497", SP: "101" } },
      "6": { "80": { ATK: "523", SP: "101" }, "90": { ATK: "565", SP: "110" } },
    },
    type: "Polearm",
  },
  LionsRoar: {
    name: "Lion's Roar",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Sword",
  },
  LithicBlade: {
    name: "Lithic Blade",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Claymore",
  },
  LithicSpear: {
    name: "Lithic Spear",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "44", SP: "6" }, "20": { ATK: "119", SP: "106" } },
      "1": { "20": { ATK: "144", SP: "106" }, "40": { ATK: "226", SP: "155" } },
      "2": { "40": { ATK: "252", SP: "155" }, "50": { ATK: "293", SP: "179" } },
      "3": { "50": { ATK: "319", SP: "179" }, "60": { ATK: "361", SP: "203" } },
      "4": { "60": { ATK: "387", SP: "203" }, "70": { ATK: "429", SP: "227" } },
      "5": { "70": { ATK: "455", SP: "227" }, "80": { ATK: "497", SP: "251" } },
      "6": { "80": { ATK: "523", SP: "251" }, "90": { ATK: "565", SP: "276" } },
    },
    type: "Polearm",
  },
  LuxuriousSeaLord: {
    name: "Luxurious Sea-Lord",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "41", SP: "12" }, "20": { ATK: "99", SP: "212" } },
      "1": { "20": { ATK: "125", SP: "212" }, "40": { ATK: "184", SP: "309" } },
      "2": { "40": { ATK: "210", SP: "309" }, "50": { ATK: "238", SP: "357" } },
      "3": { "50": { ATK: "264", SP: "357" }, "60": { ATK: "293", SP: "406" } },
      "4": { "60": { ATK: "319", SP: "406" }, "70": { ATK: "347", SP: "454" } },
      "5": { "70": { ATK: "373", SP: "454" }, "80": { ATK: "401", SP: "503" } },
      "6": { "80": { ATK: "427", SP: "503" }, "90": { ATK: "454", SP: "551" } },
    },
    type: "Claymore",
  },
  MakhairaAquamarine: {
    name: "Makhaira Aquamarine",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "42", SP: "36" }, "20": { ATK: "109", SP: "64" } },
      "1": { "20": { ATK: "135", SP: "64" }, "40": { ATK: "205", SP: "93" } },
      "2": { "40": { ATK: "231", SP: "93" }, "50": { ATK: "266", SP: "107" } },
      "3": { "50": { ATK: "292", SP: "107" }, "60": { ATK: "327", SP: "122" } },
      "4": { "60": { ATK: "353", SP: "122" }, "70": { ATK: "388", SP: "136" } },
      "5": { "70": { ATK: "414", SP: "136" }, "80": { ATK: "449", SP: "151" } },
      "6": { "80": { ATK: "475", SP: "151" }, "90": { ATK: "510", SP: "165" } },
    },
    type: "Claymore",
  },
  MappaMare: {
    name: "Mappa Mare",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "44", SP: "24" }, "20": { ATK: "119", SP: "42" } },
      "1": { "20": { ATK: "144", SP: "42" }, "40": { ATK: "226", SP: "62" } },
      "2": { "40": { ATK: "252", SP: "62" }, "50": { ATK: "293", SP: "71" } },
      "3": { "50": { ATK: "319", SP: "71" }, "60": { ATK: "361", SP: "81" } },
      "4": { "60": { ATK: "387", SP: "81" }, "70": { ATK: "429", SP: "91" } },
      "5": { "70": { ATK: "455", SP: "91" }, "80": { ATK: "497", SP: "101" } },
      "6": { "80": { ATK: "523", SP: "101" }, "90": { ATK: "565", SP: "110" } },
    },
    type: "Catalyst",
  },
  MissiveWindspear: {
    name: "Missive Windspear",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Polearm",
  },
  MitternachtsWaltz: {
    name: "Mitternachts Waltz",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "42", SP: "113" }, "20": { ATK: "109", SP: "200" } },
      "1": { "20": { ATK: "135", SP: "200" }, "40": { ATK: "205", SP: "290" } },
      "2": { "40": { ATK: "231", SP: "290" }, "50": { ATK: "266", SP: "335" } },
      "3": { "50": { ATK: "292", SP: "335" }, "60": { ATK: "327", SP: "381" } },
      "4": { "60": { ATK: "353", SP: "381" }, "70": { ATK: "388", SP: "426" } },
      "5": { "70": { ATK: "414", SP: "426" }, "80": { ATK: "449", SP: "472" } },
      "6": { "80": { ATK: "475", SP: "472" }, "90": { ATK: "510", SP: "517" } },
    },
    type: "Bow",
  },
  Moonpiercer: {
    name: "Moonpiercer",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "44", SP: "24" }, "20": { ATK: "119", SP: "42" } },
      "1": { "20": { ATK: "144", SP: "42" }, "40": { ATK: "226", SP: "62" } },
      "2": { "40": { ATK: "252", SP: "62" }, "50": { ATK: "293", SP: "71" } },
      "3": { "50": { ATK: "319", SP: "71" }, "60": { ATK: "361", SP: "81" } },
      "4": { "60": { ATK: "387", SP: "81" }, "70": { ATK: "429", SP: "91" } },
      "5": { "70": { ATK: "455", SP: "91" }, "80": { ATK: "497", SP: "101" } },
      "6": { "80": { ATK: "523", SP: "101" }, "90": { ATK: "565", SP: "110" } },
    },
    type: "Polearm",
  },
  MouunsMoon: {
    name: "Mouun's Moon",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "44", SP: "6" }, "20": { ATK: "119", SP: "106" } },
      "1": { "20": { ATK: "144", SP: "106" }, "40": { ATK: "226", SP: "155" } },
      "2": { "40": { ATK: "252", SP: "155" }, "50": { ATK: "293", SP: "179" } },
      "3": { "50": { ATK: "319", SP: "179" }, "60": { ATK: "361", SP: "203" } },
      "4": { "60": { ATK: "387", SP: "203" }, "70": { ATK: "429", SP: "227" } },
      "5": { "70": { ATK: "455", SP: "227" }, "80": { ATK: "497", SP: "251" } },
      "6": { "80": { ATK: "523", SP: "251" }, "90": { ATK: "565", SP: "276" } },
    },
    type: "Bow",
  },
  OathswornEye: {
    name: "Oathsworn Eye",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "44", SP: "6" }, "20": { ATK: "119", SP: "106" } },
      "1": { "20": { ATK: "144", SP: "106" }, "40": { ATK: "226", SP: "155" } },
      "2": { "40": { ATK: "252", SP: "155" }, "50": { ATK: "293", SP: "179" } },
      "3": { "50": { ATK: "319", SP: "179" }, "60": { ATK: "361", SP: "203" } },
      "4": { "60": { ATK: "387", SP: "203" }, "70": { ATK: "429", SP: "227" } },
      "5": { "70": { ATK: "455", SP: "227" }, "80": { ATK: "497", SP: "251" } },
      "6": { "80": { ATK: "523", SP: "251" }, "90": { ATK: "565", SP: "276" } },
    },
    type: "Catalyst",
  },
  Predator: {
    name: "Predator",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Bow",
  },
  "PrizedIsshinBlade(Awakened)": {
    name: "Prized Isshin Blade (Awakened)",
    statBuff: "ATK\n",
  },
  "PrizedIsshinBlade(Shattered)": {
    name: "Prized Isshin Blade (Shattered)",
    statBuff: "ATK",
  },
  PrototypeAmber: {
    name: "Prototype Amber",
    statBuff: "HP",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Catalyst",
  },
  PrototypeArchaic: {
    name: "Prototype Archaic",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "44", SP: "6" }, "20": { ATK: "119", SP: "106" } },
      "1": { "20": { ATK: "144", SP: "106" }, "40": { ATK: "226", SP: "155" } },
      "2": { "40": { ATK: "252", SP: "155" }, "50": { ATK: "293", SP: "179" } },
      "3": { "50": { ATK: "319", SP: "179" }, "60": { ATK: "361", SP: "203" } },
      "4": { "60": { ATK: "387", SP: "203" }, "70": { ATK: "429", SP: "227" } },
      "5": { "70": { ATK: "455", SP: "227" }, "80": { ATK: "497", SP: "251" } },
      "6": { "80": { ATK: "523", SP: "251" }, "90": { ATK: "565", SP: "276" } },
    },
    type: "Claymore",
  },
  PrototypeCrescent: {
    name: "Prototype Crescent",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Bow",
  },
  PrototypeRancour: {
    name: "Prototype Rancour",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "44", SP: "75" }, "20": { ATK: "119", SP: "133" } },
      "1": { "20": { ATK: "144", SP: "133" }, "40": { ATK: "226", SP: "193" } },
      "2": { "40": { ATK: "252", SP: "193" }, "50": { ATK: "293", SP: "224" } },
      "3": { "50": { ATK: "319", SP: "224" }, "60": { ATK: "361", SP: "254" } },
      "4": { "60": { ATK: "387", SP: "254" }, "70": { ATK: "429", SP: "284" } },
      "5": { "70": { ATK: "455", SP: "284" }, "80": { ATK: "497", SP: "315" } },
      "6": { "80": { ATK: "523", SP: "315" }, "90": { ATK: "565", SP: "345" } },
    },
    type: "Sword",
  },
  PrototypeStarglitter: {
    name: "Prototype Starglitter",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "42", SP: "100" }, "20": { ATK: "109", SP: "177" } },
      "1": { "20": { ATK: "135", SP: "177" }, "40": { ATK: "205", SP: "258" } },
      "2": { "40": { ATK: "231", SP: "258" }, "50": { ATK: "266", SP: "298" } },
      "3": { "50": { ATK: "292", SP: "298" }, "60": { ATK: "327", SP: "338" } },
      "4": { "60": { ATK: "353", SP: "338" }, "70": { ATK: "388", SP: "379" } },
      "5": { "70": { ATK: "414", SP: "379" }, "80": { ATK: "449", SP: "419" } },
      "6": { "80": { ATK: "475", SP: "419" }, "90": { ATK: "510", SP: "459" } },
    },
    type: "Polearm",
  },
  Rainslasher: {
    name: "Rainslasher",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "42", SP: "36" }, "20": { ATK: "109", SP: "64" } },
      "1": { "20": { ATK: "135", SP: "64" }, "40": { ATK: "205", SP: "93" } },
      "2": { "40": { ATK: "231", SP: "93" }, "50": { ATK: "266", SP: "107" } },
      "3": { "50": { ATK: "292", SP: "107" }, "60": { ATK: "327", SP: "122" } },
      "4": { "60": { ATK: "353", SP: "122" }, "70": { ATK: "388", SP: "136" } },
      "5": { "70": { ATK: "414", SP: "136" }, "80": { ATK: "449", SP: "151" } },
      "6": { "80": { ATK: "475", SP: "151" }, "90": { ATK: "510", SP: "165" } },
    },
    type: "Claymore",
  },
  RoyalBow: {
    name: "Royal Bow",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Bow",
  },
  RoyalGreatsword: {
    name: "Royal Greatsword",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "44", SP: "6" }, "20": { ATK: "119", SP: "106" } },
      "1": { "20": { ATK: "144", SP: "106" }, "40": { ATK: "226", SP: "155" } },
      "2": { "40": { ATK: "252", SP: "155" }, "50": { ATK: "293", SP: "179" } },
      "3": { "50": { ATK: "319", SP: "179" }, "60": { ATK: "361", SP: "203" } },
      "4": { "60": { ATK: "387", SP: "203" }, "70": { ATK: "429", SP: "227" } },
      "5": { "70": { ATK: "455", SP: "227" }, "80": { ATK: "497", SP: "251" } },
      "6": { "80": { ATK: "523", SP: "251" }, "90": { ATK: "565", SP: "276" } },
    },
    type: "Claymore",
  },
  RoyalGrimoire: {
    name: "Royal Grimoire",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "44", SP: "6" }, "20": { ATK: "119", SP: "106" } },
      "1": { "20": { ATK: "144", SP: "106" }, "40": { ATK: "226", SP: "155" } },
      "2": { "40": { ATK: "252", SP: "155" }, "50": { ATK: "293", SP: "179" } },
      "3": { "50": { ATK: "319", SP: "179" }, "60": { ATK: "361", SP: "203" } },
      "4": { "60": { ATK: "387", SP: "203" }, "70": { ATK: "429", SP: "227" } },
      "5": { "70": { ATK: "455", SP: "227" }, "80": { ATK: "497", SP: "251" } },
      "6": { "80": { ATK: "523", SP: "251" }, "90": { ATK: "565", SP: "276" } },
    },
    type: "Catalyst",
  },
  RoyalLongsword: {
    name: "Royal Longsword",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Sword",
  },
  RoyalSpear: {
    name: "Royal Spear",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "44", SP: "6" }, "20": { ATK: "119", SP: "106" } },
      "1": { "20": { ATK: "144", SP: "106" }, "40": { ATK: "226", SP: "155" } },
      "2": { "40": { ATK: "252", SP: "155" }, "50": { ATK: "293", SP: "179" } },
      "3": { "50": { ATK: "319", SP: "179" }, "60": { ATK: "361", SP: "203" } },
      "4": { "60": { ATK: "387", SP: "203" }, "70": { ATK: "429", SP: "227" } },
      "5": { "70": { ATK: "455", SP: "227" }, "80": { ATK: "497", SP: "251" } },
      "6": { "80": { ATK: "523", SP: "251" }, "90": { ATK: "565", SP: "276" } },
    },
    type: "Polearm",
  },
  Rust: {
    name: "Rust",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Bow",
  },
  SacrificialBow: {
    name: "Sacrificial Bow",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "44", SP: "67" }, "20": { ATK: "119", SP: "118" } },
      "1": { "20": { ATK: "144", SP: "118" }, "40": { ATK: "226", SP: "172" } },
      "2": { "40": { ATK: "252", SP: "172" }, "50": { ATK: "293", SP: "199" } },
      "3": { "50": { ATK: "319", SP: "199" }, "60": { ATK: "361", SP: "226" } },
      "4": { "60": { ATK: "387", SP: "226" }, "70": { ATK: "429", SP: "252" } },
      "5": { "70": { ATK: "455", SP: "252" }, "80": { ATK: "497", SP: "279" } },
      "6": { "80": { ATK: "523", SP: "279" }, "90": { ATK: "565", SP: "306" } },
    },
    type: "Bow",
  },
  SacrificialFragments: {
    name: "Sacrificial Fragments",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "41", SP: "48" }, "20": { ATK: "99", SP: "85" } },
      "1": { "20": { ATK: "125", SP: "85" }, "40": { ATK: "184", SP: "124" } },
      "2": { "40": { ATK: "210", SP: "124" }, "50": { ATK: "238", SP: "143" } },
      "3": { "50": { ATK: "264", SP: "143" }, "60": { ATK: "293", SP: "162" } },
      "4": { "60": { ATK: "319", SP: "162" }, "70": { ATK: "347", SP: "182" } },
      "5": { "70": { ATK: "373", SP: "182" }, "80": { ATK: "401", SP: "201" } },
      "6": { "80": { ATK: "427", SP: "201" }, "90": { ATK: "454", SP: "221" } },
    },
    type: "Catalyst",
  },
  SacrificialGreatsword: {
    name: "Sacrificial Greatsword",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "44", SP: "67" }, "20": { ATK: "119", SP: "118" } },
      "1": { "20": { ATK: "144", SP: "118" }, "40": { ATK: "226", SP: "172" } },
      "2": { "40": { ATK: "252", SP: "172" }, "50": { ATK: "293", SP: "199" } },
      "3": { "50": { ATK: "319", SP: "199" }, "60": { ATK: "361", SP: "226" } },
      "4": { "60": { ATK: "387", SP: "226" }, "70": { ATK: "429", SP: "252" } },
      "5": { "70": { ATK: "455", SP: "252" }, "80": { ATK: "497", SP: "279" } },
      "6": { "80": { ATK: "523", SP: "279" }, "90": { ATK: "565", SP: "306" } },
    },
    type: "Claymore",
  },
  SacrificialSword: {
    name: "Sacrificial Sword",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "41", SP: "133" }, "20": { ATK: "99", SP: "236" } },
      "1": { "20": { ATK: "125", SP: "236" }, "40": { ATK: "184", SP: "343" } },
      "2": { "40": { ATK: "210", SP: "343" }, "50": { ATK: "238", SP: "397" } },
      "3": { "50": { ATK: "264", SP: "397" }, "60": { ATK: "293", SP: "451" } },
      "4": { "60": { ATK: "319", SP: "451" }, "70": { ATK: "347", SP: "505" } },
      "5": { "70": { ATK: "373", SP: "505" }, "80": { ATK: "401", SP: "559" } },
      "6": { "80": { ATK: "427", SP: "559" }, "90": { ATK: "454", SP: "613" } },
    },
    type: "Sword",
  },
  SapwoodBlade: {
    name: "Sapwood Blade",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "44", SP: "67" }, "20": { ATK: "119", SP: "118" } },
      "1": { "20": { ATK: "144", SP: "118" }, "40": { ATK: "226", SP: "172" } },
      "2": { "40": { ATK: "252", SP: "172" }, "50": { ATK: "293", SP: "199" } },
      "3": { "50": { ATK: "319", SP: "199" }, "60": { ATK: "361", SP: "226" } },
      "4": { "60": { ATK: "387", SP: "226" }, "70": { ATK: "429", SP: "252" } },
      "5": { "70": { ATK: "455", SP: "252" }, "80": { ATK: "497", SP: "279" } },
      "6": { "80": { ATK: "523", SP: "279" }, "90": { ATK: "565", SP: "306" } },
    },
    type: "Sword",
  },
  SerpentSpine: {
    name: "Serpent Spine",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "42", SP: "6" }, "20": { ATK: "109", SP: "106" } },
      "1": { "20": { ATK: "135", SP: "106" }, "40": { ATK: "205", SP: "155" } },
      "2": { "40": { ATK: "231", SP: "155" }, "50": { ATK: "266", SP: "179" } },
      "3": { "50": { ATK: "292", SP: "179" }, "60": { ATK: "327", SP: "203" } },
      "4": { "60": { ATK: "353", SP: "203" }, "70": { ATK: "388", SP: "227" } },
      "5": { "70": { ATK: "414", SP: "227" }, "80": { ATK: "449", SP: "251" } },
      "6": { "80": { ATK: "475", SP: "251" }, "90": { ATK: "510", SP: "276" } },
    },
    type: "Claymore",
  },
  SnowTombedStarsilver: {
    name: "Snow-Tombed Starsilver",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "44", SP: "75" }, "20": { ATK: "119", SP: "133" } },
      "1": { "20": { ATK: "144", SP: "133" }, "40": { ATK: "226", SP: "193" } },
      "2": { "40": { ATK: "252", SP: "193" }, "50": { ATK: "293", SP: "224" } },
      "3": { "50": { ATK: "319", SP: "224" }, "60": { ATK: "361", SP: "254" } },
      "4": { "60": { ATK: "387", SP: "254" }, "70": { ATK: "429", SP: "284" } },
      "5": { "70": { ATK: "455", SP: "284" }, "80": { ATK: "497", SP: "315" } },
      "6": { "80": { ATK: "523", SP: "315" }, "90": { ATK: "565", SP: "345" } },
    },
    type: "Claymore",
  },
  SolarPearl: {
    name: "Solar Pearl",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "42", SP: "6" }, "20": { ATK: "109", SP: "106" } },
      "1": { "20": { ATK: "135", SP: "106" }, "40": { ATK: "205", SP: "155" } },
      "2": { "40": { ATK: "231", SP: "155" }, "50": { ATK: "266", SP: "179" } },
      "3": { "50": { ATK: "292", SP: "179" }, "60": { ATK: "327", SP: "203" } },
      "4": { "60": { ATK: "353", SP: "203" }, "70": { ATK: "388", SP: "227" } },
      "5": { "70": { ATK: "414", SP: "227" }, "80": { ATK: "449", SP: "251" } },
      "6": { "80": { ATK: "475", SP: "251" }, "90": { ATK: "510", SP: "276" } },
    },
    type: "Catalyst",
  },
  SwordOfDescension: {
    name: "Sword of Descension",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "39", SP: "77" }, "20": { ATK: "94", SP: "135" } },
      "1": { "20": { ATK: "120", SP: "135" }, "40": { ATK: "176", SP: "197" } },
      "2": { "40": { ATK: "202", SP: "197" }, "50": { ATK: "229", SP: "228" } },
      "3": { "50": { ATK: "255", SP: "228" }, "60": { ATK: "282", SP: "259" } },
      "4": { "60": { ATK: "308", SP: "259" }, "70": { ATK: "335", SP: "290" } },
      "5": { "70": { ATK: "361", SP: "290" }, "80": { ATK: "388", SP: "321" } },
      "6": { "80": { ATK: "414", SP: "321" }, "90": { ATK: "440", SP: "352" } },
    },
    type: "Sword",
  },
  TheAlleyFlash: {
    name: "The Alley Flash",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "45", SP: "12" }, "20": { ATK: "128", SP: "21" } },
      "1": { "20": { ATK: "154", SP: "21" }, "40": { ATK: "247", SP: "31" } },
      "2": { "40": { ATK: "273", SP: "31" }, "50": { ATK: "321", SP: "36" } },
      "3": { "50": { ATK: "347", SP: "36" }, "60": { ATK: "395", SP: "41" } },
      "4": { "60": { ATK: "421", SP: "41" }, "70": { ATK: "470", SP: "45" } },
      "5": { "70": { ATK: "496", SP: "45" }, "80": { ATK: "545", SP: "50" } },
      "6": { "80": { ATK: "571", SP: "50" }, "90": { ATK: "620", SP: "55" } },
    },
    type: "Sword",
  },
  TheBell: {
    name: "The Bell",
    statBuff: "HP",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Claymore",
  },
  TheBlackSword: {
    name: "The Black Sword",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "42", SP: "6" }, "20": { ATK: "109", SP: "106" } },
      "1": { "20": { ATK: "135", SP: "106" }, "40": { ATK: "205", SP: "155" } },
      "2": { "40": { ATK: "231", SP: "155" }, "50": { ATK: "266", SP: "179" } },
      "3": { "50": { ATK: "292", SP: "179" }, "60": { ATK: "327", SP: "203" } },
      "4": { "60": { ATK: "353", SP: "203" }, "70": { ATK: "388", SP: "227" } },
      "5": { "70": { ATK: "414", SP: "227" }, "80": { ATK: "449", SP: "251" } },
      "6": { "80": { ATK: "475", SP: "251" }, "90": { ATK: "510", SP: "276" } },
    },
    type: "Sword",
  },
  TheFlute: {
    name: "The Flute",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "42", SP: "9" }, "20": { ATK: "109", SP: "159" } },
      "1": { "20": { ATK: "135", SP: "159" }, "40": { ATK: "205", SP: "232" } },
      "2": { "40": { ATK: "231", SP: "232" }, "50": { ATK: "266", SP: "268" } },
      "3": { "50": { ATK: "292", SP: "268" }, "60": { ATK: "327", SP: "304" } },
      "4": { "60": { ATK: "353", SP: "304" }, "70": { ATK: "388", SP: "341" } },
      "5": { "70": { ATK: "414", SP: "341" }, "80": { ATK: "449", SP: "377" } },
      "6": { "80": { ATK: "475", SP: "377" }, "90": { ATK: "510", SP: "413" } },
    },
    type: "Sword",
  },
  TheStringless: {
    name: "The Stringless",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "42", SP: "36" }, "20": { ATK: "109", SP: "64" } },
      "1": { "20": { ATK: "135", SP: "64" }, "40": { ATK: "205", SP: "93" } },
      "2": { "40": { ATK: "231", SP: "93" }, "50": { ATK: "266", SP: "107" } },
      "3": { "50": { ATK: "292", SP: "107" }, "60": { ATK: "327", SP: "122" } },
      "4": { "60": { ATK: "353", SP: "122" }, "70": { ATK: "388", SP: "136" } },
      "5": { "70": { ATK: "414", SP: "136" }, "80": { ATK: "449", SP: "151" } },
      "6": { "80": { ATK: "475", SP: "151" }, "90": { ATK: "510", SP: "165" } },
    },
    type: "Bow",
  },
  TheViridescentHunt: {
    name: "The Viridescent Hunt",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "42", SP: "6" }, "20": { ATK: "109", SP: "106" } },
      "1": { "20": { ATK: "135", SP: "106" }, "40": { ATK: "205", SP: "155" } },
      "2": { "40": { ATK: "231", SP: "155" }, "50": { ATK: "266", SP: "179" } },
      "3": { "50": { ATK: "292", SP: "179" }, "60": { ATK: "327", SP: "203" } },
      "4": { "60": { ATK: "353", SP: "203" }, "70": { ATK: "388", SP: "227" } },
      "5": { "70": { ATK: "414", SP: "227" }, "80": { ATK: "449", SP: "251" } },
      "6": { "80": { ATK: "475", SP: "251" }, "90": { ATK: "510", SP: "276" } },
    },
    type: "Bow",
  },
  TheWidsith: {
    name: "The Widsith",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "42", SP: "12" }, "20": { ATK: "109", SP: "212" } },
      "1": { "20": { ATK: "135", SP: "212" }, "40": { ATK: "205", SP: "309" } },
      "2": { "40": { ATK: "231", SP: "309" }, "50": { ATK: "266", SP: "357" } },
      "3": { "50": { ATK: "292", SP: "357" }, "60": { ATK: "327", SP: "406" } },
      "4": { "60": { ATK: "353", SP: "406" }, "70": { ATK: "388", SP: "454" } },
      "5": { "70": { ATK: "414", SP: "454" }, "80": { ATK: "449", SP: "503" } },
      "6": { "80": { ATK: "475", SP: "503" }, "90": { ATK: "510", SP: "551" } },
    },
    type: "Catalyst",
  },
  ToukabouShigure: {
    name: "Toukabou Shigure",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "42", SP: "36" }, "20": { ATK: "109", SP: "64" } },
      "1": { "20": { ATK: "135", SP: "64" }, "40": { ATK: "205", SP: "93" } },
      "2": { "40": { ATK: "231", SP: "93" }, "50": { ATK: "266", SP: "107" } },
      "3": { "50": { ATK: "292", SP: "107" }, "60": { ATK: "327", SP: "122" } },
      "4": { "60": { ATK: "353", SP: "122" }, "70": { ATK: "388", SP: "136" } },
      "5": { "70": { ATK: "414", SP: "136" }, "80": { ATK: "449", SP: "151" } },
      "6": { "80": { ATK: "475", SP: "151" }, "90": { ATK: "510", SP: "165" } },
    },
    type: "Sword",
  },
  WanderingEvenstar: {
    name: "Wandering Evenstar",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "42", SP: "36" }, "20": { ATK: "109", SP: "64" } },
      "1": { "20": { ATK: "135", SP: "64" }, "40": { ATK: "205", SP: "93" } },
      "2": { "40": { ATK: "231", SP: "93" }, "50": { ATK: "266", SP: "107" } },
      "3": { "50": { ATK: "292", SP: "107" }, "60": { ATK: "327", SP: "122" } },
      "4": { "60": { ATK: "353", SP: "122" }, "70": { ATK: "388", SP: "136" } },
      "5": { "70": { ATK: "414", SP: "136" }, "80": { ATK: "449", SP: "151" } },
      "6": { "80": { ATK: "475", SP: "151" }, "90": { ATK: "510", SP: "165" } },
    },
    type: "Catalyst",
  },
  WavebreakersFin: {
    name: "Wavebreaker's Fin",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "45", SP: "3" }, "20": { ATK: "128", SP: "53" } },
      "1": { "20": { ATK: "154", SP: "53" }, "40": { ATK: "247", SP: "77" } },
      "2": { "40": { ATK: "273", SP: "77" }, "50": { ATK: "321", SP: "89" } },
      "3": { "50": { ATK: "347", SP: "89" }, "60": { ATK: "395", SP: "101" } },
      "4": { "60": { ATK: "421", SP: "101" }, "70": { ATK: "470", SP: "113" } },
      "5": { "70": { ATK: "496", SP: "113" }, "80": { ATK: "545", SP: "125" } },
      "6": { "80": { ATK: "571", SP: "125" }, "90": { ATK: "620", SP: "138" } },
    },
    type: "Polearm",
  },
  Whiteblind: {
    name: "Whiteblind",
    statBuff: "DEF",
    stats: {
      "0": { "1": { ATK: "42", SP: "113" }, "20": { ATK: "109", SP: "200" } },
      "1": { "20": { ATK: "135", SP: "200" }, "40": { ATK: "205", SP: "290" } },
      "2": { "40": { ATK: "231", SP: "290" }, "50": { ATK: "266", SP: "335" } },
      "3": { "50": { ATK: "292", SP: "335" }, "60": { ATK: "327", SP: "381" } },
      "4": { "60": { ATK: "353", SP: "381" }, "70": { ATK: "388", SP: "426" } },
      "5": { "70": { ATK: "414", SP: "426" }, "80": { ATK: "449", SP: "472" } },
      "6": { "80": { ATK: "475", SP: "472" }, "90": { ATK: "510", SP: "517" } },
    },
    type: "Claymore",
  },
  WindblumeOde: {
    name: "Windblume Ode",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "42", SP: "36" }, "20": { ATK: "109", SP: "64" } },
      "1": { "20": { ATK: "135", SP: "64" }, "40": { ATK: "205", SP: "93" } },
      "2": { "40": { ATK: "231", SP: "93" }, "50": { ATK: "266", SP: "107" } },
      "3": { "50": { ATK: "292", SP: "107" }, "60": { ATK: "327", SP: "122" } },
      "4": { "60": { ATK: "353", SP: "122" }, "70": { ATK: "388", SP: "136" } },
      "5": { "70": { ATK: "414", SP: "136" }, "80": { ATK: "449", SP: "151" } },
      "6": { "80": { ATK: "475", SP: "151" }, "90": { ATK: "510", SP: "165" } },
    },
    type: "Bow",
  },
  WineAndSong: {
    name: "Wine and Song",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "44", SP: "67" }, "20": { ATK: "119", SP: "118" } },
      "1": { "20": { ATK: "144", SP: "118" }, "40": { ATK: "226", SP: "172" } },
      "2": { "40": { ATK: "252", SP: "172" }, "50": { ATK: "293", SP: "199" } },
      "3": { "50": { ATK: "319", SP: "199" }, "60": { ATK: "361", SP: "226" } },
      "4": { "60": { ATK: "387", SP: "226" }, "70": { ATK: "429", SP: "252" } },
      "5": { "70": { ATK: "455", SP: "252" }, "80": { ATK: "497", SP: "279" } },
      "6": { "80": { ATK: "523", SP: "279" }, "90": { ATK: "565", SP: "306" } },
    },
    type: "Catalyst",
  },
  XiphosMoonlight: {
    name: "Xiphos' Moonlight",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "42", SP: "36" }, "20": { ATK: "109", SP: "64" } },
      "1": { "20": { ATK: "135", SP: "64" }, "40": { ATK: "205", SP: "93" } },
      "2": { "40": { ATK: "231", SP: "93" }, "50": { ATK: "266", SP: "107" } },
      "3": { "50": { ATK: "292", SP: "107" }, "60": { ATK: "327", SP: "122" } },
      "4": { "60": { ATK: "353", SP: "122" }, "70": { ATK: "388", SP: "136" } },
      "5": { "70": { ATK: "414", SP: "136" }, "80": { ATK: "449", SP: "151" } },
      "6": { "80": { ATK: "475", SP: "151" }, "90": { ATK: "510", SP: "165" } },
    },
    type: "Sword",
  },
  BlackTassel: {
    name: "Black Tassel",
    statBuff: "HP",
    stats: {
      "0": { "1": { ATK: "38", SP: "102" }, "20": { ATK: "86", SP: "180" } },
      "1": { "20": { ATK: "105", SP: "180" }, "40": { ATK: "151", SP: "263" } },
      "2": { "40": { ATK: "171", SP: "263" }, "50": { ATK: "193", SP: "304" } },
      "3": { "50": { ATK: "212", SP: "304" }, "60": { ATK: "234", SP: "346" } },
      "4": { "60": { ATK: "253", SP: "346" }, "70": { ATK: "274", SP: "386" } },
      "5": { "70": { ATK: "294", SP: "386" }, "80": { ATK: "314", SP: "427" } },
      "6": { "80": { ATK: "334", SP: "427" }, "90": { ATK: "354", SP: "469" } },
    },
    type: "Polearm",
  },
  BloodtaintedGreatsword: {
    name: "Bloodtainted Greatsword",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "38", SP: "41" }, "20": { ATK: "86", SP: "72" } },
      "1": { "20": { ATK: "105", SP: "72" }, "40": { ATK: "151", SP: "105" } },
      "2": { "40": { ATK: "171", SP: "105" }, "50": { ATK: "193", SP: "122" } },
      "3": { "50": { ATK: "212", SP: "122" }, "60": { ATK: "234", SP: "138" } },
      "4": { "60": { ATK: "253", SP: "138" }, "70": { ATK: "274", SP: "154" } },
      "5": { "70": { ATK: "294", SP: "154" }, "80": { ATK: "314", SP: "171" } },
      "6": { "80": { ATK: "334", SP: "171" }, "90": { ATK: "354", SP: "187" } },
    },
    type: "Claymore",
  },
  CoolSteel: {
    name: "Cool Steel",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "39", SP: "77" }, "20": { ATK: "94", SP: "135" } },
      "1": { "20": { ATK: "113", SP: "135" }, "40": { ATK: "169", SP: "197" } },
      "2": { "40": { ATK: "189", SP: "197" }, "50": { ATK: "216", SP: "228" } },
      "3": { "50": { ATK: "236", SP: "228" }, "60": { ATK: "263", SP: "259" } },
      "4": { "60": { ATK: "282", SP: "259" }, "70": { ATK: "309", SP: "290" } },
      "5": { "70": { ATK: "329", SP: "290" }, "80": { ATK: "355", SP: "321" } },
      "6": { "80": { ATK: "375", SP: "321" }, "90": { ATK: "401", SP: "352" } },
    },
    type: "Sword",
  },
  DarkIronSword: {
    name: "Dark Iron Sword",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "39", SP: "31" }, "20": { ATK: "94", SP: "54" } },
      "1": { "20": { ATK: "113", SP: "54" }, "40": { ATK: "169", SP: "79" } },
      "2": { "40": { ATK: "189", SP: "79" }, "50": { ATK: "216", SP: "91" } },
      "3": { "50": { ATK: "236", SP: "91" }, "60": { ATK: "263", SP: "104" } },
      "4": { "60": { ATK: "282", SP: "104" }, "70": { ATK: "309", SP: "116" } },
      "5": { "70": { ATK: "329", SP: "116" }, "80": { ATK: "355", SP: "128" } },
      "6": { "80": { ATK: "375", SP: "128" }, "90": { ATK: "401", SP: "141" } },
    },
    type: "Sword",
  },
  DebateClub: {
    name: "Debate Club",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "39", SP: "77" }, "20": { ATK: "94", SP: "135" } },
      "1": { "20": { ATK: "113", SP: "135" }, "40": { ATK: "169", SP: "197" } },
      "2": { "40": { ATK: "189", SP: "197" }, "50": { ATK: "216", SP: "228" } },
      "3": { "50": { ATK: "236", SP: "228" }, "60": { ATK: "263", SP: "259" } },
      "4": { "60": { ATK: "282", SP: "259" }, "70": { ATK: "309", SP: "290" } },
      "5": { "70": { ATK: "329", SP: "290" }, "80": { ATK: "355", SP: "321" } },
      "6": { "80": { ATK: "375", SP: "321" }, "90": { ATK: "401", SP: "352" } },
    },
    type: "Claymore",
  },
  EmeraldOrb: {
    name: "Emerald Orb",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "40", SP: "20" }, "20": { ATK: "102", SP: "36" } },
      "1": { "20": { ATK: "121", SP: "36" }, "40": { ATK: "187", SP: "53" } },
      "2": { "40": { ATK: "207", SP: "53" }, "50": { ATK: "239", SP: "61" } },
      "3": { "50": { ATK: "259", SP: "61" }, "60": { ATK: "292", SP: "69" } },
      "4": { "60": { ATK: "311", SP: "69" }, "70": { ATK: "344", SP: "77" } },
      "5": { "70": { ATK: "363", SP: "77" }, "80": { ATK: "396", SP: "85" } },
      "6": { "80": { ATK: "415", SP: "85" }, "90": { ATK: "448", SP: "94" } },
    },
    type: "Catalyst",
  },
  FerrousShadow: {
    name: "Ferrous Shadow",
    statBuff: "HP",
    stats: {
      "0": { "1": { ATK: "39", SP: "77" }, "20": { ATK: "94", SP: "135" } },
      "1": { "20": { ATK: "113", SP: "135" }, "40": { ATK: "169", SP: "197" } },
      "2": { "40": { ATK: "189", SP: "197" }, "50": { ATK: "216", SP: "228" } },
      "3": { "50": { ATK: "236", SP: "228" }, "60": { ATK: "263", SP: "259" } },
      "4": { "60": { ATK: "282", SP: "259" }, "70": { ATK: "309", SP: "290" } },
      "5": { "70": { ATK: "329", SP: "290" }, "80": { ATK: "355", SP: "321" } },
      "6": { "80": { ATK: "375", SP: "321" }, "90": { ATK: "401", SP: "352" } },
    },
    type: "Claymore",
  },
  FilletBlade: {
    name: "Fillet Blade",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "39", SP: "77" }, "20": { ATK: "94", SP: "135" } },
      "1": { "20": { ATK: "113", SP: "135" }, "40": { ATK: "169", SP: "197" } },
      "2": { "40": { ATK: "189", SP: "197" }, "50": { ATK: "216", SP: "228" } },
      "3": { "50": { ATK: "236", SP: "228" }, "60": { ATK: "263", SP: "259" } },
      "4": { "60": { ATK: "282", SP: "259" }, "70": { ATK: "309", SP: "290" } },
      "5": { "70": { ATK: "329", SP: "290" }, "80": { ATK: "355", SP: "321" } },
      "6": { "80": { ATK: "375", SP: "321" }, "90": { ATK: "401", SP: "352" } },
    },
    type: "Sword",
  },
  Halberd: {
    name: "Halberd",
    statBuff: "ATK",
    stats: {
      "0": { "1": { ATK: "40", SP: "51" }, "20": { ATK: "102", SP: "90" } },
      "1": { "20": { ATK: "121", SP: "90" }, "40": { ATK: "187", SP: "131" } },
      "2": { "40": { ATK: "207", SP: "131" }, "50": { ATK: "239", SP: "152" } },
      "3": { "50": { ATK: "259", SP: "152" }, "60": { ATK: "292", SP: "173" } },
      "4": { "60": { ATK: "311", SP: "173" }, "70": { ATK: "344", SP: "193" } },
      "5": { "70": { ATK: "363", SP: "193" }, "80": { ATK: "396", SP: "214" } },
      "6": { "80": { ATK: "415", SP: "214" }, "90": { ATK: "448", SP: "234" } },
    },
    type: "Polearm",
  },
  HarbingerOfDawn: {
    name: "Harbinger of Dawn",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "39", SP: "102" }, "20": { ATK: "94", SP: "180" } },
      "1": { "20": { ATK: "113", SP: "180" }, "40": { ATK: "169", SP: "263" } },
      "2": { "40": { ATK: "189", SP: "263" }, "50": { ATK: "216", SP: "304" } },
      "3": { "50": { ATK: "236", SP: "304" }, "60": { ATK: "263", SP: "346" } },
      "4": { "60": { ATK: "282", SP: "346" }, "70": { ATK: "309", SP: "386" } },
      "5": { "70": { ATK: "329", SP: "386" }, "80": { ATK: "355", SP: "427" } },
      "6": { "80": { ATK: "375", SP: "427" }, "90": { ATK: "401", SP: "469" } },
    },
    type: "Sword",
  },
  MagicGuide: {
    name: "Magic Guide",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "38", SP: "41" }, "20": { ATK: "86", SP: "72" } },
      "1": { "20": { ATK: "105", SP: "72" }, "40": { ATK: "151", SP: "105" } },
      "2": { "40": { ATK: "171", SP: "105" }, "50": { ATK: "193", SP: "122" } },
      "3": { "50": { ATK: "212", SP: "122" }, "60": { ATK: "234", SP: "138" } },
      "4": { "60": { ATK: "253", SP: "138" }, "70": { ATK: "274", SP: "154" } },
      "5": { "70": { ATK: "294", SP: "154" }, "80": { ATK: "314", SP: "171" } },
      "6": { "80": { ATK: "334", SP: "171" }, "90": { ATK: "354", SP: "187" } },
    },
    type: "Catalyst",
  },
  Messenger: {
    name: "Messenger",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "40", SP: "68" }, "20": { ATK: "102", SP: "120" } },
      "1": { "20": { ATK: "121", SP: "120" }, "40": { ATK: "187", SP: "175" } },
      "2": { "40": { ATK: "207", SP: "175" }, "50": { ATK: "239", SP: "203" } },
      "3": { "50": { ATK: "259", SP: "203" }, "60": { ATK: "292", SP: "230" } },
      "4": { "60": { ATK: "311", SP: "230" }, "70": { ATK: "344", SP: "257" } },
      "5": { "70": { ATK: "363", SP: "257" }, "80": { ATK: "396", SP: "285" } },
      "6": { "80": { ATK: "415", SP: "285" }, "90": { ATK: "448", SP: "312" } },
    },
    type: "Bow",
  },
  OtherworldlyStory: {
    name: "Otherworldly Story",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "39", SP: "85" }, "20": { ATK: "94", SP: "150" } },
      "1": { "20": { ATK: "113", SP: "150" }, "40": { ATK: "169", SP: "219" } },
      "2": { "40": { ATK: "189", SP: "219" }, "50": { ATK: "216", SP: "253" } },
      "3": { "50": { ATK: "236", SP: "253" }, "60": { ATK: "263", SP: "288" } },
      "4": { "60": { ATK: "282", SP: "288" }, "70": { ATK: "309", SP: "322" } },
      "5": { "70": { ATK: "329", SP: "322" }, "80": { ATK: "355", SP: "356" } },
      "6": { "80": { ATK: "375", SP: "356" }, "90": { ATK: "401", SP: "390" } },
    },
    type: "Catalyst",
  },
  RavenBow: {
    name: "Raven Bow",
    statBuff: "Elemental Mastery",
    stats: {
      "0": { "1": { ATK: "40", SP: "20" }, "20": { ATK: "102", SP: "36" } },
      "1": { "20": { ATK: "121", SP: "36" }, "40": { ATK: "187", SP: "53" } },
      "2": { "40": { ATK: "207", SP: "53" }, "50": { ATK: "239", SP: "61" } },
      "3": { "50": { ATK: "259", SP: "61" }, "60": { ATK: "292", SP: "69" } },
      "4": { "60": { ATK: "311", SP: "69" }, "70": { ATK: "344", SP: "77" } },
      "5": { "70": { ATK: "363", SP: "77" }, "80": { ATK: "396", SP: "85" } },
      "6": { "80": { ATK: "415", SP: "85" }, "90": { ATK: "448", SP: "94" } },
    },
    type: "Bow",
  },
  RecurveBow: {
    name: "Recurve Bow",
    statBuff: "HP",
    stats: {
      "0": { "1": { ATK: "38", SP: "102" }, "20": { ATK: "86", SP: "180" } },
      "1": { "20": { ATK: "105", SP: "180" }, "40": { ATK: "151", SP: "263" } },
      "2": { "40": { ATK: "171", SP: "263" }, "50": { ATK: "193", SP: "304" } },
      "3": { "50": { ATK: "212", SP: "304" }, "60": { ATK: "234", SP: "346" } },
      "4": { "60": { ATK: "253", SP: "346" }, "70": { ATK: "274", SP: "386" } },
      "5": { "70": { ATK: "294", SP: "386" }, "80": { ATK: "314", SP: "427" } },
      "6": { "80": { ATK: "334", SP: "427" }, "90": { ATK: "354", SP: "469" } },
    },
    type: "Bow",
  },
  SharpshootersOath: {
    name: "Sharpshooter's Oath",
    statBuff: "CRIT DMG",
    stats: {
      "0": { "1": { ATK: "39", SP: "102" }, "20": { ATK: "94", SP: "180" } },
      "1": { "20": { ATK: "113", SP: "180" }, "40": { ATK: "169", SP: "263" } },
      "2": { "40": { ATK: "189", SP: "263" }, "50": { ATK: "216", SP: "304" } },
      "3": { "50": { ATK: "236", SP: "304" }, "60": { ATK: "263", SP: "346" } },
      "4": { "60": { ATK: "282", SP: "346" }, "70": { ATK: "309", SP: "386" } },
      "5": { "70": { ATK: "329", SP: "386" }, "80": { ATK: "355", SP: "427" } },
      "6": { "80": { ATK: "375", SP: "427" }, "90": { ATK: "401", SP: "469" } },
    },
    type: "Bow",
  },
  SkyriderGreatsword: {
    name: "Skyrider Greatsword",
    statBuff: "Physical DMG Bonus",
    stats: {
      "0": { "1": { ATK: "39", SP: "96" }, "20": { ATK: "94", SP: "169" } },
      "1": { "20": { ATK: "113", SP: "169" }, "40": { ATK: "169", SP: "246" } },
      "2": { "40": { ATK: "189", SP: "246" }, "50": { ATK: "216", SP: "285" } },
      "3": { "50": { ATK: "236", SP: "285" }, "60": { ATK: "263", SP: "323" } },
      "4": { "60": { ATK: "282", SP: "323" }, "70": { ATK: "309", SP: "362" } },
      "5": { "70": { ATK: "329", SP: "362" }, "80": { ATK: "355", SP: "401" } },
      "6": { "80": { ATK: "375", SP: "401" }, "90": { ATK: "401", SP: "439" } },
    },
    type: "Claymore",
  },
  SkyriderSword: {
    name: "Skyrider Sword",
    statBuff: "Energy Recharge",
    stats: {
      "0": { "1": { ATK: "38", SP: "113" }, "20": { ATK: "86", SP: "200" } },
      "1": { "20": { ATK: "105", SP: "200" }, "40": { ATK: "151", SP: "290" } },
      "2": { "40": { ATK: "171", SP: "290" }, "50": { ATK: "193", SP: "335" } },
      "3": { "50": { ATK: "212", SP: "335" }, "60": { ATK: "234", SP: "381" } },
      "4": { "60": { ATK: "253", SP: "381" }, "70": { ATK: "274", SP: "426" } },
      "5": { "70": { ATK: "294", SP: "426" }, "80": { ATK: "314", SP: "472" } },
      "6": { "80": { ATK: "334", SP: "472" }, "90": { ATK: "354", SP: "517" } },
    },
    type: "Sword",
  },
  Slingshot: {
    name: "Slingshot",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "38", SP: "68" }, "20": { ATK: "86", SP: "120" } },
      "1": { "20": { ATK: "105", SP: "120" }, "40": { ATK: "151", SP: "175" } },
      "2": { "40": { ATK: "171", SP: "175" }, "50": { ATK: "193", SP: "203" } },
      "3": { "50": { ATK: "212", SP: "203" }, "60": { ATK: "234", SP: "230" } },
      "4": { "60": { ATK: "253", SP: "230" }, "70": { ATK: "274", SP: "257" } },
      "5": { "70": { ATK: "294", SP: "257" }, "80": { ATK: "314", SP: "285" } },
      "6": { "80": { ATK: "334", SP: "285" }, "90": { ATK: "354", SP: "312" } },
    },
    type: "Bow",
  },
  ThrillingTalesOfDragonSlayers: {
    name: "Thrilling Tales of Dragon Slayers",
    statBuff: "HP",
    stats: {
      "0": { "1": { ATK: "39", SP: "77" }, "20": { ATK: "94", SP: "135" } },
      "1": { "20": { ATK: "113", SP: "135" }, "40": { ATK: "169", SP: "197" } },
      "2": { "40": { ATK: "189", SP: "197" }, "50": { ATK: "216", SP: "228" } },
      "3": { "50": { ATK: "236", SP: "228" }, "60": { ATK: "263", SP: "259" } },
      "4": { "60": { ATK: "282", SP: "259" }, "70": { ATK: "309", SP: "290" } },
      "5": { "70": { ATK: "329", SP: "290" }, "80": { ATK: "355", SP: "321" } },
      "6": { "80": { ATK: "375", SP: "321" }, "90": { ATK: "401", SP: "352" } },
    },
    type: "Catalyst",
  },
  TravelersHandySword: {
    name: "Traveler's Handy Sword",
    statBuff: "DEF",
    stats: {
      "0": { "1": { ATK: "40", SP: "64" }, "20": { ATK: "102", SP: "113" } },
      "1": { "20": { ATK: "121", SP: "113" }, "40": { ATK: "187", SP: "164" } },
      "2": { "40": { ATK: "207", SP: "164" }, "50": { ATK: "239", SP: "190" } },
      "3": { "50": { ATK: "259", SP: "190" }, "60": { ATK: "292", SP: "216" } },
      "4": { "60": { ATK: "311", SP: "216" }, "70": { ATK: "344", SP: "241" } },
      "5": { "70": { ATK: "363", SP: "241" }, "80": { ATK: "396", SP: "267" } },
      "6": { "80": { ATK: "415", SP: "267" }, "90": { ATK: "448", SP: "293" } },
    },
    type: "Sword",
  },
  TwinNephrite: {
    name: "Twin Nephrite",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "40", SP: "34" }, "20": { ATK: "102", SP: "60" } },
      "1": { "20": { ATK: "121", SP: "60" }, "40": { ATK: "187", SP: "88" } },
      "2": { "40": { ATK: "207", SP: "88" }, "50": { ATK: "239", SP: "101" } },
      "3": { "50": { ATK: "259", SP: "101" }, "60": { ATK: "292", SP: "115" } },
      "4": { "60": { ATK: "311", SP: "115" }, "70": { ATK: "344", SP: "129" } },
      "5": { "70": { ATK: "363", SP: "129" }, "80": { ATK: "396", SP: "142" } },
      "6": { "80": { ATK: "415", SP: "142" }, "90": { ATK: "448", SP: "156" } },
    },
    type: "Catalyst",
  },
  WhiteIronGreatsword: {
    name: "White Iron Greatsword",
    statBuff: "DEF",
    stats: {
      "0": { "1": { ATK: "39", SP: "96" }, "20": { ATK: "94", SP: "169" } },
      "1": { "20": { ATK: "113", SP: "169" }, "40": { ATK: "169", SP: "246" } },
      "2": { "40": { ATK: "189", SP: "246" }, "50": { ATK: "216", SP: "285" } },
      "3": { "50": { ATK: "236", SP: "285" }, "60": { ATK: "263", SP: "323" } },
      "4": { "60": { ATK: "282", SP: "323" }, "70": { ATK: "309", SP: "362" } },
      "5": { "70": { ATK: "329", SP: "362" }, "80": { ATK: "355", SP: "401" } },
      "6": { "80": { ATK: "375", SP: "401" }, "90": { ATK: "401", SP: "439" } },
    },
    type: "Claymore",
  },
  WhiteTassel: {
    name: "White Tassel",
    statBuff: "CRIT Rate",
    stats: {
      "0": { "1": { ATK: "39", SP: "51" }, "20": { ATK: "94", SP: "90" } },
      "1": { "20": { ATK: "113", SP: "90" }, "40": { ATK: "169", SP: "131" } },
      "2": { "40": { ATK: "189", SP: "131" }, "50": { ATK: "216", SP: "152" } },
      "3": { "50": { ATK: "236", SP: "152" }, "60": { ATK: "263", SP: "173" } },
      "4": { "60": { ATK: "282", SP: "173" }, "70": { ATK: "309", SP: "193" } },
      "5": { "70": { ATK: "329", SP: "193" }, "80": { ATK: "355", SP: "214" } },
      "6": { "80": { ATK: "375", SP: "214" }, "90": { ATK: "401", SP: "234" } },
    },
    type: "Polearm",
  },
  IronPoint: {
    name: "Iron Point",
    statBuff: "None\n",
    stats: {},
    type: "Polearm",
  },
  OldMercsPal: {
    name: "Old Merc's Pal",
    statBuff: "None\n",
    stats: {},
    type: "Claymore",
  },
  PocketGrimoire: {
    name: "Pocket Grimoire",
    statBuff: "None\n",
    stats: {},
    type: "Catalyst",
  },
  SeasonedHuntersBow: {
    name: "Seasoned Hunter's Bow",
    statBuff: "None\n",
    stats: {},
    type: "Bow",
  },
  SilverSword: {
    name: "Silver Sword",
    statBuff: "None\n",
    stats: {},
    type: "Sword",
  },
  ApprenticesNotes: {
    name: "Apprentice's Notes",
    statBuff: "None\n",
    stats: {},
    type: "Catalyst",
  },
  BeginnersProtector: {
    name: "Beginner's Protector",
    statBuff: "None\n",
    stats: {},
    type: "Polearm",
  },
  DullBlade: {
    name: "Dull Blade",
    statBuff: "None\n",
    stats: {},
    type: "Sword",
  },
  HuntersBow: {
    name: "Hunter's Bow",
    statBuff: "None\n",
    stats: {},
    type: "Bow",
  },
  WasterGreatsword: {
    name: "Waster Greatsword",
    statBuff: "None\n",
    stats: {},
    type: "Claymore",
  },
};

export const characterIDs = toIdedObj(characters);
export const characterWeapons: { [key in CharacterKey]: string[] } = {
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
export const characterInfo = {
  Albedo: {
    element: "Geo",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1029", ATK: "19", DEF: "68", SP: "" },
        "20": { HP: "2670", ATK: "50", DEF: "176", SP: "" },
      },
      "1": {
        "20": { HP: "3553", ATK: "67", DEF: "235", SP: "" },
        "40": { HP: "5317", ATK: "100", DEF: "352", SP: "" },
      },
      "2": {
        "40": { HP: "5944", ATK: "112", DEF: "393", SP: "72" },
        "50": { HP: "6839", ATK: "129", DEF: "453", SP: "72" },
      },
      "3": {
        "50": { HP: "7675", ATK: "145", DEF: "508", SP: "144" },
        "60": { HP: "8579", ATK: "162", DEF: "568", SP: "144" },
      },
      "4": {
        "60": { HP: "9206", ATK: "174", DEF: "609", SP: "144" },
        "70": { HP: "10118", ATK: "192", DEF: "670", SP: "144" },
      },
      "5": {
        "70": { HP: "10746", ATK: "204", DEF: "711", SP: "216" },
        "80": { HP: "11668", ATK: "221", DEF: "773", SP: "216" },
      },
      "6": {
        "80": { HP: "12295", ATK: "233", DEF: "814", SP: "288" },
        "90": { HP: "13225", ATK: "251", DEF: "876", SP: "288" },
      },
    },
    statBuff: "Geo DMG Bonus",
  },
  Alhaitham: {
    element: "Dendro",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1039", ATK: "24", DEF: "60", SP: "" },
        "20": { HP: "2695", ATK: "63", DEF: "157", SP: "" },
      },
      "1": {
        "20": { HP: "3586", ATK: "84", DEF: "210", SP: "" },
        "40": { HP: "5366", ATK: "125", DEF: "314", SP: "" },
      },
      "2": {
        "40": { HP: "5999", ATK: "140", DEF: "351", SP: "72" },
        "50": { HP: "6902", ATK: "162", DEF: "404", SP: "72" },
      },
      "3": {
        "50": { HP: "7746", ATK: "181", DEF: "453", SP: "144" },
        "60": { HP: "8658", ATK: "203", DEF: "507", SP: "144" },
      },
      "4": {
        "60": { HP: "9291", ATK: "218", DEF: "544", SP: "144" },
        "70": { HP: "10212", ATK: "239", DEF: "598", SP: "144" },
      },
      "5": {
        "70": { HP: "10845", ATK: "254", DEF: "635", SP: "216" },
        "80": { HP: "11776", ATK: "276", DEF: "689", SP: "216" },
      },
      "6": {
        "80": { HP: "12409", ATK: "291", DEF: "726", SP: "288" },
        "90": { HP: "13348", ATK: "313", DEF: "781", SP: "288" },
      },
    },
    statBuff: "Dendro DMG Bonus",
  },
  Aloy: {
    element: "Cryo",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "848", ATK: "18", DEF: "52", SP: "" },
        "20": { HP: "2200", ATK: "47", DEF: "136", SP: "" },
      },
      "1": {
        "20": { HP: "2928", ATK: "62", DEF: "181", SP: "" },
        "40": { HP: "4381", ATK: "94", DEF: "271", SP: "" },
      },
      "2": {
        "40": { HP: "4898", ATK: "105", DEF: "303", SP: "72" },
        "50": { HP: "5635", ATK: "120", DEF: "349", SP: "72" },
      },
      "3": {
        "50": { HP: "6325", ATK: "135", DEF: "392", SP: "144" },
        "60": { HP: "7070", ATK: "151", DEF: "438", SP: "144" },
      },
      "4": {
        "60": { HP: "7586", ATK: "162", DEF: "470", SP: "144" },
        "70": { HP: "8338", ATK: "178", DEF: "517", SP: "144" },
      },
      "5": {
        "70": { HP: "8855", ATK: "190", DEF: "549", SP: "216" },
        "80": { HP: "9615", ATK: "206", DEF: "596", SP: "216" },
      },
      "6": {
        "80": { HP: "10132", ATK: "217", DEF: "628", SP: "288" },
        "90": { HP: "10898", ATK: "233", DEF: "676", SP: "288" },
      },
    },
    statBuff: "Cryo DMG Bonus",
  },
  Amber: {
    element: "Pyro",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "793", ATK: "18", DEF: "50", SP: "" },
        "20": { HP: "2037", ATK: "48", DEF: "129", SP: "" },
      },
      "1": {
        "20": { HP: "2630", ATK: "62", DEF: "166", SP: "" },
        "40": { HP: "3940", ATK: "92", DEF: "250", SP: "" },
      },
      "2": {
        "40": { HP: "4361", ATK: "102", DEF: "276", SP: "60" },
        "50": { HP: "5016", ATK: "118", DEF: "318", SP: "60" },
      },
      "3": {
        "50": { HP: "5577", ATK: "131", DEF: "354", SP: "120" },
        "60": { HP: "6233", ATK: "146", DEF: "395", SP: "120" },
      },
      "4": {
        "60": { HP: "6654", ATK: "156", DEF: "422", SP: "120" },
        "70": { HP: "7308", ATK: "172", DEF: "463", SP: "120" },
      },
      "5": {
        "70": { HP: "7729", ATK: "182", DEF: "490", SP: "180" },
        "80": { HP: "8384", ATK: "197", DEF: "532", SP: "180" },
      },
      "6": {
        "80": { HP: "8805", ATK: "207", DEF: "559", SP: "240" },
        "90": { HP: "9461", ATK: "223", DEF: "600", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  AratakiItto: {
    element: "Geo",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "1000", ATK: "17", DEF: "74", SP: "" },
        "20": { HP: "2596", ATK: "45", DEF: "193", SP: "" },
      },
      "1": {
        "20": { HP: "3454", ATK: "61", DEF: "257", SP: "" },
        "40": { HP: "5169", ATK: "91", DEF: "385", SP: "" },
      },
      "2": {
        "40": { HP: "5779", ATK: "102", DEF: "431", SP: "48" },
        "50": { HP: "6649", ATK: "117", DEF: "495", SP: "48" },
      },
      "3": {
        "50": { HP: "7462", ATK: "131", DEF: "556", SP: "96" },
        "60": { HP: "8341", ATK: "147", DEF: "622", SP: "96" },
      },
      "4": {
        "60": { HP: "8950", ATK: "158", DEF: "667", SP: "96" },
        "70": { HP: "9837", ATK: "173", DEF: "733", SP: "96" },
      },
      "5": {
        "70": { HP: "10447", ATK: "184", DEF: "779", SP: "144" },
        "80": { HP: "11344", ATK: "200", DEF: "846", SP: "144" },
      },
      "6": {
        "80": { HP: "11954", ATK: "211", DEF: "891", SP: "192" },
        "90": { HP: "12858", ATK: "227", DEF: "959", SP: "192" },
      },
    },
    statBuff: "CRIT Rate",
  },
  Barbara: {
    element: "Hydro",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "820", ATK: "13", DEF: "56", SP: "" },
        "20": { HP: "2108", ATK: "34", DEF: "144", SP: "" },
      },
      "1": {
        "20": { HP: "2721", ATK: "44", DEF: "185", SP: "" },
        "40": { HP: "4076", ATK: "66", DEF: "278", SP: "" },
      },
      "2": {
        "40": { HP: "4511", ATK: "73", DEF: "308", SP: "60" },
        "50": { HP: "5189", ATK: "84", DEF: "354", SP: "60" },
      },
      "3": {
        "50": { HP: "5770", ATK: "93", DEF: "394", SP: "120" },
        "60": { HP: "6448", ATK: "104", DEF: "440", SP: "120" },
      },
      "4": {
        "60": { HP: "6883", ATK: "112", DEF: "470", SP: "120" },
        "70": { HP: "7560", ATK: "123", DEF: "516", SP: "120" },
      },
      "5": {
        "70": { HP: "7996", ATK: "130", DEF: "546", SP: "180" },
        "80": { HP: "8674", ATK: "141", DEF: "592", SP: "180" },
      },
      "6": {
        "80": { HP: "9109", ATK: "148", DEF: "622", SP: "240" },
        "90": { HP: "9787", ATK: "159", DEF: "668", SP: "240" },
      },
    },
    statBuff: "HP",
  },
  Beidou: {
    element: "Electro",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "1094", ATK: "18", DEF: "54", SP: "" },
        "20": { HP: "2810", ATK: "48", DEF: "139", SP: "" },
      },
      "1": {
        "20": { HP: "3628", ATK: "62", DEF: "180", SP: "" },
        "40": { HP: "5434", ATK: "93", DEF: "270", SP: "" },
      },
      "2": {
        "40": { HP: "6015", ATK: "103", DEF: "298", SP: "60" },
        "50": { HP: "6919", ATK: "119", DEF: "343", SP: "60" },
      },
      "3": {
        "50": { HP: "7693", ATK: "132", DEF: "382", SP: "120" },
        "60": { HP: "8597", ATK: "148", DEF: "427", SP: "120" },
      },
      "4": {
        "60": { HP: "9178", ATK: "158", DEF: "456", SP: "120" },
        "70": { HP: "10080", ATK: "173", DEF: "500", SP: "120" },
      },
      "5": {
        "70": { HP: "10661", ATK: "183", DEF: "529", SP: "180" },
        "80": { HP: "11565", ATK: "199", DEF: "574", SP: "180" },
      },
      "6": {
        "80": { HP: "12146", ATK: "209", DEF: "603", SP: "240" },
        "90": { HP: "13049", ATK: "225", DEF: "648", SP: "240" },
      },
    },
    statBuff: "Electro DMG Bonus",
  },
  Bennett: {
    element: "Pyro",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1039", ATK: "16", DEF: "64", SP: "" },
        "20": { HP: "2670", ATK: "41", DEF: "166", SP: "" },
      },
      "1": {
        "20": { HP: "3446", ATK: "53", DEF: "214", SP: "" },
        "40": { HP: "5162", ATK: "79", DEF: "321", SP: "" },
      },
      "2": {
        "40": { HP: "5714", ATK: "88", DEF: "355", SP: "67" },
        "50": { HP: "6573", ATK: "101", DEF: "408", SP: "67" },
      },
      "3": {
        "50": { HP: "7308", ATK: "112", DEF: "454", SP: "134" },
        "60": { HP: "8167", ATK: "125", DEF: "508", SP: "134" },
      },
      "4": {
        "60": { HP: "8719", ATK: "134", DEF: "542", SP: "134" },
        "70": { HP: "9576", ATK: "147", DEF: "595", SP: "134" },
      },
      "5": {
        "70": { HP: "10128", ATK: "156", DEF: "630", SP: "201" },
        "80": { HP: "10987", ATK: "169", DEF: "683", SP: "201" },
      },
      "6": {
        "80": { HP: "11538", ATK: "177", DEF: "717", SP: "268" },
        "90": { HP: "12397", ATK: "191", DEF: "771", SP: "268" },
      },
    },
    statBuff: "Energy Recharge",
  },
  Candace: {
    element: "Hydro",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "911", ATK: "17", DEF: "57", SP: "" },
        "20": { HP: "2342", ATK: "45", DEF: "147", SP: "" },
      },
      "1": {
        "20": { HP: "3023", ATK: "59", DEF: "189", SP: "" },
        "40": { HP: "4528", ATK: "88", DEF: "284", SP: "" },
      },
      "2": {
        "40": { HP: "5012", ATK: "97", DEF: "314", SP: "60" },
        "50": { HP: "5766", ATK: "112", DEF: "361", SP: "60" },
      },
      "3": {
        "50": { HP: "6411", ATK: "125", DEF: "402", SP: "120" },
        "60": { HP: "7164", ATK: "139", DEF: "449", SP: "120" },
      },
      "4": {
        "60": { HP: "7648", ATK: "149", DEF: "480", SP: "120" },
        "70": { HP: "8400", ATK: "164", DEF: "527", SP: "120" },
      },
      "5": {
        "70": { HP: "8884", ATK: "173", DEF: "557", SP: "180" },
        "80": { HP: "9637", ATK: "188", DEF: "604", SP: "180" },
      },
      "6": {
        "80": { HP: "10121", ATK: "197", DEF: "635", SP: "240" },
        "90": { HP: "10874", ATK: "212", DEF: "682", SP: "240" },
      },
    },
    statBuff: "HP",
  },
  Chongyun: {
    element: "Cryo",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "920", ATK: "18", DEF: "54", SP: "" },
        "20": { HP: "2365", ATK: "48", DEF: "139", SP: "" },
      },
      "1": {
        "20": { HP: "3053", ATK: "62", DEF: "180", SP: "" },
        "40": { HP: "4574", ATK: "92", DEF: "270", SP: "" },
      },
      "2": {
        "40": { HP: "5063", ATK: "102", DEF: "298", SP: "60" },
        "50": { HP: "5823", ATK: "118", DEF: "343", SP: "60" },
      },
      "3": {
        "50": { HP: "6475", ATK: "131", DEF: "382", SP: "120" },
        "60": { HP: "7236", ATK: "146", DEF: "427", SP: "120" },
      },
      "4": {
        "60": { HP: "7724", ATK: "156", DEF: "456", SP: "120" },
        "70": { HP: "8484", ATK: "172", DEF: "500", SP: "120" },
      },
      "5": {
        "70": { HP: "8973", ATK: "182", DEF: "529", SP: "180" },
        "80": { HP: "9734", ATK: "197", DEF: "574", SP: "180" },
      },
      "6": {
        "80": { HP: "10222", ATK: "207", DEF: "603", SP: "240" },
        "90": { HP: "10983", ATK: "223", DEF: "648", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  Collei: {
    element: "Dendro",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "820", ATK: "16", DEF: "50", SP: "" },
        "20": { HP: "2108", ATK: "43", DEF: "129", SP: "" },
      },
      "1": {
        "20": { HP: "2721", ATK: "55", DEF: "166", SP: "" },
        "40": { HP: "4076", ATK: "83", DEF: "250", SP: "" },
      },
      "2": {
        "40": { HP: "4511", ATK: "92", DEF: "276", SP: "60" },
        "50": { HP: "5189", ATK: "105", DEF: "318", SP: "60" },
      },
      "3": {
        "50": { HP: "5770", ATK: "117", DEF: "354", SP: "120" },
        "60": { HP: "6448", ATK: "131", DEF: "395", SP: "120" },
      },
      "4": {
        "60": { HP: "6883", ATK: "140", DEF: "422", SP: "120" },
        "70": { HP: "7560", ATK: "154", DEF: "463", SP: "120" },
      },
      "5": {
        "70": { HP: "7996", ATK: "163", DEF: "490", SP: "180" },
        "80": { HP: "8674", ATK: "176", DEF: "532", SP: "180" },
      },
      "6": {
        "80": { HP: "9109", ATK: "185", DEF: "559", SP: "240" },
        "90": { HP: "9787", ATK: "199", DEF: "600", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  Cyno: {
    element: "Electro",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "972", ATK: "24", DEF: "66", SP: "" },
        "20": { HP: "2522", ATK: "64", DEF: "173", SP: "" },
      },
      "1": {
        "20": { HP: "3356", ATK: "85", DEF: "230", SP: "" },
        "40": { HP: "5021", ATK: "127", DEF: "345", SP: "" },
      },
      "2": {
        "40": { HP: "5614", ATK: "142", DEF: "386", SP: "96" },
        "50": { HP: "6459", ATK: "164", DEF: "444", SP: "96" },
      },
      "3": {
        "50": { HP: "7249", ATK: "184", DEF: "498", SP: "192" },
        "60": { HP: "8102", ATK: "206", DEF: "557", SP: "192" },
      },
      "4": {
        "60": { HP: "8695", ATK: "221", DEF: "598", SP: "192" },
        "70": { HP: "9556", ATK: "243", DEF: "657", SP: "192" },
      },
      "5": {
        "70": { HP: "10149", ATK: "258", DEF: "698", SP: "288" },
        "80": { HP: "11020", ATK: "280", DEF: "758", SP: "288" },
      },
      "6": {
        "80": { HP: "11612", ATK: "295", DEF: "798", SP: "384" },
        "90": { HP: "12490", ATK: "318", DEF: "859", SP: "384" },
      },
    },
    statBuff: "CRIT DMG",
  },
  Diluc: {
    element: "Pyro",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "1010", ATK: "26", DEF: "61", SP: "" },
        "20": { HP: "2621", ATK: "67", DEF: "158", SP: "" },
      },
      "1": {
        "20": { HP: "3487", ATK: "89", DEF: "210", SP: "" },
        "40": { HP: "5218", ATK: "134", DEF: "315", SP: "" },
      },
      "2": {
        "40": { HP: "5834", ATK: "150", DEF: "352", SP: "48" },
        "50": { HP: "6712", ATK: "173", DEF: "405", SP: "48" },
      },
      "3": {
        "50": { HP: "7533", ATK: "194", DEF: "454", SP: "96" },
        "60": { HP: "8420", ATK: "217", DEF: "508", SP: "96" },
      },
      "4": {
        "60": { HP: "9036", ATK: "233", DEF: "545", SP: "96" },
        "70": { HP: "9931", ATK: "256", DEF: "599", SP: "96" },
      },
      "5": {
        "70": { HP: "10547", ATK: "272", DEF: "636", SP: "144" },
        "80": { HP: "11452", ATK: "295", DEF: "691", SP: "144" },
      },
      "6": {
        "80": { HP: "12068", ATK: "311", DEF: "728", SP: "192" },
        "90": { HP: "12980", ATK: "334", DEF: "783", SP: "192" },
      },
    },
    statBuff: "CRIT Rate",
  },
  Diona: {
    element: "Cryo",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "802", ATK: "17", DEF: "50", SP: "" },
        "20": { HP: "2061", ATK: "45", DEF: "129", SP: "" },
      },
      "1": {
        "20": { HP: "2660", ATK: "59", DEF: "166", SP: "" },
        "40": { HP: "3985", ATK: "88", DEF: "250", SP: "" },
      },
      "2": {
        "40": { HP: "4411", ATK: "97", DEF: "276", SP: "60" },
        "50": { HP: "5074", ATK: "112", DEF: "318", SP: "60" },
      },
      "3": {
        "50": { HP: "5641", ATK: "125", DEF: "354", SP: "120" },
        "60": { HP: "6304", ATK: "139", DEF: "395", SP: "120" },
      },
      "4": {
        "60": { HP: "6730", ATK: "149", DEF: "422", SP: "120" },
        "70": { HP: "7392", ATK: "164", DEF: "463", SP: "120" },
      },
      "5": {
        "70": { HP: "7818", ATK: "173", DEF: "490", SP: "180" },
        "80": { HP: "8481", ATK: "188", DEF: "532", SP: "180" },
      },
      "6": {
        "80": { HP: "8907", ATK: "197", DEF: "559", SP: "240" },
        "90": { HP: "9569", ATK: "212", DEF: "600", SP: "240" },
      },
    },
    statBuff: "Cryo DMG Bonus",
  },
  Dori: {
    element: "Electro",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "1039", ATK: "18", DEF: "60", SP: "" },
        "20": { HP: "2670", ATK: "48", DEF: "155", SP: "" },
      },
      "1": {
        "20": { HP: "3446", ATK: "62", DEF: "201", SP: "" },
        "40": { HP: "5162", ATK: "92", DEF: "301", SP: "" },
      },
      "2": {
        "40": { HP: "5714", ATK: "102", DEF: "333", SP: "60" },
        "50": { HP: "6573", ATK: "118", DEF: "383", SP: "60" },
      },
      "3": {
        "50": { HP: "7308", ATK: "131", DEF: "426", SP: "120" },
        "60": { HP: "8167", ATK: "146", DEF: "476", SP: "120" },
      },
      "4": {
        "60": { HP: "8719", ATK: "156", DEF: "508", SP: "120" },
        "70": { HP: "9576", ATK: "172", DEF: "558", SP: "120" },
      },
      "5": {
        "70": { HP: "10128", ATK: "182", DEF: "591", SP: "180" },
        "80": { HP: "10987", ATK: "197", DEF: "641", SP: "180" },
      },
      "6": {
        "80": { HP: "11538", ATK: "207", DEF: "673", SP: "240" },
        "90": { HP: "12397", ATK: "223", DEF: "723", SP: "240" },
      },
    },
    statBuff: "HP",
  },
  Eula: {
    element: "Cryo",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "1029", ATK: "26", DEF: "58", SP: "" },
        "20": { HP: "2670", ATK: "69", DEF: "151", SP: "" },
      },
      "1": {
        "20": { HP: "3553", ATK: "91", DEF: "201", SP: "" },
        "40": { HP: "5317", ATK: "137", DEF: "301", SP: "" },
      },
      "2": {
        "40": { HP: "5944", ATK: "153", DEF: "337", SP: "96" },
        "50": { HP: "6839", ATK: "176", DEF: "388", SP: "96" },
      },
      "3": {
        "50": { HP: "7675", ATK: "198", DEF: "435", SP: "192" },
        "60": { HP: "8579", ATK: "221", DEF: "487", SP: "192" },
      },
      "4": {
        "60": { HP: "9206", ATK: "238", DEF: "522", SP: "192" },
        "70": { HP: "10118", ATK: "261", DEF: "574", SP: "192" },
      },
      "5": {
        "70": { HP: "10746", ATK: "277", DEF: "610", SP: "288" },
        "80": { HP: "11668", ATK: "301", DEF: "662", SP: "288" },
      },
      "6": {
        "80": { HP: "12295", ATK: "317", DEF: "698", SP: "384" },
        "90": { HP: "13225", ATK: "342", DEF: "750", SP: "384" },
      },
    },
    statBuff: "CRIT DMG",
  },
  Faruzan: {
    element: "Anemo",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "802", ATK: "16", DEF: "52", SP: "" },
        "20": { HP: "2061", ATK: "42", DEF: "135", SP: "" },
      },
      "1": {
        "20": { HP: "2660", ATK: "54", DEF: "174", SP: "" },
        "40": { HP: "3985", ATK: "81", DEF: "261", SP: "" },
      },
      "2": {
        "40": { HP: "4411", ATK: "90", DEF: "289", SP: "60" },
        "50": { HP: "5074", ATK: "104", DEF: "332", SP: "60" },
      },
      "3": {
        "50": { HP: "5641", ATK: "115", DEF: "370", SP: "120" },
        "60": { HP: "6304", ATK: "129", DEF: "413", SP: "120" },
      },
      "4": {
        "60": { HP: "6730", ATK: "138", DEF: "441", SP: "120" },
        "70": { HP: "7392", ATK: "151", DEF: "485", SP: "120" },
      },
      "5": {
        "70": { HP: "7818", ATK: "160", DEF: "513", SP: "180" },
        "80": { HP: "8481", ATK: "174", DEF: "556", SP: "180" },
      },
      "6": {
        "80": { HP: "8907", ATK: "182", DEF: "584", SP: "240" },
        "90": { HP: "9569", ATK: "196", DEF: "627", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  Fischl: {
    element: "Electro",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "770", ATK: "20", DEF: "49", SP: "" },
        "20": { HP: "1979", ATK: "52", DEF: "127", SP: "" },
      },
      "1": {
        "20": { HP: "2554", ATK: "67", DEF: "165", SP: "" },
        "40": { HP: "3826", ATK: "101", DEF: "247", SP: "" },
      },
      "2": {
        "40": { HP: "4235", ATK: "112", DEF: "273", SP: "60" },
        "50": { HP: "4872", ATK: "129", DEF: "314", SP: "60" },
      },
      "3": {
        "50": { HP: "5417", ATK: "144", DEF: "350", SP: "120" },
        "60": { HP: "6053", ATK: "160", DEF: "391", SP: "120" },
      },
      "4": {
        "60": { HP: "6462", ATK: "171", DEF: "417", SP: "120" },
        "70": { HP: "7098", ATK: "188", DEF: "458", SP: "120" },
      },
      "5": {
        "70": { HP: "7507", ATK: "199", DEF: "485", SP: "180" },
        "80": { HP: "8143", ATK: "216", DEF: "526", SP: "180" },
      },
      "6": {
        "80": { HP: "8552", ATK: "227", DEF: "552", SP: "240" },
        "90": { HP: "9189", ATK: "244", DEF: "593", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  Ganyu: {
    element: "Cryo",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "762", ATK: "26", DEF: "49", SP: "" },
        "20": { HP: "1978", ATK: "67", DEF: "127", SP: "" },
      },
      "1": {
        "20": { HP: "2632", ATK: "89", DEF: "169", SP: "" },
        "40": { HP: "3938", ATK: "134", DEF: "253", SP: "" },
      },
      "2": {
        "40": { HP: "4403", ATK: "150", DEF: "283", SP: "96" },
        "50": { HP: "5066", ATK: "173", DEF: "325", SP: "96" },
      },
      "3": {
        "50": { HP: "5685", ATK: "194", DEF: "365", SP: "192" },
        "60": { HP: "6355", ATK: "217", DEF: "408", SP: "192" },
      },
      "4": {
        "60": { HP: "6819", ATK: "233", DEF: "438", SP: "192" },
        "70": { HP: "7495", ATK: "256", DEF: "482", SP: "192" },
      },
      "5": {
        "70": { HP: "7960", ATK: "272", DEF: "512", SP: "288" },
        "80": { HP: "8643", ATK: "295", DEF: "556", SP: "288" },
      },
      "6": {
        "80": { HP: "9108", ATK: "311", DEF: "585", SP: "384" },
        "90": { HP: "9796", ATK: "334", DEF: "630", SP: "384" },
      },
    },
    statBuff: "CRIT DMG",
  },
  Gorou: {
    element: "Geo",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "802", ATK: "15", DEF: "54", SP: "" },
        "20": { HP: "2061", ATK: "39", DEF: "139", SP: "" },
      },
      "1": {
        "20": { HP: "2660", ATK: "50", DEF: "180", SP: "" },
        "40": { HP: "3985", ATK: "76", DEF: "270", SP: "" },
      },
      "2": {
        "40": { HP: "4411", ATK: "84", DEF: "298", SP: "60" },
        "50": { HP: "5074", ATK: "96", DEF: "343", SP: "60" },
      },
      "3": {
        "50": { HP: "5641", ATK: "107", DEF: "382", SP: "120" },
        "60": { HP: "6304", ATK: "120", DEF: "427", SP: "120" },
      },
      "4": {
        "60": { HP: "6730", ATK: "128", DEF: "456", SP: "120" },
        "70": { HP: "7392", ATK: "141", DEF: "500", SP: "120" },
      },
      "5": {
        "70": { HP: "7818", ATK: "149", DEF: "529", SP: "180" },
        "80": { HP: "8481", ATK: "161", DEF: "574", SP: "180" },
      },
      "6": {
        "80": { HP: "8907", ATK: "170", DEF: "603", SP: "240" },
        "90": { HP: "9569", ATK: "182", DEF: "648", SP: "240" },
      },
    },
    statBuff: "Geo DMG Bonus",
  },
  HuTao: {
    element: "Pyro",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "1210", ATK: "8", DEF: "68", SP: "" },
        "20": { HP: "3140", ATK: "21", DEF: "176", SP: "" },
      },
      "1": {
        "20": { HP: "4178", ATK: "28", DEF: "235", SP: "" },
        "40": { HP: "6252", ATK: "42", DEF: "352", SP: "" },
      },
      "2": {
        "40": { HP: "6990", ATK: "47", DEF: "393", SP: "96" },
        "50": { HP: "8042", ATK: "55", DEF: "453", SP: "96" },
      },
      "3": {
        "50": { HP: "9025", ATK: "61", DEF: "508", SP: "192" },
        "60": { HP: "10088", ATK: "69", DEF: "568", SP: "192" },
      },
      "4": {
        "60": { HP: "10826", ATK: "74", DEF: "609", SP: "192" },
        "70": { HP: "11899", ATK: "81", DEF: "670", SP: "192" },
      },
      "5": {
        "70": { HP: "12636", ATK: "86", DEF: "711", SP: "288" },
        "80": { HP: "13721", ATK: "93", DEF: "773", SP: "288" },
      },
      "6": {
        "80": { HP: "14459", ATK: "98", DEF: "814", SP: "384" },
        "90": { HP: "15552", ATK: "106", DEF: "876", SP: "384" },
      },
    },
    statBuff: "CRIT DMG",
  },
  Jean: {
    element: "Anemo",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1143", ATK: "18", DEF: "59", SP: "" },
        "20": { HP: "2967", ATK: "48", DEF: "155", SP: "" },
      },
      "1": {
        "20": { HP: "3948", ATK: "64", DEF: "206", SP: "" },
        "40": { HP: "5908", ATK: "96", DEF: "308", SP: "" },
      },
      "2": {
        "40": { HP: "6604", ATK: "107", DEF: "345", SP: "55" },
        "50": { HP: "7599", ATK: "123", DEF: "397", SP: "55" },
      },
      "3": {
        "50": { HP: "8528", ATK: "138", DEF: "446", SP: "110" },
        "60": { HP: "9532", ATK: "155", DEF: "498", SP: "110" },
      },
      "4": {
        "60": { HP: "10229", ATK: "166", DEF: "535", SP: "110" },
        "70": { HP: "11243", ATK: "182", DEF: "588", SP: "110" },
      },
      "5": {
        "70": { HP: "11940", ATK: "194", DEF: "624", SP: "165" },
        "80": { HP: "12965", ATK: "211", DEF: "678", SP: "165" },
      },
      "6": {
        "80": { HP: "13662", ATK: "222", DEF: "714", SP: "220" },
        "90": { HP: "14695", ATK: "239", DEF: "768", SP: "220" },
      },
    },
    statBuff: "Healing Bonus",
  },
  KaedeharaKazuha: {
    element: "Anemo",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1039", ATK: "23", DEF: "62", SP: "" },
        "20": { HP: "2695", ATK: "59", DEF: "162", SP: "" },
      },
      "1": {
        "20": { HP: "3586", ATK: "79", DEF: "216", SP: "" },
        "40": { HP: "5366", ATK: "119", DEF: "324", SP: "" },
      },
      "2": {
        "40": { HP: "5999", ATK: "133", DEF: "362", SP: "288" },
        "50": { HP: "6902", ATK: "153", DEF: "417", SP: "288" },
      },
      "3": {
        "50": { HP: "7746", ATK: "172", DEF: "468", SP: "576" },
        "60": { HP: "8658", ATK: "192", DEF: "523", SP: "576" },
      },
      "4": {
        "60": { HP: "9291", ATK: "206", DEF: "561", SP: "576" },
        "70": { HP: "10212", ATK: "226", DEF: "617", SP: "576" },
      },
      "5": {
        "70": { HP: "10845", ATK: "240", DEF: "655", SP: "864" },
        "80": { HP: "11776", ATK: "261", DEF: "711", SP: "864" },
      },
      "6": {
        "80": { HP: "12409", ATK: "275", DEF: "750", SP: "1152" },
        "90": { HP: "13348", ATK: "296", DEF: "806", SP: "1152" },
      },
    },
    statBuff: "Elemental Mastery",
  },
  Kaeya: {
    element: "Cryo",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "975", ATK: "18", DEF: "66", SP: "" },
        "20": { HP: "2506", ATK: "48", DEF: "170", SP: "" },
      },
      "1": {
        "20": { HP: "3235", ATK: "62", DEF: "220", SP: "" },
        "40": { HP: "4845", ATK: "92", DEF: "329", SP: "" },
      },
      "2": {
        "40": { HP: "5363", ATK: "102", DEF: "364", SP: "67" },
        "50": { HP: "6169", ATK: "118", DEF: "419", SP: "67" },
      },
      "3": {
        "50": { HP: "6860", ATK: "131", DEF: "466", SP: "134" },
        "60": { HP: "7665", ATK: "146", DEF: "521", SP: "134" },
      },
      "4": {
        "60": { HP: "8183", ATK: "156", DEF: "556", SP: "134" },
        "70": { HP: "8988", ATK: "172", DEF: "611", SP: "134" },
      },
      "5": {
        "70": { HP: "9506", ATK: "182", DEF: "646", SP: "201" },
        "80": { HP: "10312", ATK: "197", DEF: "701", SP: "201" },
      },
      "6": {
        "80": { HP: "10830", ATK: "207", DEF: "736", SP: "268" },
        "90": { HP: "11636", ATK: "223", DEF: "791", SP: "268" },
      },
    },
    statBuff: "Energy Recharge",
  },
  KamisatoAyaka: {
    element: "Cryo",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1000", ATK: "26", DEF: "61", SP: "" },
        "20": { HP: "2596", ATK: "69", DEF: "158", SP: "" },
      },
      "1": {
        "20": { HP: "3454", ATK: "91", DEF: "210", SP: "" },
        "40": { HP: "5169", ATK: "137", DEF: "315", SP: "" },
      },
      "2": {
        "40": { HP: "5779", ATK: "153", DEF: "352", SP: "96" },
        "50": { HP: "6649", ATK: "176", DEF: "405", SP: "96" },
      },
      "3": {
        "50": { HP: "7462", ATK: "198", DEF: "454", SP: "192" },
        "60": { HP: "8341", ATK: "221", DEF: "508", SP: "192" },
      },
      "4": {
        "60": { HP: "8950", ATK: "238", DEF: "545", SP: "192" },
        "70": { HP: "9837", ATK: "261", DEF: "599", SP: "192" },
      },
      "5": {
        "70": { HP: "10447", ATK: "277", DEF: "636", SP: "288" },
        "80": { HP: "11344", ATK: "301", DEF: "691", SP: "288" },
      },
      "6": {
        "80": { HP: "11954", ATK: "317", DEF: "728", SP: "384" },
        "90": { HP: "12858", ATK: "342", DEF: "783", SP: "384" },
      },
    },
    statBuff: "CRIT DMG",
  },
  KamisatoAyato: {
    element: "Hydro",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1067", ATK: "23", DEF: "59", SP: "" },
        "20": { HP: "2769", ATK: "60", DEF: "155", SP: "" },
      },
      "1": {
        "20": { HP: "3685", ATK: "80", DEF: "206", SP: "" },
        "40": { HP: "5514", ATK: "120", DEF: "308", SP: "" },
      },
      "2": {
        "40": { HP: "6164", ATK: "134", DEF: "345", SP: "96" },
        "50": { HP: "7092", ATK: "154", DEF: "397", SP: "96" },
      },
      "3": {
        "50": { HP: "7959", ATK: "173", DEF: "446", SP: "192" },
        "60": { HP: "8897", ATK: "193", DEF: "498", SP: "192" },
      },
      "4": {
        "60": { HP: "9547", ATK: "208", DEF: "535", SP: "192" },
        "70": { HP: "10493", ATK: "228", DEF: "588", SP: "192" },
      },
      "5": {
        "70": { HP: "11144", ATK: "242", DEF: "624", SP: "288" },
        "80": { HP: "12100", ATK: "263", DEF: "678", SP: "288" },
      },
      "6": {
        "80": { HP: "12751", ATK: "277", DEF: "714", SP: "384" },
        "90": { HP: "13715", ATK: "298", DEF: "768", SP: "384" },
      },
    },
    statBuff: "CRIT DMG",
  },
  Keqing: {
    element: "Electro",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1020", ATK: "25", DEF: "62", SP: "" },
        "20": { HP: "2646", ATK: "65", DEF: "161", SP: "" },
      },
      "1": {
        "20": { HP: "3520", ATK: "86", DEF: "214", SP: "" },
        "40": { HP: "5267", ATK: "129", DEF: "321", SP: "" },
      },
      "2": {
        "40": { HP: "5889", ATK: "145", DEF: "359", SP: "96" },
        "50": { HP: "6775", ATK: "166", DEF: "413", SP: "96" },
      },
      "3": {
        "50": { HP: "7604", ATK: "187", DEF: "463", SP: "192" },
        "60": { HP: "8499", ATK: "209", DEF: "518", SP: "192" },
      },
      "4": {
        "60": { HP: "9121", ATK: "224", DEF: "556", SP: "192" },
        "70": { HP: "10025", ATK: "247", DEF: "611", SP: "192" },
      },
      "5": {
        "70": { HP: "10646", ATK: "262", DEF: "649", SP: "288" },
        "80": { HP: "11560", ATK: "284", DEF: "705", SP: "288" },
      },
      "6": {
        "80": { HP: "12182", ATK: "300", DEF: "743", SP: "384" },
        "90": { HP: "13103", ATK: "322", DEF: "799", SP: "384" },
      },
    },
    statBuff: "CRIT DMG",
  },
  Klee: {
    element: "Pyro",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "800", ATK: "24", DEF: "47", SP: "" },
        "20": { HP: "2077", ATK: "62", DEF: "124", SP: "" },
      },
      "1": {
        "20": { HP: "2763", ATK: "83", DEF: "165", SP: "" },
        "40": { HP: "4135", ATK: "125", DEF: "247", SP: "" },
      },
      "2": {
        "40": { HP: "4623", ATK: "139", DEF: "276", SP: "72" },
        "50": { HP: "5319", ATK: "160", DEF: "317", SP: "72" },
      },
      "3": {
        "50": { HP: "5969", ATK: "180", DEF: "356", SP: "144" },
        "60": { HP: "6672", ATK: "201", DEF: "398", SP: "144" },
      },
      "4": {
        "60": { HP: "7160", ATK: "216", DEF: "428", SP: "144" },
        "70": { HP: "7870", ATK: "237", DEF: "470", SP: "144" },
      },
      "5": {
        "70": { HP: "8358", ATK: "252", DEF: "499", SP: "216" },
        "80": { HP: "9075", ATK: "274", DEF: "542", SP: "216" },
      },
      "6": {
        "80": { HP: "9563", ATK: "289", DEF: "571", SP: "288" },
        "90": { HP: "10286", ATK: "310", DEF: "614", SP: "288" },
      },
    },
    statBuff: "Pyro DMG Bonus",
  },
  KujouSara: {
    element: "Electro",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "802", ATK: "16", DEF: "52", SP: "" },
        "20": { HP: "2061", ATK: "42", DEF: "135", SP: "" },
      },
      "1": {
        "20": { HP: "2660", ATK: "54", DEF: "174", SP: "" },
        "40": { HP: "3985", ATK: "81", DEF: "261", SP: "" },
      },
      "2": {
        "40": { HP: "4411", ATK: "90", DEF: "289", SP: "60" },
        "50": { HP: "5074", ATK: "103", DEF: "332", SP: "60" },
      },
      "3": {
        "50": { HP: "5641", ATK: "115", DEF: "370", SP: "120" },
        "60": { HP: "6304", ATK: "128", DEF: "413", SP: "120" },
      },
      "4": {
        "60": { HP: "6730", ATK: "137", DEF: "441", SP: "120" },
        "70": { HP: "7392", ATK: "150", DEF: "485", SP: "120" },
      },
      "5": {
        "70": { HP: "7818", ATK: "159", DEF: "513", SP: "180" },
        "80": { HP: "8481", ATK: "173", DEF: "556", SP: "180" },
      },
      "6": {
        "80": { HP: "8907", ATK: "181", DEF: "584", SP: "240" },
        "90": { HP: "9569", ATK: "195", DEF: "627", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  KukiShinobu: {
    element: "Electro",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1030", ATK: "17", DEF: "62", SP: "" },
        "20": { HP: "2646", ATK: "45", DEF: "161", SP: "" },
      },
      "1": {
        "20": { HP: "3416", ATK: "59", DEF: "208", SP: "" },
        "40": { HP: "5117", ATK: "88", DEF: "312", SP: "" },
      },
      "2": {
        "40": { HP: "5664", ATK: "97", DEF: "346", SP: "60" },
        "50": { HP: "6515", ATK: "112", DEF: "398", SP: "60" },
      },
      "3": {
        "50": { HP: "7244", ATK: "125", DEF: "442", SP: "120" },
        "60": { HP: "8095", ATK: "139", DEF: "494", SP: "120" },
      },
      "4": {
        "60": { HP: "8642", ATK: "149", DEF: "528", SP: "120" },
        "70": { HP: "9492", ATK: "164", DEF: "579", SP: "120" },
      },
      "5": {
        "70": { HP: "10039", ATK: "173", DEF: "613", SP: "180" },
        "80": { HP: "10890", ATK: "188", DEF: "665", SP: "180" },
      },
      "6": {
        "80": { HP: "11437", ATK: "197", DEF: "698", SP: "240" },
        "90": { HP: "12288", ATK: "212", DEF: "750", SP: "240" },
      },
    },
    statBuff: "HP",
  },
  Layla: {
    element: "Cryo",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "930", ATK: "18", DEF: "54", SP: "" },
        "20": { HP: "2389", ATK: "46", DEF: "141", SP: "" },
      },
      "1": {
        "20": { HP: "3084", ATK: "60", DEF: "182", SP: "" },
        "40": { HP: "4619", ATK: "90", DEF: "272", SP: "" },
      },
      "2": {
        "40": { HP: "5113", ATK: "99", DEF: "302", SP: "60" },
        "50": { HP: "5881", ATK: "114", DEF: "347", SP: "60" },
      },
      "3": {
        "50": { HP: "6539", ATK: "127", DEF: "386", SP: "120" },
        "60": { HP: "7307", ATK: "142", DEF: "431", SP: "120" },
      },
      "4": {
        "60": { HP: "7801", ATK: "152", DEF: "460", SP: "120" },
        "70": { HP: "8568", ATK: "167", DEF: "506", SP: "120" },
      },
      "5": {
        "70": { HP: "9062", ATK: "176", DEF: "535", SP: "180" },
        "80": { HP: "9830", ATK: "191", DEF: "580", SP: "180" },
      },
      "6": {
        "80": { HP: "10324", ATK: "201", DEF: "609", SP: "240" },
        "90": { HP: "11092", ATK: "216", DEF: "655", SP: "240" },
      },
    },
    statBuff: "HP",
  },
  Lisa: {
    element: "Electro",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "802", ATK: "19", DEF: "48", SP: "" },
        "20": { HP: "2061", ATK: "49", DEF: "123", SP: "" },
      },
      "1": {
        "20": { HP: "2660", ATK: "64", DEF: "159", SP: "" },
        "40": { HP: "3985", ATK: "96", DEF: "238", SP: "" },
      },
      "2": {
        "40": { HP: "4411", ATK: "106", DEF: "264", SP: "240" },
        "50": { HP: "5074", ATK: "122", DEF: "303", SP: "240" },
      },
      "3": {
        "50": { HP: "5641", ATK: "136", DEF: "338", SP: "480" },
        "60": { HP: "6304", ATK: "152", DEF: "377", SP: "480" },
      },
      "4": {
        "60": { HP: "6730", ATK: "162", DEF: "403", SP: "480" },
        "70": { HP: "7392", ATK: "178", DEF: "442", SP: "480" },
      },
      "5": {
        "70": { HP: "7818", ATK: "189", DEF: "468", SP: "720" },
        "80": { HP: "8481", ATK: "205", DEF: "508", SP: "720" },
      },
      "6": {
        "80": { HP: "8907", ATK: "215", DEF: "533", SP: "960" },
        "90": { HP: "9569", ATK: "231", DEF: "573", SP: "960" },
      },
    },
    statBuff: "Elemental Mastery",
  },
  Mona: {
    element: "Hydro",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "810", ATK: "22", DEF: "50", SP: "" },
        "20": { HP: "2101", ATK: "57", DEF: "131", SP: "" },
      },
      "1": {
        "20": { HP: "2796", ATK: "77", DEF: "175", SP: "" },
        "40": { HP: "4184", ATK: "115", DEF: "262", SP: "" },
      },
      "2": {
        "40": { HP: "4678", ATK: "129", DEF: "293", SP: "80" },
        "50": { HP: "5382", ATK: "148", DEF: "337", SP: "80" },
      },
      "3": {
        "50": { HP: "6040", ATK: "166", DEF: "379", SP: "160" },
        "60": { HP: "6752", ATK: "186", DEF: "423", SP: "160" },
      },
      "4": {
        "60": { HP: "7245", ATK: "199", DEF: "454", SP: "160" },
        "70": { HP: "7963", ATK: "219", DEF: "499", SP: "160" },
      },
      "5": {
        "70": { HP: "8457", ATK: "233", DEF: "530", SP: "240" },
        "80": { HP: "9183", ATK: "253", DEF: "576", SP: "240" },
      },
      "6": {
        "80": { HP: "9677", ATK: "266", DEF: "607", SP: "320" },
        "90": { HP: "10409", ATK: "287", DEF: "653", SP: "320" },
      },
    },
    statBuff: "Energy Recharge",
  },
  Nahida: {
    element: "Dendro",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "806", ATK: "23", DEF: "49", SP: "" },
        "20": { HP: "2092", ATK: "60", DEF: "127", SP: "" },
      },
      "1": {
        "20": { HP: "2783", ATK: "80", DEF: "169", SP: "" },
        "40": { HP: "4165", ATK: "120", DEF: "253", SP: "" },
      },
      "2": {
        "40": { HP: "4656", ATK: "134", DEF: "283", SP: "288" },
        "50": { HP: "5357", ATK: "154", DEF: "325", SP: "288" },
      },
      "3": {
        "50": { HP: "6012", ATK: "173", DEF: "365", SP: "576" },
        "60": { HP: "6720", ATK: "193", DEF: "408", SP: "576" },
      },
      "4": {
        "60": { HP: "7211", ATK: "208", DEF: "438", SP: "576" },
        "70": { HP: "7926", ATK: "228", DEF: "482", SP: "576" },
      },
      "5": {
        "70": { HP: "8417", ATK: "242", DEF: "512", SP: "864" },
        "80": { HP: "9140", ATK: "263", DEF: "556", SP: "864" },
      },
      "6": {
        "80": { HP: "9631", ATK: "277", DEF: "585", SP: "1152" },
        "90": { HP: "10360", ATK: "298", DEF: "630", SP: "1152" },
      },
    },
    statBuff: "Elemental Mastery",
  },
  Nilou: {
    element: "Hydro",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "1182", ATK: "17", DEF: "56", SP: "" },
        "20": { HP: "3066", ATK: "46", DEF: "147", SP: "" },
      },
      "1": {
        "20": { HP: "4079", ATK: "61", DEF: "195", SP: "" },
        "40": { HP: "6104", ATK: "92", DEF: "292", SP: "" },
      },
      "2": {
        "40": { HP: "6825", ATK: "103", DEF: "327", SP: "72" },
        "50": { HP: "7852", ATK: "118", DEF: "376", SP: "72" },
      },
      "3": {
        "50": { HP: "8812", ATK: "133", DEF: "422", SP: "144" },
        "60": { HP: "9850", ATK: "148", DEF: "472", SP: "144" },
      },
      "4": {
        "60": { HP: "10570", ATK: "159", DEF: "507", SP: "144" },
        "70": { HP: "11617", ATK: "175", DEF: "557", SP: "144" },
      },
      "5": {
        "70": { HP: "12338", ATK: "186", DEF: "591", SP: "216" },
        "80": { HP: "13397", ATK: "202", DEF: "642", SP: "216" },
      },
      "6": {
        "80": { HP: "14117", ATK: "213", DEF: "677", SP: "288" },
        "90": { HP: "15184", ATK: "229", DEF: "728", SP: "288" },
      },
    },
    statBuff: "HP",
  },
  Ningguang: {
    element: "Geo",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "820", ATK: "17", DEF: "48", SP: "" },
        "20": { HP: "2108", ATK: "45", DEF: "123", SP: "" },
      },
      "1": {
        "20": { HP: "2721", ATK: "59", DEF: "159", SP: "" },
        "40": { HP: "4076", ATK: "88", DEF: "238", SP: "" },
      },
      "2": {
        "40": { HP: "4511", ATK: "97", DEF: "264", SP: "60" },
        "50": { HP: "5189", ATK: "112", DEF: "303", SP: "60" },
      },
      "3": {
        "50": { HP: "5770", ATK: "125", DEF: "338", SP: "120" },
        "60": { HP: "6448", ATK: "139", DEF: "377", SP: "120" },
      },
      "4": {
        "60": { HP: "6883", ATK: "149", DEF: "403", SP: "120" },
        "70": { HP: "7560", ATK: "164", DEF: "442", SP: "120" },
      },
      "5": {
        "70": { HP: "7996", ATK: "173", DEF: "468", SP: "180" },
        "80": { HP: "8674", ATK: "188", DEF: "508", SP: "180" },
      },
      "6": {
        "80": { HP: "9109", ATK: "197", DEF: "533", SP: "240" },
        "90": { HP: "9787", ATK: "212", DEF: "573", SP: "240" },
      },
    },
    statBuff: "Geo DMG Bonus",
  },
  Noelle: {
    element: "Geo",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "1012", ATK: "16", DEF: "66", SP: "" },
        "20": { HP: "2600", ATK: "41", DEF: "172", SP: "" },
      },
      "1": {
        "20": { HP: "3356", ATK: "53", DEF: "222", SP: "" },
        "40": { HP: "5027", ATK: "79", DEF: "332", SP: "" },
      },
      "2": {
        "40": { HP: "5564", ATK: "88", DEF: "368", SP: "75" },
        "50": { HP: "6400", ATK: "101", DEF: "423", SP: "75" },
      },
      "3": {
        "50": { HP: "7116", ATK: "112", DEF: "470", SP: "150" },
        "60": { HP: "7952", ATK: "125", DEF: "526", SP: "150" },
      },
      "4": {
        "60": { HP: "8489", ATK: "134", DEF: "561", SP: "150" },
        "70": { HP: "9324", ATK: "147", DEF: "616", SP: "150" },
      },
      "5": {
        "70": { HP: "9861", ATK: "156", DEF: "652", SP: "225" },
        "80": { HP: "10697", ATK: "169", DEF: "707", SP: "225" },
      },
      "6": {
        "80": { HP: "11235", ATK: "177", DEF: "743", SP: "300" },
        "90": { HP: "12071", ATK: "191", DEF: "798", SP: "300" },
      },
    },
    statBuff: "DEF",
  },
  Qiqi: {
    element: "Cryo",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "962", ATK: "22", DEF: "71", SP: "" },
        "20": { HP: "2497", ATK: "57", DEF: "186", SP: "" },
      },
      "1": {
        "20": { HP: "3323", ATK: "77", DEF: "247", SP: "" },
        "40": { HP: "4972", ATK: "115", DEF: "370", SP: "" },
      },
      "2": {
        "40": { HP: "5559", ATK: "129", DEF: "414", SP: "55" },
        "50": { HP: "6395", ATK: "148", DEF: "476", SP: "55" },
      },
      "3": {
        "50": { HP: "7177", ATK: "166", DEF: "535", SP: "110" },
        "60": { HP: "8023", ATK: "186", DEF: "598", SP: "110" },
      },
      "4": {
        "60": { HP: "8609", ATK: "199", DEF: "642", SP: "110" },
        "70": { HP: "9463", ATK: "219", DEF: "705", SP: "110" },
      },
      "5": {
        "70": { HP: "10049", ATK: "233", DEF: "749", SP: "165" },
        "80": { HP: "10912", ATK: "253", DEF: "813", SP: "165" },
      },
      "6": {
        "80": { HP: "11498", ATK: "266", DEF: "857", SP: "220" },
        "90": { HP: "12368", ATK: "287", DEF: "922", SP: "220" },
      },
    },
    statBuff: "Healing Bonus",
  },
  RaidenShogun: {
    element: "Electro",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "1004", ATK: "26", DEF: "61", SP: "" },
        "20": { HP: "2606", ATK: "68", DEF: "159", SP: "" },
      },
      "1": {
        "20": { HP: "3467", ATK: "90", DEF: "212", SP: "" },
        "40": { HP: "5189", ATK: "135", DEF: "317", SP: "" },
      },
      "2": {
        "40": { HP: "5801", ATK: "151", DEF: "354", SP: "80" },
        "50": { HP: "6674", ATK: "174", DEF: "408", SP: "80" },
      },
      "3": {
        "50": { HP: "7490", ATK: "195", DEF: "458", SP: "160" },
        "60": { HP: "8372", ATK: "218", DEF: "512", SP: "160" },
      },
      "4": {
        "60": { HP: "8985", ATK: "234", DEF: "549", SP: "160" },
        "70": { HP: "9875", ATK: "258", DEF: "603", SP: "160" },
      },
      "5": {
        "70": { HP: "10487", ATK: "274", DEF: "641", SP: "240" },
        "80": { HP: "11387", ATK: "297", DEF: "696", SP: "240" },
      },
      "6": {
        "80": { HP: "11999", ATK: "313", DEF: "733", SP: "320" },
        "90": { HP: "12907", ATK: "337", DEF: "789", SP: "320" },
      },
    },
    statBuff: "Energy Recharge",
  },
  Razor: {
    element: "Electro",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "1002", ATK: "19", DEF: "62", SP: "" },
        "20": { HP: "2576", ATK: "50", DEF: "161", SP: "" },
      },
      "1": {
        "20": { HP: "3325", ATK: "64", DEF: "208", SP: "" },
        "40": { HP: "4981", ATK: "97", DEF: "312", SP: "" },
      },
      "2": {
        "40": { HP: "5514", ATK: "107", DEF: "346", SP: "75" },
        "50": { HP: "6342", ATK: "123", DEF: "398", SP: "75" },
      },
      "3": {
        "50": { HP: "7052", ATK: "137", DEF: "442", SP: "150" },
        "60": { HP: "7880", ATK: "153", DEF: "494", SP: "150" },
      },
      "4": {
        "60": { HP: "8413", ATK: "164", DEF: "528", SP: "150" },
        "70": { HP: "9240", ATK: "180", DEF: "579", SP: "150" },
      },
      "5": {
        "70": { HP: "9773", ATK: "190", DEF: "613", SP: "225" },
        "80": { HP: "10601", ATK: "207", DEF: "665", SP: "225" },
      },
      "6": {
        "80": { HP: "11133", ATK: "217", DEF: "698", SP: "300" },
        "90": { HP: "11962", ATK: "233", DEF: "750", SP: "300" },
      },
    },
    statBuff: "Physical DMG Bonus",
  },
  Rosaria: {
    element: "Cryo",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "1030", ATK: "20", DEF: "59", SP: "" },
        "20": { HP: "2646", ATK: "51", DEF: "152", SP: "" },
      },
      "1": {
        "20": { HP: "3416", ATK: "66", DEF: "197", SP: "" },
        "40": { HP: "5117", ATK: "99", DEF: "295", SP: "" },
      },
      "2": {
        "40": { HP: "5664", ATK: "110", DEF: "327", SP: "60" },
        "50": { HP: "6515", ATK: "127", DEF: "376", SP: "60" },
      },
      "3": {
        "50": { HP: "7244", ATK: "141", DEF: "418", SP: "120" },
        "60": { HP: "8095", ATK: "158", DEF: "467", SP: "120" },
      },
      "4": {
        "60": { HP: "8642", ATK: "168", DEF: "499", SP: "120" },
        "70": { HP: "9492", ATK: "185", DEF: "548", SP: "120" },
      },
      "5": {
        "70": { HP: "10039", ATK: "196", DEF: "579", SP: "180" },
        "80": { HP: "10890", ATK: "212", DEF: "629", SP: "180" },
      },
      "6": {
        "80": { HP: "11437", ATK: "223", DEF: "660", SP: "240" },
        "90": { HP: "12288", ATK: "240", DEF: "709", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  SangonomiyaKokomi: {
    element: "Hydro",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "1048", ATK: "18", DEF: "51", SP: "" },
        "20": { HP: "2720", ATK: "47", DEF: "132", SP: "" },
      },
      "1": {
        "20": { HP: "3619", ATK: "62", DEF: "176", SP: "" },
        "40": { HP: "5415", ATK: "94", DEF: "264", SP: "" },
      },
      "2": {
        "40": { HP: "6054", ATK: "105", DEF: "295", SP: "72" },
        "50": { HP: "6965", ATK: "121", DEF: "339", SP: "72" },
      },
      "3": {
        "50": { HP: "7817", ATK: "136", DEF: "381", SP: "144" },
        "60": { HP: "8738", ATK: "152", DEF: "426", SP: "144" },
      },
      "4": {
        "60": { HP: "9377", ATK: "163", DEF: "457", SP: "144" },
        "70": { HP: "10306", ATK: "179", DEF: "502", SP: "144" },
      },
      "5": {
        "70": { HP: "10945", ATK: "190", DEF: "533", SP: "216" },
        "80": { HP: "11884", ATK: "206", DEF: "579", SP: "216" },
      },
      "6": {
        "80": { HP: "12523", ATK: "217", DEF: "610", SP: "288" },
        "90": { HP: "13470", ATK: "234", DEF: "657", SP: "288" },
      },
    },
    statBuff: "Hydro DMG Bonus",
  },
  Sayu: {
    element: "Anemo",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "993", ATK: "20", DEF: "62", SP: "" },
        "20": { HP: "2553", ATK: "52", DEF: "160", SP: "" },
      },
      "1": {
        "20": { HP: "3295", ATK: "67", DEF: "207", SP: "" },
        "40": { HP: "4936", ATK: "101", DEF: "310", SP: "" },
      },
      "2": {
        "40": { HP: "5464", ATK: "112", DEF: "343", SP: "240" },
        "50": { HP: "6284", ATK: "129", DEF: "394", SP: "240" },
      },
      "3": {
        "50": { HP: "6988", ATK: "144", DEF: "438", SP: "480" },
        "60": { HP: "7809", ATK: "160", DEF: "490", SP: "480" },
      },
      "4": {
        "60": { HP: "8336", ATK: "171", DEF: "523", SP: "480" },
        "70": { HP: "9156", ATK: "188", DEF: "575", SP: "480" },
      },
      "5": {
        "70": { HP: "9684", ATK: "199", DEF: "608", SP: "720" },
        "80": { HP: "10505", ATK: "216", DEF: "659", SP: "720" },
      },
      "6": {
        "80": { HP: "11032", ATK: "227", DEF: "693", SP: "960" },
        "90": { HP: "11853", ATK: "244", DEF: "744", SP: "960" },
      },
    },
    statBuff: "Elemental Mastery",
  },
  Shenhe: {
    element: "Cryo",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "1011", ATK: "23", DEF: "64", SP: "" },
        "20": { HP: "2623", ATK: "61", DEF: "167", SP: "" },
      },
      "1": {
        "20": { HP: "3491", ATK: "81", DEF: "223", SP: "" },
        "40": { HP: "5223", ATK: "122", DEF: "333", SP: "" },
      },
      "2": {
        "40": { HP: "5839", ATK: "136", DEF: "373", SP: "72" },
        "50": { HP: "6718", ATK: "157", DEF: "429", SP: "72" },
      },
      "3": {
        "50": { HP: "7540", ATK: "176", DEF: "481", SP: "144" },
        "60": { HP: "8428", ATK: "197", DEF: "538", SP: "144" },
      },
      "4": {
        "60": { HP: "9044", ATK: "211", DEF: "577", SP: "144" },
        "70": { HP: "9940", ATK: "232", DEF: "635", SP: "144" },
      },
      "5": {
        "70": { HP: "10557", ATK: "246", DEF: "674", SP: "216" },
        "80": { HP: "11463", ATK: "267", DEF: "732", SP: "216" },
      },
      "6": {
        "80": { HP: "12079", ATK: "282", DEF: "771", SP: "288" },
        "90": { HP: "12992", ATK: "303", DEF: "830", SP: "288" },
      },
    },
    statBuff: "ATK",
  },
  ShikanoinHeizou: {
    element: "Anemo",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "893", ATK: "18", DEF: "57", SP: "" },
        "20": { HP: "2295", ATK: "48", DEF: "147", SP: "" },
      },
      "1": {
        "20": { HP: "2963", ATK: "62", DEF: "190", SP: "" },
        "40": { HP: "4438", ATK: "93", DEF: "284", SP: "" },
      },
      "2": {
        "40": { HP: "4912", ATK: "103", DEF: "315", SP: "60" },
        "50": { HP: "5650", ATK: "119", DEF: "362", SP: "60" },
      },
      "3": {
        "50": { HP: "6283", ATK: "132", DEF: "403", SP: "120" },
        "60": { HP: "7021", ATK: "148", DEF: "450", SP: "120" },
      },
      "4": {
        "60": { HP: "7495", ATK: "158", DEF: "480", SP: "120" },
        "70": { HP: "8232", ATK: "173", DEF: "528", SP: "120" },
      },
      "5": {
        "70": { HP: "8706", ATK: "183", DEF: "558", SP: "180" },
        "80": { HP: "9445", ATK: "199", DEF: "606", SP: "180" },
      },
      "6": {
        "80": { HP: "9919", ATK: "209", DEF: "636", SP: "240" },
        "90": { HP: "10657", ATK: "225", DEF: "683", SP: "240" },
      },
    },
    statBuff: "Anemo DMG Bonus",
  },
  Sucrose: {
    element: "Anemo",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "775", ATK: "14", DEF: "58", SP: "" },
        "20": { HP: "1991", ATK: "36", DEF: "151", SP: "" },
      },
      "1": {
        "20": { HP: "2570", ATK: "47", DEF: "195", SP: "" },
        "40": { HP: "3849", ATK: "70", DEF: "292", SP: "" },
      },
      "2": {
        "40": { HP: "4260", ATK: "78", DEF: "324", SP: "60" },
        "50": { HP: "4901", ATK: "90", DEF: "372", SP: "60" },
      },
      "3": {
        "50": { HP: "5449", ATK: "100", DEF: "414", SP: "120" },
        "60": { HP: "6089", ATK: "111", DEF: "463", SP: "120" },
      },
      "4": {
        "60": { HP: "6501", ATK: "119", DEF: "494", SP: "120" },
        "70": { HP: "7140", ATK: "131", DEF: "543", SP: "120" },
      },
      "5": {
        "70": { HP: "7551", ATK: "138", DEF: "574", SP: "180" },
        "80": { HP: "8192", ATK: "150", DEF: "623", SP: "180" },
      },
      "6": {
        "80": { HP: "8603", ATK: "158", DEF: "654", SP: "240" },
        "90": { HP: "9243", ATK: "169", DEF: "702", SP: "240" },
      },
    },
    statBuff: "Anemo DMG Bonus",
  },
  Tartaglia: {
    element: "Hydro",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "1020", ATK: "23", DEF: "63", SP: "" },
        "20": { HP: "2646", ATK: "60", DEF: "164", SP: "" },
      },
      "1": {
        "20": { HP: "3520", ATK: "80", DEF: "218", SP: "" },
        "40": { HP: "5267", ATK: "121", DEF: "327", SP: "" },
      },
      "2": {
        "40": { HP: "5889", ATK: "135", DEF: "366", SP: "72" },
        "50": { HP: "6775", ATK: "155", DEF: "421", SP: "72" },
      },
      "3": {
        "50": { HP: "7604", ATK: "174", DEF: "472", SP: "144" },
        "60": { HP: "8499", ATK: "195", DEF: "528", SP: "144" },
      },
      "4": {
        "60": { HP: "9121", ATK: "209", DEF: "567", SP: "144" },
        "70": { HP: "10025", ATK: "230", DEF: "623", SP: "144" },
      },
      "5": {
        "70": { HP: "10646", ATK: "244", DEF: "661", SP: "216" },
        "80": { HP: "11560", ATK: "265", DEF: "718", SP: "216" },
      },
      "6": {
        "80": { HP: "12182", ATK: "280", DEF: "757", SP: "288" },
        "90": { HP: "13103", ATK: "301", DEF: "814", SP: "288" },
      },
    },
    statBuff: "Hydro DMG Bonus",
  },
  Thoma: {
    element: "Pyro",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "866", ATK: "16", DEF: "62", SP: "" },
        "20": { HP: "2225", ATK: "43", DEF: "161", SP: "" },
      },
      "1": {
        "20": { HP: "2872", ATK: "56", DEF: "208", SP: "" },
        "40": { HP: "4302", ATK: "84", DEF: "312", SP: "" },
      },
      "2": {
        "40": { HP: "4762", ATK: "93", DEF: "346", SP: "60" },
        "50": { HP: "5477", ATK: "106", DEF: "398", SP: "60" },
      },
      "3": {
        "50": { HP: "6090", ATK: "118", DEF: "442", SP: "120" },
        "60": { HP: "6806", ATK: "132", DEF: "494", SP: "120" },
      },
      "4": {
        "60": { HP: "7266", ATK: "141", DEF: "528", SP: "120" },
        "70": { HP: "7980", ATK: "155", DEF: "579", SP: "120" },
      },
      "5": {
        "70": { HP: "8440", ATK: "164", DEF: "613", SP: "180" },
        "80": { HP: "9155", ATK: "178", DEF: "665", SP: "180" },
      },
      "6": {
        "80": { HP: "9615", ATK: "187", DEF: "698", SP: "240" },
        "90": { HP: "10331", ATK: "201", DEF: "750", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  Tighnari: {
    element: "Dendro",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "844", ATK: "20", DEF: "49", SP: "" },
        "20": { HP: "2191", ATK: "54", DEF: "127", SP: "" },
      },
      "1": {
        "20": { HP: "2915", ATK: "71", DEF: "169", SP: "" },
        "40": { HP: "4362", ATK: "107", DEF: "253", SP: "" },
      },
      "2": {
        "40": { HP: "4876", ATK: "120", DEF: "283", SP: "72" },
        "50": { HP: "5610", ATK: "138", DEF: "325", SP: "72" },
      },
      "3": {
        "50": { HP: "6296", ATK: "155", DEF: "365", SP: "144" },
        "60": { HP: "7038", ATK: "173", DEF: "408", SP: "144" },
      },
      "4": {
        "60": { HP: "7552", ATK: "186", DEF: "438", SP: "144" },
        "70": { HP: "8301", ATK: "204", DEF: "482", SP: "144" },
      },
      "5": {
        "70": { HP: "8815", ATK: "217", DEF: "512", SP: "216" },
        "80": { HP: "9572", ATK: "236", DEF: "556", SP: "216" },
      },
      "6": {
        "80": { HP: "10087", ATK: "249", DEF: "585", SP: "288" },
        "90": { HP: "10849", ATK: "267", DEF: "630", SP: "288" },
      },
    },
    statBuff: "Dendro DMG Bonus",
  },
  Traveler: {
    element: "None",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "911", ATK: "17", DEF: "57", SP: "" },
        "20": { HP: "2342", ATK: "45", DEF: "147", SP: "" },
      },
      "1": {
        "20": { HP: "3023", ATK: "59", DEF: "189", SP: "" },
        "40": { HP: "4528", ATK: "88", DEF: "284", SP: "" },
      },
      "2": {
        "40": { HP: "5012", ATK: "97", DEF: "314", SP: "60" },
        "50": { HP: "5766", ATK: "112", DEF: "361", SP: "60" },
      },
      "3": {
        "50": { HP: "6411", ATK: "125", DEF: "402", SP: "120" },
        "60": { HP: "7164", ATK: "139", DEF: "449", SP: "120" },
      },
      "4": {
        "60": { HP: "7648", ATK: "149", DEF: "480", SP: "120" },
        "70": { HP: "8400", ATK: "164", DEF: "527", SP: "120" },
      },
      "5": {
        "70": { HP: "8884", ATK: "173", DEF: "557", SP: "180" },
        "80": { HP: "9637", ATK: "188", DEF: "604", SP: "180" },
      },
      "6": {
        "80": { HP: "10121", ATK: "197", DEF: "635", SP: "240" },
        "90": { HP: "10874", ATK: "212", DEF: "682", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  Venti: {
    element: "Anemo",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "819", ATK: "20", DEF: "52", SP: "" },
        "20": { HP: "2126", ATK: "53", DEF: "135", SP: "" },
      },
      "1": {
        "20": { HP: "2829", ATK: "70", DEF: "179", SP: "" },
        "40": { HP: "4234", ATK: "105", DEF: "268", SP: "" },
      },
      "2": {
        "40": { HP: "4733", ATK: "118", DEF: "300", SP: "80" },
        "50": { HP: "5445", ATK: "136", DEF: "345", SP: "80" },
      },
      "3": {
        "50": { HP: "6111", ATK: "152", DEF: "388", SP: "160" },
        "60": { HP: "6831", ATK: "170", DEF: "433", SP: "160" },
      },
      "4": {
        "60": { HP: "7331", ATK: "183", DEF: "465", SP: "160" },
        "70": { HP: "8057", ATK: "201", DEF: "511", SP: "160" },
      },
      "5": {
        "70": { HP: "8557", ATK: "213", DEF: "543", SP: "240" },
        "80": { HP: "9291", ATK: "232", DEF: "589", SP: "240" },
      },
      "6": {
        "80": { HP: "9791", ATK: "244", DEF: "621", SP: "320" },
        "90": { HP: "10531", ATK: "263", DEF: "668", SP: "320" },
      },
    },
    statBuff: "Energy Recharge",
  },
  Wanderer: {
    element: "Anemo",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "791", ATK: "25", DEF: "47", SP: "" },
        "20": { HP: "2052", ATK: "66", DEF: "122", SP: "" },
      },
      "1": {
        "20": { HP: "2730", ATK: "88", DEF: "163", SP: "" },
        "40": { HP: "4086", ATK: "131", DEF: "244", SP: "" },
      },
      "2": {
        "40": { HP: "4568", ATK: "147", DEF: "272", SP: "48" },
        "50": { HP: "5256", ATK: "169", DEF: "313", SP: "48" },
      },
      "3": {
        "50": { HP: "5898", ATK: "190", DEF: "352", SP: "96" },
        "60": { HP: "6593", ATK: "212", DEF: "393", SP: "96" },
      },
      "4": {
        "60": { HP: "7075", ATK: "228", DEF: "422", SP: "96" },
        "70": { HP: "7776", ATK: "250", DEF: "464", SP: "96" },
      },
      "5": {
        "70": { HP: "8258", ATK: "266", DEF: "493", SP: "144" },
        "80": { HP: "8967", ATK: "289", DEF: "535", SP: "144" },
      },
      "6": {
        "80": { HP: "9449", ATK: "304", DEF: "564", SP: "192" },
        "90": { HP: "10164", ATK: "327", DEF: "607", SP: "192" },
      },
    },
    statBuff: "CRIT Rate",
  },
  Xiangling: {
    element: "Pyro",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "911", ATK: "18", DEF: "56", SP: "" },
        "20": { HP: "2342", ATK: "48", DEF: "144", SP: "" },
      },
      "1": {
        "20": { HP: "3023", ATK: "62", DEF: "185", SP: "" },
        "40": { HP: "4528", ATK: "93", DEF: "278", SP: "" },
      },
      "2": {
        "40": { HP: "5012", ATK: "103", DEF: "308", SP: "240" },
        "50": { HP: "5766", ATK: "119", DEF: "354", SP: "240" },
      },
      "3": {
        "50": { HP: "6411", ATK: "132", DEF: "394", SP: "480" },
        "60": { HP: "7164", ATK: "148", DEF: "440", SP: "480" },
      },
      "4": {
        "60": { HP: "7648", ATK: "158", DEF: "470", SP: "480" },
        "70": { HP: "8400", ATK: "173", DEF: "516", SP: "480" },
      },
      "5": {
        "70": { HP: "8884", ATK: "183", DEF: "546", SP: "720" },
        "80": { HP: "9637", ATK: "199", DEF: "592", SP: "720" },
      },
      "6": {
        "80": { HP: "10121", ATK: "209", DEF: "622", SP: "960" },
        "90": { HP: "10874", ATK: "225", DEF: "668", SP: "960" },
      },
    },
    statBuff: "Elemental Mastery",
  },
  Xiao: {
    element: "Anemo",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "991", ATK: "27", DEF: "62", SP: "" },
        "20": { HP: "2571", ATK: "70", DEF: "161", SP: "" },
      },
      "1": {
        "20": { HP: "3421", ATK: "93", DEF: "214", SP: "" },
        "40": { HP: "5120", ATK: "140", DEF: "321", SP: "" },
      },
      "2": {
        "40": { HP: "5724", ATK: "156", DEF: "359", SP: "48" },
        "50": { HP: "6585", ATK: "180", DEF: "413", SP: "48" },
      },
      "3": {
        "50": { HP: "7391", ATK: "202", DEF: "463", SP: "96" },
        "60": { HP: "8261", ATK: "226", DEF: "518", SP: "96" },
      },
      "4": {
        "60": { HP: "8865", ATK: "243", DEF: "556", SP: "96" },
        "70": { HP: "9744", ATK: "267", DEF: "611", SP: "96" },
      },
      "5": {
        "70": { HP: "10348", ATK: "283", DEF: "649", SP: "144" },
        "80": { HP: "11236", ATK: "308", DEF: "705", SP: "144" },
      },
      "6": {
        "80": { HP: "11840", ATK: "324", DEF: "743", SP: "192" },
        "90": { HP: "12735", ATK: "349", DEF: "799", SP: "192" },
      },
    },
    statBuff: "CRIT Rate",
  },
  Xingqiu: {
    element: "Hydro",
    weapon: "Sword",
    stats: {
      "0": {
        "1": { HP: "857", ATK: "16", DEF: "63", SP: "" },
        "20": { HP: "2201", ATK: "43", DEF: "163", SP: "" },
      },
      "1": {
        "20": { HP: "2842", ATK: "56", DEF: "210", SP: "" },
        "40": { HP: "4257", ATK: "84", DEF: "315", SP: "" },
      },
      "2": {
        "40": { HP: "4712", ATK: "93", DEF: "349", SP: "60" },
        "50": { HP: "5420", ATK: "106", DEF: "401", SP: "60" },
      },
      "3": {
        "50": { HP: "6026", ATK: "118", DEF: "446", SP: "120" },
        "60": { HP: "6734", ATK: "132", DEF: "499", SP: "120" },
      },
      "4": {
        "60": { HP: "7189", ATK: "141", DEF: "532", SP: "120" },
        "70": { HP: "7896", ATK: "155", DEF: "585", SP: "120" },
      },
      "5": {
        "70": { HP: "8351", ATK: "164", DEF: "618", SP: "180" },
        "80": { HP: "9059", ATK: "178", DEF: "671", SP: "180" },
      },
      "6": {
        "80": { HP: "9514", ATK: "187", DEF: "705", SP: "240" },
        "90": { HP: "10222", ATK: "201", DEF: "757", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  Xinyan: {
    element: "Pyro",
    weapon: "Claymore",
    stats: {
      "0": {
        "1": { HP: "939", ATK: "20", DEF: "66", SP: "" },
        "20": { HP: "2412", ATK: "53", DEF: "172", SP: "" },
      },
      "1": {
        "20": { HP: "3114", ATK: "69", DEF: "222", SP: "" },
        "40": { HP: "4664", ATK: "103", DEF: "332", SP: "" },
      },
      "2": {
        "40": { HP: "5163", ATK: "114", DEF: "368", SP: "60" },
        "50": { HP: "5939", ATK: "131", DEF: "423", SP: "60" },
      },
      "3": {
        "50": { HP: "6603", ATK: "146", DEF: "470", SP: "120" },
        "60": { HP: "7379", ATK: "163", DEF: "526", SP: "120" },
      },
      "4": {
        "60": { HP: "7877", ATK: "174", DEF: "561", SP: "120" },
        "70": { HP: "8652", ATK: "191", DEF: "616", SP: "120" },
      },
      "5": {
        "70": { HP: "9151", ATK: "203", DEF: "652", SP: "180" },
        "80": { HP: "9926", ATK: "220", DEF: "707", SP: "180" },
      },
      "6": {
        "80": { HP: "10425", ATK: "231", DEF: "743", SP: "240" },
        "90": { HP: "11201", ATK: "248", DEF: "798", SP: "240" },
      },
    },
    statBuff: "ATK",
  },
  YaeMiko: {
    element: "Electro",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "807", ATK: "26", DEF: "44", SP: "" },
        "20": { HP: "2094", ATK: "68", DEF: "114", SP: "" },
      },
      "1": {
        "20": { HP: "2786", ATK: "91", DEF: "152", SP: "" },
        "40": { HP: "4170", ATK: "136", DEF: "228", SP: "" },
      },
      "2": {
        "40": { HP: "4661", ATK: "152", DEF: "255", SP: "48" },
        "50": { HP: "5363", ATK: "175", DEF: "294", SP: "48" },
      },
      "3": {
        "50": { HP: "6019", ATK: "197", DEF: "330", SP: "96" },
        "60": { HP: "6728", ATK: "220", DEF: "368", SP: "96" },
      },
      "4": {
        "60": { HP: "7220", ATK: "236", DEF: "395", SP: "96" },
        "70": { HP: "7935", ATK: "259", DEF: "435", SP: "96" },
      },
      "5": {
        "70": { HP: "8427", ATK: "275", DEF: "462", SP: "144" },
        "80": { HP: "9151", ATK: "299", DEF: "501", SP: "144" },
      },
      "6": {
        "80": { HP: "9643", ATK: "315", DEF: "528", SP: "192" },
        "90": { HP: "10372", ATK: "339", DEF: "568", SP: "192" },
      },
    },
    statBuff: "CRIT Rate",
  },
  Yanfei: {
    element: "Pyro",
    weapon: "Catalyst",
    stats: {
      "0": {
        "1": { HP: "784", ATK: "20", DEF: "49", SP: "" },
        "20": { HP: "2014", ATK: "51", DEF: "126", SP: "" },
      },
      "1": {
        "20": { HP: "2600", ATK: "66", DEF: "163", SP: "" },
        "40": { HP: "3894", ATK: "99", DEF: "244", SP: "" },
      },
      "2": {
        "40": { HP: "4311", ATK: "110", DEF: "270", SP: "60" },
        "50": { HP: "4958", ATK: "127", DEF: "311", SP: "60" },
      },
      "3": {
        "50": { HP: "5513", ATK: "141", DEF: "346", SP: "120" },
        "60": { HP: "6161", ATK: "158", DEF: "386", SP: "120" },
      },
      "4": {
        "60": { HP: "6577", ATK: "168", DEF: "412", SP: "120" },
        "70": { HP: "7224", ATK: "185", DEF: "453", SP: "120" },
      },
      "5": {
        "70": { HP: "7640", ATK: "196", DEF: "479", SP: "180" },
        "80": { HP: "8288", ATK: "212", DEF: "520", SP: "180" },
      },
      "6": {
        "80": { HP: "8704", ATK: "223", DEF: "546", SP: "240" },
        "90": { HP: "9352", ATK: "240", DEF: "586", SP: "240" },
      },
    },
    statBuff: "Pyro DMG Bonus",
  },
  Yaoyao: {
    element: "Dendro",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "1030", ATK: "17", DEF: "62", SP: "" },
        "20": { HP: "2646", ATK: "45", DEF: "161", SP: "" },
      },
      "1": {
        "20": { HP: "3416", ATK: "59", DEF: "208", SP: "" },
        "40": { HP: "5117", ATK: "88", DEF: "312", SP: "" },
      },
      "2": {
        "40": { HP: "5664", ATK: "97", DEF: "346", SP: "60" },
        "50": { HP: "6515", ATK: "112", DEF: "398", SP: "60" },
      },
      "3": {
        "50": { HP: "7244", ATK: "125", DEF: "442", SP: "120" },
        "60": { HP: "8095", ATK: "139", DEF: "494", SP: "120" },
      },
      "4": {
        "60": { HP: "8642", ATK: "149", DEF: "528", SP: "120" },
        "70": { HP: "9492", ATK: "164", DEF: "579", SP: "120" },
      },
      "5": {
        "70": { HP: "10039", ATK: "173", DEF: "613", SP: "180" },
        "80": { HP: "10890", ATK: "188", DEF: "665", SP: "180" },
      },
      "6": {
        "80": { HP: "11437", ATK: "197", DEF: "698", SP: "240" },
        "90": { HP: "12288", ATK: "212", DEF: "750", SP: "240" },
      },
    },
    statBuff: "HP",
  },
  Yelan: {
    element: "Hydro",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "1124", ATK: "18", DEF: "42", SP: "" },
        "20": { HP: "2918", ATK: "49", DEF: "110", SP: "" },
      },
      "1": {
        "20": { HP: "3882", ATK: "65", DEF: "147", SP: "" },
        "40": { HP: "5809", ATK: "98", DEF: "220", SP: "" },
      },
      "2": {
        "40": { HP: "6494", ATK: "109", DEF: "246", SP: "48" },
        "50": { HP: "7472", ATK: "126", DEF: "283", SP: "48" },
      },
      "3": {
        "50": { HP: "8386", ATK: "141", DEF: "318", SP: "96" },
        "60": { HP: "9373", ATK: "158", DEF: "355", SP: "96" },
      },
      "4": {
        "60": { HP: "10059", ATK: "169", DEF: "381", SP: "96" },
        "70": { HP: "11055", ATK: "186", DEF: "419", SP: "96" },
      },
      "5": {
        "70": { HP: "11741", ATK: "198", DEF: "445", SP: "144" },
        "80": { HP: "12749", ATK: "215", DEF: "483", SP: "144" },
      },
      "6": {
        "80": { HP: "13434", ATK: "226", DEF: "509", SP: "192" },
        "90": { HP: "14450", ATK: "243", DEF: "547", SP: "192" },
      },
    },
    statBuff: "CRIT Rate",
  },
  Yoimiya: {
    element: "Pyro",
    weapon: "Bow",
    stats: {
      "0": {
        "1": { HP: "791", ATK: "25", DEF: "47", SP: "" },
        "20": { HP: "2052", ATK: "65", DEF: "124", SP: "" },
      },
      "1": {
        "20": { HP: "2730", ATK: "86", DEF: "165", SP: "" },
        "40": { HP: "4086", ATK: "129", DEF: "247", SP: "" },
      },
      "2": {
        "40": { HP: "4568", ATK: "145", DEF: "276", SP: "48" },
        "50": { HP: "5256", ATK: "166", DEF: "317", SP: "48" },
      },
      "3": {
        "50": { HP: "5898", ATK: "187", DEF: "356", SP: "96" },
        "60": { HP: "6593", ATK: "209", DEF: "398", SP: "96" },
      },
      "4": {
        "60": { HP: "7075", ATK: "224", DEF: "428", SP: "96" },
        "70": { HP: "7776", ATK: "247", DEF: "470", SP: "96" },
      },
      "5": {
        "70": { HP: "8258", ATK: "262", DEF: "499", SP: "144" },
        "80": { HP: "8967", ATK: "284", DEF: "542", SP: "144" },
      },
      "6": {
        "80": { HP: "9449", ATK: "300", DEF: "571", SP: "192" },
        "90": { HP: "10164", ATK: "322", DEF: "614", SP: "192" },
      },
    },
    statBuff: "CRIT Rate",
  },
  YunJin: {
    element: "Geo",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "893", ATK: "16", DEF: "61", SP: "" },
        "20": { HP: "2295", ATK: "41", DEF: "158", SP: "" },
      },
      "1": {
        "20": { HP: "2963", ATK: "53", DEF: "204", SP: "" },
        "40": { HP: "4438", ATK: "79", DEF: "305", SP: "" },
      },
      "2": {
        "40": { HP: "4912", ATK: "88", DEF: "338", SP: "67" },
        "50": { HP: "5650", ATK: "101", DEF: "389", SP: "67" },
      },
      "3": {
        "50": { HP: "6283", ATK: "112", DEF: "432", SP: "134" },
        "60": { HP: "7021", ATK: "125", DEF: "483", SP: "134" },
      },
      "4": {
        "60": { HP: "7495", ATK: "134", DEF: "516", SP: "134" },
        "70": { HP: "8232", ATK: "147", DEF: "567", SP: "134" },
      },
      "5": {
        "70": { HP: "8706", ATK: "156", DEF: "599", SP: "201" },
        "80": { HP: "9445", ATK: "169", DEF: "650", SP: "201" },
      },
      "6": {
        "80": { HP: "9919", ATK: "177", DEF: "683", SP: "268" },
        "90": { HP: "10657", ATK: "191", DEF: "734", SP: "268" },
      },
    },
    statBuff: "Energy Recharge",
  },
  Zhongli: {
    element: "Geo",
    weapon: "Polearm",
    stats: {
      "0": {
        "1": { HP: "1143", ATK: "19", DEF: "57", SP: "" },
        "20": { HP: "2967", ATK: "50", DEF: "148", SP: "" },
      },
      "1": {
        "20": { HP: "3948", ATK: "67", DEF: "198", SP: "" },
        "40": { HP: "5908", ATK: "100", DEF: "296", SP: "" },
      },
      "2": {
        "40": { HP: "6604", ATK: "112", DEF: "331", SP: "72" },
        "50": { HP: "7599", ATK: "129", DEF: "381", SP: "72" },
      },
      "3": {
        "50": { HP: "8528", ATK: "145", DEF: "428", SP: "144" },
        "60": { HP: "9532", ATK: "162", DEF: "478", SP: "144" },
      },
      "4": {
        "60": { HP: "10229", ATK: "174", DEF: "513", SP: "144" },
        "70": { HP: "11243", ATK: "192", DEF: "564", SP: "144" },
      },
      "5": {
        "70": { HP: "11940", ATK: "204", DEF: "599", SP: "216" },
        "80": { HP: "12965", ATK: "221", DEF: "650", SP: "216" },
      },
      "6": {
        "80": { HP: "13662", ATK: "233", DEF: "685", SP: "288" },
        "90": { HP: "14695", ATK: "251", DEF: "737", SP: "288" },
      },
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
