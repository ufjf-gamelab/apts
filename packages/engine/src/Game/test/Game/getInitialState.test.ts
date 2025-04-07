import { describe, expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { TestingPlayerKey } from "../Player.js";
import TestingState, { type TestingSlot } from "../State.js";
import { QUANTITY_OF_SLOTS, setupGame } from "./setup.js";

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

const testGetInitialState = (): void => {
  const { game } = setupGame();
  const slots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(null);
  const expectedState = new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots,
  });
  getInitialStateShouldReturn({ expectedState, game });
};

testGetInitialState();

export { QUANTITY_OF_SLOTS };
