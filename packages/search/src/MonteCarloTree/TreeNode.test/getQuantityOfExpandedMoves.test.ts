import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { TreeNode } from "../TreeNode.js";

const validateGetQuantityOfExpandedMoves = <
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  expectedQuantityOfExpandedMoves,
  treeNode,
}: {
  expectedQuantityOfExpandedMoves: ReturnType<
    GenericTreeNode["getQuantityOfExpandedMoves"]
  >;
  treeNode: GenericTreeNode;
}) => {
  const quantityOfExpandedMoves = treeNode.getQuantityOfExpandedMoves();
  expect(quantityOfExpandedMoves).toBe(expectedQuantityOfExpandedMoves);
};

const createDescriptionForTestOfGetQuantityOfExpandedMoves = <
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
  GenericTreeNode extends TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState,
    GenericTreeNode
  >,
>({
  expectedQuantityOfExpandedMoves,
}: {
  expectedQuantityOfExpandedMoves: ReturnType<
    GenericTreeNode["getQuantityOfExpandedMoves"]
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getQuantityOfExpandedMoves()`,
    returnedValue: expectedQuantityOfExpandedMoves,
  });

export {
  createDescriptionForTestOfGetQuantityOfExpandedMoves,
  validateGetQuantityOfExpandedMoves,
};
