import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetName = <
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
  expectedName,
  game,
}: {
  expectedName: ReturnType<GenericGame["getName"]>;
  game: GenericGame;
}) => {
  let name = game.getName();
  expect(name).toBe(expectedName);

  // Ensure that the returned object does not keep reference to the internal property
  name = `${name} (modified)`;
  expect(game.getName()).toBe(expectedName);
  expect(game.getName()).not.toEqual(name);
};

const createDescriptionForTestOfGetName = <
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
  expectedName,
}: {
  expectedName: ReturnType<GenericGame["getName"]>;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: "getName()",
    returnedValue: `"${expectedName}"`,
  });

export { createDescriptionForTestOfGetName, validateGetName };
