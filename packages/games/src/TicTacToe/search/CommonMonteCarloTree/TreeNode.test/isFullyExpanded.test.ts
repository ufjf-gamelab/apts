import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfIsFullyExpanded,
  validateIsFullyExpanded,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/isFullyExpanded.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  expectedToBeFullyExpanded,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfIsFullyExpanded>[0],
    "expectedToBeFullyExpanded"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfIsFullyExpanded({
      expectedToBeFullyExpanded,
    }),
  });

const testIsFullyExpanded = ({
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
      const isFullyExpanded =
        stateWithData.requiredParams.validMovesWithData.size ===
        expandedMovesWithData.size;

      test(
        createDescription({
          affix: keyOfTreeNode,
          expectedToBeFullyExpanded: isFullyExpanded,
        }),

        () => {
          validateIsFullyExpanded({
            expectedToBeFullyExpanded: isFullyExpanded,
            treeNode,
          });
        },
      );
    },
  );
};

testIsFullyExpanded({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
