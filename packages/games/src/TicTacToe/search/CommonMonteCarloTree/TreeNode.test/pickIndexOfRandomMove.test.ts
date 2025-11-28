import { SIZE_OF_EMPTY_SET } from "@repo/engine_core/constants.js";
import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfPickIndexOfRandomMove,
  validatePickIndexOfRandomMove,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/pickIndexOfRandomMove.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  indexesOfValidRandomMoves,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfPickIndexOfRandomMove>[0],
    "indexesOfValidRandomMoves"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfPickIndexOfRandomMove({
      indexesOfValidRandomMoves,
    }),
  });

const testPickIndexOfRandomMove = ({
  arrayOfTreeNodesWithData,
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData[];
}) => {
  arrayOfTreeNodesWithData.forEach(({ keyOfTreeNode, treeNode }) => {
    const indexesOfNotExpandedMoves = treeNode.getIndexesOfNotExpandedMoves();

    if (indexesOfNotExpandedMoves.size !== SIZE_OF_EMPTY_SET) {
      test(
        createDescription({
          affix: keyOfTreeNode,
          indexesOfValidRandomMoves: indexesOfNotExpandedMoves,
        }),

        () => {
          validatePickIndexOfRandomMove({
            indexesOfValidRandomMoves: indexesOfNotExpandedMoves,
            treeNode,
          });
        },
      );
    }
  });
};

testPickIndexOfRandomMove({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
