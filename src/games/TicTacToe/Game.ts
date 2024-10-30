import State from "src/engine/Game/State";
import { Integer } from "src/types";
import Game from "../../engine/Game/Game";
import { TicTacToeState } from "./State";
import { Player, Slot } from "./types";

export enum Outcome {
  Loss = -1,
  Draw = 0,
  Win = 1,
}

interface TicTacToeGameParams {
  quantityOfRows: Integer;
  quantityOfColumns: Integer;
}

export default class TicTacToeGame extends Game {
  private readonly quantityOfRows: TicTacToeGameParams["quantityOfRows"];
  private readonly quantityOfColumns: TicTacToeGameParams["quantityOfColumns"];
  private readonly quantityOfPlayers = 2;

  constructor({ quantityOfColumns, quantityOfRows }: TicTacToeGameParams) {
    const quantityOfSlots: Integer = quantityOfColumns * quantityOfRows;
    super({
      name: "Tic Tac Toe",
      players: new Map([
        [Player.X, { name: "Player X", symbol: "X" }],
        [Player.O, { name: "Player O", symbol: "O" }],
      ]),
      quantityOfSlots,
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

  public getInitialState(): State<this> {
    const slots = Array<Slot>(this.getQuantityOfSlots()).fill(Slot.Empty);
    const initialState = new TicTacToeState({
      game: this,
      lastPlayer: null,
      lastPoints: new Map([
        [Player.X, Outcome.Draw],
        [Player.O, Outcome.Draw],
      ]),
      lastTakenMove: null,
      slots,
    }) as unknown as State<this>;
    return initialState;
  }

  public getInitialPlayer(): Player {
    return Player.X;
  }
}
