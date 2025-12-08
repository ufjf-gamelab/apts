import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/State.test/constructor.test.js";
import { expect, test } from "vitest";

import type { ConnectFourGame } from "../ConnectFourGame.js";
import type { ConnectFourMove } from "../ConnectFourMove.js";
import type { ConnectFourPlayer } from "../ConnectFourPlayer.js";
import type { ConnectFourScore } from "../ConnectFourScore.js";
import type { ConnectFourSlot } from "../ConnectFourSlot.js";
import type { ConnectFourStateWithData } from "./setup.js";

import { ConnectFourState } from "../ConnectFourState.js";
import { recordOfConnectFourStatesWithData } from "./records.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "ConnectFourState",
    }),
  });

const testConstructor = ({
  arrayOfStatesWithData,
}: {
  arrayOfStatesWithData: ConnectFourStateWithData[];
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

        const newState = new ConnectFourState({
          game: gameWithData.game,
          indexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
          score: scoreWithData.score,
          slots,
        });

        validateConstructor<
          ConnectFourGame,
          ConnectFourMove,
          ConnectFourPlayer,
          ConnectFourScore,
          ConnectFourSlot,
          ConnectFourState
        >({
          params: {
            game: gameWithData.game,
            indexOfPlayer: playerWithDataAndIndex.indexOfPlayer,
            score: scoreWithData.score,
            slots,
          },
          state: newState,
        });

        expect(newState).toBeInstanceOf(ConnectFourState);
      },
    );
  });
};

testConstructor({
  arrayOfStatesWithData: Object.values(recordOfConnectFourStatesWithData),
});
