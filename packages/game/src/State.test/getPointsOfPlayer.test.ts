import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetPointsOfPlayer = <
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
  expectedPointsOfPlayer,
  indexOfPlayer,
  state,
}: Pick<Parameters<GenericState["getPointsOfPlayer"]>[0], "indexOfPlayer"> & {
  expectedPointsOfPlayer: ReturnType<GenericState["getPointsOfPlayer"]>;
  state: GenericState;
}) => {
  let pointsOfPlayer = state.getPointsOfPlayer({ indexOfPlayer });
  expect(pointsOfPlayer).toBe(expectedPointsOfPlayer);

  // Ensure that the returned object does not keep reference to the internal property
  pointsOfPlayer += INCREMENT_ONE;
  expect(state.getPointsOfPlayer({ indexOfPlayer })).toBe(
    expectedPointsOfPlayer,
  );
  expect(state.getPointsOfPlayer({ indexOfPlayer })).not.toEqual(
    pointsOfPlayer,
  );
};

const createDescriptionForTestOfGetPointsOfPlayer = <
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
  expectedPointsOfPlayer,
  keyOfPlayer,
}: Pick<
  Parameters<typeof validateGetPointsOfPlayer>[0],
  "expectedPointsOfPlayer"
> & {
  keyOfPlayer: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getPointsOfPlayer({ indexOfPlayer: ${keyOfPlayer} })`,
    returnedValue: expectedPointsOfPlayer,
  });

export {
  createDescriptionForTestOfGetPointsOfPlayer,
  validateGetPointsOfPlayer,
};
