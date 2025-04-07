import { expect, test } from "vitest";

import TestingGame, {
  type TestingGameParams,
  type TestingMoves,
  type TestingPlayers,
} from "./Game.js";
import { default as TestingMove, TestingMoveKey } from "./Move.js";
import { createMoves } from "./Move.test.js";
import TestingPlayer, { TestingPlayerKey } from "./Player.js";
import { createPlayers } from "./Player.test.js";
import { TestingSlot, default as TestingState } from "./State.js";

const QUANTITY_OF_SLOTS = 81;

/* Setup */

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
  const movesList = createMoves();
  const game = createGame({
    movesList,
    playersList,
  });
  return { game, movesList, playersList };
};

/* Expected results */

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
    const name = game.getName();
    expect(name).toBe(expectedName);
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
    const player = game.getPlayer(playerKey);
    expect(player).toBeDefined();
    expect(player).toBeInstanceOf(TestingPlayer);
    expect(player).not.toBe(expectedPlayer);
    expect(player).toStrictEqual(expectedPlayer);
  });
};

const getPlayersShouldReturn = ({
  expectedPlayers,
  game,
}: {
  expectedPlayers: TestingPlayers;
  game: TestingGame;
}): void => {
  test("getPlayers() should return an object equal to the one passed as parameter, but as a different reference", () => {
    const players = game.getPlayers();
    expect(players).not.toBe(expectedPlayers);
    expect(players).toStrictEqual(expectedPlayers);

    for (const [playerKey, player] of players) {
      const expectedPlayer = expectedPlayers.get(playerKey);

      expect(player).toBeInstanceOf(TestingPlayer);
      expect(player).not.toBe(expectedPlayer);
      expect(player).toStrictEqual(expectedPlayer);
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
  expectedMoves: TestingMoves;
  game: TestingGame;
}): void => {
  test("getMoves() should return an object equal to the one passed as parameter, but as a different reference", () => {
    const moves = game.getMoves();

    expect(moves).not.toBe(expectedMoves);
    expect(moves).toStrictEqual(expectedMoves);

    for (const [moveKey, move] of moves) {
      const expectedMove = expectedMoves.get(moveKey);

      expect(move).toBeInstanceOf(TestingMove);
      expect(move).not.toBe(expectedMove);
      expect(move).toStrictEqual(expectedMove);
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

const getValidMovesShouldReturn = ({
  expectedValidMoves,
  game,
  state,
  testDescriptor,
}: {
  expectedValidMoves: TestingMoves;
  game: TestingGame;
  state: TestingState;
  testDescriptor?: string;
}): void => {
  test(`getValidMoves() ${testDescriptor ? `${testDescriptor} ` : ""}should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const validMovesFromGame = game.getValidMoves({ state });
    expect(validMovesFromGame).not.toBe(expectedValidMoves);
    expect(validMovesFromGame).toStrictEqual(expectedValidMoves);
  });
};

const playShouldReturn = ({
  expectedState,
  game,
  move,
  state,
  testDescriptor,
}: {
  expectedState: TestingState;
  game: TestingGame;
  move: TestingMove;
  state: TestingState;
  testDescriptor?: string;
}): void => {
  test(`play() ${testDescriptor ? `${testDescriptor} ` : ""}should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const nextState = game.play(move, state);
    expect(nextState).toBeInstanceOf(TestingState);
    expect(nextState).not.toBe(state);
    expect(nextState).toStrictEqual(expectedState);
  });
};

/* Tests */

const testInstance = (): void => {
  const { game } = setupGame();
  shouldBeAnInstanceOfItsClass({ game });
};

const testClone = (): void => {
  const { game } = setupGame();
  cloneShouldCreateANewInstance({ game });
};

const testGetInitialState = (): void => {
  const { game } = setupGame();
  const expectedState = new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots: new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(TestingSlot.Empty),
  });
  getInitialStateShouldReturn({ expectedState, game });
};

const testGetMoves = (): void => {
  const { game, movesList } = setupGame();

  const [moveToNorthwestOfNorthwest] = movesList;
  if (typeof moveToNorthwestOfNorthwest === "undefined") {
    throw new Error("Move to Northwest of Northwest is undefined");
  }

  getMoveShouldReturn({
    expectedMove: moveToNorthwestOfNorthwest,
    game,
    moveKey: TestingMoveKey.NorthwestOfNorthwest,
  });

  const expectedMoves: TestingMoves = new Map(
    movesList.map((move, index) => [index, move.clone()]),
  );
  getMovesShouldReturn({ expectedMoves, game });
};

const testGetName = (): void => {
  const { game } = setupGame();
  getNameShouldReturn({ expectedName: "Testing game", game });
};

const testGetNextPlayerKey = (): void => {
  const { game } = setupGame();
  getNextPlayerKeyShouldReturn({
    expectedPlayerKey: TestingPlayerKey.Two,
    game,
    state: game.getInitialState(),
  });
};

const testGetPlayers = (): void => {
  const { game, playersList } = setupGame();

  const [playerOne] = playersList;
  if (typeof playerOne === "undefined") {
    throw new Error("Player One is undefined");
  }
  getPlayerShouldReturn({
    expectedPlayer: playerOne,
    game,
    playerKey: TestingPlayerKey.One,
  });

  const expectedPlayers: TestingPlayers = new Map();
  const [, playerTwo] = playersList;
  if (typeof playerTwo === "undefined") {
    throw new Error("Player Two is undefined");
  }
  expectedPlayers.set(TestingPlayerKey.One, playerOne);
  expectedPlayers.set(TestingPlayerKey.Two, playerTwo);

  getPlayersShouldReturn({
    expectedPlayers,
    game,
  });
};

const testPlay = (): void => {
  const { game, movesList } = setupGame();

  const testFromInitialState = (): void => {
    const [moveToNorthwestOfNorthwest] = movesList;
    if (typeof moveToNorthwestOfNorthwest === "undefined") {
      throw new Error("Move to Northwest of Northwest is undefined");
    }

    const expectedSlots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(
      TestingSlot.Empty,
    );
    expectedSlots[moveToNorthwestOfNorthwest.getPositionWherePlacePlayerKey()] =
      TestingState.getSlotThatRepresentsPlayerKey(TestingPlayerKey.One);

    const expectedState = new TestingState({
      game,
      playerKey: TestingPlayerKey.Two,
      slots: expectedSlots,
    });

    playShouldReturn({
      expectedState,
      game,
      move: moveToNorthwestOfNorthwest,
      state: game.getInitialState(),
      testDescriptor: "from initial state",
    });
  };
  testFromInitialState();

  const testAfterPlayingMoveNorthwestOfNorthwest = (): void => {
    const [moveNorthwestOfNorthwest] = movesList;
    if (typeof moveNorthwestOfNorthwest === "undefined") {
      throw new Error("Move Northwest of Northwest is undefined");
    }
    const [, moveNorthOfNorthwest] = movesList;
    if (typeof moveNorthOfNorthwest === "undefined") {
      throw new Error("Move North of Northwest is undefined");
    }

    let state = game.getInitialState();
    state = game.play(moveNorthwestOfNorthwest, state);

    const expectedValidMoves = game.getMoves();
    expectedValidMoves.delete(TestingMoveKey.NorthwestOfNorthwest);

    const expectedSlots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(
      TestingSlot.Empty,
    );
    expectedSlots[moveNorthwestOfNorthwest.getPositionWherePlacePlayerKey()] =
      TestingState.getSlotThatRepresentsPlayerKey(TestingPlayerKey.One);
    expectedSlots[moveNorthOfNorthwest.getPositionWherePlacePlayerKey()] =
      TestingState.getSlotThatRepresentsPlayerKey(TestingPlayerKey.Two);

    const expectedState = new TestingState({
      game,
      playerKey: TestingPlayerKey.One,
      slots: expectedSlots,
    });
    playShouldReturn({
      expectedState,
      game,
      move: moveNorthwestOfNorthwest,
      state,
      testDescriptor: "after playing move Northwest of Northwest",
    });
  };
  testAfterPlayingMoveNorthwestOfNorthwest();
};

const testValidMoves = (): void => {
  const { game, movesList } = setupGame();

  const testFromInitialState = (): void => {
    getValidMovesShouldReturn({
      expectedValidMoves: game.getMoves(),
      game,
      state: game.getInitialState(),
      testDescriptor: "from initial state",
    });
  };
  testFromInitialState();

  const testAfterPlayingMoveNorthwestOfNorthwest = (): void => {
    const [moveNorthwestOfNorthwest] = movesList;
    if (typeof moveNorthwestOfNorthwest === "undefined") {
      throw new Error("Move Northwest of Northwest is undefined");
    }

    let state = game.getInitialState();
    state = game.play(moveNorthwestOfNorthwest, state);

    const expectedValidMoves = game.getMoves();
    expectedValidMoves.delete(TestingMoveKey.NorthwestOfNorthwest);

    getValidMovesShouldReturn({
      expectedValidMoves,
      game,
      state,
      testDescriptor: "after playing move Northwest of Northwest",
    });
  };
  testAfterPlayingMoveNorthwestOfNorthwest();
};

/* Run tests */

const testGame = (): void => {
  testInstance();
  testClone();
  testGetInitialState();
  testGetMoves();
  testGetName();
  testGetNextPlayerKey();
  testGetPlayers();
  testPlay();
  testValidMoves();
};

testGame();

export { createGame, QUANTITY_OF_SLOTS };
