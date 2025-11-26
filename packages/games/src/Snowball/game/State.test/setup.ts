import {
  createRecordOfStatesWithData,
  type DerivedParamsOfState,
  deriveParamsOfState,
  type RecordOfStatesWithData,
  type RequiredParamsOfState,
  type StateWithData,
} from "@repo/game/State.test/setup.js";

import type { SnowballGame } from "../Game.js";
import type {
  RequiredParamsOfSnowballGame,
  SnowballGameWithData,
} from "../Game.test/setup.js";
import type { SnowballMove } from "../Move.js";
import type {
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
} from "../Move.test/setup.js";
import type { SnowballPlayer } from "../Player.js";
import type {
  RequiredParamsOfSnowballPlayer,
  SnowballPlayerWithData,
} from "../Player.test/setup.js";
import type { SnowballScore } from "../Score.js";
import type {
  RequiredParamsOfSnowballScore,
  SnowballScoreWithData,
} from "../Score.test/setup.js";
import type { SnowballSlot } from "../Slot.js";
import type {
  RequiredParamsOfSnowballSlot,
  SnowballSlotWithData,
} from "../Slot.test/setup.js";

import { SnowballState } from "../State.js";

type DerivedParamsOfSnowballState = DerivedParamsOfState<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState
>;

type RecordOfRequiredParamsOfSnowballStates = Record<
  string,
  RequiredParamsOfSnowballState
>;

type RecordOfSnowballStatesWithData<
  GenericRecordOfRequiredParamsOfSnowballStates extends
    RecordOfRequiredParamsOfSnowballStates,
> = RecordOfStatesWithData<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  RequiredParamsOfSnowballState,
  GenericRecordOfRequiredParamsOfSnowballStates
>;

type RequiredParamsOfSnowballState = RequiredParamsOfState<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  RequiredParamsOfSnowballGame,
  RequiredParamsOfSnowballMove,
  RequiredParamsOfSnowballPlayer,
  RequiredParamsOfSnowballScore,
  RequiredParamsOfSnowballSlot,
  SnowballGameWithData,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballScoreWithData,
  SnowballSlotWithData
>;

type SnowballStateWithData<GenericKeyOfSnowballState extends string = string> =
  StateWithData<
    SnowballGame,
    SnowballMove,
    SnowballPlayer,
    SnowballScore,
    SnowballSlot,
    SnowballState,
    RequiredParamsOfSnowballState,
    GenericKeyOfSnowballState
  >;

const deriveParamsOfSnowballState = ({
  gameWithData,
  playerWithDataAndIndex,
  scoreWithData,
  slotsWithData,
}: Pick<
  RequiredParamsOfSnowballState,
  "gameWithData" | "playerWithDataAndIndex" | "scoreWithData" | "slotsWithData"
>): DerivedParamsOfSnowballState =>
  deriveParamsOfState({
    gameWithData,
    playerWithDataAndIndex,
    scoreWithData,
    slotsWithData,
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

const createRecordOfSnowballStatesWithData = <
  GenericRecordOfRequiredParamsOfSnowballStates extends
    RecordOfRequiredParamsOfSnowballStates,
>({
  recordOfRequiredParamsOfStates,
}: {
  recordOfRequiredParamsOfStates: GenericRecordOfRequiredParamsOfSnowballStates;
}) =>
  createRecordOfStatesWithData<
    SnowballGame,
    SnowballMove,
    SnowballPlayer,
    SnowballScore,
    SnowballSlot,
    SnowballState,
    DerivedParamsOfSnowballState,
    RequiredParamsOfSnowballState,
    RecordOfSnowballStatesWithData<GenericRecordOfRequiredParamsOfSnowballStates>
  >({
    create: createSnowballState,
    deriveParams: deriveParamsOfSnowballState,
    recordOfRequiredParamsOfStates,
  });

export type {
  DerivedParamsOfSnowballState,
  RecordOfRequiredParamsOfSnowballStates,
  RecordOfStatesWithData,
  RequiredParamsOfSnowballState,
  SnowballStateWithData,
};
export { createRecordOfSnowballStatesWithData, deriveParamsOfSnowballState };
