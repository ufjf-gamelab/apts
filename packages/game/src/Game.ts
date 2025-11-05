import type { Integer } from "@repo/engine_core/types.js";

import type { IndexOfMove, Move } from "./Move.js";
import type { IndexOfPlayer, Player } from "./Player.js";
import type { Slot } from "./Slot.js";
import type { State } from "./State.js";

interface GameParams<M extends Move> {
  readonly moves: readonly M[];
  readonly name: string;
  readonly players: readonly Player[];
  readonly quantityOfSlots: Integer;
}

type IndexOfGame = Integer;

abstract class Game<M extends Move, S extends State<M, Sl>, Sl extends Slot> {
  private readonly moves: GameParams<M>["moves"];
  private readonly name: GameParams<M>["name"];
  private readonly players: GameParams<M>["players"];
  private readonly quantityOfSlots: GameParams<M>["quantityOfSlots"];

  constructor({ moves, name, players, quantityOfSlots }: GameParams<M>) {
    this.moves = moves.map(move => move.clone());
    this.name = name;
    this.players = players.map(player => player.clone());
    this.quantityOfSlots = quantityOfSlots;
  }

  public abstract clone(): this;

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
