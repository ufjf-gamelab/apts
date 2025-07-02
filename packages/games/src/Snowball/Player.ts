import type { default as Player } from "@repo/game/Player.js";
import { createPlayer } from "@repo/game/tests/Player/setup.js";

const players: Record<string, Player> = {
  alice: createPlayer({ name: "Alice", symbol: "X" }),
  bruno: createPlayer({ name: "Bruno", symbol: "O" }),
} as const;

export { players };
