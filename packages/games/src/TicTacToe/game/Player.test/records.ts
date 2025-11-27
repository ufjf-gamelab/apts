import {
  createRecordOfTicTacToePlayersWithData,
  type RecordOfRequiredParamsOfTicTacToePlayers,
} from "./setup.js";

const recordOfRequiredParamsOfTicTacToePlayers = {
  alice: { name: "Alice", symbol: "X" },
  bruno: { name: "Bruno", symbol: "O" },
} as const satisfies RecordOfRequiredParamsOfTicTacToePlayers;

const recordOfTicTacToePlayersWithData = createRecordOfTicTacToePlayersWithData(
  {
    recordOfRequiredParamsOfPlayers: recordOfRequiredParamsOfTicTacToePlayers,
  },
);

export type { RecordOfRequiredParamsOfTicTacToePlayers };
export {
  recordOfRequiredParamsOfTicTacToePlayers,
  recordOfTicTacToePlayersWithData,
};
