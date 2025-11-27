import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPlayers,
  validateGetPlayers,
} from "@repo/game/Game.test/getPlayers.test.js";
import { expect, test } from "vitest";

import type { TicTacToeGameWithData } from "./setup.js";

import { TicTacToePlayer } from "../Player.js";
import { recordOfTicTacToeGamesWithData } from "./records.js";

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
  arrayOfGamesWithData: TicTacToeGameWithData[];
}) => {
  arrayOfGamesWithData.forEach(
    ({ game, keyOfGame, requiredParams: { playersWithData } }) => {
      const players = playersWithData.map(({ player }) => player);

      test(
        createDescription({
          affix: keyOfGame,
          keysOfExpectedPlayers: playersWithData.map(
            ({ keyOfPlayer }) => keyOfPlayer,
          ),
        }),

        () => {
          validateGetPlayers({
            expectedPlayers: players,
            game,
          });

          expect(players).toBeInstanceOf(Array<TicTacToePlayer>);
          const [firstPlayerWithData] = playersWithData;
          expect(firstPlayerWithData?.player).toBeInstanceOf(TicTacToePlayer);
        },
      );
    },
  );
};

testGetPlayers({
  arrayOfGamesWithData: Object.values(recordOfTicTacToeGamesWithData),
});
