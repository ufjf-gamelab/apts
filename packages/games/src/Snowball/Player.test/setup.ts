import {
  createPlayerParams,
  createPlayersWithParams,
} from "@repo/game/Player.test/setup.js";

import { SnowballPlayer } from "../Player.js";

type SnowballPlayerParams = ConstructorParameters<
  typeof SnowballPlayer
>[number];

const createSnowballPlayerParams = ({
  name,
  symbol,
}: Pick<SnowballPlayerParams, "name" | "symbol">): SnowballPlayerParams =>
  createPlayerParams({
    name,
    symbol,
  });

const createPlayer = ({ name, symbol }: SnowballPlayerParams): SnowballPlayer =>
  new SnowballPlayer({
    name,
    symbol,
  });

const paramsOfPlayers = {
  alice: { name: "Alice", symbol: "X" },
  bruno: { name: "Bruno", symbol: "O" },
} as const satisfies Record<string, SnowballPlayerParams>;

const playersWithParams = createPlayersWithParams({
  createPlayer,
  createPlayerParams: createSnowballPlayerParams,
  partialParamsOfPlayers: paramsOfPlayers,
}) as {
  [K in keyof typeof paramsOfPlayers]: {
    params: SnowballPlayerParams;
    player: SnowballPlayer;
  };
};

export { playersWithParams };
