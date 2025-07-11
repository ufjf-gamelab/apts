import { type Player } from "../Player.js";

type PlayerParams = ConstructorParameters<typeof Player>[number];

const createPlayerParams = ({
  name,
  symbol,
}: Pick<PlayerParams, "name" | "symbol">): PlayerParams => ({
  name,
  symbol,
});

const createPlayersWithParams = ({
  createPlayer,
  playerParams,
}: {
  createPlayer: (params: PlayerParams) => Player;
  playerParams: Record<string, PlayerParams>;
}) =>
  Object.entries(playerParams).reduce<{
    [K in keyof typeof playerParams]: {
      params: PlayerParams;
      player: Player;
    };
  }>((acc, [key, params]) => {
    acc[key] = {
      params,
      player: createPlayer(params),
    };
    return acc;
  }, {});

export { createPlayerParams, createPlayersWithParams };
