import {
  createRecordOfStatesWithData,
  type DerivedParamsOfState,
  deriveParamsOfState,
  type RecordOfStatesWithData,
  type RequiredParamsOfState,
  type StateWithData,
} from "@repo/game/State.test/setup.js";

import type { ConnectFourGame } from "../ConnectFourGame.js";
import type {
  ConnectFourGameWithData,
  RequiredParamsOfConnectFourGame,
} from "../ConnectFourGame.test/setup.js";
import type { ConnectFourMove } from "../ConnectFourMove.js";
import type {
  ConnectFourMoveWithData,
  RequiredParamsOfConnectFourMove,
} from "../ConnectFourMove.test/setup.js";
import type { ConnectFourPlayer } from "../ConnectFourPlayer.js";
import type {
  ConnectFourPlayerWithData,
  RequiredParamsOfConnectFourPlayer,
} from "../ConnectFourPlayer.test/setup.js";
import type { ConnectFourScore } from "../ConnectFourScore.js";
import type {
  ConnectFourScoreWithData,
  RequiredParamsOfConnectFourScore,
} from "../ConnectFourScore.test/setup.js";
import type { ConnectFourSlot } from "../ConnectFourSlot.js";
import type {
  ConnectFourSlotWithData,
  RequiredParamsOfConnectFourSlot,
} from "../ConnectFourSlot.test/setup.js";

import { ConnectFourState } from "../ConnectFourState.js";

type ConnectFourStateWithData<
  GenericKeyOfConnectFourState extends string = string,
> = StateWithData<
  ConnectFourGame,
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourScore,
  ConnectFourSlot,
  ConnectFourState,
  RequiredParamsOfConnectFourState,
  GenericKeyOfConnectFourState
>;

type DerivedParamsOfConnectFourState = DerivedParamsOfState<
  ConnectFourGame,
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourScore,
  ConnectFourSlot,
  ConnectFourState
>;

type RecordOfConnectFourStatesWithData<
  GenericRecordOfRequiredParamsOfConnectFourStates extends
    RecordOfRequiredParamsOfConnectFourStates,
> = RecordOfStatesWithData<
  ConnectFourGame,
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourScore,
  ConnectFourSlot,
  ConnectFourState,
  RequiredParamsOfConnectFourState,
  GenericRecordOfRequiredParamsOfConnectFourStates
>;

type RecordOfRequiredParamsOfConnectFourStates = Record<
  string,
  RequiredParamsOfConnectFourState
>;

type RequiredParamsOfConnectFourState = RequiredParamsOfState<
  ConnectFourGame,
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourScore,
  ConnectFourSlot,
  ConnectFourState,
  RequiredParamsOfConnectFourGame,
  RequiredParamsOfConnectFourMove,
  RequiredParamsOfConnectFourPlayer,
  RequiredParamsOfConnectFourScore,
  RequiredParamsOfConnectFourSlot,
  ConnectFourGameWithData,
  ConnectFourMoveWithData,
  ConnectFourPlayerWithData,
  ConnectFourScoreWithData,
  ConnectFourSlotWithData
>;

const deriveParamsOfConnectFourState = ({
  gameWithData,
  playerWithDataAndIndex,
  scoreWithData,
  slotsWithData,
}: Pick<
  RequiredParamsOfConnectFourState,
  "gameWithData" | "playerWithDataAndIndex" | "scoreWithData" | "slotsWithData"
>): DerivedParamsOfConnectFourState =>
  deriveParamsOfState({
    gameWithData,
    playerWithDataAndIndex,
    scoreWithData,
    slotsWithData,
  });

const createConnectFourState = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: DerivedParamsOfConnectFourState): ConnectFourState =>
  new ConnectFourState({
    game,
    indexOfPlayer,
    score,
    slots,
  });

const createRecordOfConnectFourStatesWithData = <
  GenericRecordOfRequiredParamsOfConnectFourStates extends
    RecordOfRequiredParamsOfConnectFourStates,
>({
  recordOfRequiredParamsOfStates,
}: {
  recordOfRequiredParamsOfStates: GenericRecordOfRequiredParamsOfConnectFourStates;
}) =>
  createRecordOfStatesWithData<
    ConnectFourGame,
    ConnectFourMove,
    ConnectFourPlayer,
    ConnectFourScore,
    ConnectFourSlot,
    ConnectFourState,
    DerivedParamsOfConnectFourState,
    RequiredParamsOfConnectFourState,
    RecordOfConnectFourStatesWithData<GenericRecordOfRequiredParamsOfConnectFourStates>
  >({
    create: createConnectFourState,
    deriveParams: deriveParamsOfConnectFourState,
    recordOfRequiredParamsOfStates,
  });

export type {
  ConnectFourStateWithData,
  DerivedParamsOfConnectFourState,
  RecordOfRequiredParamsOfConnectFourStates,
  RecordOfStatesWithData,
  RequiredParamsOfConnectFourState,
};
export {
  createRecordOfConnectFourStatesWithData,
  deriveParamsOfConnectFourState,
};
