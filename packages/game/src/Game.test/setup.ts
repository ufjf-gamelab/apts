import type { Move } from "../Move.js";
import type { MoveWithData } from "../Move.test/setup.js";
import type { Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { type Game, type GameParams, type IndexOfGame } from "../Game.js";

type DerivedGameParams<
  M extends Move<M>,
  P extends Player<P>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
> = Pick<GameParams<M, P>, "moves" | "players"> &
  Pick<
    RequiredGameParams<M, P, ExtendedMoveWithData, ExtendedPlayerWithData>,
    "name" | "quantityOfSlots"
  >;

interface GameWithData<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  Params extends RequiredGameParams<
    M,
    P,
    ExtendedMoveWithData,
    ExtendedPlayerWithData
  > = RequiredGameParams<M, P, ExtendedMoveWithData, ExtendedPlayerWithData>,
> {
  game: G;
  indexOfGame: IndexOfGame;
  keyOfGame: string;
  params: Params;
}

type RequiredGameParams<
  M extends Move<M>,
  P extends Player<P>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
> = Pick<GameParams<M, P>, "name" | "quantityOfSlots"> & {
  moves: Record<string, ExtendedMoveWithData>;
  players: Record<string, ExtendedPlayerWithData>;
};

const deriveGameParams = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
>({
  moves,
  name,
  players,
  quantityOfSlots,
}: RequiredGameParams<
  M,
  P,
  ExtendedMoveWithData,
  ExtendedPlayerWithData
>): DerivedGameParams<M, P, ExtendedMoveWithData, ExtendedPlayerWithData> => ({
  moves: Object.values(moves).map(({ move }) => move),
  name,
  players: Object.values(players).map(({ player }) => player),
  quantityOfSlots,
});

// eslint-disable-next-line max-lines-per-function
const createGamesWithData = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  RequiredParams extends RequiredGameParams<
    M,
    P,
    ExtendedMoveWithData,
    ExtendedPlayerWithData
  >,
  DerivedParams extends DerivedGameParams<
    M,
    P,
    ExtendedMoveWithData,
    ExtendedPlayerWithData
  >,
  RecordOfRequiredParams extends Record<string, RequiredParams>,
>({
  create,
  deriveParams,
  recordOfRequiredParams,
}: {
  create: (params: DerivedParams) => G;
  deriveParams: (requiredParams: RequiredParams) => DerivedParams;
  recordOfRequiredParams: RecordOfRequiredParams;
}): {
  [K in keyof RecordOfRequiredParams]: {
    game: G;
    indexOfGame: IndexOfGame;
    keyOfGame: K;
    params: RequiredParams;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      game: G;
      indexOfGame: IndexOfGame;
      keyOfGame: K;
      params: RequiredParams;
    };
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParams, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(recordOfRequiredParams).map(
      ([key, requiredParams], index) =>
        [
          key,
          {
            game: create(deriveParams(requiredParams)),
            indexOfGame: index,
            keyOfGame: key,
            params: requiredParams,
          } satisfies GameWithData<
            G,
            M,
            P,
            S,
            Sc,
            Sl,
            ExtendedMoveWithData,
            ExtendedPlayerWithData,
            RequiredParams
          >,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedGameParams, GameWithData, RequiredGameParams };
export { createGamesWithData, deriveGameParams };
