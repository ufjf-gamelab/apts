import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { assert, expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { State } from "../State.js";

import { Slot } from "../Slot.js";

const validateGetSlots = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedSlots,
  state,
}: {
  expectedSlots: ReturnType<St["getSlots"]>;
  state: St;
}) => {
  const slots = state.getSlots();
  expect(slots).toBeInstanceOf(Array<Sl>);
  expect(slots).not.toBe(expectedSlots);
  expect(slots).toStrictEqual(expectedSlots);

  // Ensure that the returned object does not keep reference to the internal property
  const [firstSlot] = slots;
  if (typeof firstSlot === "undefined") {
    assert.fail("There should be at least one slot to perform this test.");
  }
  expect(firstSlot).toBeInstanceOf(Slot);
  slots.push(firstSlot);

  expect(state.getSlots()).toStrictEqual(expectedSlots);
  expect(state.getSlots()).not.toEqual(slots);
};

const createDescriptionForTestOfGetSlots = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  keysOfExpectedSlots,
}: {
  keysOfExpectedSlots: string[];
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getSlots()",
    returnedValue: formatArray({ array: keysOfExpectedSlots }),
  });

export { createDescriptionForTestOfGetSlots, validateGetSlots };
