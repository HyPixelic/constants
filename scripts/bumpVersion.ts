import { Logger } from "@pixelic/logger";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const logger = new Logger();
const path = resolve(process.cwd(), "../packages/static/jsr.json");

try {
  const JSRFile = JSON.parse(readFileSync(path, "utf8"));
  const oldVersion = JSRFile.version;

  const dateVersion = `${new Date().getFullYear()}.${new Date().getMonth() + 1}.${new Date().getDate()}`;

  let newVersion = dateVersion;

  if (oldVersion.startsWith(dateVersion)) {
    if (oldVersion === dateVersion) {
      newVersion = `${dateVersion}-1`;
    } else {
      const match = oldVersion.match(/-(\d+)$/);
      if (match) {
        newVersion = `${dateVersion}-${Number(match[1]) + 1}`;
      } else {
        newVersion = `${dateVersion}-1`;
      }
    }
  }

  JSRFile.version = newVersion;

  writeFileSync(path, JSON.stringify(JSRFile, null, 2) + "\n", "utf8");
  logger.info("BumpVersion", `Bumped version from ${oldVersion} to ${JSRFile.version}`);
} catch (error) {
  logger.error("BumpVersion", `An error occurred: ${error}`);
  process.exit(1);
}
