import JSR from "./jsr.json" with { type: "json" };

/**
 * Union of all possible intervals for updating the constants automatically.
 *
 * @example
 *
 * ```ts
 * import Constants from '@hypixelic/constants'
 *
 * const constants = new Constants(['GAMES', 'SKYBLOCK_ITEMS'])
 * await constants.init()
 * await constants.setInterval("daily")
 * ```
 */
export type HYPIXELIC_CONSTANTS_INTERVALS = "daily" | "weekly" | "monthly" | number;

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
export type Constant =
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
  | "SKYBLOCK_SLAYER_LEVEL_CAPS"
  | "RESOURCEPACKS";

/**
 * Type containing all possible keys for the Constants that can be fetched live.
 */
export type FetchableConstant = Exclude<
  Constant,
  | "LAST_UPDATED"
  | "SKYBLOCK_SKILLS_LEVELING_XP"
  | "SKYBLOCK_SKILLS_LEVEL_CAPS"
  | "SKYBLOCK_DUNGEON_SKILLS"
  | "SKYBLOCK_DUNGEON_LEVEL_CAPS"
  | "SKYBLOCK_SLAYER_LEVEL_XP"
  | "SKYBLOCK_SLAYER_LEVEL_CAPS"
>;

type Resource = string | string[];

const resources: Record<FetchableConstant, Resource> = {
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
  RESOURCEPACKS: ["https://api.hypixel.net/v2/resources/packs", "packs"],
};

/**
 *
 * @example
 *
 * ```ts
 * import Constants from '@hypixelic/constants'
 *
 * const constants = new Constants(['GAMES', 'SKYBLOCK_ITEMS'])
 * await constants.init()
 *
 * console.log(constants.GAMES)
 * ```
 */
export default class Constants {
  public LAST_UPDATED: string = new Date().toJSON();
  public GAMES: any = {};
  public ACHIEVEMENTS: any = {};
  public GUILD_ACHIEVEMENTS: any = {};
  public QUESTS: any = {};
  public CHALLENGES: any = {};
  public VANITY_PETS: any = {};
  public VANITY_COMPANIONS: any = {};
  public SKYBLOCK_COLLECTIONS: any = {};
  public SKYBLOCK_ITEMS: any = {};
  public SKYBLOCK_SKILLS: any = {};
  public SKYBLOCK_SKILLS_LEVELING_XP: SKYBLOCK_SKILLS_LEVELING_XP = {};
  public SKYBLOCK_SKILLS_LEVEL_CAPS: SKYBLOCK_SKILLS_LEVEL_CAPS = {};
  public SKYBLOCK_DUNGEON_SKILLS = SKYBLOCK_DUNGEON_SKILLS;
  public SKYBLOCK_DUNGEON_LEVEL_CAPS = SKYBLOCK_DUNGEON_LEVEL_CAPS;
  public SKYBLOCK_SLAYER_LEVEL_XP = SKYBLOCK_SLAYER_LEVEL_XP;
  public SKYBLOCK_SLAYER_LEVEL_CAPS = SKYBLOCK_SLAYER_LEVEL_CAPS;
  public RESOURCEPACKS: any = {};

  private resourcesToFetch: FetchableConstant[];

  constructor(live?: FetchableConstant[]) {
    this.resourcesToFetch = live || (Object.keys(resources) as FetchableConstant[]);
  }

  /**
   * Initializes the constants by fetching the latest data from the Hypixel API.
   *
   * Redundant with `Constants.update()`, but added for convenience.
   *
   */
  public async init(): Promise<void> {
    return await this.update();
  }

  /**
   * Updates the constants with the latest data from the Hypixel API.
   *
   * @example
   *
   * ```ts
   * const constants = new Constants(['GAMES']);
   * await constants.update();
   * ```
   */
  public async update(): Promise<void> {
    const headers = {
      "User-Agent": `hypixelic-constants/${JSR.version} (https://jsr.io/@hypixelic/constants)`,
      Accept: "application/json",
    };

    for (const key of this.resourcesToFetch) {
      const value = resources[key];

      try {
        if (Array.isArray(value)) {
          this[key] = (await (await fetch(value[0], { headers })).json())[value[1]];
        } else {
          this[key] = await (await fetch(value, { headers })).json();
        }
        delete this[key]["success"];
        delete this[key]["lastUpdated"];
      } catch {
        console.log(`Failed to fetch resource: ${key}`);
      }
    }

    if (this.resourcesToFetch.includes("SKYBLOCK_SKILLS") && Object.keys(this.SKYBLOCK_SKILLS).length > 0) {
      for (const [skillKey, skillInfo] of Object.entries(this.SKYBLOCK_SKILLS)) {
        this.SKYBLOCK_SKILLS_LEVEL_CAPS[skillKey] = (skillInfo as any).maxLevel;
        const xpMap: SKYBLOCK_SKILLS_LEVELING_XP_MAP = {};
        let previousTotalExp = 0;

        for (const levelData of (skillInfo as any).levels) {
          const xpRequiredForThisLevel = levelData.totalExpRequired - previousTotalExp;
          xpMap[levelData.level] = xpRequiredForThisLevel;
          previousTotalExp = levelData.totalExpRequired;
        }

        this.SKYBLOCK_SKILLS_LEVELING_XP[skillKey] = xpMap;
      }
    }

    this.LAST_UPDATED = new Date().toJSON();
  }

  /**
   * Sets an interval to update the constants at regular intervals.
   *
   * @example
   *
   * ```ts
   * const constants = new Constants(['GAMES']);
   * constants.setInterval("daily"); // Updates every day (24 hours)
   * constants.setInterval(3600000); // Updates every hour (3600000 ms)
   * ```
   */
  public setInterval(interval: HYPIXELIC_CONSTANTS_INTERVALS): void {
    if (typeof interval === "string") {
      switch (interval) {
        case "daily":
          interval = 24 * 60 * 60 * 1000;
          break;
        case "weekly":
          interval = 7 * 24 * 60 * 60 * 1000;
          break;
        case "monthly":
          interval = 30 * 24 * 60 * 60 * 1000;
          break;
        default:
          throw new Error(`Invalid interval string: ${interval}`);
      }
    }
    setInterval(async () => {
      await this.update();
    }, interval);
  }
}
