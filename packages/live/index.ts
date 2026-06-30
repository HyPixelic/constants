import axios from "axios";

const constants: Record<any, any> = {};

const resources = {
  GAMES: "https://api.hypixel.net/v2/resources/games",
  ACHIEVEMENTS: "https://api.hypixel.net/v2/resources/achievements",
  GUILD_ACHIEVEMENTS: "https://api.hypixel.net/v2/resources/guilds/achievements",
  QUESTS: "https://api.hypixel.net/v2/resources/quests",
  CHALLENGES: "https://api.hypixel.net/v2/resources/challenges",
  VANITY_PETS: "https://api.hypixel.net/v2/resources/vanity/pets",
  VANITY_COMPANIONS: "https://api.hypixel.net/v2/resources/vanity/companions",
  SKYBLOCK_COLLECTIONS: "https://api.hypixel.net/v2/resources/skyblock/collections",
  SKYBLOCK_ITEMS: "https://api.hypixel.net/v2/resources/skyblock/items",
};

const fetchResources = async (): Promise<void> => {
  for (const [key, value] of Object.entries(resources)) {
    constants[key] = (await axios.get(value)).data;
  }
};

await fetchResources();
setInterval(
  async () => {
    await fetchResources();
  },
  24 * 60 * 60 * 1000,
);

export default constants;
