import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { encodeMoves } from "../Move/encode.js";
import { IndexOfTestingMove } from "../Move/setup.js";
import type TestingState from "../State.js";
import { encodeState } from "../State/encode.js";
import { createInitialState } from "../State/setup.js";
import { playMoves, type TestGameParams } from "./setup.js";

const getValidMovesShouldReturn = ({
  expectedValidMoves,
  game,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedValidMoves: ReturnType<TestingGame["getValidMoves"]>;
  state: TestingState;
}): void => {
  test(`${testDescriptor}: getValidMoves(${encodeState({ state })}) should return {${encodeMoves({ moves: expectedValidMoves })}}`, () => {
    const validMovesFromGame = game.getValidMoves(state);
    expect(validMovesFromGame).not.toBe(expectedValidMoves);
    expect(validMovesFromGame).toStrictEqual(expectedValidMoves);
  });
};

const testGetValidMoves = ({
  expectedValidMoves,
  state,
  testDescriptor,
}: {
  expectedValidMoves: ReturnType<TestingGame["getValidMoves"]>;
  state: TestingState;
  testDescriptor?: string;
}): void => {
  getValidMovesShouldReturn({
    expectedValidMoves,
    game: state.getGame(),
    state,
    testDescriptor: testDescriptor ? `: ${testDescriptor}` : "",
  });
};

/* Initial State */

((): void => {
  const {
    dataRelatedToCreatedState: { game },
    state: initialState,
  } = createInitialState();
  const expectedValidMoves = game.getMoves();

  testGetValidMoves({
    expectedValidMoves,
    state: initialState,
  });
})();

/* Row 0 */

((): void => {
  const {
    dataRelatedToCreatedState: { game },
    state: initialState,
  } = createInitialState();

  const { state, validMoves: expectedValidMoves } = playMoves({
    game,
    indexesOfMoves: [IndexOfTestingMove.NorthwestOfNorthwest],
    state: initialState,
  });

  testGetValidMoves({
    expectedValidMoves,
    state,
  });
})();

((): void => {
  const {
    dataRelatedToCreatedState: { game },
    state: initialState,
  } = createInitialState();

  const { state, validMoves: expectedValidMoves } = playMoves({
    game,
    indexesOfMoves: [
      IndexOfTestingMove.NorthwestOfNorthwest,
      IndexOfTestingMove.NorthOfNorthwest,
    ],
    state: initialState,
  });

  testGetValidMoves({
    expectedValidMoves,
    state,
  });
})();

((): void => {
  const {
    dataRelatedToCreatedState: { game },
    state: initialState,
  } = createInitialState();

  const { state, validMoves: expectedValidMoves } = playMoves({
    game,
    indexesOfMoves: [
      IndexOfTestingMove.NorthwestOfNorthwest,
      IndexOfTestingMove.NorthOfNorthwest,
      IndexOfTestingMove.NortheastOfNorthwest,
      IndexOfTestingMove.NorthwestOfNorth,
      IndexOfTestingMove.NorthOfNorth,
      IndexOfTestingMove.NortheastOfNorth,
      IndexOfTestingMove.NorthwestOfNortheast,
      IndexOfTestingMove.NorthOfNortheast,
      IndexOfTestingMove.NortheastOfNortheast,
    ],
    state: initialState,
  });

  testGetValidMoves({
    expectedValidMoves,
    state,
  });
})();

((): void => {
  const {
    dataRelatedToCreatedState: { game },
    state: initialState,
  } = createInitialState();

  const { state, validMoves: expectedValidMoves } = playMoves({
    game,
    indexesOfMoves: [
      IndexOfTestingMove.NorthwestOfNorthwest,
      IndexOfTestingMove.WestOfNorthwest,
      IndexOfTestingMove.SouthwestOfNorthwest,
      IndexOfTestingMove.NorthwestOfWest,
      IndexOfTestingMove.WestOfWest,
      IndexOfTestingMove.SouthwestOfWest,
      IndexOfTestingMove.NorthwestOfSouthwest,
      IndexOfTestingMove.WestOfSouthwest,
      IndexOfTestingMove.SouthwestOfSouthwest,
    ],
    state: initialState,
  });

  testGetValidMoves({
    expectedValidMoves,
    state,
  });
})();
