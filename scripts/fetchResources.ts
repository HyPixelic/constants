import axios from "axios";
import { Logger } from "@pixelic/logger";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { execSync } from "node:child_process";

const logger = new Logger();

async function fetchResource(name: string, url: string, destPath: string) {
  try {
    const { data: newData } = await axios.get(url);
    delete newData.lastUpdated;

    if (existsSync(destPath)) {
      const existingData = JSON.parse(readFileSync(destPath, "utf8"));
      delete existingData.lastUpdated;

      if (JSON.stringify(existingData) === JSON.stringify(newData)) {
        logger.info(`Fetch${name}`, `${name} are already up to date.`);
        return { name, changed: false };
      }
    } else {
      logger.info(`Fetch${name}`, `${name} file not found, creating it...`);
    }

    return { name, newData, changed: true, destPath };
  } catch (error) {
    logger.error(`Fetch${name}`, String(error));
    process.exit(1);
  }
}

const resources = [
  {
    name: "Games",
    url: "https://api.hypixel.net/v2/resources/games",
    path: resolve(process.cwd(), "../packages/static/constants/games.json"),
  },
  {
    name: "Achievements",
    url: "https://api.hypixel.net/v2/resources/achievements",
    path: resolve(process.cwd(), "../packages/static/constants/achievements.json"),
  },
  {
    name: "Challenges",
    url: "https://api.hypixel.net/v2/resources/challenges",
    path: resolve(process.cwd(), "../packages/static/constants/challenges.json"),
  },
  {
    name: "Quests",
    url: "https://api.hypixel.net/v2/resources/quests",
    path: resolve(process.cwd(), "../packages/static/constants/quests.json"),
  },
  {
    name: "GuildAchievements",
    url: "https://api.hypixel.net/v2/resources/guilds/achievements",
    path: resolve(process.cwd(), "../packages/static/constants/guildAchievements.json"),
  },
  {
    name: "VanityPets",
    url: "https://api.hypixel.net/v2/resources/vanity/pets",
    path: resolve(process.cwd(), "../packages/static/constants/vanityPets.json"),
  },
  {
    name: "VanityCompanions",
    url: "https://api.hypixel.net/v2/resources/vanity/companions",
    path: resolve(process.cwd(), "../packages/static/constants/vanityCompanions.json"),
  },
  {
    name: "Collections",
    url: "https://api.hypixel.net/v2/resources/skyblock/collections",
    path: resolve(process.cwd(), "../packages/static/constants/skyblock/collections.json"),
  },
  {
    name: "Items",
    url: "https://api.hypixel.net/v2/resources/skyblock/items",
    path: resolve(process.cwd(), "../packages/static/constants/skyblock/items.json"),
  },
  {
    name: "Skills",
    url: "https://api.hypixel.net/v2/resources/skyblock/skills",
    path: resolve(process.cwd(), "../packages/static/constants/skyblock/skills.json"),
  },
  {
    name: "Resourcepacks",
    url: "https://api.hypixel.net/v2/resources/packs",
    path: resolve(process.cwd(), "../packages/static/constants/resourcepacks.json"),
  },
];

const results = await Promise.all(resources.map((r) => fetchResource(r.name, r.url, r.path)));
const changedResults = results.filter((r) => r.changed);

if (changedResults.length > 0) {
  const nonQuestChanges = changedResults.filter((r) => r.name !== "Achievements");

  if (nonQuestChanges.length === 0) {
    logger.info("FetchResources", "Only Achievements changed, skipping update.");
    process.exit(0);
  }

  for (const r of changedResults) {
    const res = r as { name: string; newData: any; changed: true; destPath: string };
    writeFileSync(res.destPath, JSON.stringify(res.newData, null, 2) + "\n", "utf8");
    const fileName = res.destPath.split("/").pop() || `${res.name.toLowerCase()}.json`;
    logger.info(`Fetch${res.name}`, `Successfully updated ${fileName}!`);
  }

  const lastUpdatedPath = resolve(process.cwd(), "../packages/static/constants/lastUpdated.json");
  writeFileSync(lastUpdatedPath, JSON.stringify([new Date().toJSON()], null, 2) + "\n", "utf8");
  execSync("pnpm tsx bumpVersion.ts", { stdio: "inherit" });
}
