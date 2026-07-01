/**
 * Type containing all possible keys for the Constants Object.
 */
type Constant =
  | "GAMES"
  | "ACHIEVEMENTS"
  | "GUILD_ACHIEVEMENTS"
  | "QUESTS"
  | "CHALLENGES"
  | "VANITY_PETS"
  | "VANITY_COMPANIONS"
  | "SKYBLOCK_COLLECTIONS"
  | "SKYBLOCK_ITEMS";

/**
 * Object containing a list of key-value pairs representing the Hypixel Constants.
 *
 * @example const gameModes = constants.GAMES
 * @example const skyblockItems = constants.SKYBLOCK_ITEMS
 */
// @ts-expect-error
const constants: Record<Constant, object> = {};

const resources: Record<Constant, string> = {
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
  for (const [key, value] of Object.entries(resources) as [Constant, string][]) {
    constants[key] = await (await fetch(value)).json();
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
