import State from "src/engine/Game/State";
import { Integer } from "src/types";
import Game from "../../engine/Game/Game";
import { TicTacToeMove, TicTacToeMoveParams } from "./Move";
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

export default class TicTacToeGame extends Game<TicTacToeMove> {
  private readonly quantityOfRows: TicTacToeGameParams["quantityOfRows"];
  private readonly quantityOfColumns: TicTacToeGameParams["quantityOfColumns"];

  constructor({ quantityOfColumns, quantityOfRows }: TicTacToeGameParams) {
    const quantityOfSlots: Integer = quantityOfColumns * quantityOfRows;

    const moves: TicTacToeMoveParams[] = [
      {
        description: "Northwest",
        position: Position.Northwest,
        title: "NW",
      },
      {
        description: "North",
        position: Position.North,
        title: "N",
      },
      {
        description: "Northeast",
        position: Position.Northeast,
        title: "NE",
      },
      {
        description: "West",
        position: Position.West,
        title: "W",
      },
      {
        description: "Center",
        position: Position.Center,
        title: "C",
      },
      {
        description: "East",
        position: Position.East,
        title: "E",
      },
      {
        description: "Southwest",
        position: Position.Southwest,
        title: "SW",
      },
      {
        description: "South",
        position: Position.South,
        title: "S",
      },
      {
        description: "Southeast",
        position: Position.Southeast,
        title: "SE",
      },
    ];

    super({
      moves: TicTacToeMove.instantiateMoves(moves),
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
    const move = this.moves[position];
    if (typeof move === "undefined")
      throw Error(`Move at position ${position} does not exist`);
    return move;
  }
}
