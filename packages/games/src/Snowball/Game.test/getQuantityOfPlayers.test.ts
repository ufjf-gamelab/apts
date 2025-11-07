import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetQuantityOfPlayers,
  validateGetQuantityOfPlayers,
} from "@repo/game/Game.test/getQuantityOfPlayers.test.js";
import { test } from "vitest";

import type { SnowballGame } from "../Game.js";

import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  expectedQuantityOfPlayers,
}: {
  affix: string;
  expectedQuantityOfPlayers: ReturnType<SnowballGame["getQuantityOfPlayers"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetQuantityOfPlayers({
      expectedQuantityOfPlayers,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    const quantityOfPlayers = Object.values(params.players).length;
    test(
      createDescription({
        affix: keyOfGame,
        expectedQuantityOfPlayers: quantityOfPlayers,
      }),
      () => {
        validateGetQuantityOfPlayers({
          expectedQuantityOfPlayers: quantityOfPlayers,
          game,
        });
      },
    );
  },
);
