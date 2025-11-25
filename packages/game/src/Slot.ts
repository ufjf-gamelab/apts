import type { Integer } from "@repo/engine_core/types.js";

type IndexOfSlot = Integer;

type ParamsOfSlot = object;

abstract class Slot<Sl extends Slot<Sl>> {
  public static getSlot<Sl extends Slot<Sl>>({
    indexOfSlot,
    slots,
  }: {
    indexOfSlot: IndexOfSlot;
    slots: readonly Sl[];
  }): null | Sl {
    const slot = slots[indexOfSlot];
    if (typeof slot === "undefined") {
      return null;
    }
    return slot;
  }

  public abstract clone(): Sl;
}

export type { IndexOfSlot, ParamsOfSlot };
export { Slot };
