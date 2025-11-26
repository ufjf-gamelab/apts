import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { State } from "../State.js";

import { Slot } from "../Slot.js";

const validateGetSlot = <
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
  expectedSlot,
  indexOfSlot,
  state,
}: Pick<Parameters<GenericState["getSlot"]>[0], "indexOfSlot"> & {
  expectedSlot: ReturnType<GenericState["getSlot"]>;
  state: GenericState;
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
