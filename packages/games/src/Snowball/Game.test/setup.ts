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
  SnowballSlot,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballSlotWithData
>;

type RequiredParamsOfSnowballGame = RequiredParamsOfGame<
  SnowballMove,
  SnowballPlayer,
  SnowballSlot,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballSlotWithData
>;

type SnowballGameWithData = GameWithData<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballState,
  SnowballScore,
  SnowballSlot,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballSlotWithData
>;

const deriveParamsOfSnowballGame = ({
  moves,
  name,
  players,
  slots,
}: RequiredParamsOfSnowballGame): DerivedParamsOfSnowballGame =>
  deriveParamsOfGame({ moves, name, players, slots });

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
  [K in keyof ExtendedRecordOfRequiredParamsOfSnowballGames]: {
    game: SnowballGame;
    keyOfGame: keyof ExtendedRecordOfRequiredParamsOfSnowballGames;
    params: RequiredParamsOfSnowballGame;
  };
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
