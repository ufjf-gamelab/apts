import localForage from "localforage";

import { Game } from "../model/game";

// Configure LocalForage
localForage.config({
  name: "apts_database", // Name of the database
  version: 1.0, // Database version
  description: "Local storage for APTS", // Description for the database
  // size: 5 * Math.pow(1024, 2), // Size of the database in bytes (5 MB in this example)
  driver: [localForage.INDEXEDDB, localForage.LOCALSTORAGE], // Preferred storage drivers in order
});

// This code runs once localForage has fully initialized the selected driver.
localForage
  .ready()
  .then(() => {
    console.log(localForage.driver());
  })
  .catch((e) => {
    console.log(e);
  });

// Stores
export const GameStore = localForage.createInstance({
  name: "apts_database",
  storeName: "GameStore",
});

const ticTacToe: Game = new Game(
  "1",
  "Tic-tac-toe",
  ["Unknown"],
  "A simple game",
);
const connectFour: Game = new Game(
  "2",
  "Connect Four",
  ["Unknown"],
  "Another simple game",
);
const chess: Game = new Game("3", "Chess", ["Unknown"], "A complex game");

// Store data
try {
  const result = GameStore.setItem(ticTacToe.getId(), ticTacToe.serialize());
} catch (error) {
  console.error("Error storing data:", error);
}

try {
  const result = GameStore.setItem(
    connectFour.getId(),
    connectFour.serialize(),
  );
} catch (error) {
  console.error("Error storing data:", error);
}

try {
  const result = GameStore.setItem(chess.getId(), chess.serialize());
} catch (error) {
  console.error("Error storing data:", error);
}

// // Retrieve data
// localForage
//   .getItem("userConfig")
//   .then((data) => {
//     console.log("Retrieved data:", data);
//   })
//   .catch((error) => {
//     console.error("Error retrieving data:", error);
//   });
