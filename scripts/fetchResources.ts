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

const BASE_URL = "https://api.hypixel.net/v2/resources";
const BASE_PATH = resolve(import.meta.dirname, "../packages/static/constants");

const resources = [
  { name: "Games", endpoint: "/games", file: "games.json" },
  { name: "Achievements", endpoint: "/achievements", file: "achievements.json" },
  { name: "Challenges", endpoint: "/challenges", file: "challenges.json" },
  { name: "Quests", endpoint: "/quests", file: "quests.json" },
  { name: "GuildAchievements", endpoint: "/guilds/achievements", file: "guildAchievements.json" },
  { name: "VanityPets", endpoint: "/vanity/pets", file: "vanityPets.json" },
  { name: "VanityCompanions", endpoint: "/vanity/companions", file: "vanityCompanions.json" },
  { name: "Collections", endpoint: "/skyblock/collections", file: "skyblock/collections.json" },
  { name: "Items", endpoint: "/skyblock/items", file: "skyblock/items.json" },
  { name: "Skills", endpoint: "/skyblock/skills", file: "skyblock/skills.json" },
  { name: "Resourcepacks", endpoint: "/packs", file: "resourcepacks.json" },
].map((r) => ({
  name: r.name,
  url: `${BASE_URL}${r.endpoint}`,
  path: resolve(BASE_PATH, r.file),
}));

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

  const lastUpdatedPath = resolve(BASE_PATH, "lastUpdated.json");
  writeFileSync(lastUpdatedPath, JSON.stringify([new Date().toJSON()], null, 2) + "\n", "utf8");
  execSync("pnpm tsx bumpVersion.ts", { stdio: "inherit" });
}
