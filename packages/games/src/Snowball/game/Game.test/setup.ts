import {
  createRecordOfGamesWithData,
  type DerivedParamsOfGame,
  deriveParamsOfGame,
  type GameWithData,
  type RecordOfGamesWithData,
  type RequiredParamsOfGame,
} from "@repo/game/Game.test/setup.js";

import type { SnowballMove } from "../Move.js";
import type {
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
} from "../Move.test/setup.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballScore } from "../Score.js";
import type { SnowballSlot } from "../Slot.js";
import type { SnowballState } from "../State.js";

import { SnowballGame } from "../Game.js";
import { type SnowballPlayerWithData } from "../Player.test/setup.js";
import { type SnowballSlotWithData } from "../Slot.test/setup.js";

type DerivedParamsOfSnowballGame = DerivedParamsOfGame<
  SnowballMove,
  SnowballPlayer,
  SnowballSlot
>;

type RecordOfRequiredParamsOfSnowballGames = Record<
  string,
  RequiredParamsOfSnowballGame
>;

type RecordOfSnowballGamesWithData<
  GenericRecordOfRequiredParamsOfSnowballGames extends
    RecordOfRequiredParamsOfSnowballGames,
> = RecordOfGamesWithData<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  RequiredParamsOfSnowballGame,
  GenericRecordOfRequiredParamsOfSnowballGames
>;

type RequiredParamsOfSnowballGame = RequiredParamsOfGame<
  SnowballMove,
  SnowballPlayer,
  SnowballSlot,
  RequiredParamsOfSnowballMove,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballSlotWithData
>;

type SnowballGameWithData<GenericKeyOfSnowballGame extends string = string> =
  GameWithData<
    SnowballGame,
    SnowballMove,
    SnowballPlayer,
    SnowballScore,
    SnowballSlot,
    SnowballState,
    RequiredParamsOfSnowballGame,
    GenericKeyOfSnowballGame
  >;

const deriveParamsOfSnowballGame = ({
  movesWithData,
  name,
  playersWithData,
  slotsWithData,
}: RequiredParamsOfSnowballGame): DerivedParamsOfSnowballGame =>
  deriveParamsOfGame({ movesWithData, name, playersWithData, slotsWithData });

const createSnowballGame = ({
  moves,
  name,
  players,
  slots,
}: DerivedParamsOfSnowballGame): SnowballGame =>
  new SnowballGame({
    moves,
    name,
    players,
    slots,
  });

const createRecordOfSnowballGamesWithData = <
  GenericRecordOfRequiredParamsOfSnowballGames extends
    RecordOfRequiredParamsOfSnowballGames,
>({
  recordOfRequiredParamsOfGames,
}: {
  recordOfRequiredParamsOfGames: GenericRecordOfRequiredParamsOfSnowballGames;
}) =>
  createRecordOfGamesWithData<
    SnowballGame,
    SnowballMove,
    SnowballPlayer,
    SnowballScore,
    SnowballSlot,
    SnowballState,
    DerivedParamsOfSnowballGame,
    RequiredParamsOfSnowballGame,
    RecordOfSnowballGamesWithData<GenericRecordOfRequiredParamsOfSnowballGames>
  >({
    create: createSnowballGame,
    deriveParams: deriveParamsOfSnowballGame,
    recordOfRequiredParamsOfGames,
  });

export type {
  DerivedParamsOfSnowballGame,
  RecordOfGamesWithData,
  RecordOfRequiredParamsOfSnowballGames,
  RequiredParamsOfSnowballGame,
  SnowballGameWithData,
};
export { createRecordOfSnowballGamesWithData, deriveParamsOfSnowballGame };
