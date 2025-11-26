import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateConstructInitialState = <
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
  expectedInitialState,
  game,
}: {
  expectedInitialState: ReturnType<GenericGame["constructInitialState"]>;
  game: GenericGame;
}) => {
  const initialState = game.constructInitialState();
  expect(initialState).not.toBe(expectedInitialState);
  expect(initialState).toStrictEqual(expectedInitialState);

  // Ensure that the returned object does not keep reference to the internal property
  const otherInitialState = game.constructInitialState();
  expect(otherInitialState).not.toBe(initialState);
};

const createDescriptionForTestOfConstructInitialState = <
  GenericGame extends Game<GenericGame, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<GenericGame, M, P, Sc, Sl, St>,
>({
  keyOfExpectedInitialState,
}: {
  keyOfExpectedInitialState: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "constructInitialState()",
    returnedValue: keyOfExpectedInitialState,
  });

export {
  createDescriptionForTestOfConstructInitialState,
  validateConstructInitialState,
};
