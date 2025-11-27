import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";
import { validateConstructor } from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/constructor.test.js";
import { expect, test } from "vitest";

import { recordOfTicTacToeTreeNodesWithData } from "./records.js";
import {
  deriveParamsOfTicTacToeTreeNode,
  type TicTacToeTreeNode,
  type TicTacToeTreeNodeWithData,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "TicTacToeTreeNode",
    }),
  });

const testConstructor = ({
  arrayOfTreeNodesWithData,
}: {
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData[];
}) => {
  arrayOfTreeNodesWithData.forEach(({ keyOfTreeNode, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfTreeNode,
      }),

      () => {
        const { explorationConstant, indexOfPlayedMove, parent, state } =
          deriveParamsOfTicTacToeTreeNode(requiredParams);

        const newTreeNode = new TreeNode({
          explorationConstant,
          indexOfPlayedMove,
          parent,
          state,
        }) satisfies TicTacToeTreeNode;

        validateConstructor({
          params: { explorationConstant, indexOfPlayedMove, parent, state },
          treeNode: newTreeNode,
        });

        expect(newTreeNode).toBeInstanceOf(TreeNode);
      },
    );
  });
};

testConstructor({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
