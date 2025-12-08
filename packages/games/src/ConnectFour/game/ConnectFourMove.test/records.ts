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
    indexOfColumnInWhichPlacePiece: 1,
    title: "Second column",
  },
  c2: {
    indexOfColumnInWhichPlacePiece: 2,
    title: "Third column",
  },
  c3: {
    indexOfColumnInWhichPlacePiece: 3,
    title: "Fourth column",
  },
  c4: {
    indexOfColumnInWhichPlacePiece: 4,
    title: "Fifth column",
  },
  c5: {
    indexOfColumnInWhichPlacePiece: 5,
    title: "Sixth column",
  },
  c6: {
    indexOfColumnInWhichPlacePiece: 6,
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
