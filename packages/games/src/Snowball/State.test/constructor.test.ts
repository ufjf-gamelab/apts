import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/State.test/constructor.test.js";
import { expect, test } from "vitest";

import type { SnowballGame } from "../Game.js";
import type { SnowballMove } from "../Move.js";
import type { SnowballPlayer } from "../Player.js";
import type { SnowballScore } from "../Score.js";
import type { SnowballSlot } from "../Slot.js";

import { SnowballState } from "../State.js";
import { statesWithDataForUnitTest } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballState",
    }),
  });

Object.values(statesWithDataForUnitTest).forEach(({ keyOfState, params }) => {
  test(
    createDescription({
      affix: keyOfState,
    }),
    () => {
      const { game, player, score, slots } = params;
      const extractedSlots = slots.map((slot) => slot.slot);

      const newState = new SnowballState({
        game: game.game,
        indexOfPlayer: player.indexOfPlayer,
        score: score.score,
        slots: extractedSlots,
      });

      validateConstructor<
        SnowballGame,
        SnowballMove,
        SnowballPlayer,
        SnowballState,
        SnowballScore,
        SnowballSlot
      >({
        params: {
          game: game.game,
          indexOfPlayer: player.indexOfPlayer,
          score: score.score,
          slots: extractedSlots,
        },
        state: newState,
      });
      expect(newState).toBeInstanceOf(SnowballState);
    },
  );
});
