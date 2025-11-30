import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

import { Game } from "../Game.js";

const validateGetGame = <
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
  expectedGame,
  state,
}: {
  expectedGame: ReturnType<GenericState["getGame"]>;
  state: GenericState;
}) => {
  const game = state.getGame();
  expect(game).toBeInstanceOf(Game);
  expect(game).toStrictEqual(expectedGame);
};

const createDescriptionForTestOfGetGame = <
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
  keyOfGame,
}: {
  keyOfGame: string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getGame()`,
    returnedValue: keyOfGame,
  });

export { createDescriptionForTestOfGetGame, validateGetGame };
