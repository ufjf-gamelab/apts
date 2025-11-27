import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
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
  game,
}: {
  expectedQuantityOfSlots: ReturnType<GenericGame["getQuantityOfSlots"]>;
  game: GenericGame;
}) => {
  let quantityOfSlots = game.getQuantityOfSlots();
  expect(quantityOfSlots).toBe(expectedQuantityOfSlots);

  // Ensure that the returned object does not keep reference to the internal property
  quantityOfSlots += INCREMENT_ONE;
  expect(game.getQuantityOfSlots()).toBe(expectedQuantityOfSlots);
  expect(game.getQuantityOfSlots()).not.toEqual(quantityOfSlots);
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
}: {
  expectedQuantityOfSlots: ReturnType<GenericGame["getQuantityOfSlots"]>;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getQuantityOfSlots()",
    returnedValue: expectedQuantityOfSlots,
  });

export {
  createDescriptionForTestOfGetQuantityOfSlots,
  validateGetQuantityOfSlots,
};
