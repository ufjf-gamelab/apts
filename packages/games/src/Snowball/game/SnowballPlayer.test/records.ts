import {
  createRecordOfSnowballPlayersWithData,
  type RecordOfRequiredParamsOfSnowballPlayers,
} from "./setup.js";

const recordOfRequiredParamsOfSnowballPlayers = {
  alice: { name: "Alice", symbol: "X" },
  bruno: { name: "Bruno", symbol: "O" },
} as const satisfies RecordOfRequiredParamsOfSnowballPlayers;

const recordOfSnowballPlayersWithData = createRecordOfSnowballPlayersWithData({
  recordOfRequiredParamsOfPlayers: recordOfRequiredParamsOfSnowballPlayers,
});

export type { RecordOfRequiredParamsOfSnowballPlayers };
export {
  recordOfRequiredParamsOfSnowballPlayers,
  recordOfSnowballPlayersWithData,
};
