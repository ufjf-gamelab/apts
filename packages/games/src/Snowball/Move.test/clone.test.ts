import { shouldCloneMove } from "@repo/game/Move.test/clone.test.js";

import { moves } from "./setup.js";

Object.values(moves).forEach(move => {
  shouldCloneMove(move);
});
