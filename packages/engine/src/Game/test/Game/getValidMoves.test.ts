import { expect, test } from "vitest";

import type { TestingMoves } from "../Game.js";
import type TestingState from "../State.js";
import {
  INDEX_OF_MOVE_NORTHWEST_OF_NORTHWEST,
  setupGame,
  type TestGameParams,
} from "./setup.js";

const getValidMovesShouldReturn = ({
  expectedValidMoves,
  game,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedValidMoves: TestingMoves;
  state: TestingState;
}): void => {
  test(`${testDescriptor}: getValidMoves() should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const validMovesFromGame = game.getValidMoves({ state });
    expect(validMovesFromGame).not.toBe(expectedValidMoves);
    expect(validMovesFromGame).toStrictEqual(expectedValidMoves);
  });
};

const testGetValidMoves = ({
  expectedValidMoves,
  game,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedValidMoves: TestingMoves;
  state: TestingState;
}): void => {
  getValidMovesShouldReturn({
    expectedValidMoves,
    game,
    state,
    testDescriptor,
  });
};

const testFromInitialState = (): void => {
  const { game } = setupGame();
  testGetValidMoves({
    expectedValidMoves: game.getMoves(),
    game,
    state: game.getInitialState(),
    testDescriptor: "from initial state",
  });
};
testFromInitialState();

const testAfterPlayingMoveNorthwestOfNorthwest = (): void => {
  const { game } = setupGame();

  const moveNorthwestOfNorthwest = game.getMove(
    INDEX_OF_MOVE_NORTHWEST_OF_NORTHWEST,
  );
  if (moveNorthwestOfNorthwest === null) {
    throw new Error("Move Northwest of Northwest is null");
  }

  let state = game.getInitialState();
  state = game.play(moveNorthwestOfNorthwest, state);

  const expectedValidMoves = game.getMoves();
  expectedValidMoves.delete(INDEX_OF_MOVE_NORTHWEST_OF_NORTHWEST);

  getValidMovesShouldReturn({
    expectedValidMoves,
    game,
    state,
    testDescriptor: "after playing move Northwest of Northwest",
  });
};
testAfterPlayingMoveNorthwestOfNorthwest();
