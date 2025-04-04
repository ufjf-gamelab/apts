import type { Integer } from "../types.js";
import type Game from "./Game.js";
import type Move from "./Move.js";
import type { default as Player, PlayerKey } from "./Player.js";

export type Points = number;
export type Score = Map<PlayerKey, Points>;

// Content of a slot in the state.
export type Slot = Integer;
// Index of a slot in the state.
export type SlotKey = Integer;

export interface StateParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly game: G;
  readonly playerKey: PlayerKey;
  readonly slots: Slot[];
}

export default abstract class State<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly game: StateParams<P, M, S, G>["game"];
  private readonly playerKey: StateParams<P, M, S, G>["playerKey"];
  private readonly score: Map<P, Points>;
  private readonly slots: StateParams<P, M, S, G>["slots"];

  constructor({ game, playerKey, slots }: StateParams<P, M, S, G>) {
    this.game = game.clone();
    this.slots = [...slots];
    this.playerKey = playerKey;
    this.score = new Map();
    this.initializeScore();
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

  public getSlot(index: SlotKey): null | Slot {
    return this.slots[index] ?? null;
  }

  public getSlots(): StateParams<P, M, S, G>["slots"] {
    return [...this.slots];
  }

  public abstract isFinal(): boolean;

  public abstract toString(): string;

  protected getQuantityOfSlots(): Integer {
    return this.slots.length;
  }
  protected abstract initializeScore(): void;

  protected setScore(playerKey: PlayerKey, points: Points): void {
    const player = this.game.getPlayer(playerKey);
    if (player === null) {
      throw new Error(`Player with key ${playerKey} not found.`);
    } else {
      this.score.set(player, points);
    }
  }
}
