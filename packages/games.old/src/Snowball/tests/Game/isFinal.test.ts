import { expect, test } from "vitest";

import type TestingGame from "../../Game.js";
import type TestingState from "../../State.js";
import { IndexOfTestingMove } from "../Move/setup.js";
import { encodeState } from "../State/encode.js";
import { createInitialState } from "../State/setup.js";
import { playMoves, type TestGameParams } from "./setup.js";

const isFinalShouldReturn = ({
  expectedIsFinal,
  game,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedIsFinal: ReturnType<TestingGame["isFinal"]>;
  state: TestingState;
}): void => {
  test(`${testDescriptor}: game.isFinal({${encodeState({
    state,
  })})} should return {${expectedIsFinal}}`, () => {
    expect(game.isFinal(state)).toBe(expectedIsFinal);
  });
};

const testIsFinal = ({
  expectedIsFinal,
  state,
  testDescriptor,
}: {
  expectedIsFinal: ReturnType<TestingGame["isFinal"]>;
  state: TestingState;
  testDescriptor?: string;
}): void => {
  isFinalShouldReturn({
    expectedIsFinal,
    game: state.getGame(),
    state,
    testDescriptor: testDescriptor ? `: ${testDescriptor}` : "",
  });
};

/* Initial State */

((): void => {
  const { state: initialState } = createInitialState();
  testIsFinal({
    expectedIsFinal: false,
    state: initialState,
  });
})();

/* Row 0 */

((): void => {
  const { state: initialState } = createInitialState();
  const { state } = playMoves({
    game: initialState.getGame(),
    indexesOfMoves: [IndexOfTestingMove.NorthwestOfNorthwest],
    state: initialState,
  });
  testIsFinal({
    expectedIsFinal: false,
    state,
  });
})();

((): void => {
  const { state: initialState } = createInitialState();
  const { state } = playMoves({
    game: initialState.getGame(),
    indexesOfMoves: [
      IndexOfTestingMove.NorthwestOfNorthwest,
      IndexOfTestingMove.NorthOfNorthwest,
    ],
    state: initialState,
  });
  testIsFinal({
    expectedIsFinal: false,
    state,
  });
})();

((): void => {
  const { state: initialState } = createInitialState();
  const { state } = playMoves({
    game: initialState.getGame(),
    indexesOfMoves: [
      IndexOfTestingMove.NorthwestOfNorthwest,
      IndexOfTestingMove.NorthOfNorthwest,
      IndexOfTestingMove.NortheastOfNorthwest,
      IndexOfTestingMove.WestOfNorthwest,
      IndexOfTestingMove.CenterOfNorthwest,
      IndexOfTestingMove.EastOfNorthwest,
      IndexOfTestingMove.SouthwestOfNorthwest,
      IndexOfTestingMove.SouthOfNorthwest,
      IndexOfTestingMove.SoutheastOfNorthwest,
      IndexOfTestingMove.NorthwestOfNorth,
      IndexOfTestingMove.NorthOfNorth,
      IndexOfTestingMove.NortheastOfNorth,
      IndexOfTestingMove.WestOfNorth,
      IndexOfTestingMove.CenterOfNorth,
      IndexOfTestingMove.EastOfNorth,
      IndexOfTestingMove.SouthwestOfNorth,
      IndexOfTestingMove.SouthOfNorth,
      IndexOfTestingMove.SoutheastOfNorth,
      IndexOfTestingMove.NorthwestOfNortheast,
      IndexOfTestingMove.NorthOfNortheast,
      IndexOfTestingMove.NortheastOfNortheast,
      IndexOfTestingMove.WestOfNortheast,
      IndexOfTestingMove.CenterOfNortheast,
      IndexOfTestingMove.EastOfNortheast,
      IndexOfTestingMove.SouthwestOfNortheast,
      IndexOfTestingMove.SouthOfNortheast,
      IndexOfTestingMove.SoutheastOfNortheast,
      IndexOfTestingMove.NorthwestOfWest,
      IndexOfTestingMove.NorthOfWest,
      IndexOfTestingMove.NortheastOfWest,
      IndexOfTestingMove.WestOfWest,
      IndexOfTestingMove.CenterOfWest,
      IndexOfTestingMove.EastOfWest,
      IndexOfTestingMove.SouthwestOfWest,
      IndexOfTestingMove.SouthOfWest,
      IndexOfTestingMove.SoutheastOfWest,
      IndexOfTestingMove.NorthwestOfCenter,
      IndexOfTestingMove.NorthOfCenter,
      IndexOfTestingMove.NortheastOfCenter,
      IndexOfTestingMove.WestOfCenter,
      IndexOfTestingMove.CenterOfCenter,
      IndexOfTestingMove.EastOfCenter,
      IndexOfTestingMove.SouthwestOfCenter,
      IndexOfTestingMove.SouthOfCenter,
      IndexOfTestingMove.SoutheastOfCenter,
      IndexOfTestingMove.NorthwestOfEast,
      IndexOfTestingMove.NorthOfEast,
      IndexOfTestingMove.NortheastOfEast,
      IndexOfTestingMove.WestOfEast,
    ],
    state: initialState,
  });
  testIsFinal({
    expectedIsFinal: true,
    state,
  });
})();
