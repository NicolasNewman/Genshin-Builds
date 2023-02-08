import { convertGOODtoBuild } from '$lib/build';
import {
	type CharacterKey,
	type WeaponKey,
	characters as characterList,
	characterIDs,
	weapons as weaponList,
	binPad,
	weaponIDs
} from 'shared';
import type { IGOOD } from '../../types/good';
import { b2to64, b64to2 } from './scheme';

/**
 * @param data GOOD data to encode
 * @returns encoded strings of character and weapon data
 */
export function encode(data: IGOOD) {
	console.log(data.characters);
	data.characters?.forEach((character) =>
		console.log(`${character.key}: ${characterIDs[character.key]}`)
	);
	console.log(data.weapons);
	const characters = data.characters
		?.map((character) =>
			b2to64(
				`${binPad(characterIDs[character.key].toString(2), 7)}\
                ${binPad(character.constellation.toString(2), 3)}`
			)
		)
		.join('');
	const weapons = data.weapons
		?.map((weapon) =>
			b2to64(
				`${binPad(weaponIDs[weapon.key].toString(2), 8)}\
                ${binPad(weapon.refinement.toString(2), 3)}`
			)
		)
		.join('');
	return {
		characters,
		weapons
	};
}

/**
 * @param character encoded string of characters
 * @param weapons encoded string of weapons
 * @returns decoded list of characters+constelations and weapons+refinement
 */
export function decode(characters: string, weapons: string) {
	const encodedCharacters = characters.match(/.{1,12}/g) || [];
	const encodedWeapons = weapons.match(/.{1,12}/g) || [];
	const ownedCharacters: { character: CharacterKey; constelation: number }[] =
		encodedCharacters.map((character) => {
			const bin = b64to2(character);
			const cID = parseInt(bin.substring(0, 8), 2);
			const cons = parseInt(bin.substring(8, 11), 2);
			return {
				character: characterList[cID],
				constelation: cons
			};
		});
	const ownedWeapons: { weapon: WeaponKey; refinement: number }[] = encodedWeapons.map((weapon) => {
		const bin = b64to2(weapon);
		const wID = parseInt(bin.substring(0, 9), 2);
		const refinement = parseInt(bin.substring(9, 12), 2);
		return {
			weapon: weaponList[wID],
			refinement: refinement
		};
	});
	return {
		characters: ownedCharacters,
		weapons: ownedWeapons
	};
}
