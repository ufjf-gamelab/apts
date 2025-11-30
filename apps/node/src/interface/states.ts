import { recordOfSnowballStatesWithData } from "@repo/games/Snowball/game/State.test/records.js";
import { recordOfTicTacToeStatesWithData } from "@repo/games/TicTacToe/game/State.test/records.js";

const keysOfStates = {
  gameIsTicTacToeAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    "gameIsTicTacToeAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer",
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
    case "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
        .state;
    }
    case "snowball": {
      return recordOfSnowballStatesWithData
        .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
        .state;
    }
    default:
      throw new Error("Invalid state.");
  }
};

export type { KeyOfState };
export { keysOfStates, selectStateUsingKeyOfState };
