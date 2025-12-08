import {
  createRecordOfGamesWithData,
  type DerivedParamsOfGame,
  deriveParamsOfGame,
  type GameWithData,
  type RecordOfGamesWithData,
  type RequiredParamsOfGame,
} from "@repo/game/Game.test/setup.js";

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
import type { SnowballSlot } from "../SnowballSlot.js";
import type {
  RequiredParamsOfSnowballSlot,
  SnowballSlotWithData,
} from "../SnowballSlot.test/setup.js";
import type { SnowballState } from "../SnowballState.js";

import { SnowballGame } from "../SnowballGame.js";

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
  RequiredParamsOfSnowballPlayer,
  RequiredParamsOfSnowballSlot,
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
