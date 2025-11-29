import { recordOfSnowballStatesWithData } from "../../../game/State.test/records.js";
import {
  createSnowballTreeNodeWithData,
  type RecordOfSnowballTreeNodesWithData,
  type SnowballTreeNodeWithData,
} from "./setup.js";

/* (*) */
const currentRoot = createSnowballTreeNodeWithData({
  keyOfTreeNode: "currentRoot",
  requiredParams: {
    expandedMovesWithData: new Map([]),
    indexAndKeyOfBestChildNode: null,
    playedMoveWithDataAndIndex: null,
    stateWithData:
      recordOfSnowballStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
}) satisfies SnowballTreeNodeWithData;

const recordOfSnowballTreeNodesWithData = {
  currentRoot,
} satisfies RecordOfSnowballTreeNodesWithData;

export { recordOfSnowballTreeNodesWithData };
