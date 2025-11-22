import type { Game } from "../Game.js";
import type { GameWithData } from "../Game.test/setup.js";
import type { IndexOfMove, Move } from "../Move.js";
import type { MoveWithData } from "../Move.test/setup.js";
import type { IndexOfPlayer, Player } from "../Player.js";
import type { PlayerWithData } from "../Player.test/setup.js";
import type { Score } from "../Score.js";
import type { ScoreWithData } from "../Score.test/setup.js";
import type { Slot } from "../Slot.js";
import type { SlotWithData } from "../Slot.test/setup.js";

import { type State, type StateParams } from "../State.js";

type DerivedStateParams<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
> = Pick<
  StateParams<G, M, P, S, Sc, Sl>,
  "game" | "indexOfPlayer" | "score" | "slots"
>;

interface RequiredStateParams<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedGameWithData extends GameWithData<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedScoreWithData extends ScoreWithData<Sc>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
> {
  game: ExtendedGameWithData;
  isFinal: boolean;
  player: { index: IndexOfPlayer; player: ExtendedPlayerWithData };
  score: ExtendedScoreWithData;
  slots: readonly ExtendedSlotWithData[];
  validMoves: ReadonlyMap<IndexOfMove, ExtendedMoveWithData>;
}

interface StateWithData<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedGameWithData extends GameWithData<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedScoreWithData extends ScoreWithData<Sc>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
  Params extends RequiredStateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedGameWithData,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedScoreWithData,
    ExtendedSlotWithData
  > = RequiredStateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedGameWithData,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedScoreWithData,
    ExtendedSlotWithData
  >,
> {
  keyOfState: string;
  params: Params;
  state: S;
}

const deriveStateParams = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedGameWithData extends GameWithData<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedScoreWithData extends ScoreWithData<Sc>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
>({
  game,
  player,
  score,
  slots,
}: Pick<
  RequiredStateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedGameWithData,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedScoreWithData,
    ExtendedSlotWithData
  >,
  "game" | "player" | "score" | "slots"
>): DerivedStateParams<G, M, P, S, Sc, Sl> => ({
  game: game.game,
  indexOfPlayer: player.index,
  score: score.score,
  slots: slots.map(({ slot }) => slot),
});

// eslint-disable-next-line max-lines-per-function
const createStatesWithData = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedGameWithData extends GameWithData<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedScoreWithData extends ScoreWithData<Sc>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
  RequiredParams extends RequiredStateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedGameWithData,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedScoreWithData,
    ExtendedSlotWithData
  >,
  DerivedParams extends DerivedStateParams<G, M, P, S, Sc, Sl>,
  RecordOfRequiredParams extends Record<string, RequiredParams>,
>({
  create,
  deriveParams,
  recordOfRequiredParams,
}: {
  create: (params: DerivedParams) => S;
  deriveParams: (requiredParams: RequiredParams) => DerivedParams;
  recordOfRequiredParams: RecordOfRequiredParams;
}): {
  [K in keyof RecordOfRequiredParams]: {
    keyOfState: K;
    params: RequiredParams;
    state: S;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      keyOfState: K;
      params: RequiredParams;
      state: S;
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
            keyOfState: key,
            params: requiredParams,
            state: create(deriveParams(requiredParams)),
          } satisfies StateWithData<
            G,
            M,
            P,
            S,
            Sc,
            Sl,
            ExtendedGameWithData,
            ExtendedMoveWithData,
            ExtendedPlayerWithData,
            ExtendedScoreWithData,
            ExtendedSlotWithData,
            RequiredParams
          >,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedStateParams, RequiredStateParams, StateWithData };
export { createStatesWithData, deriveStateParams };
