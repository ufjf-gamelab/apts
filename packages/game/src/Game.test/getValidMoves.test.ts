import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { type IndexOfMove, Move } from "../Move.js";

const validateGetMoves = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedValidMoves,
  game,
  state,
}: {
  expectedValidMoves: ReturnType<G["getValidMoves"]>;
  game: G;
  state: Parameters<G["getValidMoves"]>[0]["state"];
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const validMoves = game.getValidMoves({ state }) as Map<IndexOfMove, M>;
  expect(validMoves).toBeInstanceOf(Map<IndexOfMove, M>);
  expect(validMoves).not.toBe(expectedValidMoves);
  expect(validMoves).toStrictEqual(expectedValidMoves);

  // Ensure that the returned object does not keep reference to the internal property
  const [firstValidMoveTuple] = validMoves;
  if (typeof firstValidMoveTuple === "undefined") {
    assert.fail("There should be at least one move to perform this test.");
  }
  const [indexOfFirstValidMove, firstValidMove] = firstValidMoveTuple;
  expect(firstValidMove).toBeInstanceOf(Move);
  validMoves.delete(indexOfFirstValidMove);

  expect(game.getValidMoves({ state })).toStrictEqual(expectedValidMoves);
  expect(game.getValidMoves({ state })).not.toEqual(moves);
};

const createDescriptionForTestOfGetMoves = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  keysOfExpectedMoves,
}: {
  keysOfExpectedMoves: string[];
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getValidMoves()",
    returnedValue: formatArray({ array: keysOfExpectedMoves }),
  });

export { createDescriptionForTestOfGetMoves, validateGetMoves };
