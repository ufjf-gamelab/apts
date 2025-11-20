import type { Move } from "../Move.js";
import type { MoveWithData } from "../Move.test/setup.js";
import type { Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { SlotWithData } from "../Slot.test/setup.js";
import type { State } from "../State.js";

import { type Game, type GameParams } from "../Game.js";

type DerivedGameParams<
  M extends Move<M>,
  P extends Player<P>,
  Sl extends Slot<Sl>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
> = Pick<GameParams<M, P, Sl>, "moves" | "players" | "slots"> &
  Pick<
    RequiredGameParams<
      M,
      P,
      Sl,
      ExtendedMoveWithData,
      ExtendedPlayerWithData,
      ExtendedSlotWithData
    >,
    "name"
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
  ExtendedSlotWithData extends SlotWithData<Sl>,
  Params extends RequiredGameParams<
    M,
    P,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  > = RequiredGameParams<
    M,
    P,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
> {
  game: G;
  keyOfGame: string;
  params: Params;
}

type RequiredGameParams<
  M extends Move<M>,
  P extends Player<P>,
  Sl extends Slot<Sl>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
> = Pick<GameParams<M, P, Sl>, "name"> & {
  moves: readonly ExtendedMoveWithData[];
  players: readonly ExtendedPlayerWithData[];
  slots: readonly ExtendedSlotWithData[];
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
  ExtendedSlotWithData extends SlotWithData<Sl>,
>({
  moves,
  name,
  players,
  slots,
}: Pick<
  RequiredGameParams<
    M,
    P,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  "moves" | "name" | "players" | "slots"
>): DerivedGameParams<
  M,
  P,
  Sl,
  ExtendedMoveWithData,
  ExtendedPlayerWithData,
  ExtendedSlotWithData
> => ({
  moves: Object.values(moves).map(({ move }) => move),
  name,
  players: Object.values(players).map(({ player }) => player),
  slots: slots.map((slot) => slot.slot),
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
  ExtendedSlotWithData extends SlotWithData<Sl>,
  RequiredParams extends RequiredGameParams<
    M,
    P,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  DerivedParams extends DerivedGameParams<
    M,
    P,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
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
    keyOfGame: K;
    params: RequiredParams;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      game: G;
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
      ([key, requiredParams]) =>
        [
          key,
          {
            game: create(deriveParams(requiredParams)),
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
            ExtendedSlotWithData,
            RequiredParams
          >,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedGameParams, GameWithData, RequiredGameParams };
export { createGamesWithData, deriveGameParams };
