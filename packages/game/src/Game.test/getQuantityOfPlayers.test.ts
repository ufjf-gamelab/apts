import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetQuantityOfPlayers = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedQuantityOfPlayers,
  game,
}: {
  expectedQuantityOfPlayers: ReturnType<G["getQuantityOfPlayers"]>;
  game: G;
}) => {
  let quantityOfPlayers = game.getQuantityOfPlayers();
  expect(quantityOfPlayers).toBe(expectedQuantityOfPlayers);

  // Ensure that the returned object does not keep reference to the internal property
  quantityOfPlayers += INCREMENT_ONE;
  expect(game.getQuantityOfPlayers()).toBe(expectedQuantityOfPlayers);
  expect(game.getQuantityOfPlayers()).not.toEqual(quantityOfPlayers);
};

const createDescriptionForTestOfGetQuantityOfPlayers = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  St extends State<G, M, P, Sc, Sl, St>,
  Sc extends Score<Sc>,
  Sl extends Player<Sl>,
>({
  expectedQuantityOfPlayers,
}: {
  expectedQuantityOfPlayers: ReturnType<G["getQuantityOfPlayers"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getQuantityOfPlayers()",
    returnedValue: expectedQuantityOfPlayers,
  });

export {
  createDescriptionForTestOfGetQuantityOfPlayers,
  validateGetQuantityOfPlayers,
};
