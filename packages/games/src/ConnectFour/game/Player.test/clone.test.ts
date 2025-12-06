import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Player.test/clone.test.js";
import { expect, test } from "vitest";

import type { ConnectFourPlayerWithData } from "./setup.js";

import { ConnectFourPlayer } from "../Player.js";
import { indexedConnectFourPlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "ConnectFourPlayer",
    }),
  });

const testClone = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: ConnectFourPlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(({ keyOfPlayer, player }) => {
    test(
      createDescription({
        affix: keyOfPlayer,
      }),

      () => {
        const clonedPlayer = player.clone();

        validateClone({ clonedPlayer, player });

        expect(clonedPlayer).toBeInstanceOf(ConnectFourPlayer);
      },
    );
  });
};

testClone({
  arrayOfPlayersWithData: indexedConnectFourPlayersWithData,
});
