import {
  createSnowballPlayersWithData,
  type RequiredSnowballPlayerParams,
} from "./setup.js";

type RecordOfRequiredSnowballPlayerParams = Record<
  string,
  RequiredSnowballPlayerParams
>;

const recordOfRequiredParamsOfPlayersInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO =
  {
    alice: { name: "Alice", symbol: "X" },
    bruno: { name: "Bruno", symbol: "O" },
  } as const satisfies RecordOfRequiredSnowballPlayerParams;

const playersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO =
  createSnowballPlayersWithData({
    recordOfRequiredParams:
      recordOfRequiredParamsOfPlayersInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
  });

export type { RecordOfRequiredSnowballPlayerParams };
export {
  playersWithDataInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
  recordOfRequiredParamsOfPlayersInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO,
};
