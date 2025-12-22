import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { createDescriptionForTestsOfMethod } from "@repo/core/test.js";
import { expect } from "vitest";

import type { TreeNode } from "../TreeNode.js";

const validateIsFullyExpanded = <
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
  expectedToBeFullyExpanded,
  treeNode,
}: {
  expectedToBeFullyExpanded: ReturnType<GenericTreeNode["isFullyExpanded"]>;
  treeNode: GenericTreeNode;
}) => {
  const isFullyExpanded = treeNode.isFullyExpanded();
  expect(isFullyExpanded).toBe(expectedToBeFullyExpanded);
};

const createDescriptionForTestOfIsFullyExpanded = <
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
  expectedToBeFullyExpanded,
}: {
  expectedToBeFullyExpanded: ReturnType<GenericTreeNode["isFullyExpanded"]>;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `isFullyExpanded()`,
    returnedValue: expectedToBeFullyExpanded,
  });

export { createDescriptionForTestOfIsFullyExpanded, validateIsFullyExpanded };
