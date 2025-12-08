import type {
  PlayerWithDataAndIndex,
  RecordOfPlayersWithDataAndIndex,
} from "@repo/game/Player.test/setup.js";

import type { SnowballPlayer } from "../SnowballPlayer.js";
import type {
  RecordOfSnowballPlayersWithData,
  RequiredParamsOfSnowballPlayer,
  SnowballPlayerWithData,
} from "./setup.js";

import {
  type recordOfRequiredParamsOfSnowballPlayers,
  type RecordOfRequiredParamsOfSnowballPlayers,
  recordOfSnowballPlayersWithData,
} from "./records.js";

type KeysOfPlayersInOrder<
  GenericRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
> = (keyof GenericRecordOfRequiredParamsOfSnowballPlayers)[];

type RecordOfSnowballPlayersWithDataAndIndex<
  GenericRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
> = RecordOfPlayersWithDataAndIndex<
  SnowballPlayer,
  RequiredParamsOfSnowballPlayer,
  GenericRecordOfRequiredParamsOfSnowballPlayers,
  SnowballPlayerWithData
>;

type SnowballPlayerWithDataAndIndex = PlayerWithDataAndIndex<
  SnowballPlayer,
  RequiredParamsOfSnowballPlayer,
  SnowballPlayerWithData
>;

const createIndexedSnowballPlayersWithData = <
  GenericRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
>({
  keysOfSnowballPlayersInOrder,
  snowballPlayersWithData,
}: {
  keysOfSnowballPlayersInOrder: KeysOfPlayersInOrder<GenericRecordOfRequiredParamsOfSnowballPlayers>;
  snowballPlayersWithData: RecordOfSnowballPlayersWithData<GenericRecordOfRequiredParamsOfSnowballPlayers>;
}) => {
  const recordOfSnowballPlayersWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfSnowballPlayersWithDataAndIndex<GenericRecordOfRequiredParamsOfSnowballPlayers>;
  const indexedSnowballPlayersWithData: (typeof snowballPlayersWithData)[keyof typeof snowballPlayersWithData][] =
    [];

  keysOfSnowballPlayersInOrder.forEach((keyOfPlayer, indexOfPlayer) => {
    const playerWithData = snowballPlayersWithData[keyOfPlayer];
    recordOfSnowballPlayersWithDataAndIndex[keyOfPlayer] = {
      indexOfPlayer,
      playerWithData,
    } as RecordOfSnowballPlayersWithDataAndIndex<GenericRecordOfRequiredParamsOfSnowballPlayers>[typeof keyOfPlayer];
    indexedSnowballPlayersWithData.push(playerWithData);
  });
  return {
    indexedSnowballPlayersWithData,
    recordOfSnowballPlayersWithDataAndIndex,
  };
};

const keysOfSnowballPlayersInOrder = [
  "alice",
  "bruno",
] as const satisfies KeysOfPlayersInOrder<
  typeof recordOfRequiredParamsOfSnowballPlayers
>;

const {
  indexedSnowballPlayersWithData,
  recordOfSnowballPlayersWithDataAndIndex,
} = createIndexedSnowballPlayersWithData({
  keysOfSnowballPlayersInOrder,
  snowballPlayersWithData: recordOfSnowballPlayersWithData,
});

export type { SnowballPlayerWithDataAndIndex };
export {
  indexedSnowballPlayersWithData,
  recordOfSnowballPlayersWithDataAndIndex,
};
