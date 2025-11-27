import {
  createRecordOfGamesWithData,
  type DerivedParamsOfGame,
  deriveParamsOfGame,
  type GameWithData,
  type RecordOfGamesWithData,
  type RequiredParamsOfGame,
} from "@repo/game/Game.test/setup.js";

import type { TicTacToeMove } from "../Move.js";
import type {
  RequiredParamsOfTicTacToeMove,
  TicTacToeMoveWithData,
} from "../Move.test/setup.js";
import type { TicTacToePlayer } from "../Player.js";
import type {
  RequiredParamsOfTicTacToePlayer,
  TicTacToePlayerWithData,
} from "../Player.test/setup.js";
import type { TicTacToeScore } from "../Score.js";
import type { TicTacToeSlot } from "../Slot.js";
import type {
  RequiredParamsOfTicTacToeSlot,
  TicTacToeSlotWithData,
} from "../Slot.test/setup.js";
import type { TicTacToeState } from "../State.js";

import { TicTacToeGame } from "../Game.js";

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
