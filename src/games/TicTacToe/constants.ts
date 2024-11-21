import { TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";

export enum PlayerKey {
  X,
  O,
}

export const players: { [key in PlayerKey]: TicTacToePlayer } = {
  [PlayerKey.X]: new TicTacToePlayer({ name: "Player X", symbol: "X" }),
  [PlayerKey.O]: new TicTacToePlayer({ name: "Player O", symbol: "O" }),
} as const;

export enum MoveKey {
  Northwest,
  North,
  Northeast,
  West,
  Center,
  East,
  Southwest,
  South,
  Southeast,
}

export const moves: { [key in MoveKey]: TicTacToeMove } = {
  [MoveKey.Northwest]: new TicTacToeMove({
    description: "Northwest",
    position: { columnIndex: 0, rowIndex: 0 },
    title: "NW",
  }),
  [MoveKey.North]: new TicTacToeMove({
    description: "North",
    position: { columnIndex: 1, rowIndex: 0 },
    title: "N",
  }),
  [MoveKey.Northeast]: new TicTacToeMove({
    description: "Northeast",
    position: { columnIndex: 2, rowIndex: 0 },
    title: "NE",
  }),
  [MoveKey.West]: new TicTacToeMove({
    description: "West",
    position: { columnIndex: 0, rowIndex: 1 },
    title: "W",
  }),
  [MoveKey.Center]: new TicTacToeMove({
    description: "Center",
    position: { columnIndex: 1, rowIndex: 1 },
    title: "C",
  }),
  [MoveKey.East]: new TicTacToeMove({
    description: "East",
    position: { columnIndex: 2, rowIndex: 1 },
    title: "E",
  }),
  [MoveKey.Southwest]: new TicTacToeMove({
    description: "Southwest",
    position: { columnIndex: 0, rowIndex: 2 },
    title: "SW",
  }),
  [MoveKey.South]: new TicTacToeMove({
    description: "South",
    position: { columnIndex: 1, rowIndex: 2 },
    title: "S",
  }),
  [MoveKey.Southeast]: new TicTacToeMove({
    description: "Southeast",
    position: { columnIndex: 2, rowIndex: 2 },
    title: "SE",
  }),
};
