import { MoveKey } from "src/engine/Game/Move";
import State from "src/engine/Game/State";
import { INCREMENT_ONE, Integer } from "src/types";
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

  public getKeysOfTheValidMoves(
    state: State<this, TicTacToeMove>,
  ): Set<MoveKey> {
    const validMoves = new Set<MoveKey>();
    for (
      let currentRowIndex = 0;
      currentRowIndex < this.getQuantityOfRows();
      currentRowIndex += INCREMENT_ONE
    ) {
      for (
        let currentColumnIndex = 0;
        currentColumnIndex < this.getQuantityOfColumns();
        currentColumnIndex += INCREMENT_ONE
      ) {
        const position =
          currentRowIndex * this.getQuantityOfColumns() + currentColumnIndex;
        const slot: Slot = state.getSlotAt(position);

        // If the cell is empty, it is a valid move
        if (slot === Slot.Empty) {
          const move = this.moves.get(position);
          if (typeof move === "undefined")
            throw Error(`Move ${position} is undefined`);

          validMoves.add(position);
        }
      }
    }
    return validMoves;
  }

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
      lastAssertedPosition: null,
      player: Player.X,
      scoreboard: new Map([
        [Player.X, Outcome.Draw],
        [Player.O, Outcome.Draw],
      ]),
      slots,
    }) as unknown as State<this, TicTacToeMove>;
    return initialState;
  }
}
