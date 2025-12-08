import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { CommonTreeNode } from "@repo/search/CommonMonteCarloTree/CommonTreeNode.js";
import { validateConstructor } from "@repo/search/MonteCarloTree/TreeNode.test/constructor.test.js";
import { expect, test } from "vitest";

import type { TicTacToeGame } from "../../../game/Game.js";
import type { TicTacToeMove } from "../../../game/Move.js";
import type { TicTacToePlayer } from "../../../game/Player.js";
import type { TicTacToeScore } from "../../../game/Score.js";
import type { TicTacToeSlot } from "../../../game/Slot.js";
import type { TicTacToeState } from "../../../game/State.js";

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
  arrayOfTreeNodesWithData: TicTacToeTreeNodeWithData<
    CommonTreeNode<
      TicTacToeGame,
      TicTacToeMove,
      TicTacToePlayer,
      TicTacToeScore,
      TicTacToeSlot,
      TicTacToeState
    >
  >[];
}) => {
  arrayOfTreeNodesWithData.forEach(({ keyOfTreeNode, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfTreeNode,
      }),

      () => {
        const { informationAboutPlayedMove, state } =
          deriveParamsOfTicTacToeTreeNode(requiredParams);

        const newTreeNode = CommonTreeNode.create({
          informationAboutPlayedMove,
          state,
        }) satisfies TicTacToeTreeNode<
          CommonTreeNode<
            TicTacToeGame,
            TicTacToeMove,
            TicTacToePlayer,
            TicTacToeScore,
            TicTacToeSlot,
            TicTacToeState
          >
        >;

        validateConstructor({
          params: { informationAboutPlayedMove, state },
          treeNode: newTreeNode,
        });

        expect(newTreeNode).toBeInstanceOf(CommonTreeNode);
      },
    );
  });
};

testConstructor({
  arrayOfTreeNodesWithData: Object.values(recordOfTicTacToeTreeNodesWithData),
});
