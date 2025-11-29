import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexesOfNotExpandedChildrenNodes,
  validateGetIndexesOfNotExpandedChildrenNodes,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/getIndexesOfNotExpandedChildrenNodes.test.js";
import { test } from "vitest";

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
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData[];
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
