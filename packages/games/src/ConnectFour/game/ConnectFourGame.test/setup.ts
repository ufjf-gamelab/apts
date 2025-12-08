import {
  createRecordOfGamesWithData,
  type DerivedParamsOfGame,
  deriveParamsOfGame,
  type GameWithData,
  type RecordOfGamesWithData,
  type RequiredParamsOfGame,
} from "@repo/game/Game.test/setup.js";

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
import type { ConnectFourSlot } from "../ConnectFourSlot.js";
import type {
  ConnectFourSlotWithData,
  RequiredParamsOfConnectFourSlot,
} from "../ConnectFourSlot.test/setup.js";
import type { ConnectFourState } from "../ConnectFourState.js";

import { ConnectFourGame } from "../ConnectFourGame.js";

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

type DerivedParamsOfConnectFourGame = DerivedParamsOfGame<
  ConnectFourMove,
  ConnectFourPlayer,
  ConnectFourSlot
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

type RecordOfRequiredParamsOfConnectFourGames = Record<
  string,
  RequiredParamsOfConnectFourGame
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
  ConnectFourGameWithData,
  DerivedParamsOfConnectFourGame,
  RecordOfGamesWithData,
  RecordOfRequiredParamsOfConnectFourGames,
  RequiredParamsOfConnectFourGame,
};
export {
  createRecordOfConnectFourGamesWithData,
  deriveParamsOfConnectFourGame,
};
