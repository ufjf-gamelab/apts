import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetSymbol,
  validateGetSymbol,
} from "@repo/game/Player.test/getSymbol.test.js";
import { test } from "vitest";

import type { SnowballPlayer } from "../Player.js";
import type { SnowballPlayerWithData } from "../Player.test/setup.js";

import { indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO } from "./indexedRecords.js";

const createDescription = ({
  affix,
  expectedSymbol,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> & {
  expectedSymbol: ReturnType<SnowballPlayer["getSymbol"]>;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetSymbol({
      expectedSymbol,
    }),
  });

const testGetSymbol = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: SnowballPlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(({ keyOfPlayer, params, player }) => {
    test(
      createDescription({
        affix: keyOfPlayer,
        expectedSymbol: params.symbol,
      }),

      () => {
        validateGetSymbol({
          expectedSymbol: params.symbol,
          player,
        });
      },
    );
  });
};

testGetSymbol({
  arrayOfPlayersWithData:
    indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
});
