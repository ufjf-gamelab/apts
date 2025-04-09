import TestingGame from "../Game.js";
import { type CreatedMovesAndRelatedData, createMoves } from "../Move/setup.js";
import {
  type CreatedPlayersAndRelatedData,
  createPlayers,
} from "../Player/setup.js";

const QUANTITY_OF_SLOTS = 81;

interface CreatedGameAndRelatedData {
  game: TestingGame;
  moves: CreatedMovesAndRelatedData;
  players: CreatedPlayersAndRelatedData;
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
    moves: Array.from(moves.entries()).map(([, { move }]) => move),
    name,
    players: Array.from(players.entries()).map(([, { player }]) => player),
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
export { createGame, QUANTITY_OF_SLOTS, setupGame };
