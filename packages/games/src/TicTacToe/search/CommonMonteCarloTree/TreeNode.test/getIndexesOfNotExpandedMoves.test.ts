import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetIndexesOfNotExpandedMoves,
  validateGetIndexesOfNotExpandedMoves,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/getIndexesOfNotExpandedMoves.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedIndexesOfNotExpandedMoves,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<
      typeof createDescriptionForTestOfGetIndexesOfNotExpandedMoves
    >[0],
    "expectedIndexesOfNotExpandedMoves"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetIndexesOfNotExpandedMoves({
      expectedIndexesOfNotExpandedMoves,
    }),
  });

const testGetIndexesOfNotExpandedMoves = ({
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
      const indexesOfNotExpandedMoves = indexesOfValidMoves.difference(
        indexesOfExpandedMoves,
      );

      test(
        createDescription({
          affix: keyOfTreeNode,
          expectedIndexesOfNotExpandedMoves: indexesOfNotExpandedMoves,
        }),

        () => {
          validateGetIndexesOfNotExpandedMoves({
            expectedIndexesOfNotExpandedMoves: indexesOfNotExpandedMoves,
            treeNode,
          });
        },
      );
    },
  );
};

testGetIndexesOfNotExpandedMoves({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
