import type { SubstatKey } from '../types/good';

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
		return Math.round(value);
	} else if (key === '_') {
		return 0;
	} else {
		return Math.round(value * 10) / 10;
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
