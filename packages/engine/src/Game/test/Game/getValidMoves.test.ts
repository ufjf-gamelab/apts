import { expect, test } from "vitest";

import type TestingMove from "../Move.js";
import { IndexOfTestingMove } from "../Move/setup.js";
import type TestingState from "../State.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getValidMovesShouldReturn = ({
  expectedValidMoves,
  game,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedValidMoves: TestingMove[];
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
  expectedValidMoves: TestingMove[];
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
  const {
    dataRelatedToCreatedGame: { moves },
    game,
  } = setupGame();
  testGetValidMoves({
    expectedValidMoves: Array.from(moves.values().map(({ move }) => move)),
    game,
    state: game.getInitialState(),
    testDescriptor: "from initial state",
  });
};
testFromInitialState();

const testAfterPlayingMoveNorthwestOfNorthwest = (): void => {
  const { game } = setupGame();

  const moveNorthwestOfNorthwest = game.getMove(
    IndexOfTestingMove.NorthwestOfNorthwest,
  );
  if (moveNorthwestOfNorthwest === null) {
    throw new Error("Move Northwest of Northwest is null");
  }

  let state = game.getInitialState();
  state = game.play(moveNorthwestOfNorthwest, state);

  const expectedValidMoves = Array.from(game.getMoves());
  expectedValidMoves.shift();

  getValidMovesShouldReturn({
    expectedValidMoves,
    game,
    state,
    testDescriptor: "after playing move Northwest of Northwest",
  });
};
testAfterPlayingMoveNorthwestOfNorthwest();
