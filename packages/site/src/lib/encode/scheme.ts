// charset for base64 encoding (modified to be URL safe)
const to = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._'.split('');
const from: { [key: string]: number } = {};
// fill "from" mapping object
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
