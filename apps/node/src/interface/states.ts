import { recordOfConnectFourStatesWithData } from "@repo/games/ConnectFour/game/ConnectFourState.test/records.js";
import { recordOfSnowballStatesWithData } from "@repo/games/Snowball/game/State.test/records.js";
import { recordOfTicTacToeStatesWithData } from "@repo/games/TicTacToe/game/TicTacToeState.test/records.js";

const keysOfStates = {
  gameIsConnectFourAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    "gameIsConnectFourAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer",
  gameIsSnowballAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    "gameIsSnowballAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer",
  gameIsTicTacToeAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    "gameIsTicTacToeAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C0AreFilledByAliceAndR0C2AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AndR1C2AndR2C0AreFilledByAliceAndR0C2AndR1C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR1C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR1C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR1C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR2C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C0AndR1C0AreFilledByAliceAndR2C2IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C0AndR1C0AreFilledByAliceAndR2C2IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR0C1AndR1C0AndR1C1AreFilledByAliceAndR0C0AndR2C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR0C1AndR1C0AndR1C1AreFilledByAliceAndR0C0AndR2C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
  gameIsTicTacToeAndSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer:
    "gameIsTicTacToeAndSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer",
} as const;
type KeyOfState = (typeof keysOfStates)[keyof typeof keysOfStates];

const selectStateUsingKeyOfState = (keyOfState: KeyOfState) => {
  switch (keyOfState) {
    case "gameIsConnectFourAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer": {
      return recordOfConnectFourStatesWithData
        .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
        .state;
    }
    case "gameIsSnowballAndAllSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer": {
      return recordOfSnowballStatesWithData
        .allSlotsAreEmptyAndAliceHas0PointsAndBrunoHas0PointsAndAliceIsTheCurrentPlayer
        .state;
    }
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
    case "gameIsTicTacToeAndSlotsR0C0AndR0C1AreFilledByAliceAndR1C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR0C0AndR0C1AreFilledByAliceAndR1C0IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
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
        .slotsR0C0AndR1C0AreFilledByAliceAndR0C1IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR0C0AndR1C0AreFilledByAliceAndR2C2IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR0C0AndR1C0AreFilledByAliceAndR2C2IsFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR0C1AndR1C0AndR1C1AreFilledByAliceAndR0C0AndR2C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR0C1AndR1C0AndR1C1AreFilledByAliceAndR0C0AndR2C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    case "gameIsTicTacToeAndSlotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer": {
      return recordOfTicTacToeStatesWithData
        .slotsR1C0AndR1C2AndR2C0AreFilledByAliceAndR0C0AndR1C1AreFilledByBrunoAndAliceHas0PointsAndBrunoHas0PointsAndBrunoIsTheCurrentPlayer
        .state;
    }
    default: {
      throw new Error("Invalid state.");
    }
  }
};

export type { KeyOfState };
export { keysOfStates, selectStateUsingKeyOfState };
