export enum Player {
  X = 1,
  O = -1,
}

export enum Slot {
  Empty = 0,
  X = Player.X,
  O = Player.O,
}

export enum Channel {
  O = 0,
  None = 1,
  X = 2,
}

export enum Move {
  Northwest = 0,
  North = 1,
  Northeast = 2,
  West = 3,
  Center = 4,
  East = 5,
  Southwest = 6,
  South = 7,
  Southeast = 8,
}
