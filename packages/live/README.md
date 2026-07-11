# HyPixelic/constants

![Version](https://jsr.io/badges/@hypixelic/constants)
![Downloads](https://jsr.io/badges/@hypixelic/constants/total-downloads)

## ✨ Quick Start

[`npm`](https://npmjs.com/) » `npx jsr add @hypixelic/constants`<br/>
[`pnpm`](https://pnpm.io/) » `pnpm dlx jsr add @hypixelic/constants`<br/>
[`bun`](https://bun.sh/) » `bunx jsr add @hypixelic/constants`

```TS
import Constants from "@hypixelic/constants"

const constants = new Constants(["GAMES"])
await constants.init()
/* Optionally set an interval to automatically update the constants every 24 hours */
await constants.setInterval("daily")

const games = constants.GAMES
```

> [!NOTE]
> This project is not affiliated with or endorsed by [Hypixel, Inc.](https://hypixel.net/)
