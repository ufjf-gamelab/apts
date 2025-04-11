import type { Integer } from "../types.js";
import type { IndexOfMove, default as Move } from "./Move.js";
import type { IndexOfPlayer, default as Player } from "./Player.js";
import type Slot from "./Slot.js";
import type State from "./State.js";

enum Pixel {
  Off = 0,
  On = 1,
}

type Channel = Integer;

type EncodedState = Pixel[][][];

interface GameParams<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  readonly moves: readonly M[];
  readonly name: string;
  readonly players: readonly P[];
  readonly quantityOfSlots: Integer;
}

abstract class Game<
  G extends Game<G, S, M, Sl, P>,
  S extends State<G, S, M, Sl, P>,
  M extends Move<G, S, M, Sl, P>,
  Sl extends Slot<G, S, M, Sl, P>,
  P extends Player<G, S, M, Sl, P>,
> {
  private readonly moves: GameParams<G, S, M, Sl, P>["moves"];
  private readonly name: GameParams<G, S, M, Sl, P>["name"];
  private readonly players: GameParams<G, S, M, Sl, P>["players"];
  private readonly quantityOfSlots: GameParams<
    G,
    S,
    M,
    Sl,
    P
  >["quantityOfSlots"];

  constructor({
    moves,
    name,
    players,
    quantityOfSlots,
  }: GameParams<G, S, M, Sl, P>) {
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

  public getQuantityOfPlayers(): Integer {
    return this.players.length;
  }

  public getQuantityOfSlots(): typeof this.quantityOfSlots {
    return this.quantityOfSlots;
  }

  public abstract getValidMoves({ state }: { state: S }): readonly M[];

  public abstract play(move: M, state: S): S;
}

export type { GameParams };
export { Game as default };
