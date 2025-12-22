import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetIndexOfNextPlayer = <
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
  expectedIndexOfNextPlayer,
  state,
}: Pick<Parameters<GenericGame["getIndexOfNextPlayer"]>[0], "state"> & {
  expectedIndexOfNextPlayer: ReturnType<GenericGame["getIndexOfNextPlayer"]>;
}) => {
  const game = state.getGame();
  const indexOfNextPlayer = game.getIndexOfNextPlayer({ state });
  expect(indexOfNextPlayer).toBe(expectedIndexOfNextPlayer);
};

const createDescriptionForTestOfGetIndexOfNextPlayer = <
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
  expectedIndexOfNextPlayer,
  keyOfState,
}: {
  expectedIndexOfNextPlayer: ReturnType<GenericGame["getIndexOfNextPlayer"]>;
  keyOfState: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getIndexOfNextPlayer({ state: ${keyOfState} })`,
    returnedValue: expectedIndexOfNextPlayer,
  });

export {
  createDescriptionForTestOfGetIndexOfNextPlayer,
  validateGetIndexOfNextPlayer,
};
