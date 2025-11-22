import {
  createDescriptionForTest,
  createDescriptionForTestsOfCloneMethod,
} from "@repo/engine_core/test.js";
import { validateClone } from "@repo/game/Player.test/clone.test.js";
import { expect, test } from "vitest";

import type { SnowballPlayerWithData } from "./setup.js";

import { SnowballPlayer } from "../Player.js";
import { indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfCloneMethod({
      className: "SnowballPlayer",
    }),
  });

const testClone = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: SnowballPlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(({ keyOfPlayer, player }) => {
    test(
      createDescription({
        affix: keyOfPlayer,
      }),
      () => {
        const clonedPlayer = player.clone();
        validateClone({ clonedPlayer, player });
        expect(clonedPlayer).toBeInstanceOf(SnowballPlayer);
      },
    );
  });
};

testClone({
  arrayOfPlayersWithData:
    indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
});
