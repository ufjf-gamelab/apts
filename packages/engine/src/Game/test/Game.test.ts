import { expect, test } from "vitest";

import { INCREMENT_ONE } from "../../constants.js";
import TestingGame, { type TestingGameParams } from "./Game.js";
import { default as TestingMove, TestingMoveKey } from "./Move.js";
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
  test("game should be an instance of the class {TestingGame}", () => {
    expect(game).toBeInstanceOf(TestingGame);
  });
};

const cloneShouldCreateANewInstance = ({
  game,
}: {
  game: TestingGame;
}): void => {
  test("clone() should return a new instance of {TestingGame}", () => {
    const clone = game.clone();
    expect(clone).toBeInstanceOf(TestingGame);
    expect(clone).not.toBe(game);
    expect(clone.getMoves()).toStrictEqual(game.getMoves());
    expect(clone.getName()).toBe(game.getName());
    expect(clone.getPlayers()).toStrictEqual(game.getPlayers());
  });
};

const getNameShouldReturn = ({
  game,
  name,
}: {
  game: TestingGame;
  name: TestingGame["name"];
}): void => {
  test(`getName() should return {${name}}`, () => {
    expect(game.getName()).toBe(name);
  });
};

const getPlayerShouldReturn = ({
  game,
  player,
  playerKey,
}: {
  game: TestingGame;
  player: TestingPlayer;
  playerKey: TestingPlayerKey;
}): void => {
  test(`getPlayer(${playerKey}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const playerFromGame = game.getPlayer(playerKey);
    expect(playerFromGame).toBeDefined();
    expect(playerFromGame).toBeInstanceOf(TestingPlayer);
    expect(playerFromGame).not.toBe(player);
    expect(playerFromGame).toStrictEqual(player);
  });
};

const getPlayersShouldReturn = ({
  game,
  players,
}: {
  game: TestingGame;
  players: TestingGameParams["players"];
}): void => {
  test("getPlayers() should return an object equal to the one passed as parameter, but as a different reference", () => {
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

  test("modifying the object players received by the game should not change its internal attribute", () => {
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

const getMoveShouldReturn = ({
  game,
  move,
  moveKey,
}: {
  game: TestingGame;
  move: TestingMove;
  moveKey: TestingMoveKey;
}): void => {
  test(`getMove(${moveKey}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const moveFromGame = game.getMove(moveKey);
    expect(moveFromGame).toBeDefined();
    expect(moveFromGame).toBeInstanceOf(TestingMove);
    expect(moveFromGame).not.toBe(move);
    expect(moveFromGame).toStrictEqual(move);
  });
};

const getMovesShouldReturn = ({
  game,
  moves,
}: {
  game: TestingGame;
  moves: TestingGameParams["moves"];
}): void => {
  test("getMoves() should return an object equal to the one passed as parameter, but as a different reference", () => {
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

  test("modifying the object moves received by the game should not change its internal attribute", () => {
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

const getInitialStateShouldReturn = ({
  game,
  state,
}: {
  game: TestingGame;
  state: TestingState;
}): void => {
  test("getInitialState() should return an object equal to the one passed as parameter, but as a different reference", () => {
    const initialStateFromGame = game.getInitialState();
    expect(initialStateFromGame).not.toBe(state);
    expect(initialStateFromGame).toStrictEqual(state);
  });
};

const getNextPlayerKeyShouldReturn = ({
  game,
  playerKey,
  state,
}: {
  game: TestingGame;
  playerKey: TestingPlayerKey;
  state: TestingState;
}): void => {
  test(`getNextPlayerKey() should return {${playerKey}}`, () => {
    const nextPlayerKey = game.getNextPlayerKey(state);
    expect(nextPlayerKey).toBe(playerKey);
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

  getNameShouldReturn({ game, name: "Testing game" });

  const [playerOne] = players;
  if (typeof playerOne === "undefined") {
    throw new Error("Player One is undefined");
  }
  getPlayerShouldReturn({
    game,
    player: playerOne,
    playerKey: TestingPlayerKey.One,
  });
  getPlayersShouldReturn({ game, players });

  const [moveToNorthwestOfNorthwest] = moves;
  if (typeof moveToNorthwestOfNorthwest === "undefined") {
    throw new Error("Move to Northwest of Northwest is undefined");
  }
  getMoveShouldReturn({
    game,
    move: moveToNorthwestOfNorthwest,
    moveKey: TestingMoveKey.NorthwestOfNorthwest,
  });
  getMovesShouldReturn({ game, moves });

  const initialState = new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots: new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(TestingSlot.Empty),
  });
  getInitialStateShouldReturn({ game, state: initialState });

  getNextPlayerKeyShouldReturn({
    game,
    playerKey: TestingPlayerKey.Two,
    state: initialState,
  });
};

testGame();

export { createGame, QUANTITY_OF_SLOTS };
