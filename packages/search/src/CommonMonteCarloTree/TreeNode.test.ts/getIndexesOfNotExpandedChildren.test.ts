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

const validateGetIndexesOfNotExpandedChildren = <
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
  expectedIndexesOfNotExpandedChildren,
  treeNode,
}: {
  expectedIndexesOfNotExpandedChildren: ReturnType<
    GenericTreeNode["getIndexesOfNotExpandedChildren"]
  >;
  treeNode: GenericTreeNode;
}) => {
  const indexesOfNotExpandedChildren =
    treeNode.getIndexesOfNotExpandedChildren();
  assert.isEmpty(
    indexesOfNotExpandedChildren.difference(
      expectedIndexesOfNotExpandedChildren,
    ),
  );
};

const createDescriptionForTestOfGetIndexesOfNotExpandedChildren = <
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
  expectedIndexesOfNotExpandedChildren,
}: {
  expectedIndexesOfNotExpandedChildren: ReturnType<
    GenericTreeNode["getIndexesOfNotExpandedChildren"]
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `getIndexesOfNotExpandedChildren()`,
    returnedValue: formatArray({
      array: expectedIndexesOfNotExpandedChildren.values().toArray(),
    }),
  });

export {
  createDescriptionForTestOfGetIndexesOfNotExpandedChildren,
  validateGetIndexesOfNotExpandedChildren,
};
