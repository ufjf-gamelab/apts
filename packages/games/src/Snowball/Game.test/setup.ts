import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfGame } from "@repo/game/Game.js";

import {
  createGamesWithData,
  type DerivedGameParams,
  deriveGameParams,
  type RequiredGameParams,
} from "@repo/game/Game.test/setup.js";

import type { SnowballMove } from "../Move.js";
import type { SnowballPlayer } from "../Player.js";

import { SnowballGame } from "../Game.js";
import { movesWithData } from "../Move.test/setup.js";
import { playersWithData } from "../Player.test/setup.js";

const COLUMN_LENGTH: Integer = 9;
const ROW_LENGTH: Integer = 9;
const QUANTITY_OF_SLOTS: Integer = COLUMN_LENGTH * ROW_LENGTH;

type DerivedSnowballGameParams = DerivedGameParams<
  SnowballMove,
  SnowballPlayer
>;

type RequiredSnowballGameParams = RequiredGameParams<
  SnowballMove,
  SnowballPlayer
>;

interface SnowballGameWithData<
  Params extends RequiredSnowballGameParams = RequiredSnowballGameParams,
> {
  game: SnowballGame;
  indexOfGame: IndexOfGame;
  keyOfGame: string;
  params: Params;
}

const deriveSnowballGameParams = ({
  moves,
  name,
  players,
  quantityOfSlots,
}: RequiredSnowballGameParams): DerivedSnowballGameParams =>
  deriveGameParams({ moves, name, players, quantityOfSlots });

const createSnowballGame = ({
  moves,
  name,
  players,
  quantityOfSlots,
}: DerivedSnowballGameParams): SnowballGame =>
  new SnowballGame({
    moves,
    name,
    players,
    quantityOfSlots,
  });

const recordOfRequiredParamsOfGames = {
  snowballWith9RowsAnd9Columns: {
    moves: movesWithData,
    name: "Snowball",
    players: playersWithData,
    quantityOfSlots: QUANTITY_OF_SLOTS,
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
