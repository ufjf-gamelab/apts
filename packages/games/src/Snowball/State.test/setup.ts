import type { IndexOfState } from "@repo/game/State.js";
import {
  createStateParams,
  createStatesWithData,
} from "@repo/game/State.test/setup.js";

import { playersWithData } from "../Player.test/setup.js";
import { slotsWithData } from "../Slot.test/setup.js";
import { SnowballState } from "../State.js";

type RequiredSnowballStateParams = Pick<
  SnowballStateParams,
  "game" | "indexOfPlayer" | "score" | "slots"
>;

type SnowballStateParams = ConstructorParameters<typeof SnowballState>[number];

const createSnowballStateParams = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: RequiredSnowballStateParams): SnowballStateParams =>
  createStateParams({ game, indexOfPlayer, score, slots });

const createSnowballState = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: SnowballStateParams): SnowballState =>
  new SnowballState({
    game,
    indexOfPlayer,
    score,
    slots,
  });

const paramsOfStates = {
  player0WithNoScoreAndAllSlotsEmpty: {
    game: null,
    indexOfPlayer: playersWithData.alice.indexOfPlayer,
    score: 0,
    slots: [slotsWithData.centerOfCenter.slot],
  },
} as const satisfies Record<string, SnowballStateParams>;

type RecordOfStatesWithData = {
  [K in keyof typeof paramsOfStates]: {
    indexOfState: IndexOfState;
    keyOfState: keyof typeof paramsOfStates;
    params: SnowballStateParams;
    state: SnowballState;
  };
};

const statesWithDataForUnitTest = createStatesWithData({
  createState: createSnowballState,
  createStateParams: createSnowballStateParams,
  partialParamsOfStates: paramsOfStates,
}) as RecordOfStatesWithData;

export { statesWithDataForUnitTest };
