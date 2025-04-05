import { expect, test } from "vitest";

import { INCREMENT_ONE } from "../../constants.js";
import TestingGame, { type TestingGameParams } from "./Game.js";
import TestingMove from "./Move.js";
import { createMoves } from "./Move.test.js";
import TestingPlayer, { TestingPlayerKey } from "./Player.js";
import { createPlayers } from "./Player.test.js";
import { TestingSlot, default as TestingState } from "./State.js";

const QUANTITY_OF_SLOTS = 81;

const createGame = ({
  moves,
  players,
}: Pick<TestingGameParams, "moves" | "players">): TestingGame => {
  const name = "Testing game";
  const game = new TestingGame({
    moves,
    name,
    players,
    quantityOfSlots: QUANTITY_OF_SLOTS,
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

const getNameShouldBe = ({
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

const getPlayersShouldBe = (
  game: TestingGame,
  players: TestingGameParams["players"],
): void => {
  test("players of game should be equal to the one passed as parameter with different reference", () => {
    const playersFromGame = game.getPlayers();
    const playersFromGameAsArray = Array.from(playersFromGame.values());

    expect(playersFromGameAsArray).not.toBe(players);
    expect(playersFromGameAsArray).toStrictEqual(players);

    for (
      let currentPlayerIndex = 0;
      currentPlayerIndex < players.length;
      currentPlayerIndex += INCREMENT_ONE
    ) {
      const playerFromGame = playersFromGameAsArray[currentPlayerIndex];
      expect(playerFromGame).toBeDefined();

      const player = players[currentPlayerIndex];
      expect(player).toBeDefined();

      expect(playerFromGame).toBeInstanceOf(TestingPlayer);
      expect(playerFromGame).not.toBe(player);
      expect(playerFromGame).toStrictEqual(player);
    }
  });

  test("changing the players object received by the game should not change the internal attribute", () => {
    const newPlayer = new TestingPlayer({
      name: "Carlos",
      symbol: "C",
    });

    const playersBeforeUpdate = game.getPlayers();
    const updatedPlayers = game.getPlayers();
    updatedPlayers.set(TestingPlayerKey.One, newPlayer);

    expect(game.getPlayers()).not.toBe(playersBeforeUpdate);
    expect(game.getPlayers()).toStrictEqual(playersBeforeUpdate);
    expect(game.getPlayers()).not.toBe(updatedPlayers);
    expect(game.getPlayers()).not.toEqual(updatedPlayers);
  });
};

const getMovesShouldBe = (
  game: TestingGame,
  moves: TestingGameParams["moves"],
): void => {
  test("move of game should be equal to the one passed as parameter with different reference", () => {
    const movesFromGame = game.getMoves();
    const movesFromGameAsArray = Array.from(movesFromGame.values());

    expect(movesFromGameAsArray).not.toBe(moves);
    expect(movesFromGameAsArray).toStrictEqual(moves);

    for (
      let currentMoveIndex = 0;
      currentMoveIndex < moves.length;
      currentMoveIndex += INCREMENT_ONE
    ) {
      const moveFromGame = movesFromGameAsArray[currentMoveIndex];
      expect(moveFromGame).toBeDefined();

      const move = moves[currentMoveIndex];
      expect(move).toBeDefined();

      expect(moveFromGame).toBeInstanceOf(TestingMove);
      expect(moveFromGame).not.toBe(move);
      expect(moveFromGame).toStrictEqual(move);
    }
  });

  test("changing the moves object received by the game should not change the internal attribute", () => {
    const newMove = new TestingMove({
      description: "This is a nowhere move",
      positionWherePlacePlayerKey: 0,
      title: "Nowhere move",
    });

    const movesBeforeUpdate = game.getMoves();
    const updatedMoves = game.getMoves();
    updatedMoves.set(TestingPlayerKey.One, newMove);

    expect(game.getMoves()).not.toBe(movesBeforeUpdate);
    expect(game.getMoves()).toStrictEqual(movesBeforeUpdate);
    expect(game.getMoves()).not.toBe(updatedMoves);
    expect(game.getMoves()).not.toEqual(updatedMoves);
  });
};

const getInitialStateShouldBe = ({
  game,
  state,
}: {
  game: TestingGame;
  state: TestingState;
}): void => {
  test("initial state of game should be equal to the one passed as parameter with different reference", () => {
    const initialStateFromGame = game.getInitialState();
    expect(initialStateFromGame).not.toBe(state);
    expect(initialStateFromGame).toStrictEqual(state);
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

  getNameShouldBe({ game, name: "Testing game" });
  getPlayersShouldBe(game, players);
  getMovesShouldBe(game, moves);

  const initialState = new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots: new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(TestingSlot.Empty),
  });
  getInitialStateShouldBe({ game, state: initialState });
};

testGame();

export { createGame, QUANTITY_OF_SLOTS };
