import { type Slot } from "../Slot.js";

type DerivedSlotParams = RequiredSlotParams;

type RequiredSlotParams = object;

interface SlotWithData<
  Sl extends Slot<Sl>,
  Params extends DerivedSlotParams = DerivedSlotParams,
> {
  keyOfSlot: string;
  params: Params;
  slot: Sl;
}

const deriveSlotParams = (_: RequiredSlotParams): DerivedSlotParams => _;

const createSlotsWithData = <
  Sl extends Slot<Sl>,
  RequiredParams extends RequiredSlotParams,
  DerivedParams extends DerivedSlotParams,
  RecordOfRequiredParams extends Record<string, RequiredParams>,
>({
  create,
  deriveParams,
  recordOfRequiredParams,
}: {
  create: (params: DerivedParams) => Sl;
  deriveParams: (requiredParams: RequiredParams) => DerivedParams;
  recordOfRequiredParams: RecordOfRequiredParams;
}): {
  [K in keyof RecordOfRequiredParams]: {
    keyOfSlot: keyof RecordOfRequiredParams;
    params: RequiredParams;
    slot: Sl;
  };
} => {
  type ResultType = {
    [K in keyof RecordOfRequiredParams]: {
      keyOfSlot: keyof RecordOfRequiredParams;
      params: RequiredParams;
      slot: Sl;
    };
  };

  /**
   * TypeScript cannot statically verify that Object.fromEntries produces all required keys since the operation happens at runtime.
   * This assertion is safe because we're iterating over all entries from recordOfRequiredParams, which RecordOfRequiredParams is derived from.
   */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- Object.fromEntries cannot preserve mapped type keys
  return Object.fromEntries(
    Object.entries(recordOfRequiredParams).map(
      ([key, requiredParams]) =>
        [
          key,
          {
            keyOfSlot: key,
            params: requiredParams,
            slot: create(deriveParams(requiredParams)),
          } satisfies SlotWithData<Sl, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedSlotParams, RequiredSlotParams, SlotWithData };
export { createSlotsWithData, deriveSlotParams };
