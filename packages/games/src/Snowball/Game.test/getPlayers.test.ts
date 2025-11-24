import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPlayers,
  validateGetPlayers,
} from "@repo/game/Game.test/getPlayers.test.js";
import { expect, test } from "vitest";

import type { SnowballGameWithData } from "./setup.js";

import { SnowballPlayer } from "../Player.js";
import { gamesWithData } from "./records.js";

const createDescription = ({
  affix,
  keysOfExpectedPlayers,
}: Pick<Parameters<typeof createDescriptionForTest>[0], "affix"> &
  Pick<
    Parameters<typeof createDescriptionForTestOfGetPlayers>[0],
    "keysOfExpectedPlayers"
  >) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetPlayers({
      keysOfExpectedPlayers,
    }),
  });

const testGetPlayers = ({
  arrayOfGamesWithData,
}: {
  arrayOfGamesWithData: SnowballGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(({ game, keyOfGame, params }) => {
    test(
      createDescription({
        affix: keyOfGame,
        keysOfExpectedPlayers: params.players.map(
          ({ keyOfPlayer }) => keyOfPlayer,
        ),
      }),

      () => {
        validateGetPlayers({
          expectedPlayers: params.players.map(({ player }) => player),
          game,
        });

        expect(params.players).toBeInstanceOf(Array<SnowballPlayer>);
        const [firstPlayerWithData] = params.players;
        expect(firstPlayerWithData?.player).toBeInstanceOf(SnowballPlayer);
      },
    );
  });
};

testGetPlayers({
  arrayOfGamesWithData: Object.values(gamesWithData),
});
