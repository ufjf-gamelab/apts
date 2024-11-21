import { Integer } from "src/types";
import Game, { GameParams } from "../../engine/Game/Game";
import { moves, PlayerKey, players } from "./constants";
import { TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";
import { TicTacToeState } from "./State";

interface TicTacToeGameParams
  extends GameParams<TicTacToePlayer, TicTacToeMove> {
  readonly quantityOfRows: Integer;
  readonly quantityOfColumns: Integer;
}

export default class TicTacToeGame extends Game<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState
> {
  private readonly quantityOfRows: TicTacToeGameParams["quantityOfRows"];
  private readonly quantityOfColumns: TicTacToeGameParams["quantityOfColumns"];

  constructor({ quantityOfColumns, quantityOfRows }: TicTacToeGameParams) {
    const quantityOfSlots: Integer = quantityOfColumns * quantityOfRows;
    super({
      moves,
      name: "Tic Tac Toe",
      players,
      quantityOfSlots,
    });

    this.quantityOfColumns = quantityOfColumns;
    this.quantityOfRows = quantityOfRows;
  }

  /* Getters */

  public getInitialState(): TicTacToeState {
    return new TicTacToeState({
      game: this,
      lastAssertedPosition: null,
      nextPlayerKey: PlayerKey.X,
    });
  }
}
