import { expect } from "vitest";

import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Game, type ParamsOfGame } from "../Game.js";

const validateConstructor = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  game,
  params,
}: {
  game: G;
  params: ParamsOfGame<M, P, Sl>;
}) => {
  expect(game).toBeInstanceOf(Game);
  expect(game.getMoves()).toStrictEqual(params.moves);
  expect(game.getName()).toBe(params.name);
  expect(game.getPlayers()).toStrictEqual(params.players);
  expect(game.getQuantityOfSlots()).toBe(params.slots.length);
};

export { validateConstructor };
