import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Game } from "../Game.js";
import type { Move } from "../Move.js";
import type { Player } from "../Player.js";
import type { Score } from "../Score.js";
import type { Slot } from "../Slot.js";
import type { State } from "../State.js";

const validateGetQuantityOfMoves = <
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
  expectedQuantityOfMoves,
  game,
}: {
  expectedQuantityOfMoves: ReturnType<GenericGame["getQuantityOfMoves"]>;
  game: GenericGame;
}) => {
  const quantityOfMoves = game.getQuantityOfMoves();
  expect(quantityOfMoves).toBe(expectedQuantityOfMoves);
};

const createDescriptionForTestOfGetQuantityOfMoves = <
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
  expectedQuantityOfMoves,
}: {
  expectedQuantityOfMoves: ReturnType<GenericGame["getQuantityOfMoves"]>;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: "getQuantityOfMoves()",
    returnedValue: expectedQuantityOfMoves,
  });

export {
  createDescriptionForTestOfGetQuantityOfMoves,
  validateGetQuantityOfMoves,
};
