/**
 * Type containing all possible keys for the Constants Object.
 */
type Constant =
  | "LAST_UPDATED"
  | "GAMES"
  | "ACHIEVEMENTS"
  | "GUILD_ACHIEVEMENTS"
  | "QUESTS"
  | "CHALLENGES"
  | "VANITY_PETS"
  | "VANITY_COMPANIONS"
  | "SKYBLOCK_COLLECTIONS"
  | "SKYBLOCK_ITEMS"
  | "SKYBLOCK_SKILLS";

/**
 * Object containing a list of key-value pairs representing the Hypixel Constants.
 *
 * @example
 *
 * ```ts
 * import constants from '@hypixelic/constants'
 *
 * const gameModes = constants.GAMES
 * ```
 */
// @ts-expect-error
const constants: Record<Constant, any> = {
  LAST_UPDATED: new Date().toJSON(),
};

type Resource = string | string[];

const resources: Record<Exclude<Constant, "LAST_UPDATED">, Resource> = {
  GAMES: ["https://api.hypixel.net/v2/resources/games", "games"],
  ACHIEVEMENTS: ["https://api.hypixel.net/v2/resources/achievements", "achievements"],
  GUILD_ACHIEVEMENTS: "https://api.hypixel.net/v2/resources/guilds/achievements",
  QUESTS: ["https://api.hypixel.net/v2/resources/quests", "quests"],
  CHALLENGES: ["https://api.hypixel.net/v2/resources/challenges", "challenges"],
  VANITY_PETS: "https://api.hypixel.net/v2/resources/vanity/pets",
  VANITY_COMPANIONS: "https://api.hypixel.net/v2/resources/vanity/companions",
  SKYBLOCK_COLLECTIONS: ["https://api.hypixel.net/v2/resources/skyblock/collections", "collections"],
  SKYBLOCK_ITEMS: ["https://api.hypixel.net/v2/resources/skyblock/items", "items"],
  SKYBLOCK_SKILLS: ["https://api.hypixel.net/v2/resources/skyblock/skills", "skills"],
};

const fetchResources = async (): Promise<void> => {
  for (const [key, value] of Object.entries(resources) as [Constant, Resource][]) {
    try {
      if (Array.isArray(value)) {
        constants[key] = (await (await fetch(value[0])).json())[value[1]];
      } else {
        constants[key] = await (await fetch(value)).json();
      }
      delete constants[key]["success"];
      delete constants[key]["lastUpdated"];
    } catch {
      console.log("Failed to fetch resource.");
    }
  }
  constants["LAST_UPDATED"] = new Date().toJSON();
};

await fetchResources();
setInterval(
  async () => {
    await fetchResources();
  },
  24 * 60 * 60 * 1000,
);

/**
 * Updates the constants with the latest data from the Hypixel API.
 *
 * @example
 *
 * ```ts
 * import constants, { updateConstants } from '@hypixelic/constants';
 *
 * await updateConstants();
 *
 * console.log(constants.SKYBLOCK_ITEMS); // Logs latest Skyblock Items data
 * ```
 */
export const updateConstants = fetchResources;
export default constants;
