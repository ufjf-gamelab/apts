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

const EXPLORATION_CONSTANT = 2;

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
    explorationConstant: EXPLORATION_CONSTANT,
    parentTreeNodeWithData: null,
    playedMoveWithDataAndIndex: null,
    stateWithData:
      recordOfTicTacToeStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
}) satisfies TicTacToeTreeNodeWithData;

/* ((*), (Northwest)) */
const thisRootThenNorthwest = createTicTacToeTreeNodeWithData({
  keyOfTreeNode: "thisRootThenNorthwest",
  requiredParams: {
    ...thisRoot.requiredParams,
    expandedMovesWithData: new Map([
      constructTupleForMove({
        moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.northwest,
      }),
    ]),
  },
}) satisfies TicTacToeTreeNodeWithData;

/* ((), (*Northwest)) */
const rootThenThisNorthwest = {
  keyOfTreeNode: "rootThenThisNorthwest",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    explorationConstant: EXPLORATION_CONSTANT,
    parentTreeNodeWithData: thisRootThenNorthwest,
    playedMoveWithDataAndIndex:
      recordOfTicTacToeMovesWithDataAndIndex.northwest,
    stateWithData:
      recordOfTicTacToeStatesWithData.slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
  treeNode: thisRootThenNorthwest.treeNode.expand({
    indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.northwest.indexOfMove,
  }),
} satisfies TicTacToeTreeNodeWithData;

/* ((*), (Center, South)) */
const thisRootThenCenterOrSouth = createTicTacToeTreeNodeWithData({
  keyOfTreeNode: "thisRootThenCenterOrSouth",
  requiredParams: {
    ...thisRoot.requiredParams,
    expandedMovesWithData: new Map([
      constructTupleForMove({
        moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
      }),
      constructTupleForMove({
        moveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
      }),
    ]),
  },
}) satisfies TicTacToeTreeNodeWithData;

/* ((), (*Center, South)) */
const rootThenThisCenterOrSouth = {
  keyOfTreeNode: "rootThenThisCenterOrSouth",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    explorationConstant: EXPLORATION_CONSTANT,
    parentTreeNodeWithData: thisRootThenCenterOrSouth,
    playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.center,
    stateWithData:
      recordOfTicTacToeStatesWithData.slotR1C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
  treeNode: thisRootThenCenterOrSouth.treeNode.expand({
    indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.center.indexOfMove,
  }),
} satisfies TicTacToeTreeNodeWithData;

/* ((), (Center, *South)) */
const rootThenCenterOrThisSouth = {
  keyOfTreeNode: "rootThenCenterOrThisSouth",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    explorationConstant: EXPLORATION_CONSTANT,
    parentTreeNodeWithData: thisRootThenCenterOrSouth,
    playedMoveWithDataAndIndex: recordOfTicTacToeMovesWithDataAndIndex.south,
    stateWithData:
      recordOfTicTacToeStatesWithData.slotR2C1IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
  treeNode: thisRootThenCenterOrSouth.treeNode.expand({
    indexOfMove: recordOfTicTacToeMovesWithDataAndIndex.south.indexOfMove,
  }),
} satisfies TicTacToeTreeNodeWithData;

const recordOfTicTacToeTreeNodesWithData = {
  rootThenCenterOrThisSouth,
  rootThenThisCenterOrSouth,
  rootThenThisNorthwest,
  thisRoot,
  thisRootThenCenterOrSouth,
  thisRootThenNorthwest,
} satisfies RecordOfTicTacToeTreeNodesWithData;

export { recordOfTicTacToeTreeNodesWithData };
