import {
  createRecordOfPlayersWithData,
  type DerivedParamsOfPlayer,
  deriveParamsOfPlayer,
  type PlayerWithData,
  type RecordOfPlayersWithData,
  type RequiredParamsOfPlayer,
} from "@repo/game/Player.test/setup.js";

import { ConnectFourPlayer } from "../Player.js";

type DerivedParamsOfConnectFourPlayer = DerivedParamsOfPlayer;

type RecordOfRequiredParamsOfConnectFourPlayers = Record<
  string,
  RequiredParamsOfConnectFourPlayer
>;

type RecordOfConnectFourPlayersWithData<
  GenericRecordOfRequiredParamsOfConnectFourPlayers extends
    RecordOfRequiredParamsOfConnectFourPlayers,
> = RecordOfPlayersWithData<
  ConnectFourPlayer,
  RequiredParamsOfConnectFourPlayer,
  GenericRecordOfRequiredParamsOfConnectFourPlayers
>;

type RequiredParamsOfConnectFourPlayer = RequiredParamsOfPlayer;

type ConnectFourPlayerWithData<
  GenericKeyOfConnectFourPlayer extends string = string,
> = PlayerWithData<
  ConnectFourPlayer,
  RequiredParamsOfConnectFourPlayer,
  GenericKeyOfConnectFourPlayer
>;

const deriveParamsOfConnectFourPlayer = ({
  name,
  symbol,
}: RequiredParamsOfConnectFourPlayer): DerivedParamsOfConnectFourPlayer =>
  deriveParamsOfPlayer({
    name,
    symbol,
  });

const createConnectFourPlayer = ({
  name,
  symbol,
}: DerivedParamsOfConnectFourPlayer): ConnectFourPlayer =>
  new ConnectFourPlayer({
    name,
    symbol,
  });

const createRecordOfConnectFourPlayersWithData = <
  GenericRecordOfRequiredParamsOfConnectFourPlayers extends
    RecordOfRequiredParamsOfConnectFourPlayers,
>({
  recordOfRequiredParamsOfPlayers,
}: {
  recordOfRequiredParamsOfPlayers: GenericRecordOfRequiredParamsOfConnectFourPlayers;
}) =>
  createRecordOfPlayersWithData<
    ConnectFourPlayer,
    DerivedParamsOfConnectFourPlayer,
    RequiredParamsOfConnectFourPlayer,
    RecordOfConnectFourPlayersWithData<GenericRecordOfRequiredParamsOfConnectFourPlayers>
  >({
    create: createConnectFourPlayer,
    deriveParams: deriveParamsOfConnectFourPlayer,
    recordOfRequiredParamsOfPlayers,
  });

export type {
  DerivedParamsOfConnectFourPlayer,
  RecordOfRequiredParamsOfConnectFourPlayers,
  RecordOfConnectFourPlayersWithData,
  RequiredParamsOfConnectFourPlayer,
  ConnectFourPlayerWithData,
};
export {
  createRecordOfConnectFourPlayersWithData,
  createConnectFourPlayer,
  deriveParamsOfConnectFourPlayer,
};
