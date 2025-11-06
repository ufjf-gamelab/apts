import { type IndexOfSlot, type Slot } from "../Slot.js";

interface SlotWithData<
  Sl extends Slot<Sl>,
  PartialParams,
  DerivedSlotParams,
  ParamsRecord extends Record<string, PartialParams>,
> {
  indexOfSlot: IndexOfSlot;
  keyOfSlot: keyof ParamsRecord;
  params: DerivedSlotParams;
  slot: Sl;
}

const createSlotsWithData = <
  Sl extends Slot<Sl>,
  PartialParams,
  DerivedSlotParams,
  ParamsRecord extends Record<string, PartialParams>,
>({
  createSlot: create,
  createSlotParams: createParams,
  partialParamsOfSlots,
}: {
  createSlot: (params: DerivedSlotParams) => Sl;
  createSlotParams: (partialParams: PartialParams) => DerivedSlotParams;
  partialParamsOfSlots: ParamsRecord;
}): {
  [K in keyof ParamsRecord]: SlotWithData<
    Sl,
    PartialParams,
    DerivedSlotParams,
    ParamsRecord
  >;
} => {
  type ResultType = {
    [K in keyof ParamsRecord]: SlotWithData<
      Sl,
      PartialParams,
      DerivedSlotParams,
      ParamsRecord
    >;
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from partialParamsOfSlots, which ParamsRecord is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(partialParamsOfSlots).map(([key, partialParams], index) => {
      const params = createParams(partialParams);
      return [
        key,
        {
          indexOfSlot: index,
          keyOfSlot: key,
          params,
          slot: create(params),
        },
      ] as const;
    }),
  ) as ResultType;
};

export type { SlotWithData };
export { createSlotsWithData };
