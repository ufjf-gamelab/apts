import type { IndexOfPlayer } from "@repo/game/Player.js";

import type { ExtendedSnowballPlayersWithData } from "./setup.js";

import {
  playersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
  type RecordOfRequiredParamsOfSnowballPlayers,
} from "./records.js";

type KeysOfPlayersInOrder<GenericExtendedSnowballPlayersWithData> =
  (keyof GenericExtendedSnowballPlayersWithData)[];

type SnowballPlayersWithDataAndIndex<
  ExtendedRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
> = Record<
  KeysOfPlayersInOrder<
    ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredParamsOfSnowballPlayers>
  >[number],
  SnowballPlayerWithDataAndIndex<ExtendedRecordOfRequiredParamsOfSnowballPlayers>
>;

interface SnowballPlayerWithDataAndIndex<
  ExtendedRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
> {
  indexOfPlayer: IndexOfPlayer;
  player: ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredParamsOfSnowballPlayers>[keyof ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredParamsOfSnowballPlayers>];
}

const createIndexedSnowballPlayersWithData = <
  ExtendedRecordOfRequiredParamsOfSnowballPlayers extends
    RecordOfRequiredParamsOfSnowballPlayers,
>({
  keysOfPlayersInOrder,
  playersWithData,
}: {
  keysOfPlayersInOrder: KeysOfPlayersInOrder<ExtendedRecordOfRequiredParamsOfSnowballPlayers>;
  playersWithData: ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredParamsOfSnowballPlayers>;
}) => {
  const playersWithDataAndIndex =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as SnowballPlayersWithDataAndIndex<ExtendedRecordOfRequiredParamsOfSnowballPlayers>;
  const indexedPlayersWithData: (typeof playersWithData)[keyof typeof playersWithData][] =
    [];
  keysOfPlayersInOrder.forEach((keyOfPlayers, indexOfPlayer) => {
    const player = playersWithData[keyOfPlayers];
    playersWithDataAndIndex[keyOfPlayers] = { indexOfPlayer, player };
    indexedPlayersWithData.push(player);
  });
  return {
    indexedPlayersWithData,
    playersWithDataAndIndex,
  };
};

const keysOfSnowballPlayersInOrder = [
  "alice",
  "bruno",
] as const satisfies KeysOfPlayersInOrder<
  typeof playersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO
>;

const {
  indexedPlayersWithData:
    indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
  playersWithDataAndIndex:
    playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
} = createIndexedSnowballPlayersWithData({
  keysOfPlayersInOrder: keysOfSnowballPlayersInOrder,
  playersWithData:
    playersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
});

export type { SnowballPlayerWithDataAndIndex };
export {
  indexedPlayersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
  playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
};
