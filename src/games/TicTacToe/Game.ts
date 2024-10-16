import { Integer } from "src/types";
import Game from "../../engine/Game/Game";
import State from "../../engine/Game/State";
import { Player, Slot, TicTacToeState } from "./State";

interface TicTacToeGameParams {
  quantityOfRows: Integer;
  quantityOfColumns: Integer;
}

export default class TicTacToeGame extends Game {
  private readonly quantityOfRows: TicTacToeGameParams["quantityOfRows"];
  private readonly quantityOfColumns: TicTacToeGameParams["quantityOfColumns"];
  private readonly quantityOfPlayers = 2;

  constructor({ quantityOfColumns, quantityOfRows }: TicTacToeGameParams) {
    const quantityOfPositions: Integer = quantityOfColumns * quantityOfRows;
    super({
      name: "Tic Tac Toe",
      players: new Map([
        [Player.X, { name: "Player X", symbol: "X" }],
        [Player.O, { name: "Player O", symbol: "O" }],
      ]),
      quantityOfPositions,
    });
    this.quantityOfColumns = quantityOfColumns;
    this.quantityOfRows = quantityOfRows;
  }

  /* Getters */

  public getQuantityOfColumns(): Integer {
    return this.quantityOfColumns;
  }

  public getQuantityOfPlayers(): Integer {
    return this.quantityOfPlayers;
  }

  public getQuantityOfRows(): Integer {
    return this.quantityOfRows;
  }

  public getInitialState(): State<TicTacToeGame> {
    const slots = Array<Slot>(this.getQuantityOfPositions()).fill(Slot.Empty);
    return new TicTacToeState({
      game: this,
      lastPlayer: null,
      lastTakenMove: null,
      slots,
    });
  }

  public getInitialPlayer(): Player {
    return Player.X;
  }
}
