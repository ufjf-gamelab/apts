import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPlayer,
  validateGetPlayer,
} from "@repo/game/Game.test/getPlayer.test.js";
import { expect, test } from "vitest";

import type { SnowballGameWithData } from "./setup.js";

import { SnowballPlayer } from "../Player.js";
import { gamesWithData } from "./records.js";

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

const testGetPlayer = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: SnowballGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { playersWithData } }) => {
      playersWithData.forEach(({ keyOfPlayer, player }, indexOfPlayer) => {
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
};

testGetPlayer({
  arrayOfGamesWithData: Object.values(gamesWithData),
});
