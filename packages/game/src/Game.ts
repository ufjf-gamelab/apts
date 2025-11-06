import type { Integer } from "@repo/engine_core/types.js";

import type { IndexOfMove, Move } from "./Move.js";
import type { IndexOfPlayer, Player } from "./Player.js";
import type { Score } from "./Score.js";
import type { Slot } from "./Slot.js";
import type { State } from "./State.js";

interface GameParams<M extends Move<M>, P extends Player<P>> {
  readonly moves: readonly M[];
  readonly name: string;
  readonly players: readonly P[];
  readonly quantityOfSlots: Integer;
}

type IndexOfGame = Integer;

abstract class Game<
  G extends Game<G, M, P, S, Sc, Sl>,
  M extends Move<M>,
  P extends Player<P>,
  S extends State<G, M, P, S, Sc, Sl>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
> {
  private readonly moves: GameParams<M, P>["moves"];
  private readonly name: GameParams<M, P>["name"];
  private readonly players: GameParams<M, P>["players"];
  private readonly quantityOfSlots: GameParams<M, P>["quantityOfSlots"];

  public constructor({
    moves,
    name,
    players,
    quantityOfSlots,
  }: GameParams<M, P>) {
    this.moves = moves.map(move => move.clone());
    this.name = name;
    this.players = players.map(player => player.clone());
    this.quantityOfSlots = quantityOfSlots;
  }

  public abstract clone(): G;

  public abstract constructInitialState(): S;

  public abstract getIndexOfNextPlayer({ state }: { state: S }): IndexOfPlayer;

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

  public getMoves(): typeof this.moves {
    return this.moves.map(move => move.clone());
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

  public getPlayers(): typeof this.players {
    return this.players.map(player => player.clone());
  }

  public getQuantityOfPlayers(): typeof this.players.length {
    return this.players.length;
  }

  public getQuantityOfSlots(): typeof this.quantityOfSlots {
    return this.quantityOfSlots;
  }

  public abstract getValidMoves({
    state,
  }: {
    state: S;
  }): ReadonlyMap<IndexOfMove, M>;

  public abstract isFinal({ state }: { state: S }): boolean;

  public abstract play({
    indexOfMove,
    state,
  }: {
    indexOfMove: IndexOfMove;
    state: S;
  }): S;
}

export type { GameParams, IndexOfGame };
export { Game };
