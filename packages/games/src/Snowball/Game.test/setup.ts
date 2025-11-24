import {
  createGamesWithData,
  type DerivedGameParams,
  deriveGameParams,
  type GameWithData,
  type RequiredGameParams,
} from "@repo/game/Game.test/setup.js";

import type { SnowballMove } from "../Move.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballScore } from "../Score.js";
import type { SnowballSlot } from "../Slot.js";
import type { SnowballState } from "../State.js";
import type { RecordOfRequiredSnowballGameParams } from "./records.js";

import { SnowballGame } from "../Game.js";
import { type SnowballMoveWithData } from "../Move.test/setup.js";
import { type SnowballPlayerWithData } from "../Player.test/setup.js";
import { type SnowballSlotWithData } from "../Slot.test/setup.js";

type DerivedSnowballGameParams = DerivedGameParams<
  SnowballMove,
  SnowballPlayer,
  SnowballSlot,
  SnowballMoveWithData,
  SnowballPlayerWithData,
  SnowballSlotWithData
>;

type RequiredSnowballGameParams = RequiredGameParams<
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

const deriveSnowballGameParams = ({
  moves,
  name,
  players,
  slots,
}: RequiredSnowballGameParams): DerivedSnowballGameParams =>
  deriveGameParams({ moves, name, players, slots });

const createSnowballGame = ({
  moves,
  name,
  players,
  slots,
}: DerivedSnowballGameParams): SnowballGame =>
  new SnowballGame({
    moves,
    name,
    players,
    slots,
  });

type ExtendedSnowballGamesWithData<
  ExtendedRecordOfRequiredSnowballGameParams extends
    RecordOfRequiredSnowballGameParams,
> = {
  [K in keyof ExtendedRecordOfRequiredSnowballGameParams]: {
    game: SnowballGame;
    keyOfGame: keyof ExtendedRecordOfRequiredSnowballGameParams;
    params: RequiredSnowballGameParams;
  };
};
const createSnowballGamesWithData = <
  ExtendedRecordOfRequiredSnowballGameParams extends
    RecordOfRequiredSnowballGameParams,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredSnowballGameParams;
}): ExtendedSnowballGamesWithData<ExtendedRecordOfRequiredSnowballGameParams> =>
  createGamesWithData({
    create: createSnowballGame,
    deriveParams: deriveSnowballGameParams,
    recordOfRequiredParams,
  });

export type {
  DerivedSnowballGameParams,
  ExtendedSnowballGamesWithData,
  RequiredSnowballGameParams,
  SnowballGameWithData,
};
export { createSnowballGamesWithData, deriveSnowballGameParams };
