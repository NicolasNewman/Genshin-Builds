/**
 * File: stats
 *
 * Contains mappings of substat value combinations, organized by rarity
 */

import { ssCombRep } from '$lib/helper';
import { toIdedObj } from 'shared';
import type { SubstatKey } from './good';

export const subStatValues: { [key in SubstatKey | '_']: string[] }[] = [
	{
		hp: ['0'], //HP
		atk: ['0'], //ATK
		def: ['0'], //DEF
		hp_: ['0'], //HP%
		atk_: ['0'], //ATK%
		def_: ['0'], //DEF%
		eleMas: ['0'], //Elemental Mastery
		enerRech_: ['0'], //Energy Recharge
		critRate_: ['0'], //Crit Rate
		critDMG_: ['0'], //Crit DMG
		_: ['0']
	},
	{
		// *
		hp: ['0', ...ssCombRep([23.9, 29.88], 'hp')], //HP
		atk: ['0', ...ssCombRep([1.56, 1.95], 'atk')], //ATK
		def: ['0', ...ssCombRep([1.85, 2.31], 'def')], //DEF
		hp_: ['0', ...ssCombRep([1.17, 1.46], 'hp_')], //HP%
		atk_: ['0', ...ssCombRep([1.17, 1.46], 'atk_')], //ATK%
		def_: ['0', ...ssCombRep([1.46, 1.82], 'def_')], //DEF%
		eleMas: ['0', ...ssCombRep([4.66, 5.83], 'eleMas')], //Elemental Mastery
		enerRech_: ['0', ...ssCombRep([1.3, 1.62], 'enerRech_')], //Energy Recharge
		critRate_: ['0', ...ssCombRep([0.78, 0.97], 'critRate_')], //Crit Rate
		critDMG_: ['0', ...ssCombRep([1.55, 1.94], 'critDMG_')], //Crit DMG
		_: ['0']
	},
	{
		// **
		hp: ['0', ...ssCombRep([50.19, 60.95, 71.7], 'hp')], //HP
		atk: ['0', ...ssCombRep([3.27, 3.97, 4.67], 'atk')], //ATK
		def: ['0', ...ssCombRep([3.89, 4.72, 5.56], 'def')], //DEF
		hp_: ['0', ...ssCombRep([1.63, 1.98, 2.33], 'hp_')], //HP%
		atk_: ['0', ...ssCombRep([1.63, 1.98, 2.33], 'atk_')], //ATK%
		def_: ['0', ...ssCombRep([2.04, 2.48, 2.91], 'def_')], //DEF%
		eleMas: ['0', ...ssCombRep([6.53, 7.93, 9.33], 'eleMas')], //Elemental Mastery
		enerRech_: ['0', ...ssCombRep([1.81, 2.2, 2.59], 'enerRech_')], //Energy Recharge
		critRate_: ['0', ...ssCombRep([1.09, 1.32, 1.55], 'critRate_')], //Crit Rate
		critDMG_: ['0', ...ssCombRep([2.18, 2.64, 3.11], 'critDMG_')], //Crit DMG
		_: ['0']
	},
	{
		// ***
		hp: ['0', ...ssCombRep([100.38, 114.72, 129.06, 143.4], 'hp')], //HP
		atk: ['0', ...ssCombRep([6.54, 7.47, 8.4, 9.34], 'atk')], //ATK
		def: ['0', ...ssCombRep([7.78, 8.89, 10, 11.11], 'def')], //DEF
		hp_: ['0', ...ssCombRep([2.45, 2.8, 3.15, 3.5], 'hp_')], //HP%
		atk_: ['0', ...ssCombRep([2.45, 2.8, 3.15, 3.5], 'atk_')], //ATK%
		def_: ['0', ...ssCombRep([3.06, 3.5, 3.93, 4.37], 'def_')], //DEF%
		eleMas: ['0', ...ssCombRep([9.79, 11.19, 12.59, 13.99], 'eleMas')], //Elemental Mastery
		enerRech_: ['0', ...ssCombRep([2.72, 3.11, 3.5, 3.89], 'enerRech_')], //Energy Recharge
		critRate_: ['0', ...ssCombRep([1.63, 1.86, 2.1, 2.33], 'critRate_')], //Crit Rate
		critDMG_: ['0', ...ssCombRep([3.26, 3.73, 4.2, 4.66], 'critDMG_')], //Crit DMG
		_: ['0']
	},
	{
		// ****
		hp: ['0', ...ssCombRep([167.3, 191.2, 215.1, 239], 'hp')], //HP
		atk: ['0', ...ssCombRep([10.89, 12.45, 14, 15.56], 'atk')], //ATK
		def: ['0', ...ssCombRep([12.96, 14.82, 16.67, 18.52], 'def')], //DEF
		hp_: ['0', ...ssCombRep([3.26, 3.73, 4.2, 4.66], 'hp_')], //HP%
		atk_: ['0', ...ssCombRep([3.26, 3.73, 4.2, 4.66], 'atk_')], //ATK%
		def_: ['0', ...ssCombRep([4.08, 4.66, 5.25, 5.83], 'def_')], //DEF%
		eleMas: ['0', ...ssCombRep([13.06, 14.92, 16.79, 18.56], 'eleMas')], //Elemental Mastery
		enerRech_: ['0', ...ssCombRep([3.63, 4.14, 4.66, 5.18], 'enerRech_')], //Energy Recharge
		critRate_: ['0', ...ssCombRep([2.18, 2.49, 2.8, 3.11], 'critRate_')], //Crit Rate
		critDMG_: ['0', ...ssCombRep([4.35, 4.97, 5.6, 6.22], 'critDMG_')], //Crit DMG
		_: ['0']
	},
	{
		// ******
		hp: ['0', ...ssCombRep([209.13, 239, 268.88, 298.75], 'hp')], //HP
		atk: ['0', ...ssCombRep([13.62, 15.56, 17.51, 19.45], 'atk')], //ATK
		def: ['0', ...ssCombRep([16.2, 18.52, 20.83, 23.15], 'def')], //DEF
		hp_: ['0', ...ssCombRep([4.08, 4.66, 5.25, 5.83], 'hp_')], //HP%
		atk_: ['0', ...ssCombRep([4.08, 4.66, 5.25, 5.83], 'atk_')], //ATK%
		def_: ['0', ...ssCombRep([5.1, 5.83, 6.56, 7.29], 'def_')], //DEF%
		eleMas: ['0', ...ssCombRep([16.32, 18.65, 20.98, 23.31], 'eleMas')], //Elemental Mastery
		enerRech_: ['0', ...ssCombRep([4.53, 5.18, 5.83, 6.48], 'enerRech_')], //Energy Recharge
		critRate_: ['0', ...ssCombRep([2.72, 3.11, 3.5, 3.89], 'critRate_')], //Crit Rate
		critDMG_: ['0', ...ssCombRep([5.44, 6.22, 6.99, 7.77], 'critDMG_')], //Crit DMG
		_: ['0']
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
		_: { _: 0, '0': 0 }
	},
	{
		// *
		hp: toIdedObj(ssCombRep([23.9, 29.88], 'hp')), //HP
		atk: toIdedObj(ssCombRep([1.56, 1.95], 'atk')), //ATK
		def: toIdedObj(ssCombRep([1.85, 2.31], 'def')), //DEF
		hp_: toIdedObj(ssCombRep([1.17, 1.46], 'hp_')), //HP%
		atk_: toIdedObj(ssCombRep([1.17, 1.46], 'atk_')), //ATK%
		def_: toIdedObj(ssCombRep([1.46, 1.82], 'def_')), //DEF%
		eleMas: toIdedObj(ssCombRep([4.66, 5.83], 'eleMas')), //Elemental Mastery
		enerRech_: toIdedObj(ssCombRep([1.3, 1.62], 'enerRech_')), //Energy Recharge
		critRate_: toIdedObj(ssCombRep([0.78, 0.97], 'critRate_')), //Crit Rate
		critDMG_: toIdedObj(ssCombRep([1.55, 1.94], 'critDMG_')), //Crit DMG
		_: { _: 0, '0': 0 }
	},
	{
		// **
		hp: toIdedObj(ssCombRep([50.19, 60.95, 71.7], 'hp')), //HP
		atk: toIdedObj(ssCombRep([3.27, 3.97, 4.67], 'atk')), //ATK
		def: toIdedObj(ssCombRep([3.89, 4.72, 5.56], 'def')), //DEF
		hp_: toIdedObj(ssCombRep([1.63, 1.98, 2.33], 'hp_')), //HP%
		atk_: toIdedObj(ssCombRep([1.63, 1.98, 2.33], 'atk_')), //ATK%
		def_: toIdedObj(ssCombRep([2.04, 2.48, 2.91], 'def_')), //DEF%
		eleMas: toIdedObj(ssCombRep([6.53, 7.93, 9.33], 'eleMas')), //Elemental Mastery
		enerRech_: toIdedObj(ssCombRep([1.81, 2.2, 2.59], 'enerRech_')), //Energy Recharge
		critRate_: toIdedObj(ssCombRep([1.09, 1.32, 1.55], 'critRate_')), //Crit Rate
		critDMG_: toIdedObj(ssCombRep([2.18, 2.64, 3.11], 'critDMG_')), //Crit DMG
		_: { _: 0, '0': 0 }
	},
	{
		// ***
		hp: toIdedObj(ssCombRep([100.38, 114.72, 129.06, 143.4], 'hp')), //HP
		atk: toIdedObj(ssCombRep([6.54, 7.47, 8.4, 9.34], 'atk')), //ATK
		def: toIdedObj(ssCombRep([7.78, 8.89, 10, 11.11], 'def')), //DEF
		hp_: toIdedObj(ssCombRep([2.45, 2.8, 3.15, 3.5], 'hp_')), //HP%
		atk_: toIdedObj(ssCombRep([2.45, 2.8, 3.15, 3.5], 'atk_')), //ATK%
		def_: toIdedObj(ssCombRep([3.06, 3.5, 3.93, 4.37], 'def_')), //DEF%
		eleMas: toIdedObj(ssCombRep([9.79, 11.19, 12.59, 13.99], 'eleMas')), //Elemental Mastery
		enerRech_: toIdedObj(ssCombRep([2.72, 3.11, 3.5, 3.89], 'enerRech_')), //Energy Recharge
		critRate_: toIdedObj(ssCombRep([1.63, 1.86, 2.1, 2.33], 'critRate_')), //Crit Rate
		critDMG_: toIdedObj(ssCombRep([3.26, 3.73, 4.2, 4.66], 'critDMG_')), //Crit DMG
		_: { _: 0, '0': 0 }
	},
	{
		// ****
		hp: toIdedObj(ssCombRep([167.3, 191.2, 215.1, 239], 'hp')), //HP
		atk: toIdedObj(ssCombRep([10.89, 12.45, 14, 15.56], 'atk')), //ATK
		def: toIdedObj(ssCombRep([12.96, 14.82, 16.67, 18.52], 'def')), //DEF
		hp_: toIdedObj(ssCombRep([3.26, 3.73, 4.2, 4.66], 'hp_')), //HP%
		atk_: toIdedObj(ssCombRep([3.26, 3.73, 4.2, 4.66], 'atk_')), //ATK%
		def_: toIdedObj(ssCombRep([4.08, 4.66, 5.25, 5.83], 'def_')), //DEF%
		eleMas: toIdedObj(ssCombRep([13.06, 14.92, 16.79, 18.56], 'eleMas')), //Elemental Mastery
		enerRech_: toIdedObj(ssCombRep([3.63, 4.14, 4.66, 5.18], 'enerRech_')), //Energy Recharge
		critRate_: toIdedObj(ssCombRep([2.18, 2.49, 2.8, 3.11], 'critRate_')), //Crit Rate
		critDMG_: toIdedObj(ssCombRep([4.35, 4.97, 5.6, 6.22], 'critDMG_')), //Crit DMG
		_: { _: 0, '0': 0 }
	},
	{
		// ******
		hp: toIdedObj(ssCombRep([209.13, 239, 268.88, 298.75], 'hp')), //HP
		atk: toIdedObj(ssCombRep([13.62, 15.56, 17.51, 19.45], 'atk')), //ATK
		def: toIdedObj(ssCombRep([16.2, 18.52, 20.83, 23.15], 'def')), //DEF
		hp_: toIdedObj(ssCombRep([4.08, 4.66, 5.25, 5.83], 'hp_')), //HP%
		atk_: toIdedObj(ssCombRep([4.08, 4.66, 5.25, 5.83], 'atk_')), //ATK%
		def_: toIdedObj(ssCombRep([5.1, 5.83, 6.56, 7.29], 'def_')), //DEF%
		eleMas: toIdedObj(ssCombRep([16.32, 18.65, 20.98, 23.31], 'eleMas')), //Elemental Mastery
		enerRech_: toIdedObj(ssCombRep([4.53, 5.18, 5.83, 6.48], 'enerRech_')), //Energy Recharge
		critRate_: toIdedObj(ssCombRep([2.72, 3.11, 3.5, 3.89], 'critRate_')), //Crit Rate
		critDMG_: toIdedObj(ssCombRep([5.44, 6.22, 6.99, 7.77], 'critDMG_')), //Crit DMG
		_: { _: 0, '0': 0 }
	}
];
// console.log(subStatValueIDs);
