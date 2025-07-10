import Player from "../Player.js";

const createPlayer = ({
  name,
  symbol,
}: Pick<
  ConstructorParameters<typeof Player>[number],
  "name" | "symbol"
>): Player => new Player({ name, symbol });

const players: Record<string, Player> = {
  alice: createPlayer({ name: "Alice", symbol: "X" }),
  bruno: createPlayer({ name: "Bruno", symbol: "O" }),
} as const;

export { players };
