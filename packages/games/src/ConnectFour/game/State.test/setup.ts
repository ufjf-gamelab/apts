import {
  createRecordOfStatesWithData,
  type DerivedParamsOfState,
  deriveParamsOfState,
  type RecordOfStatesWithData,
  type RequiredParamsOfState,
  type StateWithData,
} from "@repo/game/State.test/setup.js";

import type { ConnectFourGame } from "../Game.js";
import type {
  RequiredParamsOfConnectFourGame,
  ConnectFourGameWithData,
} from "../Game.test/setup.js";
import type { ConnectFourMove } from "../Move.js";
import type {
  RequiredParamsOfConnectFourMove,
  ConnectFourMoveWithData,
} from "../Move.test/setup.js";
import type { ConnectFourPlayer } from "../Player.js";
import type {
  RequiredParamsOfConnectFourPlayer,
  ConnectFourPlayerWithData,
} from "../Player.test/setup.js";
import type { ConnectFourScore } from "../Score.js";
import type {
  RequiredParamsOfConnectFourScore,
  ConnectFourScoreWithData,
} from "../Score.test/setup.js";
import type { ConnectFourSlot } from "../Slot.js";
import type {
  RequiredParamsOfConnectFourSlot,
  ConnectFourSlotWithData,
} from "../Slot.test/setup.js";

import { ConnectFourState } from "../State.js";

type DerivedParamsOfConnectFourState = DerivedParamsOfState<
  ConnectFourGame,
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourScore,
  ConnectFourSlot,
  ConnectFourState
>;

type RecordOfRequiredParamsOfConnectFourStates = Record<
  string,
  RequiredParamsOfConnectFourState
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
  DerivedParamsOfConnectFourState,
  RecordOfRequiredParamsOfConnectFourStates,
  RecordOfStatesWithData,
  RequiredParamsOfConnectFourState,
  ConnectFourStateWithData,
};
export {
  createRecordOfConnectFourStatesWithData,
  deriveParamsOfConnectFourState,
};
