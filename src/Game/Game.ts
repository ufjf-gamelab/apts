import { GameName } from "../types";
import State, { Action, Player } from "./State";

export enum Outcome {
    Win = 1,
    Loss = 0,
}

export interface ActionOutcome {
    isTerminal: boolean;
    value: number;
}

export default abstract class Game {
    /* Getters */

    public abstract getName(): GameName;

    public abstract getRowCount(): number;

    public abstract getColumnCount(): number;

    public abstract getActionSize(): number;

    public abstract getInitialState(): State;

    public abstract getPlayerName(player: Player): string;

    public abstract getOpponent(player: Player): Player;

    /// Return the outcome value, considering that the opponent is the one playing.
    public abstract getOpponentValue(
        value: ActionOutcome["value"],
    ): ActionOutcome["value"];

    /* Static methods */

    /// Return wether the game is over and the player has won.
    public static getActionOutcome(
        state: State,
        action: Action | null,
    ): ActionOutcome {
        // Check if the player has won
        if (action === null ? false : state.checkWin(action))
            return { isTerminal: true, value: Outcome.Win };

        // Check if the game is a draw
        if (state.getValidActions().some(validAction => validAction) === false)
            return { isTerminal: true, value: Outcome.Loss };

        // No terminal state
        return { isTerminal: false, value: Outcome.Loss };
    }
}
