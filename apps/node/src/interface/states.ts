import { recordOfSnowballStatesWithData } from "@repo/games/Snowball/game/State.test/records.js";
import { recordOfTicTacToeStatesWithData } from "@repo/games/TicTacToe/game/State.test/records.js";

const keysOfStates = {
  gameIsTicTacToeAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    "gameIsTicTacToeAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  snowball: "snowball",
} as const;
type KeyOfState = (typeof keysOfStates)[keyof typeof keysOfStates];

const selectStateUsingKeyOfState = (keyOfState: KeyOfState) => {
  switch (keyOfState) {
    case "gameIsTicTacToeAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsWithDataAndIndexInWhichSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsWithDataAndIndexInWhichSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    case "snowball": {
      return recordOfSnowballStatesWithData
        .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
        .state;
    }
    default: {
      throw new Error("Invalid state.");
    }
  }
};

export type { KeyOfState };
export { keysOfStates, selectStateUsingKeyOfState };
