import * as fs from "fs";
import * as https from "https";

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
