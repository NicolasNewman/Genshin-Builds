import * as fs from 'fs';
import { Actor } from 'apify';
import { PuppeteerCrawler } from 'crawlee';

const getUrl = (character: string) => {
	return `https://genshin-impact.fandom.com/wiki/${character.split(/\.?(?=[A-Z])/).join('_')}`;
};

const toString = (arr: string[]) => arr.map((str) => `'${str}'`);

const exportData = (data: { [key: string]: any }) => {
	const names = Object.keys(data);
	const buffs: { [key: string]: number } = {};
	const elements: { [key: string]: number } = {};
	const weapons: { [key: string]: number } = {};
	Object.values<{ element: string; weapon: string; statBuff: string }>(data).forEach(
		({ element, statBuff, weapon }) => {
			buffs[statBuff] = 1;
			elements[element] = 1;
			weapons[weapon] = 1;
		}
	);

	const ts = `export type Elements = ${toString(Object.keys(elements)).join(' | ')};
export type WeaponTypes = ${toString(Object.keys(weapons)).join(' | ')};
export type StatBuffs = ${toString(Object.keys(buffs)).join(' | ')};
export type Characters = ${toString(names).join(' | ')};
export const CharacterInfo = ${JSON.stringify(data)};`;
	fs.writeFileSync('mytestfile.ts', ts);
};

(async () => {
	await Actor.init();
	const crawler = new PuppeteerCrawler({
		// Function called for each URL
		async requestHandler({ request, page, enqueueLinks }) {
			// page.on('console', async (msg) => {
			// 	const msgArgs = msg.args();
			// 	for (let i = 0; i < msgArgs.length; ++i) {
			// 		console.log(await msgArgs[i].jsonValue());
			// 	}
			// });
			console.log('Processing: ' + request.url);
			if (request.url.includes('Character')) {
				const selector = 'tbody > tr';
				await page.waitForSelector(selector);
				const characterData = (
					await page.$$eval(selector, ($$tr) => {
						return $$tr.map(($tr) => {
							if ($tr.children.length === 7) {
								const icon = $tr.children.item(0);
								const name = $tr.children.item(1);
								const element = $tr.children.item(3);
								const weapon = $tr.children.item(4);
								if (icon && name?.textContent && element?.textContent && weapon?.textContent) {
									const obj = {
										name: name.textContent.replace(/ |\n/g, ''),
										element: element.textContent?.replace(/ |\n/g, ''),
										weapon: weapon.textContent?.replace(/ |\n/g, '')
									};
									console.log(obj);
									if (obj.element === '' || obj.weapon === '') {
										return null;
									} else {
										return obj;
									}
								} else {
									return `Failed for: ${name?.innerHTML ?? 'undefined'}`;
								}
							}
						});
					})
				)
					.filter(
						(obj): obj is { name: string; element: string; weapon: string } =>
							obj != null && // check null & undefined
							typeof obj === 'object' &&
							obj.name != null &&
							obj.element != null &&
							obj.weapon != null
					)
					.reduce<{ [key: string]: { element: string; weapon: string } }>((prev, curr) => {
						return { ...prev, [curr.name]: { element: curr.element, weapon: curr.weapon } };
					}, {});
				const urls = Object.keys(characterData).map((key) => getUrl(key));
				console.log(urls);
				await enqueueLinks({ urls });
				await Actor.setValue('characters', characterData);
			} else {
				const selector = 'table.ascension-stats > tbody';
				await page.waitForSelector(selector);
				const character = request.url.split('/').pop()?.replace('_', '');
				const stats = await page.$eval(selector, ($tbody) => {
					const stats: { [key: string]: any } = {};
					const statBuff = $tbody.children
						.item(0)
						?.children.item(5)
						?.textContent?.replace(/^.*\((.*)\)/g, '$1');
					stats.statBuff = statBuff;
					let ascension;
					let SP;
					for (let i = 1; i < $tbody.children.length; i++) {
						const $tr = $tbody.children.item(i);
						if ($tr) {
							const len = $tr.children.length;
							if (len === 6) {
								ascension = $tr.children.item(0)?.textContent?.replace(/[^0-9]/g, '');
								const level = $tr.children.item(1)?.textContent?.split('/');
								const HP = $tr.children.item(2)?.textContent?.replace(/[^0-9]/g, '');
								const ATK = $tr.children.item(3)?.textContent?.replace(/[^0-9]/g, '');
								const DEF = $tr.children.item(4)?.textContent?.replace(/[^0-9]/g, '');
								SP = $tr.children.item(5)?.textContent?.replace(/[^0-9]/g, '');
								if (ascension && level) {
									stats[ascension] = {
										[level[0]]: { HP, ATK, DEF, SP }
									};
								}
							} else if (len === 4) {
								const level = $tr.children.item(0)?.textContent?.split('/');
								const HP = $tr.children.item(1)?.textContent?.replace(/[^0-9]/g, '');
								const ATK = $tr.children.item(2)?.textContent?.replace(/[^0-9]/g, '');
								const DEF = $tr.children.item(3)?.textContent?.replace(/[^0-9]/g, '');
								if (ascension && level) {
									stats[ascension][level[0]] = { HP, ATK, DEF, SP };
								}
							}
						}
					}
					return stats;
				});
				if (character) {
					// console.log(stats);
					const data: any = await Actor.getValue('characters');
					data[character].stats = stats;
					await Actor.setValue('characters', data);
				}
			}
		},
		maxConcurrency: 6
	});
	await crawler.run(['https://genshin-impact.fandom.com/wiki/Character']);
	const characters: { [key: string]: any } | null = await Actor.getValue('characters');
	// console.log(characters);
	if (characters) {
		exportData(characters);
	}
	await Actor.exit();
})();
