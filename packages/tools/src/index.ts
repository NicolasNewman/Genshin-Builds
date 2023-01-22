import { Actor } from "apify";
import parseCharacters from "./parseCharacters";
import parseWeapons from "./parseWeapons";
import { writeFileSync } from "fs";
(async () => {
  await Actor.init();
  const characters = await parseCharacters(10);
  const weapons = await parseWeapons(10);
  if (characters && weapons) {
    const ts = characters.replace("$##$", weapons);
    writeFileSync("../shared/src/data.ts", ts);
  }
  await Actor.exit();
})();
