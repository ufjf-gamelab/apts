import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";

import { type IndexOfState, type State, type StateParams } from "../State.js";

type DerivedStateParams<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
> = RequiredStateParams<G, M, P, S, Sc, Sl>;

type RequiredStateParams<
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

interface StateWithData<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  Params extends RequiredStateParams<G, M, P, S, Sc, Sl> = RequiredStateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl
  >,
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
>({
  game,
  indexOfPlayer,
  score,
  slots,
}: RequiredStateParams<G, M, P, S, Sc, Sl>): DerivedStateParams<
  G,
  M,
  P,
  S,
  Sc,
  Sl
> => ({
  game,
  indexOfPlayer,
  score,
  slots,
});

const createStatesWithData = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  RequiredParams extends RequiredStateParams<G, M, P, S, Sc, Sl>,
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
          } satisfies StateWithData<G, M, P, S, Sc, Sl, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedStateParams, RequiredStateParams, StateWithData };
export { createStatesWithData, deriveStateParams };
