import State, { StateParams } from "../../engine/Game/State";
import TicTacToeGame from "./Game";
import { Position, TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";

interface TicTacToeStateParams
  extends StateParams<
    TicTacToePlayer,
    TicTacToeMove,
    TicTacToeState,
    TicTacToeGame
  > {
  readonly lastAssertedPosition: Position | null;
}

export class TicTacToeState extends State<TicTacToePlayer, TicTacToeMove> {
  public readonly lastAssertedPosition: TicTacToeStateParams["lastAssertedPosition"];

  constructor({
    game,
    slots,
    nextPlayerKey,
    lastAssertedPosition,
  }: TicTacToeStateParams) {
    super({
      game,
      nextPlayerKey,
      slots,
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
