type SKYBLOCK_SKILLS_LEVELING_XP_MAP = Record<number, number>;
type SKYBLOCK_SKILLS_LEVELING_XP = Record<string, SKYBLOCK_SKILLS_LEVELING_XP_MAP>;
type SKYBLOCK_SKILLS_LEVEL_CAPS = Record<string, number>;

const SKYBLOCK_DUNGEON_SKILLS: Record<string, Record<number, number>> = {
  CATACOMB: {
    "1": 50,
    "2": 75,
    "3": 110,
    "4": 160,
    "5": 230,
    "6": 330,
    "7": 470,
    "8": 670,
    "9": 950,
    "10": 1340,
    "11": 1890,
    "12": 2665,
    "13": 3760,
    "14": 5260,
    "15": 7380,
    "16": 10300,
    "17": 14400,
    "18": 20000,
    "19": 27600,
    "20": 38000,
    "21": 52500,
    "22": 71500,
    "23": 97000,
    "24": 132000,
    "25": 180000,
    "26": 243000,
    "27": 328000,
    "28": 445000,
    "29": 600000,
    "30": 800000,
    "31": 1065000,
    "32": 1410000,
    "33": 1900000,
    "34": 2500000,
    "35": 3300000,
    "36": 4300000,
    "37": 5600000,
    "38": 7200000,
    "39": 9200000,
    "40": 12000000,
    "41": 15000000,
    "42": 19000000,
    "43": 24000000,
    "44": 30000000,
    "45": 38000000,
    "46": 48000000,
    "47": 60000000,
    "48": 75000000,
    "49": 93000000,
    "50": 116250000,
    "51": 200000000,
  },
};

const SKYBLOCK_DUNGEON_LEVEL_CAPS: Record<string, number> = {
  CATACOMB: 50,
};

const SKYBLOCK_SLAYER_LEVEL_XP: Record<string, Record<number, number>> = {
  zombie: {
    "1": 5,
    "2": 15,
    "3": 200,
    "4": 1000,
    "5": 5000,
    "6": 20000,
    "7": 100000,
    "8": 400000,
    "9": 1000000,
  },
  spider: {
    "1": 5,
    "2": 25,
    "3": 200,
    "4": 1000,
    "5": 5000,
    "6": 20000,
    "7": 100000,
    "8": 400000,
    "9": 1000000,
  },
  wolf: {
    "1": 10,
    "2": 30,
    "3": 250,
    "4": 1500,
    "5": 5000,
    "6": 20000,
    "7": 100000,
    "8": 400000,
    "9": 1000000,
  },
  enderman: {
    "1": 10,
    "2": 30,
    "3": 250,
    "4": 1500,
    "5": 5000,
    "6": 20000,
    "7": 100000,
    "8": 400000,
    "9": 1000000,
  },
  blaze: {
    "1": 10,
    "2": 30,
    "3": 250,
    "4": 1500,
    "5": 5000,
    "6": 20000,
    "7": 100000,
    "8": 400000,
    "9": 1000000,
  },
  vampire: {
    "1": 20,
    "2": 75,
    "3": 240,
    "4": 840,
    "5": 2400,
  },
};

const SKYBLOCK_SLAYER_LEVEL_CAPS: Record<string, number> = {
  zombie: 9,
  spider: 9,
  wolf: 9,
  enderman: 9,
  blaze: 9,
  vampire: 5,
};

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
  | "SKYBLOCK_SKILLS"
  | "SKYBLOCK_SKILLS_LEVELING_XP"
  | "SKYBLOCK_SKILLS_LEVEL_CAPS"
  | "SKYBLOCK_DUNGEON_SKILLS"
  | "SKYBLOCK_DUNGEON_LEVEL_CAPS"
  | "SKYBLOCK_SLAYER_LEVEL_XP"
  | "SKYBLOCK_SLAYER_LEVEL_CAPS";

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
const constants: Record<
  Constant,
  any & {
    SKYBLOCK_SKILLS_LEVELING_XP: SKYBLOCK_SKILLS_LEVELING_XP;
    SKYBLOCK_SKILLS_LEVEL_CAPS: SKYBLOCK_SKILLS_LEVEL_CAPS;
    SKYBLOCK_DUNGEON_SKILLS: typeof SKYBLOCK_DUNGEON_SKILLS;
    SKYBLOCK_DUNGEON_LEVEL_CAPS: typeof SKYBLOCK_DUNGEON_LEVEL_CAPS;
    SKYBLOCK_SLAYER_LEVEL_XP: typeof SKYBLOCK_SLAYER_LEVEL_XP;
    SKYBLOCK_SLAYER_LEVEL_CAPS: typeof SKYBLOCK_SLAYER_LEVEL_CAPS;
  }
> = {
  LAST_UPDATED: new Date().toJSON(),
  SKYBLOCK_SKILLS_LEVELING_XP: {},
  SKYBLOCK_SKILLS_LEVEL_CAPS: {},
  SKYBLOCK_DUNGEON_SKILLS,
  SKYBLOCK_DUNGEON_LEVEL_CAPS,
  SKYBLOCK_SLAYER_LEVEL_XP,
  SKYBLOCK_SLAYER_LEVEL_CAPS,
};

type Resource = string | string[];

const resources: Record<
  Exclude<
    Constant,
    | "LAST_UPDATED"
    | "SKYBLOCK_SKILLS_LEVELING_XP"
    | "SKYBLOCK_SKILLS_LEVEL_CAPS"
    | "SKYBLOCK_DUNGEON_SKILLS"
    | "SKYBLOCK_DUNGEON_LEVEL_CAPS"
    | "SKYBLOCK_SLAYER_LEVEL_XP"
    | "SKYBLOCK_SLAYER_LEVEL_CAPS"
  >,
  Resource
> = {
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

for (const [skillKey, skillInfo] of Object.entries(constants.SKYBLOCK_SKILLS)) {
  constants.SKYBLOCK_SKILLS_LEVEL_CAPS[skillKey] = (skillInfo as any).maxLevel;
  const xpMap: SKYBLOCK_SKILLS_LEVELING_XP_MAP = {};
  let previousTotalExp = 0;

  for (const levelData of (skillInfo as any).levels) {
    const xpRequiredForThisLevel = levelData.totalExpRequired - previousTotalExp;
    xpMap[levelData.level] = xpRequiredForThisLevel;
    previousTotalExp = levelData.totalExpRequired;
  }

  constants.SKYBLOCK_SKILLS_LEVELING_XP[skillKey] = xpMap;
}

export default constants;
