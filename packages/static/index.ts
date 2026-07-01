import GAMES from "./constants/games.json" with { type: "json" };
import ACHIEVEMENTS from "./constants/achievements.json" with { type: "json" };
import GUILD_ACHIEVEMENTS from "./constants/guildAchievements.json" with { type: "json" };
import QUESTS from "./constants/quests.json" with { type: "json" };
import CHALLENGES from "./constants/challenges.json" with { type: "json" };
import VANITY_PETS from "./constants/vanityPets.json" with { type: "json" };
import VANITY_COMPANIONS from "./constants/vanityCompanions.json" with { type: "json" };
import SKYBLOCK_COLLECTIONS from "./constants/skyblock/collections.json" with { type: "json" };
import SKYBLOCK_ITEMS from "./constants/skyblock/items.json" with { type: "json" };

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
const constants: Record<Constant, any> = {
  GAMES,
  ACHIEVEMENTS,
  GUILD_ACHIEVEMENTS,
  QUESTS,
  CHALLENGES,
  VANITY_PETS,
  VANITY_COMPANIONS,
  SKYBLOCK_COLLECTIONS,
  SKYBLOCK_ITEMS,
};

const objectMap: Record<Constant, null | string> = {
  GAMES: "games",
  ACHIEVEMENTS: "achievements",
  GUILD_ACHIEVEMENTS: null,
  QUESTS: "quests",
  CHALLENGES: "challenges",
  VANITY_PETS: null,
  VANITY_COMPANIONS: null,
  SKYBLOCK_COLLECTIONS: "collections",
  SKYBLOCK_ITEMS: "items",
};

for (const [key, value] of Object.entries(objectMap) as [Constant, null | string][]) {
  if (value) {
    constants[key] = constants[key][value];
  }
  delete constants[key]["success"];
  delete constants[key]["lastUpdated"];
}

export default constants;
