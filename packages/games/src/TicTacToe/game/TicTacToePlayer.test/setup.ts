import {
  createRecordOfPlayersWithData,
  type DerivedParamsOfPlayer,
  deriveParamsOfPlayer,
  type PlayerWithData,
  type RecordOfPlayersWithData,
  type RequiredParamsOfPlayer,
} from "@repo/game/Player.test/setup.js";

import { TicTacToePlayer } from "../TicTacToePlayer.js";

type DerivedParamsOfTicTacToePlayer = DerivedParamsOfPlayer;

type RecordOfRequiredParamsOfTicTacToePlayers = Record<
  string,
  RequiredParamsOfTicTacToePlayer
>;

type RecordOfTicTacToePlayersWithData<
  GenericRecordOfRequiredParamsOfTicTacToePlayers extends
    RecordOfRequiredParamsOfTicTacToePlayers,
> = RecordOfPlayersWithData<
  TicTacToePlayer,
  RequiredParamsOfTicTacToePlayer,
  GenericRecordOfRequiredParamsOfTicTacToePlayers
>;

type RequiredParamsOfTicTacToePlayer = RequiredParamsOfPlayer;

type TicTacToePlayerWithData<
  GenericKeyOfTicTacToePlayer extends string = string,
> = PlayerWithData<
  TicTacToePlayer,
  RequiredParamsOfTicTacToePlayer,
  GenericKeyOfTicTacToePlayer
>;

const deriveParamsOfTicTacToePlayer = ({
  name,
  symbol,
}: RequiredParamsOfTicTacToePlayer): DerivedParamsOfTicTacToePlayer =>
  deriveParamsOfPlayer({
    name,
    symbol,
  });

const createTicTacToePlayer = ({
  name,
  symbol,
}: DerivedParamsOfTicTacToePlayer): TicTacToePlayer =>
  new TicTacToePlayer({
    name,
    symbol,
  });

const createRecordOfTicTacToePlayersWithData = <
  GenericRecordOfRequiredParamsOfTicTacToePlayers extends
    RecordOfRequiredParamsOfTicTacToePlayers,
>({
  recordOfRequiredParamsOfPlayers,
}: {
  recordOfRequiredParamsOfPlayers: GenericRecordOfRequiredParamsOfTicTacToePlayers;
}) =>
  createRecordOfPlayersWithData<
    TicTacToePlayer,
    DerivedParamsOfTicTacToePlayer,
    RequiredParamsOfTicTacToePlayer,
    RecordOfTicTacToePlayersWithData<GenericRecordOfRequiredParamsOfTicTacToePlayers>
  >({
    create: createTicTacToePlayer,
    deriveParams: deriveParamsOfTicTacToePlayer,
    recordOfRequiredParamsOfPlayers,
  });

export type {
  DerivedParamsOfTicTacToePlayer,
  RecordOfRequiredParamsOfTicTacToePlayers,
  RecordOfTicTacToePlayersWithData,
  RequiredParamsOfTicTacToePlayer,
  TicTacToePlayerWithData,
};
export {
  createRecordOfTicTacToePlayersWithData,
  createTicTacToePlayer,
  deriveParamsOfTicTacToePlayer,
};
