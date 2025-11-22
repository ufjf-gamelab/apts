import {
  createPlayersWithData,
  derivePlayerParams,
  type PlayerWithData,
  type RequiredPlayerParams,
} from "@repo/game/Player.test/setup.js";

import { SnowballPlayer } from "../Player.js";
import { type RecordOfRequiredSnowballPlayerParams } from "./records.js";

type DerivedSnowballPlayerParams = RequiredSnowballPlayerParams;

type RequiredSnowballPlayerParams = Pick<
  RequiredPlayerParams,
  "name" | "symbol"
>;

type SnowballPlayerWithData = PlayerWithData<
  SnowballPlayer,
  DerivedSnowballPlayerParams
>;

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

type ExtendedSnowballPlayersWithData<
  ExtendedRecordOfRequiredSnowballPlayerParams extends
    RecordOfRequiredSnowballPlayerParams,
> = {
  [K in keyof ExtendedRecordOfRequiredSnowballPlayerParams]: {
    keyOfPlayer: keyof ExtendedRecordOfRequiredSnowballPlayerParams;
    params: RequiredSnowballPlayerParams;
    player: SnowballPlayer;
  };
};

const createSnowballPlayersWithData = <
  ExtendedRecordOfRequiredSnowballPlayerParams extends
    RecordOfRequiredSnowballPlayerParams,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredSnowballPlayerParams;
}): ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredSnowballPlayerParams> =>
  createPlayersWithData({
    create: createSnowballPlayer,
    deriveParams: deriveSnowballPlayerParams,
    recordOfRequiredParams,
  });

export type {
  DerivedSnowballPlayerParams,
  ExtendedSnowballPlayersWithData,
  RequiredSnowballPlayerParams,
  SnowballPlayerWithData,
};
export {
  createSnowballPlayer,
  createSnowballPlayersWithData,
  deriveSnowballPlayerParams,
};
