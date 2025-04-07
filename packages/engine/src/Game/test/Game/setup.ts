import TestingGame, { type TestingGameParams } from "../Game.js";
import { createMoves } from "../Move/setup.js";
import { createPlayers } from "../Player/setup.js";

const QUANTITY_OF_SLOTS = 81;

const createGame = ({
  movesList,
  playersList,
}: Pick<TestingGameParams, "movesList" | "playersList">): TestingGame => {
  const name = "Testing game";
  const game = new TestingGame({
    movesList,
    name,
    playersList,
  });
  return game;
};

const setupGame = (): Pick<TestingGameParams, "movesList" | "playersList"> & {
  game: TestingGame;
} => {
  const playersList = createPlayers();
  const movesList = createMoves().map(({ move }) => move);
  const game = createGame({
    movesList,
    playersList,
  });
  return { game, movesList, playersList };
};

export { createGame, QUANTITY_OF_SLOTS, setupGame };
