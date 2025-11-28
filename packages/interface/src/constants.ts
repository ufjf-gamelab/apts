const MODES_OF_GAMEPLAY = {
  computerVersusComputer: "CvC",
  playerVersusComputer: "PvC",
  playerVersusPlayer: "PvP",
} as const;

const NAMES_OF_GAMES = {
  // Connect4 = "connect4",
  ticTacToe: "Tic-Tac-Toe",
} as const;

export { MODES_OF_GAMEPLAY, NAMES_OF_GAMES };
