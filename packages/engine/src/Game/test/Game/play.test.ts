import { expect, test } from "vitest";

import { INITIAL_POINTS, type default as TestingGame } from "../Game.js";
import type TestingMove from "../Move.js";
import { IndexOfTestingMove } from "../Move/setup.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import TestingSlot from "../Slot.js";
import { createSlotsForInitialState } from "../Slot/setup.js";
import TestingState from "../State.js";
import { setupGame, type TestGameParams } from "./setup.js";

const playShouldReturn = ({
  expectedState,
  game,
  indexOfMove,
  move,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedState: ReturnType<TestingGame["play"]>;
  indexOfMove: IndexOfTestingMove;
  move: TestingMove;
  state: TestingState;
}): void => {
  test(`${testDescriptor}: play(${indexOfMove}) should return an object equal to the one passed as parameter, but as a different reference`, () => {
    const nextState = game.play(move, state);
    expect(nextState).toBeInstanceOf(TestingState);
    expect(nextState).not.toBe(state);
    expect(nextState).toStrictEqual(expectedState);
  });
};

const testFromInitialState = (): void => {
  const { game } = setupGame();
  const slots = createSlotsForInitialState();
  const expectedSlots = Array.from(slots.values().map(({ slot }) => slot));

  const moveNorthwestOfNorthwest = game.getMove(
    IndexOfTestingMove.NorthwestOfNorthwest,
  );
  if (moveNorthwestOfNorthwest === null) {
    throw new Error("Move to Northwest of Northwest is null");
  }

  const indexOfSlotInWhichPlacePiece =
    moveNorthwestOfNorthwest.getIndexOfSlotInWhichPlacePiece();
  expectedSlots[indexOfSlotInWhichPlacePiece] = new TestingSlot({
    indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
  });

  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.Two,
    // TODO: Update this to use the correct score
    score: [INITIAL_POINTS, INITIAL_POINTS],
    slots: expectedSlots,
  });

  playShouldReturn({
    expectedState,
    game,
    indexOfMove: IndexOfTestingMove.NorthwestOfNorthwest,
    move: moveNorthwestOfNorthwest,
    state: game.getInitialState(),
    testDescriptor: "common: from initial state",
  });
};
testFromInitialState();

const testAfterPlayingMoveNorthwestOfNorthwest = (): void => {
  const { game } = setupGame();
  const slots = createSlotsForInitialState();
  const expectedSlots = Array.from(slots.values().map(({ slot }) => slot));

  const moveNorthwestOfNorthwest = game.getMove(
    IndexOfTestingMove.NorthwestOfNorthwest,
  );
  if (moveNorthwestOfNorthwest === null) {
    throw new Error("Move to Northwest of Northwest is null");
  }

  const moveNorthOfNorthwest = game.getMove(
    IndexOfTestingMove.NorthOfNorthwest,
  );
  if (moveNorthOfNorthwest === null) {
    throw new Error("Move to North of Northwest is null");
  }

  let state = game.getInitialState();
  state = game.play(moveNorthwestOfNorthwest, state);

  const expectedValidMoves = Array.from(game.getMoves());
  expectedValidMoves.shift();
  expectedValidMoves.shift();

  moveNorthwestOfNorthwest.getIndexOfSlotInWhichPlacePiece();
  expectedSlots[moveNorthwestOfNorthwest.getIndexOfSlotInWhichPlacePiece()] =
    new TestingSlot({
      indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
    });
  expectedSlots[moveNorthOfNorthwest.getIndexOfSlotInWhichPlacePiece()] =
    new TestingSlot({
      indexOfOccupyingPlayer: IndexOfTestingPlayer.Two,
    });

  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.One,
    // TODO: Update this to use the correct score
    score: [INITIAL_POINTS, INITIAL_POINTS],
    slots: expectedSlots,
  });
  playShouldReturn({
    expectedState,
    game,
    indexOfMove: IndexOfTestingMove.NorthOfNorthwest,
    move: moveNorthOfNorthwest,
    state,
    testDescriptor: "common: after playing move Northwest of Northwest",
  });
};
testAfterPlayingMoveNorthwestOfNorthwest();
