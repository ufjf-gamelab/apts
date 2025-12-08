import {
  createRecordOfConnectFourPlayersWithData,
  type RecordOfRequiredParamsOfConnectFourPlayers,
} from "./setup.js";

const recordOfRequiredParamsOfConnectFourPlayers = {
  alice: { name: "Alice", symbol: "X" },
  bruno: { name: "Bruno", symbol: "O" },
} as const satisfies RecordOfRequiredParamsOfConnectFourPlayers;

const recordOfConnectFourPlayersWithData =
  createRecordOfConnectFourPlayersWithData({
    recordOfRequiredParamsOfPlayers: recordOfRequiredParamsOfConnectFourPlayers,
  });

export type { RecordOfRequiredParamsOfConnectFourPlayers };
export {
  recordOfConnectFourPlayersWithData,
  recordOfRequiredParamsOfConnectFourPlayers,
};
