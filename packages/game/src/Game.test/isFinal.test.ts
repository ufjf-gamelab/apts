import { createDescriptionForTestsOfGetter } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateIsFinal = <
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
  expectedToBeFinal,
  state,
}: Pick<Parameters<GenericGame["isFinal"]>[0], "state"> & {
  expectedToBeFinal: ReturnType<GenericGame["isFinal"]>;
}) => {
  const game = state.getGame();
  const isFinal = game.isFinal({
    state,
  });
  expect(isFinal).toBe(expectedToBeFinal);
};

const createDescriptionForTestOfIsFinal = <
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
  expectedToBeFinal,
  keyOfState,
}: {
  expectedToBeFinal: ReturnType<GenericGame["isFinal"]>;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfGetter({
    methodDescription: `isFinal({ state: ${keyOfState} })`,
    returnedValue: expectedToBeFinal,
  });

export { createDescriptionForTestOfIsFinal, validateIsFinal };
