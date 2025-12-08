import type {
  PlayerWithDataAndIndex,
  RecordOfPlayersWithDataAndIndex,
} from "@repo/game/Player.test/setup.js";

import type { TicTacToePlayer } from "../TicTacToePlayer.js";
import type {
  RecordOfTicTacToePlayersWithData,
  RequiredParamsOfTicTacToePlayer,
  TicTacToePlayerWithData,
} from "./setup.js";

import {
  type recordOfRequiredParamsOfTicTacToePlayers,
  type RecordOfRequiredParamsOfTicTacToePlayers,
  recordOfTicTacToePlayersWithData,
} from "./records.js";

type KeysOfPlayersInOrder<
  GenericRecordOfRequiredParamsOfTicTacToePlayers extends
    RecordOfRequiredParamsOfTicTacToePlayers,
> = (keyof GenericRecordOfRequiredParamsOfTicTacToePlayers)[];

type RecordOfTicTacToePlayersWithDataAndIndex<
  GenericRecordOfRequiredParamsOfTicTacToePlayers extends
    RecordOfRequiredParamsOfTicTacToePlayers,
> = RecordOfPlayersWithDataAndIndex<
  TicTacToePlayer,
  RequiredParamsOfTicTacToePlayer,
  GenericRecordOfRequiredParamsOfTicTacToePlayers,
  TicTacToePlayerWithData
>;

type TicTacToePlayerWithDataAndIndex = PlayerWithDataAndIndex<
  TicTacToePlayer,
  RequiredParamsOfTicTacToePlayer,
  TicTacToePlayerWithData
>;

const createIndexedTicTacToePlayersWithData = <
  GenericRecordOfRequiredParamsOfTicTacToePlayers extends
    RecordOfRequiredParamsOfTicTacToePlayers,
>({
  keysOfTicTacToePlayersInOrder,
  ticTacToePlayersWithData,
}: {
  keysOfTicTacToePlayersInOrder: KeysOfPlayersInOrder<GenericRecordOfRequiredParamsOfTicTacToePlayers>;
  ticTacToePlayersWithData: RecordOfTicTacToePlayersWithData<GenericRecordOfRequiredParamsOfTicTacToePlayers>;
}) => {
  const recordOfTicTacToePlayersWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as RecordOfTicTacToePlayersWithDataAndIndex<GenericRecordOfRequiredParamsOfTicTacToePlayers>;
  const indexedTicTacToePlayersWithData: (typeof ticTacToePlayersWithData)[keyof typeof ticTacToePlayersWithData][] =
    [];

  keysOfTicTacToePlayersInOrder.forEach((keyOfPlayer, indexOfPlayer) => {
    const playerWithData = ticTacToePlayersWithData[keyOfPlayer];
    recordOfTicTacToePlayersWithDataAndIndex[keyOfPlayer] = {
      indexOfPlayer,
      playerWithData,
    } as RecordOfTicTacToePlayersWithDataAndIndex<GenericRecordOfRequiredParamsOfTicTacToePlayers>[typeof keyOfPlayer];
    indexedTicTacToePlayersWithData.push(playerWithData);
  });
  return {
    indexedTicTacToePlayersWithData,
    recordOfTicTacToePlayersWithDataAndIndex,
  };
};

const keysOfTicTacToePlayersInOrder = [
  "alice",
  "bruno",
] as const satisfies KeysOfPlayersInOrder<
  typeof recordOfRequiredParamsOfTicTacToePlayers
>;

const {
  indexedTicTacToePlayersWithData,
  recordOfTicTacToePlayersWithDataAndIndex,
} = createIndexedTicTacToePlayersWithData({
  keysOfTicTacToePlayersInOrder,
  ticTacToePlayersWithData: recordOfTicTacToePlayersWithData,
});

export type { TicTacToePlayerWithDataAndIndex };
export {
  indexedTicTacToePlayersWithData,
  recordOfTicTacToePlayersWithDataAndIndex,
};
