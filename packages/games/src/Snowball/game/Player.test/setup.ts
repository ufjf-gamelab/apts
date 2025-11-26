import {
  createPlayersWithData,
  type DerivedParamsOfPlayer,
  deriveParamsOfPlayer,
  type PlayerWithData,
  type RequiredParamsOfPlayer,
} from "@repo/game/Player.test/setup.js";

import { SnowballPlayer } from "../Player.js";
import { type RecordOfRequiredParamsOfSnowballPlayers } from "./records.js";

type DerivedParamsOfSnowballPlayer = DerivedParamsOfPlayer;

type RequiredParamsOfSnowballPlayer = RequiredParamsOfPlayer;

type SnowballPlayerWithData = PlayerWithData<SnowballPlayer>;

const deriveParamsOfSnowballPlayer = ({
  name,
  symbol,
}: RequiredParamsOfSnowballPlayer): DerivedParamsOfSnowballPlayer =>
  deriveParamsOfPlayer({
    name,
    symbol,
  });

const createSnowballPlayer = ({
  name,
  symbol,
}: DerivedParamsOfSnowballPlayer): SnowballPlayer =>
  new SnowballPlayer({
    name,
    symbol,
  });

type ExtendedSnowballPlayersWithData<
  ExtendedRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
> = {
  [K in keyof ExtendedRecordOfRequiredParamsOfSnowballPlayers]: {
    keyOfPlayer: keyof ExtendedRecordOfRequiredParamsOfSnowballPlayers;
    params: RequiredParamsOfSnowballPlayer;
    player: SnowballPlayer;
  };
};

const createSnowballPlayersWithData = <
  ExtendedRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
>({
  recordOfRequiredParams,
}: {
  recordOfRequiredParams: ExtendedRecordOfRequiredParamsOfSnowballPlayers;
}): ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredParamsOfSnowballPlayers> =>
  createPlayersWithData({
    create: createSnowballPlayer,
    deriveParams: deriveParamsOfSnowballPlayer,
    recordOfRequiredParams,
  });

export type {
  DerivedParamsOfSnowballPlayer,
  ExtendedSnowballPlayersWithData,
  RequiredParamsOfSnowballPlayer,
  SnowballPlayerWithData,
};
export {
  createSnowballPlayer,
  createSnowballPlayersWithData,
  deriveParamsOfSnowballPlayer,
};
