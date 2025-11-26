import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";

import { type ParamsOfState, State } from "../State.js";

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
  params,
  state,
}: {
  params: ParamsOfState<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
  state: GenericState;
}) => {
  expect(state).toBeInstanceOf(State);
  expect(state.getGame()).toStrictEqual(params.game);
  expect(state.getIndexOfPlayer()).toBe(params.indexOfPlayer);
  expect(state.getScore()).toStrictEqual(params.score);
  expect(state.getSlots()).toStrictEqual(params.slots);
};

export { validateConstructor };
