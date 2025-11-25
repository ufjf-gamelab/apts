import type { Move } from "../Move.js";
import type { MoveWithData } from "../Move.test/setup.js";
import type { Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { SlotWithData } from "../Slot.test/setup.js";
import type { State } from "../State.js";

import { type Game, type ParamsOfGame } from "../Game.js";

type DerivedParamsOfGame<
  M extends Move<M>,
  P extends Player<P>,
  Sl extends Slot<Sl>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
> = Pick<ParamsOfGame<M, P, Sl>, "moves" | "players" | "slots"> &
  Pick<
    RequiredParamsOfGame<
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
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
  Params extends RequiredParamsOfGame<
    M,
    P,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  > = RequiredParamsOfGame<
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

type RequiredParamsOfGame<
  M extends Move<M>,
  P extends Player<P>,
  Sl extends Slot<Sl>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
> = Pick<ParamsOfGame<M, P, Sl>, "name"> & {
  moves: readonly ExtendedMoveWithData[];
  players: readonly ExtendedPlayerWithData[];
  slots: readonly ExtendedSlotWithData[];
};

const deriveParamsOfGame = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
>({
  moves,
  name,
  players,
  slots,
}: Pick<
  RequiredParamsOfGame<
    M,
    P,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  "moves" | "name" | "players" | "slots"
>): DerivedParamsOfGame<
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
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
  RequiredParams extends RequiredParamsOfGame<
    M,
    P,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  DerivedParams extends DerivedParamsOfGame<
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
      ([keyOfGame, requiredParams]) =>
        [
          keyOfGame,
          {
            game: create(deriveParams(requiredParams)),
            keyOfGame,
            params: requiredParams,
          } satisfies GameWithData<
            G,
            M,
            P,
            Sc,
            Sl,
            St,
            ExtendedMoveWithData,
            ExtendedPlayerWithData,
            ExtendedSlotWithData,
            RequiredParams
          >,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedParamsOfGame, GameWithData, RequiredParamsOfGame };
export { createGamesWithData, deriveParamsOfGame };
