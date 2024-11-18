import State from "src/engine/Game/State";
import { Integer } from "src/types";
import Game from "../../engine/Game/Game";
import { TicTacToeMove } from "./Move";
import { TicTacToeState } from "./State";
import { Player, Position, Slot } from "./types";

export enum Outcome {
  Loss = -1,
  Draw = 0,
  Win = 1,
}

interface TicTacToeGameParams {
  quantityOfRows: Integer;
  quantityOfColumns: Integer;
}

const moves = [
  new TicTacToeMove({
    description: "Northwest",
    position: Position.Northwest,
    title: "NW",
  }),
  new TicTacToeMove({
    description: "North",
    position: Position.North,
    title: "N",
  }),
  new TicTacToeMove({
    description: "Northeast",
    position: Position.Northeast,
    title: "NE",
  }),
  new TicTacToeMove({
    description: "West",
    position: Position.West,
    title: "W",
  }),
  new TicTacToeMove({
    description: "Center",
    position: Position.Center,
    title: "C",
  }),
  new TicTacToeMove({
    description: "East",
    position: Position.East,
    title: "E",
  }),
  new TicTacToeMove({
    description: "Southwest",
    position: Position.Southwest,
    title: "SW",
  }),
  new TicTacToeMove({
    description: "South",
    position: Position.South,
    title: "S",
  }),
  new TicTacToeMove({
    description: "Southeast",
    position: Position.Southeast,
    title: "SE",
  }),
];

export default class TicTacToeGame extends Game<TicTacToeMove> {
  private readonly quantityOfRows: TicTacToeGameParams["quantityOfRows"];
  private readonly quantityOfColumns: TicTacToeGameParams["quantityOfColumns"];

  constructor({ quantityOfColumns, quantityOfRows }: TicTacToeGameParams) {
    const quantityOfSlots: Integer = quantityOfColumns * quantityOfRows;

    super({
      moves,
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

  public getQuantityOfRows(): Integer {
    return this.quantityOfRows;
  }

  public getInitialState(): State<this, TicTacToeMove> {
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
    }) as unknown as State<this, TicTacToeMove>;
    return initialState;
  }

  public getInitialPlayer(): Player {
    return Player.X;
  }
}
