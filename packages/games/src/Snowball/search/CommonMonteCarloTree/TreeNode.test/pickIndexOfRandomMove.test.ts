import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfPickIndexOfRandomMove,
  validatePickIndexOfRandomMove,
} from "@repo/search/CommonMonteCarloTree/TreeNode.test.ts/pickIndexOfRandomMove.test.js";
import { test } from "vitest";

import type { SnowballTreeNodeWithData } from "./setup.js";

import { recordOfSnowballTreeNodesWithData } from "./records.js";

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
  arrayOfTreeNodesWithData: SnowballTreeNodeWithData[];
}) => {
  arrayOfTreeNodesWithData.forEach(
    ({ keyOfTreeNode, requiredParams: { stateWithData }, treeNode }) => {
      const indexesOfValidMoves =
        stateWithData.requiredParams.validMovesWithData.keys().toArray();

      test(
        createDescription({
          affix: keyOfTreeNode,
          indexesOfValidRandomMoves: indexesOfValidMoves,
        }),

        () => {
          validatePickIndexOfRandomMove({
            indexesOfValidRandomMoves: indexesOfValidMoves,
            treeNode,
          });
        },
      );
    },
  );
};

testPickIndexOfRandomMove({
  arrayOfTreeNodesWithData: Object.values(recordOfSnowballTreeNodesWithData),
});
