import {
  createPlayerParams,
  createPlayersWithParams,
} from "@repo/game/Player.test/setup.js";

import { SnowballPlayer } from "../Player.js";

type SnowballPlayerParams = ConstructorParameters<
  typeof SnowballPlayer
>[number];

const createPlayer = ({
  name,
  symbol,
}: Pick<SnowballPlayerParams, "name" | "symbol">): SnowballPlayer =>
  new SnowballPlayer(createPlayerParams({ name, symbol }));

const playerParams = {
  alice: { name: "Alice", symbol: "X" },
  bruno: { name: "Bruno", symbol: "O" },
} as const;

const mutablePlayerParams = { ...playerParams };
const playersWithParams = createPlayersWithParams({
  createPlayer,
  playerParams: mutablePlayerParams,
}) as {
  [K in keyof typeof mutablePlayerParams]: {
    params: SnowballPlayerParams;
    player: SnowballPlayer;
  };
};

export { playersWithParams };
