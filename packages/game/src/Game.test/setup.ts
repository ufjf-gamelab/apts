import { type Game, type GameParams, type IndexOfGame } from "../Game.js";
import type { Move } from "../Move.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const createGameParams = <M extends Move>({
  moves,
  name,
  players,
  quantityOfSlots,
}: Pick<
  GameParams<M>,
  "moves" | "name" | "players" | "quantityOfSlots"
>): GameParams<M> => ({
  moves,
  name,
  players,
  quantityOfSlots,
});

const createGamesWithData = <
  PartialParams,
  DerivedGameParams,
  M extends Move,
  S extends State<M, Sl>,
  Sl extends Slot,
>({
  createGame: create,
  createGameParams: createParams,
  partialParamsOfGames,
}: {
  createGame: (params: DerivedGameParams) => Game<M, S, Sl>;
  createGameParams: (partialParams: PartialParams) => DerivedGameParams;
  partialParamsOfGames: Record<string, PartialParams>;
}) =>
  Object.entries(partialParamsOfGames).reduce<{
    [K in keyof typeof partialParamsOfGames]: {
      game: Game<M, S, Sl>;
      indexOfGame: IndexOfGame;
      keyOfGame: string;
      params: DerivedGameParams;
    };
  }>((gamesWithData, [key, partialParams], index) => {
    const params = createParams(partialParams);
    gamesWithData[key] = {
      game: create(params),
      indexOfGame: index,
      keyOfGame: key,
      params,
    };
    return gamesWithData;
  }, {});

export { createGameParams, createGamesWithData };
