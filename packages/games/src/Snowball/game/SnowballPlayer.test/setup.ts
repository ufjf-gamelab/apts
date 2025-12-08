import {
  createRecordOfPlayersWithData,
  type DerivedParamsOfPlayer,
  deriveParamsOfPlayer,
  type PlayerWithData,
  type RecordOfPlayersWithData,
  type RequiredParamsOfPlayer,
} from "@repo/game/Player.test/setup.js";

import { SnowballPlayer } from "../SnowballPlayer.js";

type DerivedParamsOfSnowballPlayer = DerivedParamsOfPlayer;

type RecordOfRequiredParamsOfSnowballPlayers = Record<
  string,
  RequiredParamsOfSnowballPlayer
>;

type RecordOfSnowballPlayersWithData<
  GenericRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
> = RecordOfPlayersWithData<
  SnowballPlayer,
  RequiredParamsOfSnowballPlayer,
  GenericRecordOfRequiredParamsOfSnowballPlayers
>;

type RequiredParamsOfSnowballPlayer = RequiredParamsOfPlayer;

type SnowballPlayerWithData<
  GenericKeyOfSnowballPlayer extends string = string,
> = PlayerWithData<
  SnowballPlayer,
  RequiredParamsOfSnowballPlayer,
  GenericKeyOfSnowballPlayer
>;

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

const createRecordOfSnowballPlayersWithData = <
  GenericRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
>({
  recordOfRequiredParamsOfPlayers,
}: {
  recordOfRequiredParamsOfPlayers: GenericRecordOfRequiredParamsOfSnowballPlayers;
}) =>
  createRecordOfPlayersWithData<
    SnowballPlayer,
    DerivedParamsOfSnowballPlayer,
    RequiredParamsOfSnowballPlayer,
    RecordOfSnowballPlayersWithData<GenericRecordOfRequiredParamsOfSnowballPlayers>
  >({
    create: createSnowballPlayer,
    deriveParams: deriveParamsOfSnowballPlayer,
    recordOfRequiredParamsOfPlayers,
  });

export type {
  DerivedParamsOfSnowballPlayer,
  RecordOfRequiredParamsOfSnowballPlayers,
  RecordOfSnowballPlayersWithData,
  RequiredParamsOfSnowballPlayer,
  SnowballPlayerWithData,
};
export {
  createRecordOfSnowballPlayersWithData,
  createSnowballPlayer,
  deriveParamsOfSnowballPlayer,
};
