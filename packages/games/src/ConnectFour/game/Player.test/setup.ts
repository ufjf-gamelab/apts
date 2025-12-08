import {
  createRecordOfPlayersWithData,
  type DerivedParamsOfPlayer,
  deriveParamsOfPlayer,
  type PlayerWithData,
  type RecordOfPlayersWithData,
  type RequiredParamsOfPlayer,
} from "@repo/game/Player.test/setup.js";

import { ConnectFourPlayer } from "../Player.js";

type ConnectFourPlayerWithData<
  GenericKeyOfConnectFourPlayer extends string = string,
> = PlayerWithData<
  ConnectFourPlayer,
  RequiredParamsOfConnectFourPlayer,
  GenericKeyOfConnectFourPlayer
>;

type DerivedParamsOfConnectFourPlayer = DerivedParamsOfPlayer;

type RecordOfConnectFourPlayersWithData<
  GenericRecordOfRequiredParamsOfConnectFourPlayers extends
    RecordOfRequiredParamsOfConnectFourPlayers,
> = RecordOfPlayersWithData<
  ConnectFourPlayer,
  RequiredParamsOfConnectFourPlayer,
  GenericRecordOfRequiredParamsOfConnectFourPlayers
>;

type RecordOfRequiredParamsOfConnectFourPlayers = Record<
  string,
  RequiredParamsOfConnectFourPlayer
>;

type RequiredParamsOfConnectFourPlayer = RequiredParamsOfPlayer;

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
  ConnectFourPlayerWithData,
  DerivedParamsOfConnectFourPlayer,
  RecordOfConnectFourPlayersWithData,
  RecordOfRequiredParamsOfConnectFourPlayers,
  RequiredParamsOfConnectFourPlayer,
};
export {
  createConnectFourPlayer,
  createRecordOfConnectFourPlayersWithData,
  deriveParamsOfConnectFourPlayer,
};
