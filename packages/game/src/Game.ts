import type { Integer } from "@repo/engine_core/types.js";

import type { IndexOfMove, Move } from "./Move.js";
import type { IndexOfPlayer, Player } from "./Player.js";
import type { State } from "./State.js";

interface GameParams {
  readonly moves: readonly Move[];
  readonly name: string;
  readonly players: readonly Player[];
  readonly quantityOfSlots: Integer;
}

abstract class Game {
  private readonly moves: GameParams["moves"];
  private readonly name: GameParams["name"];
  private readonly players: GameParams["players"];
  private readonly quantityOfSlots: GameParams["quantityOfSlots"];

  constructor({ moves, name, players, quantityOfSlots }: GameParams) {
    this.moves = moves.map(move => move.clone());
    this.name = name;
    this.players = players.map(player => player.clone());
    this.quantityOfSlots = quantityOfSlots;
  }

  public abstract clone(): this;

  public abstract getIndexOfNextPlayer(state: State): IndexOfPlayer;
  public abstract getInitialState(): State;

  public getMove(indexOfMove: IndexOfMove): (typeof this.moves)[number] | null {
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

  public getPlayer(
    indexOfPlayer: IndexOfPlayer,
  ): (typeof this.players)[number] | null {
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

  public abstract getValidMoves(state: State): readonly [IndexOfMove, Move][];

  public abstract isFinal(state: State): boolean;

  public abstract play(indexOfMove: IndexOfMove, state: State): State;
}

export type { GameParams };
export { Game };
