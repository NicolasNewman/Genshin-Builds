import type { IGOOD } from '../../types/good';
import { encode as buildEncode, decode as buildDecode } from './buildEncode';
import { encode as invEncode, decode as invDecode } from './invEncode';

/*====================*
 *       Encode       *
 *====================*/
type BuildEncode = ReturnType<typeof buildEncode>;
type InvEncode = ReturnType<typeof invEncode>;
export type EncodedBuild = BuildEncode | InvEncode;
export function isBuildEncode(t: EncodedBuild): t is BuildEncode {
	return typeof t === 'string';
}
export function isInvEncode(t: EncodedBuild): t is InvEncode {
	const temp = t as InvEncode;
	return typeof t !== 'string' && t.characters !== null && t.weapons !== null;
}
export function encode(good: IGOOD, mode: 'build'): BuildEncode;
export function encode(good: IGOOD, mode: 'inv'): InvEncode;
export function encode(good: IGOOD, mode: 'build' | 'inv'): BuildEncode | InvEncode {
	if (mode === 'build') {
		return buildEncode(good);
	}
	return invEncode(good);
}

/*====================*
 *       Decode       *
 *====================*/
type BuildDecode = ReturnType<typeof buildDecode>;
type InvDecode = ReturnType<typeof invDecode>;
export type DecodedBuild = BuildDecode | InvDecode;
export function isBuildDecode(t: DecodedBuild): t is BuildDecode {
	const temp = t as InvDecode;
	return !(temp.characters || temp.weapons);
}
export function isInvDecode(t: DecodedBuild): t is InvDecode {
	const temp = t as InvDecode;
	return temp.characters !== null && temp.weapons !== null;
}
export function decode(str: string): BuildDecode;
export function decode(str: string, str2: string): InvDecode;
export function decode(str: string, str2: string | null = null): BuildDecode | InvDecode {
	if (str2) {
		return invDecode(str, str2);
	}
	return buildDecode(str);
}
