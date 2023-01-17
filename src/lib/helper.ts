import type { SubstatKey } from "src/types/good";

/**
 * Internally artifact values contian 2 decimals
 *
 * For flat stat substats (atk, def, hp), in-game these are displayed as whole numbers
 *
 * For everything else, these are displayed as rounded to the nearest tenths
 *
 * @param key the substat key (or _ for undefined artifacts)
 * @param value the raw substat value
 * @returns the substat value as displayed in game
 */
export const roundSubStat = (key: SubstatKey | '_', value: number) => {
	if (key === 'atk' || key === 'def' || key === 'hp' || key === 'eleMas') {
		return Math.round(value).toString();
	} else if (key === '_') {
		return '0';
	} else {
		return (Math.round(value * 10) / 10).toString();
	}
};

/**
 * @param arr - list of numbers
 * @returns - all combinations of arr, with repetition
 */
export function ssCombRep(arr: number[], substat: SubstatKey) {
	let final: number[] = [];
	// base value + max of 4 additional rolls = 5
	const MAX_ROLLS = 5;
	for (let l = 1; l <= MAX_ROLLS; l++) {
		let data = Array(l);
		let results = [];
		(function f(pos, start) {
			if (pos === l) {
				results.push(data.slice());
				return;
			}
			for (let i = start; i < MAX_ROLLS; ++i) {
				data[pos] = arr[i];
				f(pos + 1, i);
			}
		})(0, 0);
		results = results.map((arr) => arr.reduce((a, b) => a + b, 0));
		final = [...final, ...results];
	}
	return [...new Set([0, ...final].sort((a, b) => a - b).map((v) => roundSubStat(substat, v)))];
}

/**
 * Converts a string to a valid GOOD key
 * @param str
 * @returns valid GOOD key
 */
export function toGoodKey(str: string) {
	return str
		.replace(/"|'|-/g, '') // remove invalid characters
		.split(' ') // split by word
		.map((w) => w[0].toUpperCase() + w.substring(1)) // make first letter of each word capital
		.join(''); // rejoin
}

/**
 *
 * @param arr array of input values
 * @returns object with each array value as a key mapping to a number
 */
export function toIdedObj<T extends string>(arr: T[]) {
	const obj = arr.reduce((obj, curr, i) => {
		obj[curr] = i + 1;
		return obj;
	}, {} as { [key in T | '_']: number });
	obj['_'] = 0;
	return obj;
}

/**
 * @param number base 2 number
 * @param length required length of the number
 * @returns input number with the required number of 0's padded to the start
 */
export function binPad(number: string | number, length: number) {
	if (typeof number === 'string') {
		return '0'.repeat(length).substr(number.length) + number;
	} else {
		const n = number.toString(2);
		return '0'.repeat(length).substr(n.length) + n;
	}
}

/**
 * Truncates a character name with long prefixes
 * i.e.: 
 * SangonomiaKokomi -> Kokomi
 * YunJin -> Yun Jin
 * KujoSara -> Kujo Sara
 * 
 * @param name - character name
 * @returns - character name which is truncated if the prefix is to long (>= 8 characters)
 */
export function truncateName(name: string) {
	const parts = name.match(/[A-Z][a-z]+/g);
	if (parts && parts.length == 2 && parts[0].length >= 8) {
		return parts[1];
	} else if (parts && parts.length == 2) {
		return parts.join(' ');
	} else if (parts) {
		return parts.join(' ');
	} else {
		return name;
	}
}