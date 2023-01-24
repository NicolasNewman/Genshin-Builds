import * as fs from "fs";
import { Actor } from "apify";
import { PuppeteerCrawler } from "crawlee";
import { toString } from "./lib";

function toGoodKey(str: string) {
  return str
    .replace(/"|'|-|_/g, "") // remove invalid characters
    .split(" ") // split by word
    .map((w) => w[0].toUpperCase() + w.substring(1)) // make first letter of each word capital
    .join(""); // rejoin
}
const getUrl = (character: string) => {
  return `https://genshin-impact.fandom.com/wiki/${character.replace(
    / /g,
    "_"
  )}`;
};

const exportData = (data: { [key: string]: any }) => {
  const types: { [key: string]: string[] } = {};
  const weapons: string[] = [];
  // extract the weapon types from the data into an object with each weapon type as a field mapping to an array of weapons of that class
  Object.entries<{ type: string; name: string; statBuff: string }>(
    data
  ).forEach(([key, { name, statBuff, type }]) => {
    if (!types[type]) {
      types[type] = [];
    }
    weapons.push(key);
    types[type].push(key);
  });

  /* 1.1) export const {weaponType} = [{weaponNames}]
   *        Convert the weapon type object into arrays named after each type which contain the names of all weapons of that class
   * 1.2) export const {weaponType}IDs = toIdedObj({weaponType})
   *        Convert the weapon type object into an IDed object map named after each type of weapon
   *   2) export const WeaponInfo = {...}
   *        Created an object var containing all the compiled weapon data
   */
  return `${Object.entries(types)
    .map(
      ([
        weaponType,
        arr,
      ]) => `export const ${weaponType.toLocaleLowerCase()} = [${toString(
        arr
      ).toString()}];
export const ${weaponType.toLocaleLowerCase()}IDs = toIdedObj(${weaponType.toLocaleLowerCase()});`
    )
    .join("\n")}
export type WeaponKey = ${toString(weapons).join(" | ")};
export const weaponInfo: {
  [key in WeaponKey]: {
    name: string,
    statBuff: StatBuff | null,
    stats: {
      [key in AscensionKey]: {ATK: number, SP: number}[]
    } | null,
    type: WeaponType
  }
} = ${JSON.stringify(data)}
`;
};

const parseWeapons = async (threads: number) => {
  const crawler = new PuppeteerCrawler({
    // Function called for each URL
    async requestHandler({ request, page, enqueueLinks, crawler }) {
      const dlog = (msg: any) => console.log(msg);
      await page.exposeFunction("dlog", dlog);
      console.log("Processing: " + request.url);
      if (request.url.includes("Weapon")) {
        const selector = "tbody > tr";
        await page.waitForSelector(selector);
        const weaponData = (
          await page.$$eval(selector, ($$tr) => {
            return $$tr.map(($tr) => {
              if ($tr.children.length === 6) {
                const icon = $tr.children.item(0);
                const name = $tr.children.item(1);
                const ATK = $tr.children.item(3);
                const STAT = $tr.children.item(4);
                if (
                  icon &&
                  name?.textContent &&
                  name.textContent !== "Name" &&
                  !name.textContent.includes("Prized Isshin Blade") &&
                  ATK?.textContent &&
                  STAT?.textContent
                ) {
                  const weaponName = name.textContent.replace(/\n/g, "");
                  const statBuff = STAT.textContent.replace(/ [0-9].*\n/g, "");
                  const obj = {
                    name: weaponName,
                    key: weaponName
                      .replace(/"|'|-/g, "") // remove invalid characters
                      .split(" ") // split by word
                      .map((w) => w[0].toUpperCase() + w.substring(1)) // make first letter of each word capital
                      .join(""), // rejoin
                    statBuff: statBuff.includes("None") ? null : statBuff,
                  };
                  dlog(obj);
                  return obj;
                } else {
                  return `Failed for: ${name?.innerHTML ?? "undefined"}`;
                }
              }
            });
          })
        )
          .filter(
            (
              obj
            ): obj is { name: string; key: string; statBuff: string | null } =>
              obj != null && // check null & undefined
              typeof obj === "object" &&
              obj.name != null &&
              obj.key != null
          )
          .reduce<{ [key: string]: { name: string; statBuff: string | null } }>(
            (prev, curr) => {
              return {
                ...prev,
                [curr.key]: { name: curr.name, statBuff: curr.statBuff },
              };
            },
            {}
          );
        const urls = Object.keys(weaponData).map((key) =>
          getUrl(weaponData[key].name)
        );
        console.log(urls);
        console.log(weaponData);
        await enqueueLinks({ urls });
        await Actor.setValue("weapons", weaponData);
      } else {
        const selector = "table.ascension-stats > tbody";
        await page.waitForSelector(selector);
        const weapon = toGoodKey(
          request.url
            .split("/")
            .pop()
            ?.split("_")
            .map((w) => w[0].toUpperCase() + w.substring(1))
            .join("") ?? ""
        );
        const stats = await page.$eval(selector, ($tbody) => {
          const stats: { [key: string]: any } = {};
          let ascension;
          for (let i = 1; i < $tbody.children.length; i++) {
            const $tr = $tbody.children.item(i);
            if ($tr) {
              const len = $tr.children.length;
              if (len === 4) {
                ascension = $tr.children
                  .item(0)
                  ?.textContent?.replace(/[^0-9]/g, "");
                const level = $tr.children.item(1)?.textContent?.split("/");
                const ATK = $tr.children
                  .item(2)
                  ?.textContent?.replace(/[^0-9]/g, "");
                const SP = $tr.children
                  .item(3)
                  ?.textContent?.replace(/[^0-9]/g, "");
                if (ascension && level && ATK && SP !== undefined) {
                  stats[ascension] = [];
                  stats[ascension].push({
                    ATK: parseInt(ATK),
                    SP: parseInt(SP),
                  });
                }
              } else if (len === 3) {
                const level = $tr.children.item(0)?.textContent?.split("/");
                const ATK = $tr.children
                  .item(1)
                  ?.textContent?.replace(/[^0-9]/g, "");
                const SP = $tr.children
                  .item(2)
                  ?.textContent?.replace(/[^0-9]/g, "");

                if (ascension && level && ATK && SP !== undefined) {
                  stats[ascension].push({
                    ATK: parseInt(ATK),
                    SP: parseInt(SP),
                  });
                }
              }
            }
          }
          return stats;
        });
        const selector2 =
          "aside.portable-infobox > section div.wds-tab__content a:nth-child(2)";
        await page.waitForSelector(selector);
        const weaponType = await page.$eval(selector2, ($a) => {
          return $a.textContent;
        });

        if (weapon) {
          const data: any = await Actor.getValue("weapons");
          data[weapon].stats = Object.keys(stats).length === 0 ? null : stats;
          data[weapon].type = weaponType ?? "";
          await Actor.setValue("weapons", data);
        }
      }
    },
    maxConcurrency: threads,
  });
  await crawler.run(["https://genshin-impact.fandom.com/wiki/Weapon/List"]);
  const weapons: { [key: string]: any } | null = await Actor.getValue(
    "weapons"
  );
  if (weapons) {
    return exportData(weapons);
  }
  return null;
};

export default parseWeapons;
