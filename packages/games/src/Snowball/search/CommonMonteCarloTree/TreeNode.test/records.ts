import type { SnowballMoveWithData } from "../../../game/Move.test/setup.js";

import {
  recordOfSnowballMovesWithDataAndIndex,
  type SnowballMoveWithDataAndIndex,
} from "../../../game/Move.test/indexedRecords.js";
import { recordOfSnowballStatesWithData } from "../../../game/State.test/records.js";
import {
  createSnowballTreeNodeWithData,
  type RecordOfSnowballTreeNodesWithData,
  type SnowballTreeNodeWithData,
} from "./setup.js";

const EXPLORATION_CONSTANT = 2;

const constructTupleForMove = ({
  moveWithDataAndIndex,
}: {
  moveWithDataAndIndex: SnowballMoveWithDataAndIndex;
}): [number, SnowballMoveWithData] => [
  moveWithDataAndIndex.indexOfMove,
  moveWithDataAndIndex.moveWithData,
];

// const getChildOfSnowballTreeNode = ({
//   indexOfChild,
//   treeNode,
// }: Pick<Parameters<SnowballTreeNode["getChild"]>[0], "indexOfChild"> & {
//   treeNode: SnowballTreeNode;
// }): SnowballTreeNode => {
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
const thisRoot = createSnowballTreeNodeWithData({
  keyOfTreeNode: "thisRoot",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    explorationConstant: EXPLORATION_CONSTANT,
    parentTreeNodeWithData: null,
    playedMoveWithDataAndIndex: null,
    stateWithData:
      recordOfSnowballStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
}) satisfies SnowballTreeNodeWithData;

/* ((*), (NorthwestOfNorthwest)) */
const thisRootThenNorthwestOfNorthwest = createSnowballTreeNodeWithData({
  keyOfTreeNode: "thisRootThenNorthwestOfNorthwest",
  requiredParams: {
    ...thisRoot.requiredParams,
    expandedMovesWithData: new Map([
      constructTupleForMove({
        moveWithDataAndIndex:
          recordOfSnowballMovesWithDataAndIndex.northwestOfNorthwest,
      }),
    ]),
  },
}) satisfies SnowballTreeNodeWithData;

/* ((), (*NorthwestOfNorthwest)) */
const rootThenThisNorthwestOfNorthwest = {
  keyOfTreeNode: "rootThenThisNorthwestOfNorthwest",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    explorationConstant: EXPLORATION_CONSTANT,
    parentTreeNodeWithData: thisRootThenNorthwestOfNorthwest,
    playedMoveWithDataAndIndex:
      recordOfSnowballMovesWithDataAndIndex.northwestOfNorthwest,
    stateWithData:
      recordOfSnowballStatesWithData.slotR0C0IsFilledByAliceAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer,
  },
  treeNode: thisRootThenNorthwestOfNorthwest.treeNode.expand({
    indexOfMove:
      recordOfSnowballMovesWithDataAndIndex.northwestOfNorthwest.indexOfMove,
  }),
} satisfies SnowballTreeNodeWithData;

const recordOfSnowballTreeNodesWithData = {
  rootThenThisNorthwestOfNorthwest,
  thisRoot,
  thisRootThenNorthwestOfNorthwest,
} satisfies RecordOfSnowballTreeNodesWithData;

export { recordOfSnowballTreeNodesWithData };
