import type { Integer } from "../types.js";
import type Content from "./Content.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type { default as Player, PlayerKey } from "./Player.js";

export type Points = number;
export type Score = Map<PlayerKey, Points>;

export type Slot<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> = Content<P, M, S, G> | null;

/// Index of a slot in the state.
export type SlotKey = Integer;

export interface StateParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly game: G;
  readonly playerKey: PlayerKey;
  readonly slots: Slot<P, M, S, G>[];
}

export default abstract class State<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly game: StateParams<P, M, S, G>["game"];
  private readonly playerKey: StateParams<P, M, S, G>["playerKey"];
  private readonly score: Score;
  private readonly slots: StateParams<P, M, S, G>["slots"];

  constructor({ game, playerKey, slots }: StateParams<P, M, S, G>) {
    this.game = game.clone();
    this.slots = [...slots];
    this.playerKey = playerKey;
    this.score = new Map();
    this.score = this.initializeScore();
  }

  public abstract changePerspective(playerKey: PlayerKey): S;

  public abstract clone(): S;

  public getGame(): typeof this.game {
    return this.game.clone();
  }

  public getPlayerKey(): StateParams<P, M, S, G>["playerKey"] {
    return this.playerKey;
  }

  public getScore(): typeof this.score {
    return new Map(this.score);
  }

  public getSlot(index: SlotKey): null | Slot<P, M, S, G> {
    const slot = this.slots[index];
    if (typeof slot === "undefined") {
      return null;
    }
    return slot;
  }

  public getSlots(): StateParams<P, M, S, G>["slots"] {
    return [...this.slots.map(slot => slot?.clone() ?? null)];
  }

  public abstract isFinal(): boolean;

  public abstract toString(): string;

  protected getQuantityOfSlots(): Integer {
    return this.slots.length;
  }

  protected abstract initializeScore(): Score;
}
