import { expect } from "vitest";

import { Game, type GameParams } from "../Game.js";
import type { Move } from "../Move.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateConstructor = <
  M extends Move,
  S extends State<M, Sl>,
  Sl extends Slot,
>({
  game,
  params,
}: {
  game: Game<M, S, Sl>;
  params: GameParams<M>;
}) => {
  expect(game).toBeInstanceOf(Game);
  expect(game.getMoves()).toStrictEqual(params.moves);
  expect(game.getName()).toBe(params.name);
  expect(game.getPlayers()).toStrictEqual(params.players);
  expect(game.getQuantityOfSlots()).toBe(params.quantityOfSlots);
};

export { validateConstructor };
