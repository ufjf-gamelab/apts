import TestingGame from "../Game.js";
import { type CreatedMovesAndRelatedData, createMoves } from "../Move/setup.js";
import {
  type CreatedPlayersAndRelatedData,
  createPlayers,
} from "../Player/setup.js";

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
}: DataRelatedToCreatedGame): CreatedGameAndRelatedData => {
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

const createCommonGame = (): CreatedGameAndRelatedData => {
  const players = createPlayers();
  const moves = createMoves();
  return createGame({
    moves,
    players,
  });
};

export type { TestGameParams };
export { createCommonGame, createGame };
