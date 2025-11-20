import {
  createGamesWithData,
  type DerivedGameParams,
  deriveGameParams,
  type RequiredGameParams,
} from "@repo/game/Game.test/setup.js";

import type { SnowballMove } from "../Move.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballSlot } from "../Slot.js";

import { SnowballGame } from "../Game.js";
import { type SnowballMoveWithData } from "../Move.test/setup.js";
import { type SnowballPlayerWithData } from "../Player.test/setup.js";
import { type SnowballSlotWithData } from "../Slot.test/setup.js";
import { recordOfRequiredParamsOfGamesForUnitTest } from "./records.js";

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

interface SnowballGameWithData<
  Params extends RequiredSnowballGameParams = RequiredSnowballGameParams,
> {
  game: SnowballGame;
  keyOfGame: string;
  params: Params;
}

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

const gamesWithDataForUnitTest = createGamesWithData({
  create: createSnowballGame,
  deriveParams: deriveSnowballGameParams,
  recordOfRequiredParams: recordOfRequiredParamsOfGamesForUnitTest,
});

export type {
  DerivedSnowballGameParams,
  RequiredSnowballGameParams,
  SnowballGameWithData,
};
export {
  createSnowballGame,
  deriveSnowballGameParams,
  gamesWithDataForUnitTest,
};
