import { recordOfSnowballStatesWithData } from "../../../game/State.test/records.js";
import {
  createRecordOfSnowballTreeNodesWithData,
  type RecordOfRequiredParamsOfSnowballTreeNodes,
} from "./setup.js";

const EXPLORATION_CONSTANT = 2;

const recordOfRequiredParamsOfSnowballTreeNodes = {
  root: {
    explorationConstant: EXPLORATION_CONSTANT,
    parentTreeNodeWithData: null,
    playedMoveWithDataAndIndex: null,
    stateWithData:
      recordOfSnowballStatesWithData.allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer,
  },
} as const satisfies RecordOfRequiredParamsOfSnowballTreeNodes;

const recordOfSnowballTreeNodesWithData =
  createRecordOfSnowballTreeNodesWithData({
    recordOfRequiredParamsOfTreeNodes:
      recordOfRequiredParamsOfSnowballTreeNodes,
  });

export {
  recordOfRequiredParamsOfSnowballTreeNodes,
  recordOfSnowballTreeNodesWithData,
};
