import {
  createStatesWithData,
  type DerivedParamsOfState,
  deriveParamsOfState,
  type RequiredParamsOfState,
  type StateWithData,
} from "@repo/game/State.test/setup.js";

import type { SnowballGame } from "../Game.js";
import type { SnowballGameWithData } from "../Game.test/setup.js";
import type { SnowballMove } from "../Move.js";
import type { SnowballMoveWithData } from "../Move.test/setup.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballPlayerWithData } from "../Player.test/setup.js";
import type { SnowballScore } from "../Score.js";
import type { SnowballScoreWithData } from "../Score.test/setup.js";
import type { SnowballSlot } from "../Slot.js";
import type { RecordOfRequiredParamsOfSnowballStates } from "./records.js";

import { type SnowballSlotWithData } from "../Slot.test/setup.js";
import { SnowballState } from "../State.js";

type DerivedParamsOfSnowballState = DerivedParamsOfState<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState
>;

type RequiredParamsOfSnowballState = RequiredParamsOfState<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  SnowballGameWithData,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballScoreWithData,
  SnowballSlotWithData
>;

type SnowballStateWithData = StateWithData<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  SnowballGameWithData,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballScoreWithData,
  SnowballSlotWithData,
  RequiredParamsOfSnowballState
>;

const deriveParamsOfSnowballState = ({
  game,
  player,
  score,
  slots,
}: RequiredParamsOfSnowballState): DerivedParamsOfSnowballState =>
  deriveParamsOfState({
    game,
    player,
    score,
    slots,
  });

const createSnowballState = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: DerivedParamsOfSnowballState): SnowballState =>
  new SnowballState({
    game,
    indexOfPlayer,
    score,
    slots,
  });

type ExtendedSnowballStatesWithData<
  ExtendedRecordOfRequiredParamsOfSnowballStates extends
    RecordOfRequiredParamsOfSnowballStates,
> = {
  [K in keyof ExtendedRecordOfRequiredParamsOfSnowballStates]: {
    keyOfState: keyof ExtendedRecordOfRequiredParamsOfSnowballStates;
    params: RequiredParamsOfSnowballState;
    state: SnowballState;
  };
};

const createSnowballStatesWithData = <
  ExtendedRecordOfRequiredParamsOfSnowballStates extends
    RecordOfRequiredParamsOfSnowballStates,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredParamsOfSnowballStates;
}): ExtendedSnowballStatesWithData<ExtendedRecordOfRequiredParamsOfSnowballStates> =>
  createStatesWithData({
    create: createSnowballState,
    deriveParams: deriveParamsOfSnowballState,
    recordOfRequiredParams,
  });

export type {
  DerivedParamsOfSnowballState,
  RequiredParamsOfSnowballState,
  SnowballStateWithData,
};
export {
  createSnowballState,
  createSnowballStatesWithData,
  deriveParamsOfSnowballState,
};
