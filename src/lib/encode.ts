/**
 * File: encode
 *
 * Contains encoding/decoding and base 2<->64 conversion functions
 */
import type { IBuild } from '../types/build';
import type { IGOOD } from '../types/good';
import { subStatValueIDs, subStatValues } from '../types/stats';
import { convertGOODtoBuild } from './build';
import {
	artifactIDs,
	artifactMS,
	artifactMSIDs,
	artifacts,
	artifactSS,
	artifactSSIDs,
	characterIDs,
	characters,
	characterWeaponIDs,
	characterWeapons,
} from './db';
import { binPad } from './helper';

// charset for base64 encoding (modified to be URL safe)
const to = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._'.split('');
const from: { [key: string]: number } = {};
// fill from mapping object
to.forEach((char, i) => (from[char] = i));

/**
 *
 * @param b2 base 2 string
 * @returns base 64 encoded string
 */
export function b2to64(b2: string) {
	return (b2.match(/.{1,6}/g) || []).map((n) => to[parseInt(n, 2)]).join('');
}

/**
 *
 * @param b64 base 64 string
 * @returns base 2 encoded string
 */
export function b64to2(b64: string) {
	return b64
		.split('')
		.map((n) => ('00000' + from[n].toString(2)).slice(-6))
		.join('');
}

/**
 *
 * @param data data imported from GOOD file
 * @returns string encoding of every character included in the GOOD data
 */
export function encode(data: IGOOD) {
	let builds = convertGOODtoBuild(data);
	const binaryBuilds = builds.map<string>((build) => {
		const str = `${binPad(characterIDs[build.character.character].toString(2), 7)}\
${binPad(build.character.ascension.toString(2), 3)}\
${binPad(build.character.level.toString(2), 7)}\
${binPad(build.character.talent.auto.toString(2), 4)}\
${binPad(build.character.talent.skill.toString(2), 4)}\
${binPad(build.character.talent.burst.toString(2), 4)}\
${binPad(build.character.constelation.toString(2), 3)}\
${binPad(characterWeaponIDs[build.character.character][build.weapon?.weapon || '_']?.toString(2) ?? 0, 6)}\
${binPad(build.weapon?.ascension.toString(2) ?? 0, 3)}\
${binPad(build.weapon?.level.toString(2) ?? 0, 7)}\
${binPad(build.weapon?.refinement.toString(2) ?? 0, 3)}\
${binPad(artifactIDs[build.artifacts.flower?.set || '_'].toString(2) ?? 0, 6)}\
${binPad(build.artifacts.flower?.level.toString(2) ?? 0, 5)}\
${binPad(build.artifacts.flower?.rarity.toString(2) ?? 0, 3)}\
${binPad(artifactSSIDs[build.artifacts.flower?.substatOne || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.flower?.rarity ?? -1) + 1][build.artifacts.flower?.substatOne ?? '_'][
		build.artifacts.flower?.substatOneRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.flower?.substatTwo || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.flower?.rarity ?? -1) + 1][build.artifacts.flower?.substatTwo ?? '_'][
		build.artifacts.flower?.substatTwoRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.flower?.substatThree || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.flower?.rarity ?? -1) + 1][build.artifacts.flower?.substatThree ?? '_'][
		build.artifacts.flower?.substatThreeRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.flower?.substatFour || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.flower?.rarity ?? -1) + 1][build.artifacts.flower?.substatFour ?? '_'][
		build.artifacts.flower?.substatFourRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactIDs[build.artifacts.plume?.set || '_'].toString(2) ?? 0, 6)}\
${binPad(build.artifacts.plume?.level.toString(2) ?? 0, 5)}\
${binPad(build.artifacts.plume?.rarity.toString(2) ?? 0, 3)}\
${binPad(artifactSSIDs[build.artifacts.plume?.substatOne || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.plume?.rarity ?? -1) + 1][build.artifacts.plume?.substatOne ?? '_'][
		build.artifacts.plume?.substatOneRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.plume?.substatTwo || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.plume?.rarity ?? -1) + 1][build.artifacts.plume?.substatTwo ?? '_'][
		build.artifacts.plume?.substatTwoRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.plume?.substatThree || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.plume?.rarity ?? -1) + 1][build.artifacts.plume?.substatThree ?? '_'][
		build.artifacts.plume?.substatThreeRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.plume?.substatFour || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.plume?.rarity ?? -1) + 1][build.artifacts.plume?.substatFour ?? '_'][
		build.artifacts.plume?.substatFourRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactIDs[build.artifacts.sands?.set || '_'].toString(2) ?? 0, 6)}\
${binPad(build.artifacts.sands?.level.toString(2) ?? 0, 5)}\
${binPad(build.artifacts.sands?.rarity.toString(2) ?? 0, 3)}\
${binPad(artifactMSIDs[build.artifacts.sands?.mainstat || '_'].toString(2) ?? 0, 5)}\
${binPad(artifactSSIDs[build.artifacts.sands?.substatOne || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.sands?.rarity ?? -1) + 1][build.artifacts.sands?.substatOne ?? '_'][
		build.artifacts.sands?.substatOneRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.sands?.substatTwo || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.sands?.rarity ?? -1) + 1][build.artifacts.sands?.substatTwo ?? '_'][
		build.artifacts.sands?.substatTwoRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.sands?.substatThree || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.sands?.rarity ?? -1) + 1][build.artifacts.sands?.substatThree ?? '_'][
		build.artifacts.sands?.substatThreeRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.sands?.substatFour || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.sands?.rarity ?? -1) + 1][build.artifacts.sands?.substatFour ?? '_'][
		build.artifacts.sands?.substatFourRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactIDs[build.artifacts.goblet?.set || '_'].toString(2) ?? 0, 6)}\
${binPad(build.artifacts.goblet?.level.toString(2) ?? 0, 5)}\
${binPad(build.artifacts.goblet?.rarity.toString(2) ?? 0, 3)}\
${binPad(artifactMSIDs[build.artifacts.goblet?.mainstat || '_'].toString(2) ?? 0, 5)}\
${binPad(artifactSSIDs[build.artifacts.goblet?.substatOne || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.goblet?.rarity ?? -1) + 1][build.artifacts.goblet?.substatOne ?? '_'][
		build.artifacts.goblet?.substatOneRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.goblet?.substatTwo || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.goblet?.rarity ?? -1) + 1][build.artifacts.goblet?.substatTwo ?? '_'][
		build.artifacts.goblet?.substatTwoRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.goblet?.substatThree || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.goblet?.rarity ?? -1) + 1][build.artifacts.goblet?.substatThree ?? '_'][
		build.artifacts.goblet?.substatThreeRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.goblet?.substatFour || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.goblet?.rarity ?? -1) + 1][build.artifacts.goblet?.substatFour ?? '_'][
		build.artifacts.goblet?.substatFourRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactIDs[build.artifacts.circlet?.set || '_'].toString(2) ?? 0, 6)}\
${binPad(build.artifacts.circlet?.level.toString(2) ?? 0, 5)}\
${binPad(build.artifacts.circlet?.rarity.toString(2) ?? 0, 3)}\
${binPad(artifactMSIDs[build.artifacts.circlet?.mainstat || '_'].toString(2) ?? 0, 5)}\
${binPad(artifactSSIDs[build.artifacts.circlet?.substatOne || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.circlet?.rarity ?? -1) + 1][build.artifacts.circlet?.substatOne ?? '_'][
		build.artifacts.circlet?.substatOneRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.circlet?.substatTwo || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.circlet?.rarity ?? -1) + 1][build.artifacts.circlet?.substatTwo ?? '_'][
		build.artifacts.circlet?.substatTwoRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.circlet?.substatThree || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.circlet?.rarity ?? -1) + 1][build.artifacts.circlet?.substatThree ?? '_'][
		build.artifacts.circlet?.substatThreeRoll ?? '_'
	].toString(2),
	6,
)}\
${binPad(artifactSSIDs[build.artifacts.circlet?.substatFour || '_'].toString(2) ?? 0, 4)}\
${binPad(
	subStatValueIDs[(build.artifacts.circlet?.rarity ?? -1) + 1][build.artifacts.circlet?.substatFour ?? '_'][
		build.artifacts.circlet?.substatFourRoll ?? '_'
	].toString(2),
	6,
)}\
`;
		return b2to64(str);
	});
	return binaryBuilds.join('');
}

function localDecode(str: string): IBuild {
	const character = characters[parseInt(str.substring(0, 7), 2) - 1];
	const build: IBuild = {
		character: {
			character,
			ascension: parseInt(str.substring(7, 10), 2),
			level: parseInt(str.substring(10, 17), 2),
			talent: {
				auto: parseInt(str.substring(17, 21), 2),
				skill: parseInt(str.substring(21, 25), 2),
				burst: parseInt(str.substring(25, 29), 2),
			},
			constelation: parseInt(str.substring(29, 32), 2),
		},
		weapon: {
			weapon: characterWeapons[character][parseInt(str.substring(32, 38), 2) - 1],
			ascension: parseInt(str.substring(38, 41), 2),
			level: parseInt(str.substring(41, 48), 2),
			refinement: parseInt(str.substring(48, 51), 2),
		},
		artifacts: {},
	};
	// ==============================
	// |			FLOWER			|
	// ==============================
	let set = artifacts[parseInt(str.substring(51, 57), 2) - 1];
	let level = parseInt(str.substring(57, 62), 2);
	let rarity = parseInt(str.substring(62, 65), 2) + 1;

	let substatOneIndx = parseInt(str.substring(65, 69), 2);
	let substatOne = artifactSS[substatOneIndx - 1] ?? '_';
	let substatOneRoll = subStatValues[rarity][substatOne][parseInt(str.substring(69, 75), 2)].toString();

	let substatTwoIndx = parseInt(str.substring(75, 79), 2);
	let substatTwo = artifactSS[substatTwoIndx - 1] ?? '_';
	let substatTwoRoll = subStatValues[rarity][substatTwo][parseInt(str.substring(79, 85), 2)].toString();

	let substatThreeIndx = parseInt(str.substring(85, 89), 2);
	let substatThree = artifactSS[substatThreeIndx - 1] ?? '_';
	let substatThreeRoll = subStatValues[rarity][substatThree][parseInt(str.substring(89, 95), 2)].toString();

	let substatFourIndx = parseInt(str.substring(95, 99), 2);
	let substatFour = artifactSS[substatFourIndx - 1] ?? '_';
	let substatFourRoll = subStatValues[rarity][substatFour][parseInt(str.substring(99, 105), 2)].toString();

	build.artifacts.flower = {
		type: 'flower',
		set,
		level,
		rarity,
		substatOne: substatOne === '_' ? undefined : substatOne,
		substatOneRoll,
		substatTwo: substatTwo === '_' ? undefined : substatTwo,
		substatTwoRoll,
		substatThree: substatThree === '_' ? undefined : substatThree,
		substatThreeRoll,
		substatFour: substatFour === '_' ? undefined : substatFour,
		substatFourRoll,
	};

	// ==============================
	// |			PLUME			|
	// ==============================

	set = artifacts[parseInt(str.substring(105, 111), 2) - 1];
	level = parseInt(str.substring(111, 116), 2);
	rarity = parseInt(str.substring(116, 119), 2) + 1;

	substatOneIndx = parseInt(str.substring(119, 123), 2);
	substatOne = artifactSS[substatOneIndx - 1] ?? '_';
	substatOneRoll = subStatValues[rarity][substatOne][parseInt(str.substring(123, 129), 2)].toString();

	substatTwoIndx = parseInt(str.substring(129, 133), 2);
	substatTwo = artifactSS[substatTwoIndx - 1] ?? '_';
	substatTwoRoll = subStatValues[rarity][substatTwo][parseInt(str.substring(133, 139), 2)].toString();

	substatThreeIndx = parseInt(str.substring(139, 143), 2);
	substatThree = artifactSS[substatThreeIndx - 1] ?? '_';
	substatThreeRoll = subStatValues[rarity][substatThree][parseInt(str.substring(143, 149), 2)].toString();

	substatFourIndx = parseInt(str.substring(149, 153), 2);
	substatFour = artifactSS[substatFourIndx - 1] ?? '_';
	substatFourRoll = subStatValues[rarity][substatFour][parseInt(str.substring(153, 159), 2)].toString();

	build.artifacts.plume = {
		type: 'plume',
		set,
		level,
		rarity,
		substatOne: substatOne === '_' ? undefined : substatOne,
		substatOneRoll,
		substatTwo: substatTwo === '_' ? undefined : substatTwo,
		substatTwoRoll,
		substatThree: substatThree === '_' ? undefined : substatThree,
		substatThreeRoll,
		substatFour: substatFour === '_' ? undefined : substatFour,
		substatFourRoll,
	};

	// ==============================
	// |			SANDS			|
	// ==============================

	set = artifacts[parseInt(str.substring(159, 165), 2) - 1];
	level = parseInt(str.substring(165, 170), 2);
	rarity = parseInt(str.substring(170, 173), 2) + 1;
	let mainstat = artifactMS[parseInt(str.substring(173, 178), 2) - 1];

	substatOneIndx = parseInt(str.substring(178, 182), 2);
	substatOne = artifactSS[substatOneIndx - 1] ?? '_';
	substatOneRoll = subStatValues[rarity][substatOne][parseInt(str.substring(182, 188), 2)].toString();

	substatTwoIndx = parseInt(str.substring(188, 192), 2);
	substatTwo = artifactSS[substatTwoIndx - 1] ?? '_';
	substatTwoRoll = subStatValues[rarity][substatTwo][parseInt(str.substring(192, 198), 2)].toString();

	substatThreeIndx = parseInt(str.substring(198, 202), 2);
	substatThree = artifactSS[substatThreeIndx - 1] ?? '_';
	substatThreeRoll = subStatValues[rarity][substatThree][parseInt(str.substring(202, 208), 2)].toString();

	substatFourIndx = parseInt(str.substring(208, 212), 2);
	substatFour = artifactSS[substatFourIndx - 1] ?? '_';
	substatFourRoll = subStatValues[rarity][substatFour][parseInt(str.substring(212, 218), 2)].toString();

	build.artifacts.sands = {
		type: 'sands',
		set,
		level,
		rarity,
		mainstat,
		substatOne: substatOne === '_' ? undefined : substatOne,
		substatOneRoll,
		substatTwo: substatTwo === '_' ? undefined : substatTwo,
		substatTwoRoll,
		substatThree: substatThree === '_' ? undefined : substatThree,
		substatThreeRoll,
		substatFour: substatFour === '_' ? undefined : substatFour,
		substatFourRoll,
	};

	// ==============================
	// |			GOBLET			|
	// ==============================
	set = artifacts[parseInt(str.substring(218, 224), 2) - 1];
	level = parseInt(str.substring(224, 229), 2);
	rarity = parseInt(str.substring(229, 232), 2) + 1;
	mainstat = artifactMS[parseInt(str.substring(232, 237), 2) - 1];

	substatOneIndx = parseInt(str.substring(237, 241), 2);
	substatOne = artifactSS[substatOneIndx - 1] ?? '_';
	substatOneRoll = subStatValues[rarity][substatOne][parseInt(str.substring(241, 247), 2)].toString();

	substatTwoIndx = parseInt(str.substring(247, 251), 2);
	substatTwo = artifactSS[substatTwoIndx - 1] ?? '_';
	substatTwoRoll = subStatValues[rarity][substatTwo][parseInt(str.substring(251, 257), 2)].toString();

	substatThreeIndx = parseInt(str.substring(257, 261), 2);
	substatThree = artifactSS[substatThreeIndx - 1] ?? '_';
	substatThreeRoll = subStatValues[rarity][substatThree][parseInt(str.substring(261, 267), 2)].toString();

	substatFourIndx = parseInt(str.substring(267, 271), 2);
	substatFour = artifactSS[substatFourIndx - 1] ?? '_';
	substatFourRoll = subStatValues[rarity][substatFour][parseInt(str.substring(271, 277), 2)].toString();

	build.artifacts.goblet = {
		type: 'goblet',
		set,
		level,
		rarity,
		mainstat,
		substatOne: substatOne === '_' ? undefined : substatOne,
		substatOneRoll,
		substatTwo: substatTwo === '_' ? undefined : substatTwo,
		substatTwoRoll,
		substatThree: substatThree === '_' ? undefined : substatThree,
		substatThreeRoll,
		substatFour: substatFour === '_' ? undefined : substatFour,
		substatFourRoll,
	};
	// ==============================
	// |			CIRCLET			|
	// ==============================
	set = artifacts[parseInt(str.substring(277, 283), 2) - 1];
	level = parseInt(str.substring(283, 288), 2);
	rarity = parseInt(str.substring(288, 291), 2) + 1;
	mainstat = artifactMS[parseInt(str.substring(291, 296), 2) - 1];

	substatOneIndx = parseInt(str.substring(296, 300), 2);
	substatOne = artifactSS[substatOneIndx - 1] ?? '_';
	substatOneRoll = subStatValues[rarity][substatOne][parseInt(str.substring(300, 306), 2)].toString();

	substatTwoIndx = parseInt(str.substring(306, 310), 2);
	substatTwo = artifactSS[substatTwoIndx - 1] ?? '_';
	substatTwoRoll = subStatValues[rarity][substatTwo][parseInt(str.substring(310, 316), 2)].toString();

	substatThreeIndx = parseInt(str.substring(316, 320), 2);
	substatThree = artifactSS[substatThreeIndx - 1] ?? '_';
	substatThreeRoll = subStatValues[rarity][substatThree][parseInt(str.substring(320, 326), 2)].toString();

	substatFourIndx = parseInt(str.substring(326, 330), 2);
	substatFour = artifactSS[substatFourIndx - 1] ?? '_';
	substatFourRoll = subStatValues[rarity][substatFour][parseInt(str.substring(330, 336), 2)].toString();

	build.artifacts.circlet = {
		type: 'circlet',
		set,
		level,
		rarity,
		mainstat,
		substatOne: substatOne === '_' ? undefined : substatOne,
		substatOneRoll,
		substatTwo: substatTwo === '_' ? undefined : substatTwo,
		substatTwoRoll,
		substatThree: substatThree === '_' ? undefined : substatThree,
		substatThreeRoll,
		substatFour: substatFour === '_' ? undefined : substatFour,
		substatFourRoll,
	};

	return build;
}

/**
 * @param str encoded string of character data
 * @returns decoded character builds
 */
export function decode(str: string) {
	const characters = str.match(/.{1,56}/g) || [];
	const decodedCharacters = characters.map((character) => localDecode(b64to2(character)));
	return decodedCharacters;
}
