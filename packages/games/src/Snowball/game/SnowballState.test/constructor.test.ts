import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/State.test/constructor.test.js";
import { expect, test } from "vitest";

import type { SnowballGame } from "../SnowballGame.js";
import type { SnowballMove } from "../SnowballMove.js";
import type { SnowballPlayer } from "../SnowballPlayer.js";
import type { SnowballScore } from "../SnowballScore.js";
import type { SnowballSlot } from "../SnowballSlot.js";
import type { SnowballStateWithData } from "./setup.js";

import { SnowballState } from "../SnowballState.js";
import { recordOfSnowballStatesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballState",
    }),
  });

const testConstructor = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: SnowballStateWithData[];
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

        const newState = new SnowballState({
          game: gameWithData.game,
          indexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
          score: scoreWithData.score,
          slots,
        });

        validateConstructor<
          SnowballGame,
          SnowballMove,
          SnowballPlayer,
          SnowballScore,
          SnowballSlot,
          SnowballState
        >({
          params: {
            game: gameWithData.game,
            indexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
            score: scoreWithData.score,
            slots,
          },
          state: newState,
        });

        expect(newState).toBeInstanceOf(SnowballState);
      },
    );
  });
};

testConstructor({
  arrayOfStatesWithData: Object.values(recordOfSnowballStatesWithData),
});
