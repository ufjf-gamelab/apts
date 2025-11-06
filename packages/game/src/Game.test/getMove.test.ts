import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { createMovesWithData } from "../Move.test/setup.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Move } from "../Move.js";

const validateGetMove = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  createMove,
  expectedMove,
  game,
  indexOfMove,
}: {
  createMove: Parameters<typeof createMovesWithData>[0]["create"];
  expectedMove: ReturnType<G["getMove"]>;
  game: G;
  indexOfMove: Parameters<G["getMove"]>[0]["indexOfMove"];
}) => {
  const move = game.getMove({ indexOfMove });

  if (move === null) {
    assert.isNull(expectedMove);
  } else {
    expect(move).toBeInstanceOf(Move);
    expect(move).not.toBe(expectedMove);
    expect(move).toStrictEqual(expectedMove);

    // Ensure that the returned object does not keep reference to the internal property
    const modifiedMove = createMove({
      description: "modified",
      title: "modified",
    });
    expect(game.getMove({ indexOfMove })).toStrictEqual(expectedMove);
    expect(game.getMove({ indexOfMove })).not.toEqual(modifiedMove);
  }
};

const createDescriptionForTestOfGetMove = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
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
