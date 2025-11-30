import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfSelectBestChildNode,
  validateSelectBestChildNode,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test/selectBestChildNode.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const EXPLORATION_COEFFICIENT = 1.4;

const createDescription = ({
  affix,
  keyOfExpectedBestChildNode,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfSelectBestChildNode>[0],
    "keyOfExpectedBestChildNode"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfSelectBestChildNode({
      keyOfExpectedBestChildNode,
    }),
  });

const testSelectBestChildNode = ({
  arrayOfTreeNodesWithData,
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData[];
}) => {
  arrayOfTreeNodesWithData.forEach(
    ({
      keyOfTreeNode,
      requiredParams: { indexAndKeyOfBestChildNode: indexAndKeyOfBestChild },
      treeNode,
    }) => {
      if (indexAndKeyOfBestChild !== null) {
        const bestChildNode = treeNode.getChildNode({
          indexOfChildNode: indexAndKeyOfBestChild.indexOfChildNode,
        });

        test(
          createDescription({
            affix: keyOfTreeNode,
            keyOfExpectedBestChildNode: indexAndKeyOfBestChild.keyOfChildNode,
          }),

          () => {
            validateSelectBestChildNode({
              expectedBestChildNode: bestChildNode,
              explorationCoefficient: EXPLORATION_COEFFICIENT,
              treeNode,
            });
          },
        );
      }
    },
  );
};

testSelectBestChildNode({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
