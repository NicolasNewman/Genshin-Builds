import * as fs from "fs";
import { Actor } from "apify";
import { PuppeteerCrawler } from "crawlee";
import { download, toString } from "./lib";
import { Page } from "puppeteer";

const exportData = (data: ArtifactParseData) => {
  return `
export type ArtifactKey = ${toString(Object.keys(data)).join(" | ")};
export const ArtifactInfo = ${JSON.stringify(data)}
`;
};

type ArtifactIcons = {
  flower: string;
  plume: string;
  sands: string;
  circlet: string;
  goblet: string;
};

async function autoScroll(page: Page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 30;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve("");
        }
      }, 100);
    });
  });
}

type ArtifactParseData = {
  [key: string]: {
    set: string;
    bonus: string[];
    icons?: ArtifactIcons;
  };
};

const parseArtifacts = async (threads: number) => {
  const crawler = new PuppeteerCrawler({
    // Function called for each URL
    async requestHandler({ request, page, enqueueLinks, crawler }) {
      const dlog = (msg: string) => console.log(msg);
      await page.exposeFunction("dlog", dlog);
      console.log("Processing: " + request.url);
      if (request.url.includes("Artifact/Sets")) {
        const selector = "tbody > tr";
        await page.waitForSelector(selector);
        await autoScroll(page);
        new Promise((r) => setTimeout(r, 60000));

        const artifactData: ArtifactParseData = (
          await page.$$eval(selector, ($$tr) => {
            const getSrc = (element: Element) =>
              element.getAttribute("src")?.replace(/\/scale-to-width.*/g, "");

            return $$tr.map(($tr) => {
              if ($tr.children.length === 4) {
                const set = $tr.children.item(0);
                const rarity = $tr.children.item(1);
                const icons = $tr.children
                  .item(2)
                  ?.querySelectorAll("span.item_image > a > img");
                const bonus = $tr.children.item(3);

                if (
                  set?.textContent &&
                  set.textContent !== "Set" &&
                  bonus?.textContent &&
                  icons &&
                  icons.length > 0
                ) {
                  const iconURLs: ArtifactIcons = {
                    flower: "",
                    plume: "",
                    sands: "",
                    circlet: "",
                    goblet: "",
                  };
                  if (icons.length === 1) {
                    iconURLs.circlet = getSrc(icons.item(0)) || "";
                  } else if (icons.length === 2) {
                    iconURLs.flower = getSrc(icons.item(0)) || "";
                    iconURLs.plume = getSrc(icons.item(1)) || "";
                  } else if (icons.length === 5) {
                    iconURLs.flower = getSrc(icons.item(0)) || "";
                    iconURLs.plume = getSrc(icons.item(1)) || "";
                    iconURLs.sands = getSrc(icons.item(2)) || "";
                    iconURLs.circlet = getSrc(icons.item(3)) || "";
                    iconURLs.goblet = getSrc(icons.item(4)) || "";
                  }
                  const setName = set.textContent.replace(/\n/g, "");
                  const obj = {
                    set: setName,
                    key: setName
                      .replace(/"|'|-/g, "") // remove invalid characters
                      .split(" ") // split by word
                      .map((w) => w[0].toUpperCase() + w.substring(1)) // make first letter of each word capital
                      .join(""), // rejoin
                    bonus: bonus.textContent
                      .split(/[0-9] Piece: /g)
                      .slice(1)
                      .map((bonus) => bonus.replace("\n", "")),
                    icons: iconURLs,
                  };
                  dlog(`===== ${obj.set} =====`);
                  dlog(`${obj.icons}`);
                  return obj;
                } else {
                  return `Failed for: ${set?.innerHTML ?? "undefined"}`;
                }
              }
            });
          })
        )
          .filter(
            (
              obj
            ): obj is {
              set: string;
              key: string;
              bonus: string[];
              icons: ArtifactIcons;
            } =>
              obj != null && // check null & undefined
              typeof obj === "object" &&
              obj.set != null &&
              obj.key != null &&
              obj.bonus != null &&
              obj.icons != null
          )
          .reduce<{
            [key: string]: {
              set: string;
              bonus: string[];
              icons: ArtifactIcons;
            };
          }>((prev, curr) => {
            return {
              ...prev,
              [curr.key]: {
                set: curr.set,
                bonus: curr.bonus,
                icons: curr.icons,
              },
            };
          }, {});
        await Promise.all(
          Object.entries(artifactData).map(async ([key, obj]) => {
            return Promise.all(
              Object.entries(obj.icons ?? {}).map(([slot, url]) => {
                const filename = `${key}_${slot}.png`;
                if (url !== "") {
                  console.log(url);
                  return download(url, `../site/static/artifacts/${filename}`);
                }
                return;
              })
            );
          })
        );
        Object.keys(artifactData).forEach((key) => {
          delete artifactData[key].icons;
        });
        await Actor.setValue("artifacts", artifactData);
      }
    },
    maxConcurrency: threads,
    requestHandlerTimeoutSecs: 600,
    navigationTimeoutSecs: 600,
  });
  await crawler.run(["https://genshin-impact.fandom.com/wiki/Artifact/Sets"]);
  const artifacts: ArtifactParseData | null = await Actor.getValue("artifacts");
  if (artifacts) {
    return exportData(artifacts);
  }
  return null;
};

export default parseArtifacts;
