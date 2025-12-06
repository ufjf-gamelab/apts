import {
  createRecordOfGamesWithData,
  type DerivedParamsOfGame,
  deriveParamsOfGame,
  type GameWithData,
  type RecordOfGamesWithData,
  type RequiredParamsOfGame,
} from "@repo/game/Game.test/setup.js";

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
import type { ConnectFourSlot } from "../Slot.js";
import type {
  RequiredParamsOfConnectFourSlot,
  ConnectFourSlotWithData,
} from "../Slot.test/setup.js";
import type { ConnectFourState } from "../State.js";

import { ConnectFourGame } from "../Game.js";

type DerivedParamsOfConnectFourGame = DerivedParamsOfGame<
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourSlot
>;

type RecordOfRequiredParamsOfConnectFourGames = Record<
  string,
  RequiredParamsOfConnectFourGame
>;

type RecordOfConnectFourGamesWithData<
  GenericRecordOfRequiredParamsOfConnectFourGames extends
    RecordOfRequiredParamsOfConnectFourGames,
> = RecordOfGamesWithData<
  ConnectFourGame,
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourScore,
  ConnectFourSlot,
  ConnectFourState,
  RequiredParamsOfConnectFourGame,
  GenericRecordOfRequiredParamsOfConnectFourGames
>;

type RequiredParamsOfConnectFourGame = RequiredParamsOfGame<
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourSlot,
  RequiredParamsOfConnectFourMove,
  RequiredParamsOfConnectFourPlayer,
  RequiredParamsOfConnectFourSlot,
  ConnectFourMoveWithData,
  ConnectFourPlayerWithData,
  ConnectFourSlotWithData
>;

type ConnectFourGameWithData<
  GenericKeyOfConnectFourGame extends string = string,
> = GameWithData<
  ConnectFourGame,
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourScore,
  ConnectFourSlot,
  ConnectFourState,
  RequiredParamsOfConnectFourGame,
  GenericKeyOfConnectFourGame
>;

const deriveParamsOfConnectFourGame = ({
  movesWithData,
  name,
  playersWithData,
  slotsWithData,
}: RequiredParamsOfConnectFourGame): DerivedParamsOfConnectFourGame =>
  deriveParamsOfGame({ movesWithData, name, playersWithData, slotsWithData });

const createConnectFourGame = ({
  moves,
  name,
  players,
  slots,
}: DerivedParamsOfConnectFourGame): ConnectFourGame =>
  new ConnectFourGame({
    moves,
    name,
    players,
    slots,
  });

const createRecordOfConnectFourGamesWithData = <
  GenericRecordOfRequiredParamsOfConnectFourGames extends
    RecordOfRequiredParamsOfConnectFourGames,
>({
  recordOfRequiredParamsOfGames,
}: {
  recordOfRequiredParamsOfGames: GenericRecordOfRequiredParamsOfConnectFourGames;
}) =>
  createRecordOfGamesWithData<
    ConnectFourGame,
    ConnectFourMove,
    ConnectFourPlayer,
    ConnectFourScore,
    ConnectFourSlot,
    ConnectFourState,
    DerivedParamsOfConnectFourGame,
    RequiredParamsOfConnectFourGame,
    RecordOfConnectFourGamesWithData<GenericRecordOfRequiredParamsOfConnectFourGames>
  >({
    create: createConnectFourGame,
    deriveParams: deriveParamsOfConnectFourGame,
    recordOfRequiredParamsOfGames,
  });

export type {
  DerivedParamsOfConnectFourGame,
  RecordOfGamesWithData,
  RecordOfRequiredParamsOfConnectFourGames,
  RequiredParamsOfConnectFourGame,
  ConnectFourGameWithData,
};
export {
  createRecordOfConnectFourGamesWithData,
  deriveParamsOfConnectFourGame,
};
