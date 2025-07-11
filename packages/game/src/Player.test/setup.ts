import type Player from "../Player.js";

type PlayerParams = ConstructorParameters<typeof Player>[number];

const createPlayerParams = ({
  name,
  symbol,
}: Pick<PlayerParams, "name" | "symbol">): PlayerParams => ({
  name,
  symbol,
});

export { createPlayerParams };
