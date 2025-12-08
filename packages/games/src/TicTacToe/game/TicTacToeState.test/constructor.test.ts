import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/State.test/constructor.test.js";
import { expect, test } from "vitest";

import type { TicTacToeGame } from "../TicTacToeGame.js";
import type { TicTacToeMove } from "../TicTacToeMove.js";
import type { TicTacToePlayer } from "../TicTacToePlayer.js";
import type { TicTacToeScore } from "../TicTacToeScore.js";
import type { TicTacToeSlot } from "../TicTacToeSlot.js";
import type { TicTacToeStateWithData } from "./setup.js";

import { TicTacToeState } from "../TicTacToeState.js";
import { recordOfTicTacToeStatesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "TicTacToeState",
    }),
  });

const testConstructor = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: TicTacToeStateWithData[];
}) => {
  arrayOfStatesWithData.forEach(({ keyOfState, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfState,
      }),

      () => {
        const {
          gameWithData,
          playerWithDataAndIndex,
          scoreWithData,
          slotsWithData,
        } = requiredParams;
        const slots = slotsWithData.map((slot) => slot.slot);

        const newState = new TicTacToeState({
          game: gameWithData.game,
          indexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
          score: scoreWithData.score,
          slots,
        });

        validateConstructor<
          TicTacToeGame,
          TicTacToeMove,
          TicTacToePlayer,
          TicTacToeScore,
          TicTacToeSlot,
          TicTacToeState
        >({
          params: {
            game: gameWithData.game,
            indexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
            score: scoreWithData.score,
            slots,
          },
          state: newState,
        });

        expect(newState).toBeInstanceOf(TicTacToeState);
      },
    );
  });
};

testConstructor({
  arrayOfStatesWithData: Object.values(recordOfTicTacToeStatesWithData),
});
