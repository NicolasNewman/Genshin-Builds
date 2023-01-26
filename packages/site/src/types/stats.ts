/**
 * File: stats
 *
 * Contains mappings of substat value combinations, organized by rarity
 */

import { ssCombRep } from '$lib/helper';
import { toIdedObj, toStringArray } from 'shared';
import type { StatKey, SubstatKey } from './good';

export const mainStatValues: { [key in StatKey]: number[] }[] = [
	{
		hp: [129, 178, 227, 275, 324],
		atk: [8, 12, 15, 18, 21],
		hp_: [3.1, 4.3, 5.5, 6.7, 7.9],
		atk_: [3.1, 4.3, 5.5, 6.7, 7.9],
		def_: [3.9, 5.4, 6.9, 8.4, 9.9],
		physical_dmg_: [3.9, 5.4, 6.9, 8.4, 9.9],
		anemo_dmg_: [3.1, 4.3, 5.5, 6.7, 7.9],
		geo_dmg_: [3.1, 4.3, 5.5, 6.7, 7.9],
		electro_dmg_: [3.1, 4.3, 5.5, 6.7, 7.9],
		hydro_dmg_: [3.1, 4.3, 5.5, 6.7, 7.9],
		pyro_dmg_: [3.1, 4.3, 5.5, 6.7, 7.9],
		cryo_dmg_: [3.1, 4.3, 5.5, 6.7, 7.9],
		dendro_dmg_: [3.1, 4.3, 5.5, 6.7, 7.9],
		eleMas: [12.6, 17.3, 22.1, 26.9, 31.6],
		enerRech_: [3.5, 4.8, 6.1, 7.5, 8.8],
		critRate_: [2.1, 2.9, 3.7, 4.5, 5.3],
		critDMG_: [4.2, 5.8, 7.4, 9.0, 10.5],
		heal_: [2.4, 3.3, 4.3, 5.2, 6.1]
	},
	{
		hp: [258, 331, 404, 478, 551],
		atk: [17, 22, 26, 31, 36],
		hp_: [4.2, 5.4, 6.6, 7.8, 9],
		atk_: [4.2, 5.4, 6.6, 7.8, 9],
		def_: [5.2, 6.7, 8.2, 9.7, 11.2],
		physical_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2],
		anemo_dmg_: [4.2, 5.4, 6.6, 7.8, 9],
		geo_dmg_: [4.2, 5.4, 6.6, 7.8, 9],
		electro_dmg_: [4.2, 5.4, 6.6, 7.8, 9],
		hydro_dmg_: [4.2, 5.4, 6.6, 7.8, 9],
		pyro_dmg_: [4.2, 5.4, 6.6, 7.8, 9],
		cryo_dmg_: [4.2, 5.4, 6.6, 7.8, 9],
		dendro_dmg_: [4.2, 5.4, 6.6, 7.8, 9],
		eleMas: [16.8, 21.5, 26.3, 31.1, 35.8],
		enerRech_: [4.7, 6, 7.3, 8.6, 9.9],
		critRate_: [2.8, 3.6, 4.4, 5.2, 6],
		critDMG_: [5.6, 7.2, 8.8, 10.4, 11.9],
		heal_: [3.2, 4.1, 5.1, 6, 6.9]
	},
	{
		hp: [430, 552, 674, 796, 918, 1040, 1162, 1283, 1405, 1527, 1649, 1771, 1893],
		atk: [28, 36, 44, 52, 60, 68, 76, 84, 91, 99, 107, 115, 123],
		hp_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		atk_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		def_: [6.6, 8.4, 10.3, 12.1, 14.0, 15.8, 17.7, 19.6, 21.4, 23.3, 25.1, 27.0, 28.8],
		physical_dmg_: [6.6, 8.4, 10.3, 12.1, 14.0, 15.8, 17.7, 19.6, 21.4, 23.3, 25.1, 27.0, 28.8],
		anemo_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		geo_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		electro_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		hydro_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		pyro_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		cryo_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		dendro_dmg_: [5.2, 6.7, 8.2, 9.7, 11.2, 12.7, 14.2, 15.6, 17.1, 18.6, 20.1, 21.6, 23.1],
		eleMas: [21.0, 26.9, 32.9, 38.8, 44.8, 50.7, 56.7, 62.6, 68.5, 74.5, 80.4, 86.4, 92.3],
		enerRech_: [5.8, 7.5, 9.1, 10.8, 12.4, 14.1, 15.7, 17.4, 19.0, 20.7, 22.3, 24.0, 25.6],
		critRate_: [3.5, 4.5, 5.5, 6.5, 7.5, 8.4, 9.4, 10.4, 11.4, 12.4, 13.4, 14.4, 15.4],
		critDMG_: [7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8],
		heal_: [4.0, 5.2, 6.3, 7.5, 8.6, 9.8, 10.9, 12.0, 13.2, 14.3, 15.5, 16.6, 17.8]
	},

	{
		hp: [
			645, 828, 1011, 1194, 1377, 1559, 1742, 1925, 2108, 2291, 2474, 2657, 2839, 3022, 3205, 3388,
			3571
		],
		atk: [42, 54, 66, 78, 90, 102, 113, 125, 137, 149, 161, 173, 185, 197, 209, 221, 232],
		hp_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		atk_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		def_: [
			7.9, 10.1, 12.3, 14.6, 16.8, 19.0, 21.2, 23.5, 25.7, 27.9, 30.2, 32.4, 34.6, 36.8, 39.1, 41.3,
			43.5
		],
		physical_dmg_: [
			7.9, 10.1, 12.3, 14.6, 16.8, 19.0, 21.2, 23.5, 25.7, 27.9, 30.2, 32.4, 34.6, 36.8, 39.1, 41.3,
			43.5
		],
		anemo_dmg_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		geo_dmg_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		electro_dmg_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		hydro_dmg_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		pyro_dmg_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		cryo_dmg_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		dendro_dmg_: [
			6.3, 8.1, 9.9, 11.6, 13.4, 15.2, 17.0, 18.8, 20.6, 22.3, 24.1, 25.9, 27.7, 29.5, 31.3, 33.0,
			34.8
		],
		eleMas: [
			25.2, 32.3, 39.4, 46.6, 53.7, 60.8, 68.0, 75.1, 82.2, 89.4, 96.5, 103.6, 110.8, 117.9, 125.0,
			132.2, 139.3
		],
		enerRech_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7
		],
		critRate_: [
			4.2, 5.4, 6.6, 7.8, 9.0, 10.1, 11.3, 12.5, 13.7, 14.9, 16.1, 17.3, 18.5, 19.7, 20.8, 22.0,
			23.2
		],
		critDMG_: [
			8.4, 10.8, 13.1, 15.5, 17.9, 20.3, 22.7, 25.0, 27.4, 29.8, 32.2, 34.5, 36.9, 39.3, 41.7, 44.1,
			46.4
		],
		heal_: [
			4.8, 6.2, 7.6, 9.0, 10.3, 11.7, 13.1, 14.4, 15.8, 17.2, 18.6, 19.9, 21.3, 22.7, 24.0, 25.4,
			26.8
		]
	},
	{
		hp: [
			717, 920, 1123, 1326, 1530, 1733, 1936, 2139, 2342, 2545, 2749, 2952, 3155, 3358, 3561, 3764,
			3967, 4171, 4374, 4577, 4780
		],
		atk: [
			47, 60, 73, 86, 100, 113, 126, 139, 152, 166, 179, 192, 205, 219, 232, 245, 258, 272, 285,
			298, 311
		],
		hp_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		atk_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		def_: [
			8.7, 11.2, 13.7, 16.2, 18.6, 21.1, 23.6, 26.1, 28.6, 31, 33.5, 36, 38.5, 40.9, 43.4, 45.9,
			48.4, 50.8, 53.3, 55.8, 58.3
		],
		physical_dmg_: [
			8.7, 11.2, 13.7, 16.2, 18.6, 21.1, 23.6, 26.1, 28.6, 31, 33.5, 36, 38.5, 40.9, 43.4, 45.9,
			48.4, 50.8, 53.3, 55.8, 58.3
		],
		anemo_dmg_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		geo_dmg_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		electro_dmg_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		hydro_dmg_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		pyro_dmg_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		cryo_dmg_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		dendro_dmg_: [
			7.0, 9.0, 11.0, 12.9, 14.9, 16.9, 18.9, 20.9, 22.8, 24.8, 26.8, 28.8, 30.8, 32.8, 34.7, 36.7,
			38.7, 40.7, 42.7, 44.6, 46.6
		],
		eleMas: [
			28.0, 35.9, 43.8, 51.8, 59.7, 67.6, 75.5, 83.5, 91.4, 99.3, 107.2, 115.2, 123.1, 131.0, 138.9,
			146.9, 154.8, 162.7, 170.6, 178.6, 186.5
		],
		enerRech_: [
			7.8, 10.0, 12.2, 14.4, 16.6, 18.8, 21.0, 23.2, 25.4, 27.6, 29.8, 32.0, 34.2, 36.4, 38.6, 40.8,
			43.0, 45.2, 47.4, 49.6, 51.8
		],
		critRate_: [
			4.7, 6.0, 7.3, 8.6, 9.9, 11.3, 12.6, 13.9, 15.2, 16.6, 17.9, 19.2, 20.5, 21.8, 23.2, 24.5,
			25.8, 27.1, 28.4, 29.8, 31.1
		],
		critDMG_: [
			9.3, 12.0, 14.6, 17.3, 19.9, 22.5, 25.2, 27.8, 30.5, 33.1, 35.7, 38.4, 41.0, 43.7, 46.3, 49.0,
			51.6, 54.2, 56.9, 59.6, 62.2
		],
		heal_: [
			5.4, 6.9, 8.4, 10.0, 11.5, 13.0, 14.5, 16.1, 17.6, 19.1, 20.6, 22.1, 23.7, 25.2, 26.7, 28.2,
			29.8, 31.3, 32.8, 34.3, 35.9
		]
	}
];

export const subStatValues: { [key in SubstatKey | '_']: number[] }[] = [
	{
		hp: [0], //HP
		atk: [0], //ATK
		def: [0], //DEF
		hp_: [0], //HP%
		atk_: [0], //ATK%
		def_: [0], //DEF%
		eleMas: [0], //Elemental Mastery
		enerRech_: [0], //Energy Recharge
		critRate_: [0], //Crit Rate
		critDMG_: [0], //Crit DMG
		_: [0]
	},
	{
		// *
		hp: [0, ...ssCombRep([23.9, 29.88], 'hp')], //HP
		atk: [0, ...ssCombRep([1.56, 1.95], 'atk')], //ATK
		def: [0, ...ssCombRep([1.85, 2.31], 'def')], //DEF
		hp_: [0, ...ssCombRep([1.17, 1.46], 'hp_')], //HP%
		atk_: [0, ...ssCombRep([1.17, 1.46], 'atk_')], //ATK%
		def_: [0, ...ssCombRep([1.46, 1.82], 'def_')], //DEF%
		eleMas: [0, ...ssCombRep([4.66, 5.83], 'eleMas')], //Elemental Mastery
		enerRech_: [0, ...ssCombRep([1.3, 1.62], 'enerRech_')], //Energy Recharge
		critRate_: [0, ...ssCombRep([0.78, 0.97], 'critRate_')], //Crit Rate
		critDMG_: [0, ...ssCombRep([1.55, 1.94], 'critDMG_')], //Crit DMG
		_: [0]
	},
	{
		// **
		hp: [0, ...ssCombRep([50.19, 60.95, 71.7], 'hp')], //HP
		atk: [0, ...ssCombRep([3.27, 3.97, 4.67], 'atk')], //ATK
		def: [0, ...ssCombRep([3.89, 4.72, 5.56], 'def')], //DEF
		hp_: [0, ...ssCombRep([1.63, 1.98, 2.33], 'hp_')], //HP%
		atk_: [0, ...ssCombRep([1.63, 1.98, 2.33], 'atk_')], //ATK%
		def_: [0, ...ssCombRep([2.04, 2.48, 2.91], 'def_')], //DEF%
		eleMas: [0, ...ssCombRep([6.53, 7.93, 9.33], 'eleMas')], //Elemental Mastery
		enerRech_: [0, ...ssCombRep([1.81, 2.2, 2.59], 'enerRech_')], //Energy Recharge
		critRate_: [0, ...ssCombRep([1.09, 1.32, 1.55], 'critRate_')], //Crit Rate
		critDMG_: [0, ...ssCombRep([2.18, 2.64, 3.11], 'critDMG_')], //Crit DMG
		_: [0]
	},
	{
		// ***
		hp: [0, ...ssCombRep([100.38, 114.72, 129.06, 143.4], 'hp')], //HP
		atk: [0, ...ssCombRep([6.54, 7.47, 8.4, 9.34], 'atk')], //ATK
		def: [0, ...ssCombRep([7.78, 8.89, 10, 11.11], 'def')], //DEF
		hp_: [0, ...ssCombRep([2.45, 2.8, 3.15, 3.5], 'hp_')], //HP%
		atk_: [0, ...ssCombRep([2.45, 2.8, 3.15, 3.5], 'atk_')], //ATK%
		def_: [0, ...ssCombRep([3.06, 3.5, 3.93, 4.37], 'def_')], //DEF%
		eleMas: [0, ...ssCombRep([9.79, 11.19, 12.59, 13.99], 'eleMas')], //Elemental Mastery
		enerRech_: [0, ...ssCombRep([2.72, 3.11, 3.5, 3.89], 'enerRech_')], //Energy Recharge
		critRate_: [0, ...ssCombRep([1.63, 1.86, 2.1, 2.33], 'critRate_')], //Crit Rate
		critDMG_: [0, ...ssCombRep([3.26, 3.73, 4.2, 4.66], 'critDMG_')], //Crit DMG
		_: [0]
	},
	{
		// ****
		hp: [0, ...ssCombRep([167.3, 191.2, 215.1, 239], 'hp')], //HP
		atk: [0, ...ssCombRep([10.89, 12.45, 14, 15.56], 'atk')], //ATK
		def: [0, ...ssCombRep([12.96, 14.82, 16.67, 18.52], 'def')], //DEF
		hp_: [0, ...ssCombRep([3.26, 3.73, 4.2, 4.66], 'hp_')], //HP%
		atk_: [0, ...ssCombRep([3.26, 3.73, 4.2, 4.66], 'atk_')], //ATK%
		def_: [0, ...ssCombRep([4.08, 4.66, 5.25, 5.83], 'def_')], //DEF%
		eleMas: [0, ...ssCombRep([13.06, 14.92, 16.79, 18.56], 'eleMas')], //Elemental Mastery
		enerRech_: [0, ...ssCombRep([3.63, 4.14, 4.66, 5.18], 'enerRech_')], //Energy Recharge
		critRate_: [0, ...ssCombRep([2.18, 2.49, 2.8, 3.11], 'critRate_')], //Crit Rate
		critDMG_: [0, ...ssCombRep([4.35, 4.97, 5.6, 6.22], 'critDMG_')], //Crit DMG
		_: [0]
	},
	{
		// ******
		hp: [0, ...ssCombRep([209.13, 239, 268.88, 298.75], 'hp')], //HP
		atk: [0, ...ssCombRep([13.62, 15.56, 17.51, 19.45], 'atk')], //ATK
		def: [0, ...ssCombRep([16.2, 18.52, 20.83, 23.15], 'def')], //DEF
		hp_: [0, ...ssCombRep([4.08, 4.66, 5.25, 5.83], 'hp_')], //HP%
		atk_: [0, ...ssCombRep([4.08, 4.66, 5.25, 5.83], 'atk_')], //ATK%
		def_: [0, ...ssCombRep([5.1, 5.83, 6.56, 7.29], 'def_')], //DEF%
		eleMas: [0, ...ssCombRep([16.32, 18.65, 20.98, 23.31], 'eleMas')], //Elemental Mastery
		enerRech_: [0, ...ssCombRep([4.53, 5.18, 5.83, 6.48], 'enerRech_')], //Energy Recharge
		critRate_: [0, ...ssCombRep([2.72, 3.11, 3.5, 3.89], 'critRate_')], //Crit Rate
		critDMG_: [0, ...ssCombRep([5.44, 6.22, 6.99, 7.77], 'critDMG_')], //Crit DMG
		_: [0]
	}
];

/**
 * Contains a mapping of every substat value that can appear for each rarity
 *
 * index 0 = UNDEFINED mapping
 *
 * index 1 = rarity 0 (common)
 *
 * ...
 *
 * index 5 = rarity 4 (legendary)
 */
export const subStatValueIDs: { [key in SubstatKey | '_']: { [key: string]: number } }[] = [
	{
		hp: { _: 0 }, //HP
		atk: { _: 0 }, //ATK
		def: { _: 0 }, //DEF
		hp_: { _: 0 }, //HP%
		atk_: { _: 0 }, //ATK%
		def_: { _: 0 }, //DEF%
		eleMas: { _: 0 }, //Elemental Mastery
		enerRech_: { _: 0 }, //Energy Recharge
		critRate_: { _: 0 }, //Crit Rate
		critDMG_: { _: 0 }, //Crit DMG
		_: { _: 0, 0: 0 }
	},
	{
		// *
		hp: toIdedObj(toStringArray(ssCombRep([23.9, 29.88], 'hp'))), //HP
		atk: toIdedObj(toStringArray(ssCombRep([1.56, 1.95], 'atk'))), //ATK
		def: toIdedObj(toStringArray(ssCombRep([1.85, 2.31], 'def'))), //DEF
		hp_: toIdedObj(toStringArray(ssCombRep([1.17, 1.46], 'hp_'))), //HP%
		atk_: toIdedObj(toStringArray(ssCombRep([1.17, 1.46], 'atk_'))), //ATK%
		def_: toIdedObj(toStringArray(ssCombRep([1.46, 1.82], 'def_'))), //DEF%
		eleMas: toIdedObj(toStringArray(ssCombRep([4.66, 5.83], 'eleMas'))), //Elemental Mastery
		enerRech_: toIdedObj(toStringArray(ssCombRep([1.3, 1.62], 'enerRech_'))), //Energy Recharge
		critRate_: toIdedObj(toStringArray(ssCombRep([0.78, 0.97], 'critRate_'))), //Crit Rate
		critDMG_: toIdedObj(toStringArray(ssCombRep([1.55, 1.94], 'critDMG_'))), //Crit DMG
		_: { _: 0, 0: 0 }
	},
	{
		// **
		hp: toIdedObj(toStringArray(ssCombRep([50.19, 60.95, 71.7], 'hp'))), //HP
		atk: toIdedObj(toStringArray(ssCombRep([3.27, 3.97, 4.67], 'atk'))), //ATK
		def: toIdedObj(toStringArray(ssCombRep([3.89, 4.72, 5.56], 'def'))), //DEF
		hp_: toIdedObj(toStringArray(ssCombRep([1.63, 1.98, 2.33], 'hp_'))), //HP%
		atk_: toIdedObj(toStringArray(ssCombRep([1.63, 1.98, 2.33], 'atk_'))), //ATK%
		def_: toIdedObj(toStringArray(ssCombRep([2.04, 2.48, 2.91], 'def_'))), //DEF%
		eleMas: toIdedObj(toStringArray(ssCombRep([6.53, 7.93, 9.33], 'eleMas'))), //Elemental Mastery
		enerRech_: toIdedObj(toStringArray(ssCombRep([1.81, 2.2, 2.59], 'enerRech_'))), //Energy Recharge
		critRate_: toIdedObj(toStringArray(ssCombRep([1.09, 1.32, 1.55], 'critRate_'))), //Crit Rate
		critDMG_: toIdedObj(toStringArray(ssCombRep([2.18, 2.64, 3.11], 'critDMG_'))), //Crit DMG
		_: { _: 0, 0: 0 }
	},
	{
		// ***
		hp: toIdedObj(toStringArray(ssCombRep([100.38, 114.72, 129.06, 143.4], 'hp'))), //HP
		atk: toIdedObj(toStringArray(ssCombRep([6.54, 7.47, 8.4, 9.34], 'atk'))), //ATK
		def: toIdedObj(toStringArray(ssCombRep([7.78, 8.89, 10, 11.11], 'def'))), //DEF
		hp_: toIdedObj(toStringArray(ssCombRep([2.45, 2.8, 3.15, 3.5], 'hp_'))), //HP%
		atk_: toIdedObj(toStringArray(ssCombRep([2.45, 2.8, 3.15, 3.5], 'atk_'))), //ATK%
		def_: toIdedObj(toStringArray(ssCombRep([3.06, 3.5, 3.93, 4.37], 'def_'))), //DEF%
		eleMas: toIdedObj(toStringArray(ssCombRep([9.79, 11.19, 12.59, 13.99], 'eleMas'))), //Elemental Mastery
		enerRech_: toIdedObj(toStringArray(ssCombRep([2.72, 3.11, 3.5, 3.89], 'enerRech_'))), //Energy Recharge
		critRate_: toIdedObj(toStringArray(ssCombRep([1.63, 1.86, 2.1, 2.33], 'critRate_'))), //Crit Rate
		critDMG_: toIdedObj(toStringArray(ssCombRep([3.26, 3.73, 4.2, 4.66], 'critDMG_'))), //Crit DMG
		_: { _: 0, 0: 0 }
	},
	{
		// ****
		hp: toIdedObj(toStringArray(ssCombRep([167.3, 191.2, 215.1, 239], 'hp'))), //HP
		atk: toIdedObj(toStringArray(ssCombRep([10.89, 12.45, 14, 15.56], 'atk'))), //ATK
		def: toIdedObj(toStringArray(ssCombRep([12.96, 14.82, 16.67, 18.52], 'def'))), //DEF
		hp_: toIdedObj(toStringArray(ssCombRep([3.26, 3.73, 4.2, 4.66], 'hp_'))), //HP%
		atk_: toIdedObj(toStringArray(ssCombRep([3.26, 3.73, 4.2, 4.66], 'atk_'))), //ATK%
		def_: toIdedObj(toStringArray(ssCombRep([4.08, 4.66, 5.25, 5.83], 'def_'))), //DEF%
		eleMas: toIdedObj(toStringArray(ssCombRep([13.06, 14.92, 16.79, 18.56], 'eleMas'))), //Elemental Mastery
		enerRech_: toIdedObj(toStringArray(ssCombRep([3.63, 4.14, 4.66, 5.18], 'enerRech_'))), //Energy Recharge
		critRate_: toIdedObj(toStringArray(ssCombRep([2.18, 2.49, 2.8, 3.11], 'critRate_'))), //Crit Rate
		critDMG_: toIdedObj(toStringArray(ssCombRep([4.35, 4.97, 5.6, 6.22], 'critDMG_'))), //Crit DMG
		_: { _: 0, 0: 0 }
	},
	{
		// ******
		hp: toIdedObj(toStringArray(ssCombRep([209.13, 239, 268.88, 298.75], 'hp'))), //HP
		atk: toIdedObj(toStringArray(ssCombRep([13.62, 15.56, 17.51, 19.45], 'atk'))), //ATK
		def: toIdedObj(toStringArray(ssCombRep([16.2, 18.52, 20.83, 23.15], 'def'))), //DEF
		hp_: toIdedObj(toStringArray(ssCombRep([4.08, 4.66, 5.25, 5.83], 'hp_'))), //HP%
		atk_: toIdedObj(toStringArray(ssCombRep([4.08, 4.66, 5.25, 5.83], 'atk_'))), //ATK%
		def_: toIdedObj(toStringArray(ssCombRep([5.1, 5.83, 6.56, 7.29], 'def_'))), //DEF%
		eleMas: toIdedObj(toStringArray(ssCombRep([16.32, 18.65, 20.98, 23.31], 'eleMas'))), //Elemental Mastery
		enerRech_: toIdedObj(toStringArray(ssCombRep([4.53, 5.18, 5.83, 6.48], 'enerRech_'))), //Energy Recharge
		critRate_: toIdedObj(toStringArray(ssCombRep([2.72, 3.11, 3.5, 3.89], 'critRate_'))), //Crit Rate
		critDMG_: toIdedObj(toStringArray(ssCombRep([5.44, 6.22, 6.99, 7.77], 'critDMG_'))), //Crit DMG
		_: { _: 0, 0: 0 }
	}
];
// console.log(subStatValueIDs);
