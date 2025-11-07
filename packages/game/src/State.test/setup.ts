import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { SlotWithData } from "../Slot.test/setup.js";

import { type IndexOfState, type State, type StateParams } from "../State.js";

type DerivedStateParams<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
> = Pick<
  RequiredStateParams<G, M, P, S, Sc, Sl, ExtendedSlotWithData>,
  "game" | "indexOfPlayer" | "score"
> &
  Pick<StateParams<G, M, P, S, Sc, Sl>, "slots">;

type RequiredStateParams<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
> = Pick<
  StateParams<G, M, P, S, Sc, Sl>,
  "game" | "indexOfPlayer" | "score"
> & {
  slots: Record<string, ExtendedSlotWithData>;
};

interface StateWithData<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
  Params extends RequiredStateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedSlotWithData
  > = RequiredStateParams<G, M, P, S, Sc, Sl, ExtendedSlotWithData>,
> {
  indexOfState: IndexOfState;
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
  ExtendedSlotWithData extends SlotWithData<Sl>,
>({
  game,
  indexOfPlayer,
  score,
  slots,
}: RequiredStateParams<
  G,
  M,
  P,
  S,
  Sc,
  Sl,
  ExtendedSlotWithData
>): DerivedStateParams<G, M, P, S, Sc, Sl, ExtendedSlotWithData> => ({
  game,
  indexOfPlayer,
  score,
  slots: Object.values(slots).map(({ slot }) => slot),
});

// eslint-disable-next-line max-lines-per-function
const createStatesWithData = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
  RequiredParams extends RequiredStateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedSlotWithData
  >,
  DerivedParams extends DerivedStateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    ExtendedSlotWithData
  >,
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
    indexOfState: IndexOfState;
    keyOfState: K;
    params: RequiredParams;
    state: S;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      indexOfState: IndexOfState;
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
      ([key, requiredParams], index) =>
        [
          key,
          {
            indexOfState: index,
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
            ExtendedSlotWithData,
            RequiredParams
          >,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedStateParams, RequiredStateParams, StateWithData };
export { createStatesWithData, deriveStateParams };
