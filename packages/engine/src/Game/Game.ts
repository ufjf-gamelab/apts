import type { Integer } from "../types.js";
import type { default as Content, ContentKey } from "./Content.js";
import type { IndexOfMove, default as Move, Moves } from "./Move.js";
import type { default as Player, PlayerKey } from "./Player.js";
import type State from "./State.js";

enum Pixel {
  Off = 0,
  On = 1,
}

type Channel = Integer;

type Contents<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> = Map<ContentKey, Content<P, M, S, G>>;

type EncodedState = Pixel[][][];

interface GameParams<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  readonly contentsList: Content<P, M, S, G>[];
  readonly moves: Moves<P, M, S, G>;
  readonly name: string;
  readonly playersList: P[];
  readonly quantityOfSlots: Integer;
}

type Players<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> = Map<PlayerKey, P>;

abstract class Game<
  P extends Player<P, M, S, G>,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  private readonly contents: Contents<P, M, S, G>;
  private readonly moves: GameParams<P, M, S, G>["moves"];
  private readonly name: GameParams<P, M, S, G>["name"];
  private readonly players: Players<P, M, S, G>;
  private readonly quantityOfSlots: GameParams<P, M, S, G>["quantityOfSlots"];

  constructor({
    contentsList,
    moves,
    name,
    playersList,
    quantityOfSlots,
  }: GameParams<P, M, S, G>) {
    this.moves = new Array(...moves);
    this.name = name;
    this.contents = new Map(
      contentsList.map((content, index) => [index, content.clone()]),
    );
    this.players = new Map(
      playersList.map((player, index) => [index, player.clone()]),
    );
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

  public abstract getNextPlayerKey(state: S): PlayerKey;

  public getPlayer(playerKey: PlayerKey): null | P {
    const player = this.players.get(playerKey);
    if (typeof player === "undefined") {
      return null;
    }
    return player.clone();
  }

  public getPlayers(): typeof this.players {
    return new Map(
      Array.from(this.players.entries()).map(([playerKey, player]) => [
        playerKey,
        player.clone(),
      ]),
    );
  }

  public getQuantityOfMoves(): Integer {
    return this.moves.length;
  }

  public abstract getValidMoves({ state }: { state: S }): Moves<P, M, S, G>;

  public abstract play(move: M, state: S): S;

  protected getQuantityOfSlots(): typeof this.quantityOfSlots {
    return this.quantityOfSlots;
  }
}

export type { Contents, GameParams, Moves, Players };
export { Game as default };
