import type { IndexOfState } from "@repo/game/State.js";

import {
  createStatesWithData,
  deriveStateParams,
  type RequiredStateParams,
} from "@repo/game/State.test/setup.js";

import type { SnowballGame } from "../Game.js";
import type { SnowballMove } from "../Move.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballScore } from "../Score.js";
import type { SnowballSlot } from "../Slot.js";

import { gamesWithDataForUnitTest } from "../Game.test/setup.js";
import { playersWithData } from "../Player.test/setup.js";
import { scoresWithDataForUnitTest } from "../Score.test/setup.js";
import { slotsWithData } from "../Slot.test/setup.js";
import { SnowballState } from "../State.js";

type DerivedSnowballStateParams = RequiredSnowballStateParams;

type RequiredSnowballStateParams = Pick<
  RequiredStateParams<
    SnowballGame,
    SnowballMove,
    SnowballPlayer,
    SnowballState,
    SnowballScore,
    SnowballSlot
  >,
  "game" | "indexOfPlayer" | "score" | "slots"
>;

interface SnowballStateWithData<
  Params extends RequiredSnowballStateParams = RequiredSnowballStateParams,
> {
  indexOfState: IndexOfState;
  keyOfState: string;
  params: Params;
  state: SnowballState;
}

const deriveSnowballStateParams = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: RequiredSnowballStateParams): DerivedSnowballStateParams =>
  deriveStateParams({
    game,
    indexOfPlayer,
    score,
    slots,
  });

const createSnowballState = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: DerivedSnowballStateParams): SnowballState =>
  new SnowballState({
    game,
    indexOfPlayer,
    score,
    slots,
  });

const recordOfRequiredParamsOfStates = {
  player0WithNoScoreAndAllSlotsEmpty: {
    game: gamesWithDataForUnitTest.snowballWith9RowsAnd9Columns.game,
    indexOfPlayer: playersWithData.alice.indexOfPlayer,
    score: scoresWithDataForUnitTest.aliceWith0PointsAndBrunoWith0Points.score,
    slots: [slotsWithData.centerOfCenter.slot],
  },
} as const satisfies Record<string, RequiredSnowballStateParams>;

const statesWithDataForUnitTest = createStatesWithData({
  create: createSnowballState,
  deriveParams: deriveSnowballStateParams,
  recordOfRequiredParams: recordOfRequiredParamsOfStates,
});

export type {
  DerivedSnowballStateParams,
  RequiredSnowballStateParams,
  SnowballStateWithData,
};
export {
  createSnowballState,
  deriveSnowballStateParams,
  statesWithDataForUnitTest,
};
