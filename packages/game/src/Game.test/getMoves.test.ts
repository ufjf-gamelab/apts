import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetMoves = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedMoves,
  game,
}: {
  expectedMoves: ReturnType<G["getMoves"]>;
  game: G;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const moves = game.getMoves() as M[];
  expect(moves).not.toBe(expectedMoves);
  expect(moves).toStrictEqual(expectedMoves);

  // Ensure that the returned object does not keep reference to the internal property
  const [firstMove] = moves;
  if (typeof firstMove === "undefined") {
    assert.fail("There should be at least one move to perform this test.");
  }
  moves.push(firstMove);

  expect(game.getMoves()).toBe(expectedMoves);
  expect(game.getMoves()).not.toEqual(moves);
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
    methodDescription: "getMoves()",
    returnedValue: `[${keysOfExpectedMoves.join(", ")}]`,
  });

export { createDescriptionForTestOfGetMoves, validateGetMoves };
