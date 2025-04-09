import type { Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type { IndexOfPlayer, default as Player } from "./Player.js";
import type { default as Slot } from "./Slot.js";

type IndexOfSlot = Integer;

type Points = number;

/// The score index players the same way as the array on game
type Score = readonly Points[];

interface StateParams<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  readonly game: G;
  readonly indexOfPlayer: IndexOfPlayer;
  readonly score: Score;
  readonly slots: readonly Sl[];
}

abstract class State<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  private readonly game: StateParams<G, S, M, Sl, P>["game"];
  private readonly indexOfPlayer: StateParams<G, S, M, Sl, P>["indexOfPlayer"];
  private readonly score: StateParams<G, S, M, Sl, P>["score"];
  private readonly slots: StateParams<G, S, M, Sl, P>["slots"];

  constructor({
    game,
    indexOfPlayer,
    score,
    slots,
  }: StateParams<G, S, M, Sl, P>) {
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

  public getSlot(index: IndexOfSlot): null | Sl {
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
