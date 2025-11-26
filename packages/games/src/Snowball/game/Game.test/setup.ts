import {
  createGamesWithData,
  type DerivedParamsOfGame,
  deriveParamsOfGame,
  type GameWithData,
  type RequiredParamsOfGame,
} from "@repo/game/Game.test/setup.js";

import type { SnowballMove } from "../Move.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballScore } from "../Score.js";
import type { SnowballSlot } from "../Slot.js";
import type { SnowballState } from "../State.js";
import type { RecordOfRequiredParamsOfSnowballGames } from "./records.js";

import { SnowballGame } from "../Game.js";
import { type SnowballMoveWithData } from "../Move.test/setup.js";
import { type SnowballPlayerWithData } from "../Player.test/setup.js";
import { type SnowballSlotWithData } from "../Slot.test/setup.js";

type DerivedParamsOfSnowballGame = DerivedParamsOfGame<
  SnowballMove,
  SnowballPlayer,
  SnowballSlot
>;

type RequiredParamsOfSnowballGame = RequiredParamsOfGame<
  SnowballMove,
  SnowballPlayer,
  SnowballSlot,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballSlotWithData
>;

type SnowballGameWithData<Key extends PropertyKey = string> = GameWithData<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballSlotWithData,
  RequiredParamsOfSnowballGame,
  Key
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

type ExtendedSnowballGamesWithData<
  ExtendedRecordOfRequiredParamsOfSnowballGames extends
    RecordOfRequiredParamsOfSnowballGames,
> = {
  [Key in keyof ExtendedRecordOfRequiredParamsOfSnowballGames]: SnowballGameWithData<Key>;
};

const createSnowballGamesWithData = <
  ExtendedRecordOfRequiredParamsOfSnowballGames extends
    RecordOfRequiredParamsOfSnowballGames,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredParamsOfSnowballGames;
}): ExtendedSnowballGamesWithData<ExtendedRecordOfRequiredParamsOfSnowballGames> =>
  createGamesWithData({
    create: createSnowballGame,
    deriveParams: deriveParamsOfSnowballGame,
    recordOfRequiredParams,
  });

export type {
  DerivedParamsOfSnowballGame,
  ExtendedSnowballGamesWithData,
  RequiredParamsOfSnowballGame,
  SnowballGameWithData,
};
export { createSnowballGamesWithData, deriveParamsOfSnowballGame };
