import type {
  PlayerWithDataAndIndex,
  RecordOfPlayersWithDataAndIndex,
} from "@repo/game/Player.test/setup.js";

import type { ConnectFourPlayer } from "../Player.js";
import type {
  ConnectFourPlayerWithData,
  RecordOfConnectFourPlayersWithData,
  RequiredParamsOfConnectFourPlayer,
} from "./setup.js";

import {
  recordOfConnectFourPlayersWithData,
  type recordOfRequiredParamsOfConnectFourPlayers,
  type RecordOfRequiredParamsOfConnectFourPlayers,
} from "./records.js";

type ConnectFourPlayerWithDataAndIndex = PlayerWithDataAndIndex<
  ConnectFourPlayer,
  RequiredParamsOfConnectFourPlayer,
  ConnectFourPlayerWithData
>;

type KeysOfPlayersInOrder<
  GenericRecordOfRequiredParamsOfConnectFourPlayers extends
    RecordOfRequiredParamsOfConnectFourPlayers,
> = (keyof GenericRecordOfRequiredParamsOfConnectFourPlayers)[];

type RecordOfConnectFourPlayersWithDataAndIndex<
  GenericRecordOfRequiredParamsOfConnectFourPlayers extends
    RecordOfRequiredParamsOfConnectFourPlayers,
> = RecordOfPlayersWithDataAndIndex<
  ConnectFourPlayer,
  RequiredParamsOfConnectFourPlayer,
  GenericRecordOfRequiredParamsOfConnectFourPlayers,
  ConnectFourPlayerWithData
>;

const createIndexedConnectFourPlayersWithData = <
  GenericRecordOfRequiredParamsOfConnectFourPlayers extends
    RecordOfRequiredParamsOfConnectFourPlayers,
>({
  keysOfConnectFourPlayersInOrder,
  snowballPlayersWithData,
}: {
  keysOfConnectFourPlayersInOrder: KeysOfPlayersInOrder<GenericRecordOfRequiredParamsOfConnectFourPlayers>;
  snowballPlayersWithData: RecordOfConnectFourPlayersWithData<GenericRecordOfRequiredParamsOfConnectFourPlayers>;
}) => {
  const recordOfConnectFourPlayersWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfConnectFourPlayersWithDataAndIndex<GenericRecordOfRequiredParamsOfConnectFourPlayers>;
  const indexedConnectFourPlayersWithData: (typeof snowballPlayersWithData)[keyof typeof snowballPlayersWithData][] =
    [];

  keysOfConnectFourPlayersInOrder.forEach((keyOfPlayer, indexOfPlayer) => {
    const playerWithData = snowballPlayersWithData[keyOfPlayer];
    recordOfConnectFourPlayersWithDataAndIndex[keyOfPlayer] = {
      indexOfPlayer,
      playerWithData,
    } as RecordOfConnectFourPlayersWithDataAndIndex<GenericRecordOfRequiredParamsOfConnectFourPlayers>[typeof keyOfPlayer];
    indexedConnectFourPlayersWithData.push(playerWithData);
  });
  return {
    indexedConnectFourPlayersWithData,
    recordOfConnectFourPlayersWithDataAndIndex,
  };
};

const keysOfConnectFourPlayersInOrder = [
  "alice",
  "bruno",
] as const satisfies KeysOfPlayersInOrder<
  typeof recordOfRequiredParamsOfConnectFourPlayers
>;

const {
  indexedConnectFourPlayersWithData,
  recordOfConnectFourPlayersWithDataAndIndex,
} = createIndexedConnectFourPlayersWithData({
  keysOfConnectFourPlayersInOrder,
  snowballPlayersWithData: recordOfConnectFourPlayersWithData,
});

export type { ConnectFourPlayerWithDataAndIndex };
export {
  indexedConnectFourPlayersWithData,
  recordOfConnectFourPlayersWithDataAndIndex,
};
