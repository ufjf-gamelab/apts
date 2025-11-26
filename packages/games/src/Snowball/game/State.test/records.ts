import type { recordOfRequiredParamsOfMoves } from "../Move.test/records.js";

import { gamesWithData } from "../Game.test/records.js";
import {
  movesWithDataAndIndex,
  type SnowballMoveWithDataAndIndex,
} from "../Move.test/indexedRecords.js";
import { type SnowballMoveWithData } from "../Move.test/setup.js";
import { playersWithDataAndIndexInWhichThereAreAliceWithSymbolXAndBrunoWithSymbolO as playersWithDataAndIndex } from "../Player.test/indexedRecords.js";
import { scoresWithData } from "../Score.test/records.js";
import {
  indexedSlotsWithDataInWhichAllSlotsAreEmpty,
  indexedSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
  indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
  indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
} from "../Slot.test/indexedRecords.js";
import {
  createSnowballStatesWithData,
  type RequiredParamsOfSnowballState,
} from "./setup.js";

type RecordOfRequiredParamsOfSnowballStates = Record<
  string,
  RequiredParamsOfSnowballState
>;

const constructTupleForMove = ({
  move,
}: {
  move: SnowballMoveWithDataAndIndex<typeof recordOfRequiredParamsOfMoves>;
}): [number, SnowballMoveWithData] => [move.indexOfMove, move.move];

const recordOfRequiredParamsOfStates = {
  allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      game: gamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayer: playersWithDataAndIndex.bruno,
      player: playersWithDataAndIndex.alice,
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slots: indexedSlotsWithDataInWhichAllSlotsAreEmpty,
      validMoves: new Map([
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNorthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfNorthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfNorthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfNorthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfWest }),
      ]),
    },
  slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      game: gamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayer: playersWithDataAndIndex.alice,
      player: playersWithDataAndIndex.bruno,
      score: scoresWithData.aliceWith0PointsAndBrunoWith0Points,
      slots: indexedSlotsWithDataInWhichSlotR0C0IsFilledByAlice,
      validMoves: new Map([
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNorthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfNorthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfNortheast,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfNorthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfNorthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfNorthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfWest }),
      ]),
    },
  slotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      game: gamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: true,
      nextPlayer: playersWithDataAndIndex.alice,
      player: playersWithDataAndIndex.bruno,
      score: scoresWithData.aliceWith15PointsAndBrunoWith14Points,
      slots:
        indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AndR4C2AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
      validMoves: new Map([
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfSouth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouth }),
      ]),
    },
  slotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    {
      game: gamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: false,
      nextPlayer: playersWithDataAndIndex.bruno,
      player: playersWithDataAndIndex.alice,
      score: scoresWithData.aliceWith14PointsAndBrunoWith14Points,
      slots:
        indexedSlotsWithDataInWhichSlotsR0C0ToR3C3AndR4C0AreFilledByAliceAndSlotsR0C4ToR3C7AndR3C8AreFilledByBruno,
      validMoves: new Map([
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfSouth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSoutheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSoutheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouth }),
      ]),
    },
  slotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    {
      game: gamesWithData.snowballWith9RowsAnd9Columns,
      isFinal: true,
      nextPlayer: playersWithDataAndIndex.alice,
      player: playersWithDataAndIndex.bruno,
      score: scoresWithData.aliceWith38PointsAndBrunoWith26Points,
      slots:
        indexedSlotsWithDataInWhichSlotsR0C0ToR4C4AndR5C5AreFilledByAliceAndSlotsR8C4AndR6C5ToR8C6AndR0C7ToR8C8AreFilledByBruno,
      validMoves: new Map([
        constructTupleForMove({
          move: movesWithDataAndIndex.centerOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.centerOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfNorth }),
        constructTupleForMove({ move: movesWithDataAndIndex.eastOfSouthwest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northeastOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.northOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.northwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.northwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfNorth }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southeastOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southeastOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfCenter }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.southOfWest }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfCenter,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfEast }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfNortheast,
        }),
        constructTupleForMove({
          move: movesWithDataAndIndex.southwestOfSouthwest,
        }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfSouth }),
        constructTupleForMove({ move: movesWithDataAndIndex.southwestOfWest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfEast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfNortheast }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouthwest }),
        constructTupleForMove({ move: movesWithDataAndIndex.westOfSouth }),
      ]),
    },
} as const satisfies RecordOfRequiredParamsOfSnowballStates;

const statesWithData = createSnowballStatesWithData({
  recordOfRequiredParams: recordOfRequiredParamsOfStates,
});

export type { RecordOfRequiredParamsOfSnowballStates };
export { recordOfRequiredParamsOfStates, statesWithData };
