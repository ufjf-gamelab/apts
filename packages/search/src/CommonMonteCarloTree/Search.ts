import type { Integer } from "@repo/engine_core/types.js";
import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { Player } from "@repo/game/Player.js";
import type { Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";

import type { TreeNode } from "./TreeNode.js";

const MINIMUM_QUALITY_OF_MOVE = 0;

type QualityOfMove = number;

const expandTree = <
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
  explorationConstant,
  quantityOfExpansions,
  rootNodeOfTree,
}: {
  explorationConstant: number;
  quantityOfExpansions: Integer;
  rootNodeOfTree: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}): void => {
  const game = rootNodeOfTree.getState().getGame();

  for (
    let currentSearchIndex = 0;
    currentSearchIndex < quantityOfExpansions;
    currentSearchIndex += INCREMENT_ONE
  ) {
    let currentNode = rootNodeOfTree;

    // Goes all the way down to a node that is not fully expanded at the bottom of the tree.
    while (currentNode.isFullyExpanded()) {
      const bestChild = currentNode.selectBestChild({
        explorationConstant,
      });
      if (bestChild === null) {
        break;
      }

      currentNode = bestChild;
    }

    const state = currentNode.getState();
    let score = state.getScore();
    const isFinal = game.isFinal({ state });

    if (!isFinal) {
      const indexOfChild = currentNode.pickIndexOfRandomNotExpandedChild();
      currentNode = currentNode.expand({ indexOfMove: indexOfChild });
      score = currentNode.simulateMatch();
    }

    currentNode.updateQualityOfMatchAndQuantityOfVisitsOnBranch({ score });
  }
};

const getQualityOfMoves = <
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
  rootNodeOfTree,
}: {
  rootNodeOfTree: TreeNode<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >;
}): QualityOfMove[] => {
  const game = rootNodeOfTree.getState().getGame();
  let qualityOfMoves = new Array<QualityOfMove>(game.getQuantityOfMoves()).fill(
    MINIMUM_QUALITY_OF_MOVE,
  );

  rootNodeOfTree
    .getChildren()
    .entries()
    .forEach(([indexOfMove, child]) => {
      if (child !== null) {
        qualityOfMoves[indexOfMove] = child.getQuantityOfVisits();
      }
    });

  const sumOfQualityOfMoves = qualityOfMoves.reduce<QualityOfMove>(
    (accumulator, qualityOfMove) => qualityOfMove + accumulator,
    MINIMUM_QUALITY_OF_MOVE,
  );

  qualityOfMoves = qualityOfMoves.map((value) => value / sumOfQualityOfMoves);

  return qualityOfMoves;
};

export { expandTree, getQualityOfMoves };
