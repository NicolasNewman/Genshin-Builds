import { Actor } from "apify";
import parseCharacters from "./parseCharacters";
import parseWeapons from "./parseWeapons";
import { writeFileSync } from "fs";
import parseArtifacts from "./parseArtifacts";
(async () => {
  await Actor.init();
  // const characters = await parseCharacters(10);
  // const weapons = await parseWeapons(10);
  const artifacts = await parseArtifacts(10);
  console.log(artifacts);
  // if (characters && weapons) {
  //   const ts = `${characters.replace("$##$", weapons)}\n${artifacts}`;
  //   writeFileSync("../shared/src/data.ts", ts);
  // }
  await Actor.exit();
})();
