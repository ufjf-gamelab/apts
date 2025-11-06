import type { Integer } from "@repo/engine_core/types.js";

import type Game from "./Game.js";
import type Move from "./Move.js";
import type { IndexOfPlayer, default as Player } from "./Player.js";
import { type IndexOfSlot, default as Slot } from "./Slot.js";

type Points = number;

/// The score index players the same way as the array on game
type Score = readonly Points[];

/**
 * Parameters for constructing a {@link State}.
 *
 * @typeParam G - The game type, extending {@link Game}.
 * @typeParam S - The state type, extending {@link State}.
 * @typeParam M - The move type, extending {@link Move}.
 * @typeParam Sl - The slot type, extending {@link Slot}.
 * @typeParam P - The player type, extending {@link Player}.
 *
 * @property game - The game ({@link G}) instance associated with this state.
 * @property indexOfPlayer - The index ({@link IndexOfPlayer}) of the player ({@link P}) who is about to make a move.
 * @property score - The {@link Score} array, indexed by the index of a player ({@link IndexOfPlayer}), representing the current scores of all players.
 * @property slots - An array of slots ({@link Slot}) representing the current state of the game.
 */
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
    if (slots.length !== game.getQuantityOfSlots()) {
      throw new Error(
        `The number of slots (${
          slots.length
        }) does not match the quantity of slots determined by the game (${game.getQuantityOfSlots()}).`,
      );
    }

    this.game = game.clone();
    this.indexOfPlayer = indexOfPlayer;
    this.score = [...score];
    this.slots = slots.map(slot => slot.clone());
  }

  public static getScoreOfPlayer(
    indexOfPlayer: IndexOfPlayer,
    score: Score,
  ): Points {
    const scoreOfPlayer = score[indexOfPlayer];
    if (typeof scoreOfPlayer === "undefined") {
      throw new Error(`Invalid player index: ${indexOfPlayer}.`, {
        cause: new RangeError(
          `Index of player ${indexOfPlayer} is out of bounds for score array.`,
        ),
      });
    }
    return scoreOfPlayer;
  }

  public abstract changePerspective(indexOfPlayer: IndexOfPlayer): S;

  public abstract clone(): S;

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
    return [...this.score];
  }

  public getSlot(index: IndexOfSlot): null | Sl {
    return Slot.getSlot({
      indexOfSlot: index,
      slots: this.slots,
    });
  }

  public getSlots(): typeof this.slots {
    return this.slots.map(slot => slot.clone());
  }

  public abstract toString(): string;
}

export type { Points, Score, StateParams };
export { State as default };
