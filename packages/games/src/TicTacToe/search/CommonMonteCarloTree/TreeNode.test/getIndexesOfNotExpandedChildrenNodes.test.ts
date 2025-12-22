import type { CommonTreeNode } from "@repo/search/CommonMonteCarloTree/CommonTreeNode.js";

import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetIndexesOfNotExpandedChildrenNodes,
  validateGetIndexesOfNotExpandedChildrenNodes,
} from "@repo/search/MonteCarloTree/TreeNode.test/getIndexesOfNotExpandedChildrenNodes.test.js";
import { test } from "vitest";

import type { TicTacToeGame } from "../../../game/TicTacToeGame.js";
import type { TicTacToeMove } from "../../../game/TicTacToeMove.js";
import type { TicTacToePlayer } from "../../../game/TicTacToePlayer.js";
import type { TicTacToeScore } from "../../../game/TicTacToeScore.js";
import type { TicTacToeSlot } from "../../../game/TicTacToeSlot.js";
import type { TicTacToeState } from "../../../game/TicTacToeState.js";
import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedIndexesOfNotExpandedChildrenNodes,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<
      typeof createDescriptionForTestOfGetIndexesOfNotExpandedChildrenNodes
    >[0],
    "expectedIndexesOfNotExpandedChildrenNodes"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexesOfNotExpandedChildrenNodes(
      {
        expectedIndexesOfNotExpandedChildrenNodes,
      },
    ),
  });

const testGetIndexesOfNotExpandedChildrenNodes = ({
  arrayOfTreeNodesWithData,
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
}) => {
  arrayOfTreeNodesWithData.forEach(
    ({
      keyOfTreeNode,
      requiredParams: { expandedMovesWithData, stateWithData },
      treeNode,
    }) => {
      const indexesOfValidMoves = new Set(
        stateWithData.requiredParams.validMovesWithData.keys(),
      );
      const indexesOfExpandedMoves = new Set(expandedMovesWithData.keys());
      const indexesOfNotExpandedChildrenNodes = indexesOfValidMoves.difference(
        indexesOfExpandedMoves,
      );

      test(
        createDescription({
          affix: keyOfTreeNode,
          expectedIndexesOfNotExpandedChildrenNodes:
            indexesOfNotExpandedChildrenNodes,
        }),

        () => {
          validateGetIndexesOfNotExpandedChildrenNodes({
            expectedIndexesOfNotExpandedChildrenNodes:
              indexesOfNotExpandedChildrenNodes,
            treeNode,
          });
        },
      );
    },
  );
};

testGetIndexesOfNotExpandedChildrenNodes({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
