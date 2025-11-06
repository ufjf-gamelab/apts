import type { Integer } from "@repo/engine_core/types.js";

import {
  createGameParams,
  createGamesWithData,
} from "@repo/game/Game.test/setup.js";

import { SnowballGame } from "../Game.js";
import { movesWithData } from "../Move.test/setup.js";
import { playersWithData } from "../Player.test/setup.js";

const COLUMN_LENGTH: Integer = 9;
const ROW_LENGTH: Integer = 9;
const QUANTITY_OF_SLOTS: Integer = COLUMN_LENGTH * ROW_LENGTH;

type RequiredSnowballGameParams = Pick<
  SnowballGameParams,
  "moves" | "name" | "players" | "quantityOfSlots"
>;

type SnowballGameParams = ConstructorParameters<typeof SnowballGame>[number];

const createSnowballGameParams = ({
  moves,
  name,
  players,
  quantityOfSlots,
}: RequiredSnowballGameParams): SnowballGameParams =>
  createGameParams({ moves, name, players, quantityOfSlots });

const createSnowballGame = ({
  moves,
  name,
  players,
  quantityOfSlots,
}: SnowballGameParams): SnowballGame =>
  new SnowballGame({
    moves,
    name,
    players,
    quantityOfSlots,
  });

const paramsOfGames = {
  snowballWith9RowsAnd9Columns: {
    moves: Object.values(movesWithData).map(({ move }) => move),
    name: "Snowball",
    players: Object.values(playersWithData).map(({ player }) => player),
    quantityOfSlots: QUANTITY_OF_SLOTS,
  },
} as const satisfies Record<string, SnowballGameParams>;

const gamesWithDataForUnitTest = createGamesWithData({
  createGame: createSnowballGame,
  createGameParams: createSnowballGameParams,
  partialParamsOfGames: paramsOfGames,
});

export { gamesWithDataForUnitTest };
