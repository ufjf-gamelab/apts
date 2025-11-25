import {
  createSnowballPlayersWithData,
  type RequiredParamsOfSnowballPlayer,
} from "./setup.js";

type RecordOfRequiredParamsOfSnowballPlayers = Record<
  string,
  RequiredParamsOfSnowballPlayer
>;

const recordOfRequiredParamsOfPlayersInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO =
  {
    alice: { name: "Alice", symbol: "X" },
    bruno: { name: "Bruno", symbol: "O" },
  } as const satisfies RecordOfRequiredParamsOfSnowballPlayers;

const playersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO =
  createSnowballPlayersWithData({
    recordOfRequiredParams:
      recordOfRequiredParamsOfPlayersInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
  });

export type { RecordOfRequiredParamsOfSnowballPlayers };
export {
  playersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
  recordOfRequiredParamsOfPlayersInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
};
