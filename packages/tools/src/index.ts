import { Actor } from "apify";
import parseCharacters from "./parseCharacters";
import parseWeapons from "./parseWeapons";
import { writeFileSync } from "fs";
import parseArtifacts from "./parseArtifacts";
import cluster from "cluster";

type Task = "character" | "weapon" | "artifact";
type ProcessMessage = {
  task: Task;
  data: string;
};
type ProcessResult = {
  [key in Task]?: string;
};
const isProcessMessage = (obj: any): obj is ProcessMessage => {
  const temp = obj as ProcessMessage;
  return temp.data != null && temp.task != null;
};

(async () => {
  if (cluster.isPrimary) {
    const characterWorker = cluster.fork({ WORKER_ID: "character" });
    const weaponWorker = cluster.fork({ WORKER_ID: "weapon" });
    const artifactWorker = cluster.fork({ WORKER_ID: "artifact" });
    const workers = [characterWorker, weaponWorker, artifactWorker];
    const promises = workers.map(
      (worker) =>
        new Promise<ProcessMessage>((res, rej) => {
          worker.on("message", (msg) => {
            if (isProcessMessage(msg)) {
              res(msg);
            } else {
              rej("Invalid result");
            }
          });
        })
    );
    const { artifact, character, weapon } = (
      await Promise.all(promises)
    ).reduce<ProcessResult>(
      (prev, curr) => ({ ...prev, [curr.task]: curr.data }),
      {}
    );
    if (artifact && character && weapon) {
      const ts = `${character.replace("$##$", weapon)}\n${artifact}`;
      writeFileSync("../shared/src/data.ts", ts);
    }
  } else {
    const task = process.env["WORKER_ID"];
    await Actor.init();
    if (task === "character") {
      const characters = await parseCharacters(10);
      process.send?.({ task: "character", data: characters });
    } else if (task === "weapon") {
      const weapons = await parseWeapons(10);
      process.send?.({ task: "weapon", data: weapons });
    } else if (task === "artifact") {
      const artifacts = await parseArtifacts(10);
      process.send?.({ task: "artifact", data: artifacts });
    }
    await Actor.exit();
  }
})();
