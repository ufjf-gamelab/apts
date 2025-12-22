import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { IndexOfPlayer, Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetIndexOfPlayer = <
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
  expectedIndexOfPlayer,
  state,
}: {
  expectedIndexOfPlayer: ReturnType<GenericState["getIndexOfPlayer"]>;
  state: GenericState;
}) => {
  const indexOfPlayer = state.getIndexOfPlayer();
  expect(indexOfPlayer).toBe(expectedIndexOfPlayer);
};

const createDescriptionForTestOfGetIndexOfPlayer = <
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
  indexOfPlayer,
}: {
  indexOfPlayer: IndexOfPlayer;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getIndexOfPlayer()`,
    returnedValue: indexOfPlayer,
  });

export { createDescriptionForTestOfGetIndexOfPlayer, validateGetIndexOfPlayer };
