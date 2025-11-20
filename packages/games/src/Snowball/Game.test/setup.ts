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
import { getIndexedSnowballMovesWithData } from "./moves.js";
import { getIndexedSnowballPlayersWithData } from "./players.js";
import { getIndexedSnowballSlotsWithData } from "./slots.js";

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

const recordOfRequiredParamsOfGames = {
  snowballWith9RowsAnd9Columns: {
    moves: getIndexedSnowballMovesWithData(),
    name: "Snowball",
    players: getIndexedSnowballPlayersWithData(),
    slots: getIndexedSnowballSlotsWithData(),
  },
} as const satisfies Record<string, RequiredSnowballGameParams>;

const gamesWithDataForUnitTest = createGamesWithData({
  create: createSnowballGame,
  deriveParams: deriveSnowballGameParams,
  recordOfRequiredParams: recordOfRequiredParamsOfGames,
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
