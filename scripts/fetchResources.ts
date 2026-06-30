import axios from "axios";
import { Logger } from "@pixelic/logger";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

const logger = new Logger();

let changed = false;

async function fetchResource(name: string, url: string, destPath: string) {
  try {
    const { data: newData } = await axios.get(url);

    if (existsSync(destPath)) {
      const existingData = JSON.parse(readFileSync(destPath, "utf8"));

      if (existingData.lastUpdated && newData.lastUpdated) {
        if (existingData.lastUpdated === newData.lastUpdated) {
          logger.info(`Fetch${name}`, `${name} are already up to date.`);
          return;
        }
      } else {
        logger.critical(`Fetch${name}`, "Data.lastUpdated Property is missing!");
        process.exit(1);
      }
    } else {
      logger.info(`Fetch${name}`, `${name} file not found, creating it...`);
    }

    writeFileSync(destPath, JSON.stringify(newData, null, 2) + "\n", "utf8");
    const fileName = destPath.split("/").pop() || `${name.toLowerCase()}.json`;
    logger.info(`Fetch${name}`, `Successfully updated ${fileName}!`);
    changed = true;
  } catch (error) {
    logger.error(`Fetch${name}`, String(error));
    process.exit(1);
  }
}

await Promise.all([
  fetchResource(
    "Games",
    "https://api.hypixel.net/v2/resources/games",
    resolve(process.cwd(), "../constants/games.json"),
  ),
  fetchResource(
    "Achievements",
    "https://api.hypixel.net/v2/resources/achievements",
    resolve(process.cwd(), "../constants/achievements.json"),
  ),
  fetchResource(
    "Challenges",
    "https://api.hypixel.net/v2/resources/challenges",
    resolve(process.cwd(), "../constants/challenges.json"),
  ),
  fetchResource(
    "Quests",
    "https://api.hypixel.net/v2/resources/quests",
    resolve(process.cwd(), "../constants/quests.json"),
  ),
  fetchResource(
    "GuildAchievements",
    "https://api.hypixel.net/v2/resources/guilds/achievements",
    resolve(process.cwd(), "../constants/guildAchievements.json"),
  ),
  fetchResource(
    "VanityPets",
    "https://api.hypixel.net/v2/resources/vanity/pets",
    resolve(process.cwd(), "../constants/vanityPets.json"),
  ),
  fetchResource(
    "VanityCompanions",
    "https://api.hypixel.net/v2/resources/vanity/companions",
    resolve(process.cwd(), "../constants/vanityCompanions.json"),
  ),
  fetchResource(
    "Collections",
    "https://api.hypixel.net/v2/resources/skyblock/collections",
    resolve(process.cwd(), "../constants/skyblock/collections.json"),
  ),
  fetchResource(
    "Items",
    "https://api.hypixel.net/v2/resources/skyblock/items",
    resolve(process.cwd(), "../constants/skyblock/items.json"),
  ),
]);

if (changed) {
  execSync("pnpm tsx bumpVersion.ts", { stdio: "inherit" });
}
