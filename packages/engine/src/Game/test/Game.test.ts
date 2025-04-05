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
  expectedName,
  game,
}: {
  expectedName: TestingGame["name"];
  game: TestingGame;
}): void => {
  test(`getName() should return {${expectedName}}`, () => {
    expect(game.getName()).toBe(expectedName);
  });
};

const getPlayerShouldReturn = ({
  expectedPlayer,
  game,
  playerKey,
}: {
  expectedPlayer: TestingPlayer;
  game: TestingGame;
  playerKey: TestingPlayerKey;
}): void => {
  test(`getPlayer(${playerKey}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const playerFromGame = game.getPlayer(playerKey);
    expect(playerFromGame).toBeDefined();
    expect(playerFromGame).toBeInstanceOf(TestingPlayer);
    expect(playerFromGame).not.toBe(expectedPlayer);
    expect(playerFromGame).toStrictEqual(expectedPlayer);
  });
};

const getPlayersShouldReturn = ({
  expectedPlayers,
  game,
}: {
  expectedPlayers: TestingGameParams["players"];
  game: TestingGame;
}): void => {
  test("getPlayers() should return an object equal to the one passed as parameter, but as a different reference", () => {
    const playersFromGame = game.getPlayers();
    const playersFromGameAsArray = Array.from(playersFromGame.values());

    expect(playersFromGameAsArray).not.toBe(expectedPlayers);
    expect(playersFromGameAsArray).toStrictEqual(expectedPlayers);

    for (
      let currentPlayerIndex = 0;
      currentPlayerIndex < expectedPlayers.length;
      currentPlayerIndex += INCREMENT_ONE
    ) {
      const playerFromGame = playersFromGameAsArray[currentPlayerIndex];
      expect(playerFromGame).toBeDefined();

      const player = expectedPlayers[currentPlayerIndex];
      expect(player).toBeDefined();

      expect(playerFromGame).toBeInstanceOf(TestingPlayer);
      expect(playerFromGame).not.toBe(player);
      expect(playerFromGame).toStrictEqual(player);
    }
  });

  test("modifying the object players received by the getter should not change its internal attribute", () => {
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
  expectedMove,
  game,
  moveKey,
}: {
  expectedMove: TestingMove;
  game: TestingGame;
  moveKey: TestingMoveKey;
}): void => {
  test(`getMove(${moveKey}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const moveFromGame = game.getMove(moveKey);
    expect(moveFromGame).toBeDefined();
    expect(moveFromGame).toBeInstanceOf(TestingMove);
    expect(moveFromGame).not.toBe(expectedMove);
    expect(moveFromGame).toStrictEqual(expectedMove);
  });
};

const getMovesShouldReturn = ({
  expectedMoves,
  game,
}: {
  expectedMoves: TestingGameParams["moves"];
  game: TestingGame;
}): void => {
  test("getMoves() should return an object equal to the one passed as parameter, but as a different reference", () => {
    const movesFromGame = game.getMoves();
    const movesFromGameAsArray = Array.from(movesFromGame.values());

    expect(movesFromGameAsArray).not.toBe(expectedMoves);
    expect(movesFromGameAsArray).toStrictEqual(expectedMoves);

    for (
      let currentMoveIndex = 0;
      currentMoveIndex < expectedMoves.length;
      currentMoveIndex += INCREMENT_ONE
    ) {
      const moveFromGame = movesFromGameAsArray[currentMoveIndex];
      expect(moveFromGame).toBeDefined();

      const move = expectedMoves[currentMoveIndex];
      expect(move).toBeDefined();

      expect(moveFromGame).toBeInstanceOf(TestingMove);
      expect(moveFromGame).not.toBe(move);
      expect(moveFromGame).toStrictEqual(move);
    }
  });

  test("modifying the object moves received by the getter should not change its internal attribute", () => {
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
  expectedState,
  game,
}: {
  expectedState: TestingState;
  game: TestingGame;
}): void => {
  test("getInitialState() should return an object equal to the one passed as parameter, but as a different reference", () => {
    const initialStateFromGame = game.getInitialState();
    expect(initialStateFromGame).not.toBe(expectedState);
    expect(initialStateFromGame).toStrictEqual(expectedState);
  });
};

const getNextPlayerKeyShouldReturn = ({
  expectedPlayerKey,
  game,
  state,
}: {
  expectedPlayerKey: TestingPlayerKey;
  game: TestingGame;
  state: TestingState;
}): void => {
  test(`getNextPlayerKey() should return {${expectedPlayerKey}}`, () => {
    const nextPlayerKey = game.getNextPlayerKey(state);
    expect(nextPlayerKey).toBe(expectedPlayerKey);
  });
};

const playShouldReturn = ({
  expectedState,
  game,
  move,
  state,
}: {
  expectedState: TestingState;
  game: TestingGame;
  move: TestingMove;
  state: TestingState;
}): void => {
  test("play() should return an object equal to the one passed as parameter, but as a different reference", () => {
    const nextState = game.play(move, state);
    expect(nextState).toBeInstanceOf(TestingState);
    expect(nextState).not.toBe(state);
    expect(nextState).toStrictEqual(expectedState);
  });
};

// eslint-disable-next-line max-statements
const testGame = (): void => {
  const players = createPlayers();
  const moves = createMoves();
  const game = createGame({
    moves,
    players,
  });

  shouldBeAnInstanceOfItsClass({ game });
  cloneShouldCreateANewInstance({ game });

  getNameShouldReturn({ expectedName: "Testing game", game });

  const [playerOne] = players;
  if (typeof playerOne === "undefined") {
    throw new Error("Player One is undefined");
  }
  getPlayerShouldReturn({
    expectedPlayer: playerOne,
    game,
    playerKey: TestingPlayerKey.One,
  });
  getPlayersShouldReturn({ expectedPlayers: players, game });

  const [moveToNorthwestOfNorthwest] = moves;
  if (typeof moveToNorthwestOfNorthwest === "undefined") {
    throw new Error("Move to Northwest of Northwest is undefined");
  }
  getMoveShouldReturn({
    expectedMove: moveToNorthwestOfNorthwest,
    game,
    moveKey: TestingMoveKey.NorthwestOfNorthwest,
  });
  getMovesShouldReturn({ expectedMoves: moves, game });

  const initialState = new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots: new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(TestingSlot.Empty),
  });
  getInitialStateShouldReturn({ expectedState: initialState, game });

  getNextPlayerKeyShouldReturn({
    expectedPlayerKey: TestingPlayerKey.Two,
    game,
    state: initialState,
  });

  const expectedNextSlots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(
    TestingSlot.Empty,
  );
  expectedNextSlots[
    moveToNorthwestOfNorthwest.getPositionWherePlacePlayerKey()
  ] = TestingState.getSlotThatRepresentsPlayerKey(TestingPlayerKey.One);
  const expectedNextState = new TestingState({
    game,
    playerKey: TestingPlayerKey.Two,
    slots: expectedNextSlots,
  });
  playShouldReturn({
    expectedState: expectedNextState,
    game,
    move: moveToNorthwestOfNorthwest,
    state: initialState,
  });
};

testGame();

export { createGame, QUANTITY_OF_SLOTS };
