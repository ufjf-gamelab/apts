import { type Slot } from "../Slot.js";

type DerivedParamsOfSlot = RequiredParamsOfSlot;

type RequiredParamsOfSlot = object;

interface SlotWithData<
  Sl extends Slot<Sl>,
  Params extends RequiredParamsOfSlot = RequiredParamsOfSlot,
> {
  keyOfSlot: string;
  params: Params;
  slot: Sl;
}

const deriveParamsOfSlot = (_: RequiredParamsOfSlot): DerivedParamsOfSlot => _;

const createSlotsWithData = <
  Sl extends Slot<Sl>,
  RequiredParams extends RequiredParamsOfSlot,
  DerivedParams extends DerivedParamsOfSlot,
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
      ([keyOfSlot, requiredParams]) =>
        [
          keyOfSlot,
          {
            keyOfSlot,
            params: requiredParams,
            slot: create(deriveParams(requiredParams)),
          } satisfies SlotWithData<Sl, RequiredParams>,
        ] as const,
    ),
  ) as ResultType;
};

export type { DerivedParamsOfSlot, RequiredParamsOfSlot, SlotWithData };
export { createSlotsWithData, deriveParamsOfSlot };
