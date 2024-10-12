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
