import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { TreeNode } from "../TreeNode.js";

const validateSelectBestChildNode = <
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
  expectedBestChildNode,
  explorationCoefficient,
  treeNode,
}: Pick<
  Parameters<GenericTreeNode["selectBestChildNode"]>[0],
  "explorationCoefficient"
> & {
  expectedBestChildNode: ReturnType<GenericTreeNode["selectBestChildNode"]>;
  treeNode: GenericTreeNode;
}) => {
  const bestChildNode = treeNode.selectBestChildNode({
    explorationCoefficient,
  });

  if (bestChildNode !== null) {
    expect(bestChildNode).toStrictEqual(expectedBestChildNode);
  }
};

const createDescriptionForTestOfSelectBestChildNode = <
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
  keyOfExpectedBestChildNode,
}: {
  keyOfExpectedBestChildNode: null | string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `selectBestChildNode()`,
    returnedValue: keyOfExpectedBestChildNode,
  });

export {
  createDescriptionForTestOfSelectBestChildNode,
  validateSelectBestChildNode,
};
