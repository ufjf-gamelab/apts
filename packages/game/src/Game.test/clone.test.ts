import { expect } from "vitest";

import { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateClone = <
  M extends Move,
  S extends State<M, Sl>,
  Sl extends Slot,
>({
  clonedGame,
  game,
}: {
  clonedGame: unknown;
  game: Game<M, S, Sl>;
}) => {
  expect(clonedGame).toBeInstanceOf(Game);
  expect(clonedGame).not.toBe(game);
  expect(clonedGame).toStrictEqual(game);
};

export { validateClone };
