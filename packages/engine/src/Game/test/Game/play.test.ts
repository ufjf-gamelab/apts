import { expect, test } from "vitest";

import { type default as TestingMove, TestingMoveKey } from "../Move.js";
import { TestingPlayerKey } from "../Player.js";
import TestingState, { type TestingSlot } from "../State.js";
import {
  INDEX_OF_MOVE_NORTH_OF_NORTHWEST,
  INDEX_OF_MOVE_NORTHWEST_OF_NORTHWEST,
  QUANTITY_OF_SLOTS,
  setupGame,
  type TestGameParams,
} from "./setup.js";

const playShouldReturn = ({
  expectedState,
  game,
  move,
  moveKey,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedState: TestingState;
  move: TestingMove;
  moveKey: TestingMoveKey;
  state: TestingState;
}): void => {
  test(`${testDescriptor}: play(${moveKey}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const nextState = game.play(move, state);
    expect(nextState).toBeInstanceOf(TestingState);
    expect(nextState).not.toBe(state);
    expect(nextState).toStrictEqual(expectedState);
  });
};

const testPlay = ({
  expectedState,
  game,
  move,
  moveKey,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedState: TestingState;
  move: TestingMove;
  moveKey: TestingMoveKey;
  state: TestingState;
}): void => {
  playShouldReturn({
    expectedState,
    game,
    move,
    moveKey,
    state,
    testDescriptor,
  });
};

const testFromInitialState = (): void => {
  const { game } = setupGame();

  const moveNorthwestOfNorthwest = game.getMove(
    INDEX_OF_MOVE_NORTHWEST_OF_NORTHWEST,
  );
  if (moveNorthwestOfNorthwest === null) {
    throw new Error("Move to Northwest of Northwest is null");
  }

  const expectedSlots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(null);
  expectedSlots[moveNorthwestOfNorthwest.getPositionWherePlacePlayerKey()] =
    TestingState.getSlotThatRepresentsPlayerKey(TestingPlayerKey.One);

  const expectedState = new TestingState({
    game,
    playerKey: TestingPlayerKey.Two,
    slots: expectedSlots,
  });

  testPlay({
    expectedState,
    game,
    move: moveNorthwestOfNorthwest,
    moveKey: INDEX_OF_MOVE_NORTHWEST_OF_NORTHWEST,
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
    throw new Error("Move to Northwest of Northwest is null");
  }

  const moveNorthOfNorthwest = game.getMove(INDEX_OF_MOVE_NORTH_OF_NORTHWEST);
  if (moveNorthOfNorthwest === null) {
    throw new Error("Move to North of Northwest is null");
  }

  let state = game.getInitialState();
  state = game.play(moveNorthwestOfNorthwest, state);

  const expectedValidMoves = game.getMoves();
  expectedValidMoves.delete(TestingMoveKey.NorthwestOfNorthwest);

  const expectedSlots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(null);
  expectedSlots[moveNorthwestOfNorthwest.getPositionWherePlacePlayerKey()] =
    TestingState.getSlotThatRepresentsPlayerKey(TestingPlayerKey.One);
  expectedSlots[moveNorthOfNorthwest.getPositionWherePlacePlayerKey()] =
    TestingState.getSlotThatRepresentsPlayerKey(TestingPlayerKey.Two);

  const expectedState = new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots: expectedSlots,
  });
  testPlay({
    expectedState,
    game,
    move: moveNorthOfNorthwest,
    moveKey: INDEX_OF_MOVE_NORTH_OF_NORTHWEST,
    state,
    testDescriptor: "after playing move Northwest of Northwest",
  });
};
testAfterPlayingMoveNorthwestOfNorthwest();
