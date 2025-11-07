import { expect } from "vitest";

import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Game, type GameParams } from "../Game.js";

const validateConstructor = <
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
>({
  game,
  params,
}: {
  game: G;
  params: GameParams<M, P, Sl>;
}) => {
  expect(game).toBeInstanceOf(Game);
  expect(game.getMoves()).toStrictEqual(params.moves);
  expect(game.getName()).toBe(params.name);
  expect(game.getPlayers()).toStrictEqual(params.players);
  expect(game.getQuantityOfSlots()).toBe(params.slots.length);
};

export { validateConstructor };
