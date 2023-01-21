import * as fs from 'fs';
import { Actor } from 'apify';
import { PuppeteerCrawler } from 'crawlee';

function toGoodKey(str: string) {
	return str
		.replace(/"|'|-|_/g, '') // remove invalid characters
		.split(' ') // split by word
		.map((w) => w[0].toUpperCase() + w.substring(1)) // make first letter of each word capital
		.join(''); // rejoin
}
const getUrl = (character: string) => {
	return `https://genshin-impact.fandom.com/wiki/${character.replace(/ /g, '_')}`;
};

const toString = (arr: string[]) => arr.map((str) => `'${str}'`);

const exportData = (data: { [key: string]: any }) => {
	const names = Object.keys(data);
	const buffs: { [key: string]: number } = {};
	const types: { [key: string]: string[] } = {};
	Object.entries<{ type: string; name: string; statBuff: string }>(data).forEach(
		([key, { name, statBuff, type }]) => {
			if (!types[type]) {
				types[type] = [];
			}
			types[type].push(key);
		}
	);

	const ts = `${Object.entries(types)
		.map(
			([weaponType, arr]) => `export const ${weaponType.toLocaleLowerCase()} = [${arr.toString()}];
export const ${weaponType.toLocaleLowerCase()}IDs = toIdedObj(${weaponType.toLocaleLowerCase()});`
		)
		.join('\n')}
export const WeaponInfo = ${JSON.stringify(data)}
`;
	fs.appendFileSync('mytestfile.ts', ts);
};

(async () => {
	await Actor.init();
	const crawler = new PuppeteerCrawler({
		// Function called for each URL
		async requestHandler({ request, page, enqueueLinks, crawler }) {
			// page.on('console', async (msg) => {
			// 	const msgArgs = msg.args();
			// 	for (let i = 0; i < msgArgs.length; ++i) {
			// 		console.log(await msgArgs[i].jsonValue());
			// 	}
			// });
			console.log('Processing: ' + request.url);
			if (request.url.includes('Weapon')) {
				const selector = 'tbody > tr';
				await page.waitForSelector(selector);
				const weaponData = (
					await page.$$eval(selector, ($$tr) => {
						return $$tr.map(($tr) => {
							if ($tr.children.length === 6) {
								const icon = $tr.children.item(0);
								const name = $tr.children.item(1);
								const rarity = $tr.children.item(2);
								const ATK = $tr.children.item(3);
								const STAT = $tr.children.item(4);
								if (
									icon &&
									name?.textContent &&
									name.textContent !== 'Name' &&
									// rarity?.textContent &&
									ATK?.textContent &&
									STAT?.textContent
								) {
									const weaponName = name.textContent.replace(/\n/g, '');
									const obj = {
										name: weaponName,
										key: weaponName
											.replace(/"|'|-/g, '') // remove invalid characters
											.split(' ') // split by word
											.map((w) => w[0].toUpperCase() + w.substring(1)) // make first letter of each word capital
											.join(''), // rejoin
										statBuff: STAT.textContent.replace(/ [0-9].*\n/g, '')
									};
									console.log(obj);
									return obj;
									// if (obj.element === '' || obj.weapon === '') {
									// 	return null;
									// } else {
									// 	return obj;
									// }
								} else {
									return `Failed for: ${name?.innerHTML ?? 'undefined'}`;
								}
							}
						});
					})
				)
					.filter(
						(obj): obj is { name: string; key: string; statBuff: string } =>
							obj != null && // check null & undefined
							typeof obj === 'object' &&
							obj.name != null &&
							obj.key != null &&
							obj.statBuff != null
					)
					.reduce<{ [key: string]: { name: string; statBuff: string } }>((prev, curr) => {
						return { ...prev, [curr.key]: { name: curr.name, statBuff: curr.statBuff } };
					}, {});
				const urls = Object.keys(weaponData).map((key) => getUrl(weaponData[key].name));
				console.log(weaponData);
				console.log(urls);
				await enqueueLinks({ urls });
				await Actor.setValue('weapons', weaponData);
			} else {
				const selector = 'table.ascension-stats > tbody';
				await page.waitForSelector(selector);
				const weapon = toGoodKey(
					request.url
						.split('/')
						.pop()
						?.split('_')
						.map((w) => w[0].toUpperCase() + w.substring(1))
						.join('') ?? ''
				);
				// const weapon = toGoodKey(request.url.split('/').pop()?.replace('_', '') || '');
				const stats = await page.$eval(selector, ($tbody) => {
					const stats: { [key: string]: any } = {};
					let ascension;
					for (let i = 1; i < $tbody.children.length; i++) {
						const $tr = $tbody.children.item(i);
						if ($tr) {
							const len = $tr.children.length;
							if (len === 4) {
								ascension = $tr.children.item(0)?.textContent?.replace(/[^0-9]/g, '');
								const level = $tr.children.item(1)?.textContent?.split('/');
								const ATK = $tr.children.item(2)?.textContent?.replace(/[^0-9]/g, '');
								const SP = $tr.children.item(3)?.textContent?.replace(/[^0-9]/g, '');
								if (ascension && level) {
									stats[ascension] = {
										[level[0]]: { ATK, SP }
									};
								}
							} else if (len === 3) {
								const level = $tr.children.item(0)?.textContent?.split('/');
								const ATK = $tr.children.item(1)?.textContent?.replace(/[^0-9]/g, '');
								const SP = $tr.children.item(2)?.textContent?.replace(/[^0-9]/g, '');

								if (ascension && level) {
									stats[ascension][level[0]] = { ATK, SP };
								}
							}
						}
					}
					return stats;
				});
				const selector2 = 'aside.portable-infobox > section div.wds-tab__content a:nth-child(2)';
				await page.waitForSelector(selector);
				const weaponType = await page.$eval(selector2, ($a) => {
					return $a.textContent;
				});

				if (weapon) {
					// console.log(stats);
					const data: any = await Actor.getValue('weapons');
					console.log(stats);
					console.log(weapon);
					console.log(weaponType);
					data[weapon].stats = stats;
					data[weapon].type = weaponType ?? '';
					await Actor.setValue('weapons', data);
				}
			}
		},
		maxConcurrency: 6
	});
	await crawler.run(['https://genshin-impact.fandom.com/wiki/Weapon/List']);
	const weapons: { [key: string]: any } | null = await Actor.getValue('weapons');
	console.log(weapons);
	if (weapons) {
		exportData(weapons);
	}
	await Actor.exit();
})();
