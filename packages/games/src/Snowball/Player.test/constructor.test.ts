import {
  createDescriptionForTest,
  createDescriptionForTestsOfConstructor,
} from "@repo/engine_core/test.js";
import { validateConstructor } from "@repo/game/Player.test/constructor.test.js";
import { expect, test } from "vitest";

import type { SnowballPlayerWithData } from "./setup.js";

import { SnowballPlayer } from "../Player.js";
import { indexedSnowballPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO } from "./indexedRecords.js";

const createDescription = ({
  affix,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix">) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestsOfConstructor({
      className: "SnowballPlayer",
    }),
  });

const testConstructor = ({
  arrayOfPlayersWithData,
}: {
  arrayOfPlayersWithData: SnowballPlayerWithData[];
}) => {
  arrayOfPlayersWithData.forEach(({ keyOfPlayer, params }) => {
    test(
      createDescription({
        affix: keyOfPlayer,
      }),
      () => {
        const { name, symbol } = params;
        const newPlayer = new SnowballPlayer({
          name,
          symbol,
        });

        validateConstructor({ params, player: newPlayer });
        expect(newPlayer).toBeInstanceOf(SnowballPlayer);
      },
    );
  });
};

testConstructor({
  arrayOfPlayersWithData:
    indexedSnowballPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
});
