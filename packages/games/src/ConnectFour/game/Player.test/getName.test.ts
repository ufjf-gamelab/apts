import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Player.test/getName.test.js";
import { test } from "vitest";

import type { ConnectFourPlayer } from "../Player.js";
import type { ConnectFourPlayerWithData } from "./setup.js";

import { indexedConnectFourPlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
  expectedName,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedName: ReturnType<ConnectFourPlayer["getName"]>;
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
  arrayOfPlayersWithData: ConnectFourPlayerWithData[];
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
  arrayOfPlayersWithData: indexedConnectFourPlayersWithData,
});
