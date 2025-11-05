import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Game.test/constructor.test.js";
import { expect, test } from "vitest";

import { SnowballGame } from "../Game.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({ affix }: { affix: string }) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballGame",
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(({ keyOfGame, params }) => {
  test(
    createDescription({
      affix: keyOfGame,
    }),
    () => {
      const { moves, name, players, quantityOfSlots } = params;
      const newGame = new SnowballGame({
        moves,
        name,
        players,
        quantityOfSlots,
      });

      validateConstructor({
        game: newGame,
        params: { moves, name, players, quantityOfSlots },
      });
      expect(newGame).toBeInstanceOf(SnowballGame);
    },
  );
});
