import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfSlot } from "@repo/game/Slot.js";

import type { Shape } from "../Shape.js";

import { getIndexOfSlot } from "../Game.test/slots.js";
import { slotsWithData } from "../Slot.test/setup.js";

interface SnowballShapeParams {
  initialIndexOfColumn: Integer;
  initialIndexOfRow: Integer;
  shape: Shape;
}

interface SnowballShapeResult {
  indexesOfSlots: IndexOfSlot[];
}

interface SnowballShapeWithData {
  keyOfShape: string;
  params: SnowballShapeParams;
  result: SnowballShapeResult;
}

const horizontalLine = {
  direction: "horizontal",
  size: 5,
  type: "line",
} satisfies Shape;

const recordOfParamsOfShapes = {
  horizontalLineOfLength5OnRow0AndColumn0: {
    params: {
      initialIndexOfColumn: 0,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNorthwest.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northwestOfNorth.keyOfSlot }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNorth.keyOfSlot }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn4: {
    params: {
      initialIndexOfColumn: 4,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNorth.keyOfSlot }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northeastOfNorth.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNortheast.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn5: {
    params: {
      initialIndexOfColumn: 5,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({ keyOfSlot: slotsWithData.northeastOfNorth.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNortheast.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn6: {
    params: {
      initialIndexOfColumn: 6,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northwestOfNortheast.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNortheast.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn7: {
    params: {
      initialIndexOfColumn: 7,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNortheast.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn8: {
    params: {
      initialIndexOfColumn: 8,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northeastOfNortheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumn9: {
    params: {
      initialIndexOfColumn: 9,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative1: {
    params: {
      initialIndexOfColumn: -1,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNorthwest.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northeastOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northwestOfNorth.keyOfSlot }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative2: {
    params: {
      initialIndexOfColumn: -2,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNorthwest.keyOfSlot }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northeastOfNorthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative3: {
    params: {
      initialIndexOfColumn: -3,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northwestOfNorthwest.keyOfSlot,
        }),
        getIndexOfSlot({ keyOfSlot: slotsWithData.northOfNorthwest.keyOfSlot }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative4: {
    params: {
      initialIndexOfColumn: -4,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.northwestOfNorthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow0AndColumnNegative5: {
    params: {
      initialIndexOfColumn: -5,
      initialIndexOfRow: 0,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow4AndColumn0: {
    params: {
      initialIndexOfColumn: 0,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.westOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.centerOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.eastOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.westOfCenter.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.centerOfCenter.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumn4: {
    params: {
      initialIndexOfColumn: 4,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.centerOfCenter.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.eastOfCenter.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.westOfEast.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.centerOfEast.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.eastOfEast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumn8: {
    params: {
      initialIndexOfColumn: 8,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.eastOfEast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumn9: {
    params: {
      initialIndexOfColumn: 9,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative1: {
    params: {
      initialIndexOfColumn: -1,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.westOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.centerOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.eastOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.westOfCenter.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative2: {
    params: {
      initialIndexOfColumn: -2,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.westOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.centerOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.eastOfWest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative3: {
    params: {
      initialIndexOfColumn: -3,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.westOfWest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.centerOfWest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative4: {
    params: {
      initialIndexOfColumn: -4,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.westOfWest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow4AndColumnNegative5: {
    params: {
      initialIndexOfColumn: -5,
      initialIndexOfRow: 4,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow8AndColumn0: {
    params: {
      initialIndexOfColumn: 0,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southwestOfSouth.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southOfSouth.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumn4: {
    params: {
      initialIndexOfColumn: 4,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southOfSouth.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southeastOfSouth.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southwestOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southOfSoutheast.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southeastOfSoutheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumn8: {
    params: {
      initialIndexOfColumn: 8,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southeastOfSoutheast.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumn9: {
    params: {
      initialIndexOfColumn: 9,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative1: {
    params: {
      initialIndexOfColumn: -1,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southeastOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southwestOfSouth.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative2: {
    params: {
      initialIndexOfColumn: -2,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southeastOfSouthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative3: {
    params: {
      initialIndexOfColumn: -3,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southwestOfSouthwest.keyOfSlot,
        }),
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southOfSouthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative4: {
    params: {
      initialIndexOfColumn: -4,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [
        getIndexOfSlot({
          keyOfSlot: slotsWithData.southwestOfSouthwest.keyOfSlot,
        }),
      ],
    },
  },
  horizontalLineOfLength5OnRow8AndColumnNegative5: {
    params: {
      initialIndexOfColumn: -5,
      initialIndexOfRow: 8,
      shape: horizontalLine,
    },
    result: {
      indexesOfSlots: [],
    },
  },
} as const satisfies Record<
  string,
  {
    params: SnowballShapeParams;
    result: SnowballShapeResult;
  }
>;

const createShapesWithData = <
  RecordOfParams extends Record<
    string,
    { params: SnowballShapeParams; result: SnowballShapeResult }
  >,
>({
  recordOfParams,
}: {
  recordOfParams: RecordOfParams;
}): {
  [K in keyof RecordOfParams]: {
    keyOfShape: keyof RecordOfParams;
    params: SnowballShapeParams;
    result: SnowballShapeResult;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfParams]: {
      keyOfShape: keyof RecordOfParams;
      params: SnowballShapeParams;
      result: SnowballShapeResult;
    };
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfParams, which RecordOfParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(recordOfParams).map(
      ([key, content]) =>
        [
          key,
          {
            keyOfShape: key,
            params: content.params,
            result: content.result,
          } satisfies SnowballShapeWithData,
        ] as const,
    ),
  ) as ResultType;
};

const shapesWithDataForUnitTest = createShapesWithData({
  recordOfParams: recordOfParamsOfShapes,
});

export type { SnowballShapeWithData };
export { shapesWithDataForUnitTest };
