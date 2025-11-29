import { SIZE_OF_EMPTY_SET } from "@repo/engine_core/constants.js";
import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfPickIndexOfRandomNotExpandedChild,
  validatePickIndexOfRandomNotExpandedChild,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/pickIndexOfRandomNotExpandedChild.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  indexesOfRandomNotExpandedChildren,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<
      typeof createDescriptionForTestOfPickIndexOfRandomNotExpandedChild
    >[0],
    "indexesOfRandomNotExpandedChildren"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfPickIndexOfRandomNotExpandedChild({
      indexesOfRandomNotExpandedChildren,
    }),
  });

const testPickIndexOfRandomNotExpandedChild = ({
  arrayOfTreeNodesWithData,
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData[];
}) => {
  arrayOfTreeNodesWithData.forEach(({ keyOfTreeNode, treeNode }) => {
    const indexesOfNotExpandedMoves =
      treeNode.getIndexesOfNotExpandedChildren();

    if (indexesOfNotExpandedMoves.size !== SIZE_OF_EMPTY_SET) {
      test(
        createDescription({
          affix: keyOfTreeNode,
          indexesOfRandomNotExpandedChildren: indexesOfNotExpandedMoves,
        }),

        () => {
          validatePickIndexOfRandomNotExpandedChild({
            indexesOfRandomNotExpandedChildren: indexesOfNotExpandedMoves,
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
