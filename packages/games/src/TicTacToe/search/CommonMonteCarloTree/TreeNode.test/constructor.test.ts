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
        const { indexOfPlayedMove, state } =
          deriveParamsOfTicTacToeTreeNode(requiredParams);

        const newTreeNode = TreeNode.create({
          indexOfPlayedMove,
          state,
        }) satisfies TicTacToeTreeNode;

        validateConstructor({
          params: { indexOfPlayedMove, state },
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
