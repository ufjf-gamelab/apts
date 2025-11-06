import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { type Game, type GameParams, type IndexOfGame } from "../Game.js";

interface GameWithData<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  PartialParams,
  DerivedGameParams,
  ParamsRecord extends Record<string, PartialParams>,
> {
  game: G;
  indexOfGame: IndexOfGame;
  keyOfGame: keyof ParamsRecord;
  params: DerivedGameParams;
}

const createGameParams = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  moves,
  name,
  players,
  quantityOfSlots,
}: Pick<
  GameParams<M, P>,
  "moves" | "name" | "players" | "quantityOfSlots"
>): GameParams<M, P> => ({
  moves,
  name,
  players,
  quantityOfSlots,
});

const createGamesWithData = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  PartialParams,
  DerivedGameParams,
  ParamsRecord extends Record<string, PartialParams>,
>({
  createGame: create,
  createGameParams: createParams,
  partialParamsOfGames,
}: {
  createGame: (params: DerivedGameParams) => G;
  createGameParams: (partialParams: PartialParams) => DerivedGameParams;
  partialParamsOfGames: ParamsRecord;
}): {
  [K in keyof ParamsRecord]: GameWithData<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    PartialParams,
    DerivedGameParams,
    ParamsRecord
  >;
} => {
  type ResultType = {
    [K in keyof ParamsRecord]: GameWithData<
      G,
      M,
      P,
      S,
      Sc,
      Sl,
      PartialParams,
      DerivedGameParams,
      ParamsRecord
    >;
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from partialParamsOfGames, which ParamsRecord is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(partialParamsOfGames).map(([key, partialParams], index) => {
      const params = createParams(partialParams);
      return [
        key,
        {
          game: create(params),
          indexOfGame: index,
          keyOfGame: key,
          params,
        },
      ] as const;
    }),
  ) as ResultType;
};

export type { GameWithData };
export { createGameParams, createGamesWithData };
