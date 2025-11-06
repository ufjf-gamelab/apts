import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";

import { type IndexOfState, type State, type StateParams } from "../State.js";

interface StateWithData<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  PartialParams,
  DerivedStateParams,
  ParamsRecord extends Record<string, PartialParams>,
> {
  indexOfState: IndexOfState;
  keyOfState: keyof ParamsRecord;
  params: DerivedStateParams;
  state: S;
}

const createStateParams = <
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
}: Pick<
  StateParams<G, M, P, S, Sc, Sl>,
  "game" | "indexOfPlayer" | "score" | "slots"
>): StateParams<G, M, P, S, Sc, Sl> => ({
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
  PartialParams,
  DerivedStateParams,
  ParamsRecord extends Record<string, PartialParams>,
>({
  createState: create,
  createStateParams: createParams,
  partialParamsOfStates,
}: {
  createState: (params: DerivedStateParams) => S;
  createStateParams: (partialParams: PartialParams) => DerivedStateParams;
  partialParamsOfStates: ParamsRecord;
}): {
  [K in keyof ParamsRecord]: StateWithData<
    G,
    M,
    P,
    S,
    Sc,
    Sl,
    PartialParams,
    DerivedStateParams,
    ParamsRecord
  >;
} => {
  type ResultType = {
    [K in keyof ParamsRecord]: StateWithData<
      G,
      M,
      P,
      S,
      Sc,
      Sl,
      PartialParams,
      DerivedStateParams,
      ParamsRecord
    >;
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from partialParamsOfStates, which ParamsRecord is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(partialParamsOfStates).map(([key, partialParams], index) => {
      const params = createParams(partialParams);
      return [
        key,
        {
          indexOfState: index,
          keyOfState: key,
          params,
          state: create(params),
        },
      ] as const;
    }),
  ) as ResultType;
};

export type { StateWithData };
export { createStateParams, createStatesWithData };
