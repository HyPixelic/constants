import LAST_UPDATED from "./constants/lastUpdated.json" with { type: "json" };
import GAMES from "./constants/games.json" with { type: "json" };
import ACHIEVEMENTS from "./constants/achievements.json" with { type: "json" };
import GUILD_ACHIEVEMENTS from "./constants/guildAchievements.json" with { type: "json" };
import QUESTS from "./constants/quests.json" with { type: "json" };
import CHALLENGES from "./constants/challenges.json" with { type: "json" };
import VANITY_PETS from "./constants/vanityPets.json" with { type: "json" };
import VANITY_COMPANIONS from "./constants/vanityCompanions.json" with { type: "json" };
import SKYBLOCK_COLLECTIONS from "./constants/skyblock/collections.json" with { type: "json" };
import SKYBLOCK_ITEMS from "./constants/skyblock/items.json" with { type: "json" };
import SKYBLOCK_SKILLS from "./constants/skyblock/skills.json" with { type: "json" };

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
const constants: Record<Constant, any> = {
  LAST_UPDATED: LAST_UPDATED[0],
  GAMES,
  ACHIEVEMENTS,
  GUILD_ACHIEVEMENTS,
  QUESTS,
  CHALLENGES,
  VANITY_PETS,
  VANITY_COMPANIONS,
  SKYBLOCK_COLLECTIONS,
  SKYBLOCK_ITEMS,
  SKYBLOCK_SKILLS,
};

const objectMap: Record<Exclude<Constant, "LAST_UPDATED">, null | string> = {
  GAMES: "games",
  ACHIEVEMENTS: "achievements",
  GUILD_ACHIEVEMENTS: null,
  QUESTS: "quests",
  CHALLENGES: "challenges",
  VANITY_PETS: null,
  VANITY_COMPANIONS: null,
  SKYBLOCK_COLLECTIONS: "collections",
  SKYBLOCK_ITEMS: "items",
  SKYBLOCK_SKILLS: "skills",
};

for (const [key, value] of Object.entries(objectMap) as [Constant, null | string][]) {
  if (value) {
    constants[key] = constants[key][value];
  }
  delete constants[key]["success"];
  delete constants[key]["lastUpdated"];
}

export default constants;
