import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfExpandedMoves,
  validateGetQuantityOfExpandedMoves,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/getQuantityOfExpandedMoves.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedQuantityOfExpandedMoves,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetQuantityOfExpandedMoves>[0],
    "expectedQuantityOfExpandedMoves"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfExpandedMoves({
      expectedQuantityOfExpandedMoves,
    }),
  });

const testGetQuantityOfExpandedMoves = ({
  arrayOfTreeNodesWithData,
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData[];
}) => {
  arrayOfTreeNodesWithData.forEach(
    ({
      keyOfTreeNode,
      requiredParams: { expandedMovesWithData },
      treeNode,
    }) => {
      const quantityOfExpandedMoves = expandedMovesWithData.size;

      test(
        createDescription({
          affix: keyOfTreeNode,
          expectedQuantityOfExpandedMoves: quantityOfExpandedMoves,
        }),

        () => {
          validateGetQuantityOfExpandedMoves({
            expectedQuantityOfExpandedMoves: quantityOfExpandedMoves,
            treeNode,
          });
        },
      );
    },
  );
};

testGetQuantityOfExpandedMoves({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
