import TestingGame from "../Game.js";
import { type CreatedMoveAndRelatedData, createMoves } from "../Move/setup.js";
import {
  type CreatedPlayerAndRelatedData,
  createPlayers,
} from "../Player/setup.js";

const QUANTITY_OF_SLOTS = 81;

const INDEX_OF_MOVE_NORTHWEST_OF_NORTHWEST = 0;
const INDEX_OF_MOVE_NORTH_OF_NORTHWEST = 1;

interface CreatedGameAndRelatedData {
  game: TestingGame;
  moves: CreatedMoveAndRelatedData[];
  players: CreatedPlayerAndRelatedData[];
}

interface TestGameParams {
  game: TestingGame;
  testDescriptor: string;
}

const createGame = ({
  moves,
  players,
}: Pick<
  CreatedGameAndRelatedData,
  "moves" | "players"
>): CreatedGameAndRelatedData => {
  const name = "Testing game";
  const game = new TestingGame({
    movesList: moves.map(({ move }) => move),
    name,
    playersList: players.map(({ player }) => player),
  });
  return {
    game,
    moves,
    players,
  };
};

const setupGame = (): CreatedGameAndRelatedData => {
  const players = createPlayers();
  const moves = createMoves();
  return createGame({
    moves,
    players,
  });
};

export type { TestGameParams };
export {
  createGame,
  INDEX_OF_MOVE_NORTH_OF_NORTHWEST,
  INDEX_OF_MOVE_NORTHWEST_OF_NORTHWEST,
  QUANTITY_OF_SLOTS,
  setupGame,
};
