import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { TreeNode } from "@repo/search/CommonMonteCarloTree/TreeNode.js";
import { validateConstructor } from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/constructor.test.js";
import { expect, test } from "vitest";

import { recordOfSnowballTreeNodesWithData } from "./records.js";
import {
  deriveParamsOfSnowballTreeNode,
  type SnowballTreeNode,
  type SnowballTreeNodeWithData,
} from "./setup.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballTreeNode",
    }),
  });

const testConstructor = ({
  arrayOfTreeNodesWithData,
}: {
  arrayOfTreeNodesWithData: SnowballTreeNodeWithData[];
}) => {
  arrayOfTreeNodesWithData.forEach(({ keyOfTreeNode, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfTreeNode,
      }),

      () => {
        const { explorationConstant, indexOfPlayedMove, parent, state } =
          deriveParamsOfSnowballTreeNode(requiredParams);

        const newTreeNode = new TreeNode({
          explorationConstant,
          indexOfPlayedMove,
          parent,
          state,
        }) satisfies SnowballTreeNode;

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
  arrayOfTreeNodesWithData: Object.values(recordOfSnowballTreeNodesWithData),
});
