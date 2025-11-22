import type { Integer } from "@repo/engine_core/types.js";

import type { ExtendedSnowballPlayersWithData } from "./setup.js";

import {
  playersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
  type RecordOfRequiredSnowballPlayerParams,
} from "./records.js";

type KeysOfPlayersInOrder<GenericExtendedSnowballPlayersWithData> =
  (keyof GenericExtendedSnowballPlayersWithData)[];

type SnowballPlayersWithDataAndIndex<
  ExtendedRecordOfRequiredSnowballPlayerParams extends
    RecordOfRequiredSnowballPlayerParams,
> = Record<
  KeysOfPlayersInOrder<
    ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredSnowballPlayerParams>
  >[number],
  SnowballPlayerWithDataAndIndex<ExtendedRecordOfRequiredSnowballPlayerParams>
>;

interface SnowballPlayerWithDataAndIndex<
  ExtendedRecordOfRequiredSnowballPlayerParams extends
    RecordOfRequiredSnowballPlayerParams,
> {
  index: Integer;
  player: ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredSnowballPlayerParams>[keyof ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredSnowballPlayerParams>];
}

const createIndexedSnowballPlayersWithData = <
  ExtendedRecordOfRequiredSnowballPlayerParams extends
    RecordOfRequiredSnowballPlayerParams,
>({
  keysOfPlayersInOrder,
  playersWithData,
}: {
  keysOfPlayersInOrder: KeysOfPlayersInOrder<ExtendedRecordOfRequiredSnowballPlayerParams>;
  playersWithData: ExtendedSnowballPlayersWithData<ExtendedRecordOfRequiredSnowballPlayerParams>;
}) => {
  const store =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    {} as SnowballPlayersWithDataAndIndex<ExtendedRecordOfRequiredSnowballPlayerParams>;
  const indexed: (typeof playersWithData)[keyof typeof playersWithData][] = [];
  keysOfPlayersInOrder.forEach((key, index) => {
    const player = playersWithData[key];
    store[key] = { index, player };
    indexed.push(player);
  });
  return {
    indexedPlayersWithData: indexed,
    playersWithDataAndIndex: store,
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
