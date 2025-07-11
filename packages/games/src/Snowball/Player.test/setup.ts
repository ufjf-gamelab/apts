import { createPlayerParams } from "@repo/game/Player.test/setup.js";

import Player from "../Player.js";

type PlayerParams = ConstructorParameters<typeof Player>[number];

const createPlayer = ({
  name,
  symbol,
}: Pick<PlayerParams, "name" | "symbol">): Player =>
  new Player(createPlayerParams({ name, symbol }));

const players: Record<string, Player> = {
  alice: createPlayer({ name: "Alice", symbol: "X" }),
  bruno: createPlayer({ name: "Bruno", symbol: "O" }),
} as const;

export { players };
