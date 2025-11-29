import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexesOfNotExpandedChildren,
  validateGetIndexesOfNotExpandedChildren,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/getIndexesOfNotExpandedChildren.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedIndexesOfNotExpandedChildren,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<
      typeof createDescriptionForTestOfGetIndexesOfNotExpandedChildren
    >[0],
    "expectedIndexesOfNotExpandedChildren"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexesOfNotExpandedChildren({
      expectedIndexesOfNotExpandedChildren,
    }),
  });

const testGetIndexesOfNotExpandedChildren = ({
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
      const indexesOfNotExpandedChildren = indexesOfValidMoves.difference(
        indexesOfExpandedMoves,
      );

      test(
        createDescription({
          affix: keyOfTreeNode,
          expectedIndexesOfNotExpandedChildren: indexesOfNotExpandedChildren,
        }),

        () => {
          validateGetIndexesOfNotExpandedChildren({
            expectedIndexesOfNotExpandedChildren: indexesOfNotExpandedChildren,
            treeNode,
          });
        },
      );
    },
  );
};

testGetIndexesOfNotExpandedChildren({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
