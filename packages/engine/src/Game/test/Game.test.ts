import { expect, test } from "vitest";

import TestingGame, { type TestingGameParams } from "./Game.js";
import { createMoves, type default as TestingMove } from "./Move.test.js";
import { createPlayers, type TestingPlayer } from "./Player.test.js";

const gameShouldBeAnInstanceOfItsClass = ({
  game,
}: {
  game: TestingGame;
}): void => {
  test("game should be an instance of its class", () => {
    expect(game).toBeInstanceOf(TestingGame);
  });
};

const nameOfGameShouldBe = ({
  game,
  name,
}: {
  game: TestingGame;
  name: TestingGameParams["name"];
}): void => {
  test(`name of game should be {${name}}`, () => {
    expect(game.getName()).toBe(name);
  });
};

const moveOfGameShouldBeEqualToTheOnePassedAsParameterWithDifferentReference = (
  game: TestingGame,
  moves: TestingGameParams["moves"],
): void => {
  test("move of game should be equal to the one passed as parameter with different reference", () => {
    const movesFromGame = game.getMoves();

    for (const moveFromGame of movesFromGame.values()) {
      const move = moves.find(gameMove => gameMove === moveFromGame);
      expect(move).toBeDefined();
      expect(moveFromGame).not.toBe(move);
      expect(moveFromGame).toEqual(move);
    }
  });
};

const playerOfGameShouldBeEqualToTheOnePassedAsParameterWithDifferentReference =
  (game: TestingGame, player: TestingPlayer): void => {
    test("player of game should be equal to the one passed as parameter with different reference", () => {
      const playersFromGame = game.getPlayers();
      const playerFromGameAsArray = Array.from(playersFromGame.values());
      const playerFromGame = playerFromGameAsArray.find(
        gamePlayer => gamePlayer === player,
      );
      expect(playerFromGame).toBeDefined();
      expect(playerFromGame).toBe(player);
    });
  };

const testGame = (): TestingGame => {
  const moves = createMoves();
  const players = createPlayers();
  const game = createGame({
    moves,
    players,
  });

  gameShouldBeAnInstanceOfItsClass(game);

  nameOfGameShouldBe(game, "Testing game");

  moveOfGameShouldBeEqualToTheOnePassedAsParameterWithDifferentReference(
    game,
    moves,
  );

  for (const player of players) {
    playerOfGameShouldBeEqualToTheOnePassedAsParameterWithDifferentReference(
      game,
      player,
    );
  }

  return game;
};

const createGame = ({
  moves,
  players,
}: Pick<TestingGameParams, "moves" | "players">): TestingGame => {
  const name = "Testing game";
  const quantityOfSlots = 5;
  const game = new TestingGame({
    moves,
    name,
    players,
    quantityOfSlots,
  });
  return game;
};

testGame();

export { createGame, TestingGame as default };
