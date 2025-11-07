import { createDescriptionForTest } from "@repo/engine_core/test.js";
import {
  createDescriptionForTestOfGetPlayers,
  validateGetPlayers,
} from "@repo/game/Game.test/getPlayers.test.js";
import { expect, test } from "vitest";

import { SnowballPlayer } from "../Player.js";
import { gamesWithDataForUnitTest } from "./setup.js";

const createDescription = ({
  affix,
  keysOfExpectedPlayers,
}: Pick<
  Parameters<typeof createDescriptionForTestOfGetPlayers>[0],
  "keysOfExpectedPlayers"
> & {
  affix: string;
}) =>
  createDescriptionForTest({
    affix,
    description: createDescriptionForTestOfGetPlayers({
      keysOfExpectedPlayers,
    }),
  });

Object.values(gamesWithDataForUnitTest).forEach(
  ({ game, keyOfGame, params }) => {
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
  },
);
