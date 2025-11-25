import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Player } from "../Player.js";

const validateGetPlayers = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedPlayers,
  game,
}: {
  expectedPlayers: ReturnType<G["getPlayers"]>;
  game: G;
}) => {
  const players = game.getPlayers();
  expect(players).toBeInstanceOf(Array<P>);
  expect(players).not.toBe(expectedPlayers);
  expect(players).toStrictEqual(expectedPlayers);

  // Ensure that the returned object does not keep reference to the internal property
  const [firstPlayer] = players;
  if (typeof firstPlayer === "undefined") {
    assert.fail("There should be at least one player to perform this test.");
  }
  expect(firstPlayer).toBeInstanceOf(Player);
  players.push(firstPlayer);

  expect(game.getPlayers()).toStrictEqual(expectedPlayers);
  expect(game.getPlayers()).not.toEqual(players);
};

const createDescriptionForTestOfGetPlayers = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  keysOfExpectedPlayers,
}: {
  keysOfExpectedPlayers: string[];
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getPlayers()",
    returnedValue: formatArray({ array: keysOfExpectedPlayers }),
  });

export { createDescriptionForTestOfGetPlayers, validateGetPlayers };
