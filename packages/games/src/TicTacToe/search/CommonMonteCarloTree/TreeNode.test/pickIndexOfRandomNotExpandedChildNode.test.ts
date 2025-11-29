import { SIZE_OF_EMPTY_SET } from "@repo/engine_core/constants.js";
import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfPickIndexOfRandomNotExpandedChildNode,
  validatePickIndexOfRandomNotExpandedChildNode,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/pickIndexOfRandomNotExpandedChildNode.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

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
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData[];
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
            treeNode,
          });
        },
      );
    }
  });
};

testPickIndexOfRandomNotExpandedChild({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
