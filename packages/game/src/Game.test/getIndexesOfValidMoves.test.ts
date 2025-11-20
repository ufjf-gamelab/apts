import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { IndexOfMove, Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetIndexesOfValidMoves = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedIndexesOfValidMoves,
  game,
  state,
}: {
  expectedIndexesOfValidMoves: ReturnType<G["getIndexesOfValidMoves"]>;
  game: G;
  state: Parameters<G["getIndexesOfValidMoves"]>[0]["state"];
}) => {
  const indexesOfValidMoves = game.getIndexesOfValidMoves({ state });
  expect(indexesOfValidMoves).toBeInstanceOf(Set<IndexOfMove>);
  expect(indexesOfValidMoves).not.toBe(expectedIndexesOfValidMoves);
  expect(indexesOfValidMoves).toStrictEqual(expectedIndexesOfValidMoves);
};

const createDescriptionForTestOfGetIndexesOfValidMoves = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
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
