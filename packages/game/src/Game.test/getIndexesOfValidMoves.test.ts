import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { IndexOfMove, Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetIndexesOfValidMoves = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  expectedIndexesOfValidMoves,
  state,
}: {
  expectedIndexesOfValidMoves: ReturnType<
    GenericGame["getIndexesOfValidMoves"]
  >;
  state: Parameters<GenericGame["getIndexesOfValidMoves"]>[0]["state"];
}) => {
  const game = state.getGame();
  const indexesOfValidMoves = game.getIndexesOfValidMoves({ state });

  expect(indexesOfValidMoves).toBeInstanceOf(Set<IndexOfMove>);
  expect(indexesOfValidMoves).not.toBe(expectedIndexesOfValidMoves);
  assert.isEmpty(indexesOfValidMoves.difference(expectedIndexesOfValidMoves));
};

const createDescriptionForTestOfGetIndexesOfValidMoves = ({
  keyOfState,
  keysOfExpectedValidMoves,
}: {
  keyOfState: string;
  keysOfExpectedValidMoves: string[];
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getIndexesOfValidMoves({ state: ${keyOfState} })`,
    returnedValue: formatArray({ array: keysOfExpectedValidMoves }),
  });

export {
  createDescriptionForTestOfGetIndexesOfValidMoves,
  validateGetIndexesOfValidMoves,
};
