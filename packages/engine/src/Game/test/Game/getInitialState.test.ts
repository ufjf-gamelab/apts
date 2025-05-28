import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { encodeState } from "../State/encode.js";
import { createInitialState } from "../State/setup.js";
import { createCommonGame, type TestGameParams } from "./setup.js";

const getInitialStateShouldReturn = ({
  expectedState,
  game,
  testDescriptor,
}: TestGameParams & {
  expectedState: ReturnType<TestingGame["getInitialState"]>;
}): void => {
  test(`${testDescriptor}: getInitialState() should return ${encodeState({ state: expectedState })}`, () => {
    const initialStateFromGame = game.getInitialState();
    expect(initialStateFromGame).not.toBe(expectedState);
    expect(initialStateFromGame).toStrictEqual(expectedState);
  });
};

const testGetInitialStateForCommonGame = (): void => {
  const { game } = createCommonGame();
  const { state } = createInitialState();
  getInitialStateShouldReturn({
    expectedState: state,
    game,
    testDescriptor: "common",
  });
};

testGetInitialStateForCommonGame();
