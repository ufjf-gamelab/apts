import type { Integer } from "@repo/engine_core/types.js";

import type { IndexOfMove, Move } from "./Move.js";
import type { IndexOfPlayer, Player } from "./Player.js";
import type { Score } from "./Score.js";
import type { Slot } from "./Slot.js";
import type { State } from "./State.js";

type IndexOfGame = Integer;

interface ParamsOfGame<
  M extends Move<M>,
  P extends Player<P>,
  Sl extends Slot<Sl>,
> {
  readonly moves: readonly M[];
  readonly name: string;
  readonly players: readonly P[];
  readonly slots: readonly Sl[];
}

abstract class Game<
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
> {
  private readonly moves: ParamsOfGame<M, P, Sl>["moves"];
  private readonly name: ParamsOfGame<M, P, Sl>["name"];
  private readonly players: ParamsOfGame<M, P, Sl>["players"];
  private readonly slots: ParamsOfGame<M, P, Sl>["slots"];

  public constructor({ moves, name, players, slots }: ParamsOfGame<M, P, Sl>) {
    this.moves = moves.map((move) => move.clone());
    this.name = name;
    this.players = players.map((player) => player.clone());
    this.slots = slots.map((slot) => slot.clone());
  }

  public abstract clone(): G;

  public abstract constructInitialState(): St;

  public abstract getIndexesOfValidMoves({
    state,
  }: {
    state: St;
  }): ReadonlySet<IndexOfMove>;

  public abstract getIndexOfNextPlayer({ state }: { state: St }): IndexOfPlayer;

  public getMove({
    indexOfMove,
  }: {
    indexOfMove: IndexOfMove;
  }): (typeof this.moves)[number] | null {
    const move = this.moves[indexOfMove];
    if (typeof move === "undefined") {
      return null;
    }
    return move.clone();
  }

  public getMoves() {
    return this.moves.map((move) => move.clone());
  }

  public getName(): typeof this.name {
    return this.name;
  }

  public getPlayer({
    indexOfPlayer,
  }: {
    indexOfPlayer: IndexOfPlayer;
  }): (typeof this.players)[number] | null {
    const player = this.players[indexOfPlayer];
    if (typeof player === "undefined") {
      return null;
    }
    return player.clone();
  }
  public getPlayers() {
    return this.players.map((player) => player.clone());
  }

  public getQuantityOfPlayers() {
    return this.players.length;
  }

  public getQuantityOfSlots() {
    return this.slots.length;
  }

  public abstract isFinal({ state }: { state: St }): boolean;

  public abstract play({
    indexOfMove,
    state,
  }: {
    indexOfMove: IndexOfMove;
    state: St;
  }): St;

  protected getSlots() {
    return this.slots.map((slot) => slot.clone());
  }
}

export type { IndexOfGame, ParamsOfGame };
export { Game };
