import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { formatArray } from "@repo/core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { assert } from "vitest";

import type { TreeNode } from "../TreeNode.js";

const validateGetIndexesOfNotExpandedChildrenNodes = <
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
  expectedIndexesOfNotExpandedChildrenNodes,
  treeNode,
}: {
  expectedIndexesOfNotExpandedChildrenNodes: ReturnType<
    GenericTreeNode["getIndexesOfNotExpandedChildrenNodes"]
  >;
  treeNode: GenericTreeNode;
}) => {
  const indexesOfNotExpandedChildrenNodes =
    treeNode.getIndexesOfNotExpandedChildrenNodes();
  assert.isEmpty(
    indexesOfNotExpandedChildrenNodes.difference(
      expectedIndexesOfNotExpandedChildrenNodes,
    ),
  );
};

const createDescriptionForTestOfGetIndexesOfNotExpandedChildrenNodes = <
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
  expectedIndexesOfNotExpandedChildrenNodes,
}: {
  expectedIndexesOfNotExpandedChildrenNodes: ReturnType<
    GenericTreeNode["getIndexesOfNotExpandedChildrenNodes"]
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getIndexesOfNotExpandedChildrenNodes()`,
    returnedValue: formatArray({
      array: expectedIndexesOfNotExpandedChildrenNodes.values().toArray(),
    }),
  });

export {
  createDescriptionForTestOfGetIndexesOfNotExpandedChildrenNodes,
  validateGetIndexesOfNotExpandedChildrenNodes,
};
