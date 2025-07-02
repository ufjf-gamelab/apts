import { expect, test } from "vitest";

import type TestingGame from "../../Game.js";
import type TestingMove from "../../Move.js";
import TestingState from "../../State.js";
import { getTitleOfTestingMove, IndexOfTestingMove } from "../Move/setup.js";
import { IndexOfTestingPlayer } from "../Player/setup.js";
import { AmountOfPoints, fillSlots } from "../Shape/setup.js";
import { encodeSlots } from "../Slot/encode.js";
import {
  convertCreatedSlotsAndRelatedDataToSlots,
  createSlotsForInitialState,
  type IndexOfTestingSlot,
} from "../Slot/setup.js";
import { encodeScore, encodeState } from "../State/encode.js";
import { createCommonGame, type TestGameParams } from "./setup.js";

const getMove = ({
  indexOfTestingMove,
  moves,
}: {
  indexOfTestingMove: IndexOfTestingMove;
  moves: readonly TestingMove[];
}): TestingMove => {
  const move = moves[indexOfTestingMove];
  if (typeof move === "undefined") {
    const titleOfTestingMove = getTitleOfTestingMove(indexOfTestingMove);
    throw new Error(`Move ${titleOfTestingMove} is null`);
  }
  return move;
};

const getIndexesOfSlotsFilledByMoves = ({
  indexesOfTestingMoves,
  moves,
}: {
  indexesOfTestingMoves: readonly IndexOfTestingMove[];
  moves: readonly TestingMove[];
}): readonly IndexOfTestingSlot[] =>
  indexesOfTestingMoves.map(indexOfTestingMove => {
    const move = getMove({
      indexOfTestingMove,
      moves,
    });
    const indexOfSlotInWhichPlacePiece = move.getIndexOfSlotInWhichPlacePiece();
    if (typeof indexOfSlotInWhichPlacePiece === "undefined") {
      const titleOfTestingMove = getTitleOfTestingMove(indexOfTestingMove);
      throw new Error(
        `Move ${titleOfTestingMove} has no index of slot in which place piece`,
      );
    }
    return indexOfSlotInWhichPlacePiece;
  });

const getDescriptorOfTestedMethod = ({
  state,
  testDescriptor,
}: {
  state: TestingState;
  testDescriptor: string;
}): string => `${testDescriptor}: play({${encodeState({ state })}})`;

const getDescriptorOfExpectedResult = ({
  expectedState,
}: {
  expectedState: ReturnType<TestingGame["play"]>;
}): string =>
  `{{indexOfPlayer: ${expectedState.getIndexOfPlayer()}; score: ${encodeScore({
    score: expectedState.getScore(),
  })}; slots: ${encodeSlots({ slots: expectedState.getSlots() })}}}`;

const playShouldReturn = ({
  expectedState,
  game,
  indexOfMove,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedState: ReturnType<TestingGame["play"]>;
  indexOfMove: IndexOfTestingMove;
  state: TestingState;
}): void => {
  test(`${getDescriptorOfTestedMethod({
    state,
    testDescriptor,
  })} should return ${getDescriptorOfExpectedResult({
    expectedState,
  })}`, () => {
    const nextState = game.play(indexOfMove, state);
    expect(nextState).toBeInstanceOf(TestingState);
    expect(nextState).not.toBe(state);
    expect(nextState).toStrictEqual(expectedState);
  });
};

const testPlayForCommonGame = ({
  expectedState,
  game,
  indexOfMove,
  state,
  testDescriptor,
}: {
  expectedState: ReturnType<TestingGame["play"]>;
  game: TestingGame;
  indexOfMove: IndexOfTestingMove;
  state: TestingState;
  testDescriptor?: string;
}): void => {
  playShouldReturn({
    expectedState,
    game,
    indexOfMove,
    state,
    testDescriptor: testDescriptor ? `: ${testDescriptor}` : "",
  });
};

((): void => {
  const { game } = createCommonGame();
  const moves = game.getMoves();
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );

  fillSlots({
    indexesOfSlots: getIndexesOfSlotsFilledByMoves({
      indexesOfTestingMoves: [IndexOfTestingMove.NorthwestOfNorthwest],
      moves,
    }),
    indexOfPlayer: IndexOfTestingPlayer.One,
    slots,
  });

  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.Two,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    slots,
  });

  testPlayForCommonGame({
    expectedState,
    game,
    indexOfMove: IndexOfTestingMove.NorthwestOfNorthwest,
    state: game.getInitialState(),
  });
})();

/* Initial State */

((): void => {
  const { game } = createCommonGame();
  const moves = game.getMoves();
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );

  fillSlots({
    indexesOfSlots: getIndexesOfSlotsFilledByMoves({
      indexesOfTestingMoves: [IndexOfTestingMove.NorthwestOfNorthwest],
      moves,
    }),
    indexOfPlayer: IndexOfTestingPlayer.One,
    slots,
  });
  const state = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.Two,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    slots,
  });

  const expectedSlots = [...slots];
  fillSlots({
    indexesOfSlots: getIndexesOfSlotsFilledByMoves({
      indexesOfTestingMoves: [IndexOfTestingMove.NorthOfNorthwest],
      moves,
    }),
    indexOfPlayer: IndexOfTestingPlayer.Two,
    slots: expectedSlots,
  });
  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.One,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    slots: expectedSlots,
  });

  testPlayForCommonGame({
    expectedState,
    game,
    indexOfMove: IndexOfTestingMove.NorthOfNorthwest,
    state,
  });
})();

((): void => {
  const { game } = createCommonGame();

  let state = game.getInitialState();
  state = game.play(IndexOfTestingMove.NorthwestOfNorthwest, state);

  test(`${getDescriptorOfTestedMethod({
    state,
    testDescriptor: "play NorthwestOfNorthwest twice",
  })} should return {}`, () => {
    expect(() =>
      game.play(IndexOfTestingMove.NorthwestOfNorthwest, state),
    ).toThrowError(new Error("Cannot play move 0 because it is not valid."));
  });
})();

/* Row 0 */

((): void => {
  const { game } = createCommonGame();
  const moves = game.getMoves();
  const slots = convertCreatedSlotsAndRelatedDataToSlots(
    createSlotsForInitialState(),
  );

  fillSlots({
    indexesOfSlots: getIndexesOfSlotsFilledByMoves({
      indexesOfTestingMoves: [
        IndexOfTestingMove.NorthwestOfNorthwest,
        IndexOfTestingMove.NorthOfNorthwest,
        IndexOfTestingMove.NortheastOfNorthwest,
        IndexOfTestingMove.NorthwestOfNorth,
      ],
      moves,
    }),
    indexOfPlayer: IndexOfTestingPlayer.One,
    slots,
  });
  fillSlots({
    indexesOfSlots: getIndexesOfSlotsFilledByMoves({
      indexesOfTestingMoves: [
        IndexOfTestingMove.WestOfWest,
        IndexOfTestingMove.CenterOfWest,
        IndexOfTestingMove.EastOfWest,
        IndexOfTestingMove.WestOfCenter,
      ],
      moves,
    }),
    indexOfPlayer: IndexOfTestingPlayer.Two,
    slots,
  });
  const state = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.One,
    score: [AmountOfPoints.Zero, AmountOfPoints.Zero],
    slots,
  });

  const expectedSlots = [...slots];
  fillSlots({
    indexesOfSlots: getIndexesOfSlotsFilledByMoves({
      indexesOfTestingMoves: [IndexOfTestingMove.NorthOfNorth],
      moves,
    }),
    indexOfPlayer: IndexOfTestingPlayer.One,
    slots: expectedSlots,
  });
  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.Two,
    score: [AmountOfPoints.One, AmountOfPoints.Zero],
    slots: expectedSlots,
  });

  testPlayForCommonGame({
    expectedState,
    game,
    indexOfMove: IndexOfTestingMove.NorthOfNorth,
    state,
  });
})();

((): void => {
  const { game } = createCommonGame();
  const moves = game.getMoves();

  let state = game.getInitialState();
  state = game.play(IndexOfTestingMove.NorthwestOfNorthwest, state);
  state = game.play(IndexOfTestingMove.WestOfWest, state);
  state = game.play(IndexOfTestingMove.NorthOfNorthwest, state);
  state = game.play(IndexOfTestingMove.CenterOfWest, state);
  state = game.play(IndexOfTestingMove.NortheastOfNorthwest, state);
  state = game.play(IndexOfTestingMove.EastOfWest, state);
  state = game.play(IndexOfTestingMove.NorthwestOfNorth, state);
  state = game.play(IndexOfTestingMove.WestOfCenter, state);

  const expectedSlots = [...state.getSlots()];
  fillSlots({
    indexesOfSlots: getIndexesOfSlotsFilledByMoves({
      indexesOfTestingMoves: [IndexOfTestingMove.NorthOfNorth],
      moves,
    }),
    indexOfPlayer: IndexOfTestingPlayer.One,
    slots: expectedSlots,
  });
  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.Two,
    score: [AmountOfPoints.One, AmountOfPoints.Zero],
    slots: expectedSlots,
  });

  testPlayForCommonGame({
    expectedState,
    game,
    indexOfMove: IndexOfTestingMove.NorthOfNorth,
    state,
  });
})();

((): void => {
  const { game } = createCommonGame();
  const moves = game.getMoves();

  let state = game.getInitialState();
  state = game.play(IndexOfTestingMove.NorthwestOfNorthwest, state);
  state = game.play(IndexOfTestingMove.WestOfWest, state);
  state = game.play(IndexOfTestingMove.NorthOfNorthwest, state);
  state = game.play(IndexOfTestingMove.CenterOfWest, state);
  state = game.play(IndexOfTestingMove.NortheastOfNorthwest, state);
  state = game.play(IndexOfTestingMove.EastOfWest, state);
  state = game.play(IndexOfTestingMove.NorthwestOfNorth, state);
  state = game.play(IndexOfTestingMove.WestOfCenter, state);
  state = game.play(IndexOfTestingMove.NorthOfNorth, state);
  state = game.play(IndexOfTestingMove.CenterOfCenter, state);

  const expectedSlots = [...state.getSlots()];
  fillSlots({
    indexesOfSlots: getIndexesOfSlotsFilledByMoves({
      indexesOfTestingMoves: [IndexOfTestingMove.NortheastOfNorth],
      moves,
    }),
    indexOfPlayer: IndexOfTestingPlayer.One,
    slots: expectedSlots,
  });
  const expectedState = new TestingState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.Two,
    score: [AmountOfPoints.Two, AmountOfPoints.One],
    slots: expectedSlots,
  });

  testPlayForCommonGame({
    expectedState,
    game,
    indexOfMove: IndexOfTestingMove.NortheastOfNorth,
    state,
  });
})();
