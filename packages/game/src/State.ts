import type { Integer } from "@repo/engine_core/types.js";

import type { Game } from "./Game.js";
import type { Move } from "./Move.js";
import type { IndexOfPlayer, Player } from "./Player.js";
import type { Score } from "./Score.js";

import { type IndexOfSlot, Slot } from "./Slot.js";

type IndexOfState = Integer;

interface StateParams<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
> {
  readonly game: G;
  readonly indexOfPlayer: IndexOfPlayer;
  readonly score: Sc;
  readonly slots: readonly Sl[];
}

abstract class State<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
> {
  private readonly game: StateParams<G, M, P, S, Sc, Sl>["game"];
  private readonly indexOfPlayer: StateParams<
    G,
    M,
    P,
    S,
    Sc,
    Sl
  >["indexOfPlayer"];
  private readonly score: StateParams<G, M, P, S, Sc, Sl>["score"];
  private readonly slots: StateParams<G, M, P, S, Sc, Sl>["slots"];

  public constructor({
    game,
    indexOfPlayer,
    score,
    slots,
  }: StateParams<G, M, P, S, Sc, Sl>) {
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

  public abstract clone(): S;

  public getGame() {
    return this.game.clone();
  }

  public getIndexOfPlayer() {
    return this.indexOfPlayer;
  }

  public getPointsOfPlayer({
    indexOfPlayer,
  }: {
    indexOfPlayer: IndexOfPlayer;
  }) {
    return this.score.getPointsOfPlayer({ indexOfPlayer });
  }

  public getQuantityOfSlots() {
    return this.game.getQuantityOfSlots();
  }

  public getScore() {
    return this.score.clone();
  }

  public getSlot({ indexOfSlot }: { indexOfSlot: IndexOfSlot }) {
    return (
      Slot.getSlot({
        indexOfSlot,
        slots: this.slots,
      })?.clone() ?? null
    );
  }

  public getSlots() {
    return this.slots.map(slot => slot.clone());
  }
}

export type { IndexOfState, StateParams };
export { State };
