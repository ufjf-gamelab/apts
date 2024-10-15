export enum Player {
  None = 0,
  X = 1,
  O = -1,
}
export type Action = number;
export type EncodedState = Action[][][];
export type ValidAction = boolean;

export default abstract class State {
  /* Getters */

  public abstract getValidActions(): ValidAction[];

  public abstract getPlayerAt(position: number): Player | null;

  /// Return three 2D-arrays. Each one represents a player. The value is 1 if the cell is occupied by the player, or 0 otherwise. The order of the matrices is: O, None, X.
  public abstract getEncodedState(): EncodedState;

  /* Setters */

  public abstract setPlayerAt(player: Player, position: number): void;

  public static setEncodedStatePosition({
    rowIndex,
    columnIndex,
    player,
    encodedState,
  }: {
    rowIndex: number;
    columnIndex: number;
    player: Player;
    encodedState: EncodedState;
  }) {
    const PLAYER_X_INDEX = 2;
    const PLAYER_O_INDEX = 0;
    const PLAYER_NONE_INDEX = 1;

    if (encodedState[rowIndex]?.[columnIndex]) {
      if (player === Player.X)
        encodedState[rowIndex][columnIndex][PLAYER_X_INDEX] = 1;
      else if (player === Player.O)
        encodedState[rowIndex][columnIndex][PLAYER_O_INDEX] = 1;
      else encodedState[rowIndex][columnIndex][PLAYER_NONE_INDEX] = 1;
    }
  }

  /* Methods */

  public abstract toString(): string;

  public abstract clone(): State;

  public abstract checkWin(action: Action): boolean;

  public abstract performAction(action: Action, player: Player): void;

  /// Return the state with the perspective changed, i.e. the opponent is now the player.
  public abstract changePerspective(
    currentPlayer: Player,
    opponentPlayer: Player,
  ): void;
}
