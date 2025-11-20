import type { IndexOfState } from "@repo/game/State.js";

import {
  createStatesWithData,
  type DerivedStateParams,
  deriveStateParams,
  type RequiredStateParams,
} from "@repo/game/State.test/setup.js";

import type { SnowballGame } from "../Game.js";
import type { SnowballGameWithData } from "../Game.test/setup.js";
import type { SnowballMove } from "../Move.js";
import type { SnowballMoveWithData } from "../Move.test/setup.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballPlayerWithData } from "../Player.test/setup.js";
import type { SnowballScore } from "../Score.js";
import type { SnowballSlot } from "../Slot.js";

import { type SnowballSlotWithData } from "../Slot.test/setup.js";
import { SnowballState } from "../State.js";
import { recordOfRequiredParamsOfStates } from "./records.js";

type DerivedSnowballStateParams = DerivedStateParams<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballState,
  SnowballScore,
  SnowballSlot,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballSlotWithData,
  SnowballGameWithData
>;

type RequiredSnowballStateParams = Pick<
  RequiredStateParams<
    SnowballGame,
    SnowballMove,
    SnowballPlayer,
    SnowballState,
    SnowballScore,
    SnowballSlot,
    SnowballMoveWithData,
    SnowballPlayerWithData,
    SnowballSlotWithData,
    SnowballGameWithData
  >,
  "game" | "indexOfPlayer" | "score" | "slots" | "validMoves"
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
