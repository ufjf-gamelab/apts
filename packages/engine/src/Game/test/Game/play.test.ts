import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { type default as TestingMove, TestingMoveKey } from "../Move.js";
import { TestingPlayerKey } from "../Player.js";
import TestingState, { type TestingSlot } from "../State.js";
import { QUANTITY_OF_SLOTS, setupGame } from "./setup.js";

const playShouldReturn = ({
  expectedState,
  game,
  move,
  moveDescriptor,
  state,
  testDescriptor,
}: {
  expectedState: TestingState;
  game: TestingGame;
  move: TestingMove;
  moveDescriptor: string;
  state: TestingState;
  testDescriptor?: string;
}): void => {
  test(`play(${moveDescriptor}) ${testDescriptor ? `${testDescriptor} ` : ""}should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const nextState = game.play(move, state);
    expect(nextState).toBeInstanceOf(TestingState);
    expect(nextState).not.toBe(state);
    expect(nextState).toStrictEqual(expectedState);
  });
};

const testPlay = (): void => {
  const { game, movesList } = setupGame();

  const testFromInitialState = (): void => {
    const [moveToNorthwestOfNorthwest] = movesList;
    if (typeof moveToNorthwestOfNorthwest === "undefined") {
      throw new Error("Move to Northwest of Northwest is undefined");
    }

    const expectedSlots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(null);
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
      moveDescriptor: "Northwest of Northwest",
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
    playShouldReturn({
      expectedState,
      game,
      move: moveNorthOfNorthwest,
      moveDescriptor: "North of Northwest",
      state,
      testDescriptor: "after playing move Northwest of Northwest",
    });
  };
  testAfterPlayingMoveNorthwestOfNorthwest();
};

testPlay();
