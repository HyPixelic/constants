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
import RESOURCEPACKS from "./constants/resourcepacks.json" with { type: "json" };

const GUILD_LEVELING_XP: number[] = [
  100000, 150000, 250000, 500000, 750000, 1000000, 1250000, 1500000, 2000000, 2500000, 2500000, 2500000, 2500000,
  2500000, 3000000,
];

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
export type HyPixelicConstant =
  | "LAST_UPDATED"
  | "GUILD_LEVELING_XP"
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
export type HyPixelicImportableConstant = Exclude<
  HyPixelicConstant,
  | "LAST_UPDATED"
  | "GUILD_LEVELING_XP"
  | "SKYBLOCK_SKILLS_LEVELING_XP"
  | "SKYBLOCK_SKILLS_LEVEL_CAPS"
  | "SKYBLOCK_DUNGEON_SKILLS"
  | "SKYBLOCK_DUNGEON_LEVEL_CAPS"
  | "SKYBLOCK_SLAYER_LEVEL_XP"
  | "SKYBLOCK_SLAYER_LEVEL_CAPS"
>;

const objectMap: Record<HyPixelicImportableConstant, null | string> = {
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
  RESOURCEPACKS: "packs",
};

/**
 * @example
 *
 * ```ts
 * import Constants from '@hypixelic/static-constants'
 *
 * const constants = new Constants(['GAMES', 'SKYBLOCK_ITEMS'])
 *
 * console.log(constants.GAMES)
 * ```
 */
export default class Constants {
  public LAST_UPDATED: string = LAST_UPDATED[0];
  public GUILD_LEVELING_XP = GUILD_LEVELING_XP;
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

  private resourcesToInclude: HyPixelicImportableConstant[];

  constructor(include?: HyPixelicImportableConstant[]) {
    this.resourcesToInclude = include || (Object.keys(objectMap) as HyPixelicImportableConstant[]);

    const data: Record<string, any> = {
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
      RESOURCEPACKS,
    };

    for (const key of this.resourcesToInclude) {
      const subKey = objectMap[key];
      if (subKey === undefined) continue;

      this[key] = subKey ? data[key][subKey] : data[key];
      delete this[key]["success"];
      delete this[key]["lastUpdated"];
    }

    if (this.resourcesToInclude.includes("SKYBLOCK_SKILLS") && Object.keys(this.SKYBLOCK_SKILLS).length > 0) {
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
  }
}
