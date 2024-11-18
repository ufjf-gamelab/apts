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

const moves = new Map<Integer, TicTacToeMove>([
  [
    Position.Northwest,
    new TicTacToeMove({
      description: "Northwest",
      title: "NW",
    }),
  ],
  [
    Position.North,
    new TicTacToeMove({
      description: "North",
      title: "N",
    }),
  ],
  [
    Position.Northeast,
    new TicTacToeMove({
      description: "Northeast",
      title: "NE",
    }),
  ],
  [
    Position.West,
    new TicTacToeMove({
      description: "West",
      title: "W",
    }),
  ],
  [
    Position.Center,
    new TicTacToeMove({
      description: "Center",
      title: "C",
    }),
  ],
  [
    Position.East,
    new TicTacToeMove({
      description: "East",
      title: "E",
    }),
  ],
  [
    Position.Southwest,
    new TicTacToeMove({
      description: "Southwest",
      title: "SW",
    }),
  ],
  [
    Position.South,
    new TicTacToeMove({
      description: "South",
      title: "S",
    }),
  ],
  [
    Position.Southeast,
    new TicTacToeMove({
      description: "Southeast",
      title: "SE",
    }),
  ],
]);

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

  public getMoveAt(position: Position): TicTacToeMove {
    const move = this.moves.get(position);
    if (typeof move === "undefined")
      throw Error(`Move at position ${position} does not exist`);
    return move;
  }
}
