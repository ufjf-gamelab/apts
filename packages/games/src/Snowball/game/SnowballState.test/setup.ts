import {
  createRecordOfStatesWithData,
  type DerivedParamsOfState,
  deriveParamsOfState,
  type RecordOfStatesWithData,
  type RequiredParamsOfState,
  type StateWithData,
} from "@repo/game/State.test/setup.js";

import type { SnowballGame } from "../SnowballGame.js";
import type {
  RequiredParamsOfSnowballGame,
  SnowballGameWithData,
} from "../SnowballGame.test/setup.js";
import type { SnowballMove } from "../SnowballMove.js";
import type {
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
} from "../SnowballMove.test/setup.js";
import type { SnowballPlayer } from "../SnowballPlayer.js";
import type {
  RequiredParamsOfSnowballPlayer,
  SnowballPlayerWithData,
} from "../SnowballPlayer.test/setup.js";
import type { SnowballScore } from "../SnowballScore.js";
import type {
  RequiredParamsOfSnowballScore,
  SnowballScoreWithData,
} from "../SnowballScore.test/setup.js";
import type { SnowballSlot } from "../SnowballSlot.js";
import type {
  RequiredParamsOfSnowballSlot,
  SnowballSlotWithData,
} from "../SnowballSlot.test/setup.js";

import { SnowballState } from "../SnowballState.js";

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
