import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { TreeNode } from "../TreeNode.js";

const validatePickIndexOfRandomNotExpandedChild = <
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
  indexesOfRandomNotExpandedChildren,
  treeNode,
}: {
  indexesOfRandomNotExpandedChildren: Set<
    ReturnType<GenericTreeNode["pickIndexOfRandomNotExpandedChild"]>
  >;
  treeNode: GenericTreeNode;
}) => {
  const indexOfRandomNotExpandedChild =
    treeNode.pickIndexOfRandomNotExpandedChild();
  expect(indexesOfRandomNotExpandedChildren).toContain(
    indexOfRandomNotExpandedChild,
  );
};

const createDescriptionForTestOfPickIndexOfRandomNotExpandedChild = <
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
  indexesOfRandomNotExpandedChildren,
}: {
  indexesOfRandomNotExpandedChildren: Set<
    ReturnType<GenericTreeNode["pickIndexOfRandomNotExpandedChild"]>
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `pickIndexOfRandomNotExpandedChild()`,
    returnedValue: `is included in ${formatArray({ array: indexesOfRandomNotExpandedChildren.values().toArray() })}`,
  });

export {
  createDescriptionForTestOfPickIndexOfRandomNotExpandedChild,
  validatePickIndexOfRandomNotExpandedChild,
};
