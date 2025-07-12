import { type Player } from "../Player.js";

type PlayerParams = ConstructorParameters<typeof Player>[number];

const createPlayerParams = ({
  name,
  symbol,
}: Pick<PlayerParams, "name" | "symbol">): PlayerParams => ({
  name,
  symbol,
});

const createPlayersWithParams = <PartialParams, DerivedPlayerParams>({
  createPlayer: create,
  createPlayerParams: createParams,
  partialParamsOfPlayers,
}: {
  createPlayer: (params: DerivedPlayerParams) => Player;
  createPlayerParams: (partialParams: PartialParams) => DerivedPlayerParams;
  partialParamsOfPlayers: Record<string, PartialParams>;
}) =>
  Object.entries(partialParamsOfPlayers).reduce<{
    [K in keyof typeof partialParamsOfPlayers]: {
      params: DerivedPlayerParams;
      player: Player;
    };
  }>((playersWithParams, [key, partialParams]) => {
    const params = createParams(partialParams);
    playersWithParams[key] = {
      params,
      player: create(params),
    };
    return playersWithParams;
  }, {});

export { createPlayerParams, createPlayersWithParams };
