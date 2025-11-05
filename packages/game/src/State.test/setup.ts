import type { Move } from "../Move.js";
import type { Slot } from "../Slot.js";
import { type IndexOfState, type State, type StateParams } from "../State.js";

const createStateParams = <
  M extends Move,
  S extends State<M, Sl>,
  Sl extends Slot,
>({
  game,
  indexOfPlayer,
  score,
  slots,
}: Pick<
  StateParams<M, S, Sl>,
  "game" | "indexOfPlayer" | "score" | "slots"
>): StateParams<M, S, Sl> => ({
  game,
  indexOfPlayer,
  score,
  slots,
});

const createStatesWithData = <
  PartialParams,
  DerivedStateParams,
  M extends Move,
  S extends State<M, Sl>,
  Sl extends Slot,
>({
  createState: create,
  createStateParams: createParams,
  partialParamsOfStates,
}: {
  createState: (params: DerivedStateParams) => S;
  createStateParams: (partialParams: PartialParams) => DerivedStateParams;
  partialParamsOfStates: Record<string, PartialParams>;
}) =>
  Object.entries(partialParamsOfStates).reduce<{
    [K in keyof typeof partialParamsOfStates]: {
      indexOfState: IndexOfState;
      keyOfState: string;
      params: DerivedStateParams;
      state: S;
    };
  }>((statesWithData, [key, partialParams], index) => {
    const params = createParams(partialParams);
    statesWithData[key] = {
      indexOfState: index,
      keyOfState: key,
      params,
      state: create(params),
    };
    return statesWithData;
  }, {});

export { createStateParams, createStatesWithData };
