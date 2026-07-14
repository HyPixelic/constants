import Constants from "../packages/live/index.js";
import StaticConstants from "../packages/static/index.js";
import { describe, it, after } from "node:test";
import * as assert from "node:assert";

describe("Live Constants", function () {
  describe("new Constants([])", function () {
    it("Should return an empty Constants Object", async function () {
      const constants = new Constants([]);
      await constants.init();
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS).length === 0);
      assert.ok(constants.SKYBLOCK_DUNGEON_SKILLS);
    });
  });
  describe("new Constants([]).setInterval('daily')", async function () {
    const constants = new Constants([]);
    await constants.init();
    it("Should return an empty Constants Object ", function () {
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS).length === 0);
      assert.ok(constants.SKYBLOCK_DUNGEON_SKILLS);
    });
    it("Should allow to call the setInterval() Method", function () {
      constants.setInterval("daily");
    });
  });
  describe("new Constants()", function () {
    it("Should return the default Constants Object", async function () {
      const constants = new Constants();
      await constants.init();
      assert.ok(constants.LAST_UPDATED);
      assert.ok(Object.keys(constants.GAMES).length > 0);
      assert.ok(Object.keys(constants.ACHIEVEMENTS).length > 0);
      assert.ok(Object.keys(constants.GUILD_ACHIEVEMENTS).length > 0);
      assert.ok(Object.keys(constants.QUESTS).length > 0);
      assert.ok(Object.keys(constants.CHALLENGES).length > 0);
      assert.ok(Object.keys(constants.VANITY_PETS).length > 0);
      assert.ok(Object.keys(constants.VANITY_PETS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_COLLECTIONS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_ITEMS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS_LEVELING_XP).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS_LEVEL_CAPS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_DUNGEON_SKILLS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_DUNGEON_LEVEL_CAPS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SLAYER_LEVEL_XP).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SLAYER_LEVEL_CAPS).length > 0);
      assert.ok(Object.keys(constants.RESOURCEPACKS).length > 0);
    });
  });
});

describe("Static Constants", function () {
  describe("new Constants([])", function () {
    it("Should return an empty Constants Object", async function () {
      const constants = new StaticConstants([]);
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS).length === 0);
      assert.ok(constants.SKYBLOCK_DUNGEON_SKILLS);
    });
  });
  describe("new Constants()", function () {
    it("Should return the default Constants Object", async function () {
      const constants = new StaticConstants();
      assert.ok(constants.LAST_UPDATED);
      assert.ok(Object.keys(constants.GAMES).length > 0);
      assert.ok(Object.keys(constants.ACHIEVEMENTS).length > 0);
      assert.ok(Object.keys(constants.GUILD_ACHIEVEMENTS).length > 0);
      assert.ok(Object.keys(constants.QUESTS).length > 0);
      assert.ok(Object.keys(constants.CHALLENGES).length > 0);
      assert.ok(Object.keys(constants.VANITY_PETS).length > 0);
      assert.ok(Object.keys(constants.VANITY_PETS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_COLLECTIONS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_ITEMS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS_LEVELING_XP).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SKILLS_LEVEL_CAPS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_DUNGEON_SKILLS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_DUNGEON_LEVEL_CAPS).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SLAYER_LEVEL_XP).length > 0);
      assert.ok(Object.keys(constants.SKYBLOCK_SLAYER_LEVEL_CAPS).length > 0);
      assert.ok(Object.keys(constants.RESOURCEPACKS).length > 0);
    });
  });
});

after(function () {
  setTimeout(() => process.exit(), 3000);
});
