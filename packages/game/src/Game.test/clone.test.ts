import { expect } from "vitest";

import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Game } from "../Game.js";

const validateClone = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  clonedGame,
  game,
}: {
  clonedGame: unknown;
  game: G;
}) => {
  expect(clonedGame).toBeInstanceOf(Game);
  expect(clonedGame).not.toBe(game);
  expect(clonedGame).toStrictEqual(game);
};

export { validateClone };
