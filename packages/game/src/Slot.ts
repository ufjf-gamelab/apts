import type { Integer } from "@repo/engine_core/types.js";

type IndexOfSlot = Integer;

type SlotParams = object;

abstract class Slot {
  public static getSlot<Sl extends Slot>({
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

  public abstract clone(): this;
}

export type { IndexOfSlot, SlotParams };
export { Slot };
