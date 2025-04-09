import { expect, test } from "vitest";

import { INITIAL_POINTS, type default as TestingGame } from "../Game.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import TestingSlot from "../Slot.js";
import TestingState from "../State.js";
import { QUANTITY_OF_SLOTS, setupGame, type TestGameParams } from "./setup.js";

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

const testGetInitialState = ({
  game,
  testDescriptor,
}: TestGameParams): void => {
  const slots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(
    new TestingSlot({
      indexOfOccupyingPlayer: null,
    }),
  );
  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.One,
    score: [INITIAL_POINTS, INITIAL_POINTS],
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
