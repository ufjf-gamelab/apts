import { shouldClonePlayer } from "@repo/game/Player.test/clone.test.js";

import { players } from "./setup.js";

Object.values(players).forEach(player => {
  shouldClonePlayer(player);
});
