import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Move } from "../Move.js";

const validateGetMove = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedMove,
  game,
  indexOfMove,
}: Pick<Parameters<G["getMove"]>[0], "indexOfMove"> & {
  expectedMove: ReturnType<G["getMove"]>;
  game: G;
}) => {
  const move = game.getMove({ indexOfMove });

  if (move === null) {
    assert.isNull(expectedMove);
  } else {
    expect(move).toBeInstanceOf(Move);
    expect(move).not.toBe(expectedMove);
    expect(move).toStrictEqual(expectedMove);

    // Ensure that the returned object does not keep reference to the internal property
    const otherMove = game.getMove({ indexOfMove });
    expect(otherMove).not.toBe(move);
  }
};

const createDescriptionForTestOfGetMove = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  indexOfMove,
  keyOfMove,
}: {
  indexOfMove: Parameters<G["getMove"]>[0]["indexOfMove"];
  keyOfMove: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getMove({ indexOfMove: ${indexOfMove} })`,
    returnedValue: keyOfMove,
  });

export { createDescriptionForTestOfGetMove, validateGetMove };
