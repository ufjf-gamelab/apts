import { TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";
import { Position } from "./types";

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
    position: Position.Northwest,
    title: "NW",
  }),
  [MoveKey.North]: new TicTacToeMove({
    description: "North",
    position: Position.North,
    title: "N",
  }),
  [MoveKey.Northeast]: new TicTacToeMove({
    description: "Northeast",
    position: Position.Northeast,
    title: "NE",
  }),
  [MoveKey.West]: new TicTacToeMove({
    description: "West",
    position: Position.West,
    title: "W",
  }),
  [MoveKey.Center]: new TicTacToeMove({
    description: "Center",
    position: Position.Center,
    title: "C",
  }),
  [MoveKey.East]: new TicTacToeMove({
    description: "East",
    position: Position.East,
    title: "E",
  }),
  [MoveKey.Southwest]: new TicTacToeMove({
    description: "Southwest",
    position: Position.Southwest,
    title: "SW",
  }),
  [MoveKey.South]: new TicTacToeMove({
    description: "South",
    position: Position.South,
    title: "S",
  }),
  [MoveKey.Southeast]: new TicTacToeMove({
    description: "Southeast",
    position: Position.Southeast,
    title: "SE",
  }),
};
