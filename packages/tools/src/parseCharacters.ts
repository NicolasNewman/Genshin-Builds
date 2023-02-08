import * as fs from "fs";
import { Actor } from "apify";
import { PuppeteerCrawler } from "crawlee";
import { autoScroll, download, toString } from "./lib";

const getUrl = (character: string) => {
  return `https://genshin-impact.fandom.com/wiki/${character
    .split(/\.?(?=[A-Z])/)
    .join("_")}`;
};

const exportData = (data: { [key: string]: any }) => {
  const names = Object.keys(data);
  const buffs: { [key: string]: number } = {};
  const elements: { [key: string]: number } = {};
  const weapons: { [key: string]: number } = {};
  // create objects containing the ascension stat names, elements, and weapon types as fields mapped to 1
  Object.values<{ element: string; weapon: string; statBuff: string }>(
    data
  ).forEach(({ element, statBuff, weapon }) => {
    buffs[statBuff] = 1;
    elements[element] = 1;
    weapons[weapon] = 1;
  });

  /*  1) export type ...
   *      Create union types of Elements, WeaponTypes, StatBuffs, and CharacterKeys
   *  2) export const characters ...
   *      Create an array containing each characters name
   *  3) export const characterIds ...
   *      Create an object mapping character names to IDs
   *  4) export const characterWeapons ...
   *      Create an object mapping character names to the array of their weapon type
   *  5) export const characterInfo ...
   *      Created an object var containing all the compiled character data
   */
  return `import { toIdedObj } from './index';
export type AscensionKey = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Element = ${toString(Object.keys(elements)).join(" | ")};
export type WeaponType = ${toString(Object.keys(weapons)).join(" | ")};
export type StatBuff = ${toString(Object.keys(buffs)).join(" | ")};
export type CharacterKey = ${toString(names).join(" | ")};
export const characters: CharacterKey[] = [${toString(names).toString()}];
\$##\$
export const characterIDs = toIdedObj(characters);
export const characterWeapons: { [key in CharacterKey]: WeaponKey[] } = {
	${Object.entries<{ element: string; weapon: string; statBuff: string }>(data)
    .map(
      ([character, { weapon }]) =>
        `${character}: ${weapon.toLocaleLowerCase()},`
    )
    .join("\n")}
};
export const characterWeaponIDs: { [key in CharacterKey]: { [key: string]: number } } = {
  ${Object.entries<{ element: string; weapon: string; statBuff: string }>(data)
    .map(
      ([character, { weapon }]) =>
        `${character}: ${weapon.toLocaleLowerCase()}IDs,`
    )
    .join("\n")}
}
export const characterInfo: {
  [key in CharacterKey]: {
    element: Element,
    weapon: WeaponType,
    statBuff: StatBuff,
    stats: {[key in AscensionKey]: {HP: number, ATK: number, DEF: number, SP: number}[]}
  }
} = ${JSON.stringify(data)};`;
};

const parseCharacters = async (threads: number = 6) => {
  const crawler = new PuppeteerCrawler({
    async requestHandler({ request, page, enqueueLinks }) {
      const dlog = (msg: any) => console.log(msg.toString());
      await page.exposeFunction("dlog", dlog);
      console.log("Processing: " + request.url);
      if (request.url.includes("Character")) {
        const selector = "tbody > tr";
        await page.waitForSelector(selector);
        await autoScroll(page);
        new Promise((r) => setTimeout(r, 60000));
        const characterData = (
          await page.$$eval(selector, ($$tr) => {
            const getSrc = (element: Element) =>
              element.getAttribute("src")?.replace(/\/scale-to-width.*/g, "");

            return $$tr.map(($tr) => {
              if ($tr.children.length === 7) {
                const icon = $tr.children.item(0)?.querySelector("img");
                const name = $tr.children.item(1);
                const element = $tr.children.item(3);
                const weapon = $tr.children.item(4);

                let url = null;
                if (icon) {
                  url = getSrc(icon);
                }
                if (
                  url &&
                  name?.textContent &&
                  element?.textContent &&
                  weapon?.textContent
                ) {
                  const obj = {
                    name: name.textContent.replace(/ |\n/g, ""),
                    element: element.textContent?.replace(/ |\n/g, ""),
                    weapon: weapon.textContent?.replace(/ |\n/g, ""),
                  };
                  if (obj.element === "" || obj.weapon === "") {
                    return null;
                  } else {
                    return { url, data: obj };
                  }
                } else {
                  return `Failed for: ${name?.innerHTML ?? "undefined"}`;
                }
              }
            });
          })
        ).filter(
          (
            obj
          ): obj is {
            url: string;
            data: { name: string; element: string; weapon: string };
          } =>
            obj != null && // check null & undefined
            typeof obj === "object" &&
            obj.url != null &&
            obj.data.name != null &&
            obj.data.element != null &&
            obj.data.weapon != null
        );
        const iconUrls = characterData.map((obj) => ({
          url: obj.url,
          name: obj.data.name,
        }));
        await Promise.all(
          iconUrls.map((obj) =>
            download(obj.url, `../site/static/profile/${obj.name}.png`)
          )
        );
        const characterInfo = characterData.reduce<{
          [key: string]: { element: string; weapon: string };
        }>((prev, curr) => {
          return {
            ...prev,
            [curr.data.name]: {
              element: curr.data.element,
              weapon: curr.data.weapon,
            },
          };
        }, {});
        const urls = Object.keys(characterInfo).map((key) => getUrl(key));
        await enqueueLinks({ urls });
        await Actor.setValue("characters", characterInfo);
      } else {
        const selector = "table.ascension-stats > tbody";
        await page.waitForSelector(selector);
        const character = request.url.split("/").pop()?.replace("_", "");
        const stats = await page.$eval(selector, ($tbody) => {
          const stats: { [key: string]: any } = {};
          const statBuff = $tbody.children
            .item(0)
            ?.children.item(5)
            ?.textContent?.replace(/^.*\((.*)\)/g, "$1");
          stats.statBuff = statBuff;
          let ascension;
          let SP;
          for (let i = 1; i < $tbody.children.length; i++) {
            const $tr = $tbody.children.item(i);
            if ($tr) {
              const len = $tr.children.length;
              if (len === 6) {
                ascension = $tr.children
                  .item(0)
                  ?.textContent?.replace(/[^0-9]/g, "");
                const level = $tr.children.item(1)?.textContent?.split("/");
                const HP = $tr.children
                  .item(2)
                  ?.textContent?.replace(/[^0-9]/g, "");
                const ATK = $tr.children
                  .item(3)
                  ?.textContent?.replace(/[^0-9]/g, "");
                const DEF = $tr.children
                  .item(4)
                  ?.textContent?.replace(/[^0-9]/g, "");
                SP = $tr.children
                  .item(5)
                  ?.textContent?.replace(/[^0-9\.]/g, "");
                if (
                  ascension &&
                  level &&
                  HP &&
                  ATK &&
                  DEF &&
                  SP !== undefined
                ) {
                  const pSP = parseFloat(SP);
                  stats[ascension] = [];
                  stats[ascension].push({
                    HP: parseInt(HP),
                    ATK: parseInt(ATK),
                    DEF: parseInt(DEF),
                    SP: Number.isNaN(pSP) ? 0 : pSP,
                  });
                }
              } else if (len === 4) {
                const level = $tr.children.item(0)?.textContent?.split("/");
                const HP = $tr.children
                  .item(1)
                  ?.textContent?.replace(/[^0-9]/g, "");
                const ATK = $tr.children
                  .item(2)
                  ?.textContent?.replace(/[^0-9]/g, "");
                const DEF = $tr.children
                  .item(3)
                  ?.textContent?.replace(/[^0-9]/g, "");
                if (
                  ascension &&
                  level &&
                  HP &&
                  ATK &&
                  DEF &&
                  SP !== undefined
                ) {
                  const pSP = parseFloat(SP);
                  stats[ascension].push({
                    HP: parseInt(HP),
                    ATK: parseInt(ATK),
                    DEF: parseInt(DEF),
                    SP: Number.isNaN(pSP) ? 0 : pSP,
                  });
                }
              }
            }
          }
          return stats;
        });
        if (character) {
          const data: any = await Actor.getValue("characters");
          data[character].stats = stats;
          data[character].statBuff = stats.statBuff;
          delete data[character].stats.statBuff;
          await Actor.setValue("characters", data);
        }
      }
    },
    maxConcurrency: threads,
    requestHandlerTimeoutSecs: 600,
    navigationTimeoutSecs: 600,
  });
  await crawler.run(["https://genshin-impact.fandom.com/wiki/Character"]);
  const characters: { [key: string]: any } | null = await Actor.getValue(
    "characters"
  );
  if (characters) {
    return exportData(characters);
  }
  return null;
};

export default parseCharacters;
