import TicTacToeMove from "./Move.js";
import TicTacToePlayer from "./Player.js";

export enum Slot {
  Empty = 0,
  X = 1,
  O = -1,
}

export enum Channel {
  O = 0,
  None = 1,
  X = 2,
}

export enum PlayerKey {
  X,
  O,
}

export const players: TicTacToePlayer[] = [
  new TicTacToePlayer({ name: "Player X", symbol: "X" }),
  new TicTacToePlayer({ name: "Player O", symbol: "O" }),
];

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

export const moves: TicTacToeMove[] = [
  new TicTacToeMove({
    description: "Northwest",
    position: { columnIndex: 0, rowIndex: 0 },
    title: "NW",
  }),
  new TicTacToeMove({
    description: "North",
    position: { columnIndex: 1, rowIndex: 0 },
    title: "N",
  }),
  new TicTacToeMove({
    description: "Northeast",
    position: { columnIndex: 2, rowIndex: 0 },
    title: "NE",
  }),
  new TicTacToeMove({
    description: "West",
    position: { columnIndex: 0, rowIndex: 1 },
    title: "W",
  }),
  new TicTacToeMove({
    description: "Center",
    position: { columnIndex: 1, rowIndex: 1 },
    title: "C",
  }),
  new TicTacToeMove({
    description: "East",
    position: { columnIndex: 2, rowIndex: 1 },
    title: "E",
  }),
  new TicTacToeMove({
    description: "Southwest",
    position: { columnIndex: 0, rowIndex: 2 },
    title: "SW",
  }),
  new TicTacToeMove({
    description: "South",
    position: { columnIndex: 1, rowIndex: 2 },
    title: "S",
  }),
  new TicTacToeMove({
    description: "Southeast",
    position: { columnIndex: 2, rowIndex: 2 },
    title: "SE",
  }),
];
