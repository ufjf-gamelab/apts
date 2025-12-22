import { createDescriptionForTest } from "@repo/core/test.js";
import {
  createDescriptionForTestOfGetPlayer,
  validateGetPlayer,
} from "@repo/game/Game.test/getPlayer.test.js";
import { expect, test } from "vitest";

import type { ConnectFourGameWithData } from "./setup.js";

import { ConnectFourPlayer } from "../ConnectFourPlayer.js";
import { recordOfConnectFourGamesWithData } from "./records.js";

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
  arrayOfGamesWithData: ConnectFourGameWithData[];
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

            expect(player).toBeInstanceOf(ConnectFourPlayer);
          },
        );
      });
    },
  );
};

testGetPlayer({
  arrayOfGamesWithData: Object.values(recordOfConnectFourGamesWithData),
});
