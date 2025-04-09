import type { Integer } from "../types.js";
import type { IndexOfMove, default as Move, Moves } from "./Move.js";
import type { IndexOfPlayer, default as Player, Players } from "./Player.js";
import type Slot from "./Slot.js";
import type State from "./State.js";

enum Pixel {
  Off = 0,
  On = 1,
}

type Channel = Integer;

type EncodedState = Pixel[][][];

interface GameParams<
  G extends Game<P, M, S, G>,
  S extends State<P, M, S, G>,
  M extends Move<P, M, S, G>,
  Sl extends Slot<P, M, S, G>,
  P extends Player<P, M, S, G>,
> {
  readonly moves: Moves<P, M, S, G>;
  readonly name: string;
  readonly players: Players<P, M, S, G>;
  readonly quantityOfSlots: Integer;
}

abstract class Game<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly moves: GameParams<P, M, S, G>["moves"];
  private readonly name: GameParams<P, M, S, G>["name"];
  private readonly players: GameParams<P, M, S, G>["players"];
  private readonly quantityOfSlots: GameParams<P, M, S, G>["quantityOfSlots"];

  constructor({
    moves,
    name,
    players,
    quantityOfSlots,
  }: GameParams<P, M, S, G>) {
    this.moves = moves.map(move => move.clone());
    this.name = name;
    this.players = players.map(player => player.clone());
    this.quantityOfSlots = quantityOfSlots;
  }

  protected static setSlotInEncodedState({
    channel,
    columnIndex,
    encodedState,
    rowIndex,
  }: {
    channel: Channel;
    columnIndex: Integer;
    encodedState: EncodedState;
    rowIndex: Integer;
  }): void {
    const row = encodedState[rowIndex];
    if (typeof row === "undefined") {
      return;
    }

    const column = row[columnIndex];
    if (typeof column === "undefined") {
      return;
    }

    column[channel] = Pixel.On;
  }

  public abstract clone(): G;

  public abstract getEndOfGameMessage(state: S): string;

  public abstract getIndexOfNextPlayer(state: S): IndexOfPlayer;

  public abstract getInitialState(): S;

  public getMove(index: IndexOfMove): M | null {
    const move = this.moves[index];
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

  public getPlayer(playerIndex: IndexOfPlayer): null | P {
    const player = this.players[playerIndex];
    if (typeof player === "undefined") {
      return null;
    }
    return player.clone();
  }

  public getPlayers(): typeof this.players {
    return this.players.map(player => player.clone());
  }

  public getQuantityOfMoves(): Integer {
    return this.moves.length;
  }

  public abstract getValidMoves({ state }: { state: S }): Moves<P, M, S, G>;

  public abstract play(move: M, state: S): S;

  protected getQuantityOfPlayers(): Integer {
    return this.players.length;
  }

  protected getQuantityOfSlots(): typeof this.quantityOfSlots {
    return this.quantityOfSlots;
  }
}

export type { GameParams };
export { Game as default };
