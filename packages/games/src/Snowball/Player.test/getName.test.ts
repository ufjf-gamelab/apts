import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetName,
  validateGetName,
} from "@repo/game/Player.test/getName.test.js";
import { test } from "vitest";

import type { SnowballPlayer } from "../Player.js";
import type { SnowballPlayerWithData } from "../Player.test/setup.js";

import { indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO } from "./indexedRecords.js";

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
  arrayOfPlayersWithData.forEach(({ keyOfPlayer, params, player }) => {
    test(
      createDescription({
        affix: keyOfPlayer,
        expectedName: params.name,
      }),
      () => {
        validateGetName({
          expectedName: params.name,
          player,
        });
      },
    );
  });
};

testGetName({
  arrayOfPlayersWithData:
    indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
});
