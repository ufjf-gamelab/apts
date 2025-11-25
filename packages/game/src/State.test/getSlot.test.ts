import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { State } from "../State.js";

import { Slot } from "../Slot.js";

const validateGetSlot = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  expectedSlot,
  indexOfSlot,
  state,
}: Pick<Parameters<St["getSlot"]>[0], "indexOfSlot"> & {
  expectedSlot: ReturnType<St["getSlot"]>;
  state: St;
}) => {
  const slot = state.getSlot({ indexOfSlot });
  expect(slot).toBeInstanceOf(Slot);
  expect(slot).not.toBe(expectedSlot);
  expect(slot).toStrictEqual(expectedSlot);

  // Ensure that the returned object does not keep reference to the internal property
  const otherSlot = state.getSlot({
    indexOfSlot,
  });
  expect(otherSlot).not.toBe(slot);
};

const createDescriptionForTestOfGetSlot = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
>({
  indexOfSlot,
  keyOfSlot,
}: Pick<Parameters<typeof validateGetSlot>[0], "indexOfSlot"> & {
  keyOfSlot: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `getSlot({ indexOfSlot: ${indexOfSlot} })`,
    returnedValue: keyOfSlot,
  });

export { createDescriptionForTestOfGetSlot, validateGetSlot };
