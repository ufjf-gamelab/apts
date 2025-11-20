import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Game } from "../Game.js";

const validateGetGame = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  expectedGame,
  state,
}: {
  expectedGame: ReturnType<S["getGame"]>;
  state: S;
}) => {
  const game = state.getGame();
  expect(game).toBeInstanceOf(Game);
  expect(game).not.toBe(expectedGame);
  expect(game).toStrictEqual(expectedGame);

  // Ensure that the returned object does not keep reference to the internal property
  const otherGame = state.getGame();
  expect(otherGame).not.toBe(game);
};

const createDescriptionForTestOfGetGame = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  keyOfGame,
}: {
  keyOfGame: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getGame()`,
    returnedValue: keyOfGame,
  });

export { createDescriptionForTestOfGetGame, validateGetGame };
