import { Integer } from "../types";
import Game from "./Game";

export type EncodedState = Pixel[][][];
export type Move = Integer;
export type Pixel = 0 | 1;
export type Player = Integer;
export type Position = Integer;
export type Slot = number;
export type ValidMove = boolean;

interface StateParams<G extends Game> {
  game: G;
  lastPlayer: Player | null;
  lastTakenMove: Move | null;
  slots: Slot[];
}

export default abstract class State<G extends Game> {
  protected readonly game: StateParams<G>["game"];
  protected readonly slots: StateParams<G>["slots"];

  // The player that played the last move, which resulted in the current state.
  protected readonly lastPlayer: StateParams<G>["lastPlayer"];
  protected readonly lastTakenMove: StateParams<G>["lastTakenMove"];

  constructor({ game, lastPlayer, lastTakenMove, slots }: StateParams<G>) {
    this.game = game;
    this.lastPlayer = lastPlayer ? lastPlayer : null;
    this.lastTakenMove = lastTakenMove ? lastTakenMove : null;
    const quantityOfPositions = this.game.getQuantityOfPositions();
    if (slots.length !== quantityOfPositions)
      throw Error(`The quantity of slots given must be ${quantityOfPositions}`);
    this.slots = slots;
  }

  /* Getters */

  public abstract getCurrentPlayer(): Player;

  /// Return three 2D-arrays. Each one represents a player. The value is 1 if the cell is occupied by the player, or 0 otherwise. The order of the matrices is: O, None, X.
  public abstract getEncodedState(): EncodedState;

  public getGame(): G {
    return this.game;
  }

  public abstract getSlotAt(position: Position): Player | null;

  public abstract getValidMoves(): ValidMove[];

  public abstract getWinner(move: Move): Player | null;

  /* Setters */

  public abstract setPlayerAtPosition(player: Player, position: Position): void;

  /* Methods */

  /// Return the state with the perspective changed relative to the informed player.
  public abstract changePerspective(player: Player): State<G>;

  public abstract clone(): State<G>;

  public abstract playMove(move: Move): State<G>;

  public abstract toString(): string;
}
