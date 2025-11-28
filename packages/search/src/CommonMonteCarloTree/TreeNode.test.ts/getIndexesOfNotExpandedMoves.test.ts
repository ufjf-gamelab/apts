import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { assert } from "vitest";

import type { TreeNode } from "../TreeNode.js";

const validateGetIndexesOfNotExpandedMoves = <
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
    GenericState
  >,
>({
  expectedIndexesOfNotExpandedMoves,
  treeNode,
}: {
  expectedIndexesOfNotExpandedMoves: ReturnType<
    GenericTreeNode["getIndexesOfNotExpandedMoves"]
  >;
  treeNode: GenericTreeNode;
}) => {
  const indexesOfNotExpandedMoves = treeNode.getIndexesOfNotExpandedMoves();
  assert.isEmpty(
    indexesOfNotExpandedMoves.difference(expectedIndexesOfNotExpandedMoves),
  );
};

const createDescriptionForTestOfGetIndexesOfNotExpandedMoves = <
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
    GenericState
  >,
>({
  expectedIndexesOfNotExpandedMoves,
}: {
  expectedIndexesOfNotExpandedMoves: ReturnType<
    GenericTreeNode["getIndexesOfNotExpandedMoves"]
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getIndexesOfNotExpandedMoves()`,
    returnedValue: formatArray({
      array: expectedIndexesOfNotExpandedMoves.values().toArray(),
    }),
  });

export {
  createDescriptionForTestOfGetIndexesOfNotExpandedMoves,
  validateGetIndexesOfNotExpandedMoves,
};
