import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { TreeNode } from "../TreeNode.js";

const validateSelectBestChild = <
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
  expectedBestChild,
  treeNode,
}: {
  expectedBestChild: ReturnType<GenericTreeNode["selectBestChild"]>;
  treeNode: GenericTreeNode;
}) => {
  const bestChild = treeNode.selectBestChild();

  if (bestChild !== null) {
    expect(bestChild).not.toBe(expectedBestChild);
    expect(bestChild).toStrictEqual(expectedBestChild);

    // Ensure that the returned object does not keep reference to the internal property
    const otherBestChild = treeNode.selectBestChild();
    expect(otherBestChild).not.toBe(bestChild);
  }
};

const createDescriptionForTestOfSelectBestChild = <
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
  keyOfExpectedBestChild,
}: {
  keyOfExpectedBestChild: null | string;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `selectBestChild()`,
    returnedValue: keyOfExpectedBestChild,
  });

export { createDescriptionForTestOfSelectBestChild, validateSelectBestChild };
