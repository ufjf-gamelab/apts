import Game from "./Game";

export type Action = number;
export type EncodedState = Action[][][];
export type Player = number;
export type ValidAction = boolean;

export default abstract class State<G extends Game> {
  protected readonly game: G;

  constructor(game: G) {
    this.game = game;
  }

  /* Getters */

  public abstract getValidActions(): ValidAction[];

  public abstract getPlayerAt(position: number): Player | null;

  /// Return three 2D-arrays. Each one represents a player. The value is 1 if the cell is occupied by the player, or 0 otherwise. The order of the matrices is: O, None, X.
  public abstract getEncodedState(): EncodedState;

  /* Setters */

  public abstract setPlayerAt(player: Player, position: number): void;

  public abstract setPositionInEncodedState({
    rowIndex,
    columnIndex,
    player,
    encodedState,
  }: {
    rowIndex: number;
    columnIndex: number;
    player: Player;
    encodedState: EncodedState;
  }): void;

  /* Methods */

  public abstract toString(): string;

  public abstract clone(): State<G>;

  public abstract checkWin(action: Action): boolean;

  public abstract performAction(action: Action, player: Player): void;

  /// Return the state with the perspective changed, i.e. the opponent is now the player.
  public abstract changePerspective(
    currentPlayer: Player,
    opponentPlayer: Player,
  ): void;
}
