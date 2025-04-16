import TicTacToeMove from "./Move.js";
import TicTacToePlayer from "./Player.js";

export enum Channel {
  None = 1,
  O = 0,
  X = 2,
}

export enum PlayerKey {
  X,
  O,
}

export enum Slot {
  Empty = 0,
  O = -1,
  X = 1,
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
    position: { indexOfColumn: 0, indexOfRow: 0 },
    title: "NW",
  }),
  new TicTacToeMove({
    description: "North",
    position: { indexOfColumn: 1, indexOfRow: 0 },
    title: "N",
  }),
  new TicTacToeMove({
    description: "Northeast",
    position: { indexOfColumn: 2, indexOfRow: 0 },
    title: "NE",
  }),
  new TicTacToeMove({
    description: "West",
    position: { indexOfColumn: 0, indexOfRow: 1 },
    title: "W",
  }),
  new TicTacToeMove({
    description: "Center",
    position: { indexOfColumn: 1, indexOfRow: 1 },
    title: "C",
  }),
  new TicTacToeMove({
    description: "East",
    position: { indexOfColumn: 2, indexOfRow: 1 },
    title: "E",
  }),
  new TicTacToeMove({
    description: "Southwest",
    position: { indexOfColumn: 0, indexOfRow: 2 },
    title: "SW",
  }),
  new TicTacToeMove({
    description: "South",
    position: { indexOfColumn: 1, indexOfRow: 2 },
    title: "S",
  }),
  new TicTacToeMove({
    description: "Southeast",
    position: { indexOfColumn: 2, indexOfRow: 2 },
    title: "SE",
  }),
];
