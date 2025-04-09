import type { Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type { IndexOfPlayer, default as Player } from "./Player.js";
import { type default as Slot, type Slots } from "./Slot.js";

type IndexOfSlot = Integer;

type Points = number;

/// The score index players the same way as the array on game
type Score = readonly Points[];

interface StateParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly game: G;
  readonly indexOfPlayer: IndexOfPlayer;
  readonly score: Score;
  readonly slots: Slots<P, M, S, G>;
}

abstract class State<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly game: StateParams<P, M, S, G>["game"];
  private readonly indexOfPlayer: StateParams<P, M, S, G>["indexOfPlayer"];
  private readonly score: StateParams<P, M, S, G>["score"];
  private readonly slots: StateParams<P, M, S, G>["slots"];

  constructor({ game, indexOfPlayer, score, slots }: StateParams<P, M, S, G>) {
    this.game = game.clone();
    this.indexOfPlayer = indexOfPlayer;
    this.score = [...score];
    this.slots = slots.map(slot => slot.clone());
  }

  public abstract changePerspective(indexOfPlayer: IndexOfPlayer): S;

  public abstract clone(): S;

  public getGame(): typeof this.game {
    return this.game.clone();
  }

  public getIndexOfPlayer(): typeof this.indexOfPlayer {
    return this.indexOfPlayer;
  }

  public getScore(): typeof this.score {
    return [...this.score];
  }

  public getSlot(index: IndexOfSlot): null | Slot<P, M, S, G> {
    const slot = this.slots[index];
    if (typeof slot === "undefined") {
      return null;
    }
    return slot;
  }

  public getSlots(): typeof this.slots {
    return this.slots.map(slot => slot.clone());
  }

  public abstract isFinal(): boolean;

  public abstract toString(): string;

  protected getQuantityOfSlots(): Integer {
    return this.slots.length;
  }
}

export type { Score, StateParams };
export { State as default };
