import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { State } from "../State.js";

import { Slot } from "../Slot.js";

const validateGetSlots = <
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
  expectedSlots,
  state,
}: {
  expectedSlots: ReturnType<GenericState["getSlots"]>;
  state: GenericState;
}) => {
  const slots = state.getSlots();
  expect(slots).toBeInstanceOf(Array<GenericSlot>);
  expect(slots).not.toBe(expectedSlots);
  expect(slots).toStrictEqual(expectedSlots);

  const [firstSlot] = slots;
  if (typeof firstSlot === "undefined") {
    assert.fail("There should be at least one slot to perform this test.");
  }
  expect(firstSlot).toBeInstanceOf(Slot);

  expect(state.getSlots()).toStrictEqual(expectedSlots);
  expect(state.getSlots()).not.toEqual(slots);
};

const createDescriptionForTestOfGetSlots = <
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
  keysOfExpectedSlots,
}: {
  keysOfExpectedSlots: string[];
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getSlots()",
    returnedValue: formatArray({ array: keysOfExpectedSlots }),
  });

export { createDescriptionForTestOfGetSlots, validateGetSlots };
