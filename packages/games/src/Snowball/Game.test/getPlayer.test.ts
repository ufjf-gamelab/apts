import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPlayer,
  validateGetPlayer,
} from "@repo/game/Game.test/getPlayer.test.js";
import { expect, test } from "vitest";

import { SnowballPlayer } from "../Player.js";
import { getIndexOfPlayer } from "./players.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  indexOfPlayer,
  keyOfPlayer,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetPlayer>[0],
    "indexOfPlayer" | "keyOfPlayer"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetPlayer({
      indexOfPlayer,
      keyOfPlayer,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
    params.players.forEach(({ keyOfPlayer, player }) => {
      const indexOfPlayer = getIndexOfPlayer({ keyOfPlayer });

      test(
        createDescription({
          affix: keyOfGame,
          indexOfPlayer,
          keyOfPlayer,
        }),
        () => {
          validateGetPlayer({
            expectedPlayer: player,
            game,
            indexOfPlayer,
          });
          expect(player).toBeInstanceOf(SnowballPlayer);
        },
      );
    });
  },
);
