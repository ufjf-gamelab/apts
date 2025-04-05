import { expect, test } from "vitest";

import { INCREMENT_ONE } from "../../constants.js";
import TestingGame, { type TestingGameParams } from "./Game.js";
import { createMoves, default as TestingMove } from "./Move.test.js";
import { createPlayers, TestingPlayer } from "./Player.test.js";

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

const shouldBeAnInstanceOfItsClass = ({
  game,
}: {
  game: TestingGame;
}): void => {
  test("game should be an instance of its class", () => {
    expect(game).toBeInstanceOf(TestingGame);
  });
};

const cloneShouldCreateANewInstance = ({
  game,
}: {
  game: TestingGame;
}): void => {
  test("clone() should return a new instance of TestingGame", () => {
    const clone = game.clone();
    expect(clone).toBeInstanceOf(TestingGame);
    expect(clone).not.toBe(game);
    expect(clone.getMoves()).toStrictEqual(game.getMoves());
    expect(clone.getName()).toBe(game.getName());
    expect(clone.getPlayers()).toStrictEqual(game.getPlayers());
  });
};

const nameOfGameShouldBe = ({
  game,
  name,
}: {
  game: TestingGame;
  name: TestingGame["name"];
}): void => {
  test(`name of game should be {${name}}`, () => {
    expect(game.getName()).toBe(name);
  });
};

const playersOfGameShouldBeEqualToTheOnesPassedAsParameterWithDifferentReference =
  (game: TestingGame, players: TestingGameParams["players"]): void => {
    test("players of game should be equal to the one passed as parameter with different reference", () => {
      const playersFromGame = game.getPlayers();

      expect(playersFromGame).not.toBe(players);
      expect(playersFromGame).toStrictEqual(players);

      for (
        let currentPlayerIndex = 0;
        currentPlayerIndex < players.length;
        currentPlayerIndex += INCREMENT_ONE
      ) {
        const playerFromGame = playersFromGame[currentPlayerIndex];
        expect(playerFromGame).toBeDefined();

        const player = players[currentPlayerIndex];
        expect(player).toBeDefined();

        expect(playerFromGame).toBeInstanceOf(TestingPlayer);
        expect(playerFromGame).not.toBe(player);
        expect(playerFromGame).toStrictEqual(player);
      }
    });
  };

const movesOfGameShouldBeEqualToTheOnesPassedAsParameterWithDifferentReference =
  (game: TestingGame, moves: TestingGameParams["moves"]): void => {
    test("move of game should be equal to the one passed as parameter with different reference", () => {
      const movesFromGame = game.getMoves();

      expect(movesFromGame).not.toBe(moves);
      expect(movesFromGame).toStrictEqual(moves);

      for (
        let currentMoveIndex = 0;
        currentMoveIndex < moves.length;
        currentMoveIndex += INCREMENT_ONE
      ) {
        const moveFromGame = movesFromGame[currentMoveIndex];
        expect(moveFromGame).toBeDefined();

        const move = moves[currentMoveIndex];
        expect(move).toBeDefined();

        expect(moveFromGame).toBeInstanceOf(TestingMove);
        expect(moveFromGame).not.toBe(move);
        expect(moveFromGame).toStrictEqual(move);
      }
    });
  };

const testGame = (): void => {
  const players = createPlayers();
  const moves = createMoves();
  const game = createGame({
    moves,
    players,
  });

  shouldBeAnInstanceOfItsClass({ game });
  cloneShouldCreateANewInstance({ game });
  nameOfGameShouldBe({ game, name: "Testing game" });
  playersOfGameShouldBeEqualToTheOnesPassedAsParameterWithDifferentReference(
    game,
    players,
  );
  movesOfGameShouldBeEqualToTheOnesPassedAsParameterWithDifferentReference(
    game,
    moves,
  );
};

testGame();

export { createGame, TestingGame as default };
