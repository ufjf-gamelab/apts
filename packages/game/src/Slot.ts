import type { Integer } from "@repo/engine_core/types.js";

type IndexOfSlot = Integer;

interface Slot {
  clone: () => this;
  readonly content: object;
  getSlot(indexOfSlot: IndexOfSlot): null | this;
}

export type { IndexOfSlot, Slot };
