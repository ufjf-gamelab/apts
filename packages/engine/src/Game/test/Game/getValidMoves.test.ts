import { describe, expect, test } from "vitest";

import type { default as TestingGame, TestingMoves } from "../Game.js";
import { TestingMoveKey } from "../Move.js";
import type TestingState from "../State.js";
import { setupGame } from "./setup.js";

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

const testGetValidMoves = (): void => {
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

describe("getValidMoves", () => {
  testGetValidMoves();
});
