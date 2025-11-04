import { type IndexOfState, type State, type StateParams } from "../State.js";

const createStateParams = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: Pick<
  StateParams,
  "game" | "indexOfPlayer" | "score" | "slots"
>): StateParams => ({
  game,
  indexOfPlayer,
  score,
  slots,
});

const createStatesWithData = <PartialParams, DerivedStateParams>({
  createState: create,
  createStateParams: createParams,
  partialParamsOfStates,
}: {
  createState: (params: DerivedStateParams) => State;
  createStateParams: (partialParams: PartialParams) => DerivedStateParams;
  partialParamsOfStates: Record<string, PartialParams>;
}) =>
  Object.entries(partialParamsOfStates).reduce<{
    [K in keyof typeof partialParamsOfStates]: {
      indexOfState: IndexOfState;
      keyOfState: string;
      params: DerivedStateParams;
      state: State;
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
