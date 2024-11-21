import State, { Position, StateParams } from "../../engine/Game/State";
import TicTacToeGame from "./Game";
import { TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";

interface TicTacToeStateParams
  extends StateParams<
    TicTacToePlayer,
    TicTacToeMove,
    TicTacToeState,
    TicTacToeGame
  > {
  lastAssertedPosition: Position | null;
}

export class TicTacToeState extends State<TicTacToePlayer, TicTacToeMove> {
  private lastAssertedPosition: TicTacToeStateParams["lastAssertedPosition"];

  constructor({
    game,
    nextPlayerKey,
    lastAssertedPosition,
  }: TicTacToeStateParams) {
    super({
      game,
      nextPlayerKey,
    });
    this.lastAssertedPosition = lastAssertedPosition;
  }

  /* Getters */

  public getLastAssertedPosition(): Position | null {
    return this.lastAssertedPosition;
  }

  /* Methods */

  public toString(): string {
    return `TicTacToeState`;
  }
}
