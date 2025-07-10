import type { Integer } from "@repo/engine_core/types.js";

import type Game from "./Game.js";
import type { IndexOfPlayer } from "./Player.js";
import { type Points, default as Score } from "./Score.js";
import { type IndexOfSlot, default as Slot } from "./Slot.js";

interface StateParams {
  readonly game: Game;
  readonly indexOfPlayer: IndexOfPlayer;
  readonly score: Score;
  readonly slots: readonly Slot[];
}

abstract class State {
  private readonly game: StateParams["game"];
  private readonly indexOfPlayer: StateParams["indexOfPlayer"];
  private readonly score: StateParams["score"];
  private readonly slots: StateParams["slots"];

  constructor({ game, indexOfPlayer, score, slots }: StateParams) {
    if (slots.length !== game.getQuantityOfSlots()) {
      throw new Error(
        `The number of slots (${
          slots.length
        }) does not match the quantity of slots determined by the game (${game.getQuantityOfSlots()}).`,
      );
    }

    this.game = game.clone();
    this.indexOfPlayer = indexOfPlayer;
    this.score = new Map(score);
    this.slots = slots.map(slot => slot.clone());
  }

  public abstract clone(): this;

  public getGame(): typeof this.game {
    return this.game.clone();
  }

  public getIndexOfPlayer(): typeof this.indexOfPlayer {
    return this.indexOfPlayer;
  }

  public getQuantityOfSlots(): Integer {
    return this.slots.length;
  }

  public getScore(): typeof this.score {
    return new Map(this.score);
  }

  public getScoreOfPlayer(indexOfPlayer: IndexOfPlayer): Points {
    return Score.getScoreOfPlayer(indexOfPlayer, this.score);
  }

  public getSlot(indexOfSlot: IndexOfSlot): (typeof this.slots)[number] | null {
    return Slot.getSlot(indexOfSlot, this.slots);
  }

  public getSlots(): typeof this.slots {
    return this.slots.map(slot => slot.clone());
  }
}

export type { State, StateParams };
