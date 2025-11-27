import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetQuantityOfSlots = <
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
  expectedQuantityOfSlots,
  state,
}: {
  expectedQuantityOfSlots: ReturnType<GenericState["getQuantityOfSlots"]>;
  state: GenericState;
}) => {
  const game = state.getQuantityOfSlots();
  expect(game).toBe(expectedQuantityOfSlots);
};

const createDescriptionForTestOfGetQuantityOfSlots = <
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
  expectedQuantityOfSlots,
}: Pick<
  Parameters<typeof validateGetQuantityOfSlots>[0],
  "expectedQuantityOfSlots"
>): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getQuantityOfSlots()`,
    returnedValue: expectedQuantityOfSlots,
  });

export {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
};
