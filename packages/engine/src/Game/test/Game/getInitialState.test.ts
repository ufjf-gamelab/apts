import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { createInitialState } from "../State/setup.js";
import { setupGame, type TestGameParams } from "./setup.js";

const getInitialStateShouldReturn = ({
  expectedState,
  game,
  testDescriptor,
}: TestGameParams & {
  expectedState: ReturnType<TestingGame["getInitialState"]>;
}): void => {
  test(`${testDescriptor}: getInitialState() should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const initialStateFromGame = game.getInitialState();
    expect(initialStateFromGame).not.toBe(expectedState);
    expect(initialStateFromGame).toStrictEqual(expectedState);
  });
};

const testGetInitialStateForCommonGame = (): void => {
  const { game } = setupGame();
  const { state } = createInitialState();
  getInitialStateShouldReturn({
    expectedState: state,
    game,
    testDescriptor: "common",
  });
};

testGetInitialStateForCommonGame();
