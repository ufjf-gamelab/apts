import {
  createRecordOfStatesWithData,
  type DerivedParamsOfState,
  deriveParamsOfState,
  type RecordOfStatesWithData,
  type RequiredParamsOfState,
  type StateWithData,
} from "@repo/game/State.test/setup.js";

import type { TicTacToeGame } from "../TicTacToeGame.js";
import type {
  RequiredParamsOfTicTacToeGame,
  TicTacToeGameWithData,
} from "../TicTacToeGame.test/setup.js";
import type { TicTacToeMove } from "../TicTacToeMove.js";
import type {
  RequiredParamsOfTicTacToeMove,
  TicTacToeMoveWithData,
} from "../TicTacToeMove.test/setup.js";
import type { TicTacToePlayer } from "../TicTacToePlayer.js";
import type {
  RequiredParamsOfTicTacToePlayer,
  TicTacToePlayerWithData,
} from "../TicTacToePlayer.test/setup.js";
import type { TicTacToeScore } from "../TicTacToeScore.js";
import type {
  RequiredParamsOfTicTacToeScore,
  TicTacToeScoreWithData,
} from "../TicTacToeScore.test/setup.js";
import type { TicTacToeSlot } from "../TicTacToeSlot.js";
import type {
  RequiredParamsOfTicTacToeSlot,
  TicTacToeSlotWithData,
} from "../TicTacToeSlot.test/setup.js";

import { TicTacToeState } from "../TicTacToeState.js";

type DerivedParamsOfTicTacToeState = DerivedParamsOfState<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState
>;

type RecordOfRequiredParamsOfTicTacToeStates = Record<
  string,
  RequiredParamsOfTicTacToeState
>;

type RecordOfTicTacToeStatesWithData<
  GenericRecordOfRequiredParamsOfTicTacToeStates extends
    RecordOfRequiredParamsOfTicTacToeStates,
> = RecordOfStatesWithData<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  RequiredParamsOfTicTacToeState,
  GenericRecordOfRequiredParamsOfTicTacToeStates
>;

type RequiredParamsOfTicTacToeState = RequiredParamsOfState<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  RequiredParamsOfTicTacToeGame,
  RequiredParamsOfTicTacToeMove,
  RequiredParamsOfTicTacToePlayer,
  RequiredParamsOfTicTacToeScore,
  RequiredParamsOfTicTacToeSlot,
  TicTacToeGameWithData,
  TicTacToeMoveWithData,
  TicTacToePlayerWithData,
  TicTacToeScoreWithData,
  TicTacToeSlotWithData
>;

type TicTacToeStateWithData<
  GenericKeyOfTicTacToeState extends string = string,
> = StateWithData<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  RequiredParamsOfTicTacToeState,
  GenericKeyOfTicTacToeState
>;

const deriveParamsOfTicTacToeState = ({
  gameWithData,
  playerWithDataAndIndex,
  scoreWithData,
  slotsWithData,
}: Pick<
  RequiredParamsOfTicTacToeState,
  "gameWithData" | "playerWithDataAndIndex" | "scoreWithData" | "slotsWithData"
>): DerivedParamsOfTicTacToeState =>
  deriveParamsOfState({
    gameWithData,
    playerWithDataAndIndex,
    scoreWithData,
    slotsWithData,
  });

const createTicTacToeState = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: DerivedParamsOfTicTacToeState): TicTacToeState =>
  new TicTacToeState({
    game,
    indexOfPlayer,
    score,
    slots,
  });

const createRecordOfTicTacToeStatesWithData = <
  GenericRecordOfRequiredParamsOfTicTacToeStates extends
    RecordOfRequiredParamsOfTicTacToeStates,
>({
  recordOfRequiredParamsOfStates,
}: {
  recordOfRequiredParamsOfStates: GenericRecordOfRequiredParamsOfTicTacToeStates;
}) =>
  createRecordOfStatesWithData<
    TicTacToeGame,
    TicTacToeMove,
    TicTacToePlayer,
    TicTacToeScore,
    TicTacToeSlot,
    TicTacToeState,
    DerivedParamsOfTicTacToeState,
    RequiredParamsOfTicTacToeState,
    RecordOfTicTacToeStatesWithData<GenericRecordOfRequiredParamsOfTicTacToeStates>
  >({
    create: createTicTacToeState,
    deriveParams: deriveParamsOfTicTacToeState,
    recordOfRequiredParamsOfStates,
  });

export type {
  DerivedParamsOfTicTacToeState,
  RecordOfRequiredParamsOfTicTacToeStates,
  RecordOfStatesWithData,
  RequiredParamsOfTicTacToeState,
  TicTacToeStateWithData,
};
export { createRecordOfTicTacToeStatesWithData, deriveParamsOfTicTacToeState };
