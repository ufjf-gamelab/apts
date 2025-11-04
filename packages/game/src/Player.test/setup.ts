import { type IndexOfPlayer, type Player } from "../Player.js";

type PlayerParams = ConstructorParameters<typeof Player>[number];

const createPlayerParams = ({
  name,
  symbol,
}: Pick<PlayerParams, "name" | "symbol">): PlayerParams => ({
  name,
  symbol,
});

const createPlayersWithData = <PartialParams, DerivedPlayerParams>({
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
      indexOfPlayer: IndexOfPlayer;
      keyOfPlayer: string;
      params: DerivedPlayerParams;
      player: Player;
    };
  }>((playersWithData, [key, partialParams], index) => {
    const params = createParams(partialParams);
    playersWithData[key] = {
      indexOfPlayer: index,
      keyOfPlayer: key,
      params,
      player: create(params),
    };
    return playersWithData;
  }, {});

const getKeyOfPlayer = ({
  indexOfPlayer,
  players,
}: {
  indexOfPlayer: IndexOfPlayer;
  players: ReturnType<typeof createPlayersWithData>;
}) => Object.values(players).at(indexOfPlayer)?.keyOfPlayer;

export { createPlayerParams, createPlayersWithData, getKeyOfPlayer };
