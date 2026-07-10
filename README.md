# HyPixelic/constants

A monorepo containing a collection of Hypixel Constants used by other HyPixelic Packages.

## ✨ Quick Start

[`npm`](https://npmjs.com/) » `npx jsr add @hypixelic/constants`<br/>
[`pnpm`](https://pnpm.io/) » `pnpm dlx jsr add @hypixelic/constants`<br/>
[`bun`](https://bun.sh/) » `bunx jsr add @hypixelic/constants`

```ts
import Constants from "@hypixelic/constants";

const constants = new Constants(["GAMES"]);

const games = constants.GAMES;
```

[`npm`](https://npmjs.com/) » `npx jsr add @hypixelic/static-constants`<br/>
[`pnpm`](https://pnpm.io/) » `pnpm dlx jsr add @hypixelic/static-constants`<br/>
[`bun`](https://bun.sh/) » `bunx jsr add @hypixelic/static-constants`

```ts
import Constants from "@hypixelic/static-constants";

const constants = new Constants(["GAMES"]);

const games = constants.GAMES;
```

## 📦 Packages

- `@hypixelic/constants` - Live Hypixel constants fetched from Hypixel resource endpoints.
- `@hypixelic/static-constants` - Static snapshot of constants for offline or more reliable use.

## 📁 Repository Structure

- `packages/live/` » `@hypixelic/constants`
- `packages/static/` » `@hypixelic/static-constants`
- `scripts/` — Scripts for updating the static constants

> [!NOTE]
> This project is not affiliated with or endorsed by [Hypixel, Inc.](https://hypixel.net/)
