import type { TicTacToeMoveWithData } from "../../../game/Move.test/setup.js";

import {
  recordOfTicTacToeMovesWithDataAndIndex,
  type TicTacToeMoveWithDataAndIndex,
} from "../../../game/Move.test/indexedRecords.js";
import { recordOfTicTacToeStatesWithData } from "../../../game/State.test/records.js";
import {
  createTicTacToeTreeNodeWithData,
  type RecordOfTicTacToeTreeNodesWithData,
  type TicTacToeTreeNodeWithData,
} from "./setup.js";

const constructTupleForMove = ({
  moveWithDataAndIndex,
}: {
  moveWithDataAndIndex: TicTacToeMoveWithDataAndIndex;
}): [number, TicTacToeMoveWithData] => [
  moveWithDataAndIndex.indexOfMove,
  moveWithDataAndIndex.moveWithData,
];

/* (*) */
const currentRoot = createTicTacToeTreeNodeWithData({
  keyOfTreeNode: "currentRoot",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    indexAndKeyOfBestChildNode: null,
    playedMoveWithDataAndIndex: null,
    stateWithData:
      recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
}) satisfies TicTacToeTreeNodeWithData;

/* ((*), (Northwest)) */
const currentRootThenNorthwest = createTicTacToeTreeNodeWithData({
  keyOfTreeNode: "currentRootThenNorthwest",
  requiredParams: {
    expandedMovesWithData: new Map([
      constructTupleForMove({
        moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.northwest,
      }),
    ]),
    indexAndKeyOfBestChildNode: {
      indexOfChildNode:
        recordOfTicTacToeMovesWithDataAndIndex.northwest.indexOfMove,
      keyOfChildNode: "rootThenCurrentNorthwest",
    },
    playedMoveWithDataAndIndex: null,
    stateWithData:
      recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
}) satisfies TicTacToeTreeNodeWithData;

/* ((), (*Northwest)) */
const rootThenCurrentNorthwest = {
  keyOfTreeNode: "rootThenCurrentNorthwest",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    indexAndKeyOfBestChildNode: null,
    playedMoveWithDataAndIndex:
      recordOfTicTacToeMovesWithDataAndIndex.northwest,
    stateWithData:
      recordOfTicTacToeStatesWithData.slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
  },
  treeNode: currentRootThenNorthwest.treeNode.expand({
    indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.northwest.indexOfMove,
  }),
} satisfies TicTacToeTreeNodeWithData;

/* ((*), (Center, East, North, Northeast, Northwest, South, Southeast, Southwest, West)) */
const currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  createTicTacToeTreeNodeWithData({
    keyOfTreeNode:
      "currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.northwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southeast,
        }),
        constructTupleForMove({
          moveWithDataAndIndex:
            recordOfTicTacToeMovesWithDataAndIndex.southwest,
        }),
        constructTupleForMove({
          moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
        }),
      ]),
      indexAndKeyOfBestChildNode: {
        indexOfChildNode:
          recordOfTicTacToeMovesWithDataAndIndex.center.indexOfMove,
        keyOfChildNode:
          "rootThenCurrentCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
      },

      playedMoveWithDataAndIndex: null,
      stateWithData:
        recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
    },
  }) satisfies TicTacToeTreeNodeWithData;

/* ((), (*Center, East, North, Northeast, Northwest, South, Southeast, Southwest, West)) */
const rootThenCurrentCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCurrentCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR1C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.center.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, *East, North, Northeast, Northwest, South, Southeast, Southwest, West)) */
const rootThenCenterOrCurrentEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrCurrentEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR1C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.east.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, *North, Northeast, Northwest, South, Southeast, Southwest, West)) */
const rootThenCenterOrEastOrCurrentNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrCurrentNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR0C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.north.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, *Northeast, Northwest, South, Southeast, Southwest, West)) */
const rootThenCenterOrEastOrNorthOrCurrentNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrCurrentNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex:
        recordOfTicTacToeMovesWithDataAndIndex.northeast,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR0C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.northeast.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, *Northwest, South, Southeast, Southwest, West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrCurrentNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrCurrentNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex:
        recordOfTicTacToeMovesWithDataAndIndex.northwest,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.northwest.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, Northwest, *South, Southeast, Southwest, West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrCurrentSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrCurrentSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR2C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.south.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, Northwest, South, *Southeast, Southwest, West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrCurrentSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrCurrentSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex:
        recordOfTicTacToeMovesWithDataAndIndex.southeast,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR2C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.southeast.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, Northwest, South, Southeast, *Southwest, West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrCurrentSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrCurrentSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex:
        recordOfTicTacToeMovesWithDataAndIndex.southwest,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR2C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.southwest.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, Northwest, South, Southeast, Southwest, *West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrCurrentWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrCurrentWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChildNode: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR1C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.west.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

const recordOfTicTacToeTreeNodesWithData = {
  currentRoot,
  currentRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  currentRootThenNorthwest,
  rootThenCenterOrCurrentEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrCurrentNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrCurrentNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrNortheastOrCurrentNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrCurrentSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrCurrentSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrCurrentSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrCurrentWest,
  rootThenCurrentCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenCurrentNorthwest,
} satisfies RecordOfTicTacToeTreeNodesWithData;

export { recordOfTicTacToeTreeNodesWithData };
