import type { CommonTreeNode } from "@repo/search/CommonMonteCarloTree/CommonTreeNode.js";

import { SIZE_OF_EMPTY_SET } from "@repo/engine_core/constants.js";
import { createDescriptionForTest } from "@repo/engine_core/test.js";
import { Random } from "@repo/search/Random/Random.js";
import {
  createDescriptionForTestOfPickIndexOfRandomNotExpandedChildNode,
  validatePickIndexOfRandomNotExpandedChildNode,
} from "@repo/search/Random/Random.test/pickIndexOfRandomNotExpandedChildNode.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../../../game/TicTacToeGame.js";
import type { TicTacToeMove } from "../../../game/TicTacToeMove.js";
import type { TicTacToePlayer } from "../../../game/TicTacToePlayer.js";
import type { TicTacToeScore } from "../../../game/TicTacToeScore.js";
import type { TicTacToeSlot } from "../../../game/TicTacToeSlot.js";
import type { TicTacToeState } from "../../../game/TicTacToeState.js";
import type { TicTacToeTreeNodeWithData } from "../TreeNode.test/setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "../TreeNode.test/records.js";

const createDescription = ({
  affix,
  indexesOfRandomNotExpandedChildrenNodes,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<
      typeof createDescriptionForTestOfPickIndexOfRandomNotExpandedChildNode
    >[0],
    "indexesOfRandomNotExpandedChildrenNodes"
  >) =>
  createDescriptionForTest({
    affix,
    description:
      createDescriptionForTestOfPickIndexOfRandomNotExpandedChildNode({
        indexesOfRandomNotExpandedChildrenNodes,
      }),
  });

const testPickIndexOfRandomNotExpandedChild = ({
  arrayOfTreeNodesWithData,
  random,
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData<
    CommonTreeNode<
      TicTacToeGame,
      TicTacToeMove,
      TicTacToePlayer,
      TicTacToeScore,
      TicTacToeSlot,
      TicTacToeState
    >
  >[];
  random: Random;
}) => {
  arrayOfTreeNodesWithData.forEach(({ keyOfTreeNode, treeNode }) => {
    const indexesOfNotExpandedMoves =
      treeNode.getIndexesOfNotExpandedChildrenNodes();

    if (indexesOfNotExpandedMoves.size !== SIZE_OF_EMPTY_SET) {
      test(
        createDescription({
          affix: keyOfTreeNode,
          indexesOfRandomNotExpandedChildrenNodes: indexesOfNotExpandedMoves,
        }),

        () => {
          validatePickIndexOfRandomNotExpandedChildNode({
            indexesOfRandomNotExpandedChildrenNodes: indexesOfNotExpandedMoves,
            random,
            treeNode,
          });
        },
      );
    }
  });
};

const DEFAULT_SEED = "1";

testPickIndexOfRandomNotExpandedChild({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
  random: new Random({ seed: DEFAULT_SEED }),
});
