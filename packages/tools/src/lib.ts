import * as fs from "fs";
import * as https from "https";
import { Page } from "puppeteer";

export const toString = (arr: string[]) => arr.map((str) => `'${str}'`);
export const download = (url: string, dest: string) => {
  return new Promise<string>((res, rej) => {
    var file = fs.createWriteStream(dest);
    var request = https
      .get(url, function (response) {
        response.pipe(file);
        file.on("finish", function () {
          file.close(); // close() is async, call cb after close completes.
          res("Success");
        });
      })
      .on("error", function (err1) {
        // Handle errors
        console.error(err1);
        fs.unlink(dest, (err2) => {
          if (err2) {
            console.log(err2.message);
          }
          rej(err1);
        }); // Delete the file async. (But we don't check the result)
      });
  });
};

export const path = (path: string) => path.split("/").pop();

export async function autoScroll(page: Page, delay = 100, distance = 30) {
  await page.evaluate(
    async (delay, distance) => {
      await new Promise((resolve) => {
        var totalHeight = 0;
        var timer = setInterval(() => {
          var scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            resolve("");
          }
        }, delay);
      });
    },
    delay,
    distance
  );
}
