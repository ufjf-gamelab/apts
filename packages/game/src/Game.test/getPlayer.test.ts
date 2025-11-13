import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Player } from "../Player.js";

const validateGetPlayer = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedPlayer,
  game,
  indexOfPlayer,
}: {
  expectedPlayer: ReturnType<G["getPlayer"]>;
  game: G;
  indexOfPlayer: Parameters<G["getPlayer"]>[0]["indexOfPlayer"];
}) => {
  const player = game.getPlayer({ indexOfPlayer });

  if (player === null) {
    assert.isNull(expectedPlayer);
  } else {
    expect(player).toBeInstanceOf(Player);
    expect(player).not.toBe(expectedPlayer);
    expect(player).toStrictEqual(expectedPlayer);

    // Ensure that the returned object does not keep reference to the internal property
    const otherPlayer = game.getPlayer({ indexOfPlayer });
    expect(otherPlayer).not.toBe(player);
  }
};

const createDescriptionForTestOfGetPlayer = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  indexOfPlayer,
  keyOfPlayer,
}: {
  indexOfPlayer: Parameters<G["getPlayer"]>[0]["indexOfPlayer"];
  keyOfPlayer: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getPlayer({ indexOfPlayer: ${indexOfPlayer} })`,
    returnedValue: keyOfPlayer,
  });

export { createDescriptionForTestOfGetPlayer, validateGetPlayer };
