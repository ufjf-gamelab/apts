import { expect } from "vitest";

import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Game, type ParamsOfGame } from "../Game.js";

const validateConstructor = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  game,
  params,
}: {
  game: GenericGame;
  params: ParamsOfGame<GenericMove, GenericPlayer, GenericSlot>;
}) => {
  expect(game).toBeInstanceOf(Game);
  expect(game.getMoves()).toStrictEqual(params.moves);
  expect(game.getName()).toBe(params.name);
  expect(game.getPlayers()).toStrictEqual(params.players);
  expect(game.getQuantityOfSlots()).toBe(params.slots.length);
};

export { validateConstructor };
