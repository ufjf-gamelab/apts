import { TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";

export enum PlayerKey {
  X,
  O,
}

export const players = new Map<PlayerKey, TicTacToePlayer>([
  [
    PlayerKey.X,
    new TicTacToePlayer({
      name: "Player X",
      symbol: "X",
    }),
  ],
  [
    PlayerKey.O,
    new TicTacToePlayer({
      name: "Player O",
      symbol: "O",
    }),
  ],
]);

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

export const moves = new Map<MoveKey, TicTacToeMove>([
  [
    MoveKey.Northwest,
    new TicTacToeMove({
      description: "Northwest move",
      position: { columnIndex: 0, rowIndex: 0 },
      title: "Northwest",
    }),
  ],
  [
    MoveKey.North,
    new TicTacToeMove({
      description: "North move",
      position: { columnIndex: 1, rowIndex: 0 },
      title: "North",
    }),
  ],
  [
    MoveKey.Northeast,
    new TicTacToeMove({
      description: "Northeast move",
      position: { columnIndex: 2, rowIndex: 0 },
      title: "Northeast",
    }),
  ],
  [
    MoveKey.West,
    new TicTacToeMove({
      description: "West move",
      position: { columnIndex: 0, rowIndex: 1 },
      title: "West",
    }),
  ],
  [
    MoveKey.Center,
    new TicTacToeMove({
      description: "Center move",
      position: { columnIndex: 1, rowIndex: 1 },
      title: "Center",
    }),
  ],
  [
    MoveKey.East,
    new TicTacToeMove({
      description: "East move",
      position: { columnIndex: 2, rowIndex: 1 },
      title: "East",
    }),
  ],
  [
    MoveKey.Southwest,
    new TicTacToeMove({
      description: "Southwest move",
      position: { columnIndex: 0, rowIndex: 2 },
      title: "Southwest",
    }),
  ],
  [
    MoveKey.South,
    new TicTacToeMove({
      description: "South move",
      position: { columnIndex: 1, rowIndex: 2 },
      title: "South",
    }),
  ],
  [
    MoveKey.Southeast,
    new TicTacToeMove({
      description: "Southeast move",
      position: { columnIndex: 2, rowIndex: 2 },
      title: "Southeast",
    }),
  ],
]);
