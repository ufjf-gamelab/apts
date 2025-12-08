import {
  createRecordOfGamesWithData,
  type DerivedParamsOfGame,
  deriveParamsOfGame,
  type GameWithData,
  type RecordOfGamesWithData,
  type RequiredParamsOfGame,
} from "@repo/game/Game.test/setup.js";

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
import type { TicTacToeSlot } from "../TicTacToeSlot.js";
import type {
  RequiredParamsOfTicTacToeSlot,
  TicTacToeSlotWithData,
} from "../TicTacToeSlot.test/setup.js";
import type { TicTacToeState } from "../TicTacToeState.js";

import { TicTacToeGame } from "../TicTacToeGame.js";

type DerivedParamsOfTicTacToeGame = DerivedParamsOfGame<
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeSlot
>;

type RecordOfRequiredParamsOfTicTacToeGames = Record<
  string,
  RequiredParamsOfTicTacToeGame
>;

type RecordOfTicTacToeGamesWithData<
  GenericRecordOfRequiredParamsOfTicTacToeGames extends
    RecordOfRequiredParamsOfTicTacToeGames,
> = RecordOfGamesWithData<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState,
  RequiredParamsOfTicTacToeGame,
  GenericRecordOfRequiredParamsOfTicTacToeGames
>;

type RequiredParamsOfTicTacToeGame = RequiredParamsOfGame<
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeSlot,
  RequiredParamsOfTicTacToeMove,
  RequiredParamsOfTicTacToePlayer,
  RequiredParamsOfTicTacToeSlot,
  TicTacToeMoveWithData,
  TicTacToePlayerWithData,
  TicTacToeSlotWithData
>;

type TicTacToeGameWithData<GenericKeyOfTicTacToeGame extends string = string> =
  GameWithData<
    TicTacToeGame,
    TicTacToeMove,
    TicTacToePlayer,
    TicTacToeScore,
    TicTacToeSlot,
    TicTacToeState,
    RequiredParamsOfTicTacToeGame,
    GenericKeyOfTicTacToeGame
  >;

const deriveParamsOfTicTacToeGame = ({
  movesWithData,
  name,
  playersWithData,
  slotsWithData,
}: RequiredParamsOfTicTacToeGame): DerivedParamsOfTicTacToeGame =>
  deriveParamsOfGame({ movesWithData, name, playersWithData, slotsWithData });

const createTicTacToeGame = ({
  moves,
  name,
  players,
  slots,
}: DerivedParamsOfTicTacToeGame): TicTacToeGame =>
  new TicTacToeGame({
    moves,
    name,
    players,
    slots,
  });

const createRecordOfTicTacToeGamesWithData = <
  GenericRecordOfRequiredParamsOfTicTacToeGames extends
    RecordOfRequiredParamsOfTicTacToeGames,
>({
  recordOfRequiredParamsOfGames,
}: {
  recordOfRequiredParamsOfGames: GenericRecordOfRequiredParamsOfTicTacToeGames;
}) =>
  createRecordOfGamesWithData<
    TicTacToeGame,
    TicTacToeMove,
    TicTacToePlayer,
    TicTacToeScore,
    TicTacToeSlot,
    TicTacToeState,
    DerivedParamsOfTicTacToeGame,
    RequiredParamsOfTicTacToeGame,
    RecordOfTicTacToeGamesWithData<GenericRecordOfRequiredParamsOfTicTacToeGames>
  >({
    create: createTicTacToeGame,
    deriveParams: deriveParamsOfTicTacToeGame,
    recordOfRequiredParamsOfGames,
  });

export type {
  DerivedParamsOfTicTacToeGame,
  RecordOfGamesWithData,
  RecordOfRequiredParamsOfTicTacToeGames,
  RequiredParamsOfTicTacToeGame,
  TicTacToeGameWithData,
};
export { createRecordOfTicTacToeGamesWithData, deriveParamsOfTicTacToeGame };
