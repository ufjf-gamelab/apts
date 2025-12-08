import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Player.test/getName.test.js";
import { test } from "vitest";

import type { SnowballPlayer } from "../SnowballPlayer.js";
import type { SnowballPlayerWithData } from "./setup.js";

import { indexedSnowballPlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
  expectedName,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedName: ReturnType<SnowballPlayer["getName"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetName({
      expectedName,
    }),
  });

const testGetName = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: SnowballPlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(
    ({ keyOfPlayer, player, requiredParams: { name } }) => {
      test(
        createDescription({
          affix: keyOfPlayer,
          expectedName: name,
        }),

        () => {
          validateGetName({
            expectedName: name,
            player,
          });
        },
      );
    },
  );
};

testGetName({
  arrayOfPlayersWithData: indexedSnowballPlayersWithData,
});
