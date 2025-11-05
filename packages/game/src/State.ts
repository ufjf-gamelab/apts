import type { Integer } from "@repo/engine_core/types.js";

import { type Game } from "./Game.js";
import type { Move } from "./Move.js";
import type { IndexOfPlayer } from "./Player.js";
import type { Score } from "./Score.js";
import { type IndexOfSlot, Slot } from "./Slot.js";

type IndexOfState = Integer;

interface StateParams<M extends Move, S extends State<M, Sl>, Sl extends Slot> {
  readonly game: Game<M, S, Sl>;
  readonly indexOfPlayer: IndexOfPlayer;
  readonly score: Score;
  readonly slots: readonly Sl[];
}

abstract class State<M extends Move, Sl extends Slot> {
  private readonly game: StateParams<M, State<M, Sl>, Sl>["game"];
  private readonly indexOfPlayer: StateParams<
    M,
    State<M, Sl>,
    Sl
  >["indexOfPlayer"];
  private readonly score: StateParams<M, State<M, Sl>, Sl>["score"];
  private readonly slots: StateParams<M, State<M, Sl>, Sl>["slots"];

  constructor({
    game,
    indexOfPlayer,
    score,
    slots,
  }: StateParams<M, State<M, Sl>, Sl>) {
    if (slots.length !== game.getQuantityOfSlots()) {
      throw new Error(
        `The number of slots (${
          slots.length
        }) does not match the quantity of slots determined by the game (${game.getQuantityOfSlots()}).`,
      );
    }

    this.game = game.clone();
    this.indexOfPlayer = indexOfPlayer;
    this.score = score.clone();
    this.slots = slots.map(slot => slot.clone());
  }

  public abstract clone(): this;

  public getGame(): typeof this.game {
    return this.game.clone();
  }

  public getIndexOfPlayer(): typeof this.indexOfPlayer {
    return this.indexOfPlayer;
  }

  public getPointsOfPlayer({
    indexOfPlayer,
  }: {
    indexOfPlayer: IndexOfPlayer;
  }): ReturnType<Score["getPointsOfPlayer"]> {
    return this.score.getPointsOfPlayer({ indexOfPlayer });
  }

  public getQuantityOfSlots(): Integer {
    return this.game.getQuantityOfSlots();
  }

  public getScore(): typeof this.score {
    return this.score.clone();
  }

  public getSlot({
    indexOfSlot,
  }: {
    indexOfSlot: IndexOfSlot;
  }): ReturnType<typeof Slot.getSlot<Sl>> {
    return (
      Slot.getSlot({
        indexOfSlot,
        slots: this.slots,
      })?.clone() ?? null
    );
  }

  public getSlots(): typeof this.slots {
    return this.slots.map(slot => slot.clone());
  }
}

export type { IndexOfState, StateParams };
export { State };
