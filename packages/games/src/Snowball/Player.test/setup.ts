import {
  createPlayersWithData,
  derivePlayerParams,
  type RequiredPlayerParams,
} from "@repo/game/Player.test/setup.js";

import { SnowballPlayer } from "../Player.js";
import { recordOfRequiredParamsOfPlayers } from "./records.js";

type DerivedSnowballPlayerParams = RequiredSnowballPlayerParams;

type RequiredSnowballPlayerParams = Pick<
  RequiredPlayerParams,
  "name" | "symbol"
>;

interface SnowballPlayerWithData<
  Params extends RequiredSnowballPlayerParams = RequiredSnowballPlayerParams,
> {
  keyOfPlayer: string;
  params: Params;
  player: SnowballPlayer;
}

const deriveSnowballPlayerParams = ({
  name,
  symbol,
}: RequiredSnowballPlayerParams): DerivedSnowballPlayerParams =>
  derivePlayerParams({
    name,
    symbol,
  });

const createSnowballPlayer = ({
  name,
  symbol,
}: DerivedSnowballPlayerParams): SnowballPlayer =>
  new SnowballPlayer({
    name,
    symbol,
  });

const playersWithData = createPlayersWithData({
  create: createSnowballPlayer,
  deriveParams: deriveSnowballPlayerParams,
  recordOfRequiredParams: recordOfRequiredParamsOfPlayers,
});

export type {
  DerivedSnowballPlayerParams,
  RequiredSnowballPlayerParams,
  SnowballPlayerWithData,
};
export { createSnowballPlayer, deriveSnowballPlayerParams, playersWithData };
