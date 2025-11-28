import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfSelectBestChild,
  validateSelectBestChild,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/selectBestChild.test.js";
import { test } from "vitest";

import type { TicTacToeTreeNodeWithData } from "./setup.js";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";

const createDescription = ({
  affix,
  keyOfExpectedBestChild,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfSelectBestChild>[0],
    "keyOfExpectedBestChild"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfSelectBestChild({
      keyOfExpectedBestChild,
    }),
  });

const testSelectBestChild = ({
  arrayOfTreeNodesWithData,
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData[];
}) => {
  arrayOfTreeNodesWithData.forEach(
    ({
      keyOfTreeNode,
      requiredParams: { indexAndKeyOfBestChild },
      treeNode,
    }) => {
      if (indexAndKeyOfBestChild !== null) {
        const bestChild = treeNode.getChild({
          indexOfChild: indexAndKeyOfBestChild.indexOfChild,
        });

        test(
          createDescription({
            affix: keyOfTreeNode,
            keyOfExpectedBestChild: indexAndKeyOfBestChild.keyOfChild,
          }),

          () => {
            validateSelectBestChild({
              expectedBestChild: bestChild,
              treeNode,
            });
          },
        );
      }
    },
  );
};

testSelectBestChild({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
