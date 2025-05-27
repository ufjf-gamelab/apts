import { expect, test } from "vitest";

import type TestingGame from "../Game.js";
import { type default as TestingMove } from "../Move.js";
import { getMoveAsString, getMovesAsString } from "../Move/asString.js";
import { IndexOfTestingMove } from "../Move/setup.js";
import { getSlotsAsString } from "../Slot/asString.js";
import type TestingState from "../State.js";
import { createInitialState } from "../State/setup.js";
import { type TestGameParams } from "./setup.js";

const playMoves = ({
  game,
  indexesOfMoves,
  state,
}: {
  game: TestingGame;
  indexesOfMoves: readonly IndexOfTestingMove[];
  state: TestingState;
}): { state: TestingState; validMoves: TestingMove[] } => {
  let currentState = state;
  const playedMoves: IndexOfTestingMove[] = [];

  for (const indexOfMove of indexesOfMoves) {
    currentState = game.play(indexOfMove, currentState);
    playedMoves.push(indexOfMove);

    if (game.isFinal(currentState)) {
      const move = game.getMove(indexOfMove);

      if (move === null) {
        throw new Error(
          `Move on index ${indexOfMove} is null, but match is finished`,
        );
      }

      throw new Error(
        `Match finished after playing move {${getMoveAsString(move)}}. Cannot play more moves.`,
      );
    }
  }

  const indexesOfAllMoves = game
    .getMoves()
    .map((_, index) => index as IndexOfTestingMove);

  const indexesOfNotPlayedMoves = indexesOfAllMoves.filter(
    index => !playedMoves.includes(index),
  );

  const validMoves = indexesOfNotPlayedMoves.reduce<TestingMove[]>(
    (moves, index) => {
      const move = game.getMove(index);
      if (move !== null) {
        moves.push(move);
      }
      return moves;
    },
    [],
  );

  return { state: currentState, validMoves };
};

const getValidMovesShouldReturn = ({
  expectedValidMoves,
  game,
  state,
  testDescriptor,
}: TestGameParams & {
  expectedValidMoves: ReturnType<TestingGame["getValidMoves"]>;
  state: TestingState;
}): void => {
  test(`${testDescriptor}: getValidMoves({{indexOfPlayer: ${state.getIndexOfPlayer()}; score: [${state.getScore().toString()}]; slots: [${getSlotsAsString(state.getSlots())}]}}}) should return {[${getMovesAsString(expectedValidMoves)}]}`, () => {
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
    testDescriptor: `common${testDescriptor ? `: ${testDescriptor}` : ""}`,
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
