/* eslint-disable max-statements */
import { expect, test } from "vitest";

import type { Integer } from "../../../types.js";
import type TestingGame from "../Game.js";
import type TestingMove from "../Move.js";
import { getTitleOfTestingMove, IndexOfTestingMove } from "../Move/setup.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import TestingSlot from "../Slot.js";
import { createSlotsForInitialState } from "../Slot/setup.js";
import TestingState, { INITIAL_POINTS } from "../State.js";
import { setupGame, type TestGameParams } from "./setup.js";

const ONE_POINT: Integer = 1;

const getMove = ({
  game,
  indexOfTestingMove,
}: {
  game: TestingGame;
  indexOfTestingMove: IndexOfTestingMove;
}): TestingMove => {
  const move = game.getMove(indexOfTestingMove);
  if (move === null) {
    const titleOfTestingMove = getTitleOfTestingMove(indexOfTestingMove);
    throw new Error(`Move ${titleOfTestingMove} is null`);
  }
  return move;
};

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

  expectedSlots[moveNorthwestOfNorthwest.getIndexOfSlotInWhichPlacePiece()] =
    new TestingSlot({
      indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
    });

  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.Two,
    score: TestingState.initializeScore(game.getQuantityOfPlayers()),
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
    score: TestingState.initializeScore(game.getQuantityOfPlayers()),
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

const testAfterPlayerTwoEarnsOnePointAndBeforePlayerOneEarnsOnePoint =
  // eslint-disable-next-line max-lines-per-function
  (): void => {
    const { game } = setupGame();
    const slots = createSlotsForInitialState();
    const expectedSlots = Array.from(slots.values().map(({ slot }) => slot));

    const moveNorthOfNorth = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.NorthOfNorth,
    });
    const moveCenterOfNorth = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.CenterOfNorth,
    });
    const moveSouthOfNorth = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.SouthOfNorth,
    });
    const moveNorthOfCenter = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.NorthOfCenter,
    });
    const moveCenterOfCenter = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.CenterOfCenter,
    });

    const moveNorthwestOfNorthwest = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.NorthwestOfNorthwest,
    });
    const moveNorthOfNorthwest = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.NorthOfNorthwest,
    });
    const moveWestOfNorthwest = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.WestOfNorthwest,
    });
    const moveCenterOfNorthwest = getMove({
      game,
      indexOfTestingMove: IndexOfTestingMove.CenterOfNorthwest,
    });

    let state = game.getInitialState();
    state = game.play(moveNorthOfNorth, state);
    state = game.play(moveNorthwestOfNorthwest, state);
    state = game.play(moveCenterOfNorth, state);
    state = game.play(moveWestOfNorthwest, state);
    state = game.play(moveSouthOfNorth, state);
    state = game.play(moveNorthOfNorthwest, state);
    state = game.play(moveNorthOfCenter, state);
    state = game.play(moveCenterOfNorthwest, state);
    state = game.play(moveCenterOfCenter, state);

    const expectedValidMoves = Array.from(game.getMoves());
    expectedValidMoves.splice(IndexOfTestingMove.NorthOfNorth);
    expectedValidMoves.splice(IndexOfTestingMove.CenterOfNorth);
    expectedValidMoves.splice(IndexOfTestingMove.SouthOfNorth);
    expectedValidMoves.splice(IndexOfTestingMove.NorthOfCenter);
    expectedValidMoves.splice(IndexOfTestingMove.CenterOfCenter);
    expectedValidMoves.splice(IndexOfTestingMove.NorthwestOfNorthwest);
    expectedValidMoves.splice(IndexOfTestingMove.NorthOfNorthwest);
    expectedValidMoves.splice(IndexOfTestingMove.WestOfNorthwest);
    expectedValidMoves.splice(IndexOfTestingMove.CenterOfNorthwest);

    expectedSlots[moveNorthwestOfNorthwest.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.Two,
      });
    expectedSlots[moveNorthOfNorthwest.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.Two,
      });
    expectedSlots[moveWestOfNorthwest.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.Two,
      });
    expectedSlots[moveCenterOfNorthwest.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.Two,
      });

    expectedSlots[moveNorthOfNorth.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
      });
    expectedSlots[moveCenterOfNorth.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
      });
    expectedSlots[moveSouthOfNorth.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
      });
    expectedSlots[moveNorthOfCenter.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
      });
    expectedSlots[moveCenterOfCenter.getIndexOfSlotInWhichPlacePiece()] =
      new TestingSlot({
        indexOfOccupyingPlayer: IndexOfTestingPlayer.One,
      });

    const expectedState = new TestingState({
      game,
      indexOfPlayer: IndexOfTestingPlayer.One,
      score: [INITIAL_POINTS, ONE_POINT],
      slots: expectedSlots,
    });
    playShouldReturn({
      expectedState,
      game,
      indexOfMove: IndexOfTestingMove.NorthOfNorthwest,
      move: moveNorthOfNorthwest,
      state,
      testDescriptor:
        "common: after player two earns one point and before player one earns one point",
    });
  };
testAfterPlayerTwoEarnsOnePointAndBeforePlayerOneEarnsOnePoint();
