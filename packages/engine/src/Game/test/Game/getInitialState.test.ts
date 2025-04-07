import { expect, test } from "vitest";

import { TestingPlayerKey } from "../Player.js";
import TestingState, { type TestingSlot } from "../State.js";
import { QUANTITY_OF_SLOTS, setupGame, type TestGameParams } from "./setup.js";

const getInitialStateShouldReturn = ({
  expectedState,
  game,
  testDescriptor,
}: TestGameParams & {
  expectedState: TestingState;
}): void => {
  test(`${testDescriptor}: getInitialState() should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const initialStateFromGame = game.getInitialState();
    expect(initialStateFromGame).not.toBe(expectedState);
    expect(initialStateFromGame).toStrictEqual(expectedState);
  });
};

const testGetInitialState = ({
  game,
  testDescriptor,
}: TestGameParams): void => {
  const slots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(null);
  const expectedState = new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots,
  });
  getInitialStateShouldReturn({ expectedState, game, testDescriptor });
};

const testGetInitialStateForCommonGame = (): void => {
  const { game } = setupGame();
  testGetInitialState({ game, testDescriptor: "common" });
};

testGetInitialStateForCommonGame();

export { QUANTITY_OF_SLOTS };
