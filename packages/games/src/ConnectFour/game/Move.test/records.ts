import {
  createRecordOfConnectFourMovesWithData,
  type RecordOfRequiredParamsOfConnectFourMoves,
} from "./setup.js";

const recordOfRequiredParamsOfConnectFourMoves = {
  c0: {
    indexOfColumnInWhichPlacePiece: 0,
    title: "First column",
  },
  c1: {
    indexOfColumnInWhichPlacePiece: 0,
    title: "Second column",
  },
  c2: {
    indexOfColumnInWhichPlacePiece: 0,
    title: "Third column",
  },
  c3: {
    indexOfColumnInWhichPlacePiece: 0,
    title: "Fourth column",
  },
  c4: {
    indexOfColumnInWhichPlacePiece: 0,
    title: "Fifth column",
  },
  c5: {
    indexOfColumnInWhichPlacePiece: 0,
    title: "Sixth column",
  },
  c6: {
    indexOfColumnInWhichPlacePiece: 0,
    title: "Seventh column",
  },
} as const satisfies RecordOfRequiredParamsOfConnectFourMoves;

const recordOfConnectFourMovesWithData = createRecordOfConnectFourMovesWithData(
  {
    recordOfRequiredParamsOfMoves: recordOfRequiredParamsOfConnectFourMoves,
  },
);

export {
  recordOfConnectFourMovesWithData,
  recordOfRequiredParamsOfConnectFourMoves,
};
