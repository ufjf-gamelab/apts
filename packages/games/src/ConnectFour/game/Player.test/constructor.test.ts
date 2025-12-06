import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Player.test/constructor.test.js";
import { expect, test } from "vitest";

import type { ConnectFourPlayerWithData } from "./setup.js";

import { ConnectFourPlayer } from "../Player.js";
import { indexedConnectFourPlayersWithData } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "ConnectFourPlayer",
    }),
  });

const testConstructor = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: ConnectFourPlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(({ keyOfPlayer, requiredParams }) => {
    test(
      createDescription({
        affix: keyOfPlayer,
      }),

      () => {
        const { name, symbol } = requiredParams;

        const newPlayer = new ConnectFourPlayer({
          name,
          symbol,
        });

        validateConstructor({ params: { name, symbol }, player: newPlayer });

        expect(newPlayer).toBeInstanceOf(ConnectFourPlayer);
      },
    );
  });
};

testConstructor({
  arrayOfPlayersWithData: indexedConnectFourPlayersWithData,
});
