import {
  type default as BasePlayer,
  createPlayer as createBasePlayer,
} from "@repo/game/Player.js";

type Player = BasePlayer;

const createPlayer = ({
  name,
  symbol,
}: {
  name: Player["name"];
  symbol: Player["symbol"];
}): Player =>
  createBasePlayer({
    name,
    symbol,
  });

const players: Record<string, Player> = {
  alice: createPlayer({ name: "Alice", symbol: "X" }),
  bruno: createPlayer({ name: "Bruno", symbol: "O" }),
} as const;

export type { Player as default };
export { players };
