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

// const getChildOfTicTacToeTreeNode = ({
//   indexOfChild,
//   treeNode,
// }: Pick<Parameters<TicTacToeTreeNode["getChild"]>[0], "indexOfChild"> & {
//   treeNode: TicTacToeTreeNode;
// }): TicTacToeTreeNode => {
//   const child = treeNode.getChild({
//     indexOfChild,
//   });

//   if (child === null) {
//     throw new Error(
//       `There is not an expanded child on this tree node with the index ${indexOfChild}.`,
//     );
//   }

//   return child;
// };

/* (*) */
const thisRoot = createTicTacToeTreeNodeWithData({
  keyOfTreeNode: "thisRoot",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    indexAndKeyOfBestChild: null,
    playedMoveWithDataAndIndex: null,
    stateWithData:
      recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
}) satisfies TicTacToeTreeNodeWithData;

/* ((*), (Northwest)) */
const thisRootThenNorthwest = createTicTacToeTreeNodeWithData({
  keyOfTreeNode: "thisRootThenNorthwest",
  requiredParams: {
    expandedMovesWithData: new Map([
      constructTupleForMove({
        moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.northwest,
      }),
    ]),
    indexAndKeyOfBestChild: {
      indexOfChild:
        recordOfTicTacToeMovesWithDataAndIndex.northwest.indexOfMove,
      keyOfChild: "rootThenThisNorthwest",
    },
    playedMoveWithDataAndIndex: null,
    stateWithData:
      recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
}) satisfies TicTacToeTreeNodeWithData;

/* ((), (*Northwest)) */
const rootThenThisNorthwest = {
  keyOfTreeNode: "rootThenThisNorthwest",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    indexAndKeyOfBestChild: null,
    playedMoveWithDataAndIndex:
      recordOfTicTacToeMovesWithDataAndIndex.northwest,
    stateWithData:
      recordOfTicTacToeStatesWithData.slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
  },
  treeNode: thisRootThenNorthwest.treeNode.expand({
    indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.northwest.indexOfMove,
  }),
} satisfies TicTacToeTreeNodeWithData;

/* ((*), (Center, East, North, Northeast, Northwest, South, Southeast, Southwest, West)) */
const thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  createTicTacToeTreeNodeWithData({
    keyOfTreeNode:
      "thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
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
      indexAndKeyOfBestChild: {
        indexOfChild: recordOfTicTacToeMovesWithDataAndIndex.center.indexOfMove,
        keyOfChild:
          "rootThenThisCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
      },

      playedMoveWithDataAndIndex: null,
      stateWithData:
        recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
    },
  }) satisfies TicTacToeTreeNodeWithData;

/* ((), (*Center, East, North, Northeast, Northwest, South, Southeast, Southwest, West)) */
const rootThenThisCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenThisCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR1C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.center.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, *East, North, Northeast, Northwest, South, Southeast, Southwest, West)) */
const rootThenCenterOrThisEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrThisEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.east,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR1C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.east.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, *North, Northeast, Northwest, South, Southeast, Southwest, West)) */
const rootThenCenterOrEastOrThisNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrThisNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.north,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR0C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.north.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, *Northeast, Northwest, South, Southeast, Southwest, West)) */
const rootThenCenterOrEastOrNorthOrThisNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrThisNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex:
        recordOfTicTacToeMovesWithDataAndIndex.northeast,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR0C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.northeast.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, *Northwest, South, Southeast, Southwest, West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrThisNorthwestOrSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrThisNorthwestOrSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex:
        recordOfTicTacToeMovesWithDataAndIndex.northwest,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.northwest.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, Northwest, *South, Southeast, Southwest, West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrThisSouthOrSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrThisSouthOrSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR2C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.south.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, Northwest, South, *Southeast, Southwest, West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrThisSoutheastOrSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrThisSoutheastOrSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex:
        recordOfTicTacToeMovesWithDataAndIndex.southeast,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR2C2IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.southeast.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, Northwest, South, Southeast, *Southwest, West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrThisSouthwestOrWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrThisSouthwestOrWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex:
        recordOfTicTacToeMovesWithDataAndIndex.southwest,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR2C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove:
            recordOfTicTacToeMovesWithDataAndIndex.southwest.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, East, North, Northeast, Northwest, South, Southeast, Southwest, *West)) */
const rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrThisWest =
  {
    keyOfTreeNode:
      "rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrThisWest",
    requiredParams: {
      expandedMovesWithData: new Map([]),
      indexAndKeyOfBestChild: null,

      playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.west,
      stateWithData:
        recordOfTicTacToeStatesWithData.slotR1C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
    },
    treeNode:
      thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest.treeNode.expand(
        {
          indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.west.indexOfMove,
        },
      ),
  } satisfies TicTacToeTreeNodeWithData;

const recordOfTicTacToeTreeNodesWithData = {
  rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrThisWest,
  rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrThisSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrThisSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrThisSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrNortheastOrThisNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrNorthOrThisNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrEastOrThisNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenCenterOrThisEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenThisCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  rootThenThisNorthwest,
  thisRoot,
  thisRootThenCenterOrEastOrNorthOrNortheastOrNorthwestOrSouthOrSoutheastOrSouthwestOrWest,
  thisRootThenNorthwest,
} satisfies RecordOfTicTacToeTreeNodesWithData;

export { recordOfTicTacToeTreeNodesWithData };
