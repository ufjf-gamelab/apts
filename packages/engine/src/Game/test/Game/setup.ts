import TestingGame from "../Game.js";
import { type CreatedMovesAndRelatedData, createMoves } from "../Move/setup.js";
import {
  type CreatedPlayersAndRelatedData,
  createPlayers,
} from "../Player/setup.js";

const QUANTITY_OF_SLOTS = 81;

interface CreatedGameAndRelatedData {
  dataRelatedToCreatedGame: DataRelatedToCreatedGame;
  game: TestingGame;
}

interface DataRelatedToCreatedGame {
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
  DataRelatedToCreatedGame,
  "moves" | "players"
>): CreatedGameAndRelatedData => {
  const game = new TestingGame({
    moves: Array.from(moves.values().map(({ move }) => move)),
    name: "Testing Game",
    players: Array.from(players.values().map(({ player }) => player)),
  });
  return {
    dataRelatedToCreatedGame: {
      moves,
      players,
    },
    game,
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
