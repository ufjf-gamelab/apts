import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetQuantityOfPlayers = <
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
  expectedQuantityOfPlayers,
  game,
}: {
  expectedQuantityOfPlayers: ReturnType<GenericGame["getQuantityOfPlayers"]>;
  game: GenericGame;
}) => {
  const quantityOfPlayers = game.getQuantityOfPlayers();
  expect(quantityOfPlayers).toBe(expectedQuantityOfPlayers);
};

const createDescriptionForTestOfGetQuantityOfPlayers = <
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
  expectedQuantityOfPlayers,
}: {
  expectedQuantityOfPlayers: ReturnType<GenericGame["getQuantityOfPlayers"]>;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getQuantityOfPlayers()",
    returnedValue: expectedQuantityOfPlayers,
  });

export {
  createDescriptionForTestOfGetQuantityOfPlayers,
  validateGetQuantityOfPlayers,
};
