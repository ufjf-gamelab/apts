import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { formatArray } from "@repo/engine_core/format.js";
import { createDescriptionForTestsOfMethod } from "@repo/engine_core/test.js";
import { expect } from "vitest";

import type { Random } from "../Random.js";
import type { TreeNode } from "../TreeNode.js";

const validatePickIndexOfRandomNotExpandedChildNode = <
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
  indexesOfRandomNotExpandedChildrenNodes,
  random,
  treeNode,
}: {
  indexesOfRandomNotExpandedChildrenNodes: Set<
    ReturnType<Random["pickIndexOfRandomNotExpandedChildNode"]>
  >;
  random: Random;
  treeNode: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}) => {
  const indexOfRandomNotExpandedChildNode =
    random.pickIndexOfRandomNotExpandedChildNode({
      treeNode,
    });
  expect(indexesOfRandomNotExpandedChildrenNodes).toContain(
    indexOfRandomNotExpandedChildNode,
  );
};

const createDescriptionForTestOfPickIndexOfRandomNotExpandedChildNode = <
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
  indexesOfRandomNotExpandedChildrenNodes,
}: {
  indexesOfRandomNotExpandedChildrenNodes: Set<
    ReturnType<Random["pickIndexOfRandomNotExpandedChildNode"]>
  >;
}): string =>
  createDescriptionForTestsOfMethod({
    methodDescription: `pickIndexOfRandomNotExpandedChildNode()`,
    returnedValue: `is included in ${formatArray({ array: indexesOfRandomNotExpandedChildrenNodes.values().toArray() })}`,
  });

export {
  createDescriptionForTestOfPickIndexOfRandomNotExpandedChildNode,
  validatePickIndexOfRandomNotExpandedChildNode,
};
